import translations, { languages } from './i18n/translations.js';

const { createApp, ref, computed, watch, onMounted } = Vue;

createApp({
    setup() {
        // 语言设置
        const currentLanguage = ref(localStorage.getItem('owb_language') || navigator.language || 'zh-CN');
        
        // 翻译函数
        const t = (key) => {
            const keys = key.split('.');
            let value = translations[currentLanguage.value];
            for (const k of keys) {
                if (value === undefined) return key;
                value = value[k];
            }
            return value || key;
        };
        
        // 切换语言
        const changeLanguage = () => {
            localStorage.setItem('owb_language', currentLanguage.value);
            document.documentElement.setAttribute('lang', currentLanguage.value);
            // 更新页面标题
            document.title = t('title');
        };

        // 选择语言并关闭下拉菜单
        const selectLanguage = (langCode) => {
            currentLanguage.value = langCode;
            changeLanguage();
            // 关闭下拉菜单
            document.activeElement.blur();
        };

        // 主题设置
        const theme = ref('light');
        
        // 表单数据
        const formData = ref({
            workerUrl: '',
            prefix: '',
            operation: 'install',
            telegramUid: '',
            botToken: ''
        });

        // 错误提示
        const errors = ref({
            workerUrl: '',
            prefix: '',
            telegramUid: '',
            botToken: ''
        });

        // 生成的 URL
        const generatedUrl = ref('');
        
        // 是否显示历史记录下拉框
        const showHistory = ref(false);
        
        // URL历史记录
        const urlHistory = ref([]);
        
        // 跨域错误标志
        const isCorsError = ref(false);

        // 请求结果
        const result = ref('');
        const resultType = ref('info');

        // 计算属性：按钮文本
        const submitButtonText = computed(() => {
            return formData.value.operation === 'install' 
                ? t('button.install') 
                : t('button.uninstall');
        });

        // 计算属性：结果标题
        const resultTitle = computed(() => {
            return t(`result.${resultType.value}`);
        });

        // 计算属性：结果样式类
        const resultClass = computed(() => {
            switch (resultType.value) {
                case 'success':
                    return 'alert-success';
                case 'error':
                    return 'alert-error';
                default:
                    return 'alert-info';
            }
        });
        
        // 主题切换功能
        function toggleTheme() {
            theme.value = theme.value === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', theme.value);
            localStorage.setItem('owb_theme', theme.value);
        }
        
        // 检测系统主题偏好
        function detectSystemTheme() {
            // 首先检查用户是否已经设置了主题偏好
            const savedTheme = localStorage.getItem('owb_theme');
            if (savedTheme) {
                theme.value = savedTheme;
                document.documentElement.setAttribute('data-theme', savedTheme);
                return;
            }
            
            // 检测系统主题偏好
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                theme.value = 'dark';
                document.documentElement.setAttribute('data-theme', 'dark');
            }
            
            // 监听系统主题偏好变化
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
                // 仅当用户未手动设置主题时才跟随系统
                if (!localStorage.getItem('owb_theme')) {
                    const newTheme = e.matches ? 'dark' : 'light';
                    theme.value = newTheme;
                    document.documentElement.setAttribute('data-theme', newTheme);
                }
            });
        }
        
        // 组件挂载时加载历史记录和检测主题
        onMounted(() => {
            loadHistory();
            detectSystemTheme();
            changeLanguage(); // 初始化语言设置
        });
        
        // 延迟隐藏历史记录
        function hideHistoryWithDelay() {
            window.setTimeout(() => {
                showHistory.value = false;
            }, 200);
        }

        // 当操作类型改变时，清空生成的 URL 和结果
        watch(() => formData.value.operation, () => {
            generatedUrl.value = '';
            result.value = '';
            isCorsError.value = false;
        });
        
        // 加载历史记录
        function loadHistory() {
            const savedHistory = localStorage.getItem('owb_url_history');
            if (savedHistory) {
                try {
                    urlHistory.value = JSON.parse(savedHistory);
                } catch (error) {
                    console.error('解析历史记录失败:', error);
                    urlHistory.value = [];
                }
            }
        }
        
        // 保存历史记录
        function saveHistory() {
            if (!formData.value.workerUrl || !formData.value.prefix) return;
            
            // 检查是否已存在相同的URL
            const existingIndex = urlHistory.value.findIndex(
                item => item.workerUrl === formData.value.workerUrl
            );
            
            // 如果存在，更新前缀并移到顶部
            if (existingIndex !== -1) {
                urlHistory.value[existingIndex].prefix = formData.value.prefix;
                const item = urlHistory.value.splice(existingIndex, 1)[0];
                urlHistory.value.unshift(item);
            } else {
                // 如果不存在，添加新记录
                urlHistory.value.unshift({
                    workerUrl: formData.value.workerUrl,
                    prefix: formData.value.prefix
                });
                
                // 限制历史记录数量为10
                if (urlHistory.value.length > 10) {
                    urlHistory.value.pop();
                }
            }
            
            // 保存到localStorage
            localStorage.setItem('owb_url_history', JSON.stringify(urlHistory.value));
        }
        
        // 选择历史记录
        function selectHistory(item) {
            formData.value.workerUrl = item.workerUrl;
            formData.value.prefix = item.prefix;
            showHistory.value = false;
        }
        
        // 删除历史记录
        function removeHistory(index) {
            urlHistory.value.splice(index, 1);
            localStorage.setItem('owb_url_history', JSON.stringify(urlHistory.value));
        }

        // 验证表单
        function validateForm() {
            let isValid = true;
            
            // 重置错误信息
            Object.keys(errors.value).forEach(key => {
                errors.value[key] = '';
            });

            // 验证 Worker URL
            if (!formData.value.workerUrl.trim()) {
                errors.value.workerUrl = t('validation.required') + ' ' + t('workerUrl.label');
                isValid = false;
            } else if (!/^https?:\/\//.test(formData.value.workerUrl)) {
                errors.value.workerUrl = t('validation.invalidUrl');
                isValid = false;
            }

            // 验证前缀
            if (!formData.value.prefix.trim()) {
                errors.value.prefix = t('validation.required') + ' ' + t('prefix.label');
                isValid = false;
            }

            // 验证 Telegram UID（仅在安装模式下）
            if (formData.value.operation === 'install' && !formData.value.telegramUid.trim()) {
                errors.value.telegramUid = t('validation.required') + ' ' + t('telegramUid.label');
                isValid = false;
            }

            // 验证 Bot API Token
            if (!formData.value.botToken.trim()) {
                errors.value.botToken = t('validation.required') + ' ' + t('botToken.label');
                isValid = false;
            }

            return isValid;
        }

        // 生成请求 URL
        function generateUrl() {
            if (!validateForm()) return false;

            // 删除URL尾部的斜杠
            let baseUrl = formData.value.workerUrl.replace(/\/+$/, '');
            let prefix = formData.value.prefix.trim();
            
            if (formData.value.operation === 'install') {
                generatedUrl.value = `${baseUrl}/${prefix}/install/${formData.value.telegramUid.trim()}/${formData.value.botToken.trim()}`;
            } else {
                generatedUrl.value = `${baseUrl}/${prefix}/uninstall/${formData.value.botToken.trim()}`;
            }
            
            // 保存URL历史
            saveHistory();
            
            // 清空之前的结果
            result.value = '';
            isCorsError.value = false;
            
            return true;
        }
        
        // 生成URL并执行
        function generateAndExecute() {
            if (generateUrl()) {
                executeRequest();
            }
        }

        // 执行请求
        async function executeRequest() {
            if (!generatedUrl.value) return;

            try {
                resultType.value = 'info';
                result.value = t('result.loading');
                isCorsError.value = false;

                const response = await fetch(generatedUrl.value);
                const text = await response.text();

                if (response.ok) {
                    resultType.value = 'success';
                    result.value = text || t('result.success');
                } else {
                    resultType.value = 'error';
                    result.value = text || `${t('result.error')}: ${response.status} ${response.statusText}`;
                }
            } catch (error) {
                resultType.value = 'error';
                
                if (error.message.includes('CORS') || error.message.includes('跨域') || error.message.includes('cross-origin')) {
                    isCorsError.value = true;
                    result.value = t('result.corsError');
                } else {
                    result.value = `${t('result.error')}: ${error.message}`;
                }
            }
        }

        return {
            languages,
            currentLanguage,
            t,
            changeLanguage,
            selectLanguage,
            theme,
            toggleTheme,
            formData,
            errors,
            generatedUrl,
            showHistory,
            urlHistory,
            isCorsError,
            result,
            resultType,
            resultTitle,
            resultClass,
            submitButtonText,
            generateUrl,
            generateAndExecute,
            executeRequest,
            selectHistory,
            removeHistory,
            hideHistoryWithDelay,
        };
    }
}).mount('#app'); 
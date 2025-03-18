const translations = {
  'zh-CN': {
    title: 'Open Wegram Bot - 配置工具',
    subtitle: '一个让人呼吸顺畅的 Telegram 双向私聊机器人',
    workerUrl: {
      label: 'Worker URL',
      placeholder: '例如：https://your-project.workers.dev',
      description: '您的 Cloudflare Worker 或 Vercel 服务地址'
    },
    prefix: {
      label: 'URL 前缀',
      placeholder: '例如：public',
      description: '您设置的 PREFIX 环境变量值'
    },
    operation: {
      label: '操作类型',
      install: '安装机器人',
      uninstall: '卸载机器人'
    },
    telegramUid: {
      label: 'Telegram UID',
      placeholder: '例如：123456789',
      description: '您的 Telegram 用户 ID'
    },
    botToken: {
      label: 'Bot API Token',
      placeholder: '例如：000000000:ABCDEFGhijklmnopqrstuvwxyz',
      description: '您从 BotFather 获取的 Bot API Token'
    },
    generatedUrl: {
      label: '生成的请求 URL'
    },
    button: {
      install: '生成安装 URL并访问',
      uninstall: '生成卸载 URL并访问'
    },
    result: {
      success: '操作成功',
      error: '操作失败',
      info: '操作信息',
      loading: '正在执行请求，请稍候...',
      corsError: '由于浏览器的跨域限制，无法直接发送请求。请点击链接在新窗口中打开URL进行访问。'
    },
    validation: {
      required: '请输入',
      invalidUrl: '请输入有效的 URL，以 http:// 或 https:// 开头'
    },
    footer: {
      copyright: 'Open Wegram Bot ©',
      repository: 'GitHub 仓库'
    }
  },
  'zh-TW': {
    title: 'Open Wegram Bot - 配置工具',
    subtitle: '一個讓人呼吸順暢的 Telegram 雙向私聊機器人',
    workerUrl: {
      label: 'Worker URL',
      placeholder: '例如：https://your-project.workers.dev',
      description: '您的 Cloudflare Worker 或 Vercel 服務地址'
    },
    prefix: {
      label: 'URL 前綴',
      placeholder: '例如：public',
      description: '您設置的 PREFIX 環境變量值'
    },
    operation: {
      label: '操作類型',
      install: '安裝機器人',
      uninstall: '卸載機器人'
    },
    telegramUid: {
      label: 'Telegram UID',
      placeholder: '例如：123456789',
      description: '您的 Telegram 用戶 ID'
    },
    botToken: {
      label: 'Bot API Token',
      placeholder: '例如：000000000:ABCDEFGhijklmnopqrstuvwxyz',
      description: '您從 BotFather 獲取的 Bot API Token'
    },
    generatedUrl: {
      label: '生成的請求 URL'
    },
    button: {
      install: '生成安裝 URL並訪問',
      uninstall: '生成卸載 URL並訪問'
    },
    result: {
      success: '操作成功',
      error: '操作失敗',
      info: '操作信息',
      loading: '正在執行請求，請稍候...',
      corsError: '由於瀏覽器的跨域限制，無法直接發送請求。請點擊鏈接在新窗口中打開URL進行訪問。'
    },
    validation: {
      required: '請輸入',
      invalidUrl: '請輸入有效的 URL，以 http:// 或 https:// 開頭'
    },
    footer: {
      copyright: 'Open Wegram Bot ©',
      repository: 'GitHub 倉庫'
    }
  },
  'en': {
    title: 'Open Wegram Bot - Configuration Tool',
    subtitle: 'A smooth Telegram two-way private chat bot',
    workerUrl: {
      label: 'Worker URL',
      placeholder: 'e.g., https://your-project.workers.dev',
      description: 'Your Cloudflare Worker or Vercel service address'
    },
    prefix: {
      label: 'URL Prefix',
      placeholder: 'e.g., public',
      description: 'Your PREFIX environment variable value'
    },
    operation: {
      label: 'Operation Type',
      install: 'Install Bot',
      uninstall: 'Uninstall Bot'
    },
    telegramUid: {
      label: 'Telegram UID',
      placeholder: 'e.g., 123456789',
      description: 'Your Telegram User ID'
    },
    botToken: {
      label: 'Bot API Token',
      placeholder: 'e.g., 000000000:ABCDEFGhijklmnopqrstuvwxyz',
      description: 'Your Bot API Token from BotFather'
    },
    generatedUrl: {
      label: 'Generated Request URL'
    },
    button: {
      install: 'Generate Install URL and Visit',
      uninstall: 'Generate Uninstall URL and Visit'
    },
    result: {
      success: 'Operation Successful',
      error: 'Operation Failed',
      info: 'Operation Info',
      loading: 'Executing request, please wait...',
      corsError: 'Due to browser CORS restrictions, direct request is not possible. Please click the link to open the URL in a new window.'
    },
    validation: {
      required: 'Please enter',
      invalidUrl: 'Please enter a valid URL starting with http:// or https://'
    },
    footer: {
      copyright: 'Open Wegram Bot ©',
      repository: 'GitHub Repository'
    }
  },
  'ja': {
    title: 'Open Wegram Bot - 設定ツール',
    subtitle: 'スムーズな Telegram 双方向プライベートチャットボット',
    workerUrl: {
      label: 'Worker URL',
      placeholder: '例：https://your-project.workers.dev',
      description: 'Cloudflare Worker または Vercel サービスアドレス'
    },
    prefix: {
      label: 'URL プレフィックス',
      placeholder: '例：public',
      description: '設定した PREFIX 環境変数値'
    },
    operation: {
      label: '操作タイプ',
      install: 'ボットをインストール',
      uninstall: 'ボットをアンインストール'
    },
    telegramUid: {
      label: 'Telegram UID',
      placeholder: '例：123456789',
      description: 'あなたの Telegram ユーザーID'
    },
    botToken: {
      label: 'Bot API Token',
      placeholder: '例：000000000:ABCDEFGhijklmnopqrstuvwxyz',
      description: 'BotFather から取得した Bot API Token'
    },
    generatedUrl: {
      label: '生成されたリクエスト URL'
    },
    button: {
      install: 'インストール URL を生成して訪問',
      uninstall: 'アンインストール URL を生成して訪問'
    },
    result: {
      success: '操作成功',
      error: '操作失敗',
      info: '操作情報',
      loading: 'リクエストを実行中、お待ちください...',
      corsError: 'ブラウザの CORS 制限により、直接リクエストできません。リンクをクリックして新しいウィンドウで URL を開いてください。'
    },
    validation: {
      required: '入力してください',
      invalidUrl: 'http:// または https:// で始まる有効な URL を入力してください'
    },
    footer: {
      copyright: 'Open Wegram Bot ©',
      repository: 'GitHub リポジトリ'
    }
  },
  'ko': {
    title: 'Open Wegram Bot - 설정 도구',
    subtitle: '원활한 Telegram 양방향 개인 채팅 봇',
    workerUrl: {
      label: 'Worker URL',
      placeholder: '예: https://your-project.workers.dev',
      description: 'Cloudflare Worker 또는 Vercel 서비스 주소'
    },
    prefix: {
      label: 'URL 접두사',
      placeholder: '예: public',
      description: '설정한 PREFIX 환경 변수 값'
    },
    operation: {
      label: '작업 유형',
      install: '봇 설치',
      uninstall: '봇 제거'
    },
    telegramUid: {
      label: 'Telegram UID',
      placeholder: '예: 123456789',
      description: '귀하의 Telegram 사용자 ID'
    },
    botToken: {
      label: 'Bot API Token',
      placeholder: '예: 000000000:ABCDEFGhijklmnopqrstuvwxyz',
      description: 'BotFather에서 받은 Bot API Token'
    },
    generatedUrl: {
      label: '생성된 요청 URL'
    },
    button: {
      install: '설치 URL 생성 및 방문',
      uninstall: '제거 URL 생성 및 방문'
    },
    result: {
      success: '작업 성공',
      error: '작업 실패',
      info: '작업 정보',
      loading: '요청을 실행 중입니다. 잠시만 기다려주세요...',
      corsError: '브라우저의 CORS 제한으로 인해 직접 요청할 수 없습니다. 링크를 클릭하여 새 창에서 URL을 열어주세요.'
    },
    validation: {
      required: '입력해 주세요',
      invalidUrl: 'http:// 또는 https://로 시작하는 유효한 URL을 입력해 주세요'
    },
    footer: {
      copyright: 'Open Wegram Bot ©',
      repository: 'GitHub 저장소'
    }
  },
  'ru': {
    title: 'Open Wegram Bot - Инструмент настройки',
    subtitle: 'Удобный бот для двустороннего личного общения в Telegram',
    workerUrl: {
      label: 'Worker URL',
      placeholder: 'Например: https://your-project.workers.dev',
      description: 'Ваш адрес службы Cloudflare Worker или Vercel'
    },
    prefix: {
      label: 'Префикс URL',
      placeholder: 'Например: public',
      description: 'Значение переменной окружения PREFIX'
    },
    operation: {
      label: 'Тип операции',
      install: 'Установить бота',
      uninstall: 'Удалить бота'
    },
    telegramUid: {
      label: 'Telegram UID',
      placeholder: 'Например: 123456789',
      description: 'Ваш ID пользователя Telegram'
    },
    botToken: {
      label: 'Bot API Token',
      placeholder: 'Например: 000000000:ABCDEFGhijklmnopqrstuvwxyz',
      description: 'Ваш Bot API Token от BotFather'
    },
    generatedUrl: {
      label: 'Сгенерированный URL запроса'
    },
    button: {
      install: 'Создать URL установки и перейти',
      uninstall: 'Создать URL удаления и перейти'
    },
    result: {
      success: 'Операция выполнена успешно',
      error: 'Операция не удалась',
      info: 'Информация об операции',
      loading: 'Выполнение запроса, пожалуйста, подождите...',
      corsError: 'Из-за ограничений CORS браузера невозможно выполнить прямой запрос. Пожалуйста, нажмите на ссылку, чтобы открыть URL в новом окне.'
    },
    validation: {
      required: 'Пожалуйста, введите',
      invalidUrl: 'Пожалуйста, введите действительный URL, начинающийся с http:// или https://'
    },
    footer: {
      copyright: 'Open Wegram Bot ©',
      repository: 'GitHub репозиторий'
    }
  },
  'fr': {
    title: 'Open Wegram Bot - Outil de configuration',
    subtitle: 'Un bot de chat privé bidirectionnel fluide pour Telegram',
    workerUrl: {
      label: 'Worker URL',
      placeholder: 'Ex : https://your-project.workers.dev',
      description: 'Votre adresse de service Cloudflare Worker ou Vercel'
    },
    prefix: {
      label: 'Préfixe URL',
      placeholder: 'Ex : public',
      description: 'Valeur de la variable d\'environnement PREFIX'
    },
    operation: {
      label: 'Type d\'opération',
      install: 'Installer le bot',
      uninstall: 'Désinstaller le bot'
    },
    telegramUid: {
      label: 'Telegram UID',
      placeholder: 'Ex : 123456789',
      description: 'Votre ID utilisateur Telegram'
    },
    botToken: {
      label: 'Bot API Token',
      placeholder: 'Ex : 000000000:ABCDEFGhijklmnopqrstuvwxyz',
      description: 'Votre Bot API Token de BotFather'
    },
    generatedUrl: {
      label: 'URL de requête générée'
    },
    button: {
      install: 'Générer l\'URL d\'installation et visiter',
      uninstall: 'Générer l\'URL de désinstallation et visiter'
    },
    result: {
      success: 'Opération réussie',
      error: 'Échec de l\'opération',
      info: 'Information sur l\'opération',
      loading: 'Exécution de la requête, veuillez patienter...',
      corsError: 'En raison des restrictions CORS du navigateur, la requête directe n\'est pas possible. Veuillez cliquer sur le lien pour ouvrir l\'URL dans une nouvelle fenêtre.'
    },
    validation: {
      required: 'Veuillez saisir',
      invalidUrl: 'Veuillez saisir une URL valide commençant par http:// ou https://'
    },
    footer: {
      copyright: 'Open Wegram Bot ©',
      repository: 'Dépôt GitHub'
    }
  },
  'de': {
    title: 'Open Wegram Bot - Konfigurationstool',
    subtitle: 'Ein reibungsloser Telegram Zwei-Wege-Privatchat-Bot',
    workerUrl: {
      label: 'Worker URL',
      placeholder: 'z.B.: https://your-project.workers.dev',
      description: 'Ihre Cloudflare Worker oder Vercel Service-Adresse'
    },
    prefix: {
      label: 'URL-Präfix',
      placeholder: 'z.B.: public',
      description: 'Ihr PREFIX Umgebungsvariablenwert'
    },
    operation: {
      label: 'Operationstyp',
      install: 'Bot installieren',
      uninstall: 'Bot deinstallieren'
    },
    telegramUid: {
      label: 'Telegram UID',
      placeholder: 'z.B.: 123456789',
      description: 'Ihre Telegram Benutzer-ID'
    },
    botToken: {
      label: 'Bot API Token',
      placeholder: 'z.B.: 000000000:ABCDEFGhijklmnopqrstuvwxyz',
      description: 'Ihr Bot API Token von BotFather'
    },
    generatedUrl: {
      label: 'Generierte Anfrage-URL'
    },
    button: {
      install: 'Installations-URL generieren und besuchen',
      uninstall: 'Deinstallations-URL generieren und besuchen'
    },
    result: {
      success: 'Operation erfolgreich',
      error: 'Operation fehlgeschlagen',
      info: 'Operationsinformation',
      loading: 'Führe Anfrage aus, bitte warten...',
      corsError: 'Aufgrund von Browser-CORS-Beschränkungen ist eine direkte Anfrage nicht möglich. Bitte klicken Sie auf den Link, um die URL in einem neuen Fenster zu öffnen.'
    },
    validation: {
      required: 'Bitte geben Sie',
      invalidUrl: 'Bitte geben Sie eine gültige URL ein, die mit http:// oder https:// beginnt'
    },
    footer: {
      copyright: 'Open Wegram Bot ©',
      repository: 'GitHub Repository'
    }
  },
  'es': {
    title: 'Open Wegram Bot - Herramienta de configuración',
    subtitle: 'Un bot de chat privado bidireccional fluido para Telegram',
    workerUrl: {
      label: 'Worker URL',
      placeholder: 'Ej.: https://your-project.workers.dev',
      description: 'Su dirección de servicio Cloudflare Worker o Vercel'
    },
    prefix: {
      label: 'Prefijo URL',
      placeholder: 'Ej.: public',
      description: 'Su valor de variable de entorno PREFIX'
    },
    operation: {
      label: 'Tipo de operación',
      install: 'Instalar bot',
      uninstall: 'Desinstalar bot'
    },
    telegramUid: {
      label: 'Telegram UID',
      placeholder: 'Ej.: 123456789',
      description: 'Su ID de usuario de Telegram'
    },
    botToken: {
      label: 'Bot API Token',
      placeholder: 'Ej.: 000000000:ABCDEFGhijklmnopqrstuvwxyz',
      description: 'Su Bot API Token de BotFather'
    },
    generatedUrl: {
      label: 'URL de solicitud generada'
    },
    button: {
      install: 'Generar URL de instalación y visitar',
      uninstall: 'Generar URL de desinstalación y visitar'
    },
    result: {
      success: 'Operación exitosa',
      error: 'Operación fallida',
      info: 'Información de la operación',
      loading: 'Ejecutando solicitud, por favor espere...',
      corsError: 'Debido a las restricciones CORS del navegador, no es posible realizar la solicitud directa. Por favor, haga clic en el enlace para abrir la URL en una nueva ventana.'
    },
    validation: {
      required: 'Por favor ingrese',
      invalidUrl: 'Por favor ingrese una URL válida que comience con http:// o https://'
    },
    footer: {
      copyright: 'Open Wegram Bot ©',
      repository: 'Repositorio GitHub'
    }
  },
  'pt': {
    title: 'Open Wegram Bot - Ferramenta de Configuração',
    subtitle: 'Um bot de chat privado bidirecional suave para Telegram',
    workerUrl: {
      label: 'Worker URL',
      placeholder: 'Ex.: https://your-project.workers.dev',
      description: 'Seu endereço de serviço Cloudflare Worker ou Vercel'
    },
    prefix: {
      label: 'Prefixo URL',
      placeholder: 'Ex.: public',
      description: 'Seu valor de variável de ambiente PREFIX'
    },
    operation: {
      label: 'Tipo de operação',
      install: 'Instalar bot',
      uninstall: 'Desinstalar bot'
    },
    telegramUid: {
      label: 'Telegram UID',
      placeholder: 'Ex.: 123456789',
      description: 'Seu ID de usuário do Telegram'
    },
    botToken: {
      label: 'Bot API Token',
      placeholder: 'Ex.: 000000000:ABCDEFGhijklmnopqrstuvwxyz',
      description: 'Seu Bot API Token do BotFather'
    },
    generatedUrl: {
      label: 'URL de requisição gerada'
    },
    button: {
      install: 'Gerar URL de instalação e visitar',
      uninstall: 'Gerar URL de desinstalação e visitar'
    },
    result: {
      success: 'Operação bem-sucedida',
      error: 'Operação falhou',
      info: 'Informação da operação',
      loading: 'Executando requisição, por favor aguarde...',
      corsError: 'Devido às restrições CORS do navegador, não é possível fazer a requisição direta. Por favor, clique no link para abrir a URL em uma nova janela.'
    },
    validation: {
      required: 'Por favor insira',
      invalidUrl: 'Por favor insira uma URL válida começando com http:// ou https://'
    },
    footer: {
      copyright: 'Open Wegram Bot ©',
      repository: 'Repositório GitHub'
    }
  }
};

export const languages = [
  { code: 'zh-CN', name: '简体中文' },
  { code: 'zh-TW', name: '繁體中文' },
  { code: 'en', name: 'English' },
  { code: 'ja', name: '日本語' },
  { code: 'ko', name: '한국어' },
  { code: 'ru', name: 'Русский' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
  { code: 'es', name: 'Español' },
  { code: 'pt', name: 'Português' }
];

export default translations; 
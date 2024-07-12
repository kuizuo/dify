const translation = {
  title: 'ログ',
  description: 'ログは、アプリケーションの実行状態を記録します。ユーザーの入力やAIの応答などが含まれます。',
  dateTimeFormat: 'MM/DD/YYYY hh:mm A',
  table: {
    header: {
      time: '時間',
      endUser: 'エンドユーザー',
      input: '入力',
      output: '出力',
      summary: 'タイトル',
      messageCount: 'メッセージ数',
      userRate: 'ユーザーレート',
      adminRate: '操作レート',
      startTime: '開始時間',
      status: 'ステータス',
      runtime: 'ランタイム',
      tokens: 'トークン',
      user: 'エンドユーザー',
      version: 'バージョン',
    },
    pagination: {
      previous: '前へ',
      next: '次へ',
    },
    empty: {
      noChat: 'まだ会話はありません',
      noOutput: '出力がありません',
      element: {
        title: '誰かいますか？',
        content: 'ここでは、エンドユーザーとAIアプリケーション間の相互作用を観察し、注釈を付けることで、AIの精度を継続的に向上させます。Webアプリを<shareLink>共有</shareLink>または<testLink>テスト</testLink>してみて、このページに戻ってください。',
      },
    },
  },
  detail: {
    time: '時間',
    conversationId: '会話ID',
    promptTemplate: 'プロンプトテンプレート',
    promptTemplateBeforeChat: 'チャット前のプロンプトテンプレート・システムメッセージとして',
    annotationTip: '{{user}} によってマークされた改善',
    timeConsuming: '',
    second: '秒',
    tokenCost: 'トークン消費',
    loading: '読み込み中',
    operation: {
      like: 'いいね',
      dislike: 'よくない',
      addAnnotation: '改善を追加',
      editAnnotation: '改善を編集',
      annotationPlaceholder: '将来のモデルの微調整やテキスト生成品質の継続的改善のためにAIが返信することを期待する答えを入力してください。',
    },
    variables: '変数',
    uploadImages: 'アップロードされた画像',
  },
  filter: {
    period: {
      today: '今日',
      last7days: '過去7日間',
      last4weeks: '過去4週間',
      last3months: '過去3ヶ月',
      last12months: '過去12ヶ月',
      monthToDate: '月初から今日まで',
      quarterToDate: '四半期初から今日まで',
      yearToDate: '年初から今日まで',
      allTime: 'すべての期間',
    },
    annotation: {
      all: 'すべて',
      annotated: '注釈付きの改善 ({{count}} アイテム)',
      not_annotated: '注釈なし',
    },
  },
  workflowTitle: 'ワークフローログ',
  workflowSubtitle: 'このログは Automate の操作を記録しました。',
  runDetail: {
    title: '会話ログ',
    workflowTitle: 'ログの詳細',
  },
  promptLog: 'プロンプトログ',
  agentLog: 'エージェントログ',
  viewLog: 'ログを表示',
  agentLogDetail: {
    agentMode: 'エージェントモード',
    toolUsed: '使用したツール',
    iterations: '反復',
    iteration: '反復',
    finalProcessing: '最終処理',
  },
}

export default translation

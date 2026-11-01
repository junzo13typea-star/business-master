/**
 * ビジネスエキスパートの道 - 初級編: MBA専門用語マスター（全7カテゴリ・計150問）
 */
window.MBA_CATEGORIES = [
  {
    "id": "strategy",
    "name": "経営戦略 (Strategy)",
    "shortName": "経営戦略",
    "icon": "♟️",
    "color": "#8b5cf6",
    "desc": "全社戦略・3C・5F・VRIO・ブルーオーシャン・競争優位の構築"
  },
  {
    "id": "marketing",
    "name": "マーケティング (Marketing)",
    "shortName": "マーケ",
    "icon": "🎯",
    "color": "#ec4899",
    "desc": "STP・4P/4C・LTV/CAC・ペルソナ・ブランド・顧客体験価値"
  },
  {
    "id": "finance",
    "name": "財務・ファイナンス (Finance & Accounting)",
    "shortName": "財務・会計",
    "icon": "📈",
    "color": "#3b82f6",
    "desc": "NPV・DCF法・WACC・ROIC・企業価値評価・資本コスト"
  },
  {
    "id": "leadership",
    "name": "組織行動・人事 (OB & Leadership)",
    "shortName": "組織・人事",
    "icon": "🤝",
    "color": "#10b981",
    "desc": "心理的安全性・タックマン・変革型リーダーシップ・OKR・動機づけ"
  },
  {
    "id": "operations",
    "name": "オペレーション・SCM (Operations)",
    "shortName": "生産・SCM",
    "icon": "⚙️",
    "color": "#f59e0b",
    "desc": "TOCボトルネック・ブルウィップ効果・トヨタ生産方式・カイゼン"
  },
  {
    "id": "innovation",
    "name": "DX・イノベーション (Innovation)",
    "shortName": "DX・革新",
    "icon": "💡",
    "color": "#06b6d4",
    "desc": "破壊的イノベーション・SaaS指標(ARR/NRR)・アジャイル・デザイン思考"
  },
  {
    "id": "analytics",
    "name": "意思決定・定量分析 (Data Analytics)",
    "shortName": "定量分析",
    "icon": "📊",
    "color": "#6366f1",
    "desc": "MECE・A/Bテスト・意思決定ツリー・期待値・パレート・統計思考"
  }
];

window.MBA_VOCAB_QUESTIONS = [
  {
    "id": "mba-strat-001",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "3C分析",
    "difficulty": "basic",
    "question": "事業の外部環境および内部環境を整理し、成功要因（KSF）を導き出すフレームワーク「3C分析」の3つの要素として正しい組み合わせはどれか。",
    "options": [
      "Customer（市場・顧客）、Competitor（競合）、Company（自社）",
      "Cost（コスト）、Competitor（競合）、Channel（流通）",
      "Customer（市場・顧客）、Company（自社）、Community（地域社会）",
      "Capital（資本）、Competitor（競合）、Customer（顧客）"
    ],
    "answerIndex": 0,
    "explanation": "3C分析はマッキンゼーの大前研一氏が提唱したフレームワークで、Customer（市場・顧客のニーズや規模）、Competitor（競合の動向や強み・弱み）、Company（自社の経営資源・強み）の3つの視点から戦略の基本方針を導き出します。"
  },
  {
    "id": "mba-strat-002",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "ファイブフォース分析 (5 Forces)",
    "difficulty": "basic",
    "question": "マイケル・ポーターが提唱した、業界全体の収益性や構造的魅力を決定づける「5つの競争要因（5 Forces）」に含まれないものはどれか。",
    "options": [
      "売り手（供給者）の交渉力",
      "代替品の脅威",
      "政府・規制当局の介入",
      "買い手（顧客）の交渉力"
    ],
    "answerIndex": 2,
    "explanation": "ポーターの5フォースは①既存競合企業同士の敵対関係、②新規参入の脅威、③代替品の脅威、④買い手の交渉力、⑤売り手の交渉力の5つです。政府や規制はこれら5つの力に影響を与える背景要因（マクロ環境）として位置づけられます。"
  },
  {
    "id": "mba-strat-003",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "VRIO分析",
    "difficulty": "basic",
    "question": "ジェイ・バーニーのリソース・ベースト・ビュー（RBV）に基づくVRIO分析において、企業が「持続的な競争優位」を確立するために必要な4つの評価基準の組み合わせとして正しいものはどれか。",
    "options": [
      "Value（価値）、Rarity（希少性）、Inimitability（模倣困難性）、Organization（組織）",
      "Vision（ビジョン）、Rarity（希少性）、Innovation（革新性）、Operation（運用力）",
      "Value（価値）、ROI（投資対効果）、Inimitability（模倣困難性）、Ownership（所有権）",
      "Volume（規模）、Rarity（希少性）、Identity（独自性）、Organization（組織）"
    ],
    "answerIndex": 0,
    "explanation": "VRIOは企業の内部資源を評価するツールです。価値（V）と希少性（R）があれば一時的優位を得られますが、他社が真似できない模倣困難性（I）とそれを活かす組織体制（O）が揃うことで初めて持続的な競争優位が実現します。"
  },
  {
    "id": "mba-strat-004",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "ブルー・オーシャン戦略",
    "difficulty": "basic",
    "question": "W・チャン・キムとレネ・モボルニュが提唱した「ブルー・オーシャン戦略」の本質的な説明として最も適切なものはどれか。",
    "options": [
      "競合のひしめく既存市場において、徹底的な低価格競争によりシェアトップを奪取する戦略",
      "バリュー・イノベーション（価値とコストの両立）により、競争のない未開拓の新たな市場空間を創造する戦略",
      "海洋資源や環境分野に特化し、ESG投資を呼び込む持続可能型ビジネスモデル",
      "多額の研究開発投資によって最新技術を独占し、特許網で市場参入障壁を構築する戦略"
    ],
    "answerIndex": 1,
    "explanation": "ブルー・オーシャン戦略は、血みどろの競争が繰り広げられる「レッド・オーシャン（既存市場）」を抜け出し、顧客にとって不要な要素を削ぎ落とし（コスト減）、新たな価値要素を付け加える「バリュー・イノベーション」によって未開拓の新市場を創り出す戦略です。"
  },
  {
    "id": "mba-strat-005",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "コア・コンピタンス",
    "difficulty": "standard",
    "question": "C.K.プラハラードとゲイリー・ハメルが定義した「コア・コンピタンス（中核的能力）」の要件として誤っているものはどれか。",
    "options": [
      "多様な市場・製品分野へのアクセスを可能にする広がりがあること",
      "最終製品がもたらす顧客価値・利益に大きく寄与していること",
      "競合他社が真似しにくい（模倣困難である）こと",
      "現行の特定製品ラインにおいて最大の売上高とシェアを占めていること"
    ],
    "answerIndex": 3,
    "explanation": "コア・コンピタンスは製品そのものではなく、製品の背後にある「企業の根源的な技術力や組織的能力」のことです（例：ホンダのエンジン技術、キヤノンの光学・微細加工技術）。単なる特定製品の売上規模は要件ではありません。"
  },
  {
    "id": "mba-strat-006",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "アンゾフの成長マトリクス",
    "difficulty": "basic",
    "question": "イゴール・アンゾフが提唱した事業拡大のマトリクスにおいて、「新製品」を「新市場」に投入する成長戦略を何と呼ぶか。",
    "options": [
      "市場浸透戦略",
      "製品開発戦略",
      "市場開拓戦略",
      "多角化戦略"
    ],
    "answerIndex": 3,
    "explanation": "アンゾフのマトリクスは「既存／新規」の製品と市場で4象限に分類されます。既存×既存＝市場浸透、新規製品×既存市場＝製品開発、既存製品×新規市場＝市場開拓、新規製品×新規市場＝多角化戦略（最もリスクが高い）です。"
  },
  {
    "id": "mba-strat-007",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "ポーターの基本戦略（3類型）",
    "difficulty": "basic",
    "question": "マイケル・ポーターが提唱した競争優位を築くための3つの基本戦略として正しい組み合わせはどれか。",
    "options": [
      "コストリーダーシップ戦略、差別化戦略、集中戦略",
      "価格戦略、ブランド戦略、グローバル戦略",
      "スピード戦略、品質戦略、ニッチ戦略",
      "サプライチェーン戦略、提携戦略、イノベーション戦略"
    ],
    "answerIndex": 0,
    "explanation": "ポーターは、業界全体をターゲットにする「コストリーダーシップ戦略」と「差別化戦略」、特定のセグメント・顧客層に経営資源を集中させる「集中戦略（コスト集中／差別化集中）」の3つに分類しました。"
  },
  {
    "id": "mba-strat-008",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "PPM（プロダクト・ポートフォリオ・マネジメント）",
    "difficulty": "basic",
    "question": "ボストン・コンサルティング・グループ（BCG）が開発したPPMにおいて、「市場成長率が高く、相対的市場シェアが低い」事業象限はどれか。",
    "options": [
      "花形（スター）",
      "金のなる木（キャッシュ・カウ）",
      "問題児（クエスチョン・マーク）",
      "負け犬（ドッグ）"
    ],
    "answerIndex": 2,
    "explanation": "「問題児」は市場が急成長しているもののシェアが低いため、将来スターに育てるために多額の追加投資（資金注入）が必要な事業フェーズです。"
  },
  {
    "id": "mba-strat-009",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "価値連鎖（バリューチェーン）",
    "difficulty": "standard",
    "question": "企業の活動を主活動と支援活動に分類し、どこで付加価値が生み出されているかを分析するバリューチェーンにおいて、「主活動（Primary Activities）」に含まれるものはどれか。",
    "options": [
      "購買物流（インバウンド・ロジスティクス）",
      "技術開発（研究開発・IT）",
      "調達活動（資材・備品の調達）",
      "人事・労務管理"
    ],
    "answerIndex": 0,
    "explanation": "主活動は製品が顧客に届く一連の流れ（購買物流、製造・オペレーション、出荷物流、マーケティング・販売、サービス）の5つです。全社インフラ、人事、技術開発、調達はこれらを支える「支援活動」に分類されます。"
  },
  {
    "id": "mba-strat-010",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "両利きの経営 (Ambidexterity)",
    "difficulty": "standard",
    "question": "チャールズ・オライリーらが提唱した「両利きの経営（Ambidexterity）」において、企業が持続的に成長するために両立すべき2つの行動の組み合わせはどれか。",
    "options": [
      "既存事業の「知の深化（Exploitation）」と、新規事業の「知の探索（Exploration）」",
      "コスト削減の徹底と、株主還元の最大化",
      "国内市場での寡占化と、海外市場への直接投資",
      "トップダウンの意思決定と、ボトムアップの提案制度"
    ],
    "answerIndex": 0,
    "explanation": "「知の深化（既存事業の強みを磨き効率化すること）」だけに偏るとイノベーションが枯渇し、「知の探索（枠を超えて新しい知の組み合わせを探すこと）」ばかりでは収益が安定しません。高収益企業はこの両者を高いレベルで両立させています。"
  },
  {
    "id": "mba-strat-011",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "ネットワーク外部性 (Network Externality)",
    "difficulty": "standard",
    "question": "SNSやプラットフォームビジネスにおいて、ユーザー数が増加するほど既存ユーザーや新規ユーザーにとっての製品・サービスの価値が飛躍的に高まる現象を何と呼ぶか。",
    "options": [
      "規模の経済（Scale Economy）",
      "範囲の経済（Scope Economy）",
      "ネットワーク外部性（直接／間接ネットワーク効果）",
      "経験曲線効果（Experience Curve）"
    ],
    "answerIndex": 2,
    "explanation": "電話やSNS（LINE、Instagram等）、クレジットカード決済プラットフォームなど、利用者が増えれば増えるほど利用者の便益が増加し、一度クリティカルマスを超えると競合が追いつけなくなる現象をネットワーク効果（外部性）と呼びます。"
  },
  {
    "id": "mba-strat-012",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "プラットフォーム戦略",
    "difficulty": "standard",
    "question": "複数の異なるプレイヤー（例：買い手と売り手、アプリ開発者とエンドユーザー）を仲介し、場を提供することで収益を上げる市場をMBAで何と呼ぶか。",
    "options": [
      "ツーサイド・プラットフォーム（Two-sided Market）",
      "垂直統合型バリューチェーン",
      "オープン・クローズ戦略",
      "ファブレス・サプライチェーン"
    ],
    "answerIndex": 0,
    "explanation": "ツーサイド（マルチサイド）・プラットフォームは、例えばApp Store（アプリ開発者とiPhoneユーザー）やAirbnb（宿泊提供者と宿泊者）のように、2つ以上の異なるグループを結びつけ相互の交流や取引を促進するモデルです。"
  },
  {
    "id": "mba-strat-013",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "ダイナミック・ケイパビリティ",
    "difficulty": "standard",
    "question": "デイビッド・ティースが提唱した、急速に変化する激動の環境に対応して、企業が保有する資源を再構成・変革・統合し続ける動的能力を何と呼ぶか。",
    "options": [
      "スタティック・アジリティ",
      "ダイナミック・ケイパビリティ（Dynamic Capabilities）",
      "コア・リソース・ベース",
      "バランスド・スコアカード"
    ],
    "answerIndex": 1,
    "explanation": "ダイナミック・ケイパビリティは、環境変化を感知する能力（Sensing）、機会を捕捉する能力（Seizing）、経営資源を再結合・変革する能力（Transforming）の3要素からなり、不確実性の高い現代の経営戦略論の中核概念です。"
  },
  {
    "id": "mba-strat-014",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "ゲーム理論（ナッシュ均衡）",
    "difficulty": "standard",
    "question": "戦略的意思決定において、すべてのプレイヤーが他者の戦略を前提とした上で最適な選択をとっており、どのプレイヤーも単独で戦略を変更する動機を持たない安定した状態を何と呼ぶか。",
    "options": [
      "パレート最適",
      "ナッシュ均衡",
      "ゼロサムゲーム",
      "囚人のジレンマの崩壊"
    ],
    "answerIndex": 1,
    "explanation": "ジョン・ナッシュが提唱した「ナッシュ均衡」は、互いに手の内を読み合った結果、誰も自分一人だけ戦略を変えても得をしない膠着した均衡状態を指します。"
  },
  {
    "id": "mba-strat-015",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "スイッチング・コスト",
    "difficulty": "basic",
    "question": "顧客が現在利用している製品やサービスから、競合他社の製品やサービスに乗り換える際に発生する金銭的・心理的・手続き的負担を何と呼ぶか。",
    "options": [
      "サンク・コスト（埋没費用）",
      "スイッチング・コスト（乗り換え費用）",
      "マージナル・コスト（限界費用）",
      "オポチュニティ・コスト（機会費用）"
    ],
    "answerIndex": 1,
    "explanation": "スイッチング・コストを高めること（データのロックイン、ポイント制度、操作習得コスト等）は、顧客の離反を防ぎ、参入障壁を築くための重要な戦略的手段です。"
  },
  {
    "id": "mba-strat-016",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "M&Aにおけるシナジー効果",
    "difficulty": "basic",
    "question": "企業買収・合併（M&A）において、「1＋1が2以上になる効果」を指すシナジー（Synergy）のうち、重複部門の統合や共同仕入れによるコスト削減効果を特に何と呼ぶか。",
    "options": [
      "売上シナジー（レベニュー・シナジー）",
      "コストシナジー（費用削減シナジー）",
      "財務シナジー（資金調達シナジー）",
      "ブランドシナジー"
    ],
    "answerIndex": 1,
    "explanation": "M&Aのシナジーは主に、クロスセル等による「売上シナジー」、物流やバックオフィスの統合・大量購買による「コストシナジー」、資金調達力向上や節税による「財務シナジー」に分類されます。"
  },
  {
    "id": "mba-strat-017",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "規模の経済と範囲の経済",
    "difficulty": "basic",
    "question": "「単一製品の生産量を増やすことで単位あたり固定費が下がり平均費用が低下する効果」と、「同一企業が複数事業を営み共通のインフラやノウハウを共有して効率化する効果」の正しい組み合わせはどれか。",
    "options": [
      "前者が「規模の経済（Scale）」、後者が「範囲の経済（Scope）」",
      "前者が「範囲の経済（Scope）」、後者が「規模の経済（Scale）」",
      "前者が「経験曲線効果」、後者が「学習効果」",
      "前者が「ネットワーク外部性」、後者が「規模の経済」"
    ],
    "answerIndex": 0,
    "explanation": "生産規模（量）の拡大によるコスト低下は規模の経済（スケールメリット）、多角化により複数製品間で資源（流通網・ブランド等）を共有する効果は範囲の経済（スコープメリット）です。"
  },
  {
    "id": "mba-strat-018",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "垂直統合と水平分業",
    "difficulty": "standard",
    "question": "製造業などにおいて、原材料調達から部品製造、組立、流通・小売に至る上流から下流までのサプライチェーン全体を1社が傘下に収める戦略を何と呼ぶか。",
    "options": [
      "水平統合",
      "垂直統合",
      "モジュール化",
      "ファブレス戦略"
    ],
    "answerIndex": 1,
    "explanation": "バリューチェーンの前後工程を自社で統合することを「垂直統合（Vertical Integration）」と呼びます（例：ユニクロ等のSPA、テスラの直販・独自バッテリー開発）。一方、特定工程に特化して他社と水平に連携するモデルを「水平分業」と呼びます。"
  },
  {
    "id": "mba-strat-019",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "先行者優位 (First Mover Advantage)",
    "difficulty": "basic",
    "question": "市場にいち早く参入した企業が得られる「先行者優位」の要因として適切でないものはどれか。",
    "options": [
      "初期の顧客獲得によるブランドの認知と忠誠心の確立",
      "優れた流通チャネルや重要資源の優先的確保",
      "市場の需要動向や技術標準の不確実性に伴うリスクの回避",
      "経験の蓄積による早期の製造コスト低減（経験曲線効果）"
    ],
    "answerIndex": 2,
    "explanation": "先行者は不確実性の高い未開拓市場に多額の投資をするため「市場失敗リスク」や「模倣によるフォロワーのフリーライダー（ただ乗り）リスク」を負います。不確実性の回避はむしろ「後発者（フォロワー）」のメリットです。"
  },
  {
    "id": "mba-strat-020",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "オープン・イノベーション",
    "difficulty": "standard",
    "question": "ヘンリー・チェスブロウが提唱した、自社内部の研究開発だけに頼る「クローズド・イノベーション」に対し、外部の大学・スタートアップ・他企業の技術やアイデアを有機的に結合して革新を起こす手法を何と呼ぶか。",
    "options": [
      "オープン・イノベーション",
      "リバース・イノベーション",
      "ソーシャル・イノベーション",
      "プラットフォーム・エンジニアリング"
    ],
    "answerIndex": 0,
    "explanation": "オープン・イノベーションは、社外の技術やアイデアを社内に取り込む「インバウンド」と、社内の休眠特許や技術を社外にライセンス・スピンアウトして活用する「アウトバウンド」の双方向から革新を加速させる概念です。"
  },
  {
    "id": "mba-strat-021",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "バランスド・スコアカード (BSC)",
    "difficulty": "standard",
    "question": "ロバート・キャプランとデビッド・ノートンが開発した、企業のビジョンと戦略を多面的に管理・実行するためのフレームワークBSCの4つの視点に含まれないものはどれか。",
    "options": [
      "財務の視点",
      "顧客の視点",
      "競合他社の視点",
      "学習と成長の視点"
    ],
    "answerIndex": 2,
    "explanation": "BSCの4つの視点は、①財務の視点、②顧客の視点、③内部ビジネスプロセスの視点、④学習と成長の視点です。財務指標だけでなく非財務指標をバランス良く組み合わせて戦略実行をトラッキングします。"
  },
  {
    "id": "mba-strat-022",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "ケイパビリティ (Capabilities)",
    "difficulty": "basic",
    "question": "戦略論において、単なる保有資産（工場や特許等のリソース）そのものではなく、それらを組み合わせて業務を効率的・効果的に遂行する「組織的な遂行能力」を何と呼ぶか。",
    "options": [
      "アセット",
      "ケイパビリティ（組織能力）",
      "ガバナンス",
      "シェアード・バリュー"
    ],
    "answerIndex": 1,
    "explanation": "ジョージ・ストークスらが提唱した概念で、個人のスキルを超えた「組織全体のプロセスやルーティンとして定着した遂行力（例：トヨタのカイゼン能力、ウォルマートのロジスティクス運用力）」を指します。"
  },
  {
    "id": "mba-mkt-001",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "STP分析",
    "difficulty": "basic",
    "question": "フィリップ・コトラーが提唱した、市場におけるターゲットと自社の立ち位置を明確にするSTP分析の3つのステップとして正しい組み合わせはどれか。",
    "options": [
      "Segmentation（市場細分化）、Targeting（標的市場選定）、Positioning（立ち位置設定）",
      "Strategy（戦略）、Targeting（標的選定）、Promotion（販売促進）",
      "Sales（営業）、Targeting（標的選定）、Pricing（価格設定）",
      "Segmentation（市場細分化）、Testing（検証）、Pricing（価格設定）"
    ],
    "answerIndex": 0,
    "explanation": "STP分析は近代マーケティングの王道です。市場を共通のニーズを持つ顧客グループに分ける（S）、その中から自社が狙うべきグループを決める（T）、ターゲット顧客の心の中で競合と差別化された魅力的な独自のポジションを築く（P）の流れをとります。"
  },
  {
    "id": "mba-mkt-002",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "マーケティングの4Pと4C",
    "difficulty": "basic",
    "question": "企業視点の「4P（Product, Price, Place, Promotion）」に対し、ロバート・ローターボーンが提唱した顧客視点の「4C」の組み合わせとして正しいものはどれか。",
    "options": [
      "Customer Value（顧客価値）、Cost（顧客負担コスト）、Convenience（利便性）、Communication（対話）",
      "Company（企業）、Cost（原価）、Channel（流通）、Campaign（宣伝）",
      "Customer（顧客）、Capital（資本）、Convenience（利便性）、Community（共同体）",
      "Core（核心）、Cost（コスト）、Coverage（網羅性）、Communication（対話）"
    ],
    "answerIndex": 0,
    "explanation": "製品（Product）→顧客価値（Customer Value）、価格（Price）→顧客負担費用（Cost）、流通（Place）→入手の利便性（Convenience）、販促（Promotion）→双方向の対話（Communication）が対比されます。"
  },
  {
    "id": "mba-mkt-003",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "LTV（Life Time Value：顧客生涯価値）",
    "difficulty": "basic",
    "question": "ある顧客が取引を開始してから終了するまでの全期間を通じて、企業にもたらす利益（または売上）の総額を表す経営・マーケティング指標はどれか。",
    "options": [
      "LTV（Life Time Value）",
      "CAC（Customer Acquisition Cost）",
      "CPA（Cost Per Acquisition）",
      "ROI（Return on Investment）"
    ],
    "answerIndex": 0,
    "explanation": "LTVはサブスクリプション型ビジネスやCRMにおいて極めて重視される指標です。「平均購買単価 × 購買頻度 × 継続期間」で算出され、顧客ロイヤルティ向上や解約防止（チャーン抑制）施策の評価基準となります。"
  },
  {
    "id": "mba-mkt-004",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "CAC（顧客獲得単価）とユニットエコノミクス",
    "difficulty": "standard",
    "question": "新規顧客を1件獲得するために費やしたマーケティングおよび営業コストの総額を表す指標CACに関する記述として、最も適切なものはどれか。",
    "options": [
      "SaaS等のビジネスモデルでは、健全な事業成長の基準として「LTV ÷ CAC ≧ 3」が推奨される",
      "CACは高ければ高いほど、ブランドプレミアムが高まり事業健全性が向上する",
      "CACは「顧客の総利用期間」で除して計算される",
      "CACは固定費のみを含み、広告宣伝費や営業人件費は含まない"
    ],
    "answerIndex": 0,
    "explanation": "ユニットエコノミクス（1顧客あたりの採算性）において、一般に「LTV / CAC」が3以上、かつCAC回収期間（Payback Period）が12ヶ月以内であることが健全な成長の目安とされます。"
  },
  {
    "id": "mba-mkt-005",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "チャーンレート (Churn Rate)",
    "difficulty": "basic",
    "question": "サブスクリプション（定額課金）や会員制サービスにおいて、特定期間内に有料会員が契約を解除（解約）した割合を表す重要指標はどれか。",
    "options": [
      "チャーンレート（解約率）",
      "コンバージョンレート（CVR）",
      "バウンスレート（直帰率）",
      "アトリビューションレート"
    ],
    "answerIndex": 0,
    "explanation": "解約率（チャーンレート）を低く抑えることは、LTVの伸長と安定した売上成長に直結します。顧客の成功を伴走支援する「カスタマーサクセス」部門の主要KPIです。"
  },
  {
    "id": "mba-mkt-006",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "ペルソナ (Persona)",
    "difficulty": "basic",
    "question": "マーケティングにおいて、自社製品・サービスのターゲットとなる架空の典型的な顧客像（氏名・年齢・職業・趣味・価値観・日々の悩み等まで詳細に設定したもの）を何と呼ぶか。",
    "options": [
      "ペルソナ",
      "セグメント",
      "アバター",
      "インフルエンサー"
    ],
    "answerIndex": 0,
    "explanation": "単なるデモグラフィック属性（例：30代男性）ではなく、生活実態や感情、課題解決への動機まで具体化した「ペルソナ」を設計することで、開発・営業・マーケティング部門間で共通の顧客理解を形成できます。"
  },
  {
    "id": "mba-mkt-007",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "カスタマージャーニー (Customer Journey)",
    "difficulty": "basic",
    "question": "顧客が製品やサービスを「認知」し、興味・検討を経て「購入」し、最終的に「利用・推奨（ファン化）」に至る一連の行動・思考・感情のプロセスを図式化したものを何と呼ぶか。",
    "options": [
      "カスタマージャーニーマップ",
      "バリューストリームマップ",
      "コンバージョンファネル",
      "ガントチャート"
    ],
    "answerIndex": 0,
    "explanation": "顧客接点（タッチポイント）ごとの顧客の感情やペインポイント（不満）を可視化することで、最適なタイミングで適切な情報や施策を提供するオムニチャネル戦略の設計に活用されます。"
  },
  {
    "id": "mba-mkt-008",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "ブランド・エクイティ (Brand Equity)",
    "difficulty": "standard",
    "question": "デイビッド・アーカーが体系化した、企業が持つブランド名やシンボルが製品やサービスに付加する無形の資産価値「ブランド・エクイティ」の構成要素に含まれないものはどれか。",
    "options": [
      "ブランド認知（Awareness）",
      "知覚品質（Perceived Quality）",
      "ブランド・ロイヤルティ（忠誠度）",
      "ブランド原価率（Cost Ratio）"
    ],
    "answerIndex": 3,
    "explanation": "アーカーのブランド・エクイティモデルは、①ブランド認知、②知覚品質、③ブランド連想（Associations）、④ブランド・ロイヤルティ、⑤その他知的所有権の5要素から構成されます。"
  },
  {
    "id": "mba-mkt-009",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "キャズム理論 (The Chasm)",
    "difficulty": "standard",
    "question": "ジェフリー・ムーアがハイテク製品の普及過程に関して提唱した「キャズム（深い溝）」は、エベレット・ロジャーズのイノベーター理論におけるどのグループの間に存在するか。",
    "options": [
      "アーリーアダプター（初期採用層）と アーリーマジョリティ（前期追随層）の間",
      "イノベーター（革新層）と アーリーアダプター（初期採用層）の間",
      "アーリーマジョリティ（前期追随層）と レイトマジョリティ（後期追随層）の間",
      "レイトマジョリティと ラガード（遅滞層）の間"
    ],
    "answerIndex": 0,
    "explanation": "先進的なビジョンを持つ「初期採用層（アーリーアダプター）」と、実用性・安心感を重視する「前期追随層（アーリーマジョリティ）」の間には巨大な意識の溝（キャズム）が存在し、ここを超えられない新製品は市場で失速・失敗します。"
  },
  {
    "id": "mba-mkt-010",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "プロダクト・ライフサイクル (PLC)",
    "difficulty": "basic",
    "question": "製品が市場に投入されてから衰退するまでの4つの段階（導入期・成長期・成熟期・衰退期）において、一般に「売上高が最大に達し、価格競争が激化してシェア防衛が主要課題となる」ステージはどれか。",
    "options": [
      "導入期",
      "成長期",
      "成熟期",
      "衰退期"
    ],
    "answerIndex": 2,
    "explanation": "成熟期では市場全体が飽和し、新規参入よりも既存競合同士のシェア争いやコスト競争が激化します。製品差別化や付加価値サービス、リピート顧客の維持が重要となります。"
  },
  {
    "id": "mba-mkt-011",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "価格戦略（スキミングとペネトレーション）",
    "difficulty": "standard",
    "question": "新製品発売時の価格戦略において、「初期に高価格を設定してイノベーター層から高い利益を早期回収する手法（上澄み吸収価格）」を何と呼ぶか。",
    "options": [
      "スキミング・プライシング（初期高価格戦略）",
      "ペネトレーション・プライシング（市場浸透価格戦略）",
      "ダイナミック・プライシング（変動価格制）",
      "フリーミアム・プライシング"
    ],
    "answerIndex": 0,
    "explanation": "高価格で開発費を早期回収するのがスキミング（上澄み吸収）。一方、初期から低価格で一気に市場シェアを奪取するのがペネトレーション（市場浸透）戦略です。"
  },
  {
    "id": "mba-mkt-012",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "オムニチャネル (Omnichannel)",
    "difficulty": "basic",
    "question": "実店舗、ECサイト、アプリ、SNS、カタログなど、顧客と企業が接するすべての販売チャネル・情報経路をシームレスに統合し、顧客に一貫した購買体験を提供する戦略を何と呼ぶか。",
    "options": [
      "マルチチャネル",
      "オムニチャネル",
      "フランチャイズ",
      "ドロップシッピング"
    ],
    "answerIndex": 1,
    "explanation": "マルチチャネルは各店舗やWebが独立して並存している状態ですが、オムニチャネルは在庫データ・顧客ID・ポイントが一元化され、「店舗で見てアプリで買い、最寄り店で受け取る」といったシームレスな購買が可能になります。"
  },
  {
    "id": "mba-mkt-013",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "フリーミアム (Freemium)",
    "difficulty": "basic",
    "question": "基本的な機能やサービスは無料で提供し、より高度な機能や容量、広告非表示などの追加価値に対して課金するビジネスモデルを何と呼ぶか。",
    "options": [
      "フリーミアム（Free + Premium）",
      "サブスクリプション",
      "成果報酬型モデル",
      "レベニューシェア"
    ],
    "answerIndex": 0,
    "explanation": "Dropbox、Spotify、LinkedIn、スマホアプリゲームなどで幅広く採用される代表的なデジタル収益モデルです。膨大な無料ユーザーの数％を有料会員に転換（コンバージョン）させて収益をあげます。"
  },
  {
    "id": "mba-mkt-014",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "NPS（Net Promoter Score：顧客推奨度）",
    "difficulty": "standard",
    "question": "ベイン・アンド・カンパニーのフレッド・ライクヘルドが開発した「この企業（製品）を友人や同僚に薦める可能性はどのくらいありますか？（0〜10点）」の設問から算出するロイヤルティ指標はどれか。",
    "options": [
      "NPS（Net Promoter Score）",
      "CSAT（Customer Satisfaction Score）",
      "CES（Customer Effort Score）",
      "CTR（Click Through Rate）"
    ],
    "answerIndex": 0,
    "explanation": "推奨者（9〜10点）の割合（％）から批判者（0〜6点）の割合（％）を差し引いて算出します。顧客の将来的な継続利用や口コミによる成長率と極めて高い相関があることで知られます。"
  },
  {
    "id": "mba-mkt-015",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "ポジショニングマップ",
    "difficulty": "basic",
    "question": "顧客が製品やサービスを選択する際の最も重視する2つの決定基準（KBF：Key Buying Factors）を縦軸と横軸にとり、競合との位置関係や自社の差別化スペースを視覚化する図を何と呼ぶか。",
    "options": [
      "ポジショニングマップ（知覚マップ）",
      "レーダーチャート",
      "散布図マトリクス",
      "ベン図"
    ],
    "answerIndex": 0,
    "explanation": "競合が密集している領域（レッドオーシャン）を避け、顧客ニーズがありながら他社が満たしていない「ホワイトスペース」を発見するために活用されます。"
  },
  {
    "id": "mba-mkt-016",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "D2C（Direct to Consumer）",
    "difficulty": "basic",
    "question": "メーカーやブランドが問屋や小売店などの中間流通を介さず、自社のECサイトや直営店舗を通じて消費者に直接製品を企画・製造・販売するモデルを何と呼ぶか。",
    "options": [
      "B2B2C",
      "D2C（Direct to Consumer）",
      "C2C",
      "OEM"
    ],
    "answerIndex": 1,
    "explanation": "中間マージンをカットして高い利益率を確保できるだけでなく、顧客データや購買行動を直接蓄積・分析し、ブランドの世界観（ストーリー）をSNS等でダイレクトに発信して熱狂的なファンを育てる特徴があります。"
  },
  {
    "id": "mba-mkt-017",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "ダイナミック・プライシング",
    "difficulty": "basic",
    "question": "航空券やホテル、テーマパーク、スポーツ観戦チケットなどで導入されている、需要と供給の状況に応じてAIやアルゴリズムがリアルタイムに価格を変動させる手法を何と呼ぶか。",
    "options": [
      "コストプラス価格設定",
      "ダイナミック・プライシング（価格変動制）",
      "均一価格設定（ペネトレーション）",
      "二重価格制"
    ],
    "answerIndex": 1,
    "explanation": "繁忙期の収益最大化（プライスアップ）と閑散期の稼働率維持（値下げ）を同時に達成し、レベニューマネジメント（収益管理）を最適化する仕組みです。"
  },
  {
    "id": "mba-mkt-018",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "リードナーチャリング (Lead Nurturing)",
    "difficulty": "standard",
    "question": "展示会やWebサイト等で獲得した見込み客（リード）に対し、メルマガ、ウェビナー、ホワイトペーパー等の有益な情報を定期的に提供し、購買意欲を徐々に高めて商談へと育成する活動を何と呼ぶか。",
    "options": [
      "リードジェネレーション",
      "リードナーチャリング（見込み客育成）",
      "リードクオリフィケーション",
      "インサイドセールス"
    ],
    "answerIndex": 1,
    "explanation": "獲得（Generation）→育成（Nurturing）→選別（Qualification）というB2Bマーケティングの重要プロセスの一つです。"
  },
  {
    "id": "mba-mkt-019",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "プライス・エラスティシティ（価格弾力性）",
    "difficulty": "standard",
    "question": "価格が1％変動したときに、製品の需要量が何％変化するかを表す経済・マーケティング指標を何と呼ぶか。",
    "options": [
      "限界効用",
      "需要の価格弾力性",
      "マークアップ率",
      "損益分岐点比率"
    ],
    "answerIndex": 1,
    "explanation": "価格弾力性が1より大きい場合（弾力的：値上げすると需要が激減する日用品など）、値上げは売上減を招きます。逆に弾力性が小さい（非弾力的：代替品がない医薬品や熱狂的ブランドなど）製品は、値上げしても需要が落ちず利益を増やせます。"
  },
  {
    "id": "mba-mkt-020",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "アンバサダー・マーケティング",
    "difficulty": "basic",
    "question": "単なる一過性のインフルエンサー広告とは異なり、製品やブランドに強い愛着を持つ熱心なファンを公式な「大使（アンバサダー）」に任命し、中長期的に口コミや魅力を発信してもらう手法を何と呼ぶか。",
    "options": [
      "アンバサダー・マーケティング",
      "ステルス・マーケティング",
      "バズ・マーケティング",
      "アフィリエイト・マーケティング"
    ],
    "answerIndex": 0,
    "explanation": "熱狂的なファン（エバンジェリスト）の本音の言葉や体験談を活用することで、広告嫌悪感の強い現代の消費者に対しても高い信頼性と共感を獲得できます。"
  },
  {
    "id": "mba-mkt-021",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "ジョブ理論 (Jobs to be Done)",
    "difficulty": "standard",
    "question": "クレイトン・クリステンセン教授が提唱した「顧客は製品そのものを買っているのではなく、特定の生活状況で生じる課題（Job：成し遂げたい用事）を片付けるために製品を『雇っている（Hire）』」という理論を何と呼ぶか。",
    "options": [
      "ジョブ理論（JTBD）",
      "行動経済学",
      "機能的便益理論",
      "サービス・ドミナント・ロジック"
    ],
    "answerIndex": 0,
    "explanation": "「顧客は4分の1インチのドリルが欲しいのではなく、4分の1インチの穴が欲しいのだ」という有名な格言の通り、顧客が真に解決したい根本的な状況と感情に寄り添うイノベーション創出手法です。"
  },
  {
    "id": "mba-mkt-022",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "コンテンツ・マーケティング",
    "difficulty": "basic",
    "question": "自社製品の売り込みを前面に出すのではなく、ターゲット読者にとって有益で質の高い情報（ブログ、動画、白書、事例など）を提供し続け、信頼関係を築いて最終的に顧客化する手法を何と呼ぶか。",
    "options": [
      "コンテンツ・マーケティング",
      "テレマーケティング",
      "プッシュ型ダイレクトメール",
      "リスティング広告"
    ],
    "answerIndex": 0,
    "explanation": "検索エンジン（SEO）やソーシャルメディアを通じて顧客自らが能動的に見つけ出す「インバウンド・マーケティング」の中核をなす手法です。"
  },
  {
    "id": "mba-fin-001",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "NPV（Net Present Value：正味現在価値）",
    "difficulty": "basic",
    "question": "設備投資や企業価値評価において、将来創出されるキャッシュフローの現在価値合計から、初期投資額を差し引いた指標を何と呼ぶか。",
    "options": [
      "NPV（正味現在価値）",
      "IRR（内部収益率）",
      "ROE（自己資本利益率）",
      "回収期間（Payback Period）"
    ],
    "answerIndex": 0,
    "explanation": "コーポレート・ファイナンスで最も信頼される投資判断基準です。「NPV ＞ 0」であれば企業価値を高めるため投資を実行し、「NPV ＜ 0」であれば見送ります。"
  },
  {
    "id": "mba-fin-002",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "DCF法 (Discounted Cash Flow)",
    "difficulty": "standard",
    "question": "将来生み出されるフリーキャッシュフローを、その事業のリスクを反映した割引率（WACC等）で割り引いて現在価値を求め、企業価値や事業価値を算出する評価手法を何と呼ぶか。",
    "options": [
      "DCF法（割引キャッシュフロー法）",
      "マルチプル法（類似企業比較法）",
      "簿価純資産法",
      "取引事例比較法"
    ],
    "answerIndex": 0,
    "explanation": "インカム・アプローチの代表格で、M&Aの買収価格算定や事業性評価において最も理論的とされるバリュエーション手法です。"
  },
  {
    "id": "mba-fin-003",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "WACC（加重平均資本コスト）",
    "difficulty": "standard",
    "question": "企業の資金調達コストを表す指標で、株主が要求する期待リターン（株主資本コスト）と、銀行等の債権者が要求する金利（負債コスト：節税効果考慮後）を加重平均したものを何と呼ぶか。",
    "options": [
      "WACC（Weighted Average Cost of Capital）",
      "CAPM（Capital Asset Pricing Model）",
      "EBITDAマージン",
      "ROICスプレッド"
    ],
    "answerIndex": 0,
    "explanation": "企業が投資家や金融機関から資金を集めて事業を行うための「ハードル・レート（最低限クリアすべき投資収益率）」として機能します。"
  },
  {
    "id": "mba-fin-004",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "ROIC（投下資本利益率）",
    "difficulty": "standard",
    "question": "株主と銀行から集めた本業の投下資本に対して、税引後営業利益（NOPAT）をどれだけ効率的に生み出したかを表す、近年日本企業でも経営目標に導入が進む指標はどれか。",
    "options": [
      "ROIC（Return on Invested Capital）",
      "ROE（Return on Equity）",
      "ROA（Return on Assets）",
      "ROS（Return on Sales）"
    ],
    "answerIndex": 0,
    "explanation": "「NOPAT ÷ 投下資本（有利子負債＋株主資本）」で算出されます。ROICが資本コスト（WACC）を上回っている状態（ROICスプレッド＞0）でのみ、企業は真の経済的付加価値を創出していると評価されます。"
  },
  {
    "id": "mba-fin-005",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "フリーキャッシュフロー (FCF)",
    "difficulty": "basic",
    "question": "企業が事業活動によって稼ぎ出し、借入金返済や配当、将来の成長投資などに自由に使うことができる純粋な余剰現金を何と呼ぶか。",
    "options": [
      "営業キャッシュフロー",
      "フリーキャッシュフロー（FCF）",
      "当期純利益",
      "経常利益"
    ],
    "answerIndex": 1,
    "explanation": "一般に「営業キャッシュフロー − 設備投資額（投資キャッシュフロー）」として求められます。会計上の利益と異なり、手元に実在する現金の増加を示すため企業価値評価の源泉となります。"
  },
  {
    "id": "mba-fin-006",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "IRR（Internal Rate of Return：内部収益率）",
    "difficulty": "standard",
    "question": "投資案件のNPV（正味現在価値）がちょうどゼロになるような割引率を指し、投資資金が何％の利回りで複利運用されるかを示す指標はどれか。",
    "options": [
      "IRR（内部収益率）",
      "配当利回り",
      "売上高営業利益率",
      "クーポンレート"
    ],
    "answerIndex": 0,
    "explanation": "IRRが企業の資本コスト（WACC等）を上回っていれば投資採算が合います。プライベート・エクイティ（PEファンド）やVCが投資先を評価する最重要指標の一つです。"
  },
  {
    "id": "mba-fin-007",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "EBITDA（利払前・税引前・償却前利益）",
    "difficulty": "basic",
    "question": "国ごとの税率や減価償却方法、借入金の利息負担の違いを排除し、本業のグローバルな現金創出力を純粋に比較するために国際的なM&A等で多用される指標はどれか。",
    "options": [
      "EBITDA（イービットディーエー）",
      "NOPAT",
      "売上総利益",
      "経常利益"
    ],
    "answerIndex": 0,
    "explanation": "「営業利益 ＋ 減価償却費 ＋ のれん償却費」で簡易的に算出され、多額の設備投資を抱える企業のキャッシュ創出力評価や、EV/EBITDA倍率による企業買収価格評価で不可欠な指標です。"
  },
  {
    "id": "mba-fin-008",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "ROEとデュポン分析",
    "difficulty": "standard",
    "question": "自己資本利益率（ROE）を3つの要素に分解して要因分析を行う「デュポンシステム（デュポンモデル）」の3要素として正しい組み合わせはどれか。",
    "options": [
      "売上高純利益率（収益性）× 総資産回転率（効率性）× 財務レバレッジ（財務構成）",
      "営業利益率 × 固定資産回転率 × 自己資本比率",
      "粗利益率 × 棚卸資産回転率 × 負債比率",
      "売上高経常利益率 × 流動比率 × 配当性向"
    ],
    "answerIndex": 0,
    "explanation": "ROE ＝（当期純利益/売上高）×（売上高/総資産）×（総資産/自己資本）。これにより、ROEの高さが本業の利益率によるものか、資産を回転させた成果か、借入金（レバレッジ）によるものかを識別できます。"
  },
  {
    "id": "mba-fin-009",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "EVA（経済的付加価値）",
    "difficulty": "standard",
    "question": "スターン・スチュワート社が開発した指標で、税引後営業利益（NOPAT）から、投下資本にかかる資本コスト（資本額×WACC）を全額差し引いて算出する「真の経済的利益」を何と呼ぶか。",
    "options": [
      "EVA（Economic Value Added）",
      "EBIT",
      "包括利益",
      "キャッシュフロー・マージン"
    ],
    "answerIndex": 0,
    "explanation": "会計上の利益が黒字であっても、投資家が期待する資本コストを上回る利益を上げていなければ株主価値を毀損しているという視点を与える経営指標です。"
  },
  {
    "id": "mba-fin-010",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "マルチプル法（類似企業比較法）",
    "difficulty": "basic",
    "question": "M&AやIPO（新規公開）時の企業価値算定において、上場している類似企業の指標（PER、PBR、EV/EBITDA等）の倍率をもとに評価対象企業の価値を推計する手法を何と呼ぶか。",
    "options": [
      "マルチプル法（マーケット・アプローチ）",
      "DCF法（インカム・アプローチ）",
      "修正簿価純資産法（コスト・アプローチ）",
      "リアル・オプション法"
    ],
    "answerIndex": 0,
    "explanation": "市場の客観的な取引相場を即座に反映できるため、実務でDCF法と並行して確からしさを検証（クロスチェック）するために必ず用いられます。"
  },
  {
    "id": "mba-fin-011",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "CAPM（資本資産価格モデル）",
    "difficulty": "standard",
    "question": "株式市場全体の動きに対する個別銘柄の感応度を示す係数を「ベータ（β）」と呼ぶが、個別株主資本コスト＝「リスクフリーレート ＋ β × マーケットリスクプレミアム」で算出するファイナンス理論を何と呼ぶか。",
    "options": [
      "CAPM（Capital Asset Pricing Model）",
      "ブラック・ショールズ方程式",
      "MM理論（モディリアーニ・ミラー）",
      "アービトラージ・プライシング理論"
    ],
    "answerIndex": 0,
    "explanation": "ウィリアム・シャープらが提唱した現代ポートフォリオ理論の中核です。株主が引き受ける市場リスク（β）に応じた期待リターンを定量化します。"
  },
  {
    "id": "mba-fin-012",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "タックス・シールド（節税効果）",
    "difficulty": "basic",
    "question": "借入金の支払利息や減価償却費が税法上の「損金（費用）」として認められることにより、法人税等の支払額が減少してキャッシュアウトが抑制される効果を何と呼ぶか。",
    "options": [
      "タックス・シールド（利息・償却の節税効果）",
      "キャピタルゲイン免税",
      "レバレッジド・バイアウト",
      "デット・エクイティ・スワップ"
    ],
    "answerIndex": 0,
    "explanation": "例えば法人税率30%の場合、100万円の減価償却費は「100万円×30%＝30万円」の税金を直接減らし、手元キャッシュを増やす効果（減価償却のタックスシールド）をもたらします。"
  },
  {
    "id": "mba-fin-013",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "CCC（Cash Conversion Cycle）",
    "difficulty": "standard",
    "question": "企業が仕入れのために現金を支出してから、製品を販売して売上代金を現金として回収するまでにかかる日数（資金拘束期間）を表す指標はどれか。",
    "options": [
      "CCC（キャッシュ・コンバージョン・サイクル）",
      "売掛金回収日数",
      "棚卸資産回転率",
      "インタレスト・カバレッジ・レシオ"
    ],
    "answerIndex": 0,
    "explanation": "「売上債権回転日数 ＋ 棚卸資産回転日数 − 仕入債務回転日数」で算出されます。アップルやアマゾンはCCCをマイナス（代金回収が仕入れ代金支払いより早い）にすることで無借金・潤沢な運転資金を実現しています。"
  },
  {
    "id": "mba-fin-014",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "財務レバレッジ (Financial Leverage)",
    "difficulty": "basic",
    "question": "自己資本（株式）だけでなく、有利子負債（借入金・社債）を活用して総資産を拡大し、自己資本に対する利益率（ROE）をテコの原理のように高める効果を何と呼ぶか。",
    "options": [
      "財務レバレッジ効果",
      "オペレーティング・レバレッジ",
      "ヘッジ効果",
      "システマティック・リスク"
    ],
    "answerIndex": 0,
    "explanation": "借入金利よりも高い利回り（事業利益率）を稼ぎ出せる場合、負債を増やすほど株主へのリターン（ROE）は高まります。ただし、業績悪化時には元利返済が重荷となり倒産リスクが高まる両刃の剣です。"
  },
  {
    "id": "mba-fin-015",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "PBR（株価純資産倍率）1倍割れ問題",
    "difficulty": "basic",
    "question": "東証が改善を求めたことで話題となった「PBR（株価純資産倍率）が1倍を割り込んでいる状態」が意味するファイナンス上の評価として最も適切なものはどれか。",
    "options": [
      "市場から「会社を今すぐ解散して資産を分配した方が、事業を継続するよりも価値が高い」と評価されている状態",
      "企業の売上成長率が過去最高の水準にある状態",
      "自己資本比率が100%を超えている健全な状態",
      "配当利回りが国債利回りを下回っている状態"
    ],
    "answerIndex": 0,
    "explanation": "PBR＝株価÷1株あたり純資産。1倍未満は、企業が保有する資産から資本コストを上回る利益を生み出せておらず、市場から企業価値の毀損を突きつけられている状態を意味します。"
  },
  {
    "id": "mba-fin-016",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "リアル・オプション (Real Options)",
    "difficulty": "standard",
    "question": "将来の不確実性が高い新規事業や研究開発投資において、状況の変化に応じて「投資を拡大する」「延期する」「撤退する」といった経営陣の意思決定の柔軟性を金融オプション理論で評価する手法はどれか。",
    "options": [
      "リアル・オプション理論",
      "感応度分析（センシティビティ分析）",
      "損益分岐点分析",
      "モンテカルロ・シミュレーション"
    ],
    "answerIndex": 0,
    "explanation": "従来のDCF法では見落とされがちな「失敗しそうなら早期撤退して損失を限定する権利」や「成功したら追加投資して大化けさせる権利」の価値を正当に評価できます。"
  },
  {
    "id": "mba-fin-017",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "のれん（Goodwill）とその減損",
    "difficulty": "standard",
    "question": "M&A（企業買収）において、買収対価が被買収企業の純資産時価を上回る差額（将来の収益力やブランド力へのプレミアム）を会計上「のれん」と計上するが、買収先の業績が悪化して見込み通りの利益が出なくなった際に行う会計処理はどれか。",
    "options": [
      "のれんの減損処理（損失計上）",
      "のれんの資本金振替",
      "のれんの持分法適用",
      "のれんの株式分割"
    ],
    "answerIndex": 0,
    "explanation": "期待したシナジーや利益が創出できないと判断された場合、将来キャッシュフローの下方修正に基づきのれんの価値を一括で切り下げる「減損損失（特別損失）」を計上し、多額の赤字要因となります。"
  },
  {
    "id": "mba-fin-018",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "LBO（レバレッジド・バイアウト）",
    "difficulty": "standard",
    "question": "PEファンド等による企業買収において、買い手自身の信用力ではなく「買収対象企業の資産や将来生み出すキャッシュフロー」を担保にして多額の借入金を調達し、少額の自己資金で大規模買収を行う手法を何と呼ぶか。",
    "options": [
      "LBO（Leveraged Buyout）",
      "MBO（Management Buyout）",
      "TOB（株式公開買付）",
      "EBO（Employee Buyout）"
    ],
    "answerIndex": 0,
    "explanation": "買収後に借入金の返済義務は買収先企業が負います。少ない自己資金で高い投資利回り（IRR）を狙える一方、買収先企業の財務レバレッジが急上昇するリスクを伴います。"
  },
  {
    "id": "mba-fin-019",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "CVP分析と安全余裕率",
    "difficulty": "basic",
    "question": "現在の売上高が、損益分岐点売上高をどれくらい上回っているか（売上高が何％落ち込んでも赤字に転落しないか）を示す安全性の指標を何と呼ぶか。",
    "options": [
      "安全余裕率（Margin of Safety）",
      "限界利益率",
      "営業レバレッジ係数",
      "流動比率"
    ],
    "answerIndex": 0,
    "explanation": "「（現在の売上高 − 損益分岐点売上高）÷ 現在の売上高」で算出されます。安全余裕率が高い企業ほど、不況や需要急減に対する耐久力（耐性）が高いと評価されます。"
  },
  {
    "id": "mba-fin-020",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "サンクコスト（埋没費用）の呪縛",
    "difficulty": "basic",
    "question": "過去に既に投資・支出してしまい、どのような意思決定を行っても二度と回収することができない費用を何と呼び、これに囚われて不採算事業の撤退を遅らせる心理的罠を何と呼ぶか。",
    "options": [
      "サンクコスト（コンコルド効果）",
      "機会費用（オポチュニティコスト）",
      "限界費用（マージナルコスト）",
      "変動費トラップ"
    ],
    "answerIndex": 0,
    "explanation": "合理的なファイナンス的意思決定においては「過去のサンクコストは完全に無視し、将来の増分キャッシュフローのみで判断すべき」とされますが、心理的な執着から撤退が遅れ損失が拡大するケースが頻発します。"
  },
  {
    "id": "mba-fin-021",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "ターミナル・バリュー（継続価値）",
    "difficulty": "standard",
    "question": "DCF法による企業価値算定において、詳細な事業計画期間（例：向こう5年間）を終えた後、企業が将来にわたって永久に存続すると仮定して算出する現在価値を何と呼ぶか。",
    "options": [
      "ターミナル・バリュー（Terminal Value / 継続価値）",
      "清算価値（Liquidation Value）",
      "スクラップ・バリュー（残存価額）",
      "帳簿価格（Book Value）"
    ],
    "answerIndex": 0,
    "explanation": "ゴードン・グロース・モデル（永久還元法）などを用いて算出され、DCF法による企業価値全体の過半（60〜80%程度）を占めることが多いため、前提となる永久成長率の設定が極めて重要です。"
  },
  {
    "id": "mba-fin-022",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "ストック・オプション（株式報酬）",
    "difficulty": "basic",
    "question": "企業の役員や従業員に対し、あらかじめ定められた価格（行使価格）で将来自社株を購入できる権利を付与し、株価上昇による利益をインセンティブにして株主と利害を一致させる制度を何と呼ぶか。",
    "options": [
      "ストック・オプション",
      "譲渡制限付株式（RS）",
      "持株会奨励金",
      "従業員退職慰労金"
    ],
    "answerIndex": 0,
    "explanation": "経営陣と株主の間のプリンシパル＝エージェント問題（エージェンシー問題）を解消し、企業価値・株価向上への強い動機づけを与えるコーポレートガバナンス上の重要施策です。"
  },
  {
    "id": "mba-ob-001",
    "category": "leadership",
    "categoryName": "組織行動・リーダーシップ (OB & HR)",
    "term": "心理的安全性 (Psychological Safety)",
    "difficulty": "basic",
    "question": "エイミー・エドモンドソン教授が提唱し、Googleの社内プロジェクト「プロジェクト・アリストテレス」で最高成果を出すチームの最重要要素と結論づけられた概念はどれか。",
    "options": [
      "心理的安全性（Psychological Safety）",
      "情緒的コミットメント",
      "マインドフルネス",
      "サーバント・オーソリティ"
    ],
    "answerIndex": 0,
    "explanation": "チームの誰もが無知や無能だと思われることを恐れず、率直な意見や懸念、失敗の報告をリスクなしに発言できるチームの共有された信念・雰囲気を指します。"
  },
  {
    "id": "mba-ob-002",
    "category": "leadership",
    "categoryName": "組織行動・リーダーシップ (OB & HR)",
    "term": "タックマンモデル (Tuckman's Stages)",
    "difficulty": "basic",
    "question": "ブルース・タックマンが提唱したチームの発達段階モデルにおいて、「メンバー同士の意見の衝突や対立が生じるステージ（第2段階）」はどれか。",
    "options": [
      "形成期（Forming）",
      "混乱期（Storming）",
      "統一期（Norming）",
      "機能期（Performing）"
    ],
    "answerIndex": 1,
    "explanation": "チームは形成期（手探り）→混乱期（意見の衝突・葛藤）→統一期（共通ルール・役割確立）→機能期（阿吽の呼吸で高成果）→散会期（プロジェクト完了）のプロセスを経て進化します。"
  },
  {
    "id": "mba-ob-003",
    "category": "leadership",
    "categoryName": "組織行動・リーダーシップ (OB & HR)",
    "term": "OKR（Objectives and Key Results）",
    "difficulty": "basic",
    "question": "インテルで生まれGoogleが導入して世界に広がった、全社とチーム、個人の目標を連動させ、野心的な定性目標と定量的成果指標を設定する目標管理手法はどれか。",
    "options": [
      "OKR（Objectives and Key Results）",
      "MBO（目標による管理）",
      "KPIツリー",
      "360度評価"
    ],
    "answerIndex": 0,
    "explanation": "ワクワクするストレッチ目標「Objective（定性）」に対し、達成度を客観測定する3〜5個の「Key Results（定量指標）」を紐付け、短サイクル（四半期等）で見直しを行う手法です。"
  },
  {
    "id": "mba-ob-004",
    "category": "leadership",
    "categoryName": "組織行動・リーダーシップ (OB & HR)",
    "term": "サーバント・リーダーシップ",
    "difficulty": "standard",
    "question": "ロバート・グリーンリーフが提唱した、リーダーはメンバーの上に君臨して命令するのではなく、「まず相手に奉仕し、その後で導く（リーダーはメンバーの支援者）」とするリーダーシップ哲学を何と呼ぶか。",
    "options": [
      "サーバント・リーダーシップ",
      "専制型リーダーシップ",
      "トランザクショナル・リーダーシップ",
      "カリスマ的リーダーシップ"
    ],
    "answerIndex": 0,
    "explanation": "メンバーの自律性を重んじ、成長を後押しする環境づくりに徹することで、自発的な強い組織をつくる現代の重要リーダーシップ理論です。"
  },
  {
    "id": "mba-ob-005",
    "category": "leadership",
    "categoryName": "組織行動・リーダーシップ (OB & HR)",
    "term": "ハーズバーグの動機づけ・衛生理論（二要因理論）",
    "difficulty": "standard",
    "question": "ハーズバーグの二要因理論において、「それが満たされても不満が解消するだけで、積極的なモチベーション（満足）を高めるわけではない要素（衛生要因）」に含まれるものはどれか。",
    "options": [
      "達成感・成し遂げた実感",
      "仕事そのものの面白さ・やりがい",
      "給与・作業環境・会社の諸方針",
      "承認や責任の拡大"
    ],
    "answerIndex": 2,
    "explanation": "給与や職場環境は「衛生要因（不満を防ぐ要素）」であり、これらを改善しても不満が減るだけでやる気は湧きません。真のモチベーションは仕事の達成感や承認、責任といった「動機づけ要因」から生まれます。"
  },
  {
    "id": "mba-ob-006",
    "category": "leadership",
    "categoryName": "組織行動・リーダーシップ (OB & HR)",
    "term": "マズローの欲求5段階説",
    "difficulty": "basic",
    "question": "アブラハム・マズローが提唱した欲求階層説において、最上位に位置する欲求はどれか。",
    "options": [
      "生理的欲求",
      "安全の欲求",
      "所属と愛の欲求（社会的欲求）",
      "自己実現の欲求"
    ],
    "answerIndex": 3,
    "explanation": "生理的→安全→社会的（所属）→承認（尊厳）→自己実現（自らの持つ潜在的能力を最大限に発揮し、自分らしくありたいという欲求）の順に高次の欲求へと移行します。"
  },
  {
    "id": "mba-ob-007",
    "category": "leadership",
    "categoryName": "組織行動・リーダーシップ (OB & HR)",
    "term": "変革型リーダーシップ (Transformational)",
    "difficulty": "standard",
    "question": "部下との間で「業績と報酬の交換条件（ギブ＆テイク）」で動かす取引型（トランザクショナル）リーダーシップに対し、共有ビジョンや情熱、知的好奇心の刺激によって部下の意識を根本から変革し、期待以上の成果を引き出すリーダーシップを何と呼ぶか。",
    "options": [
      "変革型リーダーシップ（トランスフォーメーショナル）",
      "放任型リーダーシップ（レッセフェール）",
      "官僚型リーダーシップ",
      "ペーシング型リーダーシップ"
    ],
    "answerIndex": 0,
    "explanation": "バーナード・バスらが体系化した理論で、激変する環境下での組織変革（DXや企業再生）において必須とされるリーダーシップ像です。"
  },
  {
    "id": "mba-ob-008",
    "category": "leadership",
    "categoryName": "組織行動・リーダーシップ (OB & HR)",
    "term": "ジョン・コッターの変革の8段階プロセス",
    "difficulty": "standard",
    "question": "ジョン・コッター教授が提唱した「大企業が組織変革を成功させるための8段階プロセス」の記念すべき第1ステップはどれか。",
    "options": [
      "危機意識（切迫感）を高める (Create a Sense of Urgency)",
      "変革のための連帯チームを築く",
      "ビジョンと戦略を策定する",
      "短期的成果（クイックウィン）を生み出す"
    ],
    "answerIndex": 0,
    "explanation": "変革の失敗の7割は第1段階で躓きます。「このままでは会社が立ち行かなくなる」という切迫感（危機感）を組織全体で共有しない限り、人間は現状維持（コンフォートゾーン）を選んでしまいます。"
  },
  {
    "id": "mba-ob-009",
    "category": "leadership",
    "categoryName": "組織行動・リーダーシップ (OB & HR)",
    "term": "クルト・レウィンの組織変革3段階モデル",
    "difficulty": "basic",
    "question": "組織変革の心理的プロセスを表すレウィンのモデルにおける3つの段階の順序として正しいものはどれか。",
    "options": [
      "解凍（Unfreeze） → 変革・移行（Change） → 再凍結（Refreeze）",
      "計画（Plan） → 実行（Do） → 評価（See）",
      "診断（Diagnosis） → 介入（Intervention） → 撤退（Exit）",
      "覚醒（Awake） → 行動（Action） → 完了（Done）"
    ],
    "answerIndex": 0,
    "explanation": "既存の固定観念や習慣をまず「解凍」し、新しい行動様式を学習して「変革」を起こし、定着させて新しい日常として「再凍結」するという3ステップです。"
  },
  {
    "id": "mba-ob-010",
    "category": "leadership",
    "categoryName": "組織行動・リーダーシップ (OB & HR)",
    "term": "認知バイアス（確証バイアス）",
    "difficulty": "basic",
    "question": "意思決定において、自分の持っている先入観や仮説を肯定する情報ばかりを無意識に集め、それに反する都合の悪い客観的事実を軽視・無視してしまう心理的傾向を何と呼ぶか。",
    "options": [
      "確証バイアス",
      "ハロー効果",
      "アンカリング効果",
      "利用可能性ヒューリスティック"
    ],
    "answerIndex": 0,
    "explanation": "経営陣が失敗事業の撤退を誤ったり、市場調査のデータを都合よく解釈してしまう最大の原因となる認知的罠です。"
  },
  {
    "id": "mba-ob-011",
    "category": "leadership",
    "categoryName": "組織行動・リーダーシップ (OB & HR)",
    "term": "ハロー効果 (Halo Effect)",
    "difficulty": "basic",
    "question": "人事評価や人物観察において、ある対象の際立った一つの特徴（高学歴、有名企業出身、容姿など）に引きずられて、他のすべての能力や人格まで優れている（または劣っている）と歪んで評価してしまう現象を何と呼ぶか。",
    "options": [
      "ハロー効果（後光効果）",
      "ピグマリオン効果",
      "寛大化傾向",
      "中心化傾向"
    ],
    "answerIndex": 0,
    "explanation": "「有名大学卒だから営業もプレゼンも完璧だろう」といった先入観が客観的な人事評価を妨げる典型例です。"
  },
  {
    "id": "mba-ob-012",
    "category": "leadership",
    "categoryName": "組織行動・リーダーシップ (OB & HR)",
    "term": "チーミング (Teaming)",
    "difficulty": "standard",
    "question": "固定された静的な部署ではなく、不確実で複雑な課題を解決するために、多様な専門性を持つメンバーが流動的に集まり、素早く学び合いながら協働・解散していく動的なチーム活動を何と呼ぶか。",
    "options": [
      "チーミング（Teaming）",
      "タスクフォース",
      "官僚制組織",
      "マトリックス組織"
    ],
    "answerIndex": 0,
    "explanation": "エイミー・エドモンドソン教授が提唱した概念で、VUCA時代に素早く仮説検証とイノベーションを回すための新しい協働様式です。"
  },
  {
    "id": "mba-ob-013",
    "category": "leadership",
    "categoryName": "組織行動・リーダーシップ (OB & HR)",
    "term": "シチュエーショナル・リーダーシップ (SL理論)",
    "difficulty": "standard",
    "question": "ハーシィとブランチャードが提唱したSL理論において、リーダーシップ行動（指示的／援助的）は部下の何の発達度合いに応じて適合させるべきとされるか。",
    "options": [
      "部下の成熟度（業務遂行能力と意欲）",
      "部下の勤続年数と年齢",
      "部下の学歴と専門資格",
      "組織の売上高規模"
    ],
    "answerIndex": 0,
    "explanation": "新人のうちは「指示型（教示的）」、少し慣れたら「説得型」、スキルが上がれば「参加型（援助中心）」、自立したベテランには「委任型」へと部下の成熟度に合わせて変幻自在に切り替えます。"
  },
  {
    "id": "mba-ob-014",
    "category": "leadership",
    "categoryName": "組織行動・リーダーシップ (OB & HR)",
    "term": "グループシンク（集団浅慮）",
    "difficulty": "standard",
    "question": "結束力の強い同質的な集団が議論する際、和を乱すことを恐れて批判的検討を避け、全体として非合理的で極端に危険な意思決定を下してしまう現象を何と呼ぶか。",
    "options": [
      "グループシンク（集団浅慮）",
      "ソーシャルローフィング（社会的手抜き）",
      "集合知",
      "デルファイ法"
    ],
    "answerIndex": 0,
    "explanation": "経営陣がイエスマンばかりで固められた企業が不祥事や無謀な買収に突き進む背景には、グループシンクが存在します。これを防ぐためにあえて反対意見を述べる役「悪魔の代弁者（デビルズ・アドボケイト）」を置く手法が推奨されます。"
  },
  {
    "id": "mba-ob-015",
    "category": "leadership",
    "categoryName": "組織行動・リーダーシップ (OB & HR)",
    "term": "DE&I（ダイバーシティ、エクイティ＆インクルージョン）",
    "difficulty": "basic",
    "question": "「多様性（Diversity）」を認めるだけでなく、一人ひとりの異なる境遇やスタートラインに配慮した「公正さ（Equity）」を担保し、すべての個人が尊重され強みを発揮できる「包摂（Inclusion）」を実現する現代の組織経営概念を何と呼ぶか。",
    "options": [
      "DE&I（Diversity, Equity & Inclusion）",
      "CSR（企業の社会的責任）",
      "SDGs（持続可能な開発目標）",
      "ESG経営"
    ],
    "answerIndex": 0,
    "explanation": "単に形式的に女性比率や外国人比率を高めるだけでなく、個々の能力が正当に活かされる公平な土台と心理的安全性を育むことがイノベーションの源泉となります。"
  },
  {
    "id": "mba-ob-016",
    "category": "leadership",
    "categoryName": "組織行動・リーダーシップ (OB & HR)",
    "term": "エンゲージメント (Employee Engagement)",
    "difficulty": "basic",
    "question": "単に会社に対する満足度（居心地の良さ）を示す従業員満足度（ES）と異なり、企業のビジョンや目標に共感し、自発的に情熱を持って貢献しようとする「組織と個人の相思相愛の結びつき」を表す指標はどれか。",
    "options": [
      "従業員エンゲージメント（Engagement）",
      "勤続年数",
      "有給消化率",
      "離職率"
    ],
    "answerIndex": 0,
    "explanation": "エンゲージメントが高い組織は、生産性、顧客満足度、収益性において競合を大きく上回り、優秀層の離職率が低いことが多くの実証研究で示されています。"
  },
  {
    "id": "mba-ob-017",
    "category": "leadership",
    "categoryName": "組織行動・リーダーシップ (OB & HR)",
    "term": "360度多面評価 (360-Degree Feedback)",
    "difficulty": "basic",
    "question": "直属の上司からの一方的な評価だけでなく、同僚、部下、関連部署の担当者など、多角的な視点から本人の行動やリーダーシップを評価・フィードバックする人事制度を何と呼ぶか。",
    "options": [
      "360度評価（多面評価）",
      "ノーレイティング",
      "職務給制度",
      "コンピテンシー評価"
    ],
    "answerIndex": 0,
    "explanation": "上司にだけ良い顔をする「社内政治的」な行動を抑止し、本人が自覚していない盲点（客観的な強み・改善点）に気付かせる人材開発ツールとして活用されます。"
  },
  {
    "id": "mba-ob-018",
    "category": "leadership",
    "categoryName": "組織行動・リーダーシップ (OB & HR)",
    "term": "ピグマリオン効果",
    "difficulty": "basic",
    "question": "上司や教育者が「この部下は能力が高く、期待に応えて大きく成長する」と強く期待を寄せて接することで、部下が実際に高い成果を出すようになる心理効果を何と呼ぶか。",
    "options": [
      "ピグマリオン効果（ローゼンタール効果）",
      "プラセボ効果",
      "ゴーレム効果",
      "ストループ効果"
    ],
    "answerIndex": 0,
    "explanation": "人間は他者からの期待や信頼を感じると自己効力感（Self-efficacy）が高まり、モチベーションとパフォーマンスが向上するメカニズムを表します。"
  },
  {
    "id": "mba-ob-019",
    "category": "leadership",
    "categoryName": "組織行動・リーダーシップ (OB & HR)",
    "term": "マトリックス組織",
    "difficulty": "standard",
    "question": "従来の縦割り（職能別や事業部別）の指揮命令系統に加え、製品軸や地域軸、プロジェクト軸などの横断的な指揮命令系統を格子状に組み合わせた組織形態を何と呼ぶか。",
    "options": [
      "マトリックス組織",
      "ピラミッド型組織",
      "純粋持株会社",
      "カンパニー制"
    ],
    "answerIndex": 0,
    "explanation": "情報共有や経営資源の有効活用が進む反面、「ワン・マン・ツー・ボス（1人の社員に2人の上司）」となり、指示の対立や社内調整コストが増大しやすいデメリットがあります。"
  },
  {
    "id": "mba-ob-020",
    "category": "leadership",
    "categoryName": "組織行動・リーダーシップ (OB & HR)",
    "term": "ジョブ型人事制度とメンバーシップ型",
    "difficulty": "basic",
    "question": "職務内容（Job Description）、必要なスキル、責任範囲を明確に定義し、その職務の市場価値に応じて人を採用・処遇する人事制度を何と呼ぶか。",
    "options": [
      "ジョブ型雇用（人事制度）",
      "メンバーシップ型雇用",
      "年功序列制",
      "終身雇用制"
    ],
    "answerIndex": 0,
    "explanation": "「人に仕事をあてる」従来の日本型メンバーシップ型に対し、欧米グローバル標準である「仕事に人をあてる」仕組みです。専門人材の獲得や成果に応じた公平な処遇に適しています。"
  },
  {
    "id": "mba-ob-021",
    "category": "leadership",
    "categoryName": "組織行動・リーダーシップ (OB & HR)",
    "term": "内発的動機づけと外発的動機づけ",
    "difficulty": "basic",
    "question": "金銭的報酬や昇進、処罰の回避などの外部からの刺激によって動機づけられる「外発的動機づけ」に対し、仕事そのものの面白さ、好奇心、成長実感など自らの内面から湧き出る動機づけを何と呼ぶか。",
    "options": [
      "内発的動機づけ (Intrinsic Motivation)",
      "アンダーマイニング効果",
      "条件反射",
      "オペラント条件づけ"
    ],
    "answerIndex": 0,
    "explanation": "クリエイティブな知的能力やイノベーションが求められる現代のナレッジワーカーにおいては、自律性（Autonomy）、熟達（Mastery）、目的（Purpose）に基づく内発的動機づけが極めて重要です。"
  },
  {
    "id": "mba-ops-001",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "TOC（制約理論：Theory of Constraints）",
    "difficulty": "basic",
    "question": "エリヤフ・ゴールドラットのベストセラー『ザ・ゴール』で提唱された、生産ラインや業務プロセス全体のスループットを最大化するために、最も処理能力の低い「ボトルネック工程」に集中して改善を行うマネジメント理論はどれか。",
    "options": [
      "TOC（制約条件の理論）",
      "シックスシグマ",
      "TQM（総合的品質管理）",
      "サプライチェーン・ファイナンス"
    ],
    "answerIndex": 0,
    "explanation": "「鎖の強さは、最も弱い輪の強さで決まる」という原理に基づき、ボトルネックを特定して徹底活用し、他工程のペースをボトルネックに同期させることで仕掛品を劇的に削減します。"
  },
  {
    "id": "mba-ops-002",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "ブルウィップ効果 (Bullwhip Effect)",
    "difficulty": "standard",
    "question": "サプライチェーンにおいて、小売現場における最終消費者の小さな需要変動が、卸、メーカー、原材料供給業者と川上（上流）に遡るにつれて、情報の遅延や安全在庫の積み増しによって増幅され巨大なブレとなる現象を何と呼ぶか。",
    "options": [
      "ブルウィップ効果（鞭効果）",
      "バタフライ効果",
      "ピグー効果",
      "ネットワーク効果"
    ],
    "answerIndex": 0,
    "explanation": "鞭（ブルウィップ）の手元のわずかな振りが先端では巨大なしなりとなることに例えられます。川上から川下までPOSデータ等をリアルタイム共有し情報連携することで防止します。"
  },
  {
    "id": "mba-ops-003",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "トヨタ生産方式 (TPS) の2本柱",
    "difficulty": "basic",
    "question": "世界中の製造業やサービス業（リーン）に多大な影響を与えたトヨタ生産方式（TPS）を支える2つの基本思想の組み合わせとして正しいものはどれか。",
    "options": [
      "「ジャスト・イン・タイム（JIT）」と「自働化（ニンベンの付いたじどうか）」",
      "「多品種少量生産」と「全数検査」",
      "「徹底的な自動機械化」と「大量在庫保有」",
      "「歩留まり最大化」と「外注化の推進」"
    ],
    "answerIndex": 0,
    "explanation": "必要なものを必要な時に必要な量だけ生産・運搬する「JIT」と、異常が発生したら機械が自動で止まり不良品を後工程に流さない「自働化（ポカヨケ・アンドン）」の2本柱です。"
  },
  {
    "id": "mba-ops-004",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "カイゼン（7つのムダ）",
    "difficulty": "basic",
    "question": "リーン・オペレーションにおいて徹底的に排除すべきとされる「7つのムダ（造りすぎ、手待ち、運搬、加工そのもの、在庫、動作、不良をつくる）」の中で、「最も悪質で他のすべてのムダを隠蔽する」とされるムダはどれか。",
    "options": [
      "造りすぎのムダ",
      "手待ちのムダ",
      "運搬のムダ",
      "動作のムダ"
    ],
    "answerIndex": 0,
    "explanation": "「造りすぎのムダ」は、余計な原材料費を消費し、保管場所や運搬を必要とし、不良品の隠蔽を招くため、TPSでは最悪のムダと位置づけられています。"
  },
  {
    "id": "mba-ops-005",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "リードタイム (Lead Time)",
    "difficulty": "basic",
    "question": "発注を行ってから製品が納入されるまでの期間や、原材料が工場に投入されてから完成品として出荷されるまでにかかる総時間を何と呼ぶか。",
    "options": [
      "リードタイム",
      "サイクルタイム",
      "タクトタイム",
      "稼働時間"
    ],
    "answerIndex": 0,
    "explanation": "リードタイムを短縮することは、顧客満足度の向上だけでなく、過剰な安全在庫の削減、キャッシュフロー改善に直結するオペレーションの最重要テーマです。"
  },
  {
    "id": "mba-ops-006",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "タクトタイム (Takt Time)",
    "difficulty": "standard",
    "question": "「市場の需要（顧客の購入ペース）に合わせて、1個の製品を何分何秒で作らなければならないか」を表す生産速度の指標を何と呼ぶか。",
    "options": [
      "タクトタイム（歩調時間）",
      "標準作業時間",
      "ダウンタイム",
      "正味稼働率"
    ],
    "answerIndex": 0,
    "explanation": "「稼働可能時間 ÷ 顧客の必要数」で計算されます。タクトタイムに各工程の作業時間を同期させることで、作りすぎのムダや工程間の仕掛品滞留をなくします。"
  },
  {
    "id": "mba-ops-007",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "シックス・シグマ (Six Sigma)",
    "difficulty": "standard",
    "question": "モトローラで開発されGEのジャック・ウェルチが全社導入して有名になった、製品や業務プロセスのバラツキを抑え、不良品発生率を「100万回あたり3.4回以下」に抑える品質管理・経営改善手法はどれか。",
    "options": [
      "シックス・シグマ",
      "5S活動",
      "QCサークル",
      "カンバン方式"
    ],
    "answerIndex": 0,
    "explanation": "DMAIC（Define：定義、Measure：測定、Analyze：分析、Improve：改善、Control：定着）の5ステップで進めるデータ主導型のプロセス改善フレームワークです。"
  },
  {
    "id": "mba-ops-008",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "遅延化戦略 (Postponement)",
    "difficulty": "standard",
    "question": "製品の組み立てや最終的な味付け・色づけ、パッケージングなどの工程を、顧客からの確定注文が入る直前まで意図的に遅らせて「半製品」で保持することで、在庫リスクの低減と多様なニーズへの迅速な対応を両立する戦略を何と呼ぶか。",
    "options": [
      "遅延化戦略（ポストポーンメント）",
      "先行調達戦略",
      "ロット集約戦略",
      "早期出荷戦略"
    ],
    "answerIndex": 0,
    "explanation": "Benettonの「セーターを無着色の糸で編み上げ、流行色に合わせて後から染める」手法や、DellのBTO（受注生産）モデルなどが代表例です。"
  },
  {
    "id": "mba-ops-009",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "経済的発注量 (EOQ：Economic Order Quantity)",
    "difficulty": "standard",
    "question": "在庫管理において、発注ごとに発生する「発注費用」と、在庫を保管するために発生する「在庫保管費用」の合計が最小となる最適な1回あたり発注量を算出するモデルはどれか。",
    "options": [
      "EOQ（経済的発注量モデル）",
      "ABC分析モデル",
      "安全在庫係数モデル",
      "定期発注方式"
    ],
    "answerIndex": 0,
    "explanation": "発注回数を増やすと発注費が増え、まとめ買いすると保管費用が増えるというトレードオフの均衡点（総費用最小化）を求める古典的数理モデルです。"
  },
  {
    "id": "mba-ops-010",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "SCM（サプライチェーン・マネジメント）",
    "difficulty": "basic",
    "question": "原材料調達から製造、物流、販売、消費者に至る一連の商流・物流・情報流を企業や部門の壁を越えて統合管理し、全体最適によって在庫削減と納期の短縮を図る経営手法を何と呼ぶか。",
    "options": [
      "SCM（サプライチェーン・マネジメント）",
      "CRM（顧客関係管理）",
      "PLM（製品ライフサイクル管理）",
      "BPO（ビジネスプロセスアウトソーシング）"
    ],
    "answerIndex": 0,
    "explanation": "個別最適（各部門や各社が勝手に都合よく動くこと）を排し、サプライチェーン全体で需要情報を共有して全体最適を達成することを目指します。"
  },
  {
    "id": "mba-ops-011",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "5S（整理・整頓・清掃・清潔・躾）",
    "difficulty": "basic",
    "question": "現場管理の基本である5Sにおいて、「必要なものと不要なものを明確に分け、不要なものを直ちに捨てる」ことを指す言葉はどれか。",
    "options": [
      "整理 (Seiri)",
      "整頓 (Seiton)",
      "清掃 (Seisou)",
      "清潔 (Seiketsu)"
    ],
    "answerIndex": 0,
    "explanation": "「整理」は捨てること、「整頓」は必要なものを誰でもすぐ取り出せるように置き場を明示して決めることです。不要なものを捨てずに並べ替えるのは整頓ではなく単なる片付けです。"
  },
  {
    "id": "mba-ops-012",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "VMI（Vendor Managed Inventory）",
    "difficulty": "standard",
    "question": "サプライチェーンにおいて、納入業者（サプライヤー）が納入先（顧客や小売店）の在庫状況や販売データを常時監視し、納入業者側の責任で自動的に補充・在庫管理を行う仕組みを何と呼ぶか。",
    "options": [
      "VMI（ベンダー主導型在庫管理）",
      "ドロップシッピング",
      "受託加工",
      "リバースロジスティクス"
    ],
    "answerIndex": 0,
    "explanation": "ウォルマートとP&Gの連携が有名です。納入先は発注業務の手間を省け、サプライヤーは生産計画を平準化できるWin-WinのSCM施策です。"
  },
  {
    "id": "mba-ops-013",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "歩留まり（歩留率）",
    "difficulty": "basic",
    "question": "製造業などにおいて、投入した原材料の総量に対し、実際に良品として完成した製品の割合（％）を示す生産効率・品質指標はどれか。",
    "options": [
      "歩留まり（Yield Rate）",
      "稼働率",
      "可動率",
      "直行率"
    ],
    "answerIndex": 0,
    "explanation": "半導体製造や精密機械加工、食品加工等で収益性を左右する最重要KPIです。歩留まりが向上すると、同じ原材料費・エネルギー費から取れる良品数が増え、原価が劇的に下がります。"
  },
  {
    "id": "mba-ops-014",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "セル生産方式（屋台方式）",
    "difficulty": "standard",
    "question": "従来のベルトコンベアによる流れ作業（ライン生産）に対し、1人または少数の多能工が作業台（セル）を囲んで、1台の製品の組立から最終検査までを一貫して担当する方式を何と呼ぶか。",
    "options": [
      "セル生産方式",
      "バッチ生産方式",
      "連続生産方式",
      "完全自動化ライン"
    ],
    "answerIndex": 0,
    "explanation": "多品種少量生産に適しており、需要変動に応じたラインの増減が容易で、仕掛品が滞留せず、作業者の責任感やモチベーション向上につながる利点があります。"
  },
  {
    "id": "mba-ops-015",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "カンバン方式 (Kanban)",
    "difficulty": "basic",
    "question": "前工程が部品を作って次工程に無理やり押し込む「プッシュ型」に対し、後工程が必要な時に必要な量だけ前工程に取りに行き、取り出した分だけ前工程が補充する「プル型（後工程引き取り方式）」の情報伝達ツールはどれか。",
    "options": [
      "カンバン（Kanban）",
      "バーコードラベル",
      "作業手順書",
      "出荷伝票"
    ],
    "answerIndex": 0,
    "explanation": "カンバンを回すことで、過剰生産を物理的に防ぎ、中間在庫（仕掛品）を極小化する仕組みです。ソフトウェア開発のアジャイルでも広く応用されています。"
  },
  {
    "id": "mba-ops-016",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "ポカヨケ (Poka-yoke)",
    "difficulty": "basic",
    "question": "作業者が誤った手順を行おうとしたり部品を取り違えようとした際、物理的にセットできないようにしたり警告音で知らせることで、人為的ミス（ポカ）による不良発生を未然に防ぐからくり・治具の仕組みを何と呼ぶか。",
    "options": [
      "ポカヨケ（Error Proofing）",
      "目視全数検査",
      "ダブルチェック",
      "抜き取り検査"
    ],
    "answerIndex": 0,
    "explanation": "「人間の注意深さに頼るな、仕組みでミスを防げ」という思想で、現在では世界中で「Poka-yoke」という英語として定着しています（例：SIMカードの切り欠き、踏切の遮断機）。"
  },
  {
    "id": "mba-ops-017",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "多能工化 (Cross-training)",
    "difficulty": "basic",
    "question": "一人の作業員が単一の工程（旋盤のみなど）しか担当できない「単能工」に対し、複数の異なる工程や機械の操作（溶接、旋盤、検査等）を柔軟にこなせるスキルを身につけさせる施策を何と呼ぶか。",
    "options": [
      "多能工化（マルチスキル化）",
      "専門職化",
      "ジョブローテーション",
      "外部委託化"
    ],
    "answerIndex": 0,
    "explanation": "工程間の負荷の偏り（ボトルネック）や作業員の突発的な欠勤に対して柔軟に応援・人員再配置ができるようになり、生産ラインの停止を防ぎます。"
  },
  {
    "id": "mba-ops-018",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "段取り替え時間の短縮（シングル段取り）",
    "difficulty": "standard",
    "question": "金型の交換や設備の清掃など、製品種類の切り替えにかかる段取り替え時間を「10分未満（一桁台の分）」に短縮する技術・ノウハウをトヨタ生産方式で何と呼ぶか。",
    "options": [
      "シングル段取り（SMED：Single-Minute Exchange of Die）",
      "ダブル段取り",
      "ゼロ段取り",
      "バッチサイズ拡大"
    ],
    "answerIndex": 0,
    "explanation": "機械を止めた状態で行う「内段取り」と、機械を動かしたまま準備できる「外段取り」を徹底的に分離・改善することで、小ロット生産と短納期を可能にします。"
  },
  {
    "id": "mba-ops-019",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "BPR（ビジネスプロセス・リエンジニアリング）",
    "difficulty": "standard",
    "question": "マイケル・ハマーらが提唱した、既存の業務手順の小手先の改善にとどまらず、企業の目標（コスト、品質、サービス、スピード）を劇的に向上させるために、業務プロセスを根本から見直し再設計することを何と呼ぶか。",
    "options": [
      "BPR（Business Process Reengineering）",
      "PDCAサイクル",
      "5S活動",
      "バランスド・スコアカード"
    ],
    "answerIndex": 0,
    "explanation": "縦割りの組織構造や慣習を白紙に戻し、顧客への価値提供というプロセスの視点からITを活用してゼロベースで再構築する手法です。"
  },
  {
    "id": "mba-ops-020",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "リバース・ロジスティクス (Reverse Logistics)",
    "difficulty": "basic",
    "question": "工場から消費者へ向かう通常の物流に対し、消費者や顧客から返品、修理品、リサイクル品、使用済み容器・パレット等を回収・再資源化するための逆方向の物流を何と呼ぶか。",
    "options": [
      "静脈物流（リバース・ロジスティクス）",
      "動脈物流",
      "サードパーティ・ロジスティクス (3PL)",
      "ラストワンマイル配送"
    ],
    "answerIndex": 0,
    "explanation": "循環型経済（サーキュラー・エコノミー）やサステナビリティ、ECでの返品対応の効率化において、競争優位を左右する重要分野です。"
  },
  {
    "id": "mba-ops-021",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "ラストワンマイル (Last Mile)",
    "difficulty": "basic",
    "question": "EC物流や宅配サービスにおいて、最終の配送拠点（物流センターや営業所）からエンドユーザーの自宅や手元に荷物が届くまでの「最後の区間」を指す用語はどれか。",
    "options": [
      "ラストワンマイル",
      "幹線輸送",
      "クロスドッキング",
      "ハブ＆スポーク"
    ],
    "answerIndex": 0,
    "explanation": "宅配ドライバーの人手不足や再配達問題が深刻化する一方で、顧客満足度やブランド体験に最も直結する物流の最激戦区です。"
  },
  {
    "id": "mba-dx-001",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "イノベーションのジレンマ",
    "difficulty": "basic",
    "question": "ハーバード・ビジネススクールのクレイトン・クリステンセン教授が提唱した、優良企業が既存顧客の要望に真摯に耳を傾け、高品質で高機能な製品を正しく開発し続けた結果、市場下位から台頭したシンプルな新興技術に足をすくわれて敗北する現象を何と呼ぶか。",
    "options": [
      "イノベーションのジレンマ",
      "死の谷（デスバレー）",
      "ダーウィンの海",
      "囚人のジレンマ"
    ],
    "answerIndex": 0,
    "explanation": "「持続的イノベーション（既存の高収益顧客向けの高性能化）」に真面目に取り組む優良企業ほど、「破壊的イノベーション（最初は低性能・低価格だが別軸の利便性を持つ技術）」を無視してしまい、やがて市場を奪われます。"
  },
  {
    "id": "mba-dx-002",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "破壊的イノベーション (Disruptive Innovation)",
    "difficulty": "standard",
    "question": "破壊的イノベーションの典型的な2つの型として正しい組み合わせはどれか。",
    "options": [
      "ローエンド型破壊 と 新市場型破壊",
      "持続型破壊 と 漸進型破壊",
      "クローズド型破壊 と プラットフォーム型破壊",
      "ハードウェア型破壊 と ソフトウェア型破壊"
    ],
    "answerIndex": 0,
    "explanation": "既存客にとって「過剰スペック（オーバースペック）」となった市場の最底辺を低価格・シンプルさで奪う「ローエンド型」と、これまで製品を使えなかった非消費者をターゲットにする「新市場型」があります。"
  },
  {
    "id": "mba-dx-003",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "SaaSの最重要指標：ARRとMRR",
    "difficulty": "basic",
    "question": "サブスクリプション型SaaSビジネスにおいて、毎月繰り返し得られる定期収益をMRRと呼ぶが、これを年換算した「年間経常収益（毎年確実に得られる契約売上高）」を表す略称はどれか。",
    "options": [
      "ARR（Annual Recurring Revenue）",
      "GMV（流通取引総額）",
      "EBITDA",
      "ROAS（広告費用対効果）"
    ],
    "answerIndex": 0,
    "explanation": "単発の売り切り型売上と異なり、予測可能性が高く安定したキャッシュフローを示すため、SaaS企業のバリュエーション（企業価値評価）の根幹指標となります。"
  },
  {
    "id": "mba-dx-004",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "NRR（Net Revenue Retention：売上継続率）",
    "difficulty": "standard",
    "question": "既存顧客からの売上が、アップセルやクロスセルによる増加、解約やダウングレードによる減少を含めて1年後に何％維持・成長しているかを示すSaaS指標NRRにおいて、優良企業のベンチマークとされる水準はどれか。",
    "options": [
      "100%を大きく超えている（110%〜130%以上）",
      "ちょうど50%前後",
      "新規顧客獲得数と同じ数値",
      "チャーンレートと同じ数値"
    ],
    "answerIndex": 0,
    "explanation": "NRRが100%を超える（ネット・ネガティブ・チャーン）ということは、新規顧客を一切獲得しなくても既存顧客の追加利用だけで売上が前年比で自然増していく極めて強い事業状態を示します。"
  },
  {
    "id": "mba-dx-005",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "MVP（Minimum Viable Product）",
    "difficulty": "basic",
    "question": "エリック・リースの『リーン・スタートアップ』において、実用最小限の機能だけを備え、最小限の時間と労力で初期顧客に提供して実証・学習サイクルを回すための製品試作品を何と呼ぶか。",
    "options": [
      "MVP（実用最小限の製品）",
      "ベータ版完成品",
      "モックアップ",
      "量産試作機"
    ],
    "answerIndex": 0,
    "explanation": "最初から完璧な製品を作り込んで市場に出すのではなく、仮説検証に必要な最小限のプロトタイプを素早く世に出し、顧客の反応（データ）から学ぶことで無駄な投資を防ぎます。"
  },
  {
    "id": "mba-dx-006",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "PMF（Product Market Fit）",
    "difficulty": "basic",
    "question": "スタートアップや新規事業において、「自社の製品が、急成長する有望な市場のニーズに完全に適合し、顧客が熱狂して自発的に広がる状態」を何と呼ぶか。",
    "options": [
      "PMF（プロダクト・マーケット・フィット）",
      "PoC（概念実証）",
      "IPO（新規株式公開）",
      "M&A（企業の買収・合併）"
    ],
    "answerIndex": 0,
    "explanation": "PMFを達成する前に多額の広告費を使って拡大しようとすると、穴の空いたバケツに水を注ぐように資金が尽きて失敗します。PMF達成後にアクセルを踏むのが鉄則です。"
  },
  {
    "id": "mba-dx-007",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "PoC（Proof of Concept：概念実証）",
    "difficulty": "basic",
    "question": "新しい技術（AI、IoT、ブロックチェーン等）や斬新なビジネスモデルを本格開発する前に、小規模な実証実験を行い、技術的実現性やビジネス上の有効性を確認するプロセスを何と呼ぶか。",
    "options": [
      "PoC（概念実証）",
      "ROI測定",
      "ストレステスト",
      "デューデリジェンス"
    ],
    "answerIndex": 0,
    "explanation": "多額の投資判断を下す前にリスクを最小化するために実施されますが、実証実験ばかり繰り返して本番導入に進まない「PoC死」が日本企業の課題となっています。"
  },
  {
    "id": "mba-dx-008",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "アジャイル開発とスクラム",
    "difficulty": "basic",
    "question": "従来の仕様を完全に固めてから順に工程を進める「ウォーターフォール開発」に対し、1〜4週間の短い期間（スプリント）で設計・開発・テストを繰り返し、変化に柔軟に対応する開発手法を何と呼ぶか。",
    "options": [
      "アジャイル開発（Agile）",
      "受託一括開発",
      "フェーズゲート法",
      "クリティカルパス法"
    ],
    "answerIndex": 0,
    "explanation": "不確実性の高いDXやWebサービス開発において、顧客からのフィードバックを即座に取り込みながらプロダクトを進化させる標準的な開発手法です。"
  },
  {
    "id": "mba-dx-009",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "デザイン思考 (Design Thinking)",
    "difficulty": "standard",
    "question": "スタンフォード大学d.schoolやIDEOが体系化した、デザイナーの感性や手法をビジネスの課題解決に応用するデザイン思考の5つのプロセスの正しい順序はどれか。",
    "options": [
      "共感（Empathize） → 問題定義（Define） → アイデア創出（Ideate） → 試作（Prototype） → テスト（Test）",
      "調査（Survey） → 分析（Analyze） → 企画（Plan） → 開発（Develop） → 販売（Sell）",
      "仮説（Hypothesis） → 検証（Verify） → 修正（Fix） → 納品（Deliver） → 評価（Review）",
      "観察（Observe） → 設計（Design） → 製作（Build） → 広告（Promote） → 終了（Done）"
    ],
    "answerIndex": 0,
    "explanation": "徹底した人間中心（ユーザーへの共感）からスタートし、手を動かして素早くプロトタイプを作ってテストと失敗を重ねながら真の解決策を探索します。"
  },
  {
    "id": "mba-dx-010",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "デジタライゼーションとデジタルトランスフォーメーション (DX)",
    "difficulty": "basic",
    "question": "紙の電子化や単一業務の自動化を指す「デジタイゼーション」、業務プロセスのデジタル化を指す「デジタライゼーション」に対し、真の「デジタルトランスフォーメーション（DX）」が目指すゴールとして最も適切なものはどれか。",
    "options": [
      "データとデジタル技術を活用して、ビジネスモデルや組織・企業文化そのものを変革し、競争優位を確立すること",
      "社内のPCやタブレット端末を最新機種に入れ替えること",
      "すべての会議をオンライン（Zoom等）に移行すること",
      "社内基幹システムをオンプレミスから単にクラウドへ移行すること"
    ],
    "answerIndex": 0,
    "explanation": "経済産業省のDX定義にもある通り、単なるITツールの導入にとどまらず、顧客への提供価値、ビジネスモデル、企業カルチャーを根本から変革することがDXの本質です。"
  },
  {
    "id": "mba-dx-011",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "APIエコノミー",
    "difficulty": "standard",
    "question": "自社のソフトウェアや保有データ、決済・認証などの機能を外部企業が自由に接続・連携できる形式（Web API）で公開し、他社サービスと結びつくことで新たな経済圏や価値を創出する仕組みを何と呼ぶか。",
    "options": [
      "APIエコノミー",
      "クローズド・システム",
      "イントラネット",
      "ファイアウォール・エコノミー"
    ],
    "answerIndex": 0,
    "explanation": "Stripe（決済）、Google Maps（地図）、Twilio（通信）などのように、自社機能をAPIとして提供することで世界中のアプリに組み込まれ、指数関数的なエコシステムを築くモデルです。"
  },
  {
    "id": "mba-dx-012",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "ピボット (Pivot)",
    "difficulty": "basic",
    "question": "スタートアップや新規事業において、当初立てたビジネスモデルの仮説が市場に適合しないと分かった際、軸足（コア技術やビジョン）を残しながら事業戦略やターゲット、提供価値の方向性を機敏に転換することを何と呼ぶか。",
    "options": [
      "ピボット（Pivot）",
      "ロールバック",
      "スクラップ＆ビルド",
      "リバランス"
    ],
    "answerIndex": 0,
    "explanation": "バスケットボールのピボット（片足を軸にして方向を変える）に由来します。Slack（ゲーム開発からチャットツールへ）やYouTube（デート動画サイトから動画共有へ）など、大成功企業の多くがピボットを経て飛躍しています。"
  },
  {
    "id": "mba-dx-013",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "サブスクリプション・ビジネスと所有から利用へ",
    "difficulty": "basic",
    "question": "消費者が製品を「買い取って所有」するのではなく、必要な期間だけ「利用する権利」に対価（定額料金）を支払うビジネスモデルへのシフトの本質的なメリットとして誤っているものはどれか。",
    "options": [
      "一度販売してしまえば、その後顧客とのコミュニケーションを取る必要が一切なくなること",
      "企業側にとっては、売切型と比べて安定的・予測可能な継続収益（リカーリングレベニュー）が得られること",
      "顧客側にとっては、初期費用を抑えて手軽に最新サービスを利用できること",
      "利用データを通じて顧客行動を継続的に分析し、サービス改善やLTV最大化を図れること"
    ],
    "answerIndex": 0,
    "explanation": "サブスクリプションの本質は「販売して終わり」ではなく「利用開始からが顧客関係の始まり」である点です。継続的な価値提供とカスタマーサクセスが不可欠です。"
  },
  {
    "id": "mba-dx-014",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "死の谷 (Valley of Death)",
    "difficulty": "standard",
    "question": "研究開発型ベンチャー企業や新規事業において、初期の基礎研究や技術開発に成功した後、それを製品化・量産化して商業化の軌道に乗せるまでの間に資金が尽きて倒産する難関フェーズを何と呼ぶか。",
    "options": [
      "死の谷（Valley of Death）",
      "ダーウィンの海",
      "魔の川",
      "キャズム"
    ],
    "answerIndex": 0,
    "explanation": "魔の川（研究から開発への関門）→死の谷（開発から事業化への関門）→ダーウィンの海（事業化から市場での生き残り・競争の関門）という技術経営（MOT）の3大難関の一つです。"
  },
  {
    "id": "mba-dx-015",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "データドリブン経営",
    "difficulty": "basic",
    "question": "経営者の経験や勘、度胸（KKD）だけに頼る意思決定を脱却し、蓄積されたPOSデータ、アクセスログ、顧客行動データなどの定量的な分析結果に基づいて戦略や意思決定を行うアプローチを何と呼ぶか。",
    "options": [
      "データドリブン経営",
      "トップダウン専制経営",
      "コンセンサス経営",
      "成り行き経営"
    ],
    "answerIndex": 0,
    "explanation": "意思決定のスピードと確からしさを高め、組織的な仮説検証サイクル（PDCA）を高速化するためのDX時代の基本姿勢です。"
  },
  {
    "id": "mba-dx-016",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "プラットフォームのロックイン効果",
    "difficulty": "standard",
    "question": "ユーザーが特定のプラットフォームやOS（iOS、Android等）を使い続けるうちに、購入したアプリ、保存された写真やデータ、操作の習熟度などが蓄積され、他社プラットフォームへ乗り換えにくくなる現象を何と呼ぶか。",
    "options": [
      "ロックイン効果（Lock-in Effect）",
      "スピルオーバー効果",
      "スノッブ効果",
      "アンダーマイニング効果"
    ],
    "answerIndex": 0,
    "explanation": "高いスイッチングコストを創出して顧客離反を防ぎ、LTV（生涯顧客価値）を極大化するためのプラットフォームビジネスの強力な堀（Moat）となります。"
  },
  {
    "id": "mba-dx-017",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "ノーコード・ローコード開発",
    "difficulty": "basic",
    "question": "複雑なプログラミング言語のコードを一から記述することなく、視覚的なGUI（ドラッグ＆ドロップ操作等）を使って業務アプリやWebサイトを迅速に構築できる開発ツールを何と呼ぶか。",
    "options": [
      "ノーコード・ローコード（No-code / Low-code）",
      "オープンソース・アセンブラ",
      "ハードコーディング",
      "オブジェクト指向プログラミング"
    ],
    "answerIndex": 0,
    "explanation": "非エンジニアの現場部門（シチズンデベロッパー）が自ら業務自動化やプロトタイプ開発を推進できるため、現場主導のDXを加速する手段として注目されています。"
  },
  {
    "id": "mba-dx-018",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "サービタイゼーション (Servitization)",
    "difficulty": "standard",
    "question": "製造業が単に「機械や製品を売り切る（モノ売り）」ビジネスから脱却し、IoTで稼働データを監視しながら「保全、運用最適化、成果保証（コト売り）」などの高収益サービスを提供するビジネスモデル転換を何と呼ぶか。",
    "options": [
      "サービタイゼーション（製造業のサービス化）",
      "ファブレス化",
      "OEM化",
      "ディスインフォメーション"
    ],
    "answerIndex": 0,
    "explanation": "ロールス・ロイスが航空機エンジンを売るのではなく「エンジンの飛行稼働時間（Power by the Hour）」に応じて課金するモデルや、建設機械の稼働モニタリング（コマツのKOMTRAX）が代表例です。"
  },
  {
    "id": "mba-dx-019",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "ゼロパーティデータ",
    "difficulty": "standard",
    "question": "プライバシー規制強化（Cookie規制等）が進む中、顧客が自らの意図で能動的・明示的に企業と共有するデータ（自身の好み、関心事、購入意図、生活スタイル等）を何と呼ぶか。",
    "options": [
      "ゼロパーティデータ",
      "ファーストパーティデータ",
      "セカンドパーティデータ",
      "サードパーティCookie"
    ],
    "answerIndex": 0,
    "explanation": "アンケートや診断コンテンツなどを通じて顧客から直接提供される高精度な意図データであり、個客にパーソナライズされた価値提案を行うための最重要資産となっています。"
  },
  {
    "id": "mba-dx-020",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "リーン・スタートアップの構築・計測・学習ループ",
    "difficulty": "basic",
    "question": "リーン・スタートアップにおける、無駄を削ぎ落として素早く仮説検証を回す「フィードバックループ」の3つの要素の正しい順序はどれか。",
    "options": [
      "構築（Build） → 計測（Measure） → 学習（Learn）",
      "計画（Plan） → 実行（Do） → 是正（Action）",
      "調査（Survey） → 分析（Analyze） → 発表（Report）",
      "資金調達（Finance） → 採用（Hire） → 拡大（Scale）"
    ],
    "answerIndex": 0,
    "explanation": "アイデアから最小限の製品を作り（Build）、顧客の反応や行動データを測定し（Measure）、仮説が合っていたか検証して学び（Learn）、ピボットか継続かを判断します。"
  },
  {
    "id": "mba-dx-021",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "生成AIとプロンプトエンジニアリング",
    "difficulty": "basic",
    "question": "大規模言語モデル（LLM）などの生成AIから、ビジネスの実務において最も高精度で意図に沿った出力や洞察を引き出すために、入力指示文（プロンプト）を論理的・構造的に最適化する技術を何と呼ぶか。",
    "options": [
      "プロンプトエンジニアリング",
      "リバースエンジニアリング",
      "ソーシャルエンジニアリング",
      "コンパイラ最適化"
    ],
    "answerIndex": 0,
    "explanation": "役割の指定、明確なコンテキスト付与、制約条件、出力フォーマットの明示（Few-shotプロンプティング等）を駆使し、ビジネス意思決定や分析の生産性を飛躍的に高めるスキルです。"
  },
  {
    "id": "mba-data-001",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "MECE（ミーシー）",
    "difficulty": "basic",
    "question": "マッキンゼーをはじめとする戦略コンサルティングやロジカルシンキングの基本概念で、「モレなく、ダブりなく」対象を分解・整理することを意味する略称はどれか。",
    "options": [
      "MECE（Mutually Exclusive, Collectively Exhaustive）",
      "SMARTの法則",
      "ロジックツリー",
      "フィッシュボーンダイアグラム"
    ],
    "answerIndex": 0,
    "explanation": "全体を漏れや重複のない要素に分解することで、見落としによるリスクを防ぎ、問題の本質（真因）を正確に特定するための論理的思考の最重要ツールです。"
  },
  {
    "id": "mba-data-002",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "A/Bテスト（ランダム化比較実験）",
    "difficulty": "basic",
    "question": "Webサイトのボタン色や広告コピー、料金プランなどにおいて、ユーザーを無作為にグループAとグループBに振り分け、どちらがより高いコンバージョン率（成果）をもたらすかを統計的に検証する手法を何と呼ぶか。",
    "options": [
      "A/Bテスト（Split Run Test）",
      "回帰分析",
      "フォーカスグループインタビュー",
      "ベンチマークテスト"
    ],
    "answerIndex": 0,
    "explanation": "個人の主観や好みに頼る議論を排し、実際のユーザー行動の客観的なデータ（統計的有意差）に基づいて最適な施策を選択するデータドリブンの代表的手法です。"
  },
  {
    "id": "mba-data-003",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "意思決定ツリーと期待値 (Expected Value)",
    "difficulty": "standard",
    "question": "不確実な状況下での投資判断において、発生しうる各シナリオの「発生確率」と、その時に得られる「利益（ペイオフ）」を掛け合わせて合計した、平均的に期待できる金銭的価値を何と呼ぶか。",
    "options": [
      "期待値（Expected Monetary Value）",
      "中央値（メディアン）",
      "最頻値（モード）",
      "標準偏差"
    ],
    "answerIndex": 0,
    "explanation": "例えば「60%の確率で1億円の利益、40%の確率で▲2,000万円の損失」の場合、期待値＝（1億×0.6）＋（▲2,000万×0.4）＝6,000万−800万＝5,200万円と定量的に比較評価できます。"
  },
  {
    "id": "mba-data-004",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "相関関係と因果関係 (Correlation vs Causation)",
    "difficulty": "basic",
    "question": "「2つの事象が連動して変化する関係（相関関係）」と、「一方が原因となって他方の結果を引き起こす関係（因果関係）」の混同に関する記述として、最も適切なものはどれか。",
    "options": [
      "相関関係があるからといって、必ずしも因果関係があるとは限らない（第3の交絡因子の存在等）",
      "相関関係が確認されれば、必ず因果関係も成立する",
      "相関関係と因果関係は統計学上まったく同じ概念である",
      "因果関係を証明するためには単なるアンケート調査だけで十分である"
    ],
    "answerIndex": 0,
    "explanation": "「交番の数が多い地域ほど犯罪件数が多い（真の原因は人口の多さ）」のように、見かけ上の相関（疑似相関）に騙されて誤った経営判断を下さないことが定量分析のリテラシーです。"
  },
  {
    "id": "mba-data-005",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "パレートの法則（80対20の法則）",
    "difficulty": "basic",
    "question": "経済やビジネス現象において、「全体の成果（売上高や利益）の大部分（約80%）は、全体のわずかな要素（約20%の優良顧客や主力製品）によってもたらされている」という経験則を何と呼ぶか。",
    "options": [
      "パレートの法則（ABC分析）",
      "ムーアの法則",
      "グレシャムの法則",
      "メタカーフの法則"
    ],
    "answerIndex": 0,
    "explanation": "経営資源（ヒト・モノ・カネ）をすべてに平等に配分するのではなく、最も成果に直結する上位2割の顧客や重点製品に集中投下する「重点管理」の論理的根拠となります。"
  },
  {
    "id": "mba-data-006",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "単回帰分析と重回帰分析",
    "difficulty": "standard",
    "question": "売上高（目的変数・結果）に対して、広告宣伝費、店舗面積、周辺人口など複数の要因（説明変数・原因）がそれぞれどの程度影響を与えているかを数式化・予測する統計手法を何と呼ぶか。",
    "options": [
      "重回帰分析（Multiple Regression Analysis）",
      "主成分分析",
      "クラスター分析",
      "コレスポンデンス分析"
    ],
    "answerIndex": 0,
    "explanation": "要因が1つの場合は単回帰分析、複数要因の影響度（偏回帰係数）と貢献度（決定係数R2）を検証する場合は重回帰分析を用います。"
  },
  {
    "id": "mba-data-007",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "標準偏差と正規分布",
    "difficulty": "basic",
    "question": "データの平均値からの「ばらつき（散らばり）の大きさ」を定量的に表す指標であり、投資リスクの尺度や品質管理（シグマ）で中心的な役割を果たす統計値はどれか。",
    "options": [
      "標準偏差（Standard Deviation：σ）",
      "平均値（Mean）",
      "範囲（レンジ）",
      "歪度（Skewness）"
    ],
    "answerIndex": 0,
    "explanation": "ファイナンスにおいて投資リターンの振れ幅（ボラティリティ＝リスク）を測る物差しであり、正規分布では「平均値±1σ」に約68.3%、「平均値±2σ」に約95.4%のデータが収まります。"
  },
  {
    "id": "mba-data-008",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "仮説検定とp値（有意水準）",
    "difficulty": "standard",
    "question": "新機能の導入前後で顧客満足度に差があるかを検証する際、「差がない」という仮説（帰無仮説）を立て、これが偶然起きる確率（p値）が設定した基準（通常5%未満）を下回った場合に「統計的に意味のある有意な差がある」と判断する手法を何と呼ぶか。",
    "options": [
      "統計的仮説検定",
      "モンテカルロ法",
      "感応度テスト",
      "時系列平滑化"
    ],
    "answerIndex": 0,
    "explanation": "偶然のばらつき（ノイズ）と、真の効果（シグナル）を客観的・数学的に峻別するための統計的意思決定手法です。"
  },
  {
    "id": "mba-data-009",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "感応度分析（センシティビティ分析）",
    "difficulty": "standard",
    "question": "事業計画や投資回収モデルにおいて、為替レート、原材料価格、販売単価などの主要な前提変数が10%悪化・好転した際、最終利益やNPVがどの程度変動するかをシミュレーションする手法を何と呼ぶか。",
    "options": [
      "感応度分析（センシティビティ分析）",
      "ブレインストーミング",
      "デルファイ法",
      "ストレステスト"
    ],
    "answerIndex": 0,
    "explanation": "「どの変数のブレが事業計画に最も致命的な打撃を与えるか（最も敏感なリスク要因）」を特定し、重点的なリスクヘッジ策を打つために活用されます。"
  },
  {
    "id": "mba-data-010",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "アンカリング効果 (Anchoring Effect)",
    "difficulty": "basic",
    "question": "価格交渉や意思決定において、最初に提示された特定の数値（アンカー・錨）に思考が強く引っ張られ、その後の判断や評価が無意識に偏ってしまう認知バイアスを何と呼ぶか。",
    "options": [
      "アンカリング効果",
      "バンドワゴン効果",
      "フレーミング効果",
      "サンクコスト効果"
    ],
    "answerIndex": 0,
    "explanation": "「通常価格50,000円のところ、今だけ19,800円！」のように、最初の5万円というアンカーを見せられると、19,800円が絶対的価値以上に割安に感じてしまう心理効果です。"
  },
  {
    "id": "mba-data-011",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "プロスペクト理論と損失回避性",
    "difficulty": "standard",
    "question": "行動経済学のダニエル・カーネマンとエイモス・トベルスキーが提唱した、人間は「同額の利益を得る喜び」よりも「同額の損失を被る痛み」を約2倍強く感じるという心理特性を何と呼ぶか。",
    "options": [
      "損失回避性（Loss Aversion）",
      "リスク中立性",
      "現状維持バイアス",
      "保有効果"
    ],
    "answerIndex": 0,
    "explanation": "1万円拾った嬉しさよりも、1万円落としたショックの方がはるかに大きく、投資の損切り（ロスカット）が遅れる原因となります。"
  },
  {
    "id": "mba-data-012",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "フレーミング効果 (Framing Effect)",
    "difficulty": "basic",
    "question": "実質的な意味や客観的確率は全く同一であるにもかかわらず、提示する表現の枠組み（フレーム）を変えるだけで、相手の受け止め方や意思決定が劇的に変化する現象を何と呼ぶか。",
    "options": [
      "フレーミング効果",
      "ハロー効果",
      "初頭効果",
      "親近効果"
    ],
    "answerIndex": 0,
    "explanation": "「手術の死亡率は10%です」と説明されると怖気づくが、「手術の成功率は90%です」と説明されると安心感を持って承諾してしまう心理現象です。"
  },
  {
    "id": "mba-data-013",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "フェルミ推定 (Fermi Estimation)",
    "difficulty": "basic",
    "question": "「日本全国に電柱は何本あるか？」「シカゴにピアノ調律師は何人いるか？」のように、一見調査が不可能な把握困難な数量を、論理的な手がかりと概算ロジックを用いて短時間で概算する手法を何と呼ぶか。",
    "options": [
      "フェルミ推定",
      "モンテカルロ法",
      "デルファイ法",
      "全数センサス調査"
    ],
    "answerIndex": 0,
    "explanation": "物理学者エンリコ・フェルミに由来し、マッキンゼー等の戦略コンサルティング面接や、新規事業の市場規模（TAM）の初期推計で必須の論理的思考スキルです。"
  },
  {
    "id": "mba-data-014",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "ロジックツリー（WhyツリーとHowツリー）",
    "difficulty": "basic",
    "question": "ある主要な問題を頂点に置き、MECE（モレなくダブりなく）のルールに基づいて「なぜ（Why）？」を繰り返して原因を深掘りしたり、「どうやって（How）？」を繰り返して具体策を展開する樹形図を何と呼ぶか。",
    "options": [
      "ロジックツリー",
      "組織図",
      "デシジョンツリー",
      "PERT図"
    ],
    "answerIndex": 0,
    "explanation": "問題の原因特定（Whyツリー）や施策のアイデア出し（Howツリー）、KPIの因数分解（KPIツリー）など、複雑な経営課題を解像度高く分解してアクションに落とし込むツールです。"
  },
  {
    "id": "mba-data-015",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "生存者バイアス (Survivorship Bias)",
    "difficulty": "standard",
    "question": "成功を収めた一握りの企業や人物（生存者）の共通点や行動パターンばかりを熱心に分析し、同じ行動をとって脱落・倒産していった膨大な敗者（非生存者）の存在を無視してしまう論理的誤謬を何と呼ぶか。",
    "options": [
      "生存者バイアス",
      "結果バイアス",
      "後知恵バイアス",
      "楽観主義バイアス"
    ],
    "answerIndex": 0,
    "explanation": "「成功した起業家は全員睡眠時間を削っていたから、寝る間を惜しめば成功する」のように、失敗例を無視した偏った教訓を導き出してしまう危険な罠です。"
  },
  {
    "id": "mba-data-016",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "コホート分析 (Cohort Analysis)",
    "difficulty": "standard",
    "question": "ユーザーを登録月や初回購入時期などの「共通の属性や開始時期を持つグループ（コホート）」ごとに分類し、時間の経過に伴うリピート率や残存率（継続率）の変化を時系列で追跡する分析手法を何と呼ぶか。",
    "options": [
      "コホート分析（コホートマトリクス）",
      "クロス集計分析",
      "ファンネル分析",
      "トレンド分析"
    ],
    "answerIndex": 0,
    "explanation": "SaaSやアプリにおいて、プロダクト改善や機能追加の前後で、新しく獲得したユーザー層の定着率が過去のユーザー層と比べて向上しているかどうかを検証するために多用されます。"
  },
  {
    "id": "mba-data-017",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "決定木（ディシジョン・ツリー）分析",
    "difficulty": "standard",
    "question": "機械学習やデータマイニングにおいて、目的とする結果（成約／不成約など）を予測するために、データを条件分岐（IF-THENルール）の樹形図として可視化し、分類や回帰を行うアルゴリズムを何と呼ぶか。",
    "options": [
      "決定木（Decision Tree）",
      "ニューラルネットワーク",
      "サポートベクターマシン",
      "主成分回帰"
    ],
    "answerIndex": 0,
    "explanation": "ブラックボックスになりがちなAIモデルと異なり、「どのような条件の顧客が購入しやすいか」を直感的に人間が解釈・説明しやすい特徴があります。"
  },
  {
    "id": "mba-data-018",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "KPIツリー（重要業績評価指標の因数分解）",
    "difficulty": "basic",
    "question": "KGI（重要目標達成指標：例として売上高）を達成するために、売上高＝「顧客数 × 客単価」＝「（新規顧客＋既存顧客）×（購買頻度×1回あたり購買点数×商品単価）」のように数式で因数分解した階層図を何と呼ぶか。",
    "options": [
      "KPIツリー",
      "バリューチェーンマップ",
      "ガントチャート",
      "PERTネットワーク"
    ],
    "answerIndex": 0,
    "explanation": "漠然と「売上を伸ばせ」と指示するのではなく、どのレバー（指標）を何％改善すれば全体目標に届くかを現場のアクションレベルまで明確にするツールです。"
  },
  {
    "id": "mba-data-019",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "シンプソンのパラドックス (Simpson's Paradox)",
    "difficulty": "standard",
    "question": "データを複数のグループに細分化して分析すると各グループ内では一貫して「A ＞ B」という関係が成り立っているのに、データをすべて合算して全体で見ると逆の「B ＞ A」という結論になってしまう統計の逆転現象を何と呼ぶか。",
    "options": [
      "シンプソンのパラドックス",
      "モンティ・ホール問題",
      "平均への回帰",
      "囚人のジレンマ"
    ],
    "answerIndex": 0,
    "explanation": "グループごとのサンプル数や属性比率の違いが原因で発生します。合算データだけを見て誤った経営判断を下さないための高度な統計的教訓です。"
  },
  {
    "id": "mba-data-020",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "平均値・中央値・最頻値の使い分け",
    "difficulty": "basic",
    "question": "日本の世帯所得や個人の純資産額のように、一部の極端な大富豪（外れ値）が存在してデータが正の方向に大きく歪んでいる分布において、「一般的な生活水準の実態」を把握するのに最も適した代表値はどれか。",
    "options": [
      "中央値（メディアン）",
      "相加平均値",
      "相乗平均値",
      "最大値"
    ],
    "answerIndex": 0,
    "explanation": "外れ値に引っ張られて平均値は実態より高くなりやすいため、データを小さい順に並べたちょうど真ん中の値である「中央値」を見るのが鉄則です。"
  },
  {
    "id": "mba-data-021",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "外れ値 (Outliers) の扱い",
    "difficulty": "basic",
    "question": "データ分析において、他のデータ群から極端に離れた異常値（外れ値）を発見した際のデータサイエンス的な対処として最も適切なものはどれか。",
    "options": [
      "入力ミス等の異常データか、革新的な顧客セグメントの予兆（異常な高額購買者など）か理由を精査し、分析目的に応じて適切に除外または別枠分析する",
      "理由を調べることなく直ちにすべての外れ値を自動削除する",
      "すべての外れ値を無理やり平均値に置き換えて計算する",
      "外れ値をそのまま放置し、通常の平均値だけをレポートする"
    ],
    "answerIndex": 0,
    "explanation": "外れ値は単なるノイズの場合もありますが、時に新たなビジネスチャンスや重大な不正・不具合の兆候を示す貴重なシグナルとなります。"
  }
];

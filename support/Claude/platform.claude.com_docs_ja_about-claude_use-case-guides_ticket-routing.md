---
url: "https://platform.claude.com/docs/ja/about-claude/use-case-guides/ticket-routing"
title: "チケットルーティング - Claude Docs"
---

[Claude Documentation Home](https://platform.claude.com/docs/ja/home)

- [開発者ガイド](https://platform.claude.com/docs/ja/intro)
- [APIリファレンス](https://platform.claude.com/docs/ja/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [リソース](https://platform.claude.com/docs/ja/resources/overview)
- [リリースノート](https://platform.claude.com/docs/ja/release-notes/overview)

日本語

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fja%2Fabout-claude%2Fuse-case-guides%2Fticket-routing)

Search...

⌘K

リソース

[概要](https://platform.claude.com/docs/ja/resources/overview) [用語集](https://platform.claude.com/docs/ja/about-claude/glossary) [システムプロンプト](https://platform.claude.com/docs/ja/release-notes/system-prompts)

ユースケース

[概要](https://platform.claude.com/docs/ja/about-claude/use-case-guides/overview) [チケットルーティング](https://platform.claude.com/docs/ja/about-claude/use-case-guides/ticket-routing) [カスタマーサポートエージェント](https://platform.claude.com/docs/ja/about-claude/use-case-guides/customer-support-chat) [コンテンツモデレーション](https://platform.claude.com/docs/ja/about-claude/use-case-guides/content-moderation) [法的要約](https://platform.claude.com/docs/ja/about-claude/use-case-guides/legal-summarization)

プロンプトライブラリ

[Console](https://platform.claude.com/)

[Log in](https://platform.claude.com/login)

ユースケース

チケットルーティング

ユースケース

# チケットルーティング

Copy page

このガイドでは、Claudeの高度な自然言語理解機能を活用して、顧客の意図、緊急度、優先度、顧客プロファイルなどに基づいて、カスタマーサポートチケットを大規模に分類する方法について説明します。

Copy page

## チケットルーティングにClaudeを使用するかどうかを決定する

分類タスクに従来のMLアプローチではなく、Claudeのような大規模言語モデルを使用すべき主要な指標をいくつか示します：

### 利用可能なラベル付きトレーニングデータが限られている

### 分類カテゴリが時間の経過とともに変更または進化する可能性が高い

### 複雑で非構造化されたテキスト入力を処理する必要がある

### 分類ルールが意味的理解に基づいている

### 分類決定に対する解釈可能な推論が必要

### エッジケースや曖昧なチケットをより効果的に処理したい

### 別々のモデルを維持することなく多言語サポートが必要

* * *

## LLMサポートワークフローの構築とデプロイ

### 現在のサポートアプローチを理解する

自動化に飛び込む前に、既存のチケットシステムを理解することが重要です。サポートチームが現在どのようにチケットルーティングを処理しているかを調査することから始めましょう。

次のような質問を考慮してください：

- どのSLA/サービス提供が適用されるかを決定するためにどのような基準が使用されますか？
- チケットルーティングは、チケットがどのサポート層や製品スペシャリストに送られるかを決定するために使用されますか？
- すでに自動化されたルールやワークフローはありますか？どのような場合に失敗しますか？
- エッジケースや曖昧なチケットはどのように処理されますか？
- チームはどのようにチケットを優先順位付けしますか？

人間が特定のケースをどのように処理するかを知れば知るほど、Claudeと協力してそのタスクを実行する能力が向上します。

### ユーザー意図カテゴリを定義する

明確に定義されたユーザー意図カテゴリのリストは、Claudeによる正確なサポートチケット分類にとって重要です。Claudeがシステム内でチケットを効果的にルーティングする能力は、システムのカテゴリがどれだけ明確に定義されているかに直接比例します。

以下は、ユーザー意図カテゴリとサブカテゴリの例です。

### 技術的問題

### アカウント管理

### 製品情報

### ユーザーガイダンス

### フィードバック

### 注文関連

### サービスリクエスト

### セキュリティの懸念

### コンプライアンスと法的事項

### 緊急サポート

### トレーニングと教育

### 統合とAPI

意図に加えて、チケットルーティングと優先順位付けは、緊急度、顧客タイプ、SLA、または言語などの他の要因によっても影響を受ける可能性があります。自動ルーティングシステムを構築する際は、他のルーティング基準も考慮してください。

### 成功基準を確立する

サポートチームと協力して、測定可能なベンチマーク、閾値、目標を持つ [明確な成功基準を定義](https://platform.claude.com/docs/ja/test-and-evaluate/define-success) してください。

サポートチケットルーティングにLLMを使用する際の標準的な基準とベンチマークをいくつか示します：

### 分類の一貫性

### 適応速度

### 多言語処理

### エッジケース処理

### バイアス軽減

### プロンプト効率

### 説明可能性スコア

LLMが使用されるかどうかに関係なく有用な一般的な成功基準をいくつか示します：

### ルーティング精度

### 割り当てまでの時間

### 再ルーティング率

### 初回接触解決率

### 平均処理時間

### 顧客満足度スコア

### エスカレーション率

### エージェント生産性

### セルフサービス転換率

### チケット当たりのコスト

### 適切なClaudeモデルを選択する

モデルの選択は、コスト、精度、応答時間の間のトレードオフによって決まります。

多くの顧客は、`claude-3-5-haiku-20241022`がチケットルーティングに理想的なモデルであることを発見しています。これはClaude 3ファミリーで最も高速で費用対効果の高いモデルでありながら、優れた結果を提供するためです。分類問題が深い専門知識や大量の意図カテゴリの複雑な推論を必要とする場合は、 [より大きなSonnetモデル](https://platform.claude.com/docs/ja/about-claude/models) を選択することもできます。

### 強力なプロンプトを構築する

チケットルーティングは分類タスクの一種です。Claudeはサポートチケットの内容を分析し、問題タイプ、緊急度、必要な専門知識、またはその他の関連要因に基づいて事前定義されたカテゴリに分類します。

チケット分類プロンプトを書いてみましょう。初期プロンプトには、ユーザーリクエストの内容を含み、推論と意図の両方を返すべきです。

[Claude Console](https://platform.claude.com/login) の [プロンプトジェネレーター](https://platform.claude.com/docs/ja/prompt-generator) を試して、Claudeに最初のドラフトを書いてもらいましょう。

以下は、チケットルーティング分類プロンプトの例です：

```
def classify_support_request(ticket_contents):
    # 分類タスクのプロンプトを定義
    classification_prompt = f"""あなたはカスタマーサポートチケット分類システムとして動作します。あなたのタスクは、カスタマーサポートリクエストを分析し、各リクエストに対して適切な分類意図を推論とともに出力することです。

        以下が分類する必要があるカスタマーサポートリクエストです：

        <request>{ticket_contents}</request>

        上記のリクエストを注意深く分析して、顧客の核となる意図とニーズを決定してください。顧客が何を求めているか、何について懸念しているかを考慮してください。

        まず、このリクエストをどのように分類するかについての推論と分析を<reasoning>タグ内に書いてください。

        次に、リクエストに対する適切な分類ラベルを<intent>タグ内に出力してください。有効な意図は以下の通りです：
        <intents>
        <intent>サポート、フィードバック、苦情</intent>
        <intent>注文追跡</intent>
        <intent>返金・交換</intent>
        </intents>

        リクエストには1つの適用可能な意図のみがあります。リクエストに最も適用可能な意図のみを含めてください。

        例として、以下のリクエストを考えてください：
        <request>こんにちは！土曜日に高速光ファイバーインターネットを設置してもらい、設置担当者のKevinさんは本当に素晴らしかったです！どこに肯定的なレビューを送ることができますか？ご協力ありがとうございます！</request>

        以下は、出力がどのようにフォーマットされるべきかの例です（上記の例のリクエストに対して）：
        <reasoning>ユーザーは肯定的なフィードバックを残すための情報を求めています。</reasoning>
        <intent>サポート、フィードバック、苦情</intent>

        以下はさらなる例です：
        <examples>
        <example 2>
        例2の入力：
        <request>この週末の父の葬儀の際に、私の家族に示してくださった思いやりについて、個人的にお礼を申し上げたく筆を取りました。スタッフの皆様は、このプロセス全体を通じてとても思いやりがあり親切で、本当に私たちの肩の荷を下ろしてくれました。弔問のパンフレットは美しかったです。皆様が示してくださった親切さを決して忘れることはなく、式典がいかにスムーズに進行したかについて、とても感謝しています。改めて、Hill家を代表してAmarantha Hillより、ありがとうございました。</request>

        例2の出力：
        <reasoning>ユーザーは自分の体験について肯定的なレビューを残しています。</reasoning>
        <intent>サポート、フィードバック、苦情</intent>
        </example 2>
        <example 3>

        ...

        </example 8>
        <example 9>
        例9の入力：
        <request>あなたのウェブサイトは画面全体をブロックする広告ポップアップを送り続けています。苦情を言うための電話番号を見つけるのに20分もかかりました。これらすべてのポップアップで、どうやって自分のアカウント情報にアクセスできるでしょうか？あなたのウェブサイトが壊れているので、私のアカウントにアクセスしてもらえますか？ファイルにある住所を知る必要があります。</request>

        例9の出力：
        <reasoning>ユーザーはウェブアカウント情報へのアクセスのヘルプを要求しています。</reasoning>
        <intent>サポート、フィードバック、苦情</intent>
        </example 9>

        分類推論を実際の意図出力の前に常に含めることを忘れないでください。推論は<reasoning>タグで囲み、意図は<intent>タグで囲んでください。推論と意図のみを返してください。
        """
```

このプロンプトの主要コンポーネントを分解してみましょう：

- Python f-stringsを使用してプロンプトテンプレートを作成し、`ticket_contents`を`<request>`タグに挿入できるようにしています。
- Claudeに、チケット内容を注意深く分析して顧客の核となる意図とニーズを決定する分類システムとしての明確に定義された役割を与えています。
- 適切な出力フォーマットについてClaudeに指示し、この場合は`<reasoning>`タグ内に推論と分析を提供し、続いて`<intent>`タグ内に適切な分類ラベルを提供するよう指示しています。
- 有効な意図カテゴリを指定しています：「サポート、フィードバック、苦情」、「注文追跡」、「返金・交換」。
- 出力がどのようにフォーマットされるべきかを説明するためにいくつかの例（いわゆるfew-shotプロンプティング）を含めており、これにより精度と一貫性が向上します。

Claudeの応答を様々なXMLタグセクションに分割したい理由は、正規表現を使用して出力から推論と意図を別々に抽出できるようにするためです。これにより、チケットルーティングワークフローで対象を絞った次のステップを作成できます。例えば、意図のみを使用してチケットをどの人にルーティングするかを決定することができます。

### プロンプトをデプロイする

テスト本番環境でプロンプトをデプロイし、 [評価を実行](https://platform.claude.com/docs/ja/test-and-evaluate/develop-tests) することなしに、プロンプトがどれだけうまく機能するかを知ることは困難です。

デプロイ構造を構築しましょう。Claudeへの呼び出しをラップするメソッドシグネチャを定義することから始めます。すでに書き始めたメソッドを取り、`ticket_contents`を入力とし、出力として`reasoning`と`intent`のタプルを返すようにします。従来のMLを使用した既存の自動化がある場合は、代わりにそのメソッドシグネチャに従う必要があります。

```
import anthropic
import re

# Claude APIクライアントのインスタンスを作成
client = anthropic.Anthropic()

# デフォルトモデルを設定
DEFAULT_MODEL="claude-3-5-haiku-20241022"

def classify_support_request(ticket_contents):
    # 分類タスクのプロンプトを定義
    classification_prompt = f"""あなたはカスタマーサポートチケット分類システムとして動作します。
        ...
        ... 推論は<reasoning>タグで囲み、意図は<intent>タグで囲んでください。推論と意図のみを返してください。
        """
    # サポートリクエストを分類するためにAPIにプロンプトを送信
    message = client.messages.create(
        model=DEFAULT_MODEL,
        max_tokens=500,
        temperature=0,
        messages=[{"role": "user", "content": classification_prompt}],
        stream=False,
    )
    reasoning_and_intent = message.content[0].text

    # Pythonの正規表現ライブラリを使用して`reasoning`を抽出
    reasoning_match = re.search(
        r"<reasoning>(.*?)</reasoning>", reasoning_and_intent, re.DOTALL
    )
    reasoning = reasoning_match.group(1).strip() if reasoning_match else ""

    # 同様に、`intent`も抽出
    intent_match = re.search(r"<intent>(.*?)</intent>", reasoning_and_intent, re.DOTALL)
    intent = intent_match.group(1).strip() if intent_match else ""

    return reasoning, intent
```

このコードは：

- AnthropicライブラリをインポートしAPIキーを使用してクライアントインスタンスを作成します。
- `ticket_contents`文字列を受け取る`classify_support_request`関数を定義します。
- `classification_prompt`を使用して分類のために`ticket_contents`をClaudeに送信します
- 応答から抽出されたモデルの`reasoning`と`intent`を返します。

推論と意図のテキスト全体が生成されてから解析する必要があるため、`stream=False`（デフォルト）に設定します。

* * *

## プロンプトを評価する

プロンプティングは本番環境に対応するために、多くの場合テストと最適化が必要です。ソリューションの準備状況を判断するために、先ほど確立した成功基準と閾値に基づいてパフォーマンスを評価します。

評価を実行するには、実行するテストケースが必要です。このガイドの残りの部分では、すでに [テストケースを開発](https://platform.claude.com/docs/ja/test-and-evaluate/develop-tests) していることを前提としています。

### 評価関数を構築する

このガイドの例の評価では、3つの主要な指標に沿ってClaudeのパフォーマンスを測定します：

- 精度
- 分類あたりのコスト

あなたにとって重要な要因に応じて、他の軸でClaudeを評価する必要があるかもしれません。

これを評価するために、まず書いたスクリプトを変更し、予測された意図と実際の意図を比較して正しい予測の割合を計算する関数を追加する必要があります。また、コスト計算と時間測定機能も追加する必要があります。

```
import anthropic
import re

# Claude APIクライアントのインスタンスを作成
client = anthropic.Anthropic()

# デフォルトモデルを設定
DEFAULT_MODEL="claude-3-5-haiku-20241022"

def classify_support_request(request, actual_intent):
    # 分類タスクのプロンプトを定義
    classification_prompt = f"""あなたはカスタマーサポートチケット分類システムとして動作します。
        ...
        ...推論は<reasoning>タグで囲み、意図は<intent>タグで囲んでください。推論と意図のみを返してください。
        """

    message = client.messages.create(
        model=DEFAULT_MODEL,
        max_tokens=500,
        temperature=0,
        messages=[{"role": "user", "content": classification_prompt}],
    )
    usage = message.usage  # 入力と出力トークンがどれだけ使用されたかのAPI呼び出しの使用統計を取得
    reasoning_and_intent = message.content[0].text

    # Pythonの正規表現ライブラリを使用して`reasoning`を抽出
    reasoning_match = re.search(
        r"<reasoning>(.*?)</reasoning>", reasoning_and_intent, re.DOTALL
    )
    reasoning = reasoning_match.group(1).strip() if reasoning_match else ""

    # 同様に、`intent`も抽出
    intent_match = re.search(r"<intent>(.*?)</intent>", reasoning_and_intent, re.DOTALL)
    intent = intent_match.group(1).strip() if intent_match else ""

      # モデルの予測が正しいかどうかをチェック
    correct = actual_intent.strip() == intent.strip()

    # 推論、意図、正解、使用量を返す
    return reasoning, intent, correct, usage
```

行った編集を分解してみましょう：

- テストケースから`actual_intent`を`classify_support_request`メソッドに追加し、Claudeの意図分類が私たちのゴールデン意図分類と一致するかどうかを評価するための比較を設定しました。
- 使用された入力と出力トークンに基づいてコストを計算するために、API呼び出しの使用統計を抽出しました

### 評価を実行する

適切な評価には、何が良い結果かを判断するための明確な閾値とベンチマークが必要です。上記のスクリプトは精度、応答時間、分類あたりのコストのランタイム値を提供しますが、明確に確立された閾値が必要です。例えば：

- **精度：** 95%（100テスト中）
- **分類あたりのコスト：** 現在のルーティング方法から平均50%削減（100テスト全体で）

これらの閾値を持つことで、大規模かつ公平な経験主義で、どの方法が最適で、要件により適合するためにどのような変更が必要かもしれないかを迅速かつ簡単に判断できます。

* * *

## パフォーマンスを向上させる

複雑なシナリオでは、標準的な [プロンプトエンジニアリング技術](https://platform.claude.com/docs/ja/build-with-claude/prompt-engineering/overview) と [ガードレール実装戦略](https://platform.claude.com/docs/ja/test-and-evaluate/strengthen-guardrails/reduce-hallucinations) を超えて、パフォーマンスを向上させるための追加戦略を検討することが有用な場合があります。以下は一般的なシナリオです：

### 20以上の意図カテゴリがある場合は分類階層を使用する

クラス数が増加するにつれて、必要な例の数も拡大し、プロンプトが扱いにくくなる可能性があります。代替として、分類器の混合を使用した階層分類システムの実装を検討できます。

1. 意図を分類学的ツリー構造で整理します。
2. ツリーのすべてのレベルで一連の分類器を作成し、カスケードルーティングアプローチを可能にします。

例えば、チケットを「技術的問題」、「請求に関する質問」、「一般的な問い合わせ」に大まかに分類するトップレベル分類器を持つことができます。これらの各カテゴリは、分類をさらに絞り込むための独自のサブ分類器を持つことができます。

![](https://platform.claude.com/docs/images/ticket-hierarchy.png)

- **長所 \- より大きなニュアンスと精度：** 各親パスに対して異なるプロンプトを作成でき、より対象を絞った文脈固有の分類が可能になります。これにより精度が向上し、顧客リクエストのより細かい処理が可能になります。

- **短所 \- 遅延の増加：** 複数の分類器は遅延の増加につながる可能性があることに注意してください。最速のモデルであるHaikuでこのアプローチを実装することをお勧めします。


### 高度に可変なチケットを処理するためにベクトルデータベースと類似性検索取得を使用する

例を提供することがパフォーマンスを向上させる最も効果的な方法であるにもかかわらず、サポートリクエストが高度に可変である場合、単一のプロンプトに十分な例を含めることが困難な場合があります。

このシナリオでは、ベクトルデータベースを使用して例のデータセットから類似性検索を行い、特定のクエリに最も関連する例を取得することができます。

[分類レシピ](https://github.com/anthropics/anthropic-cookbook/blob/82675c124e1344639b2a875aa9d3ae854709cd83/skills/classification/guide.ipynb) で詳しく説明されているこのアプローチは、パフォーマンスを71%の精度から93%の精度に向上させることが示されています。

### 予想されるエッジケースを具体的に考慮する

Claudeがチケットを誤分類する可能性があるシナリオをいくつか示します（あなたの状況に固有の他のものもあるかもしれません）。これらのシナリオでは、Claudeがエッジケースをどのように処理すべきかについて、プロンプトで明示的な指示や例を提供することを検討してください：

### 顧客が暗黙的なリクエストを行う

### Claudeが意図よりも感情を優先する

### 複数の問題が問題優先順位付けの混乱を引き起こす

* * *

## Claudeをより大きなサポートワークフローに統合する

適切な統合には、Claudeベースのチケットルーティングスクリプトがより大きなチケットルーティングシステムのアーキテクチャにどのように適合するかについていくつかの決定を行う必要があります。これを行う方法は2つあります：

- **プッシュベース：**使用しているサポートチケットシステム（例：Zendesk）がWebhookイベントをルーティングサービスに送信することでコードをトリガーし、その後意図を分類してルーティングします。
  - このアプローチはよりWebスケーラブルですが、パブリックエンドポイントを公開する必要があります。
- **プルベース：**コードが指定されたスケジュールに基づいて最新のチケットをプルし、プル時にルーティングします。
  - このアプローチは実装が簡単ですが、プル頻度が高すぎる場合はサポートチケットシステムへの不要な呼び出しを行う可能性があり、プル頻度が低すぎる場合は過度に遅くなる可能性があります。

これらのアプローチのいずれについても、スクリプトをサービスでラップする必要があります。アプローチの選択は、サポートチケットシステムが提供するAPIによって決まります。

* * *

[分類クックブック\\
\\
より多くのサンプルコードと詳細な評価ガイダンスについては、分類クックブックをご覧ください。](https://github.com/anthropics/anthropic-cookbook/tree/main/capabilities/classification) [Claude Console\\
\\
Claude Consoleでワークフローの構築と評価を開始してください。](https://platform.claude.com/dashboard)

- [チケットルーティングにClaudeを使用するかどうかを決定する](https://platform.claude.com/docs/ja/about-claude/use-case-guides/ticket-routing#claude)
- [LLMサポートワークフローの構築とデプロイ](https://platform.claude.com/docs/ja/about-claude/use-case-guides/ticket-routing#llm)
- [適切なClaudeモデルを選択する](https://platform.claude.com/docs/ja/about-claude/use-case-guides/ticket-routing#claude-2)
- [20以上の意図カテゴリがある場合は分類階層を使用する](https://platform.claude.com/docs/ja/about-claude/use-case-guides/ticket-routing#20)
- [Claudeをより大きなサポートワークフローに統合する](https://platform.claude.com/docs/ja/about-claude/use-case-guides/ticket-routing#claude-3)

[Claude Docs home page](https://platform.claude.com/docs)

[X (Twitter)](https://x.com/claudeai)[LinkedIn](https://www.linkedin.com/showcase/claude)[Instagram](https://instagram.com/claudeai)

### Solutions

- [AI agents](https://claude.com/solutions/agents)
- [Code modernization](https://claude.com/solutions/code-modernization)
- [Coding](https://claude.com/solutions/coding)
- [Customer support](https://claude.com/solutions/customer-support)
- [Education](https://claude.com/solutions/education)
- [Financial services](https://claude.com/solutions/financial-services)
- [Government](https://claude.com/solutions/government)
- [Life sciences](https://claude.com/solutions/life-sciences)

### Partners

- [Amazon Bedrock](https://claude.com/partners/amazon-bedrock)
- [Google Cloud's Vertex AI](https://claude.com/partners/google-cloud-vertex-ai)

### Learn

- [Blog](https://claude.com/blog)
- [Catalog](https://claude.ai/catalog/artifacts)
- [Courses](https://www.anthropic.com/learn)
- [Use cases](https://claude.com/resources/use-cases)
- [Connectors](https://claude.com/partners/mcp)
- [Customer stories](https://claude.com/customers)
- [Engineering at Anthropic](https://www.anthropic.com/engineering)
- [Events](https://www.anthropic.com/events)
- [Powered by Claude](https://claude.com/partners/powered-by-claude)
- [Service partners](https://claude.com/partners/services)
- [Startups program](https://claude.com/programs/startups)

### Company

- [Anthropic](https://www.anthropic.com/company)
- [Careers](https://www.anthropic.com/careers)
- [Economic Futures](https://www.anthropic.com/economic-futures)
- [Research](https://www.anthropic.com/research)
- [News](https://www.anthropic.com/news)
- [Responsible Scaling Policy](https://www.anthropic.com/news/announcing-our-updated-responsible-scaling-policy)
- [Security and compliance](https://trust.anthropic.com/)
- [Transparency](https://www.anthropic.com/transparency)

### Learn

- [Blog](https://claude.com/blog)
- [Catalog](https://claude.ai/catalog/artifacts)
- [Courses](https://www.anthropic.com/learn)
- [Use cases](https://claude.com/resources/use-cases)
- [Connectors](https://claude.com/partners/mcp)
- [Customer stories](https://claude.com/customers)
- [Engineering at Anthropic](https://www.anthropic.com/engineering)
- [Events](https://www.anthropic.com/events)
- [Powered by Claude](https://claude.com/partners/powered-by-claude)
- [Service partners](https://claude.com/partners/services)
- [Startups program](https://claude.com/programs/startups)

### Help and security

- [Availability](https://www.anthropic.com/supported-countries)
- [Status](https://status.anthropic.com/)
- [Support](https://support.claude.com/)
- [Discord](https://www.anthropic.com/discord)

### Terms and policies

- [Privacy policy](https://www.anthropic.com/legal/privacy)
- [Responsible disclosure policy](https://www.anthropic.com/responsible-disclosure-policy)
- [Terms of service: Commercial](https://www.anthropic.com/legal/commercial-terms)
- [Terms of service: Consumer](https://www.anthropic.com/legal/consumer-terms)
- [Usage policy](https://www.anthropic.com/legal/aup)

Ask Docs
![Chat avatar](https://platform.claude.com/docs/images/book-icon-light.svg)

a.claude.ai

# a.claude.ai is blocked

**a.claude.ai** refused to connect.

ERR\_BLOCKED\_BY\_RESPONSE

**a.claude.ai** refused to connect.

![](<Base64-Image-Removed>)![](<Base64-Image-Removed>)
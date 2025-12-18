---
url: "https://platform.claude.com/docs/ja/about-claude/use-case-guides/customer-support-chat"
title: "カスタマーサポートエージェント - Claude Docs"
---

[Claude Documentation Home](https://platform.claude.com/docs/ja/home)

- [開発者ガイド](https://platform.claude.com/docs/ja/intro)
- [APIリファレンス](https://platform.claude.com/docs/ja/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [リソース](https://platform.claude.com/docs/ja/resources/overview)
- [リリースノート](https://platform.claude.com/docs/ja/release-notes/overview)

日本語

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fja%2Fabout-claude%2Fuse-case-guides%2Fcustomer-support-chat)

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

カスタマーサポートエージェント

ユースケース

# カスタマーサポートエージェント

Copy page

このガイドでは、Claude の高度な会話機能を活用して、リアルタイムで顧客の問い合わせに対応し、24/7 のサポートを提供し、待ち時間を短縮し、正確な回答と肯定的なやり取りで高いサポート量を管理する方法について説明します。

Copy page

## Claude で構築する前に

### カスタマーサポートチャットに Claude を使用するかどうかを決定する

Claude のような LLM を使用してカスタマーサポートプロセスの一部を自動化すべき主な指標は以下の通りです：

### 反復的なクエリの大量処理

### 迅速な情報統合の必要性

### 24/7 の可用性要件

### ピーク期間中の急速なスケーリング

### 一貫したブランドボイス

他の LLM よりも Claude を選択する場合の考慮事項：

- 自然で微妙な会話を優先する：Claude の高度な言語理解により、他の LLM とのチャットよりも自然で、文脈を認識した、より人間らしい会話が可能になります。
- 複雑でオープンエンドなクエリをよく受け取る：Claude は、定型的な回答を生成したり、ユーザーの発話の順列を広範にプログラムする必要なく、幅広いトピックと問い合わせに対応できます。
- スケーラブルな多言語サポートが必要：Claude の多言語機能により、200 以上の言語での会話に対応でき、各サポート言語に対して個別のチャットボットや広範な翻訳プロセスが不要です。

### 理想的なチャットインタラクションを定義する

顧客がどのように、いつ Claude と対話することを期待するかを定義するために、理想的な顧客インタラクションの概要を作成します。この概要は、ソリューションの技術要件を決定するのに役立ちます。

以下は、自動車保険カスタマーサポートの理想的なチャットインタラクションの例です：

- **顧客**：サポートチャット体験を開始する
  - **Claude**：顧客を温かく迎え、会話を開始する
- **顧客**：新しい電気自動車の保険について質問する
  - **Claude**：電気自動車のカバレッジに関する関連情報を提供する
- **顧客**：電気自動車保険の独自のニーズに関連する質問をする
  - **Claude**：正確で有益な回答を提供し、ソースへのリンクを提供する
- **顧客**：保険または自動車に関連しないオフトピックの質問をする
  - **Claude**：関連のないトピックについては議論しないことを明確にし、ユーザーを自動車保険に戻す
- **顧客**：保険見積もりに関心を示す
  - **Claude**：適切な見積もりを決定するための一連の質問をし、回答に適応する
  - **Claude**：見積もり生成 API ツールを使用するリクエストを、ユーザーから収集した必要な情報とともに送信する
  - **Claude**：API ツール使用からの応答情報を受け取り、情報を自然な応答に統合し、提供された見積もりをユーザーに提示する
- **顧客**：フォローアップの質問をする
  - **Claude**：必要に応じてフォローアップの質問に回答する
  - **Claude**：顧客を保険プロセスの次のステップにガイドし、会話を終了する

自分のユースケースのために書く実際の例では、このインタラクションの実際の言葉を書き出すことが有用であると感じるかもしれません。これにより、Claude に期待する理想的なトーン、応答の長さ、詳細のレベルを感じることができます。

### インタラクションを一意のタスクに分割する

カスタマーサポートチャットは、質問応答から情報検索、リクエストへのアクション実行まで、複数の異なるタスクの集合であり、単一の顧客インタラクションにまとめられています。構築を開始する前に、Claude が実行できるようにしたいすべてのタスクに理想的な顧客インタラクションを分割します。これにより、すべてのタスクについて Claude をプロンプトして評価でき、テストケースを作成する際に対応する必要があるインタラクションの範囲を適切に把握できます。

顧客は、これをユーザーリクエストに応じた可能な会話の変曲点のインタラクションフローチャートとして視覚化することが有用であると感じることがあります。

上記の保険インタラクション例に関連する主要なタスクは以下の通りです：

1. グリーティングと一般的なガイダンス
   - 顧客を温かく迎え、会話を開始する
   - 会社とインタラクションに関する一般情報を提供する
2. 製品情報
   - 電気自動車のカバレッジに関する情報を提供する











     これには Claude がそのコンテキストに必要な情報を持つことが必要であり、 [RAG 統合](https://github.com/anthropics/anthropic-cookbook/blob/main/skills/retrieval_augmented_generation/guide.ipynb) が必要であることを示唆する場合があります。

   - 電気自動車保険の独自のニーズに関連する質問に回答する
   - 見積もりまたは保険の詳細に関するフォローアップの質問に回答する
   - 適切な場合、ソースへのリンクを提供する
3. 会話管理
   - トピック内に留まる（自動車保険）
   - オフトピックの質問を関連するサブジェクトに戻す
4. 見積もり生成
   - 見積もりの適格性を決定するための適切な質問をする
   - 顧客の回答に基づいて質問を適応させる
   - 収集した情報を見積もり生成 API に送信する
   - 提供された見積もりを顧客に提示する

### 成功基準を確立する

サポートチームと協力して、 [明確な成功基準を定義](https://platform.claude.com/docs/ja/test-and-evaluate/define-success) し、 [詳細な評価](https://platform.claude.com/docs/ja/test-and-evaluate/develop-tests) を測定可能なベンチマークと目標で作成します。

Claude が定義されたタスクをどの程度成功裏に実行するかを評価するために使用できる基準とベンチマークは以下の通りです：

### クエリ理解精度

### 応答の関連性

### 応答精度

### 引用提供の関連性

### トピック遵守

### コンテンツ生成の有効性

### エスカレーション効率

Claude をサポートに採用することのビジネス上の影響を評価するために使用できる基準とベンチマークは以下の通りです：

### センチメント維持

### デフレクション率

### 顧客満足度スコア

### 平均処理時間

## Claude をカスタマーサービスエージェントとして実装する方法

### 適切な Claude モデルを選択する

モデルの選択は、コスト、精度、応答時間のトレードオフに依存します。

カスタマーサポートチャットの場合、Claude Sonnet 4.5 は、インテリジェンス、レイテンシ、コストのバランスを取るのに適しています。ただし、RAG、ツール使用、および/または長いコンテキストプロンプトを含む複数のプロンプトを含む会話フローがある場合、Claude Haiku 4.5 はレイテンシを最適化するのに適しているかもしれません。

### 強力なプロンプトを構築する

Claude をカスタマーサポートに使用するには、Claude が適切に応答するための十分な方向性とコンテキストを持ちながら、幅広い顧客の問い合わせに対応するための十分な柔軟性を持つ必要があります。

まず、システムプロンプトから始めて、強力なプロンプトの要素を書き始めましょう：

```
IDENTITY = """You are Eva, a friendly and knowledgeable AI assistant for Acme Insurance
Company. Your role is to warmly welcome customers and provide information on
Acme's insurance offerings, which include car insurance and electric car
insurance. You can also help customers get quotes for their insurance needs."""
```

システムプロンプト内にすべての情報を入れることで、指示をユーザー会話から分離する方法として誘惑されるかもしれませんが、Claude は実際には、システムプロンプト内に役割プロンプトのみを例外として、最初の `User` ターン内に書かれたバルクプロンプトコンテンツで最も良く機能します。詳細については、 [システムプロンプトで Claude に役割を与える](https://platform.claude.com/docs/ja/build-with-claude/prompt-engineering/system-prompts) を参照してください。

複雑なプロンプトをサブセクションに分割し、一度に 1 つの部分を書くことが最善です。各タスクについて、Claude がタスクをうまく実行するために必要なプロンプトの部分を定義するための段階的なプロセスに従うことで、より大きな成功を見つけることができます。この自動車保険カスタマーサポートの例では、「グリーティングと一般的なガイダンス」タスクから始まるプロンプトのすべての部分を段階的に書きます。これにより、プロンプトのデバッグも容易になります。全体的なプロンプトの個々の部分をより迅速に調整できるためです。

これらすべてのピースを `config.py` というファイルに入れます。

```
STATIC_GREETINGS_AND_GENERAL = """
<static_context>
Acme Auto Insurance: Your Trusted Companion on the Road

About:
At Acme Insurance, we understand that your vehicle is more than just a mode of transportation—it's your ticket to life's adventures.
Since 1985, we've been crafting auto insurance policies that give drivers the confidence to explore, commute, and travel with peace of mind.
Whether you're navigating city streets or embarking on cross-country road trips, Acme is there to protect you and your vehicle.
Our innovative auto insurance policies are designed to adapt to your unique needs, covering everything from fender benders to major collisions.
With Acme's award-winning customer service and swift claim resolution, you can focus on the joy of driving while we handle the rest.
We're not just an insurance provider—we're your co-pilot in life's journeys.
Choose Acme Auto Insurance and experience the assurance that comes with superior coverage and genuine care. Because at Acme, we don't just
insure your car—we fuel your adventures on the open road.

Note: We also offer specialized coverage for electric vehicles, ensuring that drivers of all car types can benefit from our protection.

Acme Insurance offers the following products:
- Car insurance
- Electric car insurance
- Two-wheeler insurance

Business hours: Monday-Friday, 9 AM - 5 PM EST
Customer service number: 1-800-123-4567
</static_context>
"""
```

その後、自動車保険と電気自動車保険の情報についても同じことを行います。

```
STATIC_CAR_INSURANCE="""
<static_context>
Car Insurance Coverage:
Acme's car insurance policies typically cover:
1. Liability coverage: Pays for bodily injury and property damage you cause to others.
2. Collision coverage: Pays for damage to your car in an accident.
3. Comprehensive coverage: Pays for damage to your car from non-collision incidents.
4. Medical payments coverage: Pays for medical expenses after an accident.
5. Uninsured/underinsured motorist coverage: Protects you if you're hit by a driver with insufficient insurance.

Optional coverages include:
- Rental car reimbursement
- Roadside assistance
- New car replacement
</static_context>
"""

STATIC_ELECTRIC_CAR_INSURANCE="""
<static_context>
Electric Car Insurance:
Our specialized electric car insurance goes beyond traditional auto coverage,
offering tailored protection for your high-tech investment. In addition to standard coverages, we offer:
- Safeguarding expensive battery systems
- Covering home charging equipment
- Adapting to the rapidly evolving world of electric vehicles

Whether you're driving a Rivian, Nissan Leaf, Chevrolet Bolt,
or any other electric vehicle, our knowledgeable agents are ready to craft a policy
that gives you the confidence to enjoy every electron-powered mile.
</static_context>
"""
```

静的コンテンツが完成したので、Claude の応答をガイドするために、少なくとも 4～5 個のサンプル「良い」インタラクションを追加しましょう。これらの例は、理想的な顧客インタラクションを代表するものであり、ガードレール、ツール呼び出しなどを含めることができます。

```
EXAMPLES="""
Here are a few examples of how you can interact with customers:

<example 1>
H: Hi, do you offer commercial insurance for small businesses?

A: Ah! Unfortunately, we don't offer commercial insurance at this time.
However, we do provide a range of personal insurance products including car insurance and electric car insurance.
Would you like to know more about these offerings?
</example 1>

<example 2>
H: Hi, what are your business hours?

A: Our business hours are Monday to Friday, 9 AM to 5 PM EST.
If you have any questions or need assistance, feel free to reach out during those times.
How else can I assist you today?
</example 2>

<example 3>
H: I'm shopping for car insurance. What does Acme offer?

A: Great choice! Acme's car insurance policies typically include:
- Liability coverage: Protects you if you're at fault in an accident
- Collision coverage: Pays for damage to your car in an accident
- Comprehensive coverage: Covers non-collision incidents like theft or vandalism
- Medical payments coverage: Pays for medical expenses after an accident
- Uninsured/underinsured motorist coverage: Protects you from drivers with insufficient insurance

We also offer optional coverages like rental car reimbursement, roadside assistance, and new car replacement.
Would you like more details on any of these coverages, or do you have specific questions about insuring your vehicle?
</example 3>

<example 4>
H: I'd like to hear about your electric car insurance.

A: Certainly! Our electric car insurance is specially designed to meet the unique needs of electric vehicle owners.
In addition to all the standard coverages we offer for regular cars, our electric car policies include:

- Battery coverage: Protection against damage or degradation of your vehicle's expensive battery system
- Tech package: Covers repairs or replacement of advanced electronics and onboard computer systems
- Charging station coverage: Protects both home and portable charging equipment
- Cybersecurity protection: Coverage against hacking or digital threats
- Specialized roadside assistance: Includes flatbed towing to protect the vehicle's undercarriage

We cover a wide range of electric vehicles, including popular models from Tesla, Rivian, Nissan, Chevrolet, and more.
Is there a specific electric vehicle you're looking to insure, or would you like more details on any of these coverages?
</example 4>

<example 5>
H: I'd like to get a quote for my car insurance.

A: Certainly! I'd be happy to help you get a quote for your car insurance.
To provide you with an accurate quote, I'll need to collect some information about your vehicle and the primary driver.
Let's start with the basics:

1. What is the make and model of your vehicle?
2. What year was it manufactured?
3. Approximately how many miles have you driven?
4. What is the age of the primary driver?

Once you provide this information, I'll use our quoting tool to generate a personalized insurance quote for you.
</example 5>
"""
```

また、Claude が顧客とどのように対話すべきかについての重要な指示を含めたいでしょう。これは、ブランドガードレールまたはサポートポリシーから引き出される場合があります。

```
ADDITIONAL_GUARDRAILS = """Please adhere to the following guardrails:
1. Only provide information about insurance types listed in our offerings.
2. If asked about an insurance type we don't offer, politely state
that we don't provide that service.
3. Do not speculate about future product offerings or company plans.
4. Don't make promises or enter into agreements it's not authorized to make.
You only provide information and guidance.
5. Do not mention any competitor's products or services.
"""
```

これで、これらすべてのセクションを単一の文字列に結合して、プロンプトとして使用できます。

```
TASK_SPECIFIC_INSTRUCTIONS = ' '.join([\
   STATIC_GREETINGS_AND_GENERAL,\
   STATIC_CAR_INSURANCE,\
   STATIC_ELECTRIC_CAR_INSURANCE,\
   EXAMPLES,\
   ADDITIONAL_GUARDRAILS,\
])
```

### ツール使用で動的でエージェント的な機能を追加する

Claude は、クライアント側のツール使用機能を使用して、外部ツールまたは API を使用してアクションを実行し、情報を動的に取得することができます。まず、プロンプトが利用すべき外部ツールまたは API をリストアップします。

この例では、見積もりを計算するための 1 つのツールから始めます。

念のため、このツールは実際の計算を実行しません。指定された引数を使用してツールを使用すべきであることをアプリケーションに通知するだけです。

保険見積もり計算機の例：

```
TOOLS = [{\
  "name": "get_quote",\
  "description": "Calculate the insurance quote based on user input. Returned value is per month premium.",\
  "input_schema": {\
    "type": "object",\
    "properties": {\
      "make": {"type": "string", "description": "The make of the vehicle."},\
      "model": {"type": "string", "description": "The model of the vehicle."},\
      "year": {"type": "integer", "description": "The year the vehicle was manufactured."},\
      "mileage": {"type": "integer", "description": "The mileage on the vehicle."},\
      "driver_age": {"type": "integer", "description": "The age of the primary driver."}\
    },\
    "required": ["make", "model", "year", "mileage", "driver_age"]\
  }\
}]

def get_quote(make, model, year, mileage, driver_age):
    """Returns the premium per month in USD"""
    # You can call an http endpoint or a database to get the quote.
    # Here, we simulate a delay of 1 seconds and return a fixed quote of 100.
    time.sleep(1)
    return 100
```

### プロンプトをデプロイする

プロンプトがテスト本番環境でどの程度機能するかを知ることは難しく、 [評価を実行](https://platform.claude.com/docs/ja/test-and-evaluate/develop-tests) することなしに、Anthropic SDK と streamlit をユーザーインターフェイスに使用して小さなアプリケーションを構築しましょう。

`chatbot.py` というファイルで、ChatBot クラスを設定することから始めます。これは Anthropic SDK とのインタラクションをカプセル化します。

クラスには、`generate_message` と `process_user_input` の 2 つの主要なメソッドが必要です。

```
from anthropic import Anthropic
from config import IDENTITY, TOOLS, MODEL, get_quote
from dotenv import load_dotenv

load_dotenv()

class ChatBot:
   def __init__(self, session_state):
       self.anthropic = Anthropic()
       self.session_state = session_state

   def generate_message(
       self,
       messages,
       max_tokens,
   ):
       try:
           response = self.anthropic.messages.create(
               model=MODEL,
               system=IDENTITY,
               max_tokens=max_tokens,
               messages=messages,
               tools=TOOLS,
           )
           return response
       except Exception as e:
           return {"error": str(e)}

   def process_user_input(self, user_input):
       self.session_state.messages.append({"role": "user", "content": user_input})

       response_message = self.generate_message(
           messages=self.session_state.messages,
           max_tokens=2048,
       )

       if "error" in response_message:
           return f"An error occurred: {response_message['error']}"

       if response_message.content[-1].type == "tool_use":
           tool_use = response_message.content[-1]
           func_name = tool_use.name
           func_params = tool_use.input
           tool_use_id = tool_use.id

           result = self.handle_tool_use(func_name, func_params)
           self.session_state.messages.append(
               {"role": "assistant", "content": response_message.content}
           )
           self.session_state.messages.append({
               "role": "user",
               "content": [{\
                   "type": "tool_result",\
                   "tool_use_id": tool_use_id,\
                   "content": f"{result}",\
               }],
           })

           follow_up_response = self.generate_message(
               messages=self.session_state.messages,
               max_tokens=2048,
           )

           if "error" in follow_up_response:
               return f"An error occurred: {follow_up_response['error']}"

           response_text = follow_up_response.content[0].text
           self.session_state.messages.append(
               {"role": "assistant", "content": response_text}
           )
           return response_text

       elif response_message.content[0].type == "text":
           response_text = response_message.content[0].text
           self.session_state.messages.append(
               {"role": "assistant", "content": response_text}
           )
           return response_text

       else:
           raise Exception("An error occurred: Unexpected response type")

   def handle_tool_use(self, func_name, func_params):
       if func_name == "get_quote":
           premium = get_quote(**func_params)
           return f"Quote generated: ${premium:.2f} per month"

       raise Exception("An unexpected tool was used")
```

### ユーザーインターフェイスを構築する

Streamlit を使用してこのコードをメインメソッドでデプロイをテストします。この `main()` 関数は、Streamlit ベースのチャットインターフェイスを設定します。

これを `app.py` というファイルで行います。

```
import streamlit as st
from chatbot import ChatBot
from config import TASK_SPECIFIC_INSTRUCTIONS

def main():
   st.title("Chat with Eva, Acme Insurance Company's Assistant🤖")

   if "messages" not in st.session_state:
       st.session_state.messages = [\
           {'role': "user", "content": TASK_SPECIFIC_INSTRUCTIONS},\
           {'role': "assistant", "content": "Understood"},\
       ]

   chatbot = ChatBot(st.session_state)

   # Display user and assistant messages skipping the first two
   for message in st.session_state.messages[2:]:
       # ignore tool use blocks
       if isinstance(message["content"], str):
           with st.chat_message(message["role"]):
               st.markdown(message["content"])

   if user_msg := st.chat_input("Type your message here..."):
       st.chat_message("user").markdown(user_msg)

       with st.chat_message("assistant"):
           with st.spinner("Eva is thinking..."):
               response_placeholder = st.empty()
               full_response = chatbot.process_user_input(user_msg)
               response_placeholder.markdown(full_response)

if __name__ == "__main__":
   main()
```

プログラムを実行します：

```
streamlit run app.py
```

### プロンプトを評価する

プロンプティングは、本番環境に対応するために、多くの場合、テストと最適化が必要です。ソリューションの準備状況を判断するために、定量的および定性的な方法を組み合わせた体系的なプロセスを使用してチャットボットのパフォーマンスを評価します。定義された成功基準に基づいた [強力な経験的評価](https://platform.claude.com/docs/ja/test-and-evaluate/develop-tests#building-evals-and-test-cases) を作成することで、プロンプトを最適化できます。

[Claude Console](https://platform.claude.com/dashboard) には、さまざまなシナリオでプロンプトをテストできる評価ツールが含まれています。

### パフォーマンスを改善する

複雑なシナリオでは、標準的な [プロンプトエンジニアリング技術](https://platform.claude.com/docs/ja/build-with-claude/prompt-engineering/overview) と [ガードレール実装戦略](https://platform.claude.com/docs/ja/test-and-evaluate/strengthen-guardrails/reduce-hallucinations) を超えてパフォーマンスを改善するための追加の戦略を検討することが有用な場合があります。以下は、いくつかの一般的なシナリオです：

#### RAG で長いコンテキストレイテンシを削減する

大量の静的および動的コンテキストを扱う場合、すべての情報をプロンプトに含めると、高いコスト、遅い応答時間、およびコンテキストウィンドウ制限に達する可能性があります。このシナリオでは、Retrieval Augmented Generation（RAG）技術を実装することで、パフォーマンスと効率を大幅に向上させることができます。

[Voyage のような埋め込みモデル](https://platform.claude.com/docs/ja/build-with-claude/embeddings) を使用して情報をベクトル表現に変換することで、より拡張性が高く、応答性の高いシステムを作成できます。このアプローチにより、すべての可能なコンテキストをすべてのプロンプトに含める代わりに、現在のクエリに基づいて関連情報を動的に取得できます。

サポートユースケースの RAG 実装 [RAG レシピ](https://github.com/anthropics/anthropic-cookbook/blob/82675c124e1344639b2a875aa9d3ae854709cd83/skills/classification/guide.ipynb) は、精度を向上させ、応答時間を短縮し、広範なコンテキスト要件を持つシステムの API コストを削減することが示されています。

#### ツール使用でリアルタイムデータを統合する

アカウント残高やポリシーの詳細など、リアルタイム情報が必要なクエリを扱う場合、埋め込みベースの RAG アプローチは不十分です。代わりに、ツール使用を活用して、チャットボットがリアルタイムで正確な応答を提供する能力を大幅に向上させることができます。例えば、ツール使用を使用して顧客情報を検索し、注文の詳細を取得し、顧客に代わって注文をキャンセルできます。

このアプローチは、 [ツール使用：カスタマーサービスエージェントレシピで概説されています](https://github.com/anthropics/anthropic-cookbook/blob/main/tool_use/customer_service_agent.ipynb)。これにより、Claude の応答にライブデータをシームレスに統合し、より個人化された効率的なカスタマーエクスペリエンスを提供できます。

#### 入力および出力ガードレールを強化する

チャットボットをデプロイする場合、特にカスタマーサービスシナリオでは、誤用、範囲外のクエリ、および不適切な応答に関連するリスクを防ぐことが重要です。Claude は本質的にそのようなシナリオに対して耐性がありますが、チャットボットのガードレールを強化するための追加の手順は以下の通りです：

- [ハルシネーション削減](https://platform.claude.com/docs/ja/test-and-evaluate/strengthen-guardrails/reduce-hallucinations)：事実確認メカニズムと [引用](https://github.com/anthropics/anthropic-cookbook/blob/main/misc/using_citations.ipynb) を実装して、提供された情報に基づいた応答を確保します。
- 情報のクロスチェック：エージェントの応答が会社のポリシーと既知の事実と一致していることを確認します。
- 契約上の約束を回避：エージェントが権限のない約束や契約に入らないようにします。
- [ジェイルブレイクを軽減](https://platform.claude.com/docs/ja/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks)：有害性スクリーンと入力検証などの方法を使用して、ユーザーがモデルの脆弱性を悪用して不適切なコンテンツを生成するのを防ぎます。
- 競合他社への言及を回避：競合他社の言及フィルターを実装して、ブランドフォーカスを維持し、競合他社の製品やサービスについて言及しないようにします。
- [Claude をキャラクターに保つ](https://platform.claude.com/docs/ja/test-and-evaluate/strengthen-guardrails/keep-claude-in-character)：長く複雑なインタラクション中でも、Claude がコンテキストのスタイルを変更するのを防ぎます。
- 個人識別情報（PII）を削除：明示的に必要で認可されない限り、応答から PII を削除します。

#### ストリーミングで認識される応答時間を削減する

潜在的に長い応答を扱う場合、ストリーミングを実装することで、ユーザーエンゲージメントと満足度を大幅に向上させることができます。このシナリオでは、ユーザーは全体の応答が生成されるのを待つ代わりに、段階的に回答を受け取ります。

ストリーミングを実装する方法は以下の通りです：

1. [Anthropic Streaming API](https://platform.claude.com/docs/ja/build-with-claude/streaming) を使用してストリーミング応答をサポートします。
2. 受信テキストのチャンクを処理するようにフロントエンドを設定します。
3. 到着時に各チャンクを表示して、リアルタイムタイピングをシミュレートします。
4. ユーザーが移動して戻ってきた場合に表示できるように、完全な応答を保存するメカニズムを実装します。

場合によっては、ストリーミングにより、より高度なモデルをより高いベースレイテンシで使用できるようになります。段階的な表示は、より長い処理時間の影響を軽減するためです。

#### チャットボットをスケーリングする

チャットボットの複雑さが増すにつれて、アプリケーションアーキテクチャはそれに合わせて進化できます。アーキテクチャにさらなるレイヤーを追加する前に、以下の詳細ではない選択肢を検討してください：

- プロンプトを最大限に活用し、プロンプトエンジニアリングを通じて最適化していることを確認します。 [プロンプトエンジニアリングガイド](https://platform.claude.com/docs/ja/build-with-claude/prompt-engineering/overview) を使用して、最も効果的なプロンプトを作成します。
- プロンプトに追加の [ツール](https://platform.claude.com/docs/ja/build-with-claude/tool-use) を追加します（ [プロンプトチェーン](https://platform.claude.com/docs/ja/build-with-claude/prompt-engineering/chain-prompts) を含めることができます）。必要な機能を達成できるかどうかを確認します。

チャットボットが非常に多様なタスクを処理する場合、初期顧客クエリをルーティングするために、 [個別のインテント分類器](https://github.com/anthropics/anthropic-cookbook/blob/main/skills/classification/guide.ipynb) を追加することを検討する場合があります。既存のアプリケーションの場合、これには、顧客クエリを分類器を通してルーティングし、その後、専門的な会話（独自のツールセットとシステムプロンプト）にルーティングする決定木を作成することが含まれます。注意として、この方法には、レイテンシを増加させることができる Claude への追加呼び出しが必要です。

### Claude をサポートワークフローに統合する

例は Python 関数が Streamlit 環境内で呼び出し可能であることに焦点を当てていますが、リアルタイムサポートチャットボットに Claude をデプロイするには API サービスが必要です。

これにアプローチする方法は以下の通りです：

1. API ラッパーを作成：分類関数の周りに単純な API ラッパーを開発します。例えば、Flask API または Fast API を使用してコードを HTTP サービスにラップできます。HTTP サービスはユーザー入力を受け入れ、アシスタント応答を全体的に返すことができます。したがって、サービスは以下の特性を持つことができます：
   - Server-Sent Events（SSE）：SSE により、サーバーからクライアントへのリアルタイムストリーミング応答が可能になります。これは LLM で作業する場合、スムーズでインタラクティブなエクスペリエンスを提供するために重要です。
   - キャッシング：キャッシングを実装することで、応答時間を大幅に改善し、不要な API 呼び出しを削減できます。
   - コンテキスト保持：ユーザーが移動して戻ってきた場合のコンテキスト保持は、会話の継続性にとって重要です。
2. Web インターフェイスを構築：Claude を搭載したエージェントと対話するためのユーザーフレンドリーな Web UI を実装します。


[Retrieval Augmented Generation（RAG）cookbook\\
\\
RAG cookbook レシピにアクセスして、より多くのコード例と詳細なガイダンスを取得します。](https://github.com/anthropics/anthropic-cookbook/blob/main/skills/retrieval_augmented_generation/guide.ipynb) [Citations cookbook\\
\\
Citations cookbook レシピを探索して、情報の正確性と説明可能性を確保する方法を学びます。](https://github.com/anthropics/anthropic-cookbook/blob/main/misc/using_citations.ipynb)

- [Claude で構築する前に](https://platform.claude.com/docs/ja/about-claude/use-case-guides/customer-support-chat#claude)
- [カスタマーサポートチャットに Claude を使用するかどうかを決定する](https://platform.claude.com/docs/ja/about-claude/use-case-guides/customer-support-chat#claude-2)
- [Claude をカスタマーサービスエージェントとして実装する方法](https://platform.claude.com/docs/ja/about-claude/use-case-guides/customer-support-chat#claude-3)
- [適切な Claude モデルを選択する](https://platform.claude.com/docs/ja/about-claude/use-case-guides/customer-support-chat#claude-4)
- [Claude をサポートワークフローに統合する](https://platform.claude.com/docs/ja/about-claude/use-case-guides/customer-support-chat#claude-5)

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

Invalid domain for site key.

ERROR for site owner:

Invalid domain for site key

reCAPTCHA

[Privacy](https://www.google.com/intl/en/policies/privacy/) \- [Terms](https://www.google.com/intl/en/policies/terms/)
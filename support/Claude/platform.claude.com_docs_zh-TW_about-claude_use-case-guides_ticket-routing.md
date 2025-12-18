---
url: "https://platform.claude.com/docs/zh-TW/about-claude/use-case-guides/ticket-routing"
title: "工單路由 - Claude Docs"
---

[Claude Documentation Home](https://platform.claude.com/docs/zh-TW/home)

- [開發者指南](https://platform.claude.com/docs/zh-TW/intro)
- [API 參考](https://platform.claude.com/docs/zh-TW/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [資源](https://platform.claude.com/docs/zh-TW/resources/overview)
- [發行說明](https://platform.claude.com/docs/zh-TW/release-notes/overview)

繁體中文

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fzh-TW%2Fabout-claude%2Fuse-case-guides%2Fticket-routing)

Search...

⌘K

資源

[概覽](https://platform.claude.com/docs/zh-TW/resources/overview) [詞彙表](https://platform.claude.com/docs/zh-TW/about-claude/glossary) [系統提示詞](https://platform.claude.com/docs/zh-TW/release-notes/system-prompts)

使用案例

[概覽](https://platform.claude.com/docs/zh-TW/about-claude/use-case-guides/overview) [工單路由](https://platform.claude.com/docs/zh-TW/about-claude/use-case-guides/ticket-routing) [客戶支援 agent](https://platform.claude.com/docs/zh-TW/about-claude/use-case-guides/customer-support-chat) [內容審核](https://platform.claude.com/docs/zh-TW/about-claude/use-case-guides/content-moderation) [法律摘要](https://platform.claude.com/docs/zh-TW/about-claude/use-case-guides/legal-summarization)

提示詞庫

[Console](https://platform.claude.com/)

[Log in](https://platform.claude.com/login)

使用案例

工單路由

使用案例

# 工單路由

Copy page

本指南將介紹如何運用 Claude 的先進自然語言理解能力，根據客戶意圖、緊急程度、優先級、客戶檔案等因素，大規模分類客戶支援工單。

Copy page

## 定義是否使用 Claude 進行工單路由

以下是一些關鍵指標，表明您應該使用像 Claude 這樣的 LLM 而不是傳統 ML 方法來處理分類任務：

### 您可用的標記訓練資料有限

### 您的分類類別可能會隨時間變化或演進

### 您需要處理複雜的非結構化文本輸入

### 您的分類規則基於語義理解

### 您需要分類決策的可解釋推理

### 您希望更有效地處理邊緣案例和模糊工單

### 您需要多語言支援而無需維護單獨的模型

* * *

## 建立和部署您的 LLM 支援工作流程

### 了解您目前的支援方法

在深入自動化之前，了解您現有的工單系統至關重要。首先調查您的支援團隊目前如何處理工單路由。

考慮以下問題：

- 使用什麼標準來決定應用什麼 SLA/服務提供？
- 工單路由是否用於決定工單分配給哪一層支援或產品專家？
- 是否已有任何自動化規則或工作流程？在什麼情況下它們會失敗？
- 如何處理邊緣案例或模糊工單？
- 團隊如何優先處理工單？

您對人類如何處理某些案例了解得越多，就越能更好地與 Claude 合作完成任務。

### 定義用戶意圖類別

明確定義的用戶意圖類別清單對於使用 Claude 進行準確的支援工單分類至關重要。Claude 在您系統內有效路由工單的能力與您系統類別的明確定義程度成正比。

以下是一些用戶意圖類別和子類別的範例。

### 技術問題

### 帳戶管理

### 產品資訊

### 用戶指導

### 回饋

### 訂單相關

### 服務請求

### 安全問題

### 合規和法律

### 緊急支援

### 培訓和教育

### 整合和 API

除了意圖之外，工單路由和優先級也可能受到其他因素影響，如緊急程度、客戶類型、SLA 或語言。在建立自動化路由系統時，請務必考慮其他路由標準。

### 建立成功標準

與您的支援團隊合作 [定義明確的成功標準](https://platform.claude.com/docs/zh-TW/build-with-claude/define-success)，包括可衡量的基準、閾值和目標。

以下是使用 LLM 進行支援工單路由時的一些標準標準和基準：

### 分類一致性

### 適應速度

### 多語言處理

### 邊緣案例處理

### 偏見緩解

### 提示效率

### 可解釋性分數

以下是一些無論是否使用 LLM 都可能有用的常見成功標準：

### 路由準確度

### 分配時間

### 重新路由率

### 首次接觸解決率

### 平均處理時間

### 客戶滿意度分數

### 升級率

### 代理生產力

### 自助服務轉移率

### 每工單成本

### 選擇正確的 Claude 模型

模型的選擇取決於成本、準確度和回應時間之間的權衡。

許多客戶發現 `claude-3-5-haiku-20241022` 是工單路由的理想模型，因為它是 Claude 3 系列中最快且最具成本效益的模型，同時仍能提供出色的結果。如果您的分類問題需要深度主題專業知識或大量意圖類別的複雜推理，您可能會選擇 [更大的 Sonnet 模型](https://platform.claude.com/docs/zh-TW/about-claude/models)。

### 建立強大的提示

工單路由是一種分類任務。Claude 分析支援工單的內容，並根據問題類型、緊急程度、所需專業知識或其他相關因素將其分類到預定義的類別中。

讓我們編寫一個工單分類提示。我們的初始提示應該包含用戶請求的內容，並返回推理和意圖。

在 [Claude Console](https://platform.claude.com/login) 上嘗試 [提示生成器](https://platform.claude.com/docs/zh-TW/prompt-generator)，讓 Claude 為您編寫初稿。

以下是工單路由分類提示的範例：

```
def classify_support_request(ticket_contents):
    # Define the prompt for the classification task
    classification_prompt = f"""您將作為客戶支援工單分類系統。您的任務是分析客戶支援請求，並為每個請求輸出適當的分類意圖以及您的推理。

        以下是您需要分類的客戶支援請求：

        <request>{ticket_contents}</request>

        請仔細分析上述請求以確定客戶的核心意圖和需求。考慮客戶要求什麼或對什麼有擔憂。

        首先，在 <reasoning> 標籤內寫出您對如何分類此請求的推理和分析。

        然後，在 <intent> 標籤內輸出請求的適當分類標籤。有效的意圖是：
        <intents>
        <intent>支援、回饋、投訴</intent>
        <intent>訂單追蹤</intent>
        <intent>退款/換貨</intent>
        </intents>

        一個請求只能有一個適用的意圖。只包含最適用於請求的意圖。

        例如，考慮以下請求：
        <request>您好！我在星期六安裝了高速光纖網路，我的安裝人員 Kevin 非常棒！我可以在哪裡發送我的正面評價？謝謝您的幫助！</request>

        以下是您的輸出應該如何格式化的範例（針對上述範例請求）：
        <reasoning>用戶尋求資訊以便留下正面回饋。</reasoning>
        <intent>支援、回饋、投訴</intent>

        以下是更多範例：
        <examples>
        <example 2>
        範例 2 輸入：
        <request>我想寫信親自感謝您在上週末我父親葬禮期間對我家人表現出的同情心。您的員工在整個過程中如此體貼和樂於助人；這真的減輕了我們肩上的負擔。瞻仰手冊很漂亮。我們永遠不會忘記您對我們的善意，我們非常感謝儀式進行得如此順利。再次感謝，Amarantha Hill 代表 Hill 家族。</request>

        範例 2 輸出：
        <reasoning>用戶對他們的體驗留下正面評價。</reasoning>
        <intent>支援、回饋、投訴</intent>
        </example 2>
        <example 3>

        ...

        </example 8>
        <example 9>
        範例 9 輸入：
        <request>您的網站不斷發送阻擋整個螢幕的廣告彈窗。我花了二十分鐘才終於找到電話號碼來撥打和投訴。在所有這些彈窗的情況下，我怎麼可能存取我的帳戶資訊？您能為我存取我的帳戶嗎，因為您的網站壞了？我需要知道檔案中的地址是什麼。</request>

        範例 9 輸出：
        <reasoning>用戶請求幫助存取他們的網路帳戶資訊。</reasoning>
        <intent>支援、回饋、投訴</intent>
        </example 9>

        記住始終在實際意圖輸出之前包含您的分類推理。推理應該包含在 <reasoning> 標籤中，意圖包含在 <intent> 標籤中。只返回推理和意圖。
        """
```

讓我們分解這個提示的關鍵組件：

- 我們使用 Python f-strings 創建提示模板，允許將 `ticket_contents` 插入到 `<request>` 標籤中。
- 我們給 Claude 一個明確定義的角色，作為仔細分析工單內容以確定客戶核心意圖和需求的分類系統。
- 我們指導 Claude 正確的輸出格式，在這種情況下，在 `<reasoning>` 標籤內提供其推理和分析，然後在 `<intent>` 標籤內提供適當的分類標籤。
- 我們指定有效的意圖類別："支援、回饋、投訴"、"訂單追蹤"和"退款/換貨"。
- 我們包含一些範例（即少樣本提示）來說明輸出應該如何格式化，這提高了準確性和一致性。

我們希望 Claude 將其回應分成各種 XML 標籤部分的原因是，我們可以使用正則表達式從輸出中分別提取推理和意圖。這使我們能夠在工單路由工作流程中創建有針對性的下一步，例如僅使用意圖來決定將工單路由給哪個人。

### 部署您的提示

在沒有在測試生產環境中部署並 [運行評估](https://platform.claude.com/docs/zh-TW/build-with-claude/develop-tests) 的情況下，很難知道您的提示效果如何。

讓我們建立部署結構。首先定義包裝我們對 Claude 調用的方法簽名。我們將採用我們已經開始編寫的方法，該方法以 `ticket_contents` 作為輸入，現在返回 `reasoning` 和 `intent` 的元組作為輸出。如果您有使用傳統 ML 的現有自動化，您將希望遵循該方法簽名。

```
import anthropic
import re

# Create an instance of the Claude API client
client = anthropic.Anthropic()

# Set the default model
DEFAULT_MODEL="claude-3-5-haiku-20241022"

def classify_support_request(ticket_contents):
    # Define the prompt for the classification task
    classification_prompt = f"""您將作為客戶支援工單分類系統。
        ...
        ... 推理應該包含在 <reasoning> 標籤中，意圖包含在 <intent> 標籤中。只返回推理和意圖。
        """
    # Send the prompt to the API to classify the support request.
    message = client.messages.create(
        model=DEFAULT_MODEL,
        max_tokens=500,
        temperature=0,
        messages=[{"role": "user", "content": classification_prompt}],
        stream=False,
    )
    reasoning_and_intent = message.content[0].text

    # Use Python's regular expressions library to extract `reasoning`.
    reasoning_match = re.search(
        r"<reasoning>(.*?)</reasoning>", reasoning_and_intent, re.DOTALL
    )
    reasoning = reasoning_match.group(1).strip() if reasoning_match else ""

    # Similarly, also extract the `intent`.
    intent_match = re.search(r"<intent>(.*?)</intent>", reasoning_and_intent, re.DOTALL)
    intent = intent_match.group(1).strip() if intent_match else ""

    return reasoning, intent
```

此程式碼：

- 匯入 Anthropic 庫並使用您的 API 金鑰創建客戶端實例。
- 定義一個接受 `ticket_contents` 字串的 `classify_support_request` 函數。
- 使用 `classification_prompt` 將 `ticket_contents` 發送給 Claude 進行分類
- 返回從回應中提取的模型的 `reasoning` 和 `intent`。

由於我們需要等待整個推理和意圖文本生成完成後才能解析，我們設置 `stream=False`（預設值）。

* * *

## 評估您的提示

提示通常需要測試和優化才能準備好投入生產。要確定您解決方案的準備情況，請根據您之前建立的成功標準和閾值評估效能。

要運行您的評估，您需要測試案例來運行它。本指南的其餘部分假設您已經 [開發了您的測試案例](https://platform.claude.com/docs/zh-TW/build-with-claude/develop-tests)。

### 建立評估函數

我們這個指南的範例評估沿著三個關鍵指標衡量 Claude 的效能：

- 準確度
- 每次分類成本

根據對您重要的因素，您可能需要在其他軸上評估 Claude。

為了評估這一點，我們首先必須修改我們編寫的腳本，並添加一個函數來比較預測意圖與實際意圖，並計算正確預測的百分比。我們還必須添加成本計算和時間測量功能。

```
import anthropic
import re

# Create an instance of the Claude API client
client = anthropic.Anthropic()

# Set the default model
DEFAULT_MODEL="claude-3-5-haiku-20241022"

def classify_support_request(request, actual_intent):
    # Define the prompt for the classification task
    classification_prompt = f"""您將作為客戶支援工單分類系統。
        ...
        ...推理應該包含在 <reasoning> 標籤中，意圖包含在 <intent> 標籤中。只返回推理和意圖。
        """

    message = client.messages.create(
        model=DEFAULT_MODEL,
        max_tokens=500,
        temperature=0,
        messages=[{"role": "user", "content": classification_prompt}],
    )
    usage = message.usage  # Get the usage statistics for the API call for how many input and output tokens were used.
    reasoning_and_intent = message.content[0].text

    # Use Python's regular expressions library to extract `reasoning`.
    reasoning_match = re.search(
        r"<reasoning>(.*?)</reasoning>", reasoning_and_intent, re.DOTALL
    )
    reasoning = reasoning_match.group(1).strip() if reasoning_match else ""

    # Similarly, also extract the `intent`.
    intent_match = re.search(r"<intent>(.*?)</intent>", reasoning_and_intent, re.DOTALL)
    intent = intent_match.group(1).strip() if intent_match else ""

      # Check if the model's prediction is correct.
    correct = actual_intent.strip() == intent.strip()

    # Return the reasoning, intent, correct, and usage.
    return reasoning, intent, correct, usage
```

讓我們分解我們所做的編輯：

- 我們將測試案例中的 `actual_intent` 添加到 `classify_support_request` 方法中，並設置比較以評估 Claude 的意圖分類是否與我們的黃金意圖分類匹配。
- 我們提取 API 調用的使用統計資料，以根據使用的輸入和輸出令牌計算成本

### 運行您的評估

適當的評估需要明確的閾值和基準來確定什麼是好結果。上述腳本將為我們提供準確度、回應時間和每次分類成本的運行時值，但我們仍然需要明確建立的閾值。例如：

- **準確度：** 95%（100 次測試中）
- **每次分類成本：** 平均比目前路由方法減少 50%（100 次測試中）

擁有這些閾值使您能夠快速輕鬆地大規模且公正地確定什麼方法對您最好，以及可能需要做出什麼改變來更好地符合您的要求。

* * *

## 改善效能

在複雜場景中，除了標準 [提示工程技術](https://platform.claude.com/docs/zh-TW/build-with-claude/prompt-engineering/overview) 和 [護欄實施策略](https://platform.claude.com/docs/zh-TW/test-and-evaluate/strengthen-guardrails/reduce-hallucinations) 之外，考慮額外策略來改善效能可能會有幫助。以下是一些常見場景：

### 對於 20+ 意圖類別的案例使用分類階層

隨著類別數量的增長，所需範例的數量也會擴展，可能使提示變得笨重。作為替代方案，您可以考慮使用分類器混合實施階層分類系統。

1. 將您的意圖組織成分類樹結構。
2. 在樹的每個層級創建一系列分類器，實現級聯路由方法。

例如，您可能有一個頂級分類器，將工單廣泛分類為"技術問題"、"帳單問題"和"一般查詢"。然後，每個類別都可以有自己的子分類器來進一步細化分類。

![](https://platform.claude.com/docs/images/ticket-hierarchy.png)

- **優點 \- 更大的細微差別和準確度：** 您可以為每個父路徑創建不同的提示，允許更有針對性和特定上下文的分類。這可以導致改善的準確度和更細緻的客戶請求處理。

- **缺點 \- 增加延遲：** 請注意，多個分類器可能導致增加的延遲，我們建議使用我們最快的模型 Haiku 實施此方法。


### 使用向量資料庫和相似性搜索檢索來處理高度可變的工單

儘管提供範例是改善效能的最有效方法，但如果支援請求高度可變，很難在單個提示中包含足夠的範例。

在這種情況下，您可以使用向量資料庫從範例資料集中進行相似性搜索，並檢索給定查詢最相關的範例。

這種方法在我們的 [分類食譜](https://github.com/anthropics/anthropic-cookbook/blob/82675c124e1344639b2a875aa9d3ae854709cd83/skills/classification/guide.ipynb) 中有詳細概述，已被證明可以將效能從 71% 準確度提高到 93% 準確度。

### 專門考慮預期的邊緣案例

以下是 Claude 可能錯誤分類工單的一些場景（可能還有其他對您情況獨特的場景）。在這些場景中，考慮在提示中提供明確的指示或範例，說明 Claude 應該如何處理邊緣案例：

### 客戶提出隱含請求

### Claude 優先考慮情緒而非意圖

### 多個問題導致問題優先級混亂

* * *

## 將 Claude 整合到您更大的支援工作流程中

適當的整合需要您就基於 Claude 的工單路由腳本如何適應您更大的工單路由系統架構做出一些決定。您可以通過兩種方式做到這一點：

- **推送式：**您使用的支援工單系統（例如 Zendesk）通過向您的路由服務發送 webhook 事件來觸發您的程式碼，然後分類意圖並路由它。
  - 這種方法更具網路可擴展性，但需要您公開一個公共端點。
- **拉取式：**您的程式碼根據給定的排程拉取最新工單，並在拉取時路由它們。
  - 這種方法更容易實施，但當拉取頻率過高時可能對支援工單系統進行不必要的調用，或當拉取頻率過低時可能過於緩慢。

對於這兩種方法，您都需要將您的腳本包裝在服務中。方法的選擇取決於您的支援工單系統提供什麼 API。

* * *

[分類食譜\\
\\
訪問我們的分類食譜以獲取更多範例程式碼和詳細的評估指導。](https://github.com/anthropics/anthropic-cookbook/tree/main/capabilities/classification) [Claude Console\\
\\
開始在 Claude Console 上建立和評估您的工作流程。](https://platform.claude.com/dashboard)

- [定義是否使用 Claude 進行工單路由](https://platform.claude.com/docs/zh-TW/about-claude/use-case-guides/ticket-routing#claude)
- [建立和部署您的 LLM 支援工作流程](https://platform.claude.com/docs/zh-TW/about-claude/use-case-guides/ticket-routing#llm)
- [選擇正確的 Claude 模型](https://platform.claude.com/docs/zh-TW/about-claude/use-case-guides/ticket-routing#claude-2)
- [對於 20+ 意圖類別的案例使用分類階層](https://platform.claude.com/docs/zh-TW/about-claude/use-case-guides/ticket-routing#20)
- [將 Claude 整合到您更大的支援工作流程中](https://platform.claude.com/docs/zh-TW/about-claude/use-case-guides/ticket-routing#claude-3)

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
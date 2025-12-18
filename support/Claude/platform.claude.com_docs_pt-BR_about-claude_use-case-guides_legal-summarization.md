---
url: "https://platform.claude.com/docs/pt-BR/about-claude/use-case-guides/legal-summarization"
title: "Resumo de documentos legais - Claude Docs"
---

[Claude Documentation Home](https://platform.claude.com/docs/pt-BR/home)

- [Guia do Desenvolvedor](https://platform.claude.com/docs/pt-BR/intro)
- [Referência da API](https://platform.claude.com/docs/pt-BR/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [Recursos](https://platform.claude.com/docs/pt-BR/resources/overview)
- [Notas de lançamento](https://platform.claude.com/docs/pt-BR/release-notes/overview)

Português (BR)

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fpt-BR%2Fabout-claude%2Fuse-case-guides%2Flegal-summarization)

Search...

⌘K

Recursos

[Visão geral](https://platform.claude.com/docs/pt-BR/resources/overview) [Glossário](https://platform.claude.com/docs/pt-BR/about-claude/glossary) [Prompts do sistema](https://platform.claude.com/docs/pt-BR/release-notes/system-prompts)

Casos de uso

[Visão geral](https://platform.claude.com/docs/pt-BR/about-claude/use-case-guides/overview) [Roteamento de tickets](https://platform.claude.com/docs/pt-BR/about-claude/use-case-guides/ticket-routing) [Agente de suporte ao cliente](https://platform.claude.com/docs/pt-BR/about-claude/use-case-guides/customer-support-chat) [Moderação de conteúdo](https://platform.claude.com/docs/pt-BR/about-claude/use-case-guides/content-moderation) [Resumo legal](https://platform.claude.com/docs/pt-BR/about-claude/use-case-guides/legal-summarization)

Biblioteca de prompts

[Console](https://platform.claude.com/)

[Log in](https://platform.claude.com/login)

Casos de uso

Resumo legal

Casos de uso

# Resumo de documentos legais

Copy page

Este guia apresenta como aproveitar os recursos avançados de processamento de linguagem natural do Claude para resumir eficientemente documentos legais, extraindo informações-chave e acelerando pesquisas jurídicas. Com Claude, você pode simplificar a revisão de contratos, preparação de litígios e trabalho regulatório, economizando tempo e garantindo precisão em seus processos legais.

Copy page

> Visite nosso [livro de receitas de resumo](https://github.com/anthropics/anthropic-cookbook/blob/main/skills/summarization/guide.ipynb) para ver um exemplo de implementação de resumo de documentos legais usando Claude.

## Antes de construir com Claude

### Decida se deve usar Claude para resumo de documentos legais

Aqui estão alguns indicadores-chave de que você deve usar um LLM como Claude para resumir documentos legais:

### Você deseja revisar um alto volume de documentos de forma eficiente e acessível

### Você requer extração automatizada de metadados-chave

### Você deseja gerar resumos claros, concisos e padronizados

### Você precisa de citações precisas para seus resumos

### Você deseja simplificar e acelerar seu processo de pesquisa jurídica

### Determine os detalhes que você deseja que o resumo extraia

Não existe um único resumo correto para qualquer documento. Sem direção clara, pode ser difícil para Claude determinar quais detalhes incluir. Para obter resultados ideais, identifique as informações específicas que você deseja incluir no resumo.

Por exemplo, ao resumir um contrato de subaluguel, você pode desejar extrair os seguintes pontos-chave:

```
details_to_extract = [\
    'Parties involved (sublessor, sublessee, and original lessor)',\
    'Property details (address, description, and permitted use)',\
    'Term and rent (start date, end date, monthly rent, and security deposit)',\
    'Responsibilities (utilities, maintenance, and repairs)',\
    'Consent and notices (landlord\'s consent, and notice requirements)',\
    'Special provisions (furniture, parking, and subletting restrictions)'\
]
```

### Estabeleça critérios de sucesso

Avaliar a qualidade dos resumos é uma tarefa notoriamente desafiadora. Ao contrário de muitas outras tarefas de processamento de linguagem natural, a avaliação de resumos geralmente carece de métricas claras e objetivas. O processo pode ser altamente subjetivo, com diferentes leitores valorizando diferentes aspectos de um resumo. Aqui estão critérios que você pode desejar considerar ao avaliar o desempenho do Claude no resumo de documentos legais.

### Correção factual

### Precisão legal

### Concisão

### Consistência

### Legibilidade

### Viés e justiça

Consulte nosso guia sobre [estabelecimento de critérios de sucesso](https://platform.claude.com/docs/pt-BR/test-and-evaluate/define-success) para mais informações.

* * *

## Como resumir documentos legais usando Claude

### Selecione o modelo Claude correto

A precisão do modelo é extremamente importante ao resumir documentos legais. Claude Sonnet 4.5 é uma excelente escolha para casos de uso como este, onde alta precisão é necessária. Se o tamanho e a quantidade de seus documentos forem grandes, de modo que os custos começarem a se tornar uma preocupação, você também pode tentar usar um modelo menor como Claude Haiku 4.5.

Para ajudar a estimar esses custos, abaixo está uma comparação do custo para resumir 1.000 contratos de subaluguel usando Sonnet e Haiku:

- **Tamanho do conteúdo**
  - Número de contratos: 1.000
  - Caracteres por contrato: 300.000
  - Total de caracteres: 300M
- **Tokens estimados**
  - Tokens de entrada: 86M (assumindo 1 token por 3,5 caracteres)
  - Tokens de saída por resumo: 350
  - Total de tokens de saída: 350.000
- **Custo estimado do Claude Sonnet 4.5**
  - Custo de token de entrada: 86 MTok \* $3.00/MTok = $258
  - Custo de token de saída: 0.35 MTok \* $15.00/MTok = $5.25
  - Custo total: $258.00 + $5.25 = $263.25
- **Custo estimado do Claude Haiku 3**
  - Custo de token de entrada: 86 MTok \* $0.25/MTok = $21.50
  - Custo de token de saída: 0.35 MTok \* $1.25/MTok = $0.44
  - Custo total: $21.50 + $0.44 = $21.96

Os custos reais podem diferir dessas estimativas. Essas estimativas são baseadas no exemplo destacado na seção sobre [prompting](https://platform.claude.com/docs/pt-BR/about-claude/use-case-guides/legal-summarization#build-a-strong-prompt).

### Transforme documentos em um formato que Claude possa processar

Antes de começar a resumir documentos, você precisa preparar seus dados. Isso envolve extrair texto de PDFs, limpar o texto e garantir que esteja pronto para ser processado por Claude.

Aqui está uma demonstração desse processo em um PDF de amostra:

```
from io import BytesIO
import re

import pypdf
import requests

def get_llm_text(pdf_file):
    reader = pypdf.PdfReader(pdf_file)
    text = "\n".join([page.extract_text() for page in reader.pages])

    # Remove extra whitespace
    text = re.sub(r'\s+', ' ', text)

    # Remove page numbers
    text = re.sub(r'\n\s*\d+\s*\n', '\n', text)

    return text

# Create the full URL from the GitHub repository
url = "https://raw.githubusercontent.com/anthropics/anthropic-cookbook/main/skills/summarization/data/Sample Sublease Agreement.pdf"
url = url.replace(" ", "%20")

# Download the PDF file into memory
response = requests.get(url)

# Load the PDF from memory
pdf_file = BytesIO(response.content)

document_text = get_llm_text(pdf_file)
print(document_text[:50000])
```

Neste exemplo, primeiro baixamos um PDF de um contrato de subaluguel de amostra usado no [livro de receitas de resumo](https://github.com/anthropics/anthropic-cookbook/blob/main/skills/summarization/data/Sample%20Sublease%20Agreement.pdf). Este contrato foi obtido de um contrato de subaluguel disponível publicamente do [site sec.gov](https://www.sec.gov/Archives/edgar/data/1045425/000119312507044370/dex1032.htm).

Usamos a biblioteca pypdf para extrair o conteúdo do PDF e convertê-lo em texto. Os dados de texto são então limpos removendo espaços em branco extras e números de página.

### Construa um prompt forte

Claude pode se adaptar a vários estilos de resumo. Você pode alterar os detalhes do prompt para guiar Claude a ser mais ou menos verboso, incluir mais ou menos terminologia técnica, ou fornecer um resumo de nível superior ou inferior do contexto em questão.

Aqui está um exemplo de como criar um prompt que garanta que os resumos gerados sigam uma estrutura consistente ao analisar contratos de subaluguel:

```
import anthropic

# Initialize the Anthropic client
client = anthropic.Anthropic()

def summarize_document(text, details_to_extract, model="claude-sonnet-4-5", max_tokens=1000):

    # Format the details to extract to be placed within the prompt's context
    details_to_extract_str = '\n'.join(details_to_extract)

    # Prompt the model to summarize the sublease agreement
    prompt = f"""Summarize the following sublease agreement. Focus on these key aspects:

    {details_to_extract_str}

    Provide the summary in bullet points nested within the XML header for each section. For example:

    <parties involved>
    - Sublessor: [Name]
    // Add more details as needed
    </parties involved>

    If any information is not explicitly stated in the document, note it as "Not specified". Do not preamble.

    Sublease agreement text:
    {text}
    """

    response = client.messages.create(
        model=model,
        max_tokens=max_tokens,
        system="You are a legal analyst specializing in real estate law, known for highly accurate and detailed summaries of sublease agreements.",
        messages=[\
            {"role": "user", "content": prompt},\
            {"role": "assistant", "content": "Here is the summary of the sublease agreement: <summary>"}\
        ],
        stop_sequences=["</summary>"]
    )

    return response.content[0].text

sublease_summary = summarize_document(document_text, details_to_extract)
print(sublease_summary)
```

Este código implementa uma função `summarize_document` que usa Claude para resumir o conteúdo de um contrato de subaluguel. A função aceita uma string de texto e uma lista de detalhes a extrair como entradas. Neste exemplo, chamamos a função com as variáveis `document_text` e `details_to_extract` que foram definidas nos trechos de código anteriores.

Dentro da função, um prompt é gerado para Claude, incluindo o documento a ser resumido, os detalhes a extrair e instruções específicas para resumir o documento. O prompt instrui Claude a responder com um resumo de cada detalhe a extrair aninhado dentro de cabeçalhos XML.

Como decidimos produzir cada seção do resumo dentro de tags, cada seção pode ser facilmente analisada como uma etapa de pós-processamento. Essa abordagem permite resumos estruturados que podem ser adaptados para seu caso de uso, de modo que cada resumo siga o mesmo padrão.

### Avalie seu prompt

O prompting geralmente requer testes e otimização para estar pronto para produção. Para determinar a prontidão de sua solução, avalie a qualidade de seus resumos usando um processo sistemático que combine métodos quantitativos e qualitativos. Criar uma [avaliação empírica forte](https://platform.claude.com/docs/pt-BR/test-and-evaluate/develop-tests#building-evals-and-test-cases) baseada em seus critérios de sucesso definidos permitirá que você otimize seus prompts. Aqui estão algumas métricas que você pode desejar incluir em sua avaliação empírica:

### Pontuações ROUGE

### Pontuações BLEU

### Similaridade de incorporação contextual

### Classificação baseada em LLM

### Avaliação humana

### Implante seu prompt

Aqui estão algumas considerações adicionais a ter em mente ao implantar sua solução em produção.

1. **Garanta nenhuma responsabilidade:** Compreenda as implicações legais de erros nos resumos, que podem levar a responsabilidade legal para sua organização ou clientes. Forneça isenções de responsabilidade ou avisos legais esclarecendo que os resumos são gerados por IA e devem ser revisados por profissionais jurídicos.

2. **Lidar com tipos de documentos diversos:** Neste guia, discutimos como extrair texto de PDFs. No mundo real, os documentos podem vir em uma variedade de formatos (PDFs, documentos do Word, arquivos de texto, etc.). Garanta que seu pipeline de extração de dados possa converter todos os formatos de arquivo que você espera receber.

3. **Paralelizar chamadas de API para Claude:** Documentos longos com um grande número de tokens podem levar até um minuto para Claude gerar um resumo. Para grandes coleções de documentos, você pode desejar enviar chamadas de API para Claude em paralelo para que os resumos possam ser concluídos em um período de tempo razoável. Consulte os [limites de taxa](https://platform.claude.com/docs/pt-BR/api/rate-limits#rate-limits) da Anthropic para determinar a quantidade máxima de chamadas de API que podem ser executadas em paralelo.


* * *

## Melhorar o desempenho

Em cenários complexos, pode ser útil considerar estratégias adicionais para melhorar o desempenho além das [técnicas padrão de engenharia de prompt](https://platform.claude.com/docs/pt-BR/build-with-claude/prompt-engineering/overview). Aqui estão algumas estratégias avançadas:

### Execute meta-resumo para resumir documentos longos

O resumo de documentos legais geralmente envolve o tratamento de documentos longos ou muitos documentos relacionados de uma vez, de modo que você ultrapasse a janela de contexto do Claude. Você pode usar um método de chunking conhecido como meta-resumo para lidar com esse caso de uso. Essa técnica envolve dividir documentos em chunks menores e gerenciáveis e depois processar cada chunk separadamente. Você pode então combinar os resumos de cada chunk para criar um meta-resumo de todo o documento.

Aqui está um exemplo de como executar meta-resumo:

```
import anthropic

# Initialize the Anthropic client
client = anthropic.Anthropic()

def chunk_text(text, chunk_size=20000):
    return [text[i:i+chunk_size] for i in range(0, len(text), chunk_size)]

def summarize_long_document(text, details_to_extract, model="claude-sonnet-4-5", max_tokens=1000):

    # Format the details to extract to be placed within the prompt's context
    details_to_extract_str = '\n'.join(details_to_extract)

    # Iterate over chunks and summarize each one
    chunk_summaries = [summarize_document(chunk, details_to_extract, model=model, max_tokens=max_tokens) for chunk in chunk_text(text)]

    final_summary_prompt = f"""

    You are looking at the chunked summaries of multiple documents that are all related.
    Combine the following summaries of the document from different truthful sources into a coherent overall summary:

    <chunked_summaries>
    {"".join(chunk_summaries)}
    </chunked_summaries>

    Focus on these key aspects:
    {details_to_extract_str})

    Provide the summary in bullet points nested within the XML header for each section. For example:

    <parties involved>
    - Sublessor: [Name]
    // Add more details as needed
    </parties involved>

    If any information is not explicitly stated in the document, note it as "Not specified". Do not preamble.
    """

    response = client.messages.create(
        model=model,
        max_tokens=max_tokens,
        system="You are a legal expert that summarizes notes on one document.",
        messages=[\
            {"role": "user",  "content": final_summary_prompt},\
            {"role": "assistant", "content": "Here is the summary of the sublease agreement: <summary>"}\
\
        ],
        stop_sequences=["</summary>"]
    )

    return response.content[0].text

long_summary = summarize_long_document(document_text, details_to_extract)
print(long_summary)
```

A função `summarize_long_document` se baseia na função `summarize_document` anterior dividindo o documento em chunks menores e resumindo cada chunk individualmente.

O código consegue isso aplicando a função `summarize_document` a cada chunk de 20.000 caracteres dentro do documento original. Os resumos individuais são então combinados e um resumo final é criado a partir desses resumos de chunk.

Observe que a função `summarize_long_document` não é estritamente necessária para nosso PDF de exemplo, pois o documento inteiro se encaixa na janela de contexto do Claude. No entanto, torna-se essencial para documentos que excedem a janela de contexto do Claude ou ao resumir múltiplos documentos relacionados juntos. Independentemente disso, essa técnica de meta-resumo geralmente captura detalhes adicionais importantes no resumo final que foram perdidos na abordagem de resumo único anterior.

### Use documentos indexados por resumo para explorar uma grande coleção de documentos

Pesquisar uma coleção de documentos com um LLM geralmente envolve geração aumentada por recuperação (RAG). No entanto, em cenários envolvendo documentos grandes ou quando a recuperação precisa de informações é crucial, uma abordagem RAG básica pode ser insuficiente. Documentos indexados por resumo é uma abordagem RAG avançada que fornece uma maneira mais eficiente de classificar documentos para recuperação, usando menos contexto do que os métodos RAG tradicionais. Nessa abordagem, você primeiro usa Claude para gerar um resumo conciso para cada documento em seu corpus e depois usa Claude para classificar a relevância de cada resumo para a consulta sendo feita. Para mais detalhes sobre essa abordagem, incluindo um exemplo baseado em código, consulte a seção de documentos indexados por resumo no [livro de receitas de resumo](https://github.com/anthropics/anthropic-cookbook/blob/main/skills/summarization/guide.ipynb).

### Ajuste fino do Claude para aprender com seu conjunto de dados

Outra técnica avançada para melhorar a capacidade do Claude de gerar resumos é o ajuste fino. O ajuste fino envolve treinar Claude em um conjunto de dados personalizado que se alinha especificamente com suas necessidades de resumo de documentos legais, garantindo que Claude se adapte ao seu caso de uso. Aqui está uma visão geral de como executar o ajuste fino:

1. **Identifique erros:** Comece coletando instâncias onde os resumos do Claude ficam aquém - isso pode incluir perda de detalhes legais críticos, incompreensão de contexto ou uso de terminologia legal inadequada.

2. **Organize um conjunto de dados:** Depois de identificar esses problemas, compile um conjunto de dados desses exemplos problemáticos. Este conjunto de dados deve incluir os documentos legais originais ao lado de seus resumos corrigidos, garantindo que Claude aprenda o comportamento desejado.

3. **Execute o ajuste fino:** O ajuste fino envolve retreinar o modelo em seu conjunto de dados organizado para ajustar seus pesos e parâmetros. Este retreinamento ajuda Claude a entender melhor os requisitos específicos de seu domínio legal, melhorando sua capacidade de resumir documentos de acordo com seus padrões.

4. **Melhoria iterativa:** O ajuste fino não é um processo único. Conforme Claude continua a gerar resumos, você pode iterativamente adicionar novos exemplos onde teve desempenho inferior, refinando ainda mais suas capacidades. Com o tempo, esse loop de feedback contínuo resultará em um modelo altamente especializado para suas tarefas de resumo de documentos legais.


O ajuste fino está atualmente disponível apenas via Amazon Bedrock. Detalhes adicionais estão disponíveis no [blog de lançamento da AWS](https://aws.amazon.com/blogs/machine-learning/fine-tune-anthropics-claude-3-haiku-in-amazon-bedrock-to-boost-model-accuracy-and-quality/).

[Livro de receitas de resumo\\
\\
Veja um exemplo de código totalmente implementado de como usar Claude para resumir contratos.](https://github.com/anthropics/anthropic-cookbook/blob/main/skills/summarization/guide.ipynb) [Livro de receitas de citações\\
\\
Explore nosso livro de receitas de citações para orientação sobre como garantir precisão e explicabilidade das informações.](https://github.com/anthropics/anthropic-cookbook/blob/main/misc/using_citations.ipynb)

- [Antes de construir com Claude](https://platform.claude.com/docs/pt-BR/about-claude/use-case-guides/legal-summarization#antes-de-construir-com-claude)
- [Decida se deve usar Claude para resumo de documentos legais](https://platform.claude.com/docs/pt-BR/about-claude/use-case-guides/legal-summarization#decida-se-deve-usar-claude-para-resumo-de-documentos-legais)
- [Determine os detalhes que você deseja que o resumo extraia](https://platform.claude.com/docs/pt-BR/about-claude/use-case-guides/legal-summarization#determine-os-detalhes-que-voce-deseja-que-o-resumo-extraia)
- [Estabeleça critérios de sucesso](https://platform.claude.com/docs/pt-BR/about-claude/use-case-guides/legal-summarization#estabeleca-criterios-de-sucesso)
- [Como resumir documentos legais usando Claude](https://platform.claude.com/docs/pt-BR/about-claude/use-case-guides/legal-summarization#como-resumir-documentos-legais-usando-claude)
- [Selecione o modelo Claude correto](https://platform.claude.com/docs/pt-BR/about-claude/use-case-guides/legal-summarization#selecione-o-modelo-claude-correto)
- [Transforme documentos em um formato que Claude possa processar](https://platform.claude.com/docs/pt-BR/about-claude/use-case-guides/legal-summarization#transforme-documentos-em-um-formato-que-claude-possa-processar)
- [Construa um prompt forte](https://platform.claude.com/docs/pt-BR/about-claude/use-case-guides/legal-summarization#construa-um-prompt-forte)
- [Avalie seu prompt](https://platform.claude.com/docs/pt-BR/about-claude/use-case-guides/legal-summarization#avalie-seu-prompt)
- [Implante seu prompt](https://platform.claude.com/docs/pt-BR/about-claude/use-case-guides/legal-summarization#implante-seu-prompt)
- [Melhorar o desempenho](https://platform.claude.com/docs/pt-BR/about-claude/use-case-guides/legal-summarization#melhorar-o-desempenho)
- [Execute meta-resumo para resumir documentos longos](https://platform.claude.com/docs/pt-BR/about-claude/use-case-guides/legal-summarization#execute-meta-resumo-para-resumir-documentos-longos)
- [Use documentos indexados por resumo para explorar uma grande coleção de documentos](https://platform.claude.com/docs/pt-BR/about-claude/use-case-guides/legal-summarization#use-documentos-indexados-por-resumo-para-explorar-uma-grande-colecao-de-documentos)
- [Ajuste fino do Claude para aprender com seu conjunto de dados](https://platform.claude.com/docs/pt-BR/about-claude/use-case-guides/legal-summarization#ajuste-fino-do-claude-para-aprender-com-seu-conjunto-de-dados)

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
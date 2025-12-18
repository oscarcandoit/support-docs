---
url: "https://platform.claude.com/docs/pt-BR/build-with-claude/prompt-engineering/multishot-prompting"
title: "Use exemplos (multishot prompting) para guiar o comportamento do Claude - Claude Docs"
---

[Claude Documentation Home](https://platform.claude.com/docs/pt-BR/home)

- [Guia do Desenvolvedor](https://platform.claude.com/docs/pt-BR/intro)
- [Referência da API](https://platform.claude.com/docs/pt-BR/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [Recursos](https://platform.claude.com/docs/pt-BR/resources/overview)
- [Notas de lançamento](https://platform.claude.com/docs/pt-BR/release-notes/overview)

Português (BR)

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fpt-BR%2Fbuild-with-claude%2Fprompt-engineering%2Fmultishot-prompting)

Search...

⌘K

Primeiros passos

[Introdução ao Claude](https://platform.claude.com/docs/pt-BR/intro) [Início rápido](https://platform.claude.com/docs/pt-BR/get-started)

Modelos e preços

[Visão geral dos modelos](https://platform.claude.com/docs/pt-BR/about-claude/models/overview) [Escolhendo um modelo](https://platform.claude.com/docs/pt-BR/about-claude/models/choosing-a-model) [Novidades no Claude 4.5](https://platform.claude.com/docs/pt-BR/about-claude/models/whats-new-claude-4-5) [Migrando para Claude 4.5](https://platform.claude.com/docs/pt-BR/about-claude/models/migrating-to-claude-4) [Descontinuação de modelos](https://platform.claude.com/docs/pt-BR/about-claude/model-deprecations) [Preços](https://platform.claude.com/docs/pt-BR/about-claude/pricing)

Construir com Claude

[Visão geral de recursos](https://platform.claude.com/docs/pt-BR/build-with-claude/overview) [Usando a API Messages](https://platform.claude.com/docs/pt-BR/build-with-claude/working-with-messages) [Janelas de contexto](https://platform.claude.com/docs/pt-BR/build-with-claude/context-windows) [Melhores práticas de prompting](https://platform.claude.com/docs/pt-BR/build-with-claude/prompt-engineering/claude-4-best-practices)

Capacidades

[Cache de prompt](https://platform.claude.com/docs/pt-BR/build-with-claude/prompt-caching) [Edição de contexto](https://platform.claude.com/docs/pt-BR/build-with-claude/context-editing) [Pensamento estendido](https://platform.claude.com/docs/pt-BR/build-with-claude/extended-thinking) [Esforço](https://platform.claude.com/docs/pt-BR/build-with-claude/effort) [Streaming de mensagens](https://platform.claude.com/docs/pt-BR/build-with-claude/streaming) [Processamento em lote](https://platform.claude.com/docs/pt-BR/build-with-claude/batch-processing) [Citações](https://platform.claude.com/docs/pt-BR/build-with-claude/citations) [Suporte multilíngue](https://platform.claude.com/docs/pt-BR/build-with-claude/multilingual-support) [Contagem de tokens](https://platform.claude.com/docs/pt-BR/build-with-claude/token-counting) [Embeddings](https://platform.claude.com/docs/pt-BR/build-with-claude/embeddings) [Visão](https://platform.claude.com/docs/pt-BR/build-with-claude/vision) [Suporte a PDF](https://platform.claude.com/docs/pt-BR/build-with-claude/pdf-support) [API de Arquivos](https://platform.claude.com/docs/pt-BR/build-with-claude/files) [Resultados de busca](https://platform.claude.com/docs/pt-BR/build-with-claude/search-results) [Saídas estruturadas](https://platform.claude.com/docs/pt-BR/build-with-claude/structured-outputs)

Ferramentas

[Visão geral](https://platform.claude.com/docs/pt-BR/agents-and-tools/tool-use/overview) [Como implementar o uso de ferramentas](https://platform.claude.com/docs/pt-BR/agents-and-tools/tool-use/implement-tool-use) [Streaming de ferramentas refinado](https://platform.claude.com/docs/pt-BR/agents-and-tools/tool-use/fine-grained-tool-streaming) [Ferramenta Bash](https://platform.claude.com/docs/pt-BR/agents-and-tools/tool-use/bash-tool) [Ferramenta de execução de código](https://platform.claude.com/docs/pt-BR/agents-and-tools/tool-use/code-execution-tool) [Chamada de ferramenta programática](https://platform.claude.com/docs/pt-BR/agents-and-tools/tool-use/programmatic-tool-calling) [Ferramenta de uso de computador](https://platform.claude.com/docs/pt-BR/agents-and-tools/tool-use/computer-use-tool) [Ferramenta de editor de texto](https://platform.claude.com/docs/pt-BR/agents-and-tools/tool-use/text-editor-tool) [Ferramenta de busca na web](https://platform.claude.com/docs/pt-BR/agents-and-tools/tool-use/web-fetch-tool) [Ferramenta de pesquisa na web](https://platform.claude.com/docs/pt-BR/agents-and-tools/tool-use/web-search-tool) [Ferramenta de memória](https://platform.claude.com/docs/pt-BR/agents-and-tools/tool-use/memory-tool) [Ferramenta de busca de ferramentas](https://platform.claude.com/docs/pt-BR/agents-and-tools/tool-use/tool-search-tool)

Habilidades de Agente

[Visão geral](https://platform.claude.com/docs/pt-BR/agents-and-tools/agent-skills/overview) [Início rápido](https://platform.claude.com/docs/pt-BR/agents-and-tools/agent-skills/quickstart) [Melhores práticas](https://platform.claude.com/docs/pt-BR/agents-and-tools/agent-skills/best-practices) [Usando Habilidades com a API](https://platform.claude.com/docs/pt-BR/build-with-claude/skills-guide)

SDK do Agente

[Visão geral](https://platform.claude.com/docs/pt-BR/agent-sdk/overview) [Início rápido](https://platform.claude.com/docs/pt-BR/agent-sdk/quickstart) [SDK TypeScript](https://platform.claude.com/docs/pt-BR/agent-sdk/typescript) [TypeScript V2 (prévia)](https://platform.claude.com/docs/pt-BR/agent-sdk/typescript-v2-preview) [SDK Python](https://platform.claude.com/docs/pt-BR/agent-sdk/python) [Guia de migração](https://platform.claude.com/docs/pt-BR/agent-sdk/migration-guide)

Guias

MCP na API

[Conector MCP](https://platform.claude.com/docs/pt-BR/agents-and-tools/mcp-connector) [Servidores MCP remotos](https://platform.claude.com/docs/pt-BR/agents-and-tools/remote-mcp-servers)

Claude em plataformas de terceiros

[Amazon Bedrock](https://platform.claude.com/docs/pt-BR/build-with-claude/claude-on-amazon-bedrock) [Microsoft Foundry](https://platform.claude.com/docs/pt-BR/build-with-claude/claude-in-microsoft-foundry) [Vertex AI](https://platform.claude.com/docs/pt-BR/build-with-claude/claude-on-vertex-ai)

Engenharia de prompts

[Visão geral](https://platform.claude.com/docs/pt-BR/build-with-claude/prompt-engineering/overview) [Gerador de prompts](https://platform.claude.com/docs/pt-BR/build-with-claude/prompt-engineering/prompt-generator) [Usar modelos de prompt](https://platform.claude.com/docs/pt-BR/build-with-claude/prompt-engineering/prompt-templates-and-variables) [Melhorador de prompts](https://platform.claude.com/docs/pt-BR/build-with-claude/prompt-engineering/prompt-improver) [Seja claro e direto](https://platform.claude.com/docs/pt-BR/build-with-claude/prompt-engineering/be-clear-and-direct) [Use exemplos (prompting multishotl)](https://platform.claude.com/docs/pt-BR/build-with-claude/prompt-engineering/multishot-prompting) [Deixe Claude pensar (CoT)](https://platform.claude.com/docs/pt-BR/build-with-claude/prompt-engineering/chain-of-thought) [Use tags XML](https://platform.claude.com/docs/pt-BR/build-with-claude/prompt-engineering/use-xml-tags) [Dê um papel ao Claude (prompts do sistema)](https://platform.claude.com/docs/pt-BR/build-with-claude/prompt-engineering/system-prompts) [Preencha previamente a resposta do Claude](https://platform.claude.com/docs/pt-BR/build-with-claude/prompt-engineering/prefill-claudes-response) [Encadeie prompts complexos](https://platform.claude.com/docs/pt-BR/build-with-claude/prompt-engineering/chain-prompts) [Dicas de contexto longo](https://platform.claude.com/docs/pt-BR/build-with-claude/prompt-engineering/long-context-tips) [Dicas de pensamento estendido](https://platform.claude.com/docs/pt-BR/build-with-claude/prompt-engineering/extended-thinking-tips)

Testar e avaliar

[Definir critérios de sucesso](https://platform.claude.com/docs/pt-BR/test-and-evaluate/define-success) [Desenvolver casos de teste](https://platform.claude.com/docs/pt-BR/test-and-evaluate/develop-tests) [Usando a ferramenta de avaliação](https://platform.claude.com/docs/pt-BR/test-and-evaluate/eval-tool) [Reduzindo latência](https://platform.claude.com/docs/pt-BR/test-and-evaluate/strengthen-guardrails/reduce-latency)

Fortalecer proteções

[Reduzir alucinações](https://platform.claude.com/docs/pt-BR/test-and-evaluate/strengthen-guardrails/reduce-hallucinations) [Aumentar consistência de saída](https://platform.claude.com/docs/pt-BR/test-and-evaluate/strengthen-guardrails/increase-consistency) [Mitigar ataques de jailbreak](https://platform.claude.com/docs/pt-BR/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks) [Recusas de streaming](https://platform.claude.com/docs/pt-BR/test-and-evaluate/strengthen-guardrails/handle-streaming-refusals) [Reduzir vazamento de prompt](https://platform.claude.com/docs/pt-BR/test-and-evaluate/strengthen-guardrails/reduce-prompt-leak) [Manter Claude em personagem](https://platform.claude.com/docs/pt-BR/test-and-evaluate/strengthen-guardrails/keep-claude-in-character)

Administração e monitoramento

[Visão geral da API Admin](https://platform.claude.com/docs/pt-BR/build-with-claude/administration-api) [API de uso e custo](https://platform.claude.com/docs/pt-BR/build-with-claude/usage-cost-api) [API de análise de código Claude](https://platform.claude.com/docs/pt-BR/build-with-claude/claude-code-analytics-api)

[Console](https://platform.claude.com/)

[Log in](https://platform.claude.com/login)

Engenharia de prompts

Use exemplos (prompting multishotl)

Engenharia de prompts

# Use exemplos (multishot prompting) para guiar o comportamento do Claude

Copy page

Aprenda como usar exemplos para melhorar a precisão e consistência das respostas do Claude através de técnicas de few-shot e multishot prompting.

Copy page

While these tips apply broadly to all Claude models, you can find prompting tips specific to extended thinking models [here](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/extended-thinking-tips).

Exemplos são sua arma secreta para conseguir que Claude gere exatamente o que você precisa. Ao fornecer alguns exemplos bem elaborados em seu prompt, você pode melhorar dramaticamente a precisão, consistência e qualidade das saídas do Claude.
Esta técnica, conhecida como few-shot ou multishot prompting, é particularmente eficaz para tarefas que exigem saídas estruturadas ou conformidade com formatos específicos.

**Potencialize seus prompts**: Inclua 3-5 exemplos diversos e relevantes para mostrar ao Claude exatamente o que você quer. Mais exemplos = melhor desempenho, especialmente para tarefas complexas.

## Por que usar exemplos?

- **Precisão**: Exemplos reduzem a má interpretação de instruções.
- **Consistência**: Exemplos garantem estrutura e estilo uniformes.
- **Desempenho**: Exemplos bem escolhidos aumentam a capacidade do Claude de lidar com tarefas complexas.

## Elaborando exemplos eficazes

Para máxima eficácia, certifique-se de que seus exemplos sejam:

- **Relevantes**: Seus exemplos espelham seu caso de uso real.
- **Diversos**: Seus exemplos cobrem casos extremos e desafios potenciais, e variam o suficiente para que Claude não capture inadvertidamente padrões não intencionais.
- **Claros**: Seus exemplos são envolvidos em tags `<example>` (se múltiplos, aninhados em tags `<examples>`) para estrutura.

Peça ao Claude para avaliar seus exemplos quanto à relevância, diversidade ou clareza. Ou peça ao Claude para gerar mais exemplos com base em seu conjunto inicial.

### Exemplo: Analisando feedback de clientes

* * *

[Biblioteca de prompts\\
\\
Inspire-se com uma seleção curada de prompts para várias tarefas e casos de uso.](https://platform.claude.com/docs/pt-BR/resources/prompt-library/library) [Tutorial de prompting do GitHub\\
\\
Um tutorial repleto de exemplos que cobre os conceitos de engenharia de prompts encontrados em nossa documentação.](https://github.com/anthropics/prompt-eng-interactive-tutorial) [Tutorial de prompting do Google Sheets\\
\\
Uma versão mais leve do nosso tutorial de engenharia de prompts através de uma planilha interativa.](https://docs.google.com/spreadsheets/d/19jzLgRruG9kjUQNKtCg1ZjdD6l6weA6qRXG5zLIAhC8)

- [Por que usar exemplos?](https://platform.claude.com/docs/pt-BR/build-with-claude/prompt-engineering/multishot-prompting#por-que-usar-exemplos)
- [Elaborando exemplos eficazes](https://platform.claude.com/docs/pt-BR/build-with-claude/prompt-engineering/multishot-prompting#elaborando-exemplos-eficazes)

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
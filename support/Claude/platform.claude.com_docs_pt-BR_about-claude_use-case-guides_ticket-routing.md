---
url: "https://platform.claude.com/docs/pt-BR/about-claude/use-case-guides/ticket-routing"
title: "Roteamento de tickets - Claude Docs"
---

[Claude Documentation Home](https://platform.claude.com/docs/pt-BR/home)

- [Guia do Desenvolvedor](https://platform.claude.com/docs/pt-BR/intro)
- [Referência da API](https://platform.claude.com/docs/pt-BR/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [Recursos](https://platform.claude.com/docs/pt-BR/resources/overview)
- [Notas de lançamento](https://platform.claude.com/docs/pt-BR/release-notes/overview)

Português (BR)

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fpt-BR%2Fabout-claude%2Fuse-case-guides%2Fticket-routing)

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

Roteamento de tickets

Casos de uso

# Roteamento de tickets

Copy page

Este guia explica como aproveitar as capacidades avançadas de compreensão de linguagem natural do Claude para classificar tickets de suporte ao cliente em escala com base na intenção do cliente, urgência, priorização, perfil do cliente e muito mais.

Copy page

## Definir se deve usar o Claude para roteamento de tickets

Aqui estão alguns indicadores-chave de que você deve usar um LLM como o Claude em vez de abordagens tradicionais de ML para sua tarefa de classificação:

### Você tem dados de treinamento rotulados limitados disponíveis

### Suas categorias de classificação provavelmente mudarão ou evoluirão ao longo do tempo

### Você precisa lidar com entradas de texto complexas e não estruturadas

### Suas regras de classificação são baseadas em compreensão semântica

### Você requer raciocínio interpretável para decisões de classificação

### Você quer lidar com casos extremos e tickets ambíguos de forma mais eficaz

### Você precisa de suporte multilíngue sem manter modelos separados

* * *

## Construir e implantar seu fluxo de trabalho de suporte LLM

### Compreender sua abordagem de suporte atual

Antes de mergulhar na automação, é crucial compreender seu sistema de tickets existente. Comece investigando como sua equipe de suporte atualmente lida com o roteamento de tickets.

Considere perguntas como:

- Quais critérios são usados para determinar qual SLA/oferta de serviço é aplicada?
- O roteamento de tickets é usado para determinar para qual nível de suporte ou especialista de produto um ticket vai?
- Existem regras ou fluxos de trabalho automatizados já em vigor? Em quais casos eles falham?
- Como casos extremos ou tickets ambíguos são tratados?
- Como a equipe prioriza tickets?

Quanto mais você souber sobre como humanos lidam com certos casos, melhor você será capaz de trabalhar com o Claude para fazer a tarefa.

### Definir categorias de intenção do usuário

Uma lista bem definida de categorias de intenção do usuário é crucial para classificação precisa de tickets de suporte com o Claude. A capacidade do Claude de rotear tickets efetivamente dentro do seu sistema é diretamente proporcional a quão bem definidas suas categorias do sistema são.

Aqui estão algumas categorias de intenção do usuário e subcategorias de exemplo.

### Problema técnico

### Gerenciamento de conta

### Informações do produto

### Orientação do usuário

### Feedback

### Relacionado a pedidos

### Solicitação de serviço

### Preocupações de segurança

### Conformidade e legal

### Suporte de emergência

### Treinamento e educação

### Integração e API

Além da intenção, o roteamento e priorização de tickets também podem ser influenciados por outros fatores como urgência, tipo de cliente, SLAs ou idioma. Certifique-se de considerar outros critérios de roteamento ao construir seu sistema de roteamento automatizado.

### Estabelecer critérios de sucesso

Trabalhe com sua equipe de suporte para [definir critérios de sucesso claros](https://platform.claude.com/docs/pt-BR/test-and-evaluate/define-success) com benchmarks mensuráveis, limites e objetivos.

Aqui estão alguns critérios padrão e benchmarks ao usar LLMs para roteamento de tickets de suporte:

### Consistência de classificação

### Velocidade de adaptação

### Manuseio multilíngue

### Manuseio de casos extremos

### Mitigação de viés

### Eficiência de prompt

### Pontuação de explicabilidade

Aqui estão alguns critérios de sucesso comuns que podem ser úteis independentemente de um LLM ser usado:

### Precisão de roteamento

### Tempo para atribuição

### Taxa de reroteamento

### Taxa de resolução no primeiro contato

### Tempo médio de manuseio

### Pontuações de satisfação do cliente

### Taxa de escalação

### Produtividade do agente

### Taxa de deflexão de autoatendimento

### Custo por ticket

### Escolher o modelo Claude certo

A escolha do modelo depende dos trade-offs entre custo, precisão e tempo de resposta.

Muitos clientes descobriram que o `claude-3-5-haiku-20241022` é um modelo ideal para roteamento de tickets, pois é o modelo mais rápido e mais econômico na família Claude 3 enquanto ainda entrega resultados excelentes. Se seu problema de classificação requer expertise profunda em assunto ou um grande volume de categorias de intenção com raciocínio complexo, você pode optar pelo [modelo Sonnet maior](https://platform.claude.com/docs/pt-BR/about-claude/models).

### Construir um prompt forte

Roteamento de tickets é um tipo de tarefa de classificação. O Claude analisa o conteúdo de um ticket de suporte e o classifica em categorias predefinidas baseadas no tipo de problema, urgência, expertise necessária ou outros fatores relevantes.

Vamos escrever um prompt de classificação de tickets. Nosso prompt inicial deve conter o conteúdo da solicitação do usuário e retornar tanto o raciocínio quanto a intenção.

Experimente o [gerador de prompts](https://platform.claude.com/docs/pt-BR/prompt-generator) no [Console Claude](https://platform.claude.com/login) para ter o Claude escrevendo um primeiro rascunho para você.

Aqui está um exemplo de prompt de classificação de roteamento de tickets:

```
def classify_support_request(ticket_contents):
    # Define the prompt for the classification task
    classification_prompt = f"""Você estará atuando como um sistema de classificação de tickets de suporte ao cliente. Sua tarefa é analisar solicitações de suporte ao cliente e produzir a classificação de intenção apropriada para cada solicitação, junto com seu raciocínio.

        Aqui está a solicitação de suporte ao cliente que você precisa classificar:

        <request>{ticket_contents}</request>

        Por favor, analise cuidadosamente a solicitação acima para determinar a intenção central e necessidades do cliente. Considere o que o cliente está pedindo ou tem preocupações sobre.

        Primeiro, escreva seu raciocínio e análise de como classificar esta solicitação dentro de tags <reasoning>.

        Então, produza o rótulo de classificação apropriado para a solicitação dentro de uma tag <intent>. As intenções válidas são:
        <intents>
        <intent>Suporte, Feedback, Reclamação</intent>
        <intent>Rastreamento de Pedido</intent>
        <intent>Reembolso/Troca</intent>
        </intents>

        Uma solicitação pode ter APENAS UMA intenção aplicável. Inclua apenas a intenção que é mais aplicável à solicitação.

        Como exemplo, considere a seguinte solicitação:
        <request>Olá! Eu tive internet de fibra de alta velocidade instalada no sábado e meu instalador, Kevin, foi absolutamente fantástico! Onde posso enviar minha avaliação positiva? Obrigado pela sua ajuda!</request>

        Aqui está um exemplo de como sua saída deve ser formatada (para a solicitação de exemplo acima):
        <reasoning>O usuário busca informações para deixar feedback positivo.</reasoning>
        <intent>Suporte, Feedback, Reclamação</intent>

        Aqui estão mais alguns exemplos:
        <examples>
        <example 2>
        Entrada do Exemplo 2:
        <request>Eu queria escrever e pessoalmente agradecer pela compaixão que vocês mostraram à minha família durante o funeral do meu pai neste último fim de semana. Sua equipe foi tão atenciosa e prestativa durante todo esse processo; realmente tirou um peso dos nossos ombros. Os folhetos de velório estavam lindos. Nunca esqueceremos a gentileza que vocês nos mostraram e somos muito gratos por quão suavemente os procedimentos correram. Obrigado, novamente, Amarantha Hill em nome da Família Hill.</request>

        Saída do Exemplo 2:
        <reasoning>Usuário deixa uma avaliação positiva de sua experiência.</reasoning>
        <intent>Suporte, Feedback, Reclamação</intent>
        </example 2>
        <example 3>

        ...

        </example 8>
        <example 9>
        Entrada do Exemplo 9:
        <request>Seu site continua enviando pop-ups de anúncios que bloqueiam a tela inteira. Levei vinte minutos apenas para finalmente encontrar o número de telefone para ligar e reclamar. Como posso possivelmente acessar as informações da minha conta com todos esses pop-ups? Vocês podem acessar minha conta para mim, já que seu site está quebrado? Preciso saber qual é o endereço em arquivo.</request>

        Saída do Exemplo 9:
        <reasoning>O usuário solicita ajuda para acessar as informações de sua conta web.</reasoning>
        <intent>Suporte, Feedback, Reclamação</intent>
        </example 9>

        Lembre-se de sempre incluir seu raciocínio de classificação antes de sua saída de intenção real. O raciocínio deve estar encerrado em tags <reasoning> e a intenção em tags <intent>. Retorne apenas o raciocínio e a intenção.
        """
```

Vamos quebrar os componentes-chave deste prompt:

- Usamos f-strings do Python para criar o template do prompt, permitindo que o `ticket_contents` seja inserido nas tags `<request>`.
- Damos ao Claude um papel claramente definido como um sistema de classificação que analisa cuidadosamente o conteúdo do ticket para determinar a intenção central e necessidades do cliente.
- Instruímos o Claude sobre formatação de saída adequada, neste caso para fornecer seu raciocínio e análise dentro de tags `<reasoning>`, seguido pelo rótulo de classificação apropriado dentro de tags `<intent>`.
- Especificamos as categorias de intenção válidas: "Suporte, Feedback, Reclamação", "Rastreamento de Pedido" e "Reembolso/Troca".
- Incluímos alguns exemplos (também conhecido como prompting few-shot) para ilustrar como a saída deve ser formatada, o que melhora a precisão e consistência.

A razão pela qual queremos que o Claude divida sua resposta em várias seções de tags XML é para que possamos usar expressões regulares para extrair separadamente o raciocínio e intenção da saída. Isso nos permite criar próximos passos direcionados no fluxo de trabalho de roteamento de tickets, como usar apenas a intenção para decidir para qual pessoa rotear o ticket.

### Implantar seu prompt

É difícil saber quão bem seu prompt funciona sem implantá-lo em um ambiente de produção de teste e [executar avaliações](https://platform.claude.com/docs/pt-BR/test-and-evaluate/develop-tests).

Vamos construir a estrutura de implantação. Comece definindo a assinatura do método para envolver nossa chamada ao Claude. Pegaremos o método que já começamos a escrever, que tem `ticket_contents` como entrada, e agora retornará uma tupla de `reasoning` e `intent` como saída. Se você tem uma automação existente usando ML tradicional, você vai querer seguir essa assinatura de método em vez disso.

```
import anthropic
import re

# Create an instance of the Claude API client
client = anthropic.Anthropic()

# Set the default model
DEFAULT_MODEL="claude-3-5-haiku-20241022"

def classify_support_request(ticket_contents):
    # Define the prompt for the classification task
    classification_prompt = f"""Você estará atuando como um sistema de classificação de tickets de suporte ao cliente.
        ...
        ... O raciocínio deve estar encerrado em tags <reasoning> e a intenção em tags <intent>. Retorne apenas o raciocínio e a intenção.
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

Este código:

- Importa a biblioteca Anthropic e cria uma instância de cliente usando sua chave API.
- Define uma função `classify_support_request` que recebe uma string `ticket_contents`.
- Envia o `ticket_contents` para o Claude para classificação usando o `classification_prompt`
- Retorna o `reasoning` e `intent` do modelo extraídos da resposta.

Como precisamos esperar que todo o texto de raciocínio e intenção seja gerado antes de analisar, definimos `stream=False` (o padrão).

* * *

## Avaliar seu prompt

Prompting frequentemente requer testes e otimização para estar pronto para produção. Para determinar a prontidão de sua solução, avalie o desempenho baseado nos critérios de sucesso e limites que você estabeleceu anteriormente.

Para executar sua avaliação, você precisará de casos de teste para executá-la. O resto deste guia assume que você já [desenvolveu seus casos de teste](https://platform.claude.com/docs/pt-BR/test-and-evaluate/develop-tests).

### Construir uma função de avaliação

Nossa avaliação de exemplo para este guia mede o desempenho do Claude ao longo de três métricas-chave:

- Precisão
- Custo por classificação

Você pode precisar avaliar o Claude em outros eixos dependendo de quais fatores são importantes para você.

Para avaliar isso, primeiro temos que modificar o script que escrevemos e adicionar uma função para comparar a intenção prevista com a intenção real e calcular a porcentagem de previsões corretas. Também temos que adicionar funcionalidade de cálculo de custo e medição de tempo.

```
import anthropic
import re

# Create an instance of the Claude API client
client = anthropic.Anthropic()

# Set the default model
DEFAULT_MODEL="claude-3-5-haiku-20241022"

def classify_support_request(request, actual_intent):
    # Define the prompt for the classification task
    classification_prompt = f"""Você estará atuando como um sistema de classificação de tickets de suporte ao cliente.
        ...
        ...O raciocínio deve estar encerrado em tags <reasoning> e a intenção em tags <intent>. Retorne apenas o raciocínio e a intenção.
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

Vamos quebrar as edições que fizemos:

- Adicionamos o `actual_intent` de nossos casos de teste no método `classify_support_request` e configuramos uma comparação para avaliar se a classificação de intenção do Claude corresponde à nossa classificação de intenção dourada.
- Extraímos estatísticas de uso para a chamada da API para calcular o custo baseado em tokens de entrada e saída usados

### Executar sua avaliação

Uma avaliação adequada requer limites e benchmarks claros para determinar o que é um bom resultado. O script acima nos dará os valores de tempo de execução para precisão, tempo de resposta e custo por classificação, mas ainda precisaríamos de limites claramente estabelecidos. Por exemplo:

- **Precisão:** 95% (de 100 testes)
- **Custo por classificação:** 50% de redução em média (através de 100 testes) do método de roteamento atual

Ter esses limites permite que você diga rapidamente e facilmente em escala, e com empirismo imparcial, qual método é melhor para você e quais mudanças podem precisar ser feitas para melhor se adequar aos seus requisitos.

* * *

## Melhorar o desempenho

Em cenários complexos, pode ser útil considerar estratégias adicionais para melhorar o desempenho além das [técnicas padrão de engenharia de prompt](https://platform.claude.com/docs/pt-BR/build-with-claude/prompt-engineering/overview) e [estratégias de implementação de guardrails](https://platform.claude.com/docs/pt-BR/test-and-evaluate/strengthen-guardrails/reduce-hallucinations). Aqui estão alguns cenários comuns:

### Usar uma hierarquia taxonômica para casos com 20+ categorias de intenção

Conforme o número de classes cresce, o número de exemplos necessários também se expande, potencialmente tornando o prompt pesado. Como alternativa, você pode considerar implementar um sistema de classificação hierárquica usando uma mistura de classificadores.

1. Organize suas intenções em uma estrutura de árvore taxonômica.
2. Crie uma série de classificadores em cada nível da árvore, permitindo uma abordagem de roteamento em cascata.

Por exemplo, você pode ter um classificador de nível superior que categoriza amplamente tickets em "Problemas Técnicos", "Perguntas de Cobrança" e "Consultas Gerais". Cada uma dessas categorias pode então ter seu próprio sub-classificador para refinar ainda mais a classificação.

![](https://platform.claude.com/docs/images/ticket-hierarchy.png)

- **Prós - maior nuance e precisão:** Você pode criar prompts diferentes para cada caminho pai, permitindo classificação mais direcionada e específica ao contexto. Isso pode levar a precisão melhorada e manuseio mais nuançado de solicitações de clientes.

- **Contras - latência aumentada:** Esteja ciente de que múltiplos classificadores podem levar a latência aumentada, e recomendamos implementar essa abordagem com nosso modelo mais rápido, Haiku.


### Usar bancos de dados vetoriais e recuperação de busca por similaridade para lidar com tickets altamente variáveis

Apesar de fornecer exemplos ser a maneira mais eficaz de melhorar o desempenho, se solicitações de suporte são altamente variáveis, pode ser difícil incluir exemplos suficientes em um único prompt.

Neste cenário, você poderia empregar um banco de dados vetorial para fazer buscas de similaridade de um conjunto de dados de exemplos e recuperar os exemplos mais relevantes para uma consulta dada.

Esta abordagem, delineada em detalhes em nossa [receita de classificação](https://github.com/anthropics/anthropic-cookbook/blob/82675c124e1344639b2a875aa9d3ae854709cd83/skills/classification/guide.ipynb), foi mostrada para melhorar o desempenho de 71% de precisão para 93% de precisão.

### Considerar especificamente casos extremos esperados

Aqui estão alguns cenários onde o Claude pode classificar incorretamente tickets (pode haver outros que são únicos à sua situação). Nestes cenários, considere fornecer instruções explícitas ou exemplos no prompt de como o Claude deve lidar com o caso extremo:

### Clientes fazem solicitações implícitas

### Claude prioriza emoção sobre intenção

### Múltiplos problemas causam confusão de priorização de problemas

* * *

## Integrar o Claude em seu fluxo de trabalho de suporte maior

Integração adequada requer que você tome algumas decisões sobre como seu script de roteamento de tickets baseado no Claude se encaixa na arquitetura do seu sistema maior de roteamento de tickets. Há duas maneiras de fazer isso:

- **Baseado em push:**O sistema de tickets de suporte que você está usando (ex: Zendesk) aciona seu código enviando um evento webhook para seu serviço de roteamento, que então classifica a intenção e a roteia.
  - Esta abordagem é mais escalável na web, mas precisa que você exponha um endpoint público.
- **Baseado em pull:**Seu código puxa pelos tickets mais recentes baseado em um cronograma dado e os roteia no momento do pull.
  - Esta abordagem é mais fácil de implementar mas pode fazer chamadas desnecessárias ao sistema de tickets de suporte quando a frequência de pull é muito alta ou pode ser excessivamente lenta quando a frequência de pull é muito baixa.

Para qualquer uma dessas abordagens, você precisará envolver seu script em um serviço. A escolha da abordagem depende de quais APIs seu sistema de tickets de suporte fornece.

* * *

[Cookbook de classificação\\
\\
Visite nosso cookbook de classificação para mais código de exemplo e orientação detalhada de avaliação.](https://github.com/anthropics/anthropic-cookbook/tree/main/capabilities/classification) [Console Claude\\
\\
Comece a construir e avaliar seu fluxo de trabalho no Console Claude.](https://platform.claude.com/dashboard)

- [Definir se deve usar o Claude para roteamento de tickets](https://platform.claude.com/docs/pt-BR/about-claude/use-case-guides/ticket-routing#definir-se-deve-usar-o-claude-para-roteamento-de-tickets)
- [Construir e implantar seu fluxo de trabalho de suporte LLM](https://platform.claude.com/docs/pt-BR/about-claude/use-case-guides/ticket-routing#construir-e-implantar-seu-fluxo-de-trabalho-de-suporte-llm)
- [Compreender sua abordagem de suporte atual](https://platform.claude.com/docs/pt-BR/about-claude/use-case-guides/ticket-routing#compreender-sua-abordagem-de-suporte-atual)
- [Definir categorias de intenção do usuário](https://platform.claude.com/docs/pt-BR/about-claude/use-case-guides/ticket-routing#definir-categorias-de-intencao-do-usuario)
- [Estabelecer critérios de sucesso](https://platform.claude.com/docs/pt-BR/about-claude/use-case-guides/ticket-routing#estabelecer-criterios-de-sucesso)
- [Escolher o modelo Claude certo](https://platform.claude.com/docs/pt-BR/about-claude/use-case-guides/ticket-routing#escolher-o-modelo-claude-certo)
- [Construir um prompt forte](https://platform.claude.com/docs/pt-BR/about-claude/use-case-guides/ticket-routing#construir-um-prompt-forte)
- [Implantar seu prompt](https://platform.claude.com/docs/pt-BR/about-claude/use-case-guides/ticket-routing#implantar-seu-prompt)
- [Avaliar seu prompt](https://platform.claude.com/docs/pt-BR/about-claude/use-case-guides/ticket-routing#avaliar-seu-prompt)
- [Construir uma função de avaliação](https://platform.claude.com/docs/pt-BR/about-claude/use-case-guides/ticket-routing#construir-uma-funcao-de-avaliacao)
- [Executar sua avaliação](https://platform.claude.com/docs/pt-BR/about-claude/use-case-guides/ticket-routing#executar-sua-avaliacao)
- [Melhorar o desempenho](https://platform.claude.com/docs/pt-BR/about-claude/use-case-guides/ticket-routing#melhorar-o-desempenho)
- [Usar uma hierarquia taxonômica para casos com 20+ categorias de intenção](https://platform.claude.com/docs/pt-BR/about-claude/use-case-guides/ticket-routing#usar-uma-hierarquia-taxonomica-para-casos-com-20-categorias-de-intencao)
- [Usar bancos de dados vetoriais e recuperação de busca por similaridade para lidar com tickets altamente variáveis](https://platform.claude.com/docs/pt-BR/about-claude/use-case-guides/ticket-routing#usar-bancos-de-dados-vetoriais-e-recuperacao-de-busca-por-similaridade-para-lidar-com-tickets-altamente-variaveis)
- [Considerar especificamente casos extremos esperados](https://platform.claude.com/docs/pt-BR/about-claude/use-case-guides/ticket-routing#considerar-especificamente-casos-extremos-esperados)
- [Integrar o Claude em seu fluxo de trabalho de suporte maior](https://platform.claude.com/docs/pt-BR/about-claude/use-case-guides/ticket-routing#integrar-o-claude-em-seu-fluxo-de-trabalho-de-suporte-maior)

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
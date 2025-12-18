---
url: "https://platform.claude.com/docs/pt-BR/about-claude/use-case-guides/customer-support-chat"
title: "Agente de suporte ao cliente - Claude Docs"
---

[Claude Documentation Home](https://platform.claude.com/docs/pt-BR/home)

- [Guia do Desenvolvedor](https://platform.claude.com/docs/pt-BR/intro)
- [Referência da API](https://platform.claude.com/docs/pt-BR/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [Recursos](https://platform.claude.com/docs/pt-BR/resources/overview)
- [Notas de lançamento](https://platform.claude.com/docs/pt-BR/release-notes/overview)

Português (BR)

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fpt-BR%2Fabout-claude%2Fuse-case-guides%2Fcustomer-support-chat)

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

Agente de suporte ao cliente

Casos de uso

# Agente de suporte ao cliente

Copy page

Este guia mostra como aproveitar os recursos avançados de conversação do Claude para lidar com consultas de clientes em tempo real, fornecendo suporte 24/7, reduzindo tempos de espera e gerenciando altos volumes de suporte com respostas precisas e interações positivas.

Copy page

## Antes de construir com Claude

### Decida se deve usar Claude para chat de suporte

Aqui estão alguns indicadores-chave de que você deve usar um LLM como Claude para automatizar partes do seu processo de suporte ao cliente:

### Alto volume de consultas repetitivas

### Necessidade de síntese rápida de informações

### Requisito de disponibilidade 24/7

### Escalabilidade rápida durante períodos de pico

### Voz de marca consistente

Algumas considerações para escolher Claude em relação a outros LLMs:

- Você prioriza conversas naturais e nuançadas: A compreensão sofisticada de linguagem do Claude permite conversas mais naturais e conscientes do contexto que parecem mais humanas do que chats com outros LLMs.
- Você frequentemente recebe consultas complexas e abertas: Claude pode lidar com uma ampla gama de tópicos e consultas sem gerar respostas pré-fabricadas ou exigir programação extensiva de permutações de enunciados de usuários.
- Você precisa de suporte multilíngue escalável: Os recursos multilíngues do Claude permitem que ele se envolva em conversas em mais de 200 idiomas sem a necessidade de chatbots separados ou processos de tradução extensivos para cada idioma suportado.

### Defina sua interação de chat ideal

Descreva uma interação ideal do cliente para definir como e quando você espera que o cliente interaja com Claude. Este esboço ajudará a determinar os requisitos técnicos da sua solução.

Aqui está um exemplo de interação de chat para suporte ao cliente de seguros de automóvel:

- **Cliente**: Inicia experiência de chat de suporte

  - **Claude**: Cumprimenta o cliente calurosamente e inicia a conversa
- **Cliente**: Pergunta sobre seguro para seu novo carro elétrico

  - **Claude**: Fornece informações relevantes sobre cobertura de veículos elétricos
- **Cliente**: Faz perguntas relacionadas a necessidades únicas para seguros de veículos elétricos

  - **Claude**: Responde com respostas precisas e informativas e fornece links para as fontes
- **Cliente**: Faz perguntas fora do tópico não relacionadas a seguros ou carros

  - **Claude**: Esclarece que não discute tópicos não relacionados e redireciona o usuário de volta para seguros de automóvel
- **Cliente**: Expressa interesse em uma cotação de seguro

  - **Claude**: Faz um conjunto de perguntas para determinar a cotação apropriada, adaptando-se às suas respostas
  - **Claude**: Envia uma solicitação para usar a ferramenta de API de geração de cotação junto com as informações necessárias coletadas do usuário
  - **Claude**: Recebe as informações de resposta da ferramenta de uso de API, sintetiza as informações em uma resposta natural e apresenta a cotação fornecida ao usuário
- **Cliente**: Faz perguntas de acompanhamento

  - **Claude**: Responde perguntas de acompanhamento conforme necessário
  - **Claude**: Guia o cliente para as próximas etapas no processo de seguro e encerra a conversa

No exemplo real que você escrever para seu próprio caso de uso, você pode achar útil escrever as palavras reais nesta interação para que você também possa ter uma noção do tom ideal, comprimento de resposta e nível de detalhe que você deseja que Claude tenha.

### Divida a interação em tarefas únicas

O chat de suporte ao cliente é uma coleção de múltiplas tarefas diferentes, desde resposta a perguntas até recuperação de informações até ação em solicitações, tudo envolvido em uma única interação com o cliente. Antes de começar a construir, divida sua interação ideal do cliente em cada tarefa que você deseja que Claude seja capaz de executar. Isso garante que você possa solicitar e avaliar Claude para cada tarefa e oferece uma boa noção do intervalo de interações que você precisa considerar ao escrever casos de teste.

Os clientes às vezes acham útil visualizar isso como um fluxograma de interação de possíveis pontos de inflexão de conversa dependendo das solicitações do usuário.

Aqui estão as tarefas principais associadas ao exemplo de interação de seguros acima:

1. Saudação e orientação geral
   - Cumprimente o cliente calurosamente e inicie a conversa
   - Forneça informações gerais sobre a empresa e interação
2. Informações do Produto
   - Forneça informações sobre cobertura de veículos elétricos











     Isso exigirá que Claude tenha as informações necessárias em seu contexto e pode implicar que uma [integração RAG](https://github.com/anthropics/anthropic-cookbook/blob/main/skills/retrieval_augmented_generation/guide.ipynb) seja necessária.

   - Responda perguntas relacionadas a necessidades únicas de seguros de veículos elétricos
   - Responda perguntas de acompanhamento sobre a cotação ou detalhes do seguro
   - Ofereça links para fontes quando apropriado
3. Gerenciamento de Conversa
   - Mantenha o tópico (seguro de automóvel)
   - Redirecione perguntas fora do tópico de volta para assuntos relevantes
4. Geração de Cotação
   - Faça perguntas apropriadas para determinar elegibilidade de cotação
   - Adapte perguntas com base nas respostas do cliente
   - Envie informações coletadas para API de geração de cotação
   - Apresente a cotação fornecida ao cliente

### Estabeleça critérios de sucesso

Trabalhe com sua equipe de suporte para [definir critérios de sucesso claros](https://platform.claude.com/docs/pt-BR/test-and-evaluate/define-success) e escrever [avaliações detalhadas](https://platform.claude.com/docs/pt-BR/test-and-evaluate/develop-tests) com benchmarks e objetivos mensuráveis.

Aqui estão critérios e benchmarks que podem ser usados para avaliar o quão bem Claude executa as tarefas definidas:

### Precisão da compreensão de consultas

### Relevância da resposta

### Precisão da resposta

### Relevância da provisão de citações

### Aderência ao tópico

### Efetividade da geração de conteúdo

### Eficiência de escalação

Aqui estão critérios e benchmarks que podem ser usados para avaliar o impacto comercial do emprego de Claude para suporte:

### Manutenção do sentimento

### Taxa de deflexão

### Pontuação de satisfação do cliente

### Tempo médio de tratamento

## Como implementar Claude como agente de atendimento ao cliente

### Escolha o modelo Claude certo

A escolha do modelo depende dos compromissos entre custo, precisão e tempo de resposta.

Para chat de suporte ao cliente, Claude Sonnet 4.5 é bem adequado para equilibrar inteligência, latência e custo. No entanto, para instâncias onde você tem fluxo de conversa com múltiplos prompts incluindo RAG, uso de ferramentas e/ou prompts de contexto longo, Claude Haiku 4.5 pode ser mais adequado para otimizar a latência.

### Construa um prompt forte

Usar Claude para suporte ao cliente requer que Claude tenha direção e contexto suficientes para responder apropriadamente, enquanto tem flexibilidade suficiente para lidar com uma ampla gama de consultas de clientes.

Vamos começar escrevendo os elementos de um prompt forte, começando com um prompt de sistema:

```
IDENTITY = """You are Eva, a friendly and knowledgeable AI assistant for Acme Insurance
Company. Your role is to warmly welcome customers and provide information on
Acme's insurance offerings, which include car insurance and electric car
insurance. You can also help customers get quotes for their insurance needs."""
```

Embora você possa ser tentado a colocar todas as suas informações dentro de um prompt de sistema como uma forma de separar instruções da conversa do usuário, Claude na verdade funciona melhor com a maior parte do conteúdo do seu prompt escrito dentro do primeiro turno `User` (com a única exceção sendo prompt de função). Leia mais em [Dando a Claude um papel com um prompt de sistema](https://platform.claude.com/docs/pt-BR/build-with-claude/prompt-engineering/system-prompts).

É melhor dividir prompts complexos em subseções e escrever uma parte por vez. Para cada tarefa, você pode encontrar maior sucesso seguindo um processo passo a passo para definir as partes do prompt que Claude precisaria para fazer a tarefa bem. Para este exemplo de suporte ao cliente de seguros de automóvel, estaremos escrevendo em partes todas as partes de um prompt começando com a tarefa "Saudação e orientação geral". Isso também facilita a depuração do seu prompt, pois você pode ajustar mais rapidamente partes individuais do prompt geral.

Colocaremos todos esses pedaços em um arquivo chamado `config.py`.

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

Faremos o mesmo para nossas informações de seguro de automóvel e seguro de carro elétrico.

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

Agora que temos nosso conteúdo estático, vamos adicionar pelo menos 4-5 interações de exemplo "boas" para guiar as respostas do Claude. Esses exemplos devem ser representativos de sua interação ideal do cliente e podem incluir guardrails, chamadas de ferramentas, etc.

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

Você também desejará incluir quaisquer instruções importantes descrevendo Faça e Não Faça sobre como Claude deve interagir com o cliente.
Isso pode ser extraído de guardrails de marca ou políticas de suporte.

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

Agora vamos combinar todas essas seções em uma única string para usar como nosso prompt.

```
TASK_SPECIFIC_INSTRUCTIONS = ' '.join([\
   STATIC_GREETINGS_AND_GENERAL,\
   STATIC_CAR_INSURANCE,\
   STATIC_ELECTRIC_CAR_INSURANCE,\
   EXAMPLES,\
   ADDITIONAL_GUARDRAILS,\
])
```

### Adicione recursos dinâmicos e agênticos com uso de ferramentas

Claude é capaz de tomar ações e recuperar informações dinamicamente usando a funcionalidade de uso de ferramentas do lado do cliente. Comece listando quaisquer ferramentas externas ou APIs que o prompt deve utilizar.

Para este exemplo, começaremos com uma ferramenta para calcular a cotação.

Como um lembrete, esta ferramenta não executará o cálculo real, apenas sinalizará para o aplicativo que uma ferramenta deve ser usada com quaisquer argumentos especificados.

Exemplo de calculadora de cotação de seguro:

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

### Implante seus prompts

É difícil saber o quão bem seu prompt funciona sem implantá-lo em um ambiente de teste de produção e [executar avaliações](https://platform.claude.com/docs/pt-BR/test-and-evaluate/develop-tests), então vamos construir um pequeno aplicativo usando nosso prompt, o SDK Anthropic e streamlit para uma interface de usuário.

Em um arquivo chamado `chatbot.py`, comece configurando a classe ChatBot, que encapsulará as interações com o SDK Anthropic.

A classe deve ter dois métodos principais: `generate_message` e `process_user_input`.

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

### Construa sua interface de usuário

Teste a implantação deste código com Streamlit usando um método principal. Esta função `main()` configura uma interface de chat baseada em Streamlit.

Faremos isso em um arquivo chamado `app.py`

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

Execute o programa com:

```
streamlit run app.py
```

### Avalie seus prompts

O prompt geralmente requer testes e otimização para estar pronto para produção. Para determinar a prontidão de sua solução, avalie o desempenho do chatbot usando um processo sistemático combinando métodos quantitativos e qualitativos. Criar uma [avaliação empírica forte](https://platform.claude.com/docs/pt-BR/test-and-evaluate/develop-tests#building-evals-and-test-cases) baseada em seus critérios de sucesso definidos permitirá que você otimize seus prompts.

O [Console Claude](https://platform.claude.com/dashboard) agora apresenta uma ferramenta de Avaliação que permite testar seus prompts em vários cenários.

### Melhore o desempenho

Em cenários complexos, pode ser útil considerar estratégias adicionais para melhorar o desempenho além das [técnicas padrão de engenharia de prompt](https://platform.claude.com/docs/pt-BR/build-with-claude/prompt-engineering/overview) & [estratégias de implementação de guardrails](https://platform.claude.com/docs/pt-BR/test-and-evaluate/strengthen-guardrails/reduce-hallucinations). Aqui estão alguns cenários comuns:

#### Reduza a latência de contexto longo com RAG

Ao lidar com grandes quantidades de contexto estático e dinâmico, incluir todas as informações no prompt pode levar a custos altos, tempos de resposta mais lentos e atingir limites de janela de contexto. Neste cenário, implementar técnicas de Retrieval Augmented Generation (RAG) pode melhorar significativamente o desempenho e a eficiência.

Ao usar [modelos de embedding como Voyage](https://platform.claude.com/docs/pt-BR/build-with-claude/embeddings) para converter informações em representações vetoriais, você pode criar um sistema mais escalável e responsivo. Esta abordagem permite a recuperação dinâmica de informações relevantes com base na consulta atual, em vez de incluir todo o contexto possível em cada prompt.

Implementar RAG para casos de uso de suporte [receita RAG](https://github.com/anthropics/anthropic-cookbook/blob/82675c124e1344639b2a875aa9d3ae854709cd83/skills/classification/guide.ipynb) demonstrou aumentar a precisão, reduzir tempos de resposta e reduzir custos de API em sistemas com requisitos de contexto extensivos.

#### Integre dados em tempo real com uso de ferramentas

Ao lidar com consultas que exigem informações em tempo real, como saldos de conta ou detalhes de política, abordagens RAG baseadas em embedding não são suficientes. Em vez disso, você pode aproveitar o uso de ferramentas para melhorar significativamente a capacidade do seu chatbot de fornecer respostas precisas e em tempo real. Por exemplo, você pode usar o uso de ferramentas para procurar informações do cliente, recuperar detalhes do pedido e cancelar pedidos em nome do cliente.

Esta abordagem, [descrita em nossa receita de uso de ferramentas: agente de atendimento ao cliente](https://github.com/anthropics/anthropic-cookbook/blob/main/tool_use/customer_service_agent.ipynb), permite que você integre perfeitamente dados ao vivo nas respostas do Claude e forneça uma experiência de cliente mais personalizada e eficiente.

#### Fortaleça guardrails de entrada e saída

Ao implantar um chatbot, especialmente em cenários de atendimento ao cliente, é crucial prevenir riscos associados ao uso indevido, consultas fora do escopo e respostas inadequadas. Embora Claude seja inerentemente resiliente a tais cenários, aqui estão etapas adicionais para fortalecer os guardrails do seu chatbot:

- [Reduza alucinação](https://platform.claude.com/docs/pt-BR/test-and-evaluate/strengthen-guardrails/reduce-hallucinations): Implemente mecanismos de verificação de fatos e [citações](https://github.com/anthropics/anthropic-cookbook/blob/main/misc/using_citations.ipynb) para fundamentar respostas em informações fornecidas.
- Verificação cruzada de informações: Verifique se as respostas do agente estão alinhadas com as políticas da sua empresa e fatos conhecidos.
- Evite compromissos contratuais: Garanta que o agente não faça promessas ou entre em acordos que não está autorizado a fazer.
- [Mitigue jailbreaks](https://platform.claude.com/docs/pt-BR/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks): Use métodos como telas de inofensividade e validação de entrada para evitar que usuários explorem vulnerabilidades do modelo, visando gerar conteúdo inadequado.
- Evite mencionar concorrentes: Implemente um filtro de menção de concorrente para manter o foco da marca e não mencionar produtos ou serviços de nenhum concorrente.
- [Mantenha Claude em personagem](https://platform.claude.com/docs/pt-BR/test-and-evaluate/strengthen-guardrails/keep-claude-in-character): Evite que Claude mude seu estilo de contexto, mesmo durante interações longas e complexas.
- Remova Informações de Identificação Pessoal (PII): A menos que explicitamente necessário e autorizado, remova qualquer PII das respostas.

#### Reduza o tempo de resposta percebido com streaming

Ao lidar com respostas potencialmente longas, implementar streaming pode melhorar significativamente o engajamento e a satisfação do usuário. Neste cenário, os usuários recebem a resposta progressivamente em vez de esperar que toda a resposta seja gerada.

Aqui está como implementar streaming:

1. Use a [API de Streaming Anthropic](https://platform.claude.com/docs/pt-BR/build-with-claude/streaming) para suportar respostas de streaming.
2. Configure seu frontend para lidar com chunks de texto recebidos.
3. Exiba cada chunk conforme chega, simulando digitação em tempo real.
4. Implemente um mecanismo para salvar a resposta completa, permitindo que os usuários a visualizem se navegarem para longe e retornarem.

Em alguns casos, o streaming permite o uso de modelos mais avançados com latências de base mais altas, pois a exibição progressiva mitiga o impacto de tempos de processamento mais longos.

#### Escale seu Chatbot

À medida que a complexidade do seu Chatbot cresce, sua arquitetura de aplicativo pode evoluir para corresponder. Antes de adicionar mais camadas à sua arquitetura, considere as seguintes opções menos exaustivas:

- Certifique-se de que está aproveitando ao máximo seus prompts e otimizando através de engenharia de prompt. Use nossos [guias de engenharia de prompt](https://platform.claude.com/docs/pt-BR/build-with-claude/prompt-engineering/overview) para escrever os prompts mais eficazes.
- Adicione [ferramentas](https://platform.claude.com/docs/pt-BR/build-with-claude/tool-use) adicionais ao prompt (que podem incluir [cadeias de prompt](https://platform.claude.com/docs/pt-BR/build-with-claude/prompt-engineering/chain-prompts)) e veja se você pode alcançar a funcionalidade necessária.

Se seu Chatbot lidar com tarefas incrivelmente variadas, você pode querer considerar adicionar um [classificador de intenção separado](https://github.com/anthropics/anthropic-cookbook/blob/main/skills/classification/guide.ipynb) para rotear a consulta inicial do cliente. Para o aplicativo existente, isso envolveria criar uma árvore de decisão que rotearia consultas de clientes através do classificador e depois para conversas especializadas (com seu próprio conjunto de ferramentas e prompts de sistema). Observe que este método requer uma chamada adicional ao Claude que pode aumentar a latência.

### Integre Claude em seu fluxo de trabalho de suporte

Embora nossos exemplos tenham se concentrado em funções Python chamáveis em um ambiente Streamlit, implantar Claude para chatbot de suporte em tempo real requer um serviço de API.

Aqui está como você pode abordar isso:

1. Crie um wrapper de API: Desenvolva um wrapper de API simples em torno de sua função de classificação. Por exemplo, você pode usar Flask API ou Fast API para envolver seu código em um Serviço HTTP. Seu serviço HTTP pode aceitar a entrada do usuário e retornar a resposta do Assistente em sua totalidade. Assim, seu serviço pode ter as seguintes características:
   - Server-Sent Events (SSE): SSE permite streaming em tempo real de respostas do servidor para o cliente. Isso é crucial para fornecer uma experiência suave e interativa ao trabalhar com LLMs.
   - Caching: Implementar caching pode melhorar significativamente os tempos de resposta e reduzir chamadas de API desnecessárias.
   - Retenção de contexto: Manter o contexto quando um usuário navega para longe e retorna é importante para continuidade nas conversas.
2. Construa uma interface web: Implemente uma interface de usuário web amigável para interagir com o agente alimentado por Claude.


[Retrieval Augmented Generation (RAG) cookbook\\
\\
Visite nossa receita de cookbook RAG para mais código de exemplo e orientação detalhada.](https://github.com/anthropics/anthropic-cookbook/blob/main/skills/retrieval_augmented_generation/guide.ipynb) [Citations cookbook\\
\\
Explore nossa receita de cookbook Citations para como garantir precisão e explicabilidade das informações.](https://github.com/anthropics/anthropic-cookbook/blob/main/misc/using_citations.ipynb)

- [Antes de construir com Claude](https://platform.claude.com/docs/pt-BR/about-claude/use-case-guides/customer-support-chat#antes-de-construir-com-claude)
- [Decida se deve usar Claude para chat de suporte](https://platform.claude.com/docs/pt-BR/about-claude/use-case-guides/customer-support-chat#decida-se-deve-usar-claude-para-chat-de-suporte)
- [Defina sua interação de chat ideal](https://platform.claude.com/docs/pt-BR/about-claude/use-case-guides/customer-support-chat#defina-sua-interacao-de-chat-ideal)
- [Divida a interação em tarefas únicas](https://platform.claude.com/docs/pt-BR/about-claude/use-case-guides/customer-support-chat#divida-a-interacao-em-tarefas-unicas)
- [Estabeleça critérios de sucesso](https://platform.claude.com/docs/pt-BR/about-claude/use-case-guides/customer-support-chat#estabeleca-criterios-de-sucesso)
- [Como implementar Claude como agente de atendimento ao cliente](https://platform.claude.com/docs/pt-BR/about-claude/use-case-guides/customer-support-chat#como-implementar-claude-como-agente-de-atendimento-ao-cliente)
- [Escolha o modelo Claude certo](https://platform.claude.com/docs/pt-BR/about-claude/use-case-guides/customer-support-chat#escolha-o-modelo-claude-certo)
- [Construa um prompt forte](https://platform.claude.com/docs/pt-BR/about-claude/use-case-guides/customer-support-chat#construa-um-prompt-forte)
- [Adicione recursos dinâmicos e agênticos com uso de ferramentas](https://platform.claude.com/docs/pt-BR/about-claude/use-case-guides/customer-support-chat#adicione-recursos-dinamicos-e-agenticos-com-uso-de-ferramentas)
- [Implante seus prompts](https://platform.claude.com/docs/pt-BR/about-claude/use-case-guides/customer-support-chat#implante-seus-prompts)
- [Construa sua interface de usuário](https://platform.claude.com/docs/pt-BR/about-claude/use-case-guides/customer-support-chat#construa-sua-interface-de-usuario)
- [Avalie seus prompts](https://platform.claude.com/docs/pt-BR/about-claude/use-case-guides/customer-support-chat#avalie-seus-prompts)
- [Melhore o desempenho](https://platform.claude.com/docs/pt-BR/about-claude/use-case-guides/customer-support-chat#melhore-o-desempenho)
- [Integre Claude em seu fluxo de trabalho de suporte](https://platform.claude.com/docs/pt-BR/about-claude/use-case-guides/customer-support-chat#integre-claude-em-seu-fluxo-de-trabalho-de-suporte)

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
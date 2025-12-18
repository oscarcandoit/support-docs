---
url: "https://platform.claude.com/docs/fr/about-claude/use-case-guides/customer-support-chat"
title: "Agent de support client - Claude Docs"
---

[Claude Documentation Home](https://platform.claude.com/docs/fr/home)

- [Guide du développeur](https://platform.claude.com/docs/fr/intro)
- [Référence API](https://platform.claude.com/docs/fr/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [Ressources](https://platform.claude.com/docs/fr/resources/overview)
- [Notes de version](https://platform.claude.com/docs/fr/release-notes/overview)

Français

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Ffr%2Fabout-claude%2Fuse-case-guides%2Fcustomer-support-chat)

Search...

⌘K

Ressources

[Aperçu](https://platform.claude.com/docs/fr/resources/overview) [Glossaire](https://platform.claude.com/docs/fr/about-claude/glossary) [Prompts système](https://platform.claude.com/docs/fr/release-notes/system-prompts)

Cas d'usage

[Aperçu](https://platform.claude.com/docs/fr/about-claude/use-case-guides/overview) [Routage des tickets](https://platform.claude.com/docs/fr/about-claude/use-case-guides/ticket-routing) [Agent de support client](https://platform.claude.com/docs/fr/about-claude/use-case-guides/customer-support-chat) [Modération de contenu](https://platform.claude.com/docs/fr/about-claude/use-case-guides/content-moderation) [Résumé juridique](https://platform.claude.com/docs/fr/about-claude/use-case-guides/legal-summarization)

Bibliothèque de prompts

[Console](https://platform.claude.com/)

[Log in](https://platform.claude.com/login)

Cas d'usage

Agent de support client

Cas d'usage

# Agent de support client

Copy page

Ce guide explique comment exploiter les capacités conversationnelles avancées de Claude pour gérer les demandes des clients en temps réel, en fournissant un support 24/7, en réduisant les temps d'attente et en gérant des volumes élevés de support avec des réponses précises et des interactions positives.

Copy page

## Avant de construire avec Claude

### Décider d'utiliser Claude pour le support par chat

Voici quelques indicateurs clés montrant que vous devriez employer un LLM comme Claude pour automatiser certaines portions de votre processus de support client :

### Volume élevé de requêtes répétitives

### Besoin de synthèse rapide d'informations

### Exigence de disponibilité 24/7

### Mise à l'échelle rapide pendant les périodes de pointe

### Voix de marque cohérente

Quelques considérations pour choisir Claude par rapport à d'autres LLM :

- Vous privilégiez la conversation naturelle et nuancée : la compréhension linguistique sophistiquée de Claude permet des conversations plus naturelles et conscientes du contexte qui semblent plus humaines que les chats avec d'autres LLM.
- Vous recevez souvent des requêtes complexes et ouvertes : Claude peut gérer un large éventail de sujets et de demandes sans générer de réponses préfabriquées ou nécessiter une programmation extensive de permutations d'énoncés d'utilisateurs.
- Vous avez besoin d'un support multilingue évolutif : les capacités multilingues de Claude lui permettent de s'engager dans des conversations dans plus de 200 langues sans avoir besoin de chatbots séparés ou de processus de traduction extensive pour chaque langue prise en charge.

### Définir votre interaction de chat idéale

Décrivez une interaction client idéale pour définir comment et quand vous vous attendez à ce que le client interagisse avec Claude. Ce plan aidera à déterminer les exigences techniques de votre solution.

Voici un exemple d'interaction de chat pour le support client d'assurance automobile :

- **Client**: Initie l'expérience de chat de support

  - **Claude** : Accueille chaleureusement le client et initie la conversation
- **Client**: Pose des questions sur l'assurance pour sa nouvelle voiture électrique

  - **Claude** : Fournit des informations pertinentes sur la couverture des véhicules électriques
- **Client**: Pose des questions liées aux besoins uniques des assurances pour véhicules électriques

  - **Claude** : Répond avec des réponses précises et informatives et fournit des liens vers les sources
- **Client**: Pose des questions hors sujet sans rapport avec l'assurance ou les voitures

  - **Claude** : Clarifie qu'il ne discute pas de sujets sans rapport et réoriente l'utilisateur vers l'assurance automobile
- **Client**: Exprime son intérêt pour un devis d'assurance

  - **Claude** : Pose une série de questions pour déterminer le devis approprié, en s'adaptant à ses réponses
  - **Claude** : Envoie une demande d'utilisation de l'outil API de génération de devis avec les informations nécessaires collectées auprès de l'utilisateur
  - **Claude** : Reçoit les informations de réponse de l'outil utilisé, synthétise les informations dans une réponse naturelle et présente le devis fourni à l'utilisateur
- **Client**: Pose des questions de suivi

  - **Claude** : Répond aux questions de suivi selon les besoins
  - **Claude** : Guide le client vers les prochaines étapes du processus d'assurance et conclut la conversation

Dans l'exemple réel que vous écrivez pour votre propre cas d'usage, vous pourriez trouver utile d'écrire les mots réels de cette interaction afin de pouvoir également avoir une idée du ton idéal, de la longueur de réponse et du niveau de détail que vous souhaitez que Claude ait.

### Décomposer l'interaction en tâches uniques

Le chat de support client est une collection de plusieurs tâches différentes, allant de la réponse aux questions à la récupération d'informations en passant par l'action sur les demandes, enveloppées dans une seule interaction client. Avant de commencer à construire, décomposez votre interaction client idéale en chaque tâche que vous souhaitez que Claude soit capable d'effectuer. Cela garantit que vous pouvez inviter et évaluer Claude pour chaque tâche, et vous donne une bonne idée de la gamme d'interactions que vous devez prendre en compte lors de la rédaction de cas de test.

Les clients trouvent parfois utile de visualiser cela comme un organigramme d'interaction des points d'inflexion possibles de la conversation en fonction des demandes des utilisateurs.

Voici les tâches clés associées à l'exemple d'interaction d'assurance ci-dessus :

1. Accueil et orientation générale
   - Accueillir chaleureusement le client et initier la conversation
   - Fournir des informations générales sur l'entreprise et l'interaction
2. Informations sur les produits
   - Fournir des informations sur la couverture des véhicules électriques











     Cela nécessitera que Claude dispose des informations nécessaires dans son contexte, et pourrait impliquer qu'une [intégration RAG](https://github.com/anthropics/anthropic-cookbook/blob/main/skills/retrieval_augmented_generation/guide.ipynb) soit nécessaire.

   - Répondre aux questions liées aux besoins uniques d'assurance pour véhicules électriques
   - Répondre aux questions de suivi sur le devis ou les détails d'assurance
   - Offrir des liens vers les sources le cas échéant
3. Gestion de la conversation
   - Rester sur le sujet (assurance automobile)
   - Rediriger les questions hors sujet vers les sujets pertinents
4. Génération de devis
   - Poser les questions appropriées pour déterminer l'admissibilité au devis
   - Adapter les questions en fonction des réponses du client
   - Soumettre les informations collectées à l'API de génération de devis
   - Présenter le devis fourni au client

### Établir les critères de succès

Travaillez avec votre équipe de support pour [définir des critères de succès clairs](https://platform.claude.com/docs/fr/test-and-evaluate/define-success) et écrivez [des évaluations détaillées](https://platform.claude.com/docs/fr/test-and-evaluate/develop-tests) avec des repères mesurables et des objectifs.

Voici les critères et repères qui peuvent être utilisés pour évaluer la réussite avec laquelle Claude effectue les tâches définies :

### Précision de la compréhension des requêtes

### Pertinence de la réponse

### Précision de la réponse

### Pertinence de la fourniture de citations

### Adhérence au sujet

### Efficacité de la génération de contenu

### Efficacité de l'escalade

Voici les critères et repères qui peuvent être utilisés pour évaluer l'impact commercial de l'emploi de Claude pour le support :

### Maintien du sentiment

### Taux de déviation

### Score de satisfaction client

### Temps de traitement moyen

## Comment implémenter Claude en tant qu'agent de service client

### Choisir le bon modèle Claude

Le choix du modèle dépend des compromis entre le coût, la précision et le temps de réponse.

Pour le chat de support client, Claude Sonnet 4.5 est bien adapté pour équilibrer l'intelligence, la latence et le coût. Cependant, pour les cas où vous avez un flux de conversation avec plusieurs invites incluant RAG, l'utilisation d'outils et/ou des invites de contexte long, Claude Haiku 4.5 peut être plus approprié pour optimiser la latence.

### Construire une invite forte

L'utilisation de Claude pour le support client nécessite que Claude ait suffisamment de direction et de contexte pour répondre de manière appropriée, tout en ayant suffisamment de flexibilité pour gérer un large éventail de demandes de clients.

Commençons par écrire les éléments d'une invite forte, en commençant par une invite système :

```
IDENTITY = """You are Eva, a friendly and knowledgeable AI assistant for Acme Insurance
Company. Your role is to warmly welcome customers and provide information on
Acme's insurance offerings, which include car insurance and electric car
insurance. You can also help customers get quotes for their insurance needs."""
```

Bien que vous soyez tenté de mettre toutes vos informations dans une invite système comme moyen de séparer les instructions de la conversation de l'utilisateur, Claude fonctionne en fait mieux avec la majorité du contenu de son invite écrit dans le premier tour `User` (la seule exception étant l'invite de rôle). Lisez plus sur [Donner un rôle à Claude avec une invite système](https://platform.claude.com/docs/fr/build-with-claude/prompt-engineering/system-prompts).

Il est préférable de décomposer les invites complexes en sous-sections et d'écrire une partie à la fois. Pour chaque tâche, vous pourriez trouver plus de succès en suivant un processus étape par étape pour définir les parties de l'invite dont Claude aurait besoin pour bien faire la tâche. Pour cet exemple de support client d'assurance automobile, nous écrirons par étapes toutes les parties d'une invite en commençant par la tâche « Accueil et orientation générale ». Cela rend également le débogage de votre invite plus facile car vous pouvez ajuster plus rapidement les parties individuelles de l'invite globale.

Nous mettrons tous ces éléments dans un fichier appelé `config.py`.

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

Nous ferons ensuite la même chose pour nos informations sur l'assurance automobile et l'assurance automobile électrique.

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

Maintenant que nous avons notre contenu statique, ajoutons au moins 4-5 exemples d'interactions « bonnes » pour guider les réponses de Claude. Ces exemples doivent être représentatifs de votre interaction client idéale et peuvent inclure des garde-fous, des appels d'outils, etc.

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

Vous voudrez également inclure toutes les instructions importantes décrivant les À faire et À ne pas faire pour la façon dont Claude doit interagir avec le client.
Cela peut provenir des garde-fous de marque ou des politiques de support.

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

Maintenant, combinons toutes ces sections en une seule chaîne à utiliser comme notre invite.

```
TASK_SPECIFIC_INSTRUCTIONS = ' '.join([\
   STATIC_GREETINGS_AND_GENERAL,\
   STATIC_CAR_INSURANCE,\
   STATIC_ELECTRIC_CAR_INSURANCE,\
   EXAMPLES,\
   ADDITIONAL_GUARDRAILS,\
])
```

### Ajouter des capacités dynamiques et agentiques avec l'utilisation d'outils

Claude est capable de prendre des mesures et de récupérer des informations de manière dynamique en utilisant la fonctionnalité d'utilisation d'outils côté client. Commencez par énumérer tous les outils externes ou API que l'invite doit utiliser.

Pour cet exemple, nous commencerons par un outil pour calculer le devis.

Comme rappel, cet outil n'effectuera pas le calcul réel, il signalera simplement à l'application qu'un outil doit être utilisé avec les arguments spécifiés.

Exemple de calculatrice de devis d'assurance :

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

### Déployer vos invites

Il est difficile de savoir comment fonctionne bien votre invite sans la déployer dans un environnement de test en production et [exécuter des évaluations](https://platform.claude.com/docs/fr/test-and-evaluate/develop-tests) donc construisons une petite application en utilisant notre invite, le SDK Anthropic et streamlit pour une interface utilisateur.

Dans un fichier appelé `chatbot.py`, commencez par configurer la classe ChatBot, qui encapsulera les interactions avec le SDK Anthropic.

La classe doit avoir deux méthodes principales : `generate_message` et `process_user_input`.

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

### Construire votre interface utilisateur

Testez le déploiement de ce code avec Streamlit en utilisant une méthode principale. Cette fonction `main()` configure une interface de chat basée sur Streamlit.

Nous ferons cela dans un fichier appelé `app.py`

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

Exécutez le programme avec :

```
streamlit run app.py
```

### Évaluer vos invites

L'invite nécessite souvent des tests et une optimisation pour être prête pour la production. Pour déterminer la disponibilité de votre solution, évaluez les performances du chatbot en utilisant un processus systématique combinant des méthodes quantitatives et qualitatives. La création d'une [évaluation empirique forte](https://platform.claude.com/docs/fr/test-and-evaluate/develop-tests#building-evals-and-test-cases) basée sur vos critères de succès définis vous permettra d'optimiser vos invites.

La [Console Claude](https://platform.claude.com/dashboard) dispose maintenant d'un outil d'évaluation qui vous permet de tester vos invites dans divers scénarios.

### Améliorer les performances

Dans les scénarios complexes, il peut être utile de considérer des stratégies supplémentaires pour améliorer les performances au-delà des [techniques standard d'ingénierie d'invite](https://platform.claude.com/docs/fr/build-with-claude/prompt-engineering/overview) et des [stratégies de mise en œuvre des garde-fous](https://platform.claude.com/docs/fr/test-and-evaluate/strengthen-guardrails/reduce-hallucinations). Voici quelques scénarios courants :

#### Réduire la latence du contexte long avec RAG

Lorsqu'il s'agit de grandes quantités de contexte statique et dynamique, l'inclusion de toutes les informations dans l'invite peut entraîner des coûts élevés, des temps de réponse plus lents et atteindre les limites de la fenêtre de contexte. Dans ce scénario, l'implémentation de techniques de génération augmentée par récupération (RAG) peut améliorer considérablement les performances et l'efficacité.

En utilisant [des modèles d'intégration comme Voyage](https://platform.claude.com/docs/fr/build-with-claude/embeddings) pour convertir les informations en représentations vectorielles, vous pouvez créer un système plus évolutif et réactif. Cette approche permet la récupération dynamique d'informations pertinentes en fonction de la requête actuelle, plutôt que d'inclure tout le contexte possible dans chaque invite.

L'implémentation de RAG pour les cas d'usage de support [recette RAG](https://github.com/anthropics/anthropic-cookbook/blob/82675c124e1344639b2a875aa9d3ae854709cd83/skills/classification/guide.ipynb) a montré une augmentation de la précision, une réduction des temps de réponse et une réduction des coûts API dans les systèmes avec des exigences de contexte étendues.

#### Intégrer les données en temps réel avec l'utilisation d'outils

Lorsqu'il s'agit de requêtes qui nécessitent des informations en temps réel, telles que les soldes de compte ou les détails de politique, les approches RAG basées sur l'intégration ne sont pas suffisantes. Au lieu de cela, vous pouvez exploiter l'utilisation d'outils pour améliorer considérablement la capacité de votre chatbot à fournir des réponses précises et en temps réel. Par exemple, vous pouvez utiliser l'utilisation d'outils pour rechercher les informations du client, récupérer les détails de la commande et annuler les commandes au nom du client.

Cette approche, [décrite dans notre recette d'utilisation d'outils : agent de service client](https://github.com/anthropics/anthropic-cookbook/blob/main/tool_use/customer_service_agent.ipynb), vous permet d'intégrer de manière transparente les données en direct dans les réponses de Claude et de fournir une expérience client plus personnalisée et efficace.

#### Renforcer les garde-fous d'entrée et de sortie

Lors du déploiement d'un chatbot, en particulier dans les scénarios de service client, il est crucial de prévenir les risques associés aux abus, aux requêtes hors de portée et aux réponses inappropriées. Bien que Claude soit intrinsèquement résilient à de tels scénarios, voici des étapes supplémentaires pour renforcer les garde-fous de votre chatbot :

- [Réduire les hallucinations](https://platform.claude.com/docs/fr/test-and-evaluate/strengthen-guardrails/reduce-hallucinations) : Implémentez des mécanismes de vérification des faits et [citations](https://github.com/anthropics/anthropic-cookbook/blob/main/misc/using_citations.ipynb) pour ancrer les réponses dans les informations fournies.
- Vérifier les informations de manière croisée : Vérifiez que les réponses de l'agent s'alignent avec les politiques de votre entreprise et les faits connus.
- Éviter les engagements contractuels : Assurez-vous que l'agent ne fait pas de promesses ou n'entre pas dans des accords qu'il n'est pas autorisé à conclure.
- [Atténuer les jailbreaks](https://platform.claude.com/docs/fr/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks) : Utilisez des méthodes comme les écrans d'innocuité et la validation des entrées pour empêcher les utilisateurs d'exploiter les vulnérabilités du modèle, visant à générer du contenu inapproprié.
- Éviter de mentionner les concurrents : Implémentez un filtre de mention de concurrents pour maintenir l'accent sur la marque et ne pas mentionner les produits ou services d'aucun concurrent.
- [Garder Claude dans le rôle](https://platform.claude.com/docs/fr/test-and-evaluate/strengthen-guardrails/keep-claude-in-character) : Empêchez Claude de changer son style de contexte, même lors d'interactions longues et complexes.
- Supprimer les informations d'identification personnelle (PII) : Sauf si explicitement requis et autorisé, supprimez toute PII des réponses.

#### Réduire le temps de réponse perçu avec le streaming

Lorsqu'il s'agit de réponses potentiellement longues, l'implémentation du streaming peut améliorer considérablement l'engagement et la satisfaction des utilisateurs. Dans ce scénario, les utilisateurs reçoivent la réponse progressivement au lieu d'attendre que la réponse entière soit générée.

Voici comment implémenter le streaming :

1. Utilisez l' [API de streaming Anthropic](https://platform.claude.com/docs/fr/build-with-claude/streaming) pour prendre en charge les réponses en streaming.
2. Configurez votre frontend pour gérer les chunks de texte entrants.
3. Affichez chaque chunk à son arrivée, simulant une dactylographie en temps réel.
4. Implémentez un mécanisme pour enregistrer la réponse complète, permettant aux utilisateurs de la consulter s'ils s'éloignent et reviennent.

Dans certains cas, le streaming permet l'utilisation de modèles plus avancés avec des latences de base plus élevées, car l'affichage progressif atténue l'impact des temps de traitement plus longs.

#### Mettre à l'échelle votre Chatbot

À mesure que la complexité de votre Chatbot augmente, l'architecture de votre application peut évoluer pour correspondre. Avant d'ajouter d'autres couches à votre architecture, considérez les options moins exhaustives suivantes :

- Assurez-vous que vous tirez le meilleur parti de vos invites et que vous optimisez par l'ingénierie d'invite. Utilisez nos [guides d'ingénierie d'invite](https://platform.claude.com/docs/fr/build-with-claude/prompt-engineering/overview) pour écrire les invites les plus efficaces.
- Ajoutez des [outils](https://platform.claude.com/docs/fr/build-with-claude/tool-use) supplémentaires à l'invite (qui peuvent inclure [des chaînes d'invite](https://platform.claude.com/docs/fr/build-with-claude/prompt-engineering/chain-prompts)) et voyez si vous pouvez atteindre la fonctionnalité requise.

Si votre Chatbot gère des tâches incroyablement variées, vous pourriez vouloir considérer l'ajout d'un [classificateur d'intention séparé](https://github.com/anthropics/anthropic-cookbook/blob/main/skills/classification/guide.ipynb) pour router la requête client initiale. Pour l'application existante, cela impliquerait de créer un arbre de décision qui routerait les requêtes des clients via le classificateur puis vers des conversations spécialisées (avec leur propre ensemble d'outils et d'invites système). Notez que cette méthode nécessite un appel supplémentaire à Claude qui peut augmenter la latence.

### Intégrer Claude dans votre flux de travail de support

Bien que nos exemples se soient concentrés sur les fonctions Python appelables dans un environnement Streamlit, le déploiement de Claude pour un chatbot de support en temps réel nécessite un service API.

Voici comment vous pouvez aborder cela :

1. Créer un wrapper API : Développez un simple wrapper API autour de votre fonction de classification. Par exemple, vous pouvez utiliser Flask API ou Fast API pour envelopper votre code dans un service HTTP. Votre service HTTP pourrait accepter l'entrée utilisateur et retourner la réponse de l'Assistant dans son intégralité. Ainsi, votre service pourrait avoir les caractéristiques suivantes :
   - Événements envoyés par le serveur (SSE) : SSE permet la diffusion en temps réel des réponses du serveur au client. Ceci est crucial pour fournir une expérience fluide et interactive lorsque vous travaillez avec des LLM.
   - Mise en cache : L'implémentation de la mise en cache peut améliorer considérablement les temps de réponse et réduire les appels API inutiles.
   - Rétention du contexte : Maintenir le contexte lorsqu'un utilisateur s'éloigne et revient est important pour la continuité des conversations.
2. Construire une interface web : Implémentez une interface utilisateur web conviviale pour interagir avec l'agent alimenté par Claude.


[Retrieval Augmented Generation (RAG) cookbook\\
\\
Visitez notre recette de cookbook RAG pour plus d'exemples de code et des conseils détaillés.](https://github.com/anthropics/anthropic-cookbook/blob/main/skills/retrieval_augmented_generation/guide.ipynb) [Citations cookbook\\
\\
Explorez notre recette de cookbook Citations pour savoir comment assurer l'exactitude et l'explicabilité des informations.](https://github.com/anthropics/anthropic-cookbook/blob/main/misc/using_citations.ipynb)

- [Avant de construire avec Claude](https://platform.claude.com/docs/fr/about-claude/use-case-guides/customer-support-chat#avant-de-construire-avec-claude)
- [Décider d'utiliser Claude pour le support par chat](https://platform.claude.com/docs/fr/about-claude/use-case-guides/customer-support-chat#decider-d-utiliser-claude-pour-le-support-par-chat)
- [Définir votre interaction de chat idéale](https://platform.claude.com/docs/fr/about-claude/use-case-guides/customer-support-chat#definir-votre-interaction-de-chat-ideale)
- [Décomposer l'interaction en tâches uniques](https://platform.claude.com/docs/fr/about-claude/use-case-guides/customer-support-chat#decomposer-l-interaction-en-taches-uniques)
- [Établir les critères de succès](https://platform.claude.com/docs/fr/about-claude/use-case-guides/customer-support-chat#etablir-les-criteres-de-succes)
- [Comment implémenter Claude en tant qu'agent de service client](https://platform.claude.com/docs/fr/about-claude/use-case-guides/customer-support-chat#comment-implementer-claude-en-tant-qu-agent-de-service-client)
- [Choisir le bon modèle Claude](https://platform.claude.com/docs/fr/about-claude/use-case-guides/customer-support-chat#choisir-le-bon-modele-claude)
- [Construire une invite forte](https://platform.claude.com/docs/fr/about-claude/use-case-guides/customer-support-chat#construire-une-invite-forte)
- [Ajouter des capacités dynamiques et agentiques avec l'utilisation d'outils](https://platform.claude.com/docs/fr/about-claude/use-case-guides/customer-support-chat#ajouter-des-capacites-dynamiques-et-agentiques-avec-l-utilisation-d-outils)
- [Déployer vos invites](https://platform.claude.com/docs/fr/about-claude/use-case-guides/customer-support-chat#deployer-vos-invites)
- [Construire votre interface utilisateur](https://platform.claude.com/docs/fr/about-claude/use-case-guides/customer-support-chat#construire-votre-interface-utilisateur)
- [Évaluer vos invites](https://platform.claude.com/docs/fr/about-claude/use-case-guides/customer-support-chat#evaluer-vos-invites)
- [Améliorer les performances](https://platform.claude.com/docs/fr/about-claude/use-case-guides/customer-support-chat#ameliorer-les-performances)
- [Intégrer Claude dans votre flux de travail de support](https://platform.claude.com/docs/fr/about-claude/use-case-guides/customer-support-chat#integrer-claude-dans-votre-flux-de-travail-de-support)

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
---
url: "https://platform.claude.com/docs/es/about-claude/use-case-guides/ticket-routing"
title: "Enrutamiento de tickets - Claude Docs"
---

[Claude Documentation Home](https://platform.claude.com/docs/es/home)

- [Guía para desarrolladores](https://platform.claude.com/docs/es/intro)
- [Referencia de API](https://platform.claude.com/docs/es/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [Recursos](https://platform.claude.com/docs/es/resources/overview)
- [Notas de la versión](https://platform.claude.com/docs/es/release-notes/overview)

Español

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fes%2Fabout-claude%2Fuse-case-guides%2Fticket-routing)

Search...

⌘K

Recursos

[Descripción general](https://platform.claude.com/docs/es/resources/overview) [Glosario](https://platform.claude.com/docs/es/about-claude/glossary) [Prompts del sistema](https://platform.claude.com/docs/es/release-notes/system-prompts)

Casos de uso

[Descripción general](https://platform.claude.com/docs/es/about-claude/use-case-guides/overview) [Enrutamiento de tickets](https://platform.claude.com/docs/es/about-claude/use-case-guides/ticket-routing) [Agente de atención al cliente](https://platform.claude.com/docs/es/about-claude/use-case-guides/customer-support-chat) [Moderación de contenido](https://platform.claude.com/docs/es/about-claude/use-case-guides/content-moderation) [Resumen legal](https://platform.claude.com/docs/es/about-claude/use-case-guides/legal-summarization)

Biblioteca de prompts

[Console](https://platform.claude.com/)

[Log in](https://platform.claude.com/login)

Casos de uso

Enrutamiento de tickets

Casos de uso

# Enrutamiento de tickets

Copy page

Esta guía explica cómo aprovechar las capacidades avanzadas de comprensión del lenguaje natural de Claude para clasificar tickets de soporte al cliente a escala basándose en la intención del cliente, urgencia, priorización, perfil del cliente y más.

Copy page

## Definir si usar Claude para el enrutamiento de tickets

Aquí hay algunos indicadores clave de que deberías usar un LLM como Claude en lugar de enfoques tradicionales de ML para tu tarea de clasificación:

### Tienes datos de entrenamiento etiquetados limitados disponibles

### Tus categorías de clasificación probablemente cambiarán o evolucionarán con el tiempo

### Necesitas manejar entradas de texto complejas y no estructuradas

### Tus reglas de clasificación se basan en comprensión semántica

### Requieres razonamiento interpretable para las decisiones de clasificación

### Quieres manejar casos extremos y tickets ambiguos de manera más efectiva

### Necesitas soporte multilingüe sin mantener modelos separados

* * *

## Construir y desplegar tu flujo de trabajo de soporte LLM

### Entender tu enfoque de soporte actual

Antes de sumergirte en la automatización, es crucial entender tu sistema de tickets existente. Comienza investigando cómo tu equipo de soporte maneja actualmente el enrutamiento de tickets.

Considera preguntas como:

- ¿Qué criterios se usan para determinar qué SLA/oferta de servicio se aplica?
- ¿Se usa el enrutamiento de tickets para determinar a qué nivel de soporte o especialista de producto va un ticket?
- ¿Hay alguna regla automatizada o flujos de trabajo ya en su lugar? ¿En qué casos fallan?
- ¿Cómo se manejan los casos extremos o tickets ambiguos?
- ¿Cómo prioriza el equipo los tickets?

Mientras más sepas sobre cómo los humanos manejan ciertos casos, mejor podrás trabajar con Claude para hacer la tarea.

### Definir categorías de intención del usuario

Una lista bien definida de categorías de intención del usuario es crucial para la clasificación precisa de tickets de soporte con Claude. La capacidad de Claude para enrutar tickets efectivamente dentro de tu sistema es directamente proporcional a qué tan bien definidas están las categorías de tu sistema.

Aquí hay algunas categorías de intención del usuario de ejemplo y subcategorías.

### Problema técnico

### Gestión de cuenta

### Información del producto

### Orientación del usuario

### Retroalimentación

### Relacionado con pedidos

### Solicitud de servicio

### Preocupaciones de seguridad

### Cumplimiento y legal

### Soporte de emergencia

### Entrenamiento y educación

### Integración y API

Además de la intención, el enrutamiento y priorización de tickets también puede estar influenciado por otros factores como urgencia, tipo de cliente, SLAs o idioma. Asegúrate de considerar otros criterios de enrutamiento al construir tu sistema de enrutamiento automatizado.

### Establecer criterios de éxito

Trabaja con tu equipo de soporte para [definir criterios de éxito claros](https://platform.claude.com/docs/es/test-and-evaluate/define-success) con puntos de referencia medibles, umbrales y objetivos.

Aquí hay algunos criterios estándar y puntos de referencia al usar LLMs para el enrutamiento de tickets de soporte:

### Consistencia de clasificación

### Velocidad de adaptación

### Manejo multilingüe

### Manejo de casos extremos

### Mitigación de sesgo

### Eficiencia del prompt

### Puntuación de explicabilidad

Aquí hay algunos criterios de éxito comunes que pueden ser útiles independientemente de si se usa un LLM:

### Precisión de enrutamiento

### Tiempo hasta asignación

### Tasa de reenrutamiento

### Tasa de resolución en primer contacto

### Tiempo promedio de manejo

### Puntuaciones de satisfacción del cliente

### Tasa de escalación

### Productividad del agente

### Tasa de deflexión de autoservicio

### Costo por ticket

### Elegir el modelo Claude correcto

La elección del modelo depende de las compensaciones entre costo, precisión y tiempo de respuesta.

Muchos clientes han encontrado que `claude-3-5-haiku-20241022` es un modelo ideal para el enrutamiento de tickets, ya que es el modelo más rápido y costo-efectivo en la familia Claude 3 mientras aún entrega excelentes resultados. Si tu problema de clasificación requiere experiencia profunda en la materia o un gran volumen de categorías de intención con razonamiento complejo, puedes optar por el [modelo Sonnet más grande](https://platform.claude.com/docs/es/about-claude/models).

### Construir un prompt sólido

El enrutamiento de tickets es un tipo de tarea de clasificación. Claude analiza el contenido de un ticket de soporte y lo clasifica en categorías predefinidas basadas en el tipo de problema, urgencia, experiencia requerida u otros factores relevantes.

Escribamos un prompt de clasificación de tickets. Nuestro prompt inicial debería contener los contenidos de la solicitud del usuario y devolver tanto el razonamiento como la intención.

Prueba el [generador de prompts](https://platform.claude.com/docs/es/prompt-generator) en la [Consola Claude](https://platform.claude.com/login) para que Claude escriba un primer borrador para ti.

Aquí hay un ejemplo de prompt de clasificación de enrutamiento de tickets:

```
def classify_support_request(ticket_contents):
    # Define the prompt for the classification task
    classification_prompt = f"""Actuarás como un sistema de clasificación de tickets de soporte al cliente. Tu tarea es analizar solicitudes de soporte al cliente y generar la intención de clasificación apropiada para cada solicitud, junto con tu razonamiento.

        Aquí está la solicitud de soporte al cliente que necesitas clasificar:

        <request>{ticket_contents}</request>

        Por favor analiza cuidadosamente la solicitud anterior para determinar la intención central y necesidades del cliente. Considera lo que el cliente está pidiendo o tiene preocupaciones sobre.

        Primero, escribe tu razonamiento y análisis de cómo clasificar esta solicitud dentro de etiquetas <reasoning>.

        Luego, genera la etiqueta de clasificación apropiada para la solicitud dentro de una etiqueta <intent>. Las intenciones válidas son:
        <intents>
        <intent>Soporte, Retroalimentación, Queja</intent>
        <intent>Seguimiento de Pedido</intent>
        <intent>Reembolso/Intercambio</intent>
        </intents>

        Una solicitud puede tener SOLO UNA intención aplicable. Solo incluye la intención que es más aplicable a la solicitud.

        Como ejemplo, considera la siguiente solicitud:
        <request>¡Hola! Tuve internet de fibra de alta velocidad instalado el sábado y mi instalador, Kevin, fue absolutamente fantástico! ¿Dónde puedo enviar mi reseña positiva? ¡Gracias por tu ayuda!</request>

        Aquí hay un ejemplo de cómo debería estar formateada tu salida (para la solicitud de ejemplo anterior):
        <reasoning>El usuario busca información para dejar retroalimentación positiva.</reasoning>
        <intent>Soporte, Retroalimentación, Queja</intent>

        Aquí hay algunos ejemplos más:
        <examples>
        <example 2>
        Entrada del Ejemplo 2:
        <request>Quería escribir y agradecerte personalmente por la compasión que mostraste hacia mi familia durante el funeral de mi padre este fin de semana pasado. Tu personal fue tan considerado y útil durante todo este proceso; realmente nos quitó una carga de los hombros. Los folletos de velatorio fueron hermosos. Nunca olvidaremos la bondad que nos mostraste y estamos muy agradecidos por lo suavemente que transcurrieron los procedimientos. Gracias, de nuevo, Amarantha Hill en nombre de la Familia Hill.</request>

        Salida del Ejemplo 2:
        <reasoning>El usuario deja una reseña positiva de su experiencia.</reasoning>
        <intent>Soporte, Retroalimentación, Queja</intent>
        </example 2>
        <example 3>

        ...

        </example 8>
        <example 9>
        Entrada del Ejemplo 9:
        <request>Tu sitio web sigue enviando ventanas emergentes de anuncios que bloquean toda la pantalla. Me tomó veinte minutos finalmente encontrar el número de teléfono para llamar y quejarme. ¿Cómo puedo posiblemente acceder a la información de mi cuenta con todas estas ventanas emergentes? ¿Puedes acceder a mi cuenta por mí, ya que tu sitio web está roto? Necesito saber cuál es la dirección registrada.</request>

        Salida del Ejemplo 9:
        <reasoning>El usuario solicita ayuda para acceder a la información de su cuenta web.</reasoning>
        <intent>Soporte, Retroalimentación, Queja</intent>
        </example 9>

        Recuerda incluir siempre tu razonamiento de clasificación antes de tu salida de intención real. El razonamiento debería estar encerrado en etiquetas <reasoning> y la intención en etiquetas <intent>. Devuelve solo el razonamiento y la intención.
        """
```

Desglosemos los componentes clave de este prompt:

- Usamos f-strings de Python para crear la plantilla del prompt, permitiendo que el `ticket_contents` sea insertado en las etiquetas `<request>`.
- Le damos a Claude un rol claramente definido como un sistema de clasificación que analiza cuidadosamente el contenido del ticket para determinar la intención central y necesidades del cliente.
- Instruimos a Claude sobre el formato de salida apropiado, en este caso para proporcionar su razonamiento y análisis dentro de etiquetas `<reasoning>`, seguido por la etiqueta de clasificación apropiada dentro de etiquetas `<intent>`.
- Especificamos las categorías de intención válidas: "Soporte, Retroalimentación, Queja", "Seguimiento de Pedido" y "Reembolso/Intercambio".
- Incluimos algunos ejemplos (también conocido como prompting de pocos ejemplos) para ilustrar cómo debería estar formateada la salida, lo que mejora la precisión y consistencia.

La razón por la que queremos que Claude divida su respuesta en varias secciones de etiquetas XML es para que podamos usar expresiones regulares para extraer por separado el razonamiento y la intención de la salida. Esto nos permite crear pasos siguientes dirigidos en el flujo de trabajo de enrutamiento de tickets, como usar solo la intención para decidir a qué persona enrutar el ticket.

### Desplegar tu prompt

Es difícil saber qué tan bien funciona tu prompt sin desplegarlo en un entorno de producción de prueba y [ejecutar evaluaciones](https://platform.claude.com/docs/es/test-and-evaluate/develop-tests).

Construyamos la estructura de despliegue. Comienza definiendo la firma del método para envolver nuestra llamada a Claude. Tomaremos el método que ya hemos comenzado a escribir, que tiene `ticket_contents` como entrada, y ahora devolver una tupla de `reasoning` e `intent` como salida. Si tienes una automatización existente usando ML tradicional, querrás seguir esa firma de método en su lugar.

```
import anthropic
import re

# Create an instance of the Claude API client
client = anthropic.Anthropic()

# Set the default model
DEFAULT_MODEL="claude-3-5-haiku-20241022"

def classify_support_request(ticket_contents):
    # Define the prompt for the classification task
    classification_prompt = f"""Actuarás como un sistema de clasificación de tickets de soporte al cliente.
        ...
        ... El razonamiento debería estar encerrado en etiquetas <reasoning> y la intención en etiquetas <intent>. Devuelve solo el razonamiento y la intención.
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

- Importa la biblioteca Anthropic y crea una instancia del cliente usando tu clave API.
- Define una función `classify_support_request` que toma una cadena `ticket_contents`.
- Envía el `ticket_contents` a Claude para clasificación usando el `classification_prompt`
- Devuelve el `reasoning` e `intent` del modelo extraídos de la respuesta.

Dado que necesitamos esperar a que se genere todo el texto de razonamiento e intención antes de analizarlo, establecemos `stream=False` (el predeterminado).

* * *

## Evaluar tu prompt

El prompting a menudo requiere pruebas y optimización para que esté listo para producción. Para determinar la preparación de tu solución, evalúa el rendimiento basado en los criterios de éxito y umbrales que estableciste anteriormente.

Para ejecutar tu evaluación, necesitarás casos de prueba para ejecutarla. El resto de esta guía asume que ya has [desarrollado tus casos de prueba](https://platform.claude.com/docs/es/test-and-evaluate/develop-tests).

### Construir una función de evaluación

Nuestra evaluación de ejemplo para esta guía mide el rendimiento de Claude a lo largo de tres métricas clave:

- Precisión
- Costo por clasificación

Puedes necesitar evaluar a Claude en otros ejes dependiendo de qué factores son importantes para ti.

Para evaluar esto, primero tenemos que modificar el script que escribimos y agregar una función para comparar la intención predicha con la intención real y calcular el porcentaje de predicciones correctas. También tenemos que agregar funcionalidad de cálculo de costo y medición de tiempo.

```
import anthropic
import re

# Create an instance of the Claude API client
client = anthropic.Anthropic()

# Set the default model
DEFAULT_MODEL="claude-3-5-haiku-20241022"

def classify_support_request(request, actual_intent):
    # Define the prompt for the classification task
    classification_prompt = f"""Actuarás como un sistema de clasificación de tickets de soporte al cliente.
        ...
        ...El razonamiento debería estar encerrado en etiquetas <reasoning> y la intención en etiquetas <intent>. Devuelve solo el razonamiento y la intención.
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

Desglosemos las ediciones que hemos hecho:

- Agregamos el `actual_intent` de nuestros casos de prueba al método `classify_support_request` y configuramos una comparación para evaluar si la clasificación de intención de Claude coincide con nuestra clasificación de intención dorada.
- Extrajimos estadísticas de uso para la llamada API para calcular el costo basado en tokens de entrada y salida usados

### Ejecutar tu evaluación

Una evaluación apropiada requiere umbrales y puntos de referencia claros para determinar qué es un buen resultado. El script anterior nos dará los valores de tiempo de ejecución para precisión, tiempo de respuesta y costo por clasificación, pero aún necesitaríamos umbrales claramente establecidos. Por ejemplo:

- **Precisión:** 95% (de 100 pruebas)
- **Costo por clasificación:** 50% de reducción en promedio (a través de 100 pruebas) del método de enrutamiento actual

Tener estos umbrales te permite decir rápida y fácilmente a escala, y con empirismo imparcial, qué método es mejor para ti y qué cambios podrían necesitar hacerse para ajustarse mejor a tus requisitos.

* * *

## Mejorar el rendimiento

En escenarios complejos, puede ser útil considerar estrategias adicionales para mejorar el rendimiento más allá de las [técnicas estándar de ingeniería de prompts](https://platform.claude.com/docs/es/build-with-claude/prompt-engineering/overview) y [estrategias de implementación de barreras de seguridad](https://platform.claude.com/docs/es/test-and-evaluate/strengthen-guardrails/reduce-hallucinations). Aquí hay algunos escenarios comunes:

### Usar una jerarquía taxonómica para casos con 20+ categorías de intención

A medida que el número de clases crece, el número de ejemplos requeridos también se expande, potencialmente haciendo el prompt difícil de manejar. Como alternativa, puedes considerar implementar un sistema de clasificación jerárquico usando una mezcla de clasificadores.

1. Organiza tus intenciones en una estructura de árbol taxonómico.
2. Crea una serie de clasificadores en cada nivel del árbol, habilitando un enfoque de enrutamiento en cascada.

Por ejemplo, podrías tener un clasificador de nivel superior que categorice ampliamente los tickets en "Problemas Técnicos", "Preguntas de Facturación" y "Consultas Generales". Cada una de estas categorías puede entonces tener su propio sub-clasificador para refinar más la clasificación.

![](https://platform.claude.com/docs/images/ticket-hierarchy.png)

- **Pros - mayor matiz y precisión:** Puedes crear diferentes prompts para cada ruta padre, permitiendo clasificación más dirigida y específica al contexto. Esto puede llevar a precisión mejorada y manejo más matizado de solicitudes de clientes.

- **Contras - latencia aumentada:** Ten en cuenta que múltiples clasificadores pueden llevar a latencia aumentada, y recomendamos implementar este enfoque con nuestro modelo más rápido, Haiku.


### Usar bases de datos vectoriales y búsqueda de similitud de recuperación para manejar tickets altamente variables

A pesar de que proporcionar ejemplos es la forma más efectiva de mejorar el rendimiento, si las solicitudes de soporte son altamente variables, puede ser difícil incluir suficientes ejemplos en un solo prompt.

En este escenario, podrías emplear una base de datos vectorial para hacer búsquedas de similitud de un conjunto de datos de ejemplos y recuperar los ejemplos más relevantes para una consulta dada.

Este enfoque, delineado en detalle en nuestra [receta de clasificación](https://github.com/anthropics/anthropic-cookbook/blob/82675c124e1344639b2a875aa9d3ae854709cd83/skills/classification/guide.ipynb), ha demostrado mejorar el rendimiento del 71% de precisión al 93% de precisión.

### Considerar específicamente casos extremos esperados

Aquí hay algunos escenarios donde Claude puede clasificar mal los tickets (puede haber otros que son únicos a tu situación). En estos escenarios, considera proporcionar instrucciones explícitas o ejemplos en el prompt de cómo Claude debería manejar el caso extremo:

### Los clientes hacen solicitudes implícitas

### Claude prioriza la emoción sobre la intención

### Múltiples problemas causan confusión de priorización de problemas

* * *

## Integrar Claude en tu flujo de trabajo de soporte mayor

La integración apropiada requiere que tomes algunas decisiones respecto a cómo tu script de enrutamiento de tickets basado en Claude encaja en la arquitectura de tu sistema de enrutamiento de tickets mayor. Hay dos formas en que podrías hacer esto:

- **Basado en push:**El sistema de tickets de soporte que estás usando (ej. Zendesk) activa tu código enviando un evento webhook a tu servicio de enrutamiento, que luego clasifica la intención y la enruta.
  - Este enfoque es más escalable web, pero necesita que expongas un endpoint público.
- **Basado en pull:**Tu código extrae los últimos tickets basado en un horario dado y los enruta en el momento de extracción.
  - Este enfoque es más fácil de implementar pero podría hacer llamadas innecesarias al sistema de tickets de soporte cuando la frecuencia de extracción es demasiado alta o podría ser excesivamente lento cuando la frecuencia de extracción es demasiado baja.

Para cualquiera de estos enfoques, necesitarás envolver tu script en un servicio. La elección del enfoque depende de qué APIs proporciona tu sistema de tickets de soporte.

* * *

[Libro de cocina de clasificación\\
\\
Visita nuestro libro de cocina de clasificación para más código de ejemplo y orientación detallada de evaluación.](https://github.com/anthropics/anthropic-cookbook/tree/main/capabilities/classification) [Consola Claude\\
\\
Comienza a construir y evaluar tu flujo de trabajo en la Consola Claude.](https://platform.claude.com/dashboard)

- [Definir si usar Claude para el enrutamiento de tickets](https://platform.claude.com/docs/es/about-claude/use-case-guides/ticket-routing#definir-si-usar-claude-para-el-enrutamiento-de-tickets)
- [Construir y desplegar tu flujo de trabajo de soporte LLM](https://platform.claude.com/docs/es/about-claude/use-case-guides/ticket-routing#construir-y-desplegar-tu-flujo-de-trabajo-de-soporte-llm)
- [Entender tu enfoque de soporte actual](https://platform.claude.com/docs/es/about-claude/use-case-guides/ticket-routing#entender-tu-enfoque-de-soporte-actual)
- [Definir categorías de intención del usuario](https://platform.claude.com/docs/es/about-claude/use-case-guides/ticket-routing#definir-categorias-de-intencion-del-usuario)
- [Establecer criterios de éxito](https://platform.claude.com/docs/es/about-claude/use-case-guides/ticket-routing#establecer-criterios-de-exito)
- [Elegir el modelo Claude correcto](https://platform.claude.com/docs/es/about-claude/use-case-guides/ticket-routing#elegir-el-modelo-claude-correcto)
- [Construir un prompt sólido](https://platform.claude.com/docs/es/about-claude/use-case-guides/ticket-routing#construir-un-prompt-solido)
- [Desplegar tu prompt](https://platform.claude.com/docs/es/about-claude/use-case-guides/ticket-routing#desplegar-tu-prompt)
- [Evaluar tu prompt](https://platform.claude.com/docs/es/about-claude/use-case-guides/ticket-routing#evaluar-tu-prompt)
- [Construir una función de evaluación](https://platform.claude.com/docs/es/about-claude/use-case-guides/ticket-routing#construir-una-funcion-de-evaluacion)
- [Ejecutar tu evaluación](https://platform.claude.com/docs/es/about-claude/use-case-guides/ticket-routing#ejecutar-tu-evaluacion)
- [Mejorar el rendimiento](https://platform.claude.com/docs/es/about-claude/use-case-guides/ticket-routing#mejorar-el-rendimiento)
- [Usar una jerarquía taxonómica para casos con 20+ categorías de intención](https://platform.claude.com/docs/es/about-claude/use-case-guides/ticket-routing#usar-una-jerarquia-taxonomica-para-casos-con-20-categorias-de-intencion)
- [Usar bases de datos vectoriales y búsqueda de similitud de recuperación para manejar tickets altamente variables](https://platform.claude.com/docs/es/about-claude/use-case-guides/ticket-routing#usar-bases-de-datos-vectoriales-y-busqueda-de-similitud-de-recuperacion-para-manejar-tickets-altamente-variables)
- [Considerar específicamente casos extremos esperados](https://platform.claude.com/docs/es/about-claude/use-case-guides/ticket-routing#considerar-especificamente-casos-extremos-esperados)
- [Integrar Claude en tu flujo de trabajo de soporte mayor](https://platform.claude.com/docs/es/about-claude/use-case-guides/ticket-routing#integrar-claude-en-tu-flujo-de-trabajo-de-soporte-mayor)

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
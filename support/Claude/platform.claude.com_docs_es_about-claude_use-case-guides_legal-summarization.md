---
url: "https://platform.claude.com/docs/es/about-claude/use-case-guides/legal-summarization"
title: "Resumen de documentos legales - Claude Docs"
---

[Claude Documentation Home](https://platform.claude.com/docs/es/home)

- [Guía para desarrolladores](https://platform.claude.com/docs/es/intro)
- [Referencia de API](https://platform.claude.com/docs/es/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [Recursos](https://platform.claude.com/docs/es/resources/overview)
- [Notas de la versión](https://platform.claude.com/docs/es/release-notes/overview)

Español

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fes%2Fabout-claude%2Fuse-case-guides%2Flegal-summarization)

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

Resumen legal

Casos de uso

# Resumen de documentos legales

Copy page

Esta guía te muestra cómo aprovechar las capacidades avanzadas de procesamiento de lenguaje natural de Claude para resumir eficientemente documentos legales, extrayendo información clave y acelerando la investigación legal. Con Claude, puedes optimizar la revisión de contratos, preparación de litigios y trabajo regulatorio, ahorrando tiempo y garantizando precisión en tus procesos legales.

Copy page

> Visita nuestro [libro de recetas de resumen](https://github.com/anthropics/anthropic-cookbook/blob/main/skills/summarization/guide.ipynb) para ver una implementación de ejemplo de resumen legal usando Claude.

## Antes de construir con Claude

### Decide si usar Claude para resumen de documentos legales

Aquí hay algunos indicadores clave de que deberías emplear un LLM como Claude para resumir documentos legales:

### Deseas revisar un alto volumen de documentos de manera eficiente y asequible

### Requieres extracción automatizada de metadatos clave

### Deseas generar resúmenes claros, concisos y estandarizados

### Necesitas citas precisas para tus resúmenes

### Deseas optimizar y acelerar tu proceso de investigación legal

### Determina los detalles que deseas que el resumen extraiga

No existe un único resumen correcto para ningún documento dado. Sin una dirección clara, puede ser difícil para Claude determinar qué detalles incluir. Para lograr resultados óptimos, identifica la información específica que deseas incluir en el resumen.

Por ejemplo, al resumir un acuerdo de subarrendamiento, podrías desear extraer los siguientes puntos clave:

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

### Establece criterios de éxito

Evaluar la calidad de los resúmenes es una tarea notoriamente desafiante. A diferencia de muchas otras tareas de procesamiento de lenguaje natural, la evaluación de resúmenes a menudo carece de métricas claras y objetivas. El proceso puede ser altamente subjetivo, con diferentes lectores valorando diferentes aspectos de un resumen. Aquí hay criterios que podrías desear considerar al evaluar qué tan bien Claude realiza el resumen de documentos legales.

### Corrección factual

### Precisión legal

### Concisión

### Consistencia

### Legibilidad

### Sesgo e imparcialidad

Consulta nuestra guía sobre [establecer criterios de éxito](https://platform.claude.com/docs/es/test-and-evaluate/define-success) para más información.

* * *

## Cómo resumir documentos legales usando Claude

### Selecciona el modelo Claude correcto

La precisión del modelo es extremadamente importante al resumir documentos legales. Claude Sonnet 4.5 es una excelente opción para casos de uso como este donde se requiere alta precisión. Si el tamaño y la cantidad de tus documentos es grande de tal manera que los costos comienzan a ser una preocupación, también puedes intentar usar un modelo más pequeño como Claude Haiku 4.5.

Para ayudarte a estimar estos costos, a continuación hay una comparación del costo para resumir 1,000 acuerdos de subarrendamiento usando tanto Sonnet como Haiku:

- **Tamaño del contenido**
  - Número de acuerdos: 1,000
  - Caracteres por acuerdo: 300,000
  - Total de caracteres: 300M
- **Tokens estimados**
  - Tokens de entrada: 86M (asumiendo 1 token por 3.5 caracteres)
  - Tokens de salida por resumen: 350
  - Total de tokens de salida: 350,000
- **Costo estimado de Claude Sonnet 4.5**
  - Costo de tokens de entrada: 86 MTok \* $3.00/MTok = $258
  - Costo de tokens de salida: 0.35 MTok \* $15.00/MTok = $5.25
  - Costo total: $258.00 + $5.25 = $263.25
- **Costo estimado de Claude Haiku 3**
  - Costo de tokens de entrada: 86 MTok \* $0.25/MTok = $21.50
  - Costo de tokens de salida: 0.35 MTok \* $1.25/MTok = $0.44
  - Costo total: $21.50 + $0.44 = $21.96

Los costos reales pueden diferir de estas estimaciones. Estas estimaciones se basan en el ejemplo destacado en la sección sobre [prompting](https://platform.claude.com/docs/es/about-claude/use-case-guides/legal-summarization#build-a-strong-prompt).

### Transforma documentos a un formato que Claude pueda procesar

Antes de comenzar a resumir documentos, necesitas preparar tus datos. Esto implica extraer texto de PDFs, limpiar el texto y asegurar que esté listo para ser procesado por Claude.

Aquí hay una demostración de este proceso en un PDF de muestra:

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

En este ejemplo, primero descargamos un PDF de un acuerdo de subarrendamiento de muestra utilizado en el [libro de recetas de resumen](https://github.com/anthropics/anthropic-cookbook/blob/main/skills/summarization/data/Sample%20Sublease%20Agreement.pdf). Este acuerdo fue obtenido de un acuerdo de subarrendamiento disponible públicamente del [sitio web sec.gov](https://www.sec.gov/Archives/edgar/data/1045425/000119312507044370/dex1032.htm).

Usamos la biblioteca pypdf para extraer el contenido del PDF y convertirlo a texto. Los datos de texto se limpian luego eliminando espacios en blanco adicionales y números de página.

### Construye un prompt fuerte

Claude puede adaptarse a varios estilos de resumen. Puedes cambiar los detalles del prompt para guiar a Claude a ser más o menos verboso, incluir más o menos terminología técnica, o proporcionar un resumen de nivel superior o inferior del contexto en cuestión.

Aquí hay un ejemplo de cómo crear un prompt que asegure que los resúmenes generados sigan una estructura consistente al analizar acuerdos de subarrendamiento:

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

Este código implementa una función `summarize_document` que usa Claude para resumir el contenido de un acuerdo de subarrendamiento. La función acepta una cadena de texto y una lista de detalles a extraer como entradas. En este ejemplo, llamamos a la función con las variables `document_text` y `details_to_extract` que fueron definidas en los fragmentos de código anteriores.

Dentro de la función, se genera un prompt para Claude, incluyendo el documento a ser resumido, los detalles a extraer e instrucciones específicas para resumir el documento. El prompt instruye a Claude a responder con un resumen de cada detalle a extraer anidado dentro de encabezados XML.

Debido a que decidimos generar cada sección del resumen dentro de etiquetas, cada sección puede ser fácilmente analizada como un paso de post-procesamiento. Este enfoque permite resúmenes estructurados que pueden ser adaptados para tu caso de uso, de modo que cada resumen siga el mismo patrón.

### Evalúa tu prompt

El prompting a menudo requiere pruebas y optimización para estar listo para producción. Para determinar la preparación de tu solución, evalúa la calidad de tus resúmenes usando un proceso sistemático que combine métodos cuantitativos y cualitativos. Crear una [evaluación empírica fuerte](https://platform.claude.com/docs/es/test-and-evaluate/develop-tests#building-evals-and-test-cases) basada en tus criterios de éxito definidos te permitirá optimizar tus prompts. Aquí hay algunas métricas que podrías desear incluir dentro de tu evaluación empírica:

### Puntuaciones ROUGE

### Puntuaciones BLEU

### Similitud de incrustación contextual

### Calificación basada en LLM

### Evaluación humana

### Despliega tu prompt

Aquí hay algunas consideraciones adicionales a tener en cuenta mientras despliegas tu solución a producción.

1. **Asegura que no haya responsabilidad:** Comprende las implicaciones legales de errores en los resúmenes, que podrían llevar a responsabilidad legal para tu organización o clientes. Proporciona renuncias o avisos legales aclarando que los resúmenes son generados por IA y deben ser revisados por profesionales legales.

2. **Maneja tipos de documentos diversos:** En esta guía, hemos discutido cómo extraer texto de PDFs. En el mundo real, los documentos pueden venir en una variedad de formatos (PDFs, documentos de Word, archivos de texto, etc.). Asegúrate de que tu tubería de extracción de datos pueda convertir todos los formatos de archivo que esperes recibir.

3. **Paraleliza llamadas a la API de Claude:** Los documentos largos con una gran cantidad de tokens pueden requerir hasta un minuto para que Claude genere un resumen. Para grandes colecciones de documentos, podrías desear enviar llamadas a la API de Claude en paralelo de modo que los resúmenes puedan completarse en un marco de tiempo razonable. Consulta los [límites de velocidad](https://platform.claude.com/docs/es/api/rate-limits#rate-limits) de Anthropic para determinar la cantidad máxima de llamadas a la API que pueden realizarse en paralelo.


* * *

## Mejora el rendimiento

En escenarios complejos, puede ser útil considerar estrategias adicionales para mejorar el rendimiento más allá de las [técnicas estándar de ingeniería de prompts](https://platform.claude.com/docs/es/build-with-claude/prompt-engineering/overview). Aquí hay algunas estrategias avanzadas:

### Realiza meta-resumen para resumir documentos largos

El resumen legal a menudo implica manejar documentos largos o muchos documentos relacionados a la vez, de tal manera que superes la ventana de contexto de Claude. Puedes usar un método de fragmentación conocido como meta-resumen para manejar este caso de uso. Esta técnica implica dividir documentos en fragmentos más pequeños y manejables y luego procesar cada fragmento por separado. Luego puedes combinar los resúmenes de cada fragmento para crear un meta-resumen del documento completo.

Aquí hay un ejemplo de cómo realizar meta-resumen:

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

La función `summarize_long_document` se construye sobre la función anterior `summarize_document` dividiendo el documento en fragmentos más pequeños y resumiendo cada fragmento individualmente.

El código logra esto aplicando la función `summarize_document` a cada fragmento de 20,000 caracteres dentro del documento original. Los resúmenes individuales se combinan entonces, y se crea un resumen final a partir de estos resúmenes de fragmentos.

Ten en cuenta que la función `summarize_long_document` no es estrictamente necesaria para nuestro PDF de ejemplo, ya que el documento completo cabe dentro de la ventana de contexto de Claude. Sin embargo, se vuelve esencial para documentos que exceden la ventana de contexto de Claude o cuando se resumen múltiples documentos relacionados juntos. Independientemente, esta técnica de meta-resumen a menudo captura detalles importantes adicionales en el resumen final que fueron perdidos en el enfoque de resumen único anterior.

### Usa documentos indexados por resumen para explorar una gran colección de documentos

Buscar una colección de documentos con un LLM usualmente implica generación aumentada por recuperación (RAG). Sin embargo, en escenarios que implican documentos grandes o cuando la recuperación de información precisa es crucial, un enfoque RAG básico puede ser insuficiente. Los documentos indexados por resumen es un enfoque RAG avanzado que proporciona una forma más eficiente de clasificar documentos para recuperación, usando menos contexto que los métodos RAG tradicionales. En este enfoque, primero usas Claude para generar un resumen conciso para cada documento en tu corpus, y luego usas Claude para clasificar la relevancia de cada resumen a la consulta siendo hecha. Para más detalles sobre este enfoque, incluyendo un ejemplo basado en código, consulta la sección de documentos indexados por resumen en el [libro de recetas de resumen](https://github.com/anthropics/anthropic-cookbook/blob/main/skills/summarization/guide.ipynb).

### Ajusta Claude para aprender de tu conjunto de datos

Otra técnica avanzada para mejorar la capacidad de Claude de generar resúmenes es el ajuste fino. El ajuste fino implica entrenar a Claude en un conjunto de datos personalizado que se alinee específicamente con tus necesidades de resumen legal, asegurando que Claude se adapte a tu caso de uso. Aquí hay una descripción general de cómo realizar el ajuste fino:

1. **Identifica errores:** Comienza recopilando instancias donde los resúmenes de Claude se quedan cortos - esto podría incluir detalles legales críticos faltantes, malinterpretación del contexto o uso de terminología legal inapropiada.

2. **Cura un conjunto de datos:** Una vez que hayas identificado estos problemas, compila un conjunto de datos de estos ejemplos problemáticos. Este conjunto de datos debe incluir los documentos legales originales junto con tus resúmenes corregidos, asegurando que Claude aprenda el comportamiento deseado.

3. **Realiza ajuste fino:** El ajuste fino implica reentrenar el modelo en tu conjunto de datos curado para ajustar sus pesos y parámetros. Este reentrenamiento ayuda a Claude a entender mejor los requisitos específicos de tu dominio legal, mejorando su capacidad de resumir documentos de acuerdo con tus estándares.

4. **Mejora iterativa:** El ajuste fino no es un proceso único. A medida que Claude continúa generando resúmenes, puedes iterativamente agregar nuevos ejemplos donde ha tenido un desempeño inferior, refinando aún más sus capacidades. Con el tiempo, este ciclo de retroalimentación continuo resultará en un modelo que es altamente especializado para tus tareas de resumen legal.


El ajuste fino actualmente solo está disponible a través de Amazon Bedrock. Detalles adicionales están disponibles en el [blog de lanzamiento de AWS](https://aws.amazon.com/blogs/machine-learning/fine-tune-anthropics-claude-3-haiku-in-amazon-bedrock-to-boost-model-accuracy-and-quality/).

[Libro de recetas de resumen\\
\\
Ver un ejemplo completamente implementado basado en código de cómo usar Claude para resumir contratos.](https://github.com/anthropics/anthropic-cookbook/blob/main/skills/summarization/guide.ipynb) [Libro de recetas de citas\\
\\
Explora nuestro libro de recetas de citas para orientación sobre cómo garantizar la precisión y explicabilidad de la información.](https://github.com/anthropics/anthropic-cookbook/blob/main/misc/using_citations.ipynb)

- [Antes de construir con Claude](https://platform.claude.com/docs/es/about-claude/use-case-guides/legal-summarization#antes-de-construir-con-claude)
- [Decide si usar Claude para resumen de documentos legales](https://platform.claude.com/docs/es/about-claude/use-case-guides/legal-summarization#decide-si-usar-claude-para-resumen-de-documentos-legales)
- [Determina los detalles que deseas que el resumen extraiga](https://platform.claude.com/docs/es/about-claude/use-case-guides/legal-summarization#determina-los-detalles-que-deseas-que-el-resumen-extraiga)
- [Establece criterios de éxito](https://platform.claude.com/docs/es/about-claude/use-case-guides/legal-summarization#establece-criterios-de-exito)
- [Cómo resumir documentos legales usando Claude](https://platform.claude.com/docs/es/about-claude/use-case-guides/legal-summarization#como-resumir-documentos-legales-usando-claude)
- [Selecciona el modelo Claude correcto](https://platform.claude.com/docs/es/about-claude/use-case-guides/legal-summarization#selecciona-el-modelo-claude-correcto)
- [Transforma documentos a un formato que Claude pueda procesar](https://platform.claude.com/docs/es/about-claude/use-case-guides/legal-summarization#transforma-documentos-a-un-formato-que-claude-pueda-procesar)
- [Construye un prompt fuerte](https://platform.claude.com/docs/es/about-claude/use-case-guides/legal-summarization#construye-un-prompt-fuerte)
- [Evalúa tu prompt](https://platform.claude.com/docs/es/about-claude/use-case-guides/legal-summarization#evalua-tu-prompt)
- [Despliega tu prompt](https://platform.claude.com/docs/es/about-claude/use-case-guides/legal-summarization#despliega-tu-prompt)
- [Mejora el rendimiento](https://platform.claude.com/docs/es/about-claude/use-case-guides/legal-summarization#mejora-el-rendimiento)
- [Realiza meta-resumen para resumir documentos largos](https://platform.claude.com/docs/es/about-claude/use-case-guides/legal-summarization#realiza-meta-resumen-para-resumir-documentos-largos)
- [Usa documentos indexados por resumen para explorar una gran colección de documentos](https://platform.claude.com/docs/es/about-claude/use-case-guides/legal-summarization#usa-documentos-indexados-por-resumen-para-explorar-una-gran-coleccion-de-documentos)
- [Ajusta Claude para aprender de tu conjunto de datos](https://platform.claude.com/docs/es/about-claude/use-case-guides/legal-summarization#ajusta-claude-para-aprender-de-tu-conjunto-de-datos)

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
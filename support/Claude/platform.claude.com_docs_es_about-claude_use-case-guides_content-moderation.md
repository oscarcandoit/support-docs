---
url: "https://platform.claude.com/docs/es/about-claude/use-case-guides/content-moderation"
title: "Moderación de contenido - Claude Docs"
---

[Claude Documentation Home](https://platform.claude.com/docs/es/home)

- [Guía para desarrolladores](https://platform.claude.com/docs/es/intro)
- [Referencia de API](https://platform.claude.com/docs/es/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [Recursos](https://platform.claude.com/docs/es/resources/overview)
- [Notas de la versión](https://platform.claude.com/docs/es/release-notes/overview)

Español

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fes%2Fabout-claude%2Fuse-case-guides%2Fcontent-moderation)

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

Moderación de contenido

Casos de uso

# Moderación de contenido

Copy page

La moderación de contenido es un aspecto crítico para mantener un entorno seguro, respetuoso y productivo en las aplicaciones digitales. En esta guía, discutiremos cómo Claude puede ser utilizado para moderar contenido dentro de tu aplicación digital.

Copy page

> Visita nuestro [libro de recetas de moderación de contenido](https://github.com/anthropics/anthropic-cookbook/blob/main/misc/building%5Fmoderation%5Ffilter.ipynb) para ver un ejemplo de implementación de moderación de contenido usando Claude.

Esta guía se enfoca en moderar contenido generado por usuarios dentro de tu aplicación. Si buscas orientación sobre moderar interacciones con Claude, por favor consulta nuestra [guía de barreras de protección](https://platform.claude.com/docs/es/test-and-evaluate/strengthen-guardrails/reduce-hallucinations).

## Antes de construir con Claude

### Decide si usar Claude para moderación de contenido

Aquí hay algunos indicadores clave de que deberías usar un LLM como Claude en lugar de un enfoque tradicional de ML o basado en reglas para moderación de contenido:

### Quieres una implementación rentable y rápida

### Deseas tanto comprensión semántica como decisiones rápidas

### Necesitas decisiones de política consistentes

### Tus políticas de moderación probablemente cambiarán o evolucionarán con el tiempo

### Requieres razonamiento interpretable para tus decisiones de moderación

### Necesitas soporte multilingüe sin mantener modelos separados

### Requieres soporte multimodal

Anthropic ha entrenado todos los modelos Claude para ser honestos, útiles e inofensivos. Esto puede resultar en que Claude modere contenido considerado particularmente peligroso (en línea con nuestra [Política de Uso Aceptable](https://www.anthropic.com/legal/aup)), independientemente del prompt utilizado. Por ejemplo, un sitio web para adultos que quiere permitir a los usuarios publicar contenido sexual explícito puede encontrar que Claude aún marca el contenido explícito como que requiere moderación, incluso si especifican en su prompt no moderar contenido sexual explícito. Recomendamos revisar nuestra AUP antes de construir una solución de moderación.

### Genera ejemplos de contenido para moderar

Antes de desarrollar una solución de moderación de contenido, primero crea ejemplos de contenido que debería ser marcado y contenido que no debería ser marcado. Asegúrate de incluir casos límite y escenarios desafiantes que pueden ser difíciles para un sistema de moderación de contenido manejar efectivamente. Después, revisa tus ejemplos para crear una lista bien definida de categorías de moderación.
Por ejemplo, los ejemplos generados por una plataforma de redes sociales podrían incluir lo siguiente:

```
allowed_user_comments = [\
    'Esta película fue genial, realmente la disfruté. ¡El actor principal realmente la rompió!',\
    'Odio los lunes.',\
    '¡Es un gran momento para invertir en oro!'\
]

disallowed_user_comments = [\
    'Elimina esta publicación ahora o mejor escóndete. Voy tras ti y tu familia.',\
    '¡¡Mantente alejado de los teléfonos celulares 5G!! Están usando 5G para controlarte.',\
    '¡Felicidades! Has ganado una tarjeta de regalo de $1,000. ¡Haz clic aquí para reclamar tu premio!'\
]

# Comentarios de usuario de muestra para probar la moderación de contenido
user_comments = allowed_user_comments + disallowed_user_comments

# Lista de categorías consideradas inseguras para moderación de contenido
unsafe_categories = [\
    'Explotación Infantil',\
    'Teorías Conspirativas',\
    'Odio',\
    'Armas Indiscriminadas',\
    'Propiedad Intelectual',\
    'Crímenes No Violentos',\
    'Privacidad',\
    'Autolesión',\
    'Crímenes Sexuales',\
    'Contenido Sexual',\
    'Asesoramiento Especializado',\
    'Crímenes Violentos'\
]
```

Moderar efectivamente estos ejemplos requiere una comprensión matizada del lenguaje. En el comentario, `Esta película fue genial, realmente la disfruté. ¡El actor principal realmente la rompió!`, el sistema de moderación de contenido necesita reconocer que "la rompió" es una metáfora, no una indicación de violencia real. Por el contrario, a pesar de la falta de menciones explícitas de violencia, el comentario `Elimina esta publicación ahora o mejor escóndete. Voy tras ti y tu familia.` debería ser marcado por el sistema de moderación de contenido.

La lista `unsafe_categories` puede ser personalizada para ajustarse a tus necesidades específicas. Por ejemplo, si deseas prevenir que menores creen contenido en tu sitio web, podrías agregar "Publicación de Menores" a la lista.

* * *

## Cómo moderar contenido usando Claude

### Selecciona el modelo Claude correcto

Al seleccionar un modelo, es importante considerar el tamaño de tus datos. Si los costos son una preocupación, un modelo más pequeño como Claude Haiku 3 es una excelente opción debido a su rentabilidad. A continuación hay una estimación del costo para moderar texto para una plataforma de redes sociales que recibe mil millones de publicaciones por mes:

- **Tamaño del contenido**
  - Publicaciones por mes: 1 mil millones
  - Caracteres por publicación: 100
  - Total de caracteres: 100 mil millones
- **Tokens estimados**
  - Tokens de entrada: 28.6 mil millones (asumiendo 1 token por 3.5 caracteres)
  - Porcentaje de mensajes marcados: 3%
  - Tokens de salida por mensaje marcado: 50
  - Total de tokens de salida: 1.5 mil millones
- **Costo estimado de Claude Haiku 3**
  - Costo de tokens de entrada: 2,860 MTok \* $0.25/MTok = $715
  - Costo de tokens de salida: 1,500 MTok \* $1.25/MTok = $1,875
  - Costo mensual: $715 + $1,875 = $2,590
- **Costo estimado de Claude Sonnet 4.5**
  - Costo de tokens de entrada: 2,860 MTok \* $3.00/MTok = $8,580
  - Costo de tokens de salida: 1,500 MTok \* $15.00/MTok = $22,500
  - Costo mensual: $8,580 + $22,500 = $31,080

Los costos reales pueden diferir de estas estimaciones. Estas estimaciones se basan en el prompt destacado en la sección sobre [procesamiento por lotes](https://platform.claude.com/docs/es/about-claude/use-case-guides/content-moderation#considera-el-procesamiento-por-lotes). Los tokens de salida pueden reducirse aún más eliminando el campo `explanation` de la respuesta.

### Construye un prompt sólido

Para usar Claude para moderación de contenido, Claude debe entender los requisitos de moderación de tu aplicación. Comencemos escribiendo un prompt que te permita definir tus necesidades de moderación:

```
import anthropic
import json

# Inicializar el cliente de Anthropic
client = anthropic.Anthropic()

def moderate_message(message, unsafe_categories):
    # Convertir la lista de categorías inseguras en una cadena, con cada categoría en una nueva línea
    unsafe_category_str = '\n'.join(unsafe_categories)

    # Construir el prompt para Claude, incluyendo el mensaje y las categorías inseguras
    assessment_prompt = f"""
    Determina si el siguiente mensaje amerita moderación,
    basado en las categorías inseguras descritas a continuación.

    Mensaje:
    <message>{message}</message>

    Categorías Inseguras:
    <categories>
    {unsafe_category_str}
    </categories>

    Responde SOLO con un objeto JSON, usando el formato a continuación:
    {{
    "violation": <Campo booleano que denota si el mensaje debe ser moderado>,
    "categories": [Lista separada por comas de categorías violadas],
    "explanation": [Opcional. Solo incluir si hay una violación.]
    }}"""

    # Enviar la solicitud a Claude para moderación de contenido
    response = client.messages.create(
        model="claude-3-haiku-20240307",  # Usando el modelo Haiku para costos más bajos
        max_tokens=200,
        temperature=0,   # Usar temperatura 0 para mayor consistencia
        messages=[\
            {"role": "user", "content": assessment_prompt}\
        ]
    )

    # Analizar la respuesta JSON de Claude
    assessment = json.loads(response.content[0].text)

    # Extraer el estado de violación de la evaluación
    contains_violation = assessment['violation']

    # Si hay una violación, obtener las categorías y explicación; de lo contrario, usar valores predeterminados vacíos
    violated_categories = assessment.get('categories', []) if contains_violation else []
    explanation = assessment.get('explanation') if contains_violation else None

    return contains_violation, violated_categories, explanation

# Procesar cada comentario e imprimir los resultados
for comment in user_comments:
    print(f"\nComentario: {comment}")
    violation, violated_categories, explanation = moderate_message(comment, unsafe_categories)

    if violation:
        print(f"Categorías Violadas: {', '.join(violated_categories)}")
        print(f"Explicación: {explanation}")
    else:
        print("No se detectaron problemas.")
```

En este ejemplo, la función `moderate_message` contiene un prompt de evaluación que incluye las categorías de contenido inseguro y el mensaje que deseamos evaluar. El prompt le pide a Claude que evalúe si el mensaje debe ser moderado, basado en las categorías inseguras que definimos.

La evaluación del modelo se analiza luego para determinar si hay una violación. Si hay una violación, Claude también devuelve una lista de categorías violadas, así como una explicación de por qué el mensaje es inseguro.

### Evalúa tu prompt

La moderación de contenido es un problema de clasificación. Por lo tanto, puedes usar las mismas técnicas descritas en nuestro [libro de recetas de clasificación](https://github.com/anthropics/anthropic-cookbook/blob/main/skills/classification/guide.ipynb) para determinar la precisión de tu sistema de moderación de contenido.

Una consideración adicional es que en lugar de tratar la moderación de contenido como un problema de clasificación binaria, puedes crear múltiples categorías para representar varios niveles de riesgo. Crear múltiples niveles de riesgo te permite ajustar la agresividad de tu moderación. Por ejemplo, podrías querer bloquear automáticamente consultas de usuario que se consideren de alto riesgo, mientras que los usuarios con muchas consultas de riesgo medio son marcados para revisión humana.

```
import anthropic
import json

# Inicializar el cliente de Anthropic
client = anthropic.Anthropic()

def assess_risk_level(message, unsafe_categories):
    # Convertir la lista de categorías inseguras en una cadena, con cada categoría en una nueva línea
    unsafe_category_str = '\n'.join(unsafe_categories)

    # Construir el prompt para Claude, incluyendo el mensaje, categorías inseguras y definiciones de nivel de riesgo
    assessment_prompt = f"""
    Evalúa el nivel de riesgo del siguiente mensaje que amerita moderación,
    basado en las categorías inseguras listadas a continuación.

Mensaje:
<message>{message}</message>

Categorías Inseguras:
<categories>
{unsafe_category_str}
</categories>

Asigna un nivel de riesgo basado en tu confianza de que el mensaje del usuario debe ser moderado
basado en las categorías inseguras definidas:

0 - Sin riesgo
1 - Riesgo bajo
2 - Riesgo medio
3 - Riesgo alto

Responde SOLO con un objeto JSON, usando el formato a continuación:
{{
  "risk_level": <Campo numérico que denota el nivel de riesgo>,
  "categories": [Lista separada por comas de categorías violadas],
  "explanation": <Opcional. Solo incluir si el nivel de riesgo es mayor que 0>
}}"""

    # Enviar la solicitud a Claude para evaluación de riesgo
    response = client.messages.create(
        model="claude-3-haiku-20240307",  # Usando el modelo Haiku para costos más bajos
        max_tokens=200,
        temperature=0,   # Usar temperatura 0 para mayor consistencia
        messages=[\
            {"role": "user", "content": assessment_prompt}\
        ]
    )

    # Analizar la respuesta JSON de Claude
    assessment = json.loads(response.content[0].text)

    # Extraer el nivel de riesgo, categorías violadas y explicación de la evaluación
    risk_level = assessment["risk_level"]
    violated_categories = assessment["categories"]
    explanation = assessment.get("explanation")

    return risk_level, violated_categories, explanation

# Procesar cada comentario e imprimir los resultados
for comment in user_comments:
    print(f"\nComentario: {comment}")
    risk_level, violated_categories, explanation = assess_risk_level(comment, unsafe_categories)

    print(f"Nivel de Riesgo: {risk_level}")
    if violated_categories:
        print(f"Categorías Violadas: {', '.join(violated_categories)}")
    if explanation:
        print(f"Explicación: {explanation}")
```

Este código implementa una función `assess_risk_level` que usa Claude para evaluar el nivel de riesgo de un mensaje. La función acepta un mensaje y una lista de categorías inseguras como entradas.

Dentro de la función, se genera un prompt para Claude, incluyendo el mensaje a ser evaluado, las categorías inseguras y instrucciones específicas para evaluar el nivel de riesgo. El prompt instruye a Claude a responder con un objeto JSON que incluye el nivel de riesgo, las categorías violadas y una explicación opcional.

Este enfoque permite moderación de contenido flexible asignando niveles de riesgo. Puede integrarse sin problemas en un sistema más grande para automatizar el filtrado de contenido o marcar comentarios para revisión humana basado en su nivel de riesgo evaluado. Por ejemplo, al ejecutar este código, el comentario `Elimina esta publicación ahora o mejor escóndete. Voy tras ti y tu familia.` se identifica como de alto riesgo debido a su amenaza peligrosa. Por el contrario, el comentario `¡¡Mantente alejado de los teléfonos celulares 5G!! Están usando 5G para controlarte.` se categoriza como de riesgo medio.

### Despliega tu prompt

Una vez que tengas confianza en la calidad de tu solución, es hora de desplegarla a producción. Aquí hay algunas mejores prácticas a seguir cuando uses moderación de contenido en producción:

1. **Proporciona retroalimentación clara a los usuarios:** Cuando la entrada del usuario es bloqueada o una respuesta es marcada debido a moderación de contenido, proporciona retroalimentación informativa y constructiva para ayudar a los usuarios a entender por qué su mensaje fue marcado y cómo pueden reformularlo apropiadamente. En los ejemplos de código anteriores, esto se hace a través de la etiqueta `explanation` en la respuesta de Claude.

2. **Analiza el contenido moderado:** Mantén un registro de los tipos de contenido siendo marcados por tu sistema de moderación para identificar tendencias y áreas potenciales de mejora.

3. **Evalúa y mejora continuamente:** Evalúa regularmente el rendimiento de tu sistema de moderación de contenido usando métricas como seguimiento de precisión y recuperación. Usa estos datos para refinar iterativamente tus prompts de moderación, palabras clave y criterios de evaluación.


* * *

## Mejora el rendimiento

En escenarios complejos, puede ser útil considerar estrategias adicionales para mejorar el rendimiento más allá de las [técnicas estándar de ingeniería de prompts](https://platform.claude.com/docs/es/build-with-claude/prompt-engineering/overview). Aquí hay algunas estrategias avanzadas:

### Define temas y proporciona ejemplos

Además de listar las categorías inseguras en el prompt, se pueden hacer mejoras adicionales proporcionando definiciones y frases relacionadas con cada categoría.

```
import anthropic
import json

# Inicializar el cliente de Anthropic
client = anthropic.Anthropic()

# Diccionario de categorías consideradas inseguras para moderación de contenido, con sus definiciones
unsafe_category_definitions = {
    'Explotación Infantil': 'Contenido que representa desnudez infantil o que permite, fomenta, excusa o representa el abuso sexual de niños.',
    'Teorías Conspirativas': """Contenido que promueve o respalda teorías infundadas, falsas o engañosas sobre eventos, situaciones o individuos,
        que pueden incitar daño o socavar la confianza pública en instituciones o hechos.""",
    'Odio': """Contenido que es odioso hacia las personas basado en sus características protegidas
        (raza, color, etnia, origen nacional, discapacidad, afiliación religiosa, casta, orientación sexual, sexo, identidad de género y enfermedad grave),
        o contenido que perpetúa estereotipos negativos.""",
    'Armas Indiscriminadas': 'Contenido que permite la creación de armas de destrucción masiva.',
    'Propiedad Intelectual': 'Contenido que viola los derechos de propiedad intelectual de terceros.',
    'Crímenes No Violentos': 'Contenido que permite, fomenta o excusa la comisión de crímenes no violentos.',
    'Privacidad': 'Contenido que contiene información sensible y personal sobre individuos privados.',
    'Autolesión': 'Contenido que permite, fomenta o excusa actos de autolesión intencional.',
    'Crímenes Sexuales': 'Contenido que permite, fomenta o excusa la comisión de crímenes sexuales.',
    'Contenido Sexual': 'Contenido que contiene descripciones eróticas o representaciones explícitas de actos sexuales.',
    'Asesoramiento Especializado': """Contenido que contiene asesoramiento financiero, médico o legal.
        El asesoramiento financiero incluye orientación sobre inversiones, acciones, bonos o cualquier planificación financiera.""",
    'Crímenes Violentos': 'Contenido que permite, fomenta o excusa la comisión de crímenes violentos.',
}

def moderate_message_with_definitions(message, unsafe_category_definitions):
    # Formatear cadena de categorías inseguras, con cada categoría y su definición en una nueva línea
    unsafe_category_str = '\n'.join(f'{category}: {definition}'
        for category, definition in unsafe_category_definitions.items()
    )

    # Construir el prompt para Claude, incluyendo el mensaje y las categorías inseguras
    assessment_prompt = f"""Determina si el siguiente mensaje amerita moderación, basado en las categorías inseguras descritas a continuación.

Mensaje:
<message>{message}</message>

Categorías Inseguras y Sus Definiciones:
<categories>
{unsafe_category_str}
</categories>

Es importante que recuerdes todas las categorías inseguras y sus definiciones.

Responde SOLO con un objeto JSON, usando el formato a continuación:
{{
  "violation": <Campo booleano que denota si el mensaje debe ser moderado>,
  "categories": [Lista separada por comas de categorías violadas],
  "explanation": [Opcional. Solo incluir si hay una violación.]
}}"""

    # Enviar la solicitud a Claude para moderación de contenido
    response = client.messages.create(
        model="claude-3-haiku-20240307",  # Usando el modelo Haiku para costos más bajos
        max_tokens=200,
        temperature=0,   # Usar temperatura 0 para mayor consistencia
        messages=[\
            {"role": "user", "content": assessment_prompt}\
        ]
    )

    # Analizar la respuesta JSON de Claude
    assessment = json.loads(response.content[0].text)

    # Extraer el estado de violación de la evaluación
    contains_violation = assessment['violation']

    # Si hay una violación, obtener las categorías y explicación; de lo contrario, usar valores predeterminados vacíos
    violated_categories = assessment.get('categories', []) if contains_violation else []
    explanation = assessment.get('explanation') if contains_violation else None

    return contains_violation, violated_categories, explanation

# Procesar cada comentario e imprimir los resultados
for comment in user_comments:
    print(f"\nComentario: {comment}")
    violation, violated_categories, explanation = moderate_message_with_definitions(comment, unsafe_category_definitions)

    if violation:
        print(f"Categorías Violadas: {', '.join(violated_categories)}")
        print(f"Explicación: {explanation}")
    else:
        print("No se detectaron problemas.")
```

La función `moderate_message_with_definitions` expande la función anterior `moderate_message` permitiendo que cada categoría insegura sea emparejada con una definición detallada. Esto ocurre en el código reemplazando la lista `unsafe_categories` de la función original con un diccionario `unsafe_category_definitions`. Este diccionario mapea cada categoría insegura a su definición correspondiente. Tanto los nombres de las categorías como sus definiciones se incluyen en el prompt.

Notablemente, la definición para la categoría `Asesoramiento Especializado` ahora especifica los tipos de asesoramiento financiero que deberían ser prohibidos. Como resultado, el comentario `¡Es un gran momento para invertir en oro!`, que previamente pasó la evaluación `moderate_message`, ahora desencadena una violación.

### Considera el procesamiento por lotes

Para reducir costos en situaciones donde la moderación en tiempo real no es necesaria, considera moderar mensajes en lotes. Incluye múltiples mensajes dentro del contexto del prompt, y pide a Claude que evalúe qué mensajes deben ser moderados.

```
import anthropic
import json

# Inicializar el cliente de Anthropic
client = anthropic.Anthropic()

def batch_moderate_messages(messages, unsafe_categories):
    # Convertir la lista de categorías inseguras en una cadena, con cada categoría en una nueva línea
    unsafe_category_str = '\n'.join(unsafe_categories)

    # Formatear cadena de mensajes, con cada mensaje envuelto en etiquetas tipo XML y dado un ID
    messages_str = '\n'.join([f'<message id={idx}>{msg}</message>' for idx, msg in enumerate(messages)])

    # Construir el prompt para Claude, incluyendo los mensajes y las categorías inseguras
    assessment_prompt = f"""Determina los mensajes a moderar, basado en las categorías inseguras descritas a continuación.

Mensajes:
<messages>
{messages_str}
</messages>

Categorías inseguras y sus definiciones:
<categories>
{unsafe_category_str}
</categories>

Responde SOLO con un objeto JSON, usando el formato a continuación:
{{
  "violations": [\
    {{\
      "id": <id del mensaje>,\
      "categories": [lista de categorías violadas],\
      "explanation": <Explicación de por qué hay una violación>\
    }},\
    ...\
  ]
}}

Notas Importantes:
- Recuerda analizar cada mensaje para una violación.
- Selecciona cualquier número de violaciones que apliquen razonablemente."""

    # Enviar la solicitud a Claude para moderación de contenido
    response = client.messages.create(
        model="claude-3-haiku-20240307",  # Usando el modelo Haiku para costos más bajos
        max_tokens=2048,  # Aumentar el conteo máximo de tokens para manejar lotes
        temperature=0,    # Usar temperatura 0 para mayor consistencia
        messages=[\
            {"role": "user", "content": assessment_prompt}\
        ]
    )

    # Analizar la respuesta JSON de Claude
    assessment = json.loads(response.content[0].text)
    return assessment

# Procesar el lote de comentarios y obtener la respuesta
response_obj = batch_moderate_messages(user_comments, unsafe_categories)

# Imprimir los resultados para cada violación detectada
for violation in response_obj['violations']:
    print(f"""Comentario: {user_comments[violation['id']]}
Categorías Violadas: {', '.join(violation['categories'])}
Explicación: {violation['explanation']}
""")
```

En este ejemplo, la función `batch_moderate_messages` maneja la moderación de un lote completo de mensajes con una sola llamada a la API de Claude.
Dentro de la función, se crea un prompt que incluye la lista de mensajes a evaluar, las categorías de contenido inseguro definidas y sus descripciones. El prompt dirige a Claude a devolver un objeto JSON listando todos los mensajes que contienen violaciones. Cada mensaje en la respuesta se identifica por su id, que corresponde a la posición del mensaje en la lista de entrada.
Ten en cuenta que encontrar el tamaño de lote óptimo para tus necesidades específicas puede requerir algo de experimentación. Mientras que tamaños de lote más grandes pueden reducir costos, también podrían llevar a una ligera disminución en la calidad. Además, podrías necesitar aumentar el parámetro `max_tokens` en la llamada a la API de Claude para acomodar respuestas más largas. Para detalles sobre el número máximo de tokens que tu modelo elegido puede generar, consulta la [página de comparación de modelos](https://platform.claude.com/docs/es/about-claude/models#model-comparison-table).

[Libro de recetas de moderación de contenido\\
\\
Ve un ejemplo completamente implementado basado en código de cómo usar Claude para moderación de contenido.](https://github.com/anthropics/anthropic-cookbook/blob/main/misc/building%5Fmoderation%5Ffilter.ipynb) [Guía de barreras de protección\\
\\
Explora nuestra guía de barreras de protección para técnicas para moderar interacciones con Claude.](https://platform.claude.com/docs/es/test-and-evaluate/strengthen-guardrails/reduce-hallucinations)

- [Antes de construir con Claude](https://platform.claude.com/docs/es/about-claude/use-case-guides/content-moderation#antes-de-construir-con-claude)
- [Decide si usar Claude para moderación de contenido](https://platform.claude.com/docs/es/about-claude/use-case-guides/content-moderation#decide-si-usar-claude-para-moderacion-de-contenido)
- [Genera ejemplos de contenido para moderar](https://platform.claude.com/docs/es/about-claude/use-case-guides/content-moderation#genera-ejemplos-de-contenido-para-moderar)
- [Cómo moderar contenido usando Claude](https://platform.claude.com/docs/es/about-claude/use-case-guides/content-moderation#como-moderar-contenido-usando-claude)
- [Selecciona el modelo Claude correcto](https://platform.claude.com/docs/es/about-claude/use-case-guides/content-moderation#selecciona-el-modelo-claude-correcto)
- [Construye un prompt sólido](https://platform.claude.com/docs/es/about-claude/use-case-guides/content-moderation#construye-un-prompt-solido)
- [Evalúa tu prompt](https://platform.claude.com/docs/es/about-claude/use-case-guides/content-moderation#evalua-tu-prompt)
- [Despliega tu prompt](https://platform.claude.com/docs/es/about-claude/use-case-guides/content-moderation#despliega-tu-prompt)
- [Mejora el rendimiento](https://platform.claude.com/docs/es/about-claude/use-case-guides/content-moderation#mejora-el-rendimiento)
- [Define temas y proporciona ejemplos](https://platform.claude.com/docs/es/about-claude/use-case-guides/content-moderation#define-temas-y-proporciona-ejemplos)
- [Considera el procesamiento por lotes](https://platform.claude.com/docs/es/about-claude/use-case-guides/content-moderation#considera-el-procesamiento-por-lotes)

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
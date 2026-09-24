1. ¿Cuándo usarías flexbox y cuándo grid? Da un criterio que puedas aplicar sin pensarlo mucho.

Usaría flexbox cuando quiero alinear elementos en una sola fila o columna, por ejemplo un menú Y saría grid cuando quiero crear una estructura con varias columnas y filas, como una galería de productos 


2. En un contenedor flex, ¿qué hace justify-content y qué hace align-items? ¿Qué pasa si le pones flex-direction: column?

 en justify Si el contenedor está en fila, mueve los elementos horizontalmente Y si está en columna, los mueve verticalmente.

align-items  es lo mismo pero al revez si esta en fila los mueve vertical y en columna horizontal

 

3. ¿Qué diferencia hay entre gap y usar margin entre los elementos?

gap crea espacio entre los elementos sin afectar el tamaño del contenido y margin agrega espacio fuera del elemento,



4. 1fr en grid, ¿qué significa exactamente? ¿En qué se diferencia de 33%?

1fr significa una fracción del espacio disponible En un grid, si hay 3 columnas con 1fr cada una, cada una recibe el mismo espacio sobrante.

33% significa un tercio del ancho del contenedor fijo, sin importar si hay espacio extra o si el contenedor cambia. 

 5, ¿qué combinación has usado y por qué funciona?

He usado la combinación de grid para el contenedor principal y flexbox dentro de cada card.  flexbox lo puse en la card ayuda a alinear la imagen, el texto y el botón verticalmente.



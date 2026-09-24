Y ahora piénsalo con Tailwind

Tailwind ya incluye un reset propio, llamado Preflight.

Busca qué hace Preflight exactamente (quita los márgenes por defecto, iguala los tamaños de los títulos, hace que las imágenes sean block, etc.).
Compara tu reset con Preflight: ¿qué cosas tuyas ya están cubiertas y cuáles no?
 lo unico que. incluye es el margen , listas , imagenes tipo bloque, por ejemplo los bordes no los incluye, los titulos no los trae por tamalño y linea visible en un boton


Quédate con lo que sigue haciendo falta añadir a mano en un proyecto con Tailwind (por ejemplo: scroll-behavior, la tipografía base, text-wrap, o los estilos de foco).

font-family
text-wrap

1. ¿Por qué los navegadores traen estilos por defecto y por qué molestan?

por si no le pones css o se te pasa algo, el usuario lo  pueda leer basicamente y entender, es molesto porque a veses la pagina se adapta al navegador entonces si tu pusiste un tamaño de letra por defecto de el navegador te lo da de diferente manera

2. Si Tailwind ya trae Preflight, ¿para qué sirve saber hacer un reset a mano?
Porque no siempre voy  a usar Tailwind , me pueden pedir un css y puedo saber que esas cosas puede pasar y aparte para identificar que cambios puede hacer cada navegador o que traen por defecto 

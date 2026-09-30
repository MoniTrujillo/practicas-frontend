Cuestionario teórico final

Responde a las siguientes preguntas. Se necesita mínimo un 7 para aprobar.

Respuestas cortas: con dos o tres frases bien explicadas es suficiente. Se valora más que entiendas el concepto que que copies la definición.

HTML y accesibilidad

¿Qué diferencia hay entre <div> y <section>? ¿Cuándo usarías cada uno?
 que section sirve para cuando quiero poner algo importante y es una seccion grande por ejemplo la seccion de contacto en cambio div sirve como para algun estilo o algo asi, pues si es algo basico y sin importancia usaria div y section cuando algo tiene mas importancia y tiene varias cosas adentro aparte de que creo que es más ordenado y entendible 

Tienes un botón que sólo contiene un icono SVG. ¿Qué le falta para que sea accesible y por qué?
ponerle alguna descripción, porque a lo mejor quien ve tu pagina no puede ver o sea es ciego entonces con eso de el lector o la herramienta que lee para ellos les dice y asi es facil que sea más accesible 

¿Para qué sirve el atributo for de un <label>?
para cuando quieres poner algo que se marque o sea como en una casilla se marque una palomita de que aceptas algo entonces solo con darle en el nombre se marca 

Estilos y Tailwind

¿Qué son las custom properties de CSS y qué ventaja tienen sobre repetir el valor?
son etiquetas que uno le pone un valor para no estarlo repitiendo, la ventaja es que el momento digamos de que quieras cambiar una cosa de color pues solo la cambias ahi y no tienes que estar buscando en los codigos todos los lugares donde hay que cambiarla 

En Tailwind, ¿qué diferencia hay entre theme y theme.extend en la configuración?
pues que en theme si le dices que quieres usar tal color solo se queda con ese y olvida que hay mas colores y en cambio en theme.extend se acuerda que hay más colores pero que solo vas a estar usando ese

md:flex-row ¿se aplica sólo en tablet? Explica qué significa que Tailwind sea mobile-first.
no, segun yo se puede aplicar en todo solo es como para decir de aqui de este tamaño en adelante  y es mobile first porque taiwind esta diseñado principalmente para celulares entonces automaticamente si no le dices lo crea a tamaño del telefono, al igual es porque toda la gente tiene telefonos más que otro dispositivo 

¿Por qué :class="text-${color}-500" no funciona en Tailwind?
porque ocupas ponerle el nombre del color, ahi no estas diciendole el color 

¿Por qué es mejor extraer un componente que usar @apply?
porque apply solo trae diseño css basico no trae como tal una logica en cambio un componente trae la logia y el diseño o sea que es mas practico 

JavaScript

Diferencias entre var, let y const. ¿Cuál usas por defecto y por qué?
var y let son variables eso quiere decir que su valor puede cambiar, el tema es que var no es muy seguro a comparacion de let, var fue la primera en usar, pero venia con defectos entonces por eso crearon let y cons es una constante es cuando sabemos que un valor no va a cambiar , entonces la que usaria por defecto seria let porque usualmente los valores van cambiando a excepcion si ya se que un valor no va a cambiar pues uso const, pero nunca var


¿Cuáles son los valores falsy de JavaScript?
null,0 undefined,-0 y false


¿Qué diferencia hay entre || y ??? Pon un caso en el que dan resultados distintos.
A lo que entiendo este || es que siempre debe de tener un valor o bueno busca un valor y el otro respeta si no tienes nada, o sea por ejmplo si yo en un hotel pongo un letrero en el que diga que hay 50 lugares cuando este vacio el hotel entonces || este siempre va a poner 50 lugares si el letrero esta vacion, pero el problema es que si esta lleno ya el hotel y el ve que no hay nada en el letrero lo va a poner porque esta vacio y el otro ve que esta vacio pero es porque esta lleno no cambia el valor y no pone los 50 lugare como el otro. 

¿Qué diferencia hay entre map y forEach?
que map toma lo que tienes, no se una lista y te devuelve una nueva lista, o sea no remplaza nada de lo tuyo y con forEach toma tu lista ahi lo modifica
 

¿Qué devuelve find si no encuentra nada? ¿Y filter?
que si find no encuaantra lo que busca te devuelve un undefined 

¿Qué hace el optional chaining (?.) y qué problema te ahorra?

a lo que entiendo busca un valor dentro de algo y si no hay pues se detiene, o sea lo que soluciona es que si no usaramos eso y no existiera un valor el codigo se rompia y con eso pues si ve que no hay un valor se detiene no intenta encontrar algo que no esta y sigue funcionando el programa y en el otro si se congela.

¿Qué es el hoisting?
Es lo que mueve de lugar las cosas es decir que si yo primero pongo el cnsol log y luego declaro una varible cuando el programa lo lee en vez de que me de error el programa pasa arriba la variable y luego el consol log de manera interna entonces sirve para que te de como ese error 



TypeScript

¿Para qué sirve TypeScript? ¿Qué te aporta si el código ya funcionaba en JavaScript?
me aporta seguridad y que me equivoque menos, sirve para lo mismo pero es mas estricto, trae ya clases o nombres ya predefinidos, que te ayudan a agilizar y a estricto es que en javascript se permite todo y al pasar eso pues puede ser que algo de error despues en cambio typescript no lo permite por ejemplo si quieres cambiar luego de un string a un number en java si lo permitiria pero en ts no te dice que ese valor que quieres cambiar debe de ser string 

¿Por qué unknown es más seguro que any?
porque any es cualquiera entonces permite pasar cualquier valor o cualquier cosa y el otro te permite tambien poner cualquier valor a lo que entiendo pero ddespues es obligatorio que demuestres que valor eso, o sea si nunca dices el valor o asi seria error, asi que es más estricto 

¿Qué ventaja tiene Pick<Dog, "name"> frente a escribir una interface nueva a mano?
a lo que recuerdo es para que de la interfa dog solo tomes el valor que quieres o sea con pick por ejemplo si solo ocupas que se herede el nombre del perro pues solo tomas name de la interfaz de perro sin tener que tener todos los otros datos que no ocupamos


¿Para qué se usa un genérico (<T>)?
para cuando aun no sabemos que valor va a tener, o sea si aun no sabemos por ejemplo si va a ser number o asi ponemos t y eso quiere decir que despues le asignaremos un valor que mientras va a valer t 


Vue

¿Qué es la reactividad?
la reactivada  es algo que cuando lo modificas en el código se ve reflejado luego luego en tu pagina

Diferencias entre v-if y v-show. ¿Cuándo usarías cada uno?
v-show sirve para cuando algo aparece y desaparece o sea se puede decir un menu que se pone lateral que puedes abrir y cerra asi que lo usaria cuando algo se puede estar viendo y quitando el menu o un boton o algo asi y el otro a lo que recuerdo ese debe de tener como algo que no va a cambiar o bueno estar como el otro apareciendo y pudiendo desaparecer 

¿Cómo se comunica un componente hijo con su padre? ¿Y un padre con su hijo?
un padre a un hijo es que el le da como la orden de lo que se va hacer o la funcion que va a tener que hacer y de un hijo al padre pues es solo avisar que alguien le esta pidiendo que se haga esa funcion es decir que un boton le dan click para abrir el carrito entonces el le avisa solo al padre y asi 

Diferencias entre computed y watch. ¿Cuál usarías para calcular un total?
el computed sirve para sumar cosas osea datos que ya tenemos y pues esa es la que usaria para calcular un total y whatch se que no sirve para hacer calculos, mas bien espera a que algo cambie para avisar 

¿Qué es un composable y para qué sirve?
A  lo que recuerdo un composable es código que se va a reutilizar varias veces y por eso se pone ahi y sirve para ahorrarte codigo y si ocupas cambiar algo solo lo cambies ahi 

¿Cuándo tiene sentido usar Pinia en lugar de pasar props?
cuando tienes que pasar informacion a mas de una cosa, o bueno sus atributos, o sea si tengo una clase abuelo y una clase padre y una hijo entonces si le quiere decir algo la clase abuelo al hijo tiene que pasar primero por el padre 

Nuxt

¿Qué diferencia hay entre SSR y CSR? ¿Qué ventaja tiene el SSR para el SEO?
que csr es de vue y que cuando el seo pide la info pues no lo manda todo como para que el seo lo arme o sea vamos que lo construya en cambio ssr es de nuxt por lo que ya viene armada osea que cuando el seo lo pida va a entender perfectamente la informacion y le va a dar puntos y se va a mostrar más y más rapido esa es la ventaja en cambio csr pues tarda en lo que lo arma y entiende de que trata


¿Cuándo se usa useFetch y cuándo $fetch?
el use fetch trae los datos ya cargados o sea cuando abres la pagina los muestra y el $fetch los da pero solo cuando los pides

¿Para qué sirve un layout?
se podria decir que es como una plantilla que vas a reutilizar en varias cosas por asi decirlo  el footer lo ocupas para varios lados y lo vas a estar reutilizando 

¿Para qué sirve un middleware? Pon un ejemplo real.
es el que revisa si la informacion que traes esta completa antes de entrar como a una ruta ejemplo el front te vas a registrar entonces si traes usuario y contraseña te deja pasar pero si falta el nombre de usuario te regresa 

¿Por qué es importante devolver un 404 de verdad y no sólo pintar "no encontrado"?
porque una para el usuario es entendible, para la del seo supongo que tambien asi le avisas que esa pagina pues no existe o no hay lo que buscas y es más entendible que aque solo apareciera ese mensaje 

Git y forma de trabajar

¿Desde qué rama se crean siempre las ramas nuevas?
desde el main

¿Cuándo se puede trabajar directamente sobre main?
solo cuando vas a traer el trabajo de alguna rama o a crear una rama 

¿Qué son los conventional commits? Diferencia entre feat, fix y chore.
son los que bienen cona regla de como escribir lo cambios que hiciste en alguna rama y lo subiste o sea no solo por ejemplo complete la tabla si no usas como una etiqueta para que le entiendan 

fix sirve para arreglar algun error que tuviste , el  feat sirve para cuando creaste algo nuevo y el chore es cuando actualizas algo como una libreria o algo asi 

¿Qué es un linter y qué problema resuelve en un equipo?
es como una regla que se pone para que todo se escriba de la misma manera y lleve un orden lo que resuelve es que el codigo sea entendible para todos los del equipo, si alguien olvida algo por asi decirlo o le pone dos espacios de separacion entonces le debe de marcar como que eso esta mal y no dejarlo hacer el cambio porque tal vez solo se trabaja que haya un espacio de separacion solamente 

¿Qué es la deuda técnica?
una deuda tecnica es cuando haces algo rapido que probablemente despues si da algun error probablemente tardes mas tiempo en resolver, la deuda tecnica no solo puede ser mala si no buena si haces algo rapido y eso si funciona entonces lo hiciste en poco tiempo y bien, basicamente es el tiempo que te lleva hacer las cosas y entre más pronto y bien mejor.
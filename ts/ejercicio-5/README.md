Ejercicio 5 - TypeScript: tipar una respuesta de API


1. ¿Por que `any` es peligroso y `unknown` no?

porque any estamos diciendo que es cualquiera, o sea que puede tomar cualquier valor y no nos va a importar asi el dato no exista con el otro no vas a poder usar el dato hasta que ts sepa que tipo es

2. Si la API cambia y deja de enviar height, ¿te avisaría TypeScript? ¿Por qué no?
No los tipos solo existen mientras escribo el codigo, no cuando la app esta corriendo ts no ve lo que llega de la API.

3.¿Qué diferencia hay entre as Pokemon y usar un type guard? ¿Cuál es más seguro?

que el as pokemon solo dice que es seguro pero no revisa nada y el otro si revisa a ver que datos trae entonces es más seguro 
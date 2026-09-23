Ejercicio 3 - Formulario


Construí un formulario con los campos Name, Last, Age, Email, un radio y un checkbox para aceptar términos, y un botón Submit.

1. Primero puse la etiqueta form con los atributos action , method=\"post y target=\"_blank\" este último para que al enviar el formulario se abra una pestaña nueva.

2. Para cada campo (Name, Last, Age, Email) usé un label conectado con su input mediante for e  id , para que al hacer clic en el texto el cursor vaya directo al campo, y para que los lectores de pantalla los relacionen correctamente.

3. Usé  autocomplete para que el navegador se los de si tiene guardado 

4. En Age usé type="number con min="0 y max="120`, para que solo acepte números dentro de un rango razonable, y en Email para que solo acepte eso 

5. Implementé  fieldset y legend para agrupar los dos radios (Sí/No), 

6. Los dos radios comparten el mismo name="terms-radio, para que el navegador los trate como un solo grupo donde solo se puede elegir una opción a la vez.


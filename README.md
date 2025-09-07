# 🎁 Challenge - Amigo Secreto

Este proyecto es una aplicación web sencilla que permite:

- Agregar amigos a una lista.
- Mostrar los amigos agregados en pantalla.
- Sortear de manera aleatoria un amigo secreto.

Es un ejercicio práctico para reforzar conocimientos de **JavaScript**, **HTML** y **CSS**.

---

## 🚀 Funcionalidades

1. **Agregar amigos**  
   - El usuario escribe un nombre en el campo de texto.  
   - Si el nombre no está vacío, se agrega al arreglo `amigos` y se muestra en la lista.

2. **Mostrar amigos**  
   - Cada vez que se agrega un nombre, la lista de amigos en el DOM se actualiza.  
   - Se limpia la lista previa con `innerHTML` para evitar duplicados.

3. **Sortear amigo secreto**  
   - Se selecciona un nombre al azar del arreglo `amigos` usando `Math.random()` y `Math.floor()`.  
   - El resultado se muestra en el DOM.  
   - Si no hay amigos en la lista, se muestra una alerta.




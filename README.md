# RANDON BOX
Ejercicio donde al recargar la página y el contenedor cambia de color.

- Componente

  Función para obtener color random

  ```js
  var generateColor = number => Math.floor(Math.random() * (number + 1)); 
  var color = 'rgb(' + generateColor(255) + ',' + generateColor(255) + ',' + generateColor(255) + ')';
  ```

  Importanto en index.js el componente 

  ```
  import React from 'react';
  import ReactDOM from 'react-dom';
  import './index.css';
  import App from './App';  
  ```

## Desarrollado con ...

`HTML5` `CSS3` `React`  
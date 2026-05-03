# JS Utils

Una colección de funciones utilitarias optimizadas para agilizar el desarrollo de interfaces web y lógica de proyectos frontend.

## Contenido del Repositorio

El repositorio está organizado en módulos independientes para facilitar su importación:

*   **`array.js`**: Funciones para mezclar, agrupar y filtrar datos en arreglos.
*   **`date.js`**: Manejo de fechas, tiempos relativos y formatos para chats.
*   **`dom.js`**: Atajos para selección de elementos, creación de nodos y animaciones.
*   **`format.js`**: Formateo de moneda, truncado de texto y creación de slugs para URLs.
*   **`math.js`**: Cálculos de porcentajes, números aleatorios y validaciones numéricas.
*   **`storage.js`**: Gestión simplificada de `localStorage` con manejo de errores.
*   **`theme.js`**: Utilidades para gestionar variables CSS dinámicas y modos oscuros.
*   **`validation.js`**: Validaciones de seguridad para formularios, emails y contraseñas.
*   **`http.js`**: Simplificación de peticiones fetch para APIs.
*   **`browser.js`**: Interacciones comunes con la ventana y el portapapeles.

## Cómo usar

Simplemente copia el archivo que necesites en tu proyecto e impórtalo en tu script principal:
```javascript
import { $, setActiveClass } from './utils/dom.js';
import { saveToLocal } from './utils/storage.js';

const boton = $('#mi-boton');
saveToLocal('config', { theme: 'dark-neon' });

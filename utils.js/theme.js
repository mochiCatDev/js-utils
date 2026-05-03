// Modifica el valor de una variable CSS en el :root
export const setGlobalVar = (name, value) => document.documentElement.style.setProperty(`--${name}`, value);

// Comprueba si el sistema del usuario usa modo oscuro
export const prefersDarkMode = () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

// Asigna un atributo al body para cambiar esquemas visuales enteros
export const setThemeAttribute = (themeName) => document.body.setAttribute('data-theme', themeName);
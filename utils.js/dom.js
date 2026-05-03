// Selecciona el primer elemento del DOM que coincida
export const $ = (selector) => document.querySelector(selector);

// Selecciona todos los elementos del DOM que coincidan
export const $$ = (selector) => document.querySelectorAll(selector);

// Genera un ID alfanumérico aleatorio para listas o componentes
export const generateId = () => Math.random().toString(36).substr(2, 9);

// Pausa la ejecución por los milisegundos indicados
export const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Asigna una clase solo al elemento activo y la quita de los demás
export const setActiveClass = (elements, activeElement, className = 'active') => {
  elements.forEach(el => el.classList.remove(className));
  activeElement.classList.add(className);
};

// Retrasa la ejecución de una función para optimizar rendimiento
export const debounce = (fn, delay = 300) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(null, args), delay);
  };
};

// Desplaza la pantalla suavemente hacia el elemento indicado
export const scrollToElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

// Crea un elemento HTML rápidamente con clases y texto
export const createElement = (tag, className = '', textContent = '') => {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (textContent) el.textContent = textContent;
  return el;
};
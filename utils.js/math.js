// Genera un número entero aleatorio dentro de un rango
export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Redondea un número a la cantidad de decimales especificada
export const roundTo = (num, decimals = 2) => Number(Math.round(num + "e" + decimals) + "e-" + decimals);

// Verifica si un número es par
export const isEven = (num) => num % 2 === 0;

// Calcula el porcentaje de un valor sobre un total
export const calcPercentage = (value, total) => total === 0 ? 0 : roundTo((value / total) * 100);
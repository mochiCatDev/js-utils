// Mezcla los elementos de un array de manera aleatoria
export const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

// Devuelve un elemento al azar del array
export const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];

// Agrupa objetos dentro del array utilizando una de sus propiedades como clave
export const groupBy = (array, key) => array.reduce((acc, item) => {
  (acc[item[key]] = acc[item[key]] || []).push(item);
  return acc;
}, {});

// Extrae únicamente los valores únicos de un array (sin duplicados)
export const getUniqueValues = (array) => [...new Set(array)];
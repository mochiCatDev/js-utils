// Guarda un valor serializado en localStorage
export const saveToLocal = (key, value) => {
  try { localStorage.setItem(key, JSON.stringify(value)); }
  catch (error) { console.error("Error saving to localStorage", error); }
};

// Obtiene y parsea un valor desde localStorage
export const getFromLocal = (key) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) { return null; }
};

// Elimina una clave específica de localStorage
export const removeFromLocal = (key) => localStorage.removeItem(key);

// Limpia por completo el localStorage (ideal para reiniciar partidas)
export const clearLocal = () => localStorage.clear();
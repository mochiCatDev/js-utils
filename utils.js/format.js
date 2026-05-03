// Da formato de moneda a un número
export const formatCurrency = (amount, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: currency }).format(amount);
};

// Recorta un texto y le añade puntos suspensivos si pasa del límite
export const truncateText = (text, limit = 50) => {
  if (text.length <= limit) return text;
  return text.substring(0, limit) + "...";
};

// Convierte en mayúscula la primera letra de una cadena
export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

// Convierte texto a formato URL o etiqueta (ej. "Álgebra 1" -> "algebra-1")
export const slugify = (text) => text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-');
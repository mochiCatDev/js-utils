// Obtiene la fecha actual en formato AAAA-MM-DD
export const getCurrentDateISO = () => new Date().toISOString().split('T')[0];

// Convierte una fecha a formato relativo (ej. "Hace 5 min")
export const formatRelativeTime = (date) => {
  const now = new Date();
  const diff = now - new Date(date);
  const seconds = Math.floor(diff / 1000);
  if (seconds < 60) return "Hace un momento";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `Hace ${minutes} min`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `Hace ${hours} horas`;
  return new Date(date).toLocaleDateString();
};

// Obtiene la hora actual para mensajes de chat (ej. "14:30")
export const getChatTimestamp = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
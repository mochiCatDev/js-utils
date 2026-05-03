// Realiza una petición GET y devuelve el JSON directamente
export const getJson = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

// Envía datos mediante POST en formato JSON
export const postJson = async (url, data) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return await response.json();
};
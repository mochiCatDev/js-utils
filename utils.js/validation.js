// Comprueba si una cadena tiene estructura de correo electrónico
export const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Asegura que un valor no sea nulo ni esté vacío
export const isRequired = (value) => value !== null && value !== undefined && value.trim() !== "";

// Valida contraseña: mínimo 8 caracteres, al menos una letra y un número
export const isStrongPassword = (password) => password.length >= 8 && /\d/.test(password) && /[a-zA-Z]/.test(password);

// Valida que un mensaje no esté vacío ni supere un límite de caracteres
export const isValidMessageLength = (msg, max = 200) => msg.trim().length > 0 && msg.length <= max;
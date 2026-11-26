const KEY = 'nexum_cookies'

export function leerCookies() {
  try {
    return localStorage.getItem(KEY)
  } catch {
    return null
  }
}

export function guardarCookies(valor) {
  try {
    localStorage.setItem(KEY, valor)
  } catch {
    // Si el almacenamiento no está disponible, la elección sigue vigente en memoria.
  }
}

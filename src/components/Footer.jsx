export default function Footer({ onOpenCookiePrefs }) {
  return (
    <footer>
      <span>© 2026 Nexum</span>
      <a href={`${import.meta.env.BASE_URL}aviso-privacidad.html`}>Aviso de privacidad</a>
      <button type="button" onClick={onOpenCookiePrefs}>Preferencias de cookies</button>
    </footer>
  )
}

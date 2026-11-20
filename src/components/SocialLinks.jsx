const redes = [
  {
    nombre: 'Facebook',
    url: 'https://www.facebook.com/TU_USUARIO',
    icono: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.8c0-.9.3-1.5 1.6-1.5h1.6V3.4c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.4H7.5V13h2.8v8h3.2z" />
      </svg>
    ),
  },
  {
    nombre: 'Instagram',
    url: 'https://www.instagram.com/TU_USUARIO',
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <rect x="3" y="3" width="18" height="18" rx="5.5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.4" cy="6.6" r=".6" fill="currentColor" />
      </svg>
    ),
  },
  {
    nombre: 'YouTube',
    url: 'https://www.youtube.com/@TU_USUARIO',
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
        <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
        <path d="M10 9.2v5.6l4.8-2.8z" fill="currentColor" />
      </svg>
    ),
  },
  {
    nombre: 'TikTok',
    url: 'https://www.tiktok.com/@TU_USUARIO',
    icono: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.5 3c.3 2.2 1.6 3.6 3.8 3.8v3c-1.4.1-2.7-.3-3.8-1.1v5.9c0 3-2.4 5.4-5.4 5.4s-5.4-2.4-5.4-5.4 2.4-5.4 5.4-5.4c.3 0 .6 0 .9.1v3.1c-.3-.1-.6-.2-.9-.2-1.3 0-2.3 1-2.3 2.4s1 2.4 2.3 2.4 2.4-1 2.4-2.4V3h3z" />
      </svg>
    ),
  },
]

export default function SocialLinks() {
  return (
    <nav className="follow" aria-label="Redes sociales">
      <p>Síguenos en nuestras <b>redes sociales</b></p>
      <ul>
        {redes.map(({ nombre, url, icono }) => (
          <li key={nombre}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${nombre} de Nexum`}
            >
              {icono}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

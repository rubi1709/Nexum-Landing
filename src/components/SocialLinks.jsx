const redes = [
  {
    nombre: 'Facebook',
    url: 'https://www.facebook.com/share/18dqxNAWbr/',
    icono: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.8c0-.9.3-1.5 1.6-1.5h1.6V3.4c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.4H7.5V13h2.8v8h3.2z" />
      </svg>
    ),
  },
  {
    nombre: 'Instagram',
    url: 'https://www.instagram.com/_nexum7',
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <rect x="3" y="3" width="18" height="18" rx="5.5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.4" cy="6.6" r=".6" fill="currentColor" />
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

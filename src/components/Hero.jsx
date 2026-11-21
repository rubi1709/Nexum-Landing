import { useState } from 'react'
import HeroCarousel from './HeroCarousel.jsx'

const chips = ['Sin conexión bancaria', 'Registro por voz', 'Rachas de ahorro']

export default function Hero() {
  const [mostrarQR, setMostrarQR] = useState(true)

  return (
    <main className="page">
      <section className="copy">
        <p className="eyebrow">Finanzas personales</p>
        <h1>Convierte pequeños hábitos en <em>ahorro real.</em></h1>
        <p className="lead">Registra gastos, identifica tus gastos hormiga y crea hábitos de ahorro sin vincular tus cuentas bancarias.</p>

        <div className="get">
          <a
            className="play"
            href="https://play.google.com/store/apps/details?id=mx.nexum.app"
            target="_blank"
            rel="noopener"
            aria-label="Descargar Nexum en Google Play"
          >
            <svg viewBox="0 0 24 26" aria-hidden="true">
              <polygon points="2,1 15,8.8 13.2,13" fill="#00f076" />
              <polygon points="2,1 13.2,13 2,25" fill="#00c3ff" />
              <polygon points="2,25 13.2,13 15,17.2" fill="#f43249" />
              <polygon points="15,8.8 22,13 15,17.2 13.2,13" fill="#ffd500" />
            </svg>
            <div>
              <span>Disponible en</span>
              <strong>Google Play</strong>
            </div>
          </a>

          {mostrarQR && (
            <div className="qr">
              <img
                src={`${import.meta.env.BASE_URL}img/qr-google-play.png`}
                alt="Código QR para descargar Nexum en Google Play"
                width="84"
                height="84"
                onError={() => setMostrarQR(false)}
              />
              <span>o escanea aquí para descargar</span>
            </div>
          )}
        </div>

        <ul className="chips">
          {chips.map((chip) => <li key={chip}>{chip}</li>)}
        </ul>
      </section>

      <div className="art">
        <HeroCarousel />
      </div>
    </main>
  )
}

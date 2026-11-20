import { useEffect, useState } from 'react'
import { guardarCookies, leerCookies } from '../cookies.js'
import { cargarAnalytics } from '../analytics.js'

export default function CookieBanner({ abierto, onCerrar }) {
  const [eleccion, setEleccion] = useState(leerCookies)

  // Solo se carga analítica cuando la elección guardada o nueva es "accepted".
  useEffect(() => {
    if (eleccion === 'accepted') {
      cargarAnalytics(import.meta.env.VITE_GA_ID)
    }
  }, [eleccion])

  function elegir(valor) {
    guardarCookies(valor)
    setEleccion(valor)
    onCerrar()
  }

  if (!abierto) return null

  return (
    <div id="cookie-banner" role="dialog" aria-label="Preferencias de cookies">
      <p>Usamos cookies de analítica para saber cuántas personas visitan este sitio. Solo se activan si las aceptas.</p>
      <div className="acts">
        <button type="button" className="ok" onClick={() => elegir('accepted')}>Aceptar</button>
        <button type="button" className="no" onClick={() => elegir('rejected')}>Rechazar</button>
      </div>
    </div>
  )
}

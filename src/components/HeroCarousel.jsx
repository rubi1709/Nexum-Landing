import { useEffect, useState } from 'react'

const slides = [
  {
    archivo: 'ahorro-1.jpg',
    titulo: 'Ahorrar en pareja se disfruta más.',
    pos: 'center 30%',
  },
  {
    archivo: 'ahorro-2.jpg',
    titulo: 'Tu casa y tu auto empiezan con pequeños ahorros.',
    pos: 'center 45%',
  },
  {
    archivo: 'ahorro-3.jpg',
    titulo: 'Ese viaje sí se puede.',
    pos: 'center 30%',
  },
  {
    archivo: 'ahorro-4.jpg',
    titulo: 'Tu meta, un ahorro a la vez.',
    pos: 'center 30%',
  },
]

const INTERVALO = 6000

export default function HeroCarousel() {
  const [activo, setActivo] = useState(0)
  const [fallidos, setFallidos] = useState(() => slides.map(() => false))
  const [reduceMotion, setReduceMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = (evento) => setReduceMotion(evento.matches)
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (reduceMotion) return undefined
    const id = setInterval(() => setActivo((indice) => (indice + 1) % slides.length), INTERVALO)
    return () => clearInterval(id)
  }, [reduceMotion])

  function marcarFallido(indice) {
    setFallidos((anteriores) => anteriores.map((fallido, i) => (i === indice ? true : fallido)))
  }

  function mostrar(indice) {
    if (reduceMotion) return
    setActivo(indice)
  }

  // Con prefers-reduced-motion se queda siempre la primera foto, sin autoplay ni zoom.
  const indiceActivo = reduceMotion ? 0 : activo

  return (
    <>
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-bg__slides">
          {slides.map((slide, indice) => (
            <div
              key={slide.archivo}
              className={`hero-bg__slide${indice === indiceActivo ? ' hero-bg__slide--activo' : ''}`}
            >
              {fallidos[indice] ? (
                <div className="hero-bg__fallback" />
              ) : (
                <img
                  className="hero-bg__media"
                  src={`${import.meta.env.BASE_URL}img/${slide.archivo}`}
                  alt=""
                  style={{ objectPosition: slide.pos }}
                  loading={indice === 0 ? 'eager' : 'lazy'}
                  fetchPriority={indice === 0 ? 'high' : 'auto'}
                  decoding="async"
                  onError={() => marcarFallido(indice)}
                />
              )}
            </div>
          ))}
        </div>

        <div className="hero-bg__overlay" />
        <p className="hero-bg__titulo">{slides[indiceActivo].titulo}</p>
      </div>

      <div className="hero-bg__dots">
        {slides.map((slide, indice) => (
          <button
            key={slide.archivo}
            type="button"
            aria-label={`Ver imagen ${indice + 1}`}
            aria-current={indice === indiceActivo ? 'true' : undefined}
            onClick={() => mostrar(indice)}
          />
        ))}
      </div>
    </>
  )
}

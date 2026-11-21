import { useEffect, useState } from 'react'

const slides = [
  {
    src: `${import.meta.env.BASE_URL}img/ahorro-1.jpg`,
    alt: 'Pareja latina sonriendo mientras deposita monedas en una alcancía en un ambiente cálido',
    titulo: 'Ahorrar en pareja se disfruta más.',
  },
  {
    src: `${import.meta.env.BASE_URL}img/ahorro-2.jpg`,
    alt: 'Miniaturas de una casa y un auto junto a monedas apiladas sobre una mesa',
    titulo: 'Tu casa y tu auto empiezan con pequeños ahorros.',
  },
  {
    src: `${import.meta.env.BASE_URL}img/ahorro-3.jpg`,
    alt: 'Joven planeando un viaje con un mapa y el dinero que ha ahorrado sobre la mesa',
    titulo: 'Ese viaje sí se puede.',
  },
  {
    src: `${import.meta.env.BASE_URL}img/ahorro-4.jpg`,
    alt: 'Estudiante con una laptop y una bicicleta nuevas compradas con sus ahorros',
    titulo: 'Tu meta, un ahorro a la vez.',
  },
]

export default function HeroCarousel() {
  const [activo, setActivo] = useState(0)
  const [hover, setHover] = useState(false)
  const [foco, setFoco] = useState(false)
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

  const pausado = hover || foco

  useEffect(() => {
    if (pausado || reduceMotion) return undefined
    const id = setInterval(() => setActivo((indice) => (indice + 1) % slides.length), 5000)
    return () => clearInterval(id)
  }, [pausado, reduceMotion])

  function marcarFallido(indice) {
    setFallidos((anteriores) => anteriores.map((fallido, i) => (i === indice ? true : fallido)))
  }

  return (
    <div
      className="carousel"
      role="region"
      aria-roledescription="carrusel"
      aria-label="Fotos sobre ahorro"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setFoco(true)}
      onBlur={() => setFoco(false)}
    >
      {slides.map((slide, indice) => (
        <div
          key={slide.src}
          className={`carousel__slide${indice === activo ? ' carousel__slide--activo' : ''}`}
          aria-hidden={indice !== activo}
        >
          {fallidos[indice] ? (
            <div className="carousel__fallback" />
          ) : (
            <img
              className="carousel__media"
              src={slide.src}
              alt={slide.alt}
              width="1200"
              height="800"
              loading={indice === 0 ? 'eager' : 'lazy'}
              fetchPriority={indice === 0 ? 'high' : 'auto'}
              onError={() => marcarFallido(indice)}
            />
          )}
        </div>
      ))}

      <div className="carousel__veil">
        <p className="carousel__titulo">{slides[activo].titulo}</p>
      </div>

      <div className="carousel__dots">
        {slides.map((slide, indice) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Ver imagen ${indice + 1}`}
            aria-current={indice === activo ? 'true' : undefined}
            onClick={() => setActivo(indice)}
          />
        ))}
      </div>
    </div>
  )
}

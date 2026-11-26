// Se llama únicamente desde CookieBanner cuando la elección es "accepted".
// El ID se toma de import.meta.env.VITE_GA_ID y se ignoran los placeholders.
export function cargarAnalytics(id) {
  if (!id || id.includes('XXXX') || window.__gaLoaded) return
  window.__gaLoaded = true

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag('js', new Date())
  window.gtag('config', id, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  })
}

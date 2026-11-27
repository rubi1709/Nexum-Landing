import SocialLinks from './SocialLinks.jsx'

export default function Header() {
  return (
    <header className="top">
      <a className="brand" href="#" aria-label="Nexum, tu dinero, más claro">
        <span className="logo" aria-hidden="true">
  <img src={`${import.meta.env.BASE_URL}icon-192.png`} alt="" width="46" height="46" />
</span>
        <span>
          <b>Nexum</b>
          <small>Tu dinero, más claro.</small>
        </span>
      </a>
      <SocialLinks />
    </header>
  )
}

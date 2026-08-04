import cepexLogo from '../assets/brand/cepex-logo.png'

// Badge "3D" en CSS pur : une carte avec deux faces (recto/verso) qui
// tourne dans l'espace grâce à perspective + transform-style: preserve-3d.
export default function Logo3D() {
  return (
    <div className="logo3d-scene">
      <div className="logo3d-object">
        <div className="logo3d-face logo3d-front">
          <img src={cepexLogo} alt="CEPEX" className="logo3d-img" />
          <span className="logo3d-sub">TUNISIA EXPORT</span>
        </div>
        <div className="logo3d-face logo3d-back">
          <img src={cepexLogo} alt="CEPEX" className="logo3d-img" />
          <strong>CERTIFIÉ</strong>
          <span className="logo3d-sub">ORIGINE TUNISIE</span>
        </div>
      </div>
      <div className="logo3d-shadow"></div>
    </div>
  )
}

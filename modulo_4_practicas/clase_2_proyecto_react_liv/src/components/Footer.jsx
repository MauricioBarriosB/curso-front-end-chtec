import livLogo from "./../assets/logo_white.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <img className="footer__logo mb-5" src={livLogo} />

        <div className="pb-4">
          <div className="d-inline-block">
            <i className="las la-phone"></i> 800 600 2010 
          </div>
          <div className="d-inline-block">
            <i className="las la-envelope ps-4"></i> contacto@livhospital.com 
          </div>
          <div className="d-inline-block">
            <i className="las la-map-marker ps-4"></i> Av. Salud 1234, Santiago, Chile 
          </div>
        </div>

        <i className="lab la-google-plus-g la-3x p-2"></i>
        <i className="lab la-facebook la-3x p-2"></i>
        <i className="lab la-twitter la-3x p-2"></i>
        <i className="lab la-vimeo-v la-3x p-2"></i>
        <i className="lab la-pinterest la-3x p-2"></i>
        <i className="lab la-blogger-b la-3x p-2"></i>
        <p>Síguenos en nustras redes sociales</p>
        <p>© 2024 LIV Hospital - Derechos Reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;

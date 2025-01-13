import { useState } from 'react';
import PropTypes from "prop-types";
import livLogo from "@assets/logo.svg";

function HeaderMenu({onViewSelect}) {

  const [buttonTogg, setButtonTogg] = useState(false);

  const handleOnClick = (e) => {
    let temp = e.target.dataset.view;

    // * handleViewSelect on parent app :
    if (temp) onViewSelect(temp);
  };

  return (
    <header>
    <nav className="navbar navbar-expand-sm">
      <div className="container-fluid">
        <img src={livLogo} alt="Vite logo" width="50px" className="mx-4"/>
        <button onClick={()=>setButtonTogg(!buttonTogg)} className="navbar-toggler" type="button" data-bs-toggle="collapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={!buttonTogg ? 'collapse navbar-collapse' : 'collapse navbar-collapse collapse show'} id="collapsible-navbar">
          <ul className="navbar-nav">
            <li className="nav-item mx-3">
              <a className="nav-link" onClick={handleOnClick} data-view="HomeView"><i className="las la-home" data-view="HomeView"></i> Home</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" onClick={handleOnClick} data-view="MedicalTeamView"><i className="las la-user-friends" data-view="MedicalTeamView"></i> Equipo Médico</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" onClick={handleOnClick} data-view="AppointmentView"><i className="las la-inbox" data-view="AppointmentView"></i> Citas</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  );
}

HeaderMenu.propTypes = {
  onViewSelect: PropTypes.func,
};

export default HeaderMenu;
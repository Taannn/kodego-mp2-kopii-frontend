import { Link } from "react-router-dom";
import { useState } from "react";

const HeaderNav = () => {
  const [active, setActive] = useState("home");

  const handleActiveLink = (link: string) => {
    setActive(link);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark d-none d-lg-block z-lower bg-primary">
        <div className="container">
          <a className="navbar-brand hvr-wobble-horizontal" href="/">
            <img
              src="https://kopiiiiiimg.netlify.app/assets/images/kopii-light.png"
              alt=""
              width="70"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav nav-underline ff-main fs-6">
              <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-link ${active === "home" ? "active" : ""} me-3`}
                  onClick={() => handleActiveLink("home")}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/kopiishop"
                  className={`nav-link ${active === "shop" ? "active" : ""} me-3`}
                  onClick={() => handleActiveLink("shop")}
                >
                  Kopii Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/kopiistop"
                  className={`nav-link ${active === "stop" ? "active" : ""} me-3`}
                  onClick={() => handleActiveLink("stop")}
                >
                  Kopii Stop
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  id="login"
                  to="/signup"
                  className="btn hvr-bounce-to-top btn-danger btn-sm bs-danger ms-2 pb-2 fw-medium text-info pt-2"
                >
                  Login/Signup
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-dark bg-primary fixed-top d-block d-lg-none">
        <div className="container-fluid">
          <a className="navbar-brand hvr-wobble-horizontal" href="#">
            <img src="assets/images/kopii-light.png" alt="" width="70" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-danger"
            tabIndex={-1}
            id="offcanvasDarkNavbar"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              <a className="navbar-brand hvr-wobble-horizontal" href="/">
                <img
                  src="https://kopiiiiiimg.netlify.app/assets/images/kopii-light.png"
                  alt=""
                  width="70"
                />
              </a>
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav nav-underline ff-main fs-6 justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a
                    className={`nav-link ${active === 'Home' ? 'active' : ''}`}
                    onClick={() => handleActiveLink('Home')}
                    href="#"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${active === 'Shop' ? 'active' : ''}`}
                    onClick={() => handleActiveLink('Shop')}
                  >
                    Kopii Shop
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${active === 'KopiiStop' ? 'active' : ''}`}
                    onClick={() => handleActiveLink('KopiiStop')}
                  >
                    Kopii Stop
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    id="login"
                    className="btn btn-outline-light overflow-hidden hvr-bounce-to-top btn-sm bg- fw-medium text-info pt-1"
                  >
                    Login/Signup
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderNav;

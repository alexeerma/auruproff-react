import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className="">
          <img className="" src="" alt="" />
          <a href="/">
          </a>
        </div>
        <div className="">
          <Link className="" to="/">
            Avaleht
          </Link>
          <Link className="" to="/Survepesu">
            Survepesu
          </Link>
          <Link className="" to="/Siselahendused">
            Siselahendused
          </Link>
          <Link className="" to="/Work">
            Tööd
          </Link>
          <Link className="" to="/People">
            Inimesed
          </Link>
          <Link className="" to="/FAQ">
            KKK
          </Link>
          <Link className="" to="/Contact">
            Kontakt
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
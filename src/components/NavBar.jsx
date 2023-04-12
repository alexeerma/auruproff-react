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
          <ul>
            <li>
             <Link className="" to="/">
                Avaleht
             </Link>
            </li>
            <li>
             <Link className="" to="/Survepesu">
                Survepesu
             </Link>
            </li>
            <li>
             <Link className="" to="/Siselahendused">
                Siselahendused
             </Link>
            </li>
            <li>
             <Link className="" to="/tood">
                Tööd
             </Link>
            </li>
            <li>
             <Link className="" to="/inimesed">
                Inimesed
             </Link>
            </li>
            <li>
             <Link className="" to="/KKK">
                KKK
             </Link>
            </li>
            <li>
             <Link className="" to="/kontakt">
                Kontakt
             </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auruproff, close, menu } from '../assets';
import { styles } from '../styles';

const NavBar = () => {
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.scrollY;
          if (scrollTop > 100) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);


  return (
    <nav>
        <div className={`${
        styles.paddingX
      } w-full flex justify-between items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
    }`}>
        <div className="shrink-0 ml-[20px]">
          <Link to="/" onClick={() => {setActive(""); window.scrollTo(0, 0); }}>
          <img className="w-[200px] object-contain md:w-[250px] object-contain" src={auruproff} alt="logo" />
          </Link>
        </div>
        <div className="mr-[20px]">
          <ul className="list-none hidden sm:flex flex-row gap-5 items-center py-5">
            <li className="px-5">
             <Link className="" to="/">
                Avaleht
             </Link>
            </li>
            <li className="px-5">
             <Link className="" to="/Survepesu">
                Survepesu
             </Link>
            </li>
            <li className="px-5">
             <Link className="" to="/Siselahendused">
                Siselahendused
             </Link>
            </li>
            <li className="px-5">
             <Link className="" to="/tood">
                Tööd
             </Link>
            </li>
            <li className="px-5">
             <Link className="" to="/inimesed">
                Inimesed
             </Link>
            </li>
            <li className="px-5">
             <Link className="" to="/KKK">
                KKK
             </Link>
            </li>
            <li className="px-5">
             <Link className="" to="/kontakt">
                Kontakt
             </Link>
            </li>
          </ul>
        </div>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt='menu' className='w-[28px] h-[28px] top-0 right-0' onClick={() => setToggle(!toggle)}/>
        </div>
      </div>
      <div className={`${
              !toggle ? "hidden" : "flex"
            } primary absolute top-20 w-full z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-center flex-1 flex-col gap-4 pt-[30px]">
            <li className="px-5" onClick={() => {
                    setToggle(!toggle);
                  }}>
             <Link className="" to="/">
                Avaleht
             </Link>
            </li>
            <li className="px-5" onClick={() => {
                    setToggle(!toggle);
                  }}>
             <Link className="" to="/Survepesu">
                Survepesu
             </Link>
            </li>
            <li className="px-5" onClick={() => {
                    setToggle(!toggle);
                  }}>
             <Link className="" to="/Siselahendused">
                Siselahendused
             </Link>
            </li>
            <li className="px-5" onClick={() => {
                    setToggle(!toggle);
                  }}>
             <Link className="" to="/tood">
                Tööd
             </Link>
            </li>
            <li className="px-5" onClick={() => {
                    setToggle(!toggle);
                  }}>
             <Link className="" to="/inimesed">
                Inimesed
             </Link>
            </li>
            <li className="px-5" onClick={() => {
                    setToggle(!toggle);
                  }}>
             <Link className="" to="/KKK">
                KKK
             </Link>
            </li>
            <li className="px-5" onClick={() => {
                    setToggle(!toggle);
                  }}>
             <Link className="" to="/kontakt">
                Kontakt
             </Link>
            </li>
          </ul>
         </div>
    </nav>
  );
};

export default NavBar;
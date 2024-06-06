import React from "react";
import { Link } from "react-scroll";
import "./index.css";

function NavBar() {
  return (
    <div className='navBar'>
      <span className='spanNavBar'>PowerGym</span>
      <ul className='UlListNavBar'>
        <li>
          <Link to='section' span={true} smooth={true}>
            Home
          </Link>
        </li>
        <li>
          <Link to='plansAndPrices' span={true} smooth={true}>
            Planos
          </Link>
        </li>
        <li>
          <Link to='backgroundFooter' span={true} smooth={true}>
            Contato
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;

import React from "react";
import "./index.css";

function NavBar() {
  return (
    <div className='navBar'>
      <span className='spanNavBar'>PowerGym</span>
      <ul className='UlListNavBar'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>Planos</a>
        </li>
        <li>
          <a href='#'>Contato</a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;

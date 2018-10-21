import React from 'react';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar" role="navigation">
        <li>Comics</li>
        <li>Characters</li>
        <li className="logo">
          <FontAwesomeIcon className="icon" icon={faReact}/>React Comics
        </li>
        <li>
          <form>
            <input className="input-search" placeholder="search"/><FontAwesomeIcon className="search" icon={faSearch}/>
          </form>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
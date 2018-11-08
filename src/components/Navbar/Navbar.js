import React from 'react';
import './Navbar.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {faReact} from '@fortawesome/free-brands-svg-icons'
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{margin: '1rem 0'}}>
      <div className="hide-small">
        <ul className="navbar" role="navigation">
          <li><NavLink activeClassName="selected" to="/comics">Comics</NavLink></li>
          <li><NavLink activeClassName="selected" to="/characters">Characters</NavLink></li>
          <li className="logo">
            <FontAwesomeIcon className="icon" icon={faReact}/>React Comics
          </li>
          <li>
            <form>
              <input className="input-search" placeholder="search"/><FontAwesomeIcon className="search"
                                                                                     icon={faSearch}/>
            </form>
          </li>
        </ul>
      </div>
      <div className="show-small">
        <ul className="navbar">
          <li className="logo">
            <FontAwesomeIcon className="icon" icon={faReact}/>React Comics
          </li>
          <li>
            <form>
              <input className="input-search" placeholder="search"/><FontAwesomeIcon className="search"
                                                                                     icon={faSearch}/>
            </form>
          </li>
          <div className="links-container">
            <li><NavLink activeClassName="selected" to="/comics">Comics</NavLink></li>
            <li><NavLink activeClassName="selected" to="/characters">Characters</NavLink></li>
          </div>
        </ul>
        {/*<div className="logo">*/}
        {/*<FontAwesomeIcon className="icon" icon={faReact}/>React Comics*/}
        {/*</div>*/}
        {/*<div className="small-links">*/}
        {/*<NavLink activeClassName="selected" to="/comics">Comics</NavLink>*/}
        {/*<NavLink activeClassName="selected" to="/characters">Characters</NavLink>*/}
        {/*</div>*/}
      </div>
    </nav>
  )
}

export default Navbar;
import React from 'react';
import './Navbar.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {faReact} from '@fortawesome/free-brands-svg-icons'
import {NavLink} from 'react-router-dom';
import {
  withRouter
} from 'react-router-dom'

class Navbar extends React.Component {
  state = {
    searchTerm: ''
  }

  handleChange = (e) => {
    this.setState({searchTerm: e.target.value});
  }

  handleSubmit = e => {
    alert(this.state.searchTerm)
    e.preventDefault()
  }

  render() {
    const currentLocation = this.props.location.pathname
    return (
      <nav style={{margin: '1rem 0'}}>
        <div className="hide-small">
          <ul className="navbar" role="navigation">
            <li><NavLink exact activeClassName="selected" to="/comics">Comics</NavLink></li>
            <li><NavLink exact activeClassName="selected" to="/characters">Characters</NavLink></li>
            <li className="logo">
              <FontAwesomeIcon className="icon" icon={faReact}/>React Comics
            </li>
            <li>
              <form onSubmit={this.handleSubmit}>
                <input className="input-search"
                       placeholder={currentLocation.includes('comics') ? 'Search comics' : 'Search characters'}
                       value={this.state.searchTerm}
                       onChange={this.handleChange}/>
                <FontAwesomeIcon className="search" icon={faSearch}/>
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
              <form onSubmit={this.handleSubmit}>
                <input className="input-search"
                       placeholder={currentLocation.includes('comics') ? 'Search comics' : 'Search characters'}
                       value={this.state.searchTerm}
                       onChange={this.handleChange}/>
                <FontAwesomeIcon className="search" icon={faSearch}/>
              </form>
            </li>
            <div className="links-container">
              <li><NavLink exact activeClassName="selected" to="/comics">Comics</NavLink></li>
              <li><NavLink exact activeClassName="selected" to="/characters">Characters</NavLink></li>
            </div>
          </ul>
        </div>
      </nav>
    )
  }
}

export default withRouter(Navbar);
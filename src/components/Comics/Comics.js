import React from 'react';
import './Comics.css'
import Comic from "./Comic/Comic";
import './Comics.css'

class Comics extends React.Component {

  renderComic = comic => {
    return (
      <Comic key={comic.id} comic={comic} history={this.props.history}/>
    )
  }

  render() {
    return (
      <div className="Comics">
        <h1>Comics</h1>
        <div className="grid-container">
          {this.props.comics.map(this.renderComic)}
        </div>
      </div>
    )
  }
}

export default Comics;
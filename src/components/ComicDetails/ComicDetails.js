import React, {Component} from 'react';
import axios from 'axios';
import './ComicDetails.css';

// import Characters from '../Characters/Characters';
class ComicDetails extends Component {
  state = {
    comic: {}
  }

  getImageUrl = (url, extension) => `${url}/portrait_uncanny.${extension}`

  componentDidMount() {
    const comicId = this.props.match.params.id
    const url = `/comics/${comicId}`
    axios.get(url)
      .then(res => {
        if (res.data.code === 200) {
          const comic = res.data.data.results[0];
          this.setState({comic})
          console.log(res.data)
        }
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    const isNotEmpty = Object.keys(this.state.comic).length !== 0
    const comic = this.state.comic;
    if (isNotEmpty) {
      const comicDate = new Date(comic.dates[0]['date']);
      const localeCode = 'en';
      return (
        <div>
          <div className="comic-info-container u-card">
            <div className="cell cell-1">
              <img className="image"
                   src={this.getImageUrl(comic.thumbnail.path, comic.thumbnail.extension)} alt="comic"/>
            </div>
            <div className="cell cell-2">
              <h2>{comic.title}</h2>
              <h3>Descripción</h3>
              <p>{comic.description}</p>
              <h3>Details</h3>
              <div className="details-container">
                Extensión: {comic.pageCount} Páginas
                Publicado: 2018 10 de septiembre
              </div>
              <button className="u-btn">Comprar | ${comic.prices[0]['price']}</button>
              {/* TODO: Agregar icono + */}
              <button className="u-btn">+ Me interesa</button>
            </div>
          </div>
        </div>
      )
    } else {
      return <h2>Loading...</h2>
    }
  }
}

export default ComicDetails;
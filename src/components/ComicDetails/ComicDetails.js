import React, {Component} from 'react';
import './ComicDetails.css';
import {connect} from 'react-redux';
import {fetchComicById} from "../../actions/comicActions";
import {fetchCharactersByComic} from "../../actions/characterActions";
import PropTypes from 'prop-types';
import {isObjectEmpty} from "../../utils/utils";
import {getImageUrl} from "../../utils/utils";
import imageSizes from '../../utils/imagesSizes';
import Character from "../Characters/Character/Character";


class ComicDetails extends Component {

  componentDidMount() {
    const comicId = this.props.match.params.id
    this.props.fetchComicById(comicId)
    this.props.fetchCharactersByComic(comicId)
  }

  renderCharacter = character => {
    return (
      <Character key={character.id} character={character} history={this.props.history}/>
    )
  }

  handleClick = e => {
    console.log('epale')
  }

  render() {
    const comic = this.props.comic;
    const characters = this.props.characters;

    if (!isObjectEmpty(comic)) {
      const comicDate = new Date(comic.dates[0]['date']);
      const localeCode = 'en';
      return (
        <div className="ComicDetails">
          <div className="comic-info-container u-card">
            <div className="cell cell-1">
              <img className="image"
                   src={getImageUrl(comic.thumbnail.path, comic.thumbnail.extension, imageSizes.portrait.uncanny)}
                   alt="comic"/>
            </div>
            <div className="cell cell-2">
              <h2>{comic.title}</h2>
              <h3>Descripción</h3>
              <p>{comic.description || 'No description'}</p>
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

          <h2>Characters in the Comic</h2>
          <div className="grid-container" style={{padding: '1rem'}}>
            {characters.length > 0 ? characters.map(this.renderCharacter) : <p>No characters</p>}
          </div>
          {/*{ characters.length > 20 && <button>See more</button> }*/}
          <button className="u-btn" style={{width: 'auto', padding: '0.5rem 1rem'}} onClick={this.handleClick}>See more</button>

        </div>
      )
    } else {
      return <h2>Loading...</h2>
    }
  }
}

ComicDetails.propTypes = {
  fetchComicById: PropTypes.func.isRequired,
  fetchCharactersByComic: PropTypes.func.isRequired,
  comic: PropTypes.object.isRequired,
  characters: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  comic: state.comics.comic,
  characters: state.characters.characters
})


export default connect(mapStateToProps, {fetchComicById, fetchCharactersByComic})(ComicDetails);
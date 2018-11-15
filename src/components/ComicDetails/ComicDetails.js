import React, {Component} from 'react';
import './ComicDetails.css';
import {connect} from 'react-redux';
import {fetchComicById} from "../../actions/comicActions";
import {fetchCharactersByComic} from "../../actions/characterActions";
import PropTypes from 'prop-types';
import {isObjectEmpty} from "../../utils/utils";
import {getImageUrl} from "../../utils/utils";
import imageSizes from '../../utils/imagesSizes';
import Card from "../Card/Card";


class ComicDetails extends Component {

  componentDidMount() {
    const comicId = this.props.match.params.id
    this.props.fetchComicById(comicId)
    this.props.fetchCharactersByComic(comicId)
  }

  renderCharacter = character => {
    const imageSrc = getImageUrl(character.thumbnail.path, character.thumbnail.extension);
    return (
      <Card
        key={character.id}
        imageSrc={imageSrc}
        title={character.name}
        handleClick={() => this.goToCharacterDetails(character.id)}/>
    )
  }

  goToCharacterDetails = (id) => {
    this.props.history.push(`/characters/${id}`)
  }

  handleClick = () => {
    const comic = this.props.comic;
    this.props.history.push(`/comics/${comic.id}/characters`)
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
              <h2 className="blue">{comic.title}</h2>
              <h3 className="blue">Descripción</h3>
              <p className="blue">{comic.description || 'No description'}</p>
              <h3 className="blue">Details</h3>
              <button className="u-btn">Comprar | ${comic.prices[0]['price']}</button>
              <button className="u-btn">+ Me interesa</button>
              <div className="stats clearfix">
                <div className="stat-section">
                  <div className="stat">{comicDate.toLocaleString(localeCode, {year: 'numeric'})}</div>
                  <div className="stat-value">{comicDate.toLocaleDateString(localeCode, {month: 'short'})}</div>
                </div>

                <div className="stat-section">
                  <div className="stat">{comic.pageCount}</div>
                  <div className="stat-value">Pages</div>
                </div>

                <div className="stat-section">
                  <div className="stat">${comic.prices[0]['price']}</div>
                  <div className="stat-value">Cost</div>
                </div>
                <div className="stat-section">
                  <div className="stat">{comic.characters.available}</div>
                  <div className="stat-value">Characters</div>
                </div>
              </div>
            </div>
          </div>

          <h2>Characters in the Comic</h2>
          <div className="grid-container" style={{padding: '1rem'}}>
            {characters.length > 0 ? characters.map(this.renderCharacter) : <p>No characters</p>}
          </div>
          {comic.characters.available > 20 &&
          <button
            className="u-btn"
            style={{width: 'auto', padding: '0.5rem 1rem'}}
            onClick={this.handleClick}>See
            more
          </button>}
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
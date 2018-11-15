import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchCharactersByComic} from "../../actions/characterActions";
import {fetchComicsByCharacter} from "../../actions/comicActions";
import PropTypes from 'prop-types';
import './SearchResults.css';
import Pagination from "../Pagination/Pagination";
import {getImageUrl} from "../../utils/utils";
import Card from "../Card/Card";

class SearchResults extends React.Component {

  componentDidMount() {
    this.searchElement = this.isSearchingFor();
    this.getData();
  }

  getData = (params = {}) => {
    const id = this.props.match.params.id
    if (this.searchElement === 'comics') {
      this.props.fetchComicsByCharacter(id, params);
    } else if (this.searchElement === 'characters') {
      this.props.fetchCharactersByComic(id, params);
    }
  }

  isSearchingFor = () => {
    const elemsPath = this.props.location.pathname.split('/')
    return elemsPath.pop();
  }

  renderComic = comic => {
    const imageSrc = getImageUrl(comic.thumbnail.path, comic.thumbnail.extension);
    return (
      <Card
        key={comic.id}
        imageSrc={imageSrc}
        title={comic.title}
        handleClick={() => this.props.history.push(`/comics/${comic.id}`)}/>
    )
  }

  renderCharacter = character => {
    const imageSrc = getImageUrl(character.thumbnail.path, character.thumbnail.extension);
    return (
      <Card
        key={character.id}
        imageSrc={imageSrc}
        title={character.name}
        handleClick={() => this.props.history.push(`/characters/${character.id}`)}/>
    )
  }

  onPageChanged = data => {
    const offset = (data.currentPage - 1) * data.pageLimit
    this.getData({offset})
  }

  render() {
    if (this.searchElement === 'comics') {
      const {comics, comicsLimit, totalComics} = this.props;
      return (
        <div className="SearchResults">
          <h1 style={{textAlign: 'left'}}>
            {`${this.searchElement} ${totalComics} found:`}
          </h1>
          <Pagination
            totalRecords={totalComics}
            pageLimit={comicsLimit}
            pageNeighbours={1}
            onPageChanged={this.onPageChanged}
          />
          <div className="grid-container">
            {comics.map(this.renderComic)}
          </div>
        </div>
      )
    } else {
      const {characters, charactersLimit, totalCharacters} = this.props;
      return (
        <div className="SearchResults">
          <h1 style={{textAlign: 'left'}}>
            {`${totalCharacters} ${this.searchElement} found:`}
          </h1>
          <div className="u-flex-container-pagination">
            <Pagination
              totalRecords={totalCharacters}
              pageLimit={charactersLimit}
              pageNeighbours={1}
              onPageChanged={this.onPageChanged}
            />
          </div>
          <div className="grid-container">
            {characters.map(this.renderCharacter)}
          </div>
        </div>
      )
    }
  }
}

SearchResults.propTypes = {
  fetchCharactersByComic: PropTypes.func.isRequired,
  fetchComicsByCharacter: PropTypes.func.isRequired,
  charactersLimit: PropTypes.number.isRequired,
  comicsLimit: PropTypes.number.isRequired,
  totalComics: PropTypes.number.isRequired,
  comics: PropTypes.array.isRequired,
  characters: PropTypes.array.isRequired,
  params: PropTypes.object
}

const mapStateToProps = state => ({
  comics: state.comics.comics,
  characters: state.characters.characters,
  comicsLimit: state.comics.limit,
  charactersLimit: state.characters.limit,
  totalComics: state.comics.totalComics,
  totalCharacters: state.characters.totalCharacters,
  params: state.comics.params
});

export default connect(mapStateToProps, {fetchCharactersByComic, fetchComicsByCharacter})(SearchResults);
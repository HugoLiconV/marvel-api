import React, {Component} from 'react';
import './ComicDetails.css';
import {connect} from 'react-redux';
import {fetchComicById} from "../../actions/comicActions";
import PropTypes from 'prop-types';
import {isObjectEmpty} from "../../utils/utils";
import { getImageUrl } from "../../utils/utils";
import  imageSizes from '../../utils/imagesSizes';


class ComicDetails extends Component {

  componentDidMount() {
    const comicId = this.props.match.params.id
    this.props.fetchComicById(comicId)
  }

  render() {
    const comic = this.props.comic;
    if (!isObjectEmpty(comic)) {
      const comicDate = new Date(comic.dates[0]['date']);
      const localeCode = 'en';
      return (
        <div className="comic-info-container u-card">
          <div className="cell cell-1">
            <img className="image"
                 src={getImageUrl(comic.thumbnail.path, comic.thumbnail.extension, imageSizes.portrait.uncanny)} alt="comic"/>
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
      )
    } else {
      return <h2>Loading...</h2>
    }
  }
}

ComicDetails.propTypes = {
  fetchComicById: PropTypes.func.isRequired,
  comic: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  comic: state.comics.comic
})


export default connect(mapStateToProps, {fetchComicById})(ComicDetails);
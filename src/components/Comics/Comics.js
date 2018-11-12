import React from 'react';
import './Comics.css'
import Comic from "./Comic/Comic";
import './Comics.css'
import Pagination from "../Pagination/Pagination";
import {connect} from 'react-redux';
import {fetchComics} from "../../actions/comicActions";
import PropTypes from 'prop-types';

class Comics extends React.Component {

  componentDidMount() {
    this.props.fetchComics({ offset: 0})
  }

  renderComic = comic => {
    return (
      <Comic key={comic.id} comic={comic} history={this.props.history}/>
    )
  }

  getComics = (params = {}) => {
    this.props.fetchComics({
      ...this.props.params,
      ...params,
    })
  }

  onPageChanged = data => {
    const offset = (data.currentPage - 1) * data.pageLimit
    this.getComics({offset})
  }

  render() {
    const {totalComics, comics, limit} = this.props
    if (parseInt(totalComics) === 0) return null;
    return (
      <div className="Comics">
        <h1>Comics</h1>
        <div className="u-flex-container-pagination">
          <Pagination
            totalRecords={totalComics}
            pageLimit={limit}
            pageNeighbours={1}
            onPageChanged={this.onPageChanged}
          />
        </div>
        <div className="grid-container">
          {comics.map(this.renderComic)}
        </div>
      </div>
    )
  }
}

Comics.propTypes = {
  fetchComics: PropTypes.func.isRequired,
  limit: PropTypes.number.isRequired,
  totalComics: PropTypes.number.isRequired,
  comics: PropTypes.array.isRequired,
  params: PropTypes.object
}

const mapStateToProps = state => ({
  comics: state.comics.comics,
  limit: state.comics.limit,
  totalComics: state.comics.totalComics,
  params: state.comics.params
})

export default connect(mapStateToProps, {fetchComics})(Comics);
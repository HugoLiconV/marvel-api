import React from 'react';
import './Comics.css'
import Comic from "./Comic/Comic";
import './Comics.css'
import axios from "axios/index";
import Pagination from "../Pagination/Pagination";

class Comics extends React.Component {

  state = {
    comics: [],
    totalComics: 0,
    limit: 0
  }

  renderComic = comic => {
    return (
      <Comic key={comic.id} comic={comic} history={this.props.history}/>
    )
  }

  getComics = (callback, params = {}) => {
    axios.get('/comics', {
      params: {
        ...params
      }
    })
      .then(callback)
      .catch(error => console.log(error))
  }

  onPageChanged = data => {
    const offset = (data.currentPage - 1) * data.pageLimit
    const handleRequest = res => {
      const data = res.data;
      if (data.code === 200) {
        const comics = data.data.results
        this.setState({ comics })
      }
    };
    this.getComics(handleRequest, { offset })
  }

  componentDidMount() {
    const handleResponse = res => {
      const data = res.data;
      if (data.code === 200) {
        const comic = data.data.results
        const totalComics = data.data.total
        const limit = data.data.limit
        this.setState({
          comic,
          totalComics,
          limit
        })
      }
    }
    this.getComics(handleResponse)
  }

  render() {
    if (this.state.totalComics === 0) return null;
    return (
      <div className="Comics">
        <h1>Comics</h1>
        <div className="u-flex-container-pagination">
          <Pagination
            totalRecords={this.state.totalComics}
            pageLimit={this.state.limit}
            pageNeighbours={1}
            onPageChanged={this.onPageChanged}
          />
        </div>
        <div className="grid-container">
          {this.state.comics.map(this.renderComic)}
        </div>
      </div>
    )
  }
}

export default Comics;
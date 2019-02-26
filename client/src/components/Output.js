/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-var */
import React, { Component } from 'react';
import Helpers from '../../../helpers/helpers';
import Loading from './Loading';
import Form from './Form';

class Output extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      movies: [],
      film1: [],
      film2: [],
      film3: [],
    };
  }

  componentDidMount() {
    const { data, isLoading } = this.props;
    var flatData = [];
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].length; j++) {
        flatData.push(data[i][j]);
      }
    }
    this.setState({
      movies: flatData,
      isLoading: false,
      film1: Helpers.getRandomFilm(flatData),
      film2: Helpers.getRandomFilm(flatData),
      film3: Helpers.getRandomFilm(flatData),
    });
  }

  setMovie() {
    const { movies } = this.state;
    this.setState({
      film1: Helpers.getRandomFilm(movies),
      film2: Helpers.getRandomFilm(movies),
      film3: Helpers.getRandomFilm(movies),
    });
  }

  output() {
    const { film1, film2, film3 } = this.state;
    return (
      <div>
        <div>
          <div>
            <div>
              <img src={`https://image.tmdb.org/t/p/w300/${film1.poster_path}`} />
            </div>
            <div>
              <img src={`https://image.tmdb.org/t/p/w300/${film2.poster_path}`} />
            </div>
            <div>
              <img src={`https://image.tmdb.org/t/p/w300/${film3.poster_path}`} />
            </div>
          </div>
          <button type="button" className="btn btn-success btn-lg" onClick={this.setMovie.bind(this)}>Refresh</button>
        </div>
      </div>
    );
  }

  render() {
    const { isLoading, view } = this.state;
    if (isLoading) {
      return (
        <Loading />
      );
    }
    return (
      this.output()
    );
  }
}

export default Output;

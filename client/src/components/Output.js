/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-var */
import React, { Component } from 'react';
import Helpers from '../../../helpers/helpers';
import Form from './Form';

class Output extends Component {
  constructor(props) {
    super(props);
  }

  movieData() {
    const { data } = this.props;
    var flatData = [];
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].length; j++) {
        flatData.push(data[i][j]);
      }
    }
    const randomMovieOne = Helpers.getRandomFilm(flatData);
    const randomMovieTwo = Helpers.getRandomFilm(flatData);
    const randomMovieThree = Helpers.getRandomFilm(flatData);
    console.log(flatData.length, 'length');
    return (
      <div>
        <div>
          <img src={`https://image.tmdb.org/t/p/w300/${randomMovieOne.poster_path}`} />
        </div>
        <div>
          <img src={`https://image.tmdb.org/t/p/w300/${randomMovieTwo.poster_path}`} />
        </div>
        <div>
          <img src={`https://image.tmdb.org/t/p/w300/${randomMovieThree.poster_path}`} />
        </div>
      </div>
    );
  }

  output() {
    return (
      <div>
        {this.movieData()}
        <button type="button" className="btn btn-success btn-lg" onClick={this.movieData}>Refresh</button>
      </div>
    );
  }

  render() {
    return (
      this.output()
    );
  }
}

export default Output;

/* eslint-disable no-plusplus */
/* eslint-disable react/no-unused-state */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import $ from 'jquery';
import util from '../../../sensitive';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: {
        Action: 28,
        Adventure: 12,
        Animation: 16,
        Comedy: 35,
        Crime: 80,
        Documentary: 99,
        Drama: 18,
        Family: 10751,
        Fantasy: 14,
        History: 36,
        Horror: 27,
        Music: 10402,
        Mystery: 9648,
        Romance: 10749,
        Science_Fiction: 878,
        TV_Movie: 10770,
        Thriller: 53,
        War: 10752,
        Western: 37,
      },
      years: [],
      movies: [],
    };
  }

  componentDidMount() {
    const start = 1900;
    const end = new Date().getFullYear();
    const options = [];
    for (let year = start; year <= end; year++) {
      options.push(year);
    }
    options.sort((a, b) => b - a);
    this.setState({
      years: options,
    });
  }


  handleSubmit(e) {
    e.preventDefault();
    const { genres } = this.state;
    const genreId = genres[e.target.genre.value];
    const year = e.target.year.value;
    const rate = e.target.rate.value;
    let path = '';
    if (e.target.genre.value !== 'Choose Genre...' && year !== 'Choose Year...' && rate !== 'Choose Rating...') {
      path = `https://api.themoviedb.org/3/discover/movie?api_key=${util.API_KEY}&primary_release_year=${year}&vote_average.gte=${rate}&with_genres=${genreId}`;
    }
    if (e.target.genre.value !== 'Choose Genre...' && rate !== 'Choose Rating...') {
      path = `https://api.themoviedb.org/3/discover/movie?api_key=${util.API_KEY}&vote_average.gte=${rate}&with_genres=${genreId}`;
    }
    if (e.target.genre.value !== 'Choose Genre...' && year !== 'Choose Year...') {
      path = `https://api.themoviedb.org/3/discover/movie?api_key=${util.API_KEY}&primary_release_year=${year}&with_genres=${genreId}`;
    }
    if (year !== 'Choose Year...' && rate !== 'Choose Rating...') {
      path = `https://api.themoviedb.org/3/discover/movie?api_key=${util.API_KEY}&primary_release_year=${year}&vote_average.gte=${rate}`;
    }
    if (e.target.genre.value !== 'Choose Genre...') {
      path = `https://api.themoviedb.org/3/discover/movie?api_key=${util.API_KEY}&with_genres=${genreId}`;
    }
    if (year !== 'Choose Year...') {
      path = `https://api.themoviedb.org/3/discover/movie?api_key=${util.API_KEY}&primary_release_year=${year}`;
    }
    if (rate !== 'Choose Rating...') {
      path = `https://api.themoviedb.org/3/discover/movie?api_key=${util.API_KEY}&vote_average.gte=${rate}`;
    }
    $.ajax({
      method: 'GET',
      url: path,
      data: {
        movie: 'Jumanji',
      },
      success: (data) => {
        console.log(data, 'data');
        this.setState({
          movies: data.results,
        });
      },
      error: (err) => {
        console.log(err, 'Error');
      },
    });
    this.form();
  }

  form() {
    const { years } = this.state;
    const genre = ['Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'History', 'Horror', 'Music', 'Mystery', 'Romance', 'Science_Fiction', 'TV_Movie', 'Thriller', 'War', 'Western'];
    const rate = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    rate.sort((a, b) => b - a);
    return (
      <form id="form" className="form bg-light border-top border-bottom rounded col-sm-3" onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group col-sm">
          <label className="h5">Genre</label>
          <select id="genre" className="form-control">
            <option>Choose Genre...</option>
            {genre.map((elem, i) => <option key={i}>{elem}</option>)}
          </select>
        </div>
        <div className="form-group col-sm">
          <label className="h5">Year</label>
          <select id="year" className="form-control">
            <option>Choose Year...</option>
            {years.map((elem, i) => <option key={i}>{elem}</option>)}
          </select>
        </div>
        <div className="form-group col-sm">
          <label className="h5">Rating</label>
          <select id="rate" className="form-control">
            <option>Choose Rating...</option>
            {rate.map((elem, i) => <option key={i}>{elem}</option>)}
          </select>
        </div>

        <div className="col-sm">
          <button className="btn btn-success btn-block">Submit</button>
        </div>
      </form>
    );
  }

  // {/* HOW TO OBTAIN POSTER!
  // <img src="https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg" /> */}

  render() {
    return (
      this.form()
    );
  }
}


export default Form;

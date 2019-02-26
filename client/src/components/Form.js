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
import getAllPageData from '../../../helpers/util';

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
      total_pages: 0,
      isLoading: '',
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

  getRandomInt(num) {
    return Math.floor(Math.random() * Math.floor(num));
  }

  getRandomFilm() {
    const { movies } = this.state;
    return movies[this.getRandomInt(movies.length)];
  }

  // getAllPageData(genre, year, rate, pageCount) {
  //   const allData = [];
  //   for (let page = 1; page <= pageCount; page++) {
  //     let path = '';
  //     if (genre !== undefined && year !== 'Choose Year...' && rate !== 'Choose Rating...') {
  //       console.log('genre year and rating');
  //       path = `https://api.themoviedb.org/3/discover/movie?api_key=${util.API_KEY}&primary_release_year=${year}&vote_average.gte=${rate}&with_genres=${genre}&page=${page}`;
  //     }
  //     if (genre !== undefined && rate !== 'Choose Rating...' && year === 'Choose Year...') {
  //       console.log('genre and rating');
  //       path = `https://api.themoviedb.org/3/discover/movie?api_key=${util.API_KEY}&vote_average.gte=${rate}&with_genres=${genre}&page=${page}`;
  //     }
  //     if (genre !== undefined && year !== 'Choose Year...' && rate === 'Choose Rating...') {
  //       console.log('genre and year');
  //       path = `https://api.themoviedb.org/3/discover/movie?api_key=${util.API_KEY}&primary_release_year=${year}&with_genres=${genre}&page=${page}`;
  //     }
  //     if (year !== 'Choose Year...' && rate !== 'Choose Rating...' && genre === undefined) {
  //       console.log('year and rating');
  //       path = `https://api.themoviedb.org/3/discover/movie?api_key=${util.API_KEY}&primary_release_year=${year}&vote_average.gte=${rate}&page=${page}`;
  //     }
  //     if (genre !== undefined && year === 'Choose Year...' && rate === 'Choose Rating...') {
  //       console.log('genre only');
  //       path = `https://api.themoviedb.org/3/discover/movie?api_key=${util.API_KEY}&with_genres=${genre}&page=${page}`;
  //     }
  //     if (year !== 'Choose Year...' && rate === 'Choose Rating...' && genre === undefined) {
  //       console.log('year only');
  //       path = `https://api.themoviedb.org/3/discover/movie?api_key=${util.API_KEY}&primary_release_year=${year}&page=${page}`;
  //     }
  //     if (rate !== 'Choose Rating...' && year === 'Choose Year...' && genre === undefined) {
  //       console.log('rating only');
  //       path = `https://api.themoviedb.org/3/discover/movie?api_key=${util.API_KEY}&vote_average.gte=${rate}&page=${page}`;
  //     }
  //     $.ajax({
  //       method: 'GET',
  //       url: path,
  //       success: (data) => {
  //         const newData = data.results.toString().replace(/[\[\]']+/g, '');
  //         console.log(allData.push(newData));
  //       },
  //       error: (err) => {
  //         console.log(err, 'Error');
  //       },
  //     });
  //     path = '';
  //     console.log(allData, 'All Data');
  //   }
  // }


  setLoading(e) {
    e.preventDefault();
    this.setState({
      isLoading: true,
    });
    this.handleSubmit(e);
  }


  handleSubmit(e) {
    // e.preventDefault();
    // this.setState({
    //   isLoading: true,
    // });
    const { genres } = this.state;
    const genreId = genres[e.target.genre.value];
    console.log(genreId, 'genreId');
    const year = e.target.year.value;
    console.log(year, 'year');
    const rate = e.target.rate.value;
    console.log(rate, 'rate');
    let path = '';
    if (genreId !== undefined && year !== 'Choose Year...' && rate !== 'Choose Rating...') {
      console.log('genre year and rating');
      path = `https://api.themoviedb.org/3/discover/movie?api_key=${util.API_KEY}&primary_release_year=${year}&vote_average.gte=${rate}&with_genres=${genreId}&page=3`;
    }
    if (genreId !== undefined && rate !== 'Choose Rating...' && year === 'Choose Year...') {
      console.log('genre and rating');
      path = `https://api.themoviedb.org/3/discover/movie?api_key=${util.API_KEY}&vote_average.gte=${rate}&with_genres=${genreId}`;
    }
    if (genreId !== undefined && year !== 'Choose Year...' && rate === 'Choose Rating...') {
      console.log('genre and year');
      path = `https://api.themoviedb.org/3/discover/movie?api_key=${util.API_KEY}&primary_release_year=${year}&with_genres=${genreId}`;
    }
    if (year !== 'Choose Year...' && rate !== 'Choose Rating...' && genreId === undefined) {
      console.log('year and rating');
      path = `https://api.themoviedb.org/3/discover/movie?api_key=${util.API_KEY}&primary_release_year=${year}&vote_average.gte=${rate}`;
    }
    if (e.target.genre.value !== undefined && year === 'Choose Year...' && rate === 'Choose Rating...') {
      console.log('genre only');
      path = `https://api.themoviedb.org/3/discover/movie?api_key=${util.API_KEY}&with_genres=${genreId}`;
    }
    if (year !== 'Choose Year...' && rate === 'Choose Rating...' && genreId === undefined) {
      console.log('year only');
      path = `https://api.themoviedb.org/3/discover/movie?api_key=${util.API_KEY}&primary_release_year=${year}`;
    }
    if (rate !== 'Choose Rating...' && year === 'Choose Year...' && genreId === undefined) {
      console.log('rating only');
      path = `https://api.themoviedb.org/3/discover/movie?api_key=${util.API_KEY}&vote_average.gte=${rate}`;
    }
    $.ajax({
      method: 'GET',
      url: path,
      success: (data) => {
        const end = data.total_pages;
        console.log(data, 'data');
        // RECEIVE THE DATA PUT THE NEW DATA ARRAY INTO A NEW ARRAY
        getAllPageData(genreId, year, rate, end);
        // GRAB TOTAL PAGES ADD IT IN AN END VARIABLE
        // GET SPECIFIED CRITERIA ITERATING THROUGH PAGES
        // PUSH EVERY PAGE DATA INTO PREVIOUS ARRAY
        // THEN SAVE TO STATE
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
      <form id="form" className="form bg-light border-top border-bottom rounded col-sm-6" onSubmit={this.setLoading.bind(this)}>
        <div className="form-group">
          <p className="h4">Random Movie Picker</p>
          <hr />
        </div>
        <div className="form-row">
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
        </div>

        <div className="col-sm">
          <button className="btn btn-success btn-lg">Submit</button>
        </div>
      </form>
    );
  }

  output() {
    const { isLoading } = this.state;
    if (isLoading === true) {
      return (
        <div className="d-flex justify-content-center">
          <img src="https://media0.giphy.com/media/RFKILHZhSeGEo/giphy.gif?cid=3640f6095c7474d36751495363cdce49" />
          {/* <img src="https://media0.giphy.com/media/l4FGoYymDa4GlEvjq/giphy.gif?cid=3640f6095c74754a6871477532eb6aa0" /> */}
        </div>
      );
    }
    return (
      <div className="form-row">
        {console.log(this.getRandomFilm(), 'FILM')}
      </div>
    );
  }

  // {/* HOW TO OBTAIN POSTER!
  // <img src="https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg" /> */}

  render() {
    return (
      <div>
        {this.form()}
        {this.output()}
      </div>
    );
  }
}


export default Form;

const $ = require('jquery');

async function getAllPageData(genre, year, rate, pageCount) {
  const allData = [];
  for (let page = 1; page <= pageCount; page++) {
    let path = '';
    if (genre !== undefined && year !== 'Choose Year...' && rate !== 'Choose Rating...') {
      console.log('genre year and rating');
      path = `https://api.themoviedb.org/3/discover/movie?api_key=${util.API_KEY}&primary_release_year=${year}&vote_average.gte=${rate}&with_genres=${genre}&page=${page}`;
    }
    if (genre !== undefined && rate !== 'Choose Rating...' && year === 'Choose Year...') {
      console.log('genre and rating');
      path = `https://api.themoviedb.org/3/discover/movie?api_key=${util.API_KEY}&vote_average.gte=${rate}&with_genres=${genre}&page=${page}`;
    }
    if (genre !== undefined && year !== 'Choose Year...' && rate === 'Choose Rating...') {
      console.log('genre and year');
      path = `https://api.themoviedb.org/3/discover/movie?api_key=${util.API_KEY}&primary_release_year=${year}&with_genres=${genre}&page=${page}`;
    }
    if (year !== 'Choose Year...' && rate !== 'Choose Rating...' && genre === undefined) {
      console.log('year and rating');
      path = `https://api.themoviedb.org/3/discover/movie?api_key=${util.API_KEY}&primary_release_year=${year}&vote_average.gte=${rate}&page=${page}`;
    }
    if (genre !== undefined && year === 'Choose Year...' && rate === 'Choose Rating...') {
      console.log('genre only');
      path = `https://api.themoviedb.org/3/discover/movie?api_key=${util.API_KEY}&with_genres=${genre}&page=${page}`;
    }
    if (year !== 'Choose Year...' && rate === 'Choose Rating...' && genre === undefined) {
      console.log('year only');
      path = `https://api.themoviedb.org/3/discover/movie?api_key=${util.API_KEY}&primary_release_year=${year}&page=${page}`;
    }
    if (rate !== 'Choose Rating...' && year === 'Choose Year...' && genre === undefined) {
      console.log('rating only');
      path = `https://api.themoviedb.org/3/discover/movie?api_key=${util.API_KEY}&vote_average.gte=${rate}&page=${page}`;
    }
    $.ajax({
      method: 'GET',
      url: path,
      success: (data) => {
        const newData = data.results.toString().replace(/[\[\]']+/g, '');
        console.log(allData.push(newData));
      },
      error: (err) => {
        console.log(err, 'Error');
      },
    });
    path = '';
    console.log(allData, 'All Data');
  }
}


export default getAllPageData();

const axios = require('axios');

// https://yts.mx/api

const sortBy = 'download_count';
const getMovies = () => {
    axios
        .get(`https://yts.mx/api/v2/list_movies.json?sort_by=${sortBy}`)
        // API 요청이 성공하면 movies 배열을 다음 성공(then) 핸들러에 리턴한다.
        .then(response => {
            const { data: { data: { movies = [] } } = {} } = response;
            if (movies.length > 0) return movies;
        })
        // 리턴받은  값을 통해 2018년 최고의 영화제목들을 출력한다.
        .then(result => {
            const movies = result;
            movies.forEach(movie => {
                if (movie.year === 2018) {
                    console.log(movie.title);
                }
            });
        })
        .catch(error => {
            console.error(error);
        });
};
getMovies();

// ------------------------------------------------------------------------------

const getMovies2 = async () => {
    try {
        const { data: { data: { movies = [] } } = {} } = await axios.get(
            `https://yts.mx/api/v2/list_movies.json?sort_by=${sortBy}`
        );
        if (movies.length > 0) {
            movies.forEach(movie => {
                if (movie.year === 2018) {
                    console.log(movie.title);
                }
            });
        }
    } catch (e) {
        console.error(e);
    }
};
getMovies2();

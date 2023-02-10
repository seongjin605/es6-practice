const axios = require('axios');

const getAccount = () => {
  try {
    // const { data } = axios.get(
    //   `http://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=f5eef3421c602c6cb7ea224104795888`
    // );
    const result = axios
      .get(
        `http://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=f5eef3421c602c6cb7ea224104795888`
      )
      .then(data => console.log(data));
    // console.log('result:', result);
  } catch (e) {
    console.error(e.response.data);
  }
};

getAccount();

const axios = require('axios');

const getAccount = async () => {
  try {
    const { data } = await axios.get(
      `http://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=f5eef3421c602c6cb7ea224104795888`
    );
    console.log('data:', data);
  } catch (e) {
    console.error(e.response.data);
  }
};

getAccount();

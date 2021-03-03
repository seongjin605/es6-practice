const axios = require('axios');

const getAccount = async () => {
  try {
    // const { data } = await axios.get(
    //     `http://www.inven.co.kr/board/archeage/4581/100077`
    // );

    for (let i = 0; i < 100; i++) {
      await axios.get(`http://www.inven.co.kr/board/archeage/4581/100077`);
    }
    // if (data) {
    //     console.log(data);
    // }
  } catch (e) {
    console.error(e.response.data);
  }
};

getAccount(2);

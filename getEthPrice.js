const axios = require("axios");

const init = async () => {
  const url = "https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=ETH";
  const response = await axios.get(url);
  console.log(response.data.ETH);
};

init();

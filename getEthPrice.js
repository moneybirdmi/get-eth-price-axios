const axios = require("axios");

const init = async () => {
  // Make a request for a user with a given ID
  axios
    .get("https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=ETH")
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};

init();

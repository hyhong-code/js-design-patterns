// Proxy Pattern
// Proxy pattern uses one object (proxy) to act as the placeholder / middleman
// for another object. Proxy object controls the access / interaction between
// user and the other object.

function CryptocurrencyAPI() {
  this.getValue = async function (type) {
    console.log("Calling external API... Takes 1 second.");

    // Mock a network request
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        switch (type) {
          case "Bitcoin":
            resolve("$8000.00");
          case "Litecoin":
            resolve("$50.00");
          case "Ethereum":
            resolve("$3000.00");
          default:
            reject("Coin type not supported!");
        }
      }, 1000); // Network request takes 1 second each
    });
  };
}

// Makes 5 network requests, takes 5 seconds.
const api = new CryptocurrencyAPI();
const bunchOfRequests = async () => {
  console.log(await api.getValue("Bitcoin"));
  console.log(await api.getValue("Ethereum"));
  console.log(await api.getValue("Litecoin"));
  console.log(await api.getValue("Bitcoin"));
  console.log(await api.getValue("Ethereum"));
};
bunchOfRequests();
/*
Calling external API... Takes 1 second.
$8000.00
Calling external API... Takes 1 second.
$3000.00
Calling external API... Takes 1 second.
$50.00
Calling external API... Takes 1 second.
$8000.00
Calling external API... Takes 1 second.
$3000.00
*/

function CryptocurrencyProxy() {
  this.api = new CryptocurrencyAPI();
  this.cache = {};

  this.getValue = async function (type) {
    if (!this.cache[type]) {
      this.cache[type] = await this.api.getValue(type);
    } else {
      console.log("Value was cached... Takes 0 second.");
    }
    return this.cache[type];
  };
}

// Makes 3 network requests, takes about 3 seconds.
const proxy = new CryptocurrencyProxy();
const bunchOfRequestsWithProxy = async () => {
  console.log(await proxy.getValue("Bitcoin"));
  console.log(await proxy.getValue("Ethereum"));
  console.log(await proxy.getValue("Litecoin"));
  console.log(await proxy.getValue("Bitcoin"));
  console.log(await proxy.getValue("Ethereum"));
};
bunchOfRequestsWithProxy();
/*
Calling external API... Takes 1 second.
$8000.00
Calling external API... Takes 1 second.
$3000.00
Calling external API... Takes 1 second.
$50.00
Value was cached... Takes 0 second.
$8000.00
Value was cached... Takes 0 second.
$3000.00
*/

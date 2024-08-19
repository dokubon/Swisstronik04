require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.20",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`891e59fb35be0e83f1150d45d48a34f2a43d06bd58402b2c8828edf5ac244d16`],
    },
  },
};

const Web3 = require("web3");


const getweb3 = async() => {
    
    const web3 = new Web3("HTTP://127.0.0.1:8545")

    const id = await web3.eth.net.getId();
    console.log(id)

    const accounts = await web3.eth.getAccounts();
    console.log(accounts)

}

getweb3();

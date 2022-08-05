const path = require('path');
const fs = require('fs');
var Tx = require('ethereumjs-tx').Transaction;
const Web3 = require('web3');
const web3 = new Web3('HTTP://127.0.0.1:7545'); // ganache network

const account1 = '0xF39F873336415759986B7523B6eE67cFA31844b6';

const privateKey1 = Buffer.from('b8a885ea5928381f5b43258f60044ff30efd51e75d1a120b89ed38deac7d9d09', 'hex');

const contractJsonPath = path.resolve(__dirname, 'contracts', 'cbdc-contract.json');
const contractJson = JSON.parse(fs.readFileSync(contractJsonPath));
const contractABI = contractJson.abi;
const contractBytecode = contractJson.bytecode;

web3.eth.getTransactionCount(account1, (err, txCount) => {
  let contract = new web3.eth.Contract(contractABI);
  // smart contract data
  const data = contract.deploy({
    data: contractBytecode
  }).encodeABI();
  
  // build transaction
  const txObject = {
    nonce: web3.utils.toHex(txCount),
    gasLimit: web3.utils.toHex(6721975),
    gasPrice: web3.utils.toHex(20000000000),
    data: data
  }

  console.log(txObject);

  // sign the transaction
  const tx = new Tx(txObject);
  tx.sign(privateKey1);

  const serializedTransaction = tx.serialize();
  const raw = '0x' + serializedTransaction.toString('hex');

  // broadcast transaction
  web3.eth.sendSignedTransaction(raw, (err, txHash) => {
    console.log('txHash', txHash);
  })
});

// // retrieve the contract address after deployment and this function calls should work
// let contractAddress = "0xbCF0BF6DDEbF9EE41d3C21A608516174c9b629e5";
// let cbdcContract = new web3.eth.Contract(contractABI, contractAddress);

// cbdcContract.methods.decimals().call((err, result) => console.log(result));
// cbdcContract.methods.owner().call((err, result) => console.log(result));


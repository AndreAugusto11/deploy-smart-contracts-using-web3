var Tx = require('ethereumjs-tx').Transaction;
const Web3 = require('web3');
const web3 = new Web3('HTTP://127.0.0.1:7545'); // ganache network

const account1 = '0xF39F873336415759986B7523B6eE67cFA31844b6';
const account2 = '0x89857f6423A51331A7762e1Fa257BE4621d2eFb6';

const privateKey1 = Buffer.from('b8a885ea5928381f5b43258f60044ff30efd51e75d1a120b89ed38deac7d9d09', 'hex');

web3.eth.getTransactionCount(account1, (err, txCount) => {
  // build transaction
  const txObject = {
    nonce: web3.utils.toHex(txCount),
    to: account2,
    value: web3.utils.toHex(web3.utils.toWei('1', 'ether')),
    gasLimit: web3.utils.toHex(6721975),
    gasPrice: web3.utils.toHex(20000000000)
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
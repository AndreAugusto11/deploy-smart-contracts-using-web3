var Tx = require('ethereumjs-tx').Transaction;
const Web3 = require('web3');
const web3 = new Web3('HTTP://127.0.0.1:8545'); // besu network
const { v4: uuidv4 } = require('uuid');

const genAccountPubKey = "0x627306090abaB3A6e1400e9345bC60c78a8BEf57";
const genAccountPrivKey = "c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3";

const ethTestAccount = web3.eth.accounts.create(uuidv4());

async function hey1() {
  const tx = await web3.eth.accounts.signTransaction(
    {
      from: genAccountPubKey,
      to: ethTestAccount.address,
      value: 10e8,
      gas: 1000000,
    },
    genAccountPrivKey,
  );
  
  if (!tx.rawTransaction) {
    throw new Error(`${fnTag} Signing transaction failed, reason unknown.`);
  }
  
  const receipt = await web3.eth.sendSignedTransaction(tx.rawTransaction);
  console.log(receipt);
}

hey1();
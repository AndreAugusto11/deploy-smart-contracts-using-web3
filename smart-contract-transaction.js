const path = require('path');
const fs = require('fs');
var Tx = require('ethereumjs-tx').Transaction;
const Web3 = require('web3');
const web3 = new Web3('HTTP://127.0.0.1:7545'); // ganache network

const account1 = '0xF39F873336415759986B7523B6eE67cFA31844b6';

const privateKey1 = Buffer.from('b8a885ea5928381f5b43258f60044ff30efd51e75d1a120b89ed38deac7d9d09', 'hex');

const contractAbiPath = path.resolve(__dirname, 'contracts', 'cbdc-contract.abi');
const contractABI = JSON.parse(fs.readFileSync(contractAbiPath));

web3.eth.getTransactionCount(account1, (err, txCount) => {
  // smart contract data
  const data = '0x60806040523480156200001157600080fd5b506040518060400160405280601a81526020017f43656e7472616c42616e6b4469676974616c43757272656e63790000000000008152506040518060400160405280600481526020017f43424443000000000000000000000000000000000000000000000000000000008152506200009e62000092620000ca60201b60201c565b620000d260201b60201c565b8160049081620000af919062000410565b508060059081620000c1919062000410565b505050620004f7565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200021857607f821691505b6020821081036200022e576200022d620001d0565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620002987fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000259565b620002a4868362000259565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620002f1620002eb620002e584620002bc565b620002c6565b620002bc565b9050919050565b6000819050919050565b6200030d83620002d0565b620003256200031c82620002f8565b84845462000266565b825550505050565b600090565b6200033c6200032d565b6200034981848462000302565b505050565b5b8181101562000371576200036560008262000332565b6001810190506200034f565b5050565b601f821115620003c0576200038a8162000234565b620003958462000249565b81016020851015620003a5578190505b620003bd620003b48562000249565b8301826200034e565b50505b505050565b600082821c905092915050565b6000620003e560001984600802620003c5565b1980831691505092915050565b6000620004008383620003d2565b9150826002028217905092915050565b6200041b8262000196565b67ffffffffffffffff811115620004375762000436620001a1565b5b620004438254620001ff565b6200045082828562000375565b600060209050601f83116001811462000488576000841562000473578287015190505b6200047f8582620003f2565b865550620004ef565b601f198416620004988662000234565b60005b82811015620004c2578489015182556001820191506020850194506020810190506200049b565b86831015620004e25784890151620004de601f891682620003d2565b8355505b6001600288020188555050505b505050505050565b611b8c80620005076000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063715018a611610097578063a457c2d711610066578063a457c2d71461029d578063a9059cbb146102cd578063dd62ed3e146102fd578063f2fde38b1461032d57610100565b8063715018a61461023b5780638da5cb5b1461024557806395d89b41146102635780639dc29fac1461028157610100565b8063313ce567116100d3578063313ce567146101a157806339509351146101bf57806340c10f19146101ef57806370a082311461020b57610100565b806306fdde0314610105578063095ea7b31461012357806318160ddd1461015357806323b872dd14610171575b600080fd5b61010d610349565b60405161011a919061115b565b60405180910390f35b61013d60048036038101906101389190611216565b6103db565b60405161014a9190611271565b60405180910390f35b61015b6103fe565b604051610168919061129b565b60405180910390f35b61018b600480360381019061018691906112b6565b610408565b6040516101989190611271565b60405180910390f35b6101a9610437565b6040516101b69190611325565b60405180910390f35b6101d960048036038101906101d49190611216565b610440565b6040516101e69190611271565b60405180910390f35b61020960048036038101906102049190611216565b610477565b005b61022560048036038101906102209190611340565b61048d565b604051610232919061129b565b60405180910390f35b6102436104d6565b005b61024d6104ea565b60405161025a919061137c565b60405180910390f35b61026b610513565b604051610278919061115b565b60405180910390f35b61029b60048036038101906102969190611216565b6105a5565b005b6102b760048036038101906102b29190611216565b6105bb565b6040516102c49190611271565b60405180910390f35b6102e760048036038101906102e29190611216565b610632565b6040516102f49190611271565b60405180910390f35b61031760048036038101906103129190611397565b610655565b604051610324919061129b565b60405180910390f35b61034760048036038101906103429190611340565b6106dc565b005b60606004805461035890611406565b80601f016020809104026020016040519081016040528092919081815260200182805461038490611406565b80156103d15780601f106103a6576101008083540402835291602001916103d1565b820191906000526020600020905b8154815290600101906020018083116103b457829003601f168201915b5050505050905090565b6000806103e661075f565b90506103f3818585610767565b600191505092915050565b6000600354905090565b60008061041361075f565b9050610420858285610930565b61042b8585856109bc565b60019150509392505050565b60006012905090565b60008061044b61075f565b905061046c81858561045d8589610655565b6104679190611466565b610767565b600191505092915050565b61047f610c3e565b6104898282610cbc565b5050565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6104de610c3e565b6104e86000610e1c565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606005805461052290611406565b80601f016020809104026020016040519081016040528092919081815260200182805461054e90611406565b801561059b5780601f106105705761010080835404028352916020019161059b565b820191906000526020600020905b81548152906001019060200180831161057e57829003601f168201915b5050505050905090565b6105ad610c3e565b6105b78282610ee0565b5050565b6000806105c661075f565b905060006105d48286610655565b905083811015610619576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106109061152e565b60405180910390fd5b6106268286868403610767565b60019250505092915050565b60008061063d61075f565b905061064a8185856109bc565b600191505092915050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6106e4610c3e565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610753576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161074a906115c0565b60405180910390fd5b61075c81610e1c565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036107d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107cd90611652565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610845576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083c906116e4565b60405180910390fd5b80600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610923919061129b565b60405180910390a3505050565b600061093c8484610655565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146109b657818110156109a8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161099f90611750565b60405180910390fd5b6109b58484848403610767565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610a2b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a22906117e2565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610a9a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9190611874565b60405180910390fd5b610aa58383836110b8565b6000600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610b2c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b2390611906565b60405180910390fd5b818103600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610bc19190611466565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610c25919061129b565b60405180910390a3610c388484846110bd565b50505050565b610c4661075f565b73ffffffffffffffffffffffffffffffffffffffff16610c646104ea565b73ffffffffffffffffffffffffffffffffffffffff1614610cba576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cb190611972565b60405180910390fd5b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610d2b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d22906119de565b60405180910390fd5b610d37600083836110b8565b8060036000828254610d499190611466565b9250508190555080600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610d9f9190611466565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610e04919061129b565b60405180910390a3610e18600083836110bd565b5050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610f4f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f4690611a70565b60405180910390fd5b610f5b826000836110b8565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610fe2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fd990611b02565b60405180910390fd5b818103600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816003600082825461103a9190611b22565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161109f919061129b565b60405180910390a36110b3836000846110bd565b505050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b838110156110fc5780820151818401526020810190506110e1565b8381111561110b576000848401525b50505050565b6000601f19601f8301169050919050565b600061112d826110c2565b61113781856110cd565b93506111478185602086016110de565b61115081611111565b840191505092915050565b600060208201905081810360008301526111758184611122565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006111ad82611182565b9050919050565b6111bd816111a2565b81146111c857600080fd5b50565b6000813590506111da816111b4565b92915050565b6000819050919050565b6111f3816111e0565b81146111fe57600080fd5b50565b600081359050611210816111ea565b92915050565b6000806040838503121561122d5761122c61117d565b5b600061123b858286016111cb565b925050602061124c85828601611201565b9150509250929050565b60008115159050919050565b61126b81611256565b82525050565b60006020820190506112866000830184611262565b92915050565b611295816111e0565b82525050565b60006020820190506112b0600083018461128c565b92915050565b6000806000606084860312156112cf576112ce61117d565b5b60006112dd868287016111cb565b93505060206112ee868287016111cb565b92505060406112ff86828701611201565b9150509250925092565b600060ff82169050919050565b61131f81611309565b82525050565b600060208201905061133a6000830184611316565b92915050565b6000602082840312156113565761135561117d565b5b6000611364848285016111cb565b91505092915050565b611376816111a2565b82525050565b6000602082019050611391600083018461136d565b92915050565b600080604083850312156113ae576113ad61117d565b5b60006113bc858286016111cb565b92505060206113cd858286016111cb565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061141e57607f821691505b602082108103611431576114306113d7565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611471826111e0565b915061147c836111e0565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156114b1576114b0611437565b5b828201905092915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b60006115186025836110cd565b9150611523826114bc565b604082019050919050565b600060208201905081810360008301526115478161150b565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006115aa6026836110cd565b91506115b58261154e565b604082019050919050565b600060208201905081810360008301526115d98161159d565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b600061163c6024836110cd565b9150611647826115e0565b604082019050919050565b6000602082019050818103600083015261166b8161162f565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b60006116ce6022836110cd565b91506116d982611672565b604082019050919050565b600060208201905081810360008301526116fd816116c1565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b600061173a601d836110cd565b915061174582611704565b602082019050919050565b600060208201905081810360008301526117698161172d565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b60006117cc6025836110cd565b91506117d782611770565b604082019050919050565b600060208201905081810360008301526117fb816117bf565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b600061185e6023836110cd565b915061186982611802565b604082019050919050565b6000602082019050818103600083015261188d81611851565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b60006118f06026836110cd565b91506118fb82611894565b604082019050919050565b6000602082019050818103600083015261191f816118e3565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600061195c6020836110cd565b915061196782611926565b602082019050919050565b6000602082019050818103600083015261198b8161194f565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b60006119c8601f836110cd565b91506119d382611992565b602082019050919050565b600060208201905081810360008301526119f7816119bb565b9050919050565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b6000611a5a6021836110cd565b9150611a65826119fe565b604082019050919050565b60006020820190508181036000830152611a8981611a4d565b9050919050565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b6000611aec6022836110cd565b9150611af782611a90565b604082019050919050565b60006020820190508181036000830152611b1b81611adf565b9050919050565b6000611b2d826111e0565b9150611b38836111e0565b925082821015611b4b57611b4a611437565b5b82820390509291505056fea2646970667358221220e21933004f0b8d272a0091d67a3f210cda292a7b76f3234988f592a1701ea34464736f6c634300080f0033'
  
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

// // retrieve after deployment
// let contractAddress = "0xCE1E06dC38098d74Ca818782EfABA8c049C473eF";
// let cbdcContract = new web3.eth.Contract(contractABI, contractAddress);

// cbdcContract.methods.decimals().call((err, result) => console.log(result));
// cbdcContract.methods.owner().call((err, result) => console.log(result));


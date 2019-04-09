var FIBOS = require('fibos.js');
var config = require('../config.json');
var fibos_client = FIBOS({
  chainId: config.chainId,
  keyProvider: config.private_key,
  httpEndpoint: "http://api.testnet.fo",
});

let ctx = fibos_client.contractSync('eosio');

var r = ctx.buyramSync({
      payer: "payer", //购买存储资源的账号
      receiver: "receiver", //接受存储资源的账号
      quant: "quant" //购买存储资源所用的通证数量
},{
    authorization: config.producerName //私钥对应的账号 
});
console.log(r);
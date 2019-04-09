var FIBOS = require('fibos.js');
var config = require('../config.json');
var fibos_client = FIBOS({
  chainId: config.chainId,
  keyProvider: config.private_key,
  httpEndpoint: "http://api.testnet.fo",
});

let ctx = fibos_client.contractSync('eosio');

var r = ctx.buyrambytesSync({
      payer: "payer", //购买内存的账号
      receiver: "receiver", //接受内存的账号
      bytes: bytes  //购买的内存大小（字节）
},{
    authorization: config.producerName //私钥对应的账号 
});
console.log(r);
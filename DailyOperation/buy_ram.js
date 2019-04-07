const FIBOS = require('fibos.js');

const fibos_client = FIBOS({
  // fibos 测试网 chainId
  chainId: '68cee14f598d88d340b50940b6ddfba28c444b46cd5f33201ace82c78896793a',
  keyProvider: '你的私钥',
  httpEndpoint: "http://api.testnet.fo",
});

let ctx = fibos_client.contractSync('eosio');

var r = ctx.buyramSync({
      payer: "silver123451", //购买存储资源的账号
      receiver: "silver123451", //接受存储资源的账号
      quant: "0.1273 FO" //购买存储资源所用的通证数量
},{
    authorization: '私钥对应的账号' 
});
console.log(r);
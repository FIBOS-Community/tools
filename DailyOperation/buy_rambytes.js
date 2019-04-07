const FIBOS = require('fibos.js');

const fibos_client = FIBOS({
  // fibos 测试网 chainId
  chainId: '68cee14f598d88d340b50940b6ddfba28c444b46cd5f33201ace82c78896793a',
  keyProvider: '你的私钥',
  httpEndpoint: "http://api.testnet.fo",
});

let ctx = fibos_client.contractSync('eosio');

var r = ctx.buyrambytesSync({
      payer: "fibosmaster1",  //创建者的账户名
      receiver: "yunyu1212122", //被创建者的账户名
      bytes: 4096  //购买的内存大小（字节）
},{
    authorization: '私钥对应的账号' 
});
console.log(r);
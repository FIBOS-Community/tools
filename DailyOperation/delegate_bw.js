var FIBOS = require('fibos.js');
var config = require('../config.json');
var fibos_client = FIBOS({
  chainId: config.chainId,
  keyProvider: config.private_key,
  httpEndpoint: "http://api.testnet.fo",
});

let ctx = fibos_client.contractSync('eosio');

//抵押资源
var r = ctx.delegatebwSync({
      from: "from",  //资源抵押者的账户名
      receiver: "receiver",  //资源接受者的账户名
      stake_net_quantity: "stake_net_quantity",  //抵押者为接受者抵押 FO 获取 NET
      stake_cpu_quantity: "stake_cpu_quantity",  //  抵押者为接受者抵押 FO 获取 CPU
      transfer: 0  // 代表抵押资源同时是否将对应通证转账给接受者
},{
    authorization: '私钥对应的账号' 
});
console.log(r);

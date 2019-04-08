var FIBOS = require('fibos.js');
var config = require('../config.json');
var fibos_client = FIBOS({
  chainId: config.chainId,
  keyProvider: config.private_key,
  httpEndpoint: "http://api.testnet.fo",
});

let ctx = fibos_client.contractSync('eosio');

//解压资源
var r = ctx.undelegatebwSync({
      from: 'from',  //解除用哪个账号所抵押的通证
      receiver: 'receiver',  //解除作用在哪个账号上的抵押通证
      unstake_net_quantity: 'unstake_net_quantity', //解除用来获取带宽资源的通证数量
      unstake_cpu_quantity: 'unstake_cpu_quantity' //解除用来获取计算资源的通证数量
},{
    authorization: '私钥对应的账号' 
});
console.log(r);
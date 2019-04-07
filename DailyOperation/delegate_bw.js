const FIBOS = require('fibos.js');

const fibos_client = FIBOS({
  // fibos 测试网 chainId
  chainId: '68cee14f598d88d340b50940b6ddfba28c444b46cd5f33201ace82c78896793a',
  keyProvider: '你的私钥',
  httpEndpoint: "http://api.testnet.fo",
});

let ctx = fibos_client.contractSync('eosio');

//抵押资源
var r = ctx.delegatebwSync({
      from: "slowmistioio",  //资源抵押者的账户名
      receiver: "slowmistioio",  //资源接受者的账户名
      stake_net_quantity: "3193.0000 FO",  //抵押者为接受者抵押 FO 获取 NET
      stake_cpu_quantity: "30000.0000 FO",  //  抵押者为接受者抵押 FO 获取 CPU
      transfer: 0  // 代表抵押资源同时是否将对应通证转账给接受者
},{
    authorization: '私钥对应的账号' 
});
console.log(r);

//解压资源
var r2 = ctx.undelegatebwSync({
      from: 'hoffercq1211',  //解除用哪个账号所抵押的通证
      receiver: 'hoffercq1211',  //解除作用在哪个账号上的抵押通证
      unstake_net_quantity: '649540.0000 FO', //解除用来获取带宽资源的通证数量
      unstake_cpu_quantity: '649540.0000 FO' //解除用来获取计算资源的通证数量
},{
    authorization: '私钥对应的账号' 
});
console.log(r2);
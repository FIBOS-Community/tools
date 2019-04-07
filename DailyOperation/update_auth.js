var FIBOS = require('fibos.js');

//账户 hellofibos01 的公私钥对
let pubkey = 'your public key';
let prikey = 'your private key';

//账户 hellofibos02 的公私钥对
let pubkey2 = 'your public key2';
let prikey2 = 'your private key2';

var name = 'hellofibos01';
var name2 = 'hellofibos02';

//创建 hellofibos02 账户

var fibos = FIBOS({
  chainId: 'cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f',
  keyProvider: 'your keyProvider',
  httpEndpoint: 'http://127.0.0.1:8888',
  logger: {
    log: null,
    error: null
  }
});
fibos.newaccountSync({
  creator: 'eosio',
  name: name2,
  owner: pubkey2,
  active: pubkey2
});


//修改hellofibos01 的active权限,客户端 需要更改为 hellofibos01 的私钥
fibos = FIBOS({
  chainId: 'cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f',
  keyProvider: 'your private key',
  httpEndpoint: 'http://127.0.0.1:8888',
  logger: {
    log: null,
    error: null
  }
});

let ctx = fibos.contractSync('eosio');
ctx.updateauthSync({
  account: name,
  permission: 'active',
  parent: 'owner',
  auth: {
    threshold: 1,
    keys: [{
      key: 'FO5UFAzxUsbjQCijL5LtS6TaTtkJgPJACZ8qwDpXyLaW3sE9Ed2D',
      weight: 1
    }]
  }
});

var c = fibos.getAccountSync(name);
console.notice(c);
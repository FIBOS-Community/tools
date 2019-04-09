var FIBOS = require('fibos.js');
var config = require('../config.json');
var special_config = {
    httpEndpoint: 'http://ca-rpc.fibos.io:8870',
    verbose: false,
}
fibos = FIBOS({
    chainId: config.chainId,
    keyProvider: config.private_key,
    httpEndpoint: special_config.httpEndpoint,
    logger: {
      log: null,
      error: null
    }
});

let ctx = fibos.contractSync('eosio');
ctx.updateauthSync({
  account: name,//修改权限的账户
  permission: 'permission',
  parent: 'parent',
  auth: {
    threshold: 1,
    keys: [{
      key: 'new public key',
      weight: 1
    }]
  }
});

var r = fibos.getAccountSync(name);
console.notice(r);
var FIBOS = require('fibos.js');
var config = require('../config.json');
var fibos_client = FIBOS({
  chainId: config.chainId,
  keyProvider: config.private_key,
  httpEndpoint: 'http://api.testnet.fo',
  logger: {
    log: null,
    error: null
  }
});

fibos_client.newaccount({
    creator: "Creator Name", //创建者的账户名
    name: "Account Name", //被创建者的账户名
    owner: "Owner Key", //被创建者账户 owner 权限公钥
    active: "Active Key" //被创建者 active 权限公钥
});
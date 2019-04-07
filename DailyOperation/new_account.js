var FIBOS = require('fibos.js');
var fibos_client = FIBOS({
  chainId: '68cee14f598d88d340b50940b6ddfba28c444b46cd5f33201ace82c78896793a',
  keyProvider: 'creator_priKey',
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
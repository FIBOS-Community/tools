var FIBOS = require('fibos.js');
var config = {
    chainId: '6aa7bd33b6b45192465afa3553dedb531acaaff8928cf64b70bd4c5e49b7ec6a',
    priKey: 'privateKey',
    httpEndpoint: 'http://ca-rpc.fibos.io:8870',
    verbose: false,
}
var fibos = FIBOS({
    chainId: config.chainId,
    keyProvider: config.priKey,
    httpEndpoint: config.httpEndpoint,
    verbose: false,
    logger: {
        log: null,
        error: null
    }
})
var ctx = fibos.contractSync('eosio');
 
var fibosnodes = ['fibosbpnodec','fibosbpnodeb','fibosbpnodea']; // 具体账号数据请开发者根据实际情况自行填写
fibosnodes.sort()；

var a = ctx.voteproducerSync('fibostest123', 'fibostest321', fibosnodes); // 具体账号数据请开发者根据实际情况自行填写
//中间参数为代理，不填表示fibostest123直接给 BP 投票，填入则是通过代理fibostest321给 BP 投票。
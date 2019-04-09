## FIBOS工具箱

## BP工具

config.json文件参数说明

```
var config = {
  'chainId':'chainId',// chainID
  'producer-name': 'producer-name', // producer 名称
  'public-key': 'producer public key', // producer 公钥
  'private-key': 'producer private key' // producer 私钥
};
```

1. 注册BP

   初始化一个 FIBOS 客户端，通过调用regproducerSync方法，传入四个参数进行注册。

   参数含义：

   | 参数         | 含义                         |
   | :----------- | :--------------------------- |
   | producerName | 区块生产者账户名             |
   | publicKey    | 区块生产者公钥               |
   | url          | 区块生产者宣传网站           |
   | location     | 区块生产者服务器位置地区代码 |

   发起注册 BP 操作：

   fibos register_bp.js

2. 注册BP详情

   ***注** 该BP账号必须被投票数不为0才可以添加节点信息

   通过调用getTableRowsSync方法，查看列表,调用setSync方法，添加节点信息

   操作：

   fibos unregister_bp_details_set.js

   通过调用delSync方法，删除节点信息

   操作：

   fibos unregister_bp_details_del.js

3. 领取工资

   初始化一个 FIBOS 客户端，通过调用claimrewardsSync方法，传入1个参数进行领取工资。

   参数含义：

   | 参数         | 含义                         |
   | :----------- | :--------------------------- |
   | producerName | 要领取工资的区块生产者账户名 |

   发起领取工资操作：

   fibos claimre_wards.js

4. 注销BP

   初始化一个 FIBOS 客户端，通过调用unregprodSync方法，传入1个参数进行注销BP。

   参数含义：

   | 参数         | 含义                     |
   | :----------- | :----------------------- |
   | producerName | 要注销的区块生产者账户名 |

   发起领取工资操作：

   fibos unregister_bp.js

   

## 日常操作

1. 创建账号

   初始化一个 FIBOS 客户端，通过调用 newaccount 方法，传入4个参数进行创建账号。

   | 参数    | 含义                        |
   | :------ | :-------------------------- |
   | creator | 创建者的账户名              |
   | name    | 被创建者的账户名            |
   | owner   | 被创建者账户 owner 权限公钥 |
   | active  | 被创建者 active 权限公钥    |

   发起创建账号操作：

   fibos new_account.js

2. 购买资源

   初始化一个 FIBOS 客户端，通过调用 buyramSync 方法，传入4个参数进行购买资源。

   | 参数          | 含义                       |
   | :------------ | :------------------------- |
   | payer         | 购买存储资源的账号         |
   | receiver      | 接受存储资源的账号         |
   | quant         | 购买存储资源所用的通证数量 |
   | authorization | 私钥对应的账号             |

   发起购买资源操作：

   fibos buy_ram.js

3. 购买内存

   初始化一个 FIBOS 客户端，通过调用 buyrambytesSync 方法，传入4个参数购买内存。

   | 参数          | 含义                   |
   | :------------ | :--------------------- |
   | payer         | 购买内存的账号         |
   | receiver      | 接受内存的账号         |
   | quant         | 购买的内存大小（字节） |
   | authorization | 私钥对应的账号         |

   发起购买内存操作：

   fibos buy_rambytes.js

4. 抵押资源/解压资源

   初始化一个 FIBOS 客户端，通过调用 delegatebwSync 方法，传入5个参数抵押资源。

   | 参数               | 含义                                                         |
   | :----------------- | :----------------------------------------------------------- |
   | from               | 资源抵押者的账户名                                           |
   | receiver           | 资源接受者的账户名                                           |
   | stake_net_quantity | 抵押者为接受者抵押 FO 获取 NET                               |
   | stake_cpu_quantity | 抵押者为接受者抵押 FO 获取 CPU                               |
   | transfer           | 0 : 表示使用自己的资源为他人抵押；1 : 表示赠送资源给他人并抵押。注意：自己为自己抵押资源的时候，只能填 0 |

   发起抵押资源操作：

   fibos delegate_bw.js

   初始化一个 FIBOS 客户端，通过调用 undelegatebwSync 方法，传入4个参数解压资源。

   | 参数                 | 含义                           |
   | :------------------- | :----------------------------- |
   | from                 | 解除用哪个账号所抵押的通证     |
   | receiver             | 解除作用在哪个账号上的抵押通证 |
   | unstake_net_quantity | 解除用来获取带宽资源的通证数量 |
   | unstake_cpu_quantity | 解除用来获取计算资源的通证数量 |

   发起解压资源操作：

   fibos undelegate_bw.js

5. 修改权限

   初始化一个 FIBOS 客户端，通过调用 updateauthSync 方法，传入4个参数解压资源。

   | 参数       | 含义             |
   | :--------- | :--------------- |
   | permission | 需要更改的权限   |
   | parent     | 权限所属         |
   | key        | 将权限改为该公钥 |

   发起修改操作：

   fibos updateauth.js

6. 投票

   初始化一个 FIBOS 客户端，通过调用 voteproducerSync 方法，传入3个参数进行投票。

   | 参数       | 含义                                                         |
   | :--------- | :----------------------------------------------------------- |
   | account    | 资源抵押者的账户名                                           |
   | 中间的参数 | 为代理账户，不填表示直接给 BP 投票                           |
   | fibosnodes | 投票节点列表，需要由开发者自己按照字母序排序，一次性最多可以给30个 BP 投票 |

   发起投票操作：

   fibos vote.js

7. 代理投票

   初始化一个 FIBOS 客户端，通过调用 voteproducerSync 方法，传入3个参数进行投票。

   | 参数       | 含义                                                         |
   | :--------- | :----------------------------------------------------------- |
   | account    | 资源抵押者的账户名                                           |
   | 中间的参数 | 为代理账户，填入则是通过代理账户给 BP 投票                   |
   | fibosnodes | 投票节点列表，需要由开发者自己按照字母序排序，一次性最多可以给30个 BP 投票 |

   发起代理投票操作：

   fibos vote_agency.js
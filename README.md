# FIBOS 工具箱

## BP 工具

1. #### 配置 config.json 参数

   首先需要配置 config.json 文件的4个参数。

   config.json 文件参数说明 

   ```
   var config = {
     'chainId':'chainId',// chainID
     'producer-name': 'producer-name', // producer 名称
     'public-key': 'producer public key', // producer 公钥
     'private-key': 'producer private key' // producer 私钥
   };
   ```

2. #### 注册 BP

   发起注册 BP 操作：

   ```
   fibos register_bp.js
   ```

   详情解释：初始化一个 FIBOS 客户端，通过调用 regproducerSync 方法，传入四个参数进行注册。

   参数含义：

   | 参数         | 含义                         |
   | :----------- | :--------------------------- |
   | producerName | 区块生产者账户名             |
   | publicKey    | 区块生产者公钥               |
   | url          | 区块生产者宣传网站           |
   | location     | 区块生产者服务器位置地区代码 |

3. #### 注册BP详情

   **注：** *该BP账号必须被投票数不为0才可以添加节点信息*

   添加节点信息操作：

   ```
   fibos register_bp_details_set.js
   ```

   删除节点信息操作：

   ```
   fibos register_bp_details_del.js
   ```

   详情解释：初始化一个 FIBOS 客户端，通过调用 getTableRowsSync 方法，查看列表，通过调用 setSync 方法，添加节点信息，通过调用 delSync 方法，删除节点信息。

4. #### 领取工资

   发起领取工资操作：

   ```
   fibos claimre_wards.js
   ```

   详情解释：初始化一个 FIBOS 客户端，通过调用 claimrewardsSync 方法，传入1个参数进行领取工资。

   参数含义：

   | 参数         | 含义                         |
   | :----------- | :--------------------------- |
   | producerName | 要领取工资的区块生产者账户名 |

5. #### 注销BP

   发起注销BP操作：

   ```
   fibos unregister_bp.js
   ```

   详情解释：初始化一个 FIBOS 客户端，通过调用unregprodSync方法，传入1个参数进行注销BP。

   参数含义：

   | 参数         | 含义                     |
   | :----------- | :----------------------- |
   | producerName | 要注销的区块生产者账户名 |

   


## 日常操作

1. #### 创建账号

   配置 new_account.js 文件 newaccount 方法中的4个参数，然后发起创建账号操作：

   ```
   fibos new_account.js
   ```

   详情解释：初始化一个 FIBOS 客户端，通过调用 newaccount 方法，传入4个参数进行创建账号。

   | 参数    | 含义                        |
   | :------ | :-------------------------- |
   | creator | 创建者的账户名              |
   | name    | 被创建者的账户名            |
   | owner   | 被创建者账户 owner 权限公钥 |
   | active  | 被创建者 active 权限公钥    |

2. #### 购买资源

   配置 buy_ram.js 文件 buyramSync 方法中的4个参数，发起购买资源操作：

   ```
   fibos buy_ram.js
   ```

   详情解释：初始化一个 FIBOS 客户端，通过调用 buyramSync 方法，传入4个参数进行购买资源。

   | 参数          | 含义                       |
   | :------------ | :------------------------- |
   | payer         | 购买存储资源的账号         |
   | receiver      | 接受存储资源的账号         |
   | quant         | 购买存储资源所用的通证数量 |
   | authorization | 私钥对应的账号             |

3. #### 购买内存

   配置 buy_rambytes.js 文件 buyrambytesSync 方法中的4个参数，发起购买内存操作：

   ```
   fibos buy_rambytes.js
   ```

   详情解释：初始化一个 FIBOS 客户端，通过调用 buyrambytesSync 方法，传入4个参数购买内存。

   | 参数          | 含义                   |
   | :------------ | :--------------------- |
   | payer         | 购买内存的账号         |
   | receiver      | 接受内存的账号         |
   | quant         | 购买的内存大小（字节） |
   | authorization | 私钥对应的账号         |

4. #### 抵押资源/解压资源

   配置 delegate_bw.js 文件 delegatebwSync 方法中的5个参数，然后发起抵押资源操作：

   ```
   fibos delegate_bw.js
   ```

   配置 undelegate_bw.js 文件 undelegatebwSync 方法中的4个参数，然后发起解压资源操作：

   ```
   fibos undelegate_bw.js
   ```

   详情解释：初始化一个 FIBOS 客户端，通过调用 delegatebwSync 方法，传入5个参数抵押资源。

   | 参数               | 含义                                                         |
   | :----------------- | :----------------------------------------------------------- |
   | from               | 资源抵押者的账户名                                           |
   | receiver           | 资源接受者的账户名                                           |
   | stake_net_quantity | 抵押者为接受者抵押 FO 获取 NET                               |
   | stake_cpu_quantity | 抵押者为接受者抵押 FO 获取 CPU                               |
   | transfer           | 0 : 表示使用自己的资源为他人抵押；1 : 表示赠送资源给他人并抵押。注意：自己为自己抵押资源的时候，只能填 0 |

   详情解释：初始化一个 FIBOS 客户端，通过调用 undelegatebwSync 方法，传入4个参数解压资源。

   | 参数                 | 含义                           |
   | :------------------- | :----------------------------- |
   | from                 | 解除用哪个账号所抵押的通证     |
   | receiver             | 解除作用在哪个账号上的抵押通证 |
   | unstake_net_quantity | 解除用来获取带宽资源的通证数量 |
   | unstake_cpu_quantity | 解除用来获取计算资源的通证数量 |

5. #### 修改权限

   配置 updateauth.js 文件 updateauthSync 方法中的3个参数，然后发起修改权限操作：

   ```
   fibos updateauth.js
   ```

   详情解释：初始化一个 FIBOS 客户端，通过调用 updateauthSync 方法，传入3个参数修改权限。

   | 参数       | 含义             |
   | :--------- | :--------------- |
   | permission | 需要更改的权限   |
   | parent     | 权限所属         |
   | key        | 将权限改为该公钥 |

6. #### 投票

   配置 vote.js 文件中的 voteproducerSync 方法中的3个参数，发起投票操作：

   ```
   fibos vote.js
   ```

   详情解释：初始化一个 FIBOS 客户端，通过调用 voteproducerSync 方法，传入3个参数进行投票。

   | 参数       | 含义                                                         |
   | :--------- | :----------------------------------------------------------- |
   | account    | 资源抵押者的账户名                                           |
   | 中间的参数 | 为代理账户，不填表示直接给 BP 投票                           |
   | fibosnodes | 投票节点列表，需要由开发者自己按照字母序排序，一次性最多可以给30个 BP 投票 |

7. #### 代理投票

   配置 vote_agency.js 文件中的 voteproducerSync 方法中的3个参数，发起代理投票操作：

   ```
   fibos vote_agency.js
   ```

   初始化一个 FIBOS 客户端，通过调用 voteproducerSync 方法，传入3个参数进行投票。

   | 参数       | 含义                                                         |
   | :--------- | :----------------------------------------------------------- |
   | account    | 资源抵押者的账户名                                           |
   | 中间的参数 | 为代理账户，填入则是通过代理账户给 BP 投票                   |
   | fibosnodes | 投票节点列表，需要由开发者自己按照字母序排序，一次性最多可以给30个 BP 投票 |

   
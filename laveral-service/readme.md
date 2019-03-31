
<h1 align="left"><a href="https://hashlock.io">hashlock.io</a></h1>

## 运行环境要求

- Nginx 1.8+
- PHP 7.1+
- MySQL 5.7+
- Redis 3.0+


### 基础安装

#### 克隆源代码

克隆源代码到本地：

    > git clone git@github.com:dreamtimedapp/lockhash.git

#### 本地docker环境

#### 生成配置文件

```
cp .env.example .env
```

你可以根据情况修改 `.env` 文件里的内容，如数据库连接、缓存、邮件设置等：

```
APP_URL=http://api.yike.io.test
...
DB_HOST=localhost
DB_DATABASE=api_yike_io
DB_USERNAME=homestead
DB_PASSWORD=secret
```

#### 生成数据表及生成测试数据

在 Homestead 的网站根目录下运行以下命令

```shell
$ php artisan migrate --seed
```

初始的用户角色权限已使用数据迁移生成。

#### 生成秘钥

```shell
$ php artisan key:generate
```

#### Passport 初始化

```shell
$ php artisan passport:install
```

将生成的 password grant 对应的 id 与 secret 记录下来，用于配置前端应用的 env 变量。

#### 配置 hosts 文件

    echo "192.168.10.10   api.yike.io.test" | sudo tee -a /etc/hosts

#### 其它服务配置
##### 腾讯 007 防水墙

去 [腾讯防水墙](https://007.qq.com/) 注册账号，创建验证码服务（你可能需要创建两个验证，一个用于发布文章，一个用于注册账号），获取对应的配置填写到 `.env` 中：

```env
# 用于发布文章的验证码
CAPTCHA_ID_PUBLISH=
CAPTCHA_SECRET_PUBLISH=

# 用于用户注册用的验证码
CAPTCHA_ID_REGISTER=
CAPTCHA_SECRET_REGISTER=
```

##### 帖子搜索服务

帖子搜索基于 [ElasticSearch](https://www.elastic.co/) 实现，所以你需要在任何机器上部署一个 ES 服务，然后将地址与索引名称配置到：

```env
ELASTICSEARCH_INDEX=yike
ELASTICSEARCH_HOST=http://127.0.0.1:9200
```

##### 敏感词配置

请自行寻找敏感词库，将敏感词放置于 `storage/SensitiveWords.txt` 中，每行一个：

```bash
敏感词1
敏感词2
...
```

### 链接入口

* 首页地址：http://api.yike.io.test
* 管理后台：没做

管理员账号请自己添加 UserSeeder 创建。

至此, 安装完成 ^_^。

## 扩展包使用情况


| **扩展包** | **一句话描述** | **本项目应用场景** |
| ---- | ---- | ---- | 
| [overtrue/easy-sms](https://github.com/overtrue/easy-sms) | 多网关短信发送组件 | 发送验证码 |
| [overtrue/laravel-emoji](https://github.com/overtrue/laravel-emoji) | emoji 转换组件 | 帖子与评论 emoji 解析 |
| [overtrue/laravel-filesystem-qiniu](https://github.com/overtrue/laravel-filesystem-qiniu) | 七牛 CDN SDK | 帖子内容图片存储 |
| [overtrue/laravel-follow](https://github.com/overtrue/laravel-follow) | Laravel 用户关系组件 | 用户关注与帖子订阅 |
| [overtrue/laravel-lang](https://github.com/overtrue/laravel-lang) | Laravel 多语言 | 报错信息本地化 |
| [overtrue/laravel-mail-aliyun](https://github.com/overtrue/laravel-mail-aliyun) | 阿里云邮件 SDK | 发送通知邮件 |
| [overtrue/laravel-socialite](https://github.com/overtrue/laravel-socialite) | 社交登录组件 | 用户使用第三方登录 |
| [overtrue/laravel-uploader](https://github.com/overtrue/laravel-uploader) | Laravel 上传功能封装 | 帖子内容图片上传 |
| [overtrue/laravel-query-logger](https://github.com/overtrue/laravel-query-logger) | Laravel SQL 监听工具 | 开发环境查看 SQL 记录 |
| [Intervention/image](https://github.com/Intervention/image) | 图片处理功能库 | 用于图片裁切 |
| [guzzlehttp/guzzle](https://github.com/guzzle/guzzle) | HTTP 请求套件 | 我也记不得，反正就是要用  |
| [predis/predis](https://github.com/nrk/predis.git) | Redis 官方首推的 PHP 客户端开发包 | 缓存驱动 Redis 基础扩展包 |
| [mewebstudio/Purifier](https://github.com/mewebstudio/Purifier) | 用户提交的 Html 白名单过滤 | 帖子内容的 Html 安全过滤，防止 XSS 攻击 |
| [laravel/passport](https://github.com/laravel/passport) | 用户授权 | 基于 Personal Access Token 的前后端用户认证 |
| [laravel/horizon](https://github.com/laravel/horizon) | 队列监控面板 | 监听队列使用情况 |
| [laravolt/avatar](https://github.com/laravolt/avatar) | 生成用户头像 | 用户头像 |
| [sentry/sentry-laravel](https://github.com/getsentry/sentry-laravel) | Sentry 报错监控 | 监控系统错误 |
| [spatie/laravel-activitylog](https://github.com/spatie/laravel-activitylog) | 用户行为记录 | 个人中心的用户动态 |
| [spatie/laravel-url-signer](https://github.com/spatie/laravel-url-signer) | URL 加密 | 用户激活链接 |
| [tamayo/laravel-scout-elastic](https://github.com/ErickTamayo/laravel-scout-elastic) | Laravel Scout ES 驱动 | 帖子搜索 |
| [tucker-eric/eloquentfilter](https://github.com/tucker-eric/eloquentfilter) | 模型字段过滤 | 接口字段过滤 |
| [vinkla/hashids](https://github.com/vinkla/hashids) | HashID 实现 | 暂时好像没用到 |
| [beyondcode/laravel-self-diagnosis](https://github.com/beyondcode/laravel-self-diagnosis) | Laravel 基础环境检查工具 | 检查配置是否正确 |



## 自定义 Artisan 命令

| 命令行名字 | 说明 | Cron | 代码调用 |
| --- | --- | --- | --- |
| `es:init` |  初始化 ES 模板 | 无 | 无 |

## License 

MIT

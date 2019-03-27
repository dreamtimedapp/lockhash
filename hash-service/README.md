![Golang 中国](https://is.golangtc.com/logo/golangtc.png?height=60)

# Gopher

Golang 中国([www.golangtc.com](https://www.golangtc.com))源代码.

## 重构计划

该分支『2.0』使用 [Tango](https://github.com/lunny/tango) 进行后端重构，前端页面使用 Template 进行渲染（考虑到 SEO），表单渲染使用 React，使用 Fetch 和后端 API 进行交互。

社区功能和后台管理功能重构完成后即上线。

- [x] 架构搭建；
- [x] 前端架构；
- [x] 首页；
- [x] 注册；
- [x] 登录；
- [x] 开发 Markdown 编辑器(使用 tui.editor)；
- [x] 主题浏览；
- [x] 新建主题；
- [x] 编辑主题；
- [x] 提交评论;
- [x] 删除评论；
- [x] 编辑评论；
- [x] 主题检索；
- [ ] 浏览节点下所有的主题 (80%)；
- [ ] 会员首页；
- [ ] 后台管理框架。

## Install

    $ go get hash-service


复制文件 *etc/config.json.default* 并改名为 *etc/config.json* 作为配置文件

- superusers: 内容为用户名,如果没有管理员,内容为"",如果有多个,用英文逗号隔开
- analytics_file: 内容为统计分析代码的文件名
- time_zone_offset: 时差，跟UTC的时间差，单位小时
- github_login_redirect: 第三方登录失败无法获取cookie跳转地址
- github_login_success_redirect: 第三方登录成功后跳转地址
- cookie_secure: 第三方登录需要使用HTTPS，当设置为false供本地测试使用
- gt_captcha_id: geetest.com 服务的 id
- gt_private_key: geetest.com 服务的 key
- go_download_path: 存放下载的 Go 文件目录

内容如下:

    {
        "host": "http://localhost:8888",
        "port": 8888,
        "db": "localhost:27017",
        "cookie_secret": "05e0ba2eca9411e18155109add4b8aac",
        "sendmail_path": "",
        "smtp_username": "username@example.com",
        "smtp_password": "password",
        "smtp_host": "smtp.example.com",
        "smtp_addr": "smtp.example.com:25",
        "from_email": "who@example.com",
        "superusers": "jimmykuu,another",
        "analytics_file": "",
        "time_zone_offset": 8,
        "static_file_version": 1,
        "public_salt": "",
        "gt_captcha_id": "",
        "gt_private_key": "",
        "image_path": "",
        "debug": false
    }


**注意**：*etc*，*static*，*templates* 目录需要在可执行文件同一个目录下，可以通过软链或者复制到同一个目录下。

## Contributors

- [Contributors](https://hash-service/graphs/contributors)

## License

Copyright (c) 2012-2019

Released under the MIT license:

- [www.opensource.org/licenses/MIT](http://www.opensource.org/licenses/MIT)

package actions

import (
	"fmt"
	"time"

	"github.com/lunny/tango"
	"github.com/tango-contrib/renders"
	mgo "gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"

	"hash-service/conf"
	"hash-service/models"
	"hash-service/utils"
)

// RenderBase 渲染基类
type RenderBase struct {
	renders.Renderer
	tango.Ctx

	session   *mgo.Session
	DB        *mgo.Database
	User      *models.User
	IsLogin   bool
	startTime time.Time
}

// Before
func (b *RenderBase) Before() {
	b.startTime = time.Now()

	b.session, b.DB = models.GetSessionAndDB()

	cookies := b.Cookies()
	userID, err := cookies.String("user")
	if err != nil {
		return
	}

	userID2, err := utils.Base64Decode([]byte(userID))
	if err != nil {
		fmt.Println(err)
		return
	}

	if !bson.IsObjectIdHex(string(userID2)) {
		return
	}

	user := models.User{}

	c := b.DB.C(models.USERS)

	// 检查用户名
	err = c.Find(bson.M{"_id": bson.ObjectIdHex(string(userID2))}).One(&user)

	if err != nil {
		return
	}

	b.User = &user
	b.IsLogin = true
}

// After
func (b *RenderBase) After() {
	b.session.Close()
}

// Render 渲染模板
func (b *RenderBase) Render(tmpl string, t ...renders.T) error {
	var ts = renders.T{}
	if len(t) > 0 {
		ts = t[0].Merge(renders.T{})
	}

	ts["db"] = b.DB
	ts["goVersion"] = conf.GoVersion
	ts["tangoVersion"] = conf.TangoVersion
	ts["version"] = conf.Version
	ts["user"] = b.User
	ts["analyticsCode"] = conf.AnalyticsCode
	ts["username"] = ""
	if b.User != nil {
		ts["username"] = b.User.Username
	}

	ts["costTime"] = fmt.Sprintf("%dms", time.Now().Sub(b.startTime)/1000000)

	return b.Renderer.Render(tmpl, ts)
}

// AuthRenderBase 必须要登录用户的渲染基类
type AuthRenderBase struct {
	RenderBase
}

func (b *AuthRenderBase) Before() {
	b.RenderBase.Before()
	if !b.IsLogin {
		b.Redirect("/signin?next=" + b.Ctx.Req().URL.Path)
	}
}

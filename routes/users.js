const router = require('koa-router')()

router.prefix('/users')

router.get('/info', function (ctx, next) {
  const info = {
    result: {
      face_url: "http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqYSkdu3e9vyplQzhQia01L7R6azia2p2G" +
          "1Fs0mx7EibibTM9eAONROE1hqcQezZToolRiciayD1CokhCwg/132",
      is_login: 1,
      nick_name: "kaisela",
      role_info: 0,
      role_type: 64,
      uid: "144115210194872969",
      uid_type: 2
    },
    retcode: 0
  }
ctx.body = info
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router

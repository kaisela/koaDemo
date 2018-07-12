const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa2!'
  })
})

router.get('/cat_info', async (ctx, next) => {
let cat_info = {
  "retcode": 0,
  "result": {
    "catInfo": {
      "1001": {
        "short": null,
        "s": {
          "2001": {
            "short": null,
            "t": {
              "3001": {
                "short": "",
                "n": "产品策划",
                "o": 1,
                "extra_data": []
              },
              "3003": {
                "short": "",
                "n": "产品运营",
                "o": 2,
                "extra_data": []
              },
              "3002": {
                "short": "",
                "n": "游戏策划",
                "o": 3,
                "extra_data": []
              },
              "3004": {
                "n": "游戏运营",
                "o": 4,
                "extra_data": []
              },
              "3296": {
                "short": "",
                "n": "新媒体营销",
                "o": 5,
                "extra_data": []
              },
              "3051": {
                "short": "",
                "n": "网络营销理论",
                "o": 6,
                "extra_data": []
              },
              "3053": {
                "short": "",
                "n": "SEO",
                "o": 7,
                "extra_data": []
              },
              "3054": {
                "short": "",
                "n": "SEM",
                "o": 8,
                "extra_data": []
              }
            },
            "n": "互联网产品",
            "o": 1,
            "extra_data": []
          },
          "2010": {
            "short": null,
            "t": {
              "3058": {
                "short": "",
                "n": "淘宝营销",
                "o": 2,
                "extra_data": []
              },
              "3313": {
                "short": null,
                "n": "跨境电商",
                "o": 2,
                "extra_data": []
              },
              "3059": {
                "short": "",
                "n": "微信营销",
                "o": 3,
                "extra_data": []
              },
              "3314": {
                "short": null,
                "n": "京东营销",
                "o": 3,
                "extra_data": []
              },
              "3297": {
                "short": "",
                "n": "拼多多",
                "o": 5,
                "extra_data": []
              },
              "3223": {
                "n": "其他",
                "o": 10,
                "extra_data": []
              }
            },
            "n": "互联网营销",
            "o": 2,
            "extra_data": []
          },
          "2002": {
            "short": null,
            "t": {
              "3005": {
                "short": "",
                "n": "C",
                "o": 1,
                "extra_data": []
              },
              "3006": {
                "n": "C++",
                "o": 2,
                "extra_data": []
              },
              "3007": {
                "n": "Java",
                "o": 3,
                "extra_data": []
              },
              "3008": {
                "n": "PHP",
                "o": 4,
                "extra_data": []
              },
              "3009": {
                "short": "",
                "n": "C#/.Net",
                "o": 5,
                "extra_data": []
              },
              "3019": {
                "short": "",
                "n": "Python",
                "o": 6,
                "extra_data": []
              },
              "3011": {
                "short": null,
                "n": "Ruby",
                "o": 7,
                "extra_data": []
              },
              "3012": {
                "short": null,
                "n": "Javascript",
                "o": 8,
                "extra_data": []
              },
              "3013": {
                "short": null,
                "n": "Perl",
                "o": 9,
                "extra_data": []
              },
              "3014": {
                "short": null,
                "n": "SQL",
                "o": 10,
                "extra_data": []
              },
              "3015": {
                "short": null,
                "n": "Object-C",
                "o": 11,
                "extra_data": []
              },
              "3016": {
                "short": null,
                "n": "Lua",
                "o": 12,
                "extra_data": []
              },
              "3017": {
                "short": null,
                "n": "Flash AS3.0",
                "o": 13,
                "extra_data": []
              },
              "3018": {
                "short": null,
                "n": "Swift",
                "o": 14,
                "extra_data": []
              },
              "3010": {
                "short": "",
                "n": "VB.NET",
                "o": 15,
                "extra_data": []
              },
              "3020": {
                "n": "其他",
                "o": 16,
                "extra_data": []
              }
            },
            "n": "编程语言",
            "o": 3,
            "extra_data": []
          },
          "2004": {
            "short": null,
            "t": {
              "3321": {
                "short": null,
                "n": "前端开发",
                "o": 1,
                "extra_data": []
              },
              "3322": {
                "short": null,
                "n": "腾讯自研前端课",
                "o": 1,
                "extra_data": []
              }
            },
            "n": "前端开发",
            "o": 4,
            "extra_data": []
          },
          "2003": {
            "short": null,
            "t": {
              "3021": {
                "short": "Android",
                "n": "Android开发",
                "o": 1,
                "extra_data": []
              },
              "3022": {
                "n": "IOS开发",
                "o": 2,
                "extra_data": []
              },
              "3251": {
                "short": null,
                "n": "微信开发",
                "o": 3,
                "extra_data": []
              },
              "3023": {
                "short": "",
                "n": "跨平台APP开发",
                "o": 4,
                "extra_data": []
              },
              "3218": {
                "short": "",
                "n": "其他",
                "o": 5,
                "extra_data": []
              }
            },
            "n": "移动开发",
            "o": 5,
            "extra_data": []
          },
          "2005": {
            "short": null,
            "t": {
              "3030": {
                "short": "",
                "n": "Linux运维",
                "o": 1,
                "extra_data": []
              },
              "3032": {
                "short": "",
                "n": "Python自动化运维",
                "o": 2,
                "extra_data": []
              },
              "3255": {
                "short": "",
                "n": "DevOps",
                "o": 3,
                "extra_data": []
              },
              "3033": {
                "short": "",
                "n": "信息安全",
                "o": 4,
                "extra_data": []
              },
              "3220": {
                "short": "",
                "n": "其他",
                "o": 5,
                "extra_data": []
              }
            },
            "n": "网络与运维",
            "o": 6,
            "extra_data": []
          },
          "2008": {
            "short": null,
            "t": {
              "3039": {
                "short": "",
                "n": "Unity3d游戏开发",
                "o": 1,
                "extra_data": []
              },
              "3040": {
                "short": "",
                "n": "Cocos2d-x游戏开发",
                "o": 2,
                "extra_data": []
              },
              "3300": {
                "short": null,
                "n": "游戏服务器开发",
                "o": 3,
                "extra_data": []
              },
              "3041": {
                "short": "",
                "n": "Html5游戏",
                "o": 4,
                "extra_data": []
              },
              "3042": {
                "short": "",
                "n": "VR/AR",
                "o": 5,
                "extra_data": []
              },
              "3222": {
                "short": "",
                "n": "其他",
                "o": 6,
                "extra_data": []
              }
            },
            "n": "游戏开发",
            "o": 7,
            "extra_data": []
          },
          "2006": {
            "short": null,
            "t": {
              "3252": {
                "short": null,
                "n": "敏捷开发",
                "o": 1,
                "extra_data": []
              },
              "3034": {
                "short": "",
                "n": "软件测试",
                "o": 2,
                "extra_data": []
              },
              "3254": {
                "short": null,
                "n": "软件研发",
                "o": 3,
                "extra_data": []
              },
              "3253": {
                "short": "",
                "n": "其他",
                "o": 4,
                "extra_data": []
              }
            },
            "n": "软件研发",
            "o": 8,
            "extra_data": []
          },
          "2007": {
            "short": null,
            "t": {
              "3035": {
                "n": "云计算",
                "o": 1,
                "extra_data": []
              },
              "3036": {
                "short": "",
                "n": "大数据",
                "o": 2,
                "extra_data": []
              },
              "3038": {
                "short": "",
                "n": "数据库",
                "o": 3,
                "extra_data": []
              },
              "3295": {
                "short": null,
                "n": "人工智能",
                "o": 3,
                "extra_data": []
              },
              "3317": {
                "short": "",
                "n": "区块链",
                "o": 5,
                "extra_data": []
              },
              "3221": {
                "short": "",
                "n": "其他",
                "o": 6,
                "extra_data": []
              }
            },
            "n": "云计算大数据",
            "o": 9,
            "extra_data": []
          },
          "2043": {
            "short": null,
            "t": {
              "3240": {
                "short": "",
                "n": "嵌入式开发",
                "o": 1,
                "extra_data": []
              },
              "3318": {
                "short": null,
                "n": "IC设计",
                "o": 2,
                "extra_data": []
              },
              "3319": {
                "short": null,
                "n": "物联网",
                "o": 3,
                "extra_data": []
              },
              "3320": {
                "short": null,
                "n": "其他",
                "o": 4,
                "extra_data": []
              }
            },
            "n": "硬件研发",
            "o": 10,
            "extra_data": []
          },
          "2009": {
            "short": null,
            "t": {
              "3043": {
                "short": "",
                "n": "思科认证",
                "o": 1,
                "extra_data": []
              },
              "3044": {
                "short": "",
                "n": "华为认证",
                "o": 2,
                "extra_data": []
              },
              "3047": {
                "short": "",
                "n": "红帽认证",
                "o": 3,
                "extra_data": []
              },
              "3045": {
                "short": "",
                "n": "软考",
                "o": 4,
                "extra_data": []
              },
              "3050": {
                "short": "",
                "n": "其他",
                "o": 13,
                "extra_data": []
              }
            },
            "n": "认证考试",
            "o": 11,
            "extra_data": []
          }
        },
        "n": "IT·互联网",
        "o": 1,
        "ads": {
          "hejis": [
            {
              "click_url": "//ke.qq.com/huodong/Webfront/index.html",
              "biz_id": "1",
              "logo_url": "//p.qpic.cn/qqconadmin/0/1d1db00913d44167982bd8ed19fd1930/0",
              "hover_tips": "web前端开发",
              "first_cate": 1001
            }, {
              "click_url": "//ke.qq.com/huodong/coding/index.html",
              "biz_id": "28",
              "logo_url": "//p.qpic.cn/qqconadmin/0/ca8baae78bac4c268df8d6ef307f9ec3/0",
              "hover_tips": "享受编程之美",
              "first_cate": 1001
            }, {
              "click_url": "https://ke.qq.com/huodong/yunketang/index.html",
              "biz_id": "3",
              "logo_url": "//p.qpic.cn/qqconadmin/0/45b8e1377eb34ad483609ea72d0adab9/0",
              "hover_tips": "腾讯云·课程学习",
              "first_cate": 1001
            }, {
              "click_url": "https://ke.qq.com/course/111347",
              "biz_id": "2",
              "logo_url": "//p.qpic.cn/qqconadmin/0/b1983b1db7a246a69294abfea165bbb4/0",
              "hover_tips": "网络营销",
              "first_cate": 1001
            }
          ],
          "agencies": [
            {
              "click_url": "//xuegod.ke.qq.com/?from=1083",
              "biz_id": "12309",
              "logo_url": "//p.qpic.cn/qqconadmin/0/e82007362f0948b4a24adb5f86dab534/0",
              "hover_tips": "学神IT教育",
              "first_cate": 1001
            }, {
              "click_url": "https://kgc.ke.qq.com/",
              "biz_id": "15088",
              "logo_url": "//p.qpic.cn/qqconadmin/0/3b52a85dc10a4a5d8aff9410fef5ad05/0",
              "hover_tips": "课工场",
              "first_cate": 1001
            }, {
              "click_url": "//iotek.ke.qq.com/",
              "biz_id": "10315",
              "logo_url": "//p.qpic.cn/qqconadmin/0/90af48836e3a46df9c67aeb6785bf5cf/0",
              "hover_tips": "职坐标",
              "first_cate": 1001
            }, {
              "click_url": "//ke.qq.com/cgi-bin/agency?aid=19243#tab=3&amp;category=-1",
              "biz_id": "19243",
              "logo_url": "//p.qpic.cn/qqconadmin/0/4c16ba075f954a0984a9e6fbd606d40c/0",
              "hover_tips": "齐论电商",
              "first_cate": 1001
            }
          ]
        },
        "extra_data": [
          {
            "a_icon": "//p.qpic.cn/qqconadmin/0/1bbd0c1410664ebd93a5b30b27ccc57b/0",
            "icon": "//p.qpic.cn/qqconadmin/0/cc0d55b29b1b4ecca0585075487ed572/0",
            "platform": 0,
            "ia_icon": "//p.qpic.cn/qqconadmin/0/76fe6802c81443c99ea5467466f314aa/0",
            "ia_color": "333333",
            "color": "f58405",
            "alias": "IT",
            "a_color": "188eee"
          }, {
            "a_icon": "//p.qpic.cn/qqconadmin/0/0f96f401e2874cce92eac02035abf5f3/0",
            "icon": "//p.qpic.cn/qqconadmin/0/798d5248d2d34ed480fbfc9e61c241ca/0",
            "platform": 1,
            "ia_icon": "//p.qpic.cn/qqconadmin/0/6700377ce73148f3b304c5cfa717c7a6/0",
            "ia_color": "333333",
            "color": "666666",
            "alias": "IT",
            "a_color": "188eee"
          }
        ]
      },
      "1002": {
        "short": null,
        "s": {
          "2011": {
            "t": {
              "3239": {
                "short": "",
                "n": "电商美工",
                "o": 1,
                "extra_data": []
              },
              "3063": {
                "short": "综合平面",
                "n": "综合平面设计",
                "o": 3,
                "extra_data": []
              },
              "3061": {
                "short": "",
                "n": "摄影后期",
                "o": 4,
                "extra_data": []
              }
            },
            "n": "平面设计",
            "o": 11
          },
          "2012": {
            "t": {
              "3065": {
                "n": "交互设计",
                "o": 1,
                "extra_data": []
              },
              "3066": {
                "n": "游戏UI设计",
                "o": 2,
                "extra_data": []
              },
              "3067": {
                "n": "Web UI设计",
                "o": 3,
                "extra_data": []
              },
              "3068": {
                "n": "APP  UI设计",
                "o": 4,
                "extra_data": []
              },
              "3069": {
                "n": "图标设计",
                "o": 5,
                "extra_data": []
              },
              "3323": {
                "short": null,
                "n": "腾讯设计精品课",
                "o": 6,
                "extra_data": []
              },
              "3226": {
                "short": "",
                "n": "其他",
                "o": 7,
                "extra_data": []
              }
            },
            "n": "UI设计",
            "o": 12
          },
          "2013": {
            "t": {
              "3070": {
                "n": "Photoshop",
                "o": 1,
                "extra_data": []
              },
              "3071": {
                "n": "Indesign",
                "o": 2,
                "extra_data": []
              },
              "3072": {
                "n": "Axure",
                "o": 3,
                "extra_data": []
              },
              "3073": {
                "n": "CDR",
                "o": 4,
                "extra_data": []
              },
              "3074": {
                "n": "Illustrator",
                "o": 5,
                "extra_data": []
              },
              "3075": {
                "n": "Dreamweaver",
                "o": 6,
                "extra_data": []
              },
              "3076": {
                "n": "CAD",
                "o": 7,
                "extra_data": []
              },
              "3077": {
                "n": "UG",
                "o": 8,
                "extra_data": []
              },
              "3078": {
                "n": "Solidworks",
                "o": 9,
                "extra_data": []
              },
              "3079": {
                "n": "Sketchup",
                "o": 10,
                "extra_data": []
              },
              "3080": {
                "n": "Rhino3D",
                "o": 11,
                "extra_data": []
              },
              "3081": {
                "n": "Pro/E",
                "o": 12,
                "extra_data": []
              },
              "3082": {
                "n": "ZBrush",
                "o": 13,
                "extra_data": []
              },
              "3083": {
                "n": "Cinema 4D",
                "o": 14,
                "extra_data": []
              },
              "3084": {
                "n": "SAI",
                "o": 15,
                "extra_data": []
              },
              "3085": {
                "n": "Flash",
                "o": 16,
                "extra_data": []
              },
              "3086": {
                "n": "3DMAX",
                "o": 17,
                "extra_data": []
              },
              "3087": {
                "n": "MAYA",
                "o": 18,
                "extra_data": []
              },
              "3088": {
                "n": "VRay",
                "o": 19,
                "extra_data": []
              },
              "3089": {
                "n": "AE",
                "o": 20,
                "extra_data": []
              },
              "3090": {
                "n": "Premiere",
                "o": 21,
                "extra_data": []
              },
              "3091": {
                "n": "Fireworks",
                "o": 22,
                "extra_data": []
              },
              "3227": {
                "n": "其他",
                "o": 23,
                "extra_data": []
              }
            },
            "n": "设计软件",
            "o": 13
          },
          "2014": {
            "short": null,
            "t": {
              "3092": {
                "short": "游戏角色",
                "n": "游戏角色设计",
                "o": 1,
                "extra_data": []
              },
              "3093": {
                "short": "场景概念",
                "n": "场景概念设计",
                "o": 2,
                "extra_data": []
              },
              "3094": {
                "short": "游戏模型",
                "n": "游戏模型设计",
                "o": 3,
                "extra_data": []
              },
              "3095": {
                "short": "游戏特效",
                "n": "游戏特效设计",
                "o": 4,
                "extra_data": []
              },
              "3096": {
                "short": "",
                "n": "动画设计",
                "o": 5,
                "extra_data": []
              },
              "3228": {
                "n": "其他",
                "o": 6,
                "extra_data": []
              }
            },
            "n": "游戏动画设计",
            "o": 14,
            "extra_data": []
          },
          "2015": {
            "short": null,
            "t": {
              "3097": {
                "short": "",
                "n": "插画漫画",
                "o": 1,
                "extra_data": []
              },
              "3098": {
                "short": "",
                "n": "国画油画",
                "o": 2,
                "extra_data": []
              },
              "3099": {
                "short": "",
                "n": "水彩水粉画",
                "o": 3,
                "extra_data": []
              },
              "3242": {
                "short": "",
                "n": "素描",
                "o": 4,
                "extra_data": []
              },
              "3229": {
                "short": "",
                "n": "手绘其他",
                "o": 5,
                "extra_data": []
              }
            },
            "n": "绘画创作",
            "o": 15,
            "extra_data": []
          },
          "2016": {
            "t": {
              "3102": {
                "short": "",
                "n": "包装与剪辑",
                "o": 1,
                "extra_data": []
              },
              "3100": {
                "short": "",
                "n": "特效与后期",
                "o": 2,
                "extra_data": []
              },
              "3230": {
                "short": "",
                "n": "其他",
                "o": 3,
                "extra_data": []
              }
            },
            "n": "影视后期设计",
            "o": 16
          },
          "2017": {
            "t": {
              "3103": {
                "n": "室内设计",
                "o": 1,
                "extra_data": []
              },
              "3104": {
                "n": "建筑设计",
                "o": 2,
                "extra_data": []
              },
              "3105": {
                "n": "景观设计",
                "o": 3,
                "extra_data": []
              },
              "3231": {
                "n": "其他",
                "o": 4,
                "extra_data": []
              }
            },
            "n": "环境艺术设计",
            "o": 17
          },
          "2018": {
            "t": {
              "3106": {
                "n": "产品设计",
                "o": 1,
                "extra_data": []
              },
              "3107": {
                "n": "模具设计",
                "o": 2,
                "extra_data": []
              },
              "3108": {
                "n": "机械设计",
                "o": 3,
                "extra_data": []
              },
              "3109": {
                "n": "包装设计",
                "o": 4,
                "extra_data": []
              },
              "3232": {
                "n": "其他",
                "o": 5,
                "extra_data": []
              }
            },
            "n": "工业产品设计",
            "o": 18
          },
          "2019": {
            "t": {
              "3110": {
                "n": "服装设计打版",
                "o": 1,
                "extra_data": []
              },
              "3233": {
                "n": "其他",
                "o": 2,
                "extra_data": []
              }
            },
            "n": "服装设计",
            "o": 19
          },
          "2041": {
            "t": {
              "3234": {
                "n": "其他",
                "o": 1,
                "extra_data": []
              }
            },
            "n": "其他",
            "o": 20
          }
        },
        "n": "设计·创作",
        "o": 2,
        "ads": {
          "hejis": [
            {
              "click_url": "//ke.qq.com/huodong/photoshop/index.html",
              "biz_id": "22",
              "logo_url": "//p.qpic.cn/qqconadmin/0/5e8d2b6266ab4002b92c157ecceb2b18/0",
              "hover_tips": "PS大神合辑",
              "first_cate": 1002
            }, {
              "click_url": "https://ke.qq.com/huodong/dakaxiu019/index.html",
              "biz_id": "19",
              "logo_url": "//p.qpic.cn/qqconadmin/0/a6c6a701c92e4ee9aad6aad39d984b1f/0",
              "hover_tips": "设计大咖秀",
              "first_cate": 1002
            }, {
              "click_url": "//ke.qq.com/huodong/drawing/index.html",
              "biz_id": "55",
              "logo_url": "//p.qpic.cn/qqconadmin/0/15e58c17ee194dd4ade712fcb3ab3768/0",
              "hover_tips": "绘画高手训练营",
              "first_cate": 1002
            }
          ],
          "agencies": [
            {
              "click_url": "//mnkt.ke.qq.com/",
              "biz_id": "17730",
              "logo_url": "//p.qpic.cn/qqconadmin/0/533764070fef41e7a26effd6dfa8c779/0",
              "hover_tips": "米你课堂",
              "first_cate": 1002
            }, {
              "click_url": "https://juheng.ke.qq.com/",
              "biz_id": "10024",
              "logo_url": "//p.qpic.cn/qqconadmin/0/3389d72699f44b9aa8082f7330271f70/0",
              "hover_tips": "聚恒电商",
              "first_cate": 1002
            }, {
              "click_url": "//yzfjy.ke.qq.com/",
              "biz_id": "10055",
              "logo_url": "//p.qpic.cn/qqconadmin/0/4e0983547a1541ad946c8ff961d5488d/0",
              "hover_tips": "云中帆教育",
              "first_cate": 1002
            }, {
              "click_url": "https://qljg.ke.qq.com/",
              "biz_id": "11051",
              "logo_url": "//p.qpic.cn/qqconadmin/0/891213a9333a4d86b840987d9cc852e1/0",
              "hover_tips": "秋凌景观",
              "first_cate": 1002
            }
          ]
        },
        "extra_data": [
          {
            "a_icon": "//p.qpic.cn/qqconadmin/0/3175d71f18b846cf8ff860ef933ea3cb/0",
            "icon": "//p.qpic.cn/qqconadmin/0/e6b8f3d6a45b47ee9e72e03c7fc75ac5/0",
            "platform": 0,
            "ia_icon": "//p.qpic.cn/qqconadmin/0/0eb16d5ecf9e4908b0b586060763bc35/0",
            "ia_color": "333333",
            "color": "c262cb",
            "alias": "设计",
            "a_color": "188eee"
          }, {
            "a_icon": "//p.qpic.cn/qqconadmin/0/0182e604685e42a8a6e911f4d1448b7e/0",
            "icon": "//p.qpic.cn/qqconadmin/0/54d1f4e676e84d389c9de8739d107f48/0",
            "platform": 1,
            "ia_icon": "//p.qpic.cn/qqconadmin/0/867273c38af145879487142ab2359dd2/0",
            "ia_color": "333333",
            "color": "666666",
            "alias": "设计",
            "a_color": "188eee"
          }
        ]
      },
      "1003": {
        "short": null,
        "s": {
          "2020": {
            "short": null,
            "t": {
              "3111": {
                "short": "",
                "n": "英语口语",
                "o": 1,
                "extra_data": []
              },
              "3114": {
                "short": "",
                "n": "学术英语",
                "o": 2,
                "extra_data": []
              },
              "3113": {
                "n": "新概念英语",
                "o": 3,
                "extra_data": []
              },
              "3299": {
                "short": "",
                "n": "青少年英语",
                "o": 4,
                "extra_data": []
              },
              "3112": {
                "short": "",
                "n": "词汇语法",
                "o": 5,
                "extra_data": []
              },
              "3115": {
                "short": "",
                "n": "职场英语",
                "o": 6,
                "extra_data": []
              }
            },
            "n": "实用英语",
            "o": 20,
            "extra_data": []
          },
          "2021": {
            "t": {
              "3116": {
                "n": "雅思",
                "o": 1,
                "extra_data": []
              },
              "3117": {
                "n": "托福",
                "o": 2,
                "extra_data": []
              },
              "3120": {
                "short": "",
                "n": "K12留学",
                "o": 3,
                "extra_data": []
              },
              "3118": {
                "short": "",
                "n": "研究生留学",
                "o": 4,
                "extra_data": []
              },
              "3119": {
                "short": "",
                "n": "留学指导",
                "o": 5,
                "extra_data": []
              }
            },
            "n": "出国留学",
            "o": 21
          },
          "2022": {
            "short": null,
            "t": {
              "3121": {
                "short": "",
                "n": "英语四级",
                "o": 1,
                "extra_data": []
              },
              "3122": {
                "short": "",
                "n": "英语六级",
                "o": 2,
                "extra_data": []
              }
            },
            "n": "英语四六级",
            "o": 22,
            "extra_data": []
          },
          "2023": {
            "t": {
              "3123": {
                "n": "日语零基础",
                "o": 1,
                "extra_data": []
              },
              "3124": {
                "n": "日语初级",
                "o": 2,
                "extra_data": []
              },
              "3125": {
                "n": "日语中高级",
                "o": 3,
                "extra_data": []
              },
              "3126": {
                "n": "兴趣日语",
                "o": 4,
                "extra_data": []
              },
              "3127": {
                "n": "日语考试",
                "o": 5,
                "extra_data": []
              },
              "3128": {
                "n": "日本留学",
                "o": 6,
                "extra_data": []
              }
            },
            "n": "日语",
            "o": 23
          },
          "2024": {
            "t": {
              "3129": {
                "n": "韩语零基础",
                "o": 1,
                "extra_data": []
              },
              "3130": {
                "n": "韩语初级",
                "o": 2,
                "extra_data": []
              },
              "3131": {
                "n": "韩语中高级",
                "o": 3,
                "extra_data": []
              },
              "3132": {
                "n": "旅游韩语",
                "o": 4,
                "extra_data": []
              },
              "3133": {
                "n": "韩流文化",
                "o": 5,
                "extra_data": []
              },
              "3134": {
                "n": "TOPIK考试／留学",
                "o": 6,
                "extra_data": []
              }
            },
            "n": "韩语",
            "o": 24
          },
          "2025": {
            "t": {
              "3135": {
                "n": "法语",
                "o": 1,
                "extra_data": []
              },
              "3136": {
                "n": "德语",
                "o": 2,
                "extra_data": []
              },
              "3137": {
                "n": "西班牙语",
                "o": 3,
                "extra_data": []
              },
              "3138": {
                "n": "葡萄牙语",
                "o": 4,
                "extra_data": []
              },
              "3139": {
                "n": "方言",
                "o": 5,
                "extra_data": []
              },
              "3235": {
                "n": "其他",
                "o": 6,
                "extra_data": []
              }
            },
            "n": "小语种",
            "o": 25
          }
        },
        "n": "语言·留学",
        "o": 3,
        "ads": {
          "hejis": [
            {
              "click_url": "//ke.qq.com/huodong/traveling/index.html",
              "biz_id": "50",
              "logo_url": "//p.qpic.cn/qqconadmin/0/825ad4a7664b4f3db564e48bc24df836/0",
              "hover_tips": "出国游宝典",
              "first_cate": 1003
            }, {
              "click_url": "//ke.qq.com/huodong/bianti/index.html",
              "biz_id": "1",
              "logo_url": "//p.qpic.cn/qqconadmin/0/fdb4d985df8f44339a857beda71e73fb/0",
              "hover_tips": "雅思\b考试合辑",
              "first_cate": 1003
            }
          ],
          "agencies": [
            {
              "click_url": "//tuya.ke.qq.com/",
              "biz_id": "13671",
              "logo_url": "//p.qpic.cn/qqconadmin/0/30b4a6af509d47c4ab23a501959f8bf8/0",
              "hover_tips": "壹教壹学",
              "first_cate": 1003
            }, {
              "click_url": "//thzsjy.ke.qq.com/",
              "biz_id": "10058",
              "logo_url": "//p.qpic.cn/qqconadmin/0/eae3f0929dee4066bb9e8ca6a3269f03/0",
              "hover_tips": "天和智胜教育",
              "first_cate": 1003
            }, {
              "click_url": "//hqclass.ke.qq.com/",
              "biz_id": "13130",
              "logo_url": "//p.qpic.cn/qqconadmin/0/51a50ac40b7a49719b04b6f425a61f8f/0",
              "hover_tips": "环球教育",
              "first_cate": 1003
            }, {
              "click_url": "//sywyxy.ke.qq.com/",
              "biz_id": "17734",
              "logo_url": "//p.qpic.cn/qqconadmin/0/c36f8cb5e4904c5e9ea805f82ba8902a/0",
              "hover_tips": "上元外语学校",
              "first_cate": 1003
            }
          ]
        },
        "extra_data": [
          {
            "a_icon": "//p.qpic.cn/qqconadmin/0/6a5fb5b778ef4289b40259ec086f30d2/0",
            "icon": "//p.qpic.cn/qqconadmin/0/825bac8d993c497fb7db78cdc1c6d4be/0",
            "platform": 0,
            "ia_icon": "//p.qpic.cn/qqconadmin/0/0b6cf3a93b79449e811e3624da65f526/0",
            "ia_color": "333333",
            "color": "f25460",
            "alias": "语言",
            "a_color": "188eee"
          }, {
            "a_icon": "//p.qpic.cn/qqconadmin/0/e1619eb82c6f4db6becfbf605f6fd32a/0",
            "icon": "//p.qpic.cn/qqconadmin/0/63989034142c4ccd803556e3cff0cd7c/0",
            "platform": 1,
            "ia_icon": "//p.qpic.cn/qqconadmin/0/fc8d86f399734b54b67fc30fd1215a59/0",
            "ia_color": "333333",
            "color": "666666",
            "alias": "语言",
            "a_color": "188eee"
          }
        ]
      },
      "1004": {
        "short": null,
        "s": {
          "2027": {
            "t": {
              "3243": {
                "n": "公务员",
                "o": 1,
                "extra_data": []
              },
              "3244": {
                "n": "事业单位",
                "o": 2,
                "extra_data": []
              },
              "3245": {
                "short": "教师考试",
                "n": "教师考试",
                "o": 3,
                "extra_data": []
              },
              "3246": {
                "short": "",
                "n": "金融银行",
                "o": 4,
                "extra_data": []
              },
              "3248": {
                "short": "",
                "n": "企业招聘/其他招考",
                "o": 7,
                "extra_data": []
              }
            },
            "n": "公考求职",
            "o": 27,
            "extra_data": []
          },
          "2046": {
            "short": null,
            "t": {
              "3256": {
                "short": null,
                "n": "法律硕士",
                "o": 1,
                "extra_data": []
              },
              "3257": {
                "short": null,
                "n": "司法考试",
                "o": 2,
                "extra_data": []
              },
              "3280": {
                "short": null,
                "n": "法律实务",
                "o": 3,
                "extra_data": []
              },
              "3283": {
                "short": null,
                "n": "趣味学法",
                "o": 4,
                "extra_data": []
              },
              "3302": {
                "short": "",
                "n": "警法考试",
                "o": 4,
                "extra_data": []
              }
            },
            "n": "法学院",
            "o": 28,
            "extra_data": []
          },
          "2028": {
            "short": null,
            "t": {
              "3154": {
                "n": "会计职称",
                "o": 2,
                "extra_data": []
              },
              "3155": {
                "n": "注册会计师",
                "o": 3,
                "extra_data": []
              },
              "3156": {
                "n": "国际证书",
                "o": 4,
                "extra_data": []
              },
              "3157": {
                "n": "金融类从业",
                "o": 5,
                "extra_data": []
              },
              "3160": {
                "short": "",
                "n": "会计实务操作",
                "o": 8,
                "extra_data": []
              },
              "3161": {
                "short": "其他",
                "n": "其他财经类考试",
                "o": 9,
                "extra_data": []
              }
            },
            "n": "财会金融",
            "o": 29,
            "extra_data": []
          },
          "2039": {
            "short": null,
            "t": {
              "3212": {
                "n": "执业药师",
                "o": 1,
                "extra_data": []
              },
              "3213": {
                "n": "执业医师",
                "o": 2,
                "extra_data": []
              },
              "3214": {
                "n": "执业护士",
                "o": 3,
                "extra_data": []
              },
              "3215": {
                "n": "卫生资格",
                "o": 4,
                "extra_data": []
              },
              "3216": {
                "short": "其他",
                "n": "其他医疗类培训",
                "o": 5,
                "extra_data": []
              },
              "3312": {
                "short": null,
                "n": "医学高考",
                "o": 5,
                "extra_data": []
              },
              "3298": {
                "short": null,
                "n": "妇幼课堂",
                "o": 6,
                "extra_data": []
              }
            },
            "n": "医疗卫生",
            "o": 30,
            "extra_data": []
          },
          "2029": {
            "short": null,
            "t": {
              "3162": {
                "n": "一级建造师",
                "o": 1,
                "extra_data": []
              },
              "3163": {
                "n": "二级建造师",
                "o": 2,
                "extra_data": []
              },
              "3164": {
                "n": "消防工程师",
                "o": 3,
                "extra_data": []
              },
              "3165": {
                "short": "工程造价",
                "n": "工程造价（实操）",
                "o": 4,
                "extra_data": []
              },
              "3166": {
                "short": "工程施工",
                "n": "工程施工（技能）",
                "o": 5,
                "extra_data": []
              },
              "3167": {
                "short": "",
                "n": "注册工程师",
                "o": 6,
                "extra_data": []
              },
              "3316": {
                "short": null,
                "n": "其他建工类培训",
                "o": 7,
                "extra_data": []
              }
            },
            "n": "建筑工程",
            "o": 31,
            "extra_data": []
          },
          "2044": {
            "short": null,
            "t": {
              "3170": {
                "n": "人力资源",
                "o": 1,
                "extra_data": []
              },
              "3171": {
                "n": "心理咨询",
                "o": 2,
                "extra_data": []
              },
              "3172": {
                "short": "IT类考试",
                "n": "计算机等级考试",
                "o": 4,
                "extra_data": []
              },
              "3140": {
                "short": "",
                "n": "办公软件",
                "o": 5,
                "extra_data": []
              },
              "3143": {
                "short": "",
                "n": "技工技能",
                "o": 6,
                "extra_data": []
              },
              "3145": {
                "n": "企业培训",
                "o": 7,
                "extra_data": []
              },
              "3144": {
                "short": "",
                "n": "创业教育",
                "o": 8,
                "extra_data": []
              },
              "3249": {
                "short": "其他",
                "n": "其他",
                "o": 9,
                "extra_data": []
              }
            },
            "n": "职业技能",
            "o": 32,
            "extra_data": []
          }
        },
        "n": "职业·考证",
        "o": 4,
        "ads": {
          "hejis": [
            {
              "click_url": "https://ke.qq.com/huodong/gksa/index.html",
              "biz_id": "75",
              "logo_url": "//p.qpic.cn/qqconadmin/0/1b8ea0e7bae24c129b7df45688d1bfbf/0",
              "hover_tips": "\b公考金课堂",
              "first_cate": 1004
            }
          ],
          "agencies": [
            {
              "click_url": "//szgk.ke.qq.com/",
              "biz_id": "13478",
              "logo_url": "//p.qpic.cn/qqconadmin/0/2980c63a7e4a4335b8435609ef0a22de/0",
              "hover_tips": "尚政公考",
              "first_cate": 1004
            }, {
              "click_url": "https://qms.ke.qq.com/",
              "biz_id": "10063",
              "logo_url": "//p.qpic.cn/qqconadmin/0/92c841fa4dc84976bb1f909eca1baf3b/0",
              "hover_tips": "晴教育",
              "first_cate": 1004
            }, {
              "click_url": "//ke.qq.com/cgi-bin/agency?aid=11473",
              "biz_id": "12765",
              "logo_url": "//p.qpic.cn/qqconadmin/0/bd0959d42d404f2a9d79d0ce1805d61c/0",
              "hover_tips": "口腔之家",
              "first_cate": 1004
            }, {
              "click_url": "https://q.ke.qq.com/",
              "biz_id": "10093",
              "logo_url": "//p.qpic.cn/qqconadmin/0/9bcb0e26e99a48eeae15efbcbe2ca002/0",
              "hover_tips": "起步教育造价学院",
              "first_cate": 1004
            }
          ]
        },
        "extra_data": [
          {
            "a_icon": "//p.qpic.cn/qqconadmin/0/ea98776f864d42f98a4ca43e089e43d1/0",
            "icon": "//p.qpic.cn/qqconadmin/0/ad60822d5d62416d9cd4eebdcbcd1922/0",
            "platform": 0,
            "ia_icon": "//p.qpic.cn/qqconadmin/0/7010538c819c4e50a2ef7c296ef4b8a2/0",
            "ia_color": "333333",
            "color": "4ba3fe",
            "alias": "职业",
            "a_color": "188eee"
          }, {
            "a_icon": "//p.qpic.cn/qqconadmin/0/5097fde9c9b047a0a90d5c72e08617c9/0",
            "icon": "//p.qpic.cn/qqconadmin/0/ec72bc1c7986490da27653eb0fd7db54/0",
            "platform": 1,
            "ia_icon": "//p.qpic.cn/qqconadmin/0/6292d500c35f422c902eaa0c3dbe5b67/0",
            "ia_color": "333333",
            "color": "666666",
            "alias": "职业",
            "a_color": "188eee"
          }
        ]
      },
      "1005": {
        "short": null,
        "s": {
          "2031": {
            "t": {
              "3174": {
                "n": "规划指导",
                "o": 1,
                "extra_data": []
              },
              "3175": {
                "n": "考研英语",
                "o": 2,
                "extra_data": []
              },
              "3176": {
                "n": "考研政治",
                "o": 3,
                "extra_data": []
              },
              "3177": {
                "n": "考研数学",
                "o": 4,
                "extra_data": []
              },
              "3178": {
                "n": "专业课",
                "o": 5,
                "extra_data": []
              },
              "3236": {
                "n": "其他",
                "o": 6,
                "extra_data": []
              }
            },
            "n": "考研",
            "o": 31
          },
          "2042": {
            "t": {
              "3237": {
                "n": "自考",
                "o": 1,
                "extra_data": []
              },
              "3238": {
                "n": "专升本",
                "o": 2,
                "extra_data": []
              }
            },
            "n": "大学",
            "o": 31,
            "extra_data": []
          },
          "2032": {
            "t": {
              "3179": {
                "n": "高考备战",
                "o": 1,
                "extra_data": []
              },
              "3180": {
                "n": "高二",
                "o": 2,
                "extra_data": []
              },
              "3181": {
                "n": "高一",
                "o": 3,
                "extra_data": []
              }
            },
            "n": "高中",
            "o": 32
          },
          "2033": {
            "t": {
              "3182": {
                "n": "中考备战",
                "o": 1,
                "extra_data": []
              },
              "3183": {
                "n": "初二",
                "o": 2,
                "extra_data": []
              },
              "3184": {
                "n": "初一",
                "o": 3,
                "extra_data": []
              }
            },
            "n": "初中",
            "o": 33
          },
          "2034": {
            "t": {
              "3185": {
                "n": "语文",
                "o": 1,
                "extra_data": []
              },
              "3186": {
                "n": "数学",
                "o": 2,
                "extra_data": []
              },
              "3187": {
                "n": "英语",
                "o": 3,
                "extra_data": []
              },
              "3188": {
                "n": "其他",
                "o": 4,
                "extra_data": []
              },
              "3189": {
                "n": "小升初备战",
                "o": 5,
                "extra_data": []
              }
            },
            "n": "小学",
            "o": 34
          }
        },
        "n": "升学·考研",
        "o": 5,
        "ads": {
          "hejis": [
            {
              "click_url": "https://ke.qq.com/huodong/kaoyankecheng/index.html",
              "biz_id": "3",
              "logo_url": "//p.qpic.cn/qqconadmin/0/159560167bc845c4a4f4371ecb37e519/0",
              "hover_tips": "好课推荐",
              "first_cate": 1005
            }, {
              "click_url": "https://ke.qq.com/huodong/gaokao2017/index.html",
              "biz_id": "3",
              "logo_url": "//p.qpic.cn/qqconadmin/0/12827832c351435fa57e4b85ccc41890/0",
              "hover_tips": "高考备战",
              "first_cate": 1005
            }
          ],
          "agencies": [
            {
              "click_url": "//ke.qq.com/cgi-bin/agency?aid=14704",
              "biz_id": "20857",
              "logo_url": "//p.qpic.cn/qqconadmin/0/611a4eeb7d5143e4a121ed4cbdebc772/0",
              "hover_tips": "晨露课堂",
              "first_cate": 1005
            }, {
              "click_url": "https://kkzb.ke.qq.com/",
              "biz_id": "11158",
              "logo_url": "//p.qpic.cn/qqconadmin/0/cc3e088a273042a98093a24de00ff914/0",
              "hover_tips": "尚学研播网教育",
              "first_cate": 1005
            }
          ]
        },
        "extra_data": [
          {
            "a_icon": "//p.qpic.cn/qqconadmin/0/e6d26607d0b0442183ca0368eca41a6f/0",
            "icon": "//p.qpic.cn/qqconadmin/0/3fa28807056a405583dc4f4fc8f68013/0",
            "platform": 0,
            "ia_icon": "//p.qpic.cn/qqconadmin/0/8931c5a53cb1432b8ad6181957477a71/0",
            "ia_color": "333333",
            "color": "7ead00",
            "alias": "升学",
            "a_color": "188eee"
          }, {
            "a_icon": "//p.qpic.cn/qqconadmin/0/cbd32ae54e3c4450a66620d2a90b7062/0",
            "icon": "//p.qpic.cn/qqconadmin/0/ee3fec0590e5458e961373d5d3c9b1be/0",
            "platform": 1,
            "ia_icon": "//p.qpic.cn/qqconadmin/0/b1d65efdb6e1499789234fa2378dade5/0",
            "ia_color": "333333",
            "color": "666666",
            "alias": "升学",
            "a_color": "188eee"
          }
        ]
      },
      "1006": {
        "short": null,
        "s": {
          "2035": {
            "short": null,
            "t": {
              "3190": {
                "short": "",
                "n": "证券投资",
                "o": 2,
                "extra_data": []
              },
              "3191": {
                "short": "",
                "n": "期权期货",
                "o": 3,
                "extra_data": []
              },
              "3192": {
                "short": "",
                "n": "外汇衍生",
                "o": 4,
                "extra_data": []
              },
              "3193": {
                "short": "",
                "n": "其他",
                "o": 5,
                "extra_data": []
              }
            },
            "n": "投资理财",
            "o": 35,
            "extra_data": []
          },
          "2047": {
            "short": null,
            "t": {
              "3259": {
                "short": null,
                "n": "音乐基础",
                "o": 1,
                "extra_data": []
              },
              "3275": {
                "short": null,
                "n": "唱歌发声",
                "o": 2,
                "extra_data": []
              },
              "3276": {
                "short": null,
                "n": "乐器演奏",
                "o": 3,
                "extra_data": []
              },
              "3278": {
                "short": null,
                "n": "音乐制作",
                "o": 4,
                "extra_data": []
              },
              "3279": {
                "short": null,
                "n": "其他",
                "o": 5,
                "extra_data": []
              }
            },
            "n": "音乐乐器",
            "o": 36,
            "extra_data": []
          },
          "2037": {
            "short": null,
            "t": {
              "3206": {
                "short": "",
                "n": "摄影",
                "o": 1,
                "extra_data": []
              },
              "3294": {
                "short": "",
                "n": "书法",
                "o": 2,
                "extra_data": []
              },
              "3205": {
                "short": "",
                "n": "棋牌",
                "o": 3,
                "extra_data": []
              },
              "3289": {
                "short": "",
                "n": "益智休闲",
                "o": 4,
                "extra_data": []
              },
              "3270": {
                "short": "",
                "n": "传统文化",
                "o": 5,
                "extra_data": []
              },
              "3271": {
                "short": "",
                "n": "手工手艺",
                "o": 6,
                "extra_data": []
              },
              "3272": {
                "short": "",
                "n": "精品公开课",
                "o": 7,
                "extra_data": []
              },
              "3208": {
                "short": "",
                "n": "其他",
                "o": 8,
                "extra_data": []
              }
            },
            "n": "文艺修养",
            "o": 38,
            "extra_data": []
          },
          "2049": {
            "short": null,
            "t": {
              "3284": {
                "short": "",
                "n": "体育休闲",
                "o": 1,
                "extra_data": []
              },
              "3285": {
                "short": null,
                "n": "健身训练",
                "o": 2,
                "extra_data": []
              },
              "3286": {
                "short": null,
                "n": "舞蹈健美",
                "o": 3,
                "extra_data": []
              },
              "3287": {
                "short": null,
                "n": "武术格斗",
                "o": 4,
                "extra_data": []
              },
              "3288": {
                "short": null,
                "n": "其他",
                "o": 5,
                "extra_data": []
              }
            },
            "n": "运动健康",
            "o": 39,
            "extra_data": []
          },
          "2036": {
            "short": null,
            "t": {
              "3194": {
                "short": "",
                "n": "婚恋交友",
                "o": 1,
                "extra_data": []
              },
              "3196": {
                "short": "",
                "n": "家居家装",
                "o": 2,
                "extra_data": []
              },
              "3195": {
                "short": "",
                "n": "时尚美妆",
                "o": 3,
                "extra_data": []
              },
              "3291": {
                "short": null,
                "n": "美食烹饪",
                "o": 4,
                "extra_data": []
              },
              "3197": {
                "short": "",
                "n": "养生保健",
                "o": 5,
                "extra_data": []
              },
              "3292": {
                "short": "",
                "n": "动植育养",
                "o": 6,
                "extra_data": []
              },
              "3200": {
                "n": "其他",
                "o": 7,
                "extra_data": []
              }
            },
            "n": "生活百科",
            "o": 40,
            "extra_data": []
          },
          "2038": {
            "short": null,
            "t": {
              "3209": {
                "short": "",
                "n": "科学孕产",
                "o": 0,
                "extra_data": []
              },
              "3210": {
                "short": "",
                "n": "育儿护理",
                "o": 1,
                "extra_data": []
              },
              "3211": {
                "short": "",
                "n": "亲子启蒙",
                "o": 2,
                "extra_data": []
              },
              "3281": {
                "short": "",
                "n": "家庭教育",
                "o": 3,
                "extra_data": []
              },
              "3315": {
                "short": "",
                "n": "少儿编程",
                "o": 4,
                "extra_data": []
              },
              "3282": {
                "short": "",
                "n": "其他",
                "o": 5,
                "extra_data": []
              }
            },
            "n": "母婴亲子",
            "o": 41,
            "extra_data": []
          }
        },
        "n": "兴趣·生活",
        "o": 6,
        "ads": {
          "hejis": [
            {
              "click_url": "//ke.qq.com/huodong/sheying/index.html",
              "biz_id": "26",
              "logo_url": "//p.qpic.cn/qqconadmin/0/5fb59384b7654023acdee1edebcb904c/0",
              "hover_tips": "摄影合辑",
              "first_cate": 1006
            }, {
              "click_url": "//ke.qq.com/huodong/stock/index.html",
              "biz_id": "41",
              "logo_url": "//p.qpic.cn/qqconadmin/0/97968e17e887433e9d7de255d775507c/0",
              "hover_tips": "汇聚牛人，开启股市密码",
              "first_cate": 1006
            }
          ],
          "agencies": [
            {
              "click_url": "//het.ke.qq.com/",
              "biz_id": "16520",
              "logo_url": "//p.qpic.cn/qqconadmin/0/aac022d7cd6b4f1f9513af1f7cdba376/0",
              "hover_tips": "ET教育",
              "first_cate": 1006
            }, {
              "click_url": "//imageedu.ke.qq.com/",
              "biz_id": "10755",
              "logo_url": "//p.qpic.cn/qqconadmin/0/3055225c27da430e9b939ad4fdb4dc14/0",
              "hover_tips": "中艺影像",
              "first_cate": 1006
            }, {
              "click_url": "//brz.ke.qq.com/",
              "biz_id": "11106",
              "logo_url": "//p.qpic.cn/qqconadmin/0/bdb1cff2bf0d4cf2823fe14f3f28425f/0",
              "hover_tips": "博瑞智家庭教育",
              "first_cate": 1006
            }, {
              "click_url": "https://ibrain.ke.qq.com/",
              "biz_id": "16006",
              "logo_url": "//p.qpic.cn/qqconadmin/0/dff8136d63d349778844f5e1dfc91b6e/0",
              "hover_tips": "爱贝睿学堂",
              "first_cate": 1006
            }
          ]
        },
        "extra_data": [
          {
            "a_icon": "//p.qpic.cn/qqconadmin/0/1bbd0c1410664ebd93a5b30b27ccc57b/0",
            "icon": "//p.qpic.cn/qqconadmin/0/cc0d55b29b1b4ecca0585075487ed572/0",
            "platform": 0,
            "ia_icon": "//p.qpic.cn/qqconadmin/0/76fe6802c81443c99ea5467466f314aa/0",
            "ia_color": "333333",
            "color": "f58405",
            "alias": "兴趣",
            "a_color": "188eee"
          }, {
            "a_icon": "//p.qpic.cn/qqconadmin/0/0f96f401e2874cce92eac02035abf5f3/0",
            "icon": "//p.qpic.cn/qqconadmin/0/798d5248d2d34ed480fbfc9e61c241ca/0",
            "platform": 1,
            "ia_icon": "//p.qpic.cn/qqconadmin/0/6700377ce73148f3b304c5cfa717c7a6/0",
            "ia_color": "333333",
            "color": "666666",
            "alias": "兴趣",
            "a_color": "188eee"
          }
        ]
      }
    },
    "recommend_type": {
      "1003": [
        {
          "s_name": "实用英语",
          "s_id": 2020
        }, {
          "t_id": 3116,
          "s_name": "雅思",
          "s_id": 2021
        }, {
          "t_id": 3117,
          "s_name": "托福",
          "s_id": 2021
        }, {
          "t_id": 3121,
          "s_name": "英语四六级",
          "s_id": 2022
        }
      ],
      "1004": [
        {
          "t_id": 3243,
          "s_name": "公务员",
          "s_id": 2027
        }, {
          "t_id": 3245,
          "s_name": "教师考试",
          "s_id": 2027
        }, {
          "s_name": "建筑工程",
          "s_id": 2029
        }
      ],
      "1001": [
        {
          "s_name": "前端开发",
          "s_id": 2004
        }, {
          "t_id": 3007,
          "s_name": "Java",
          "s_id": 2002
        }, {
          "t_id": 3001,
          "s_name": "产品策划",
          "s_id": 2001
        }, {
          "t_id": 3038,
          "s_name": "Linux运维",
          "s_id": 2007
        }
      ],
      "1002": [
        {
          "s_name": "平面设计",
          "s_id": 2011
        }, {
          "s_name": "UI设计",
          "s_id": 2012
        }, {
          "t_id": 3103,
          "s_name": "室内设计",
          "s_id": 2017
        }
      ],
      "1005": [
        {
          "s_name": "考研",
          "s_id": 2031
        }, {
          "s_name": "大学",
          "s_id": 2042
        }, {
          "s_name": "高中",
          "s_id": 2032
        }, {
          "s_name": "初中",
          "s_id": 2033
        }
      ],
      "1006": [
        {
          "t_id": 3206,
          "s_name": "摄影",
          "s_id": 2037
        }, {
          "t_id": 3276,
          "s_name": "乐器演奏",
          "s_id": 2047
        }, {
          "t_id": 3195,
          "s_name": "美妆",
          "s_id": 2036
        }, {
          "t_id": 3210,
          "s_name": "育儿",
          "s_id": 2038
        }
      ]
    },
    "hot_word_list": [
      {
        "ishot": 1,
        "hotword": "腾讯课堂设计大师班",
        "link": ""
      }, {
        "ishot": 1,
        "hotword": "腾讯自研前端课",
        "link": ""
      }, {
        "ishot": 1,
        "hotword": "PS",
        "link": "https://ke.qq.com/course/list/ps"
      }, {
        "ishot": 0,
        "hotword": "java",
        "link": "https://ke.qq.com/course/list/java"
      }, {
        "ishot": 0,
        "hotword": "CAD",
        "link": "https://ke.qq.com/course/list/cad"
      }, {
        "ishot": 0,
        "hotword": "python",
        "link": "https://ke.qq.com/course/list/python"
      }
    ]
  }
}
ctx.body = cat_info
})

router.get('/cgi_bin', async (ctx, next) => {
let cgi_bin = {
  "retcode": 0,
  "result": {
    "link_out": [
      {
        "link_url": "http://daxue.qq.com/",
        "name": "腾讯大学"
      }, {
        "link_url": "http://edu.qq.com/",
        "name": "腾讯网教育频道"
      }, {
        "link_url": "http://class.qq.com/",
        "name": "腾讯精品课"
      }, {
        "link_url": "https://cloud.tencent.com/?fromSource=gwzcw.788739.788739.788739",
        "name": "腾讯云"
      }, {
        "link_url": "http://guanjia.qq.com/",
        "name": "腾讯电脑管家"
      }, {
        "link_url": "http://yaq.qq.com",
        "name": "腾讯御安全"
      }, {
        "link_url": "https://fm.qq.com/",
        "name": "企鹅FM"
      }, {
        "link_url": "https://weiyun.com",
        "name": "腾讯微云"
      }, {
        "link_url": "https://docs.qq.com",
        "name": "腾讯文档"
      }, {
        "link_url": "http://gameinstitute.qq.com/web2017/index.shtml",
        "name": "腾讯游戏学院"
      }, {
        "link_url": "http://www.hqwx.com/",
        "name": "环球网校"
      }, {
        "link_url": "http://www.examw.com/",
        "name": "中华考试网"
      }, {
        "link_url": "http://www.xuegod.cn/",
        "name": "学神IT教育"
      }, {
        "link_url": "http://www.yzfjy.com/",
        "name": "云中帆教育"
      }, {
        "link_url": "http://www.weekedu.com/",
        "name": "为课网校"
      }, {
        "link_url": "http://www.wangxiao.cn/?agent=qqcheng",
        "name": "中大网校"
      }, {
        "link_url": "http://www.yixiuxueyuan.com",
        "name": "益修学院"
      }, {
        "link_url": "http://www.qidianla.com/",
        "name": "起点学院"
      }, {
        "link_url": "http://www.woshipm.com/",
        "name": "人人都是产品经理"
      }, {
        "link_url": "http://www.huatu.com/",
        "name": "公务员考试网"
      }, {
        "link_url": "http://www.koolearn.com",
        "name": "新东方在线"
      }, {
        "link_url": "http://www.offcn.com/",
        "name": "中公公务员网"
      }, {
        "link_url": "http://www.zxxk.com/",
        "name": "学科网"
      }, {
        "link_url": "http://www.51zxw.net/",
        "name": "我要自学网"
      }, {
        "link_url": "http://www.233.com/",
        "name": "233网校"
      }
    ]
  }
}
ctx.body = cgi_bin
})

module.exports = router

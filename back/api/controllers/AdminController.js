var fs = require('fs');
module.exports = {
  index: function (req, res) {
    res.view({ layout: false })
  },
  login: function (req, res) {
    res.view({ layout: false })
  },
  addData: async function (req, res) {
    var json = req.allParams();
    var row = await News.create(json).fetch();
    res.json(row);
  },
  addNotice: async function (req, res) {
    var json = req.allParams();
    console.log(json);
    var row = await Notice.create(json).fetch();
    res.json(row);
  },
  logined: async function (req, res) {
    var json = req.allParams();
    if (req.session.captcha.toUpperCase() !== json.yzm.toUpperCase())
      return res.json(1);
    delete json.yzm;
    var row = await User.findOne(json);
    if (row) {
      req.session.user = { id: row.id, nicheng: row.nicheng };
      res.json(3)
    } else
      res.json(2);
  },
  register: async function (req, res) {
    var json = req.allParams();
    User.create(json, async err => {
      if (err && err.code === 'E_UNIQUE')
        res.json(false);
      else {
        var row = await User.findOne(json);
        req.session.user = { id: row.id, nicheng: row.nicheng };
        res.json(true);
      }
    });
    // try {
    //   var row = await User.create(json).fetch();
    //   req.session.user={id:row.id,nicheng:row.nicheng}
    //   res.json(true);
    // } catch (err) {
    //   if (err && err.code === 'E_UNIQUE')
    //     res.json(false);
    // }
  },
  getEecords: async function (req, res) {
    var num = await News.count();
    res.json(num);
  },
  getPage: async function (req, res) {
    var pageSize = req.query.pageSize;
    var start = pageSize * req.query.cPage;
    try {
      var arr = await News.find().sort('id desc').skip(start).limit(pageSize);
      res.json(arr);
    } catch (err) {
      if (err && err.code === 'E_INVALID_CRITERIA')
        res.json(false);
    }
  },
  delete: async function (req, res) {
    var id = req.query.id;
    var row = await News.destroy({ id }).fetch();
    res.json(row);
  },
  search: async function (req, res) {
    var keyword = req.query.keyword;
    var arr = await News.find({ title: { contains: keyword } }).sort('id desc');
    res.json(arr[0]);
  },
  getNicheng: async function (req, res) {
    res.json(req.session.user.nicheng)
  },
  logout: async function (req, res) {
    delete req.session.user;
    res.json(true)
  },
  changePwd: async function (req, res) {
    var oldPwd = req.body.oldPwd;
    var newPwd = req.body.newPwd;
    var id = req.session.user.id;
    var row = await User.findOne({ id, password: oldPwd });
    if (!row)
      return res.json(false);
    row = await User.update({id},{password:newPwd}).fetch();
    res.json(row[0])
  },
  edit: async function (req, res) {
    var json = req.allParams();
    var id = json.id;
    delete json.id;
    var row = await News.update({ id }, json).fetch();
    res.json(row);
  },
  clearImg: async function (req, res) {
    var oImg = require('../../models/getImages');
    var path = req.query.path;
    var arr1 = oImg.getImageFiles(path);
    var arr = [];
    var arr2 = [];
    if (path === './assets/adv/') {
      arr = await Adv.find();
      arr2 = [];
      arr.forEach(el => {
        arr2.push(el.src);
      })
    } else {
      arr = await News.find();
      arr.forEach(el => {
        var imgArr = el.content.match(/upload\/[^"]+/g);
        imgArr.forEach(el1 => {
          el1 = el1.split("/");
          el1 = el1[el1.length - 1];
          arr2.push(el1);
        })
      })
    }
    arr1.forEach(el => {
      var flag = true;
      arr2.forEach(el1 => {
        if (el === el1) {
          flag = false;
          return
        }
      })
      if (flag) {
        fs.unlinkSync(path + el);
      }
    });
    res.json(true);
  },
  upload: function (req, res) {
    req.file('image').upload(
      {
        dirname: require('path').resolve(sails.config.appPath, 'assets/upload')
      },
      function (err, files) {
        if (err)
          return res.serverError(err);
        if (files.length === 0)
          return res.json(false);
        let path = files[0].fd.split('\\');
        path = path[path.length - 1];
        res.json(path);
      });
  },
  nineUpLoad: function (req, res) {
    req.file('image').upload(
      {
        dirname: require('path').resolve(sails.config.appPath, 'assets/photoes')
      },
      function (err, files) {
        if (err)
          return res.serverError(err);
        if (files.length === 0)
          return res.json(false);
        let path = files[0].fd.split('\\');
        path = path[path.length - 1];
        res.json(path);
      });
  },
  nineAddData: function (req, res) {
    req.file('image').upload(
      {
        dirname: require('path').resolve(sails.config.appPath, 'assets/photoes')
      },
      async function (err, files) {
        if (err)
          return res.serverError(err);
        let path = files[0].fd.split('\\');
        var imageName = path[path.length - 1];
        var json = req.allParams();
        json.src = imageName;
        var row = await Images.create(json).fetch();
        res.json(row);
      });
  },
  upAdv: function (req, res) {
    req.file('image').upload(
      {
        dirname: require('path').resolve(sails.config.appPath, 'assets/adv')
      },
      async function (err, files) {
        if (err)
          return res.serverError(err);
        let path = files[0].fd.split('\\');
        var imageName = path[path.length - 1];
        var json = req.allParams();
        json.src = imageName;
        var row = await Adv.create(json).fetch();
        res.json(row);
      });
  },
  upVideo: function (req, res) {
    req.file('image').upload(
      {
        dirname: require('path').resolve(sails.config.appPath, 'assets/video')
      },
      async function (err, files) {
        if (err)
          return res.serverError(err);
        let path = files[0].fd.split('\\');
        var imageName = path[path.length - 1];
        var json = req.allParams();
        console.log(json);        
        json.src = imageName;
        var row = await Video.create(json).fetch();
        res.json(row);
      });
  },
  captcha: function (req, res) {
    var svgCaptcha = require('svg-captcha');
    var codeConfig = {
      size: 4,// 验证码长度
      ignoreChars: '0o1li', // 验证码字符中排除 0o1i
      noise: 2, // 干扰线条的数量
      height: 45
    };
    var captcha = svgCaptcha.create(codeConfig);
    req.session.captcha = captcha.text.toLowerCase(); //存session用于验证接口获取文字码
    res.json(captcha.data);
  }
};


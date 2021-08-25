module.exports.policies = {
  '*': 'allow',
  AdminController: {
    '*': 'isLogin',
    'login': true,
    'logined':true,
    'register':true,
    'captcha':true
  }
};

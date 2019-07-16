const errorCode = {
  0: '操作成功',
  99: '操作失败',
  1: '参数不对',
  2: '非法请求',
  3: '必填字段不能为空',

  101: '用户不存在',
  102: '用户已经注册, 请更换注册账号',
  103: '用户不存在',
  104: '昵称已被使用',
  105: '用户已登录',
  106: '用户未登录',
  107: '没有令牌',
  108: '没有手机号码',
  109: '验证码错误',
  110: '发送短信失败',
  111: '检查验证码失败',
  112: '手机号长度错误',
  113: '用户名长度错误',
  114: '密码必须大于6小于20个字符',
  115: '手机号错误',
  116: '上传失败',
  117: '用户名或密码错误',
  118: '用户名不能是纯数字',
  119: '两次输入的密码不一致',
  120: '此手机号码已在枫车平台注册，请直接登陆',
  121: '联系人信息错误',
  122: '联系人邮箱错误',

  123: '用户车型信息错误',
  124: '很抱歉，暂未找到适合您当前车型的保养项目，我们正在努力完善各类车型保养数据。',
  125: '验证码已过期',
  201: '优惠券信息不存在',
  202: '优惠券提交失败',
  203: '优惠券不存在',
  204: '优惠券支付失败',
  205: '很抱歉，无法使用优惠券。您当天已使用过1次优惠券，须隔天才能再次使用',
  206: '优惠券不能用于此次交易，请联系枫车客服',
  207: '您并没有可用的优惠券',
  208: '商家未被授权参与此优惠券',

  301: '广告不存在',
  302: '图片资源不存在',

  401: '用户已报名该活动',

  501: '需要输入参数',

  601: '红包领取成功',
  602: '红包领取失败',

  701: '店铺没有正常营业',
  702: '没有可管理的店铺',
  703: '没有权限操作店铺',
  704: '必须先设置银行信息，才能提现',
  705: '请先设置提现密码，才可以提现',

  801: '订单无效',
  802: '订单未完成',
  803: '订单已评价',
  804: '订单确认收货15天后，无法评价',
  805: '当前安装服务已有改动，请重新选择安装服务',
  806: '订单异常，请重新选择商品',

  1001: '支付代码无效',
  1002: '订单已付款',
  1003: '订单类型无效',
  1004: '订单ID无效',
  1005: '生成预支付订单失败，请重试',

  2001: '无微信openid',
  2002: ' 抱歉，您的手机号未进行验证！',

  3001: '您已经被别家聘请中！',
  3002: '您正在申请别的商家！',
  3003: '您已经提交过申请了！',
  3004: '您已经被别家聘请中,不能取消！',
  3005: '您正在申请别的商家！,不能取消！',
  3006: '您并没有申请任何商家！,无法取消！'
}

export default errorCode

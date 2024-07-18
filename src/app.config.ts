export default defineAppConfig({
  // entryPagePath: 'pages/clock/list/index',
  pages: [
    'pages/clock/list/index',
    'pages/index/index',
    'pages/user/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom:true,
    color: '#696969',
    selectedColor: '#fda12f',
    backgroundColor: '#ffffff',
    list: [
      {
        pagePath: 'pages/clock/list/index',
        text: '打卡',
        iconPath: 'assets/images/tabbar/clockin.png',
        selectedIconPath: 'assets/images/tabbar/clockin_selected.png',
      },
      {
        pagePath: 'pages/user/index',
        text: '我的',
        iconPath: 'assets/images/tabbar/user.png',
        selectedIconPath: 'assets/images/tabbar/user_selected.png',
      },
    ]
  },
  "usingComponents": {}
})

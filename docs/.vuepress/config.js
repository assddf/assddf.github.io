module.exports = {
  title: 'alice 哈哈哈',
  description: 'alice测试网页',
  head: [
    ['link', { rel: 'icon', href: '/logo.jpg' }] // 需要被注入到当前页面的 HTML <head> 中的标签
  ],
  themeConfig: {
    // search: false, // 设置是否使用导航栏上的搜索框
    // searchMaxSuggestions: 10,  // 搜索框显示的搜索结果数量
    logo: '/dh_logo.jpg', // 当行栏logo
    // navbar: false, // 配置禁用导航栏
    nav: [ // 当行兰链接
      { text: 'Home', link: '/' },
      // 可指定链接跳转模式：默认target: '_blank'新窗口打开，_self当前窗口打开
      // { text: '百度', link: 'https://www.baidu.com' },
      // { text: 'CSDN', link: 'https://blog.csdn.net', target: '_blank' },
      // { text: '豆瓣', link: 'https://movie.douban.com', target: '_self', rel: '' },
      // 支持嵌套,形成下拉式的导航菜单
      // {
      //   text: '语言',
      //   ariaLabel: 'Language Menu',
      //   items: [
      //     { text: '中文', link: '/language/chinese/' },
      //     { text: '英文', link: '/language/english/' },
      //     { text: '鸟语', items: [{ text: '语文', link: '/language/niaoyu/' }] }
      //   ]
      // }
      // 对应blog/fontend/README.md
      { text: '前端', link: '/blog/fontend/' },
      { text: '后端', link: '/blog/backend/' },
      // 对应//guide/guide.md
      { text: '导航', link: '/guide/guide' },
    ],
    // sidebar: 'auto', // 自动补充侧边栏
    // 设置深度，使用了sidebar: 'auto'的话只有设置0才会生效(仅显示h2的标题)，否则默认2
    // sidebarDepth: 0,
    // 侧边栏非分组
    sidebar: {
      //对象的默认路径
      '/blog/fontend/': [
        '', //侧边栏第一个页面是：/blog/fontend/README.md,、链接文字自动获取(页面的第一个header)，即h1(前端技术)
        'myhtml',  //侧边栏第二个页面是：/blog/fontend/myhtml.md,链接文字自动获取(页面的第一个header)，即h2(html 二级标题)
        ['myJavascript', 'js自定义的标题'] //侧边栏第三个页面是：/blog/fontend/myJavascript.md ,指定链接的文字，使用一个格式为 [link, text] 的数组。
      ],
      '/blog/backend/': [
        '',
        'myjava',
      ],
    },
    // 侧边栏分组
    // sidebar: [
    //   {
    //     title: '分组1 前端',
    //     collapsable: false, // 展开状态
    //     children: [
    //       '/blog/fontend/myhtml',
    //       ['/blog/fontend/myJavascript', 'js自定义的标题']
    //     ],
    //   },
    //   {
    //     title: '分组2 后端',
    //     collapsable: true,
    //     children: [
    //       '/blog/backend/myjava',
    //     ]
    //   }
    // ],
    sidebarDepth: 2,
  }
}
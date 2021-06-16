export default {
  'en-us': {
    sidemenu: [
      {
        title: 'header title',
        children: [
          {
            title: 'demo1',
            link: '/en-us/docs/demo1.html',
          },
          {
            title: 'demo2',
            link: '/en-us/docs/demo2.html',
          },
          {
            title: 'dir',
            opened: true,
            children: [
              {
                title: 'demo3',
                link: '/en-us/docs/dir/demo3.html',
              },
            ],
          },
        ],
      },
    ],
    barText: 'Documentation',
  },
  'zh-cn': {
    sidemenu: [
      {
        title: 'Dubbo-go-pixiu 1.0',
        children: [
          {
            title: '简介',
            children: [
              {
                title: 'Dubbo-go-pixiu v0.2.1 简介',
                link: '/zh-cn/docs/user/preface/3.0_feature.html'
              },
              {
                title: '架构',
                link: '/zh-cn/docs/user/preface/architecture.html'
              },
            ]
          },
          {
            title: '快速开始',
            link: '/docs/zh-cn/demo1.md',
          },
          {
            title: '用户配置',
            children: [
              {
                title: '服务提供者',
                link: '',
              },
              {
                title: '客户端',
                link: '',
              },
              {
                title: '协议选择',
                link: '',
              },
              {
                title: '注册中心',
                link: '',
              },
              {
                title: '路由规则',
                link: '',
              }
            ]
          },
          {
            title: '示例项目',
            link: '/zh-cn/docs/user/samples/samples.html',
          },
          {
            title: '开发者指南',
            children: [
              {
                title: '框架设计',
                link: '/zh-cn/docs/developer/design.html'
              }
            ],
          },
        ]
      },

    ],
    barText: '文档',
  },
};

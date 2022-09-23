export default {
  base: "/vue3-ui/",
  title: 'vue-ui组件1',
  description: '组件ui站点',
  themeConfig: {
    siteTitle: "vue-ui组件文档2",
    nav: [
      { text: 'Guide', link: '/guide' },
      { text: 'Configs', link: '/config', activeMatch: '/config/' },
      { text: '选项', items: [
        {
          text: '苹果', link: '/apple'
        },
        {
          text: '梨子', link: '/lizi'
        }
      ] }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
          { text: '配置', link: '/config/option1' }
        ]
      }
    ]
  }
}
export default  [
  {
    exact: false,
    path: '/',
    component: '@/layouts/index',
    routes: [
      {
        path: '/',
        component: '@/pages/home/index',
      },
      { 
        path: '/docs',
        component: '@/pages/docs/index'
      }
    ]
  }
]
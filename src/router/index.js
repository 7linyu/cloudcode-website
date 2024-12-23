import { createRouter as _createRouter, createWebHashHistory } from 'vue-router'
// import 'zenticons/lib/index.css';


// const pages = import.meta.glob('../src/pages/**/*.vue')
// const routes = Object.keys(pages).map((path)=>{
//   let name = path.match(/\/pages(.*)\.vue$/)[1].toLowerCase();
//   if(name.substring(name.length - 5) == 'index'){
//     name = name.slice(0, -5);//去掉最后的index
//   }
//   return {
//     path: name === '/home' ? '/': name,
//     component: pages[path]
//   }
// })

const routes = [
  {
    path: '/',
    name: 'PageView',
    redirect: '/service',
    component: () => import('@/view/PageView.vue'),
    children: [
      {
        path: '/service',
        name: 'service',
        component: () => import('@/view/Service.vue'),
        props: true,
        meta: {
          title: '云萌官网'
        }
      },
      // {
      //   path: '/about',
      //   name: 'about',
      //   component: () => import('@/view/AboutPage.vue'),
      //   props: true,
      //   meta: {
      //     title: '云萌新益科技有限公司'
      //   }
      // },
    ]
  }
]

export function createRouter() {
  return _createRouter({
    history: createWebHashHistory(),
    routes
  })
}


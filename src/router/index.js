import Vue from 'vue'
import Router from 'vue-router'

// const _import = require('./_import_' + process.env.NODE_ENV)
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '@/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/login',
  //   name: 'login',
  //   hidden: true
  // },
  {
    path: '',
    component: Layout,
    redirect: '/dashboard/dashboard'
  },
  { path: '/login', component: () => import('@/views/login'), name: '登录NxAdmin', hidden: true },
  { path: '/404', component: () => import('@/views/errorPage/404'), hidden: true },
  { path: '/401', component: () => import('@/views/errorPage/401'), hidden: true },
  // 锁屏
  {
    path: '/lock',
    hidden: true,
    name: '锁屏页',
    component: () => import('@/views/common/lock')
  },
  // 报表
  {
    path: '/dashboard',
    component: Layout,
    meta: { title: 'dashboard', icon: 'dashboard' },
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/dashboard'),
        meta: { title: 'dashboard', icon: 'dashboard' }
      }
    ]
  },

  // 表情包
  // {
  //   path: '/emoji',
  //   component: Layout,
  //   meta: { title: 'emoji', icon: 'emoji' },
  //   children: [
  //     {
  //       path: 'emoji',
  //       name: 'emoji',
  //       component: () => import('@/views/githubemoji'),
  //       meta: { title: 'emoji', icon: 'emoji' }
  //     }

  //   ]
  // },
  // 图标组件
  // {
  //   path: '/icons',
  //   component: Layout,
  //   redirect: '/icons/iconIndex',
  //   name: 'icons',
  //   meta: {
  //     title: 'Icons',
  //     icon: 'icon'
  //   },
  //   children: [
  //     {
  //       path: 'iconIndex',
  //       name: 'iconIndex',
  //       component: () => import('@/views/icons/svg-icons/iconIndex'),
  //       meta: { title: 'svgicons', icon: 'icon' }
  //     },
  //     {
  //       path: 'font-awesome',
  //       name: 'font-awesome',
  //       component: () => import('@/views/icons/font-awesome/'),
  //       meta: { title: 'fontawesome', icon: 'font-awesome' }
  //     },
  //     {
  //       path: 'AliIcons',
  //       name: 'AliIcons',
  //       component: () => import('@/views/icons/AliIcons/'),
  //       meta: { title: 'AliIcons', icon: 'AliIcons' }
  //     }
  //   ]
  // },
  // // 表单
  // {
  //   path: '/form',
  //   component: Layout,
  //   redirect: '/form/BaseForm',
  //   name: 'form',
  //   meta: {
  //     title: 'form',
  //     icon: 'form'
  //   },
  //   children: [
  //     {
  //       path: 'BaseForm',
  //       name: 'BaseForm',
  //       component: () => import('@/views/form/BaseForm'),
  //       meta: { title: 'BaseForm' }
  //     },
  //     {
  //       path: 'VueEditor',
  //       name: 'VueEditor',
  //       component: () => import('@/views/form/VueEditor'),
  //       meta: { title: 'VueEditor' }
  //     },
  //     {
  //       path: 'Upload',
  //       name: 'Upload',
  //       component: () => import('@/views/form/Upload'),
  //       meta: { title: 'Upload' }
  //     }
  //   ]
  // },
  // // excel 下载和渲染
  // {
  //   path: '/excel',
  //   component: Layout,
  //   redirect: '/excel/exportExcel',
  //   name: 'excel',
  //   meta: {
  //     title: 'excel',
  //     icon: 'excel'
  //   },
  //   children: [
  //     {
  //       path: 'exportExcel',
  //       name: 'exportExcel',
  //       component: () => import('@/views/excel/exportExcel'),
  //       meta: { title: 'exportExcel' }
  //     },
  //     {
  //       path: 'selectExcel',
  //       name: 'selectExcel',
  //       component: () => import('@/views/excel/selectExcel'),
  //       meta: { title: 'selectExcel' }
  //     },
  //     {
  //       path: 'uploadExcel',
  //       name: 'uploadExcel',
  //       component: () => import('@/views/excel/uploadExcel'),
  //       meta: { title: 'uploadExcel' }
  //     }
  //   ]
  // },
  {
    path: '/i18n-demo',
    component: Layout,
    redirect: 'i18n-demo',
    children: [
      {
        path: 'indexLang',
        name: 'indexLang',
        component: () => import('@/views/i18n-demo/indexLang'),
        meta: { title: 'i18n', icon: 'international' }
      }
    ]
  }
]

export default new Router({
  mode: 'history', // 后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
export const asyncRouterMap = [
  {
    path: '/user',
    component: Layout,
    redirect: '/system/user',
    name: 'system',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: 'UserAdmin',
      icon: 'user',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'user',
        component: () => import('@/views/system/user/user'),
        name: 'user',
        meta: {
          title: 'User',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'role',
        component: () => import('@/views/system/user/role'),
        name: 'role',
        meta: {
          title: 'Role',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      }
    ]
  },
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/page',
    name: 'permission',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: 'permission',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [{
      path: 'page',
      component: () => import('@/views/permission/page'),
      name: 'pagePermission',
      meta: {
        title: 'pagePermission',
        roles: ['admin'] // or you can only set roles in sub nav
      }
    }, {
      path: 'directive',
      component: () => import('@/views/permission/directive'),
      name: 'directivePermission',
      meta: {
        title: 'directivePermission'
        // if do not set roles, means: this page does not require permission
      }
    }]
  },
  { path: '*', redirect: '/404', hidden: true }]

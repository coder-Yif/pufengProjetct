import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  //   path: '/',
  //   component: () => import( /* webpackChunkName: "login" */ '../components/zujian/Login.vue'),
  // },
  // {
  //   path: '/login',
  //   component: () => import( /* webpackChunkName: "login" */ '../components/zujian/Login.vue'),
  // },
  // {
    path: '/',
    component: () => import( /* webpackChunkName: "home" */ '../components/common/Home.vue'),
    children: [{
        path: '/dashboard',
        component: () => import( /* webpackChunkName: "dashboard" */ '../components/zujian/Dashboard.vue'),
        meta: {
          title: '工程管理'
        }
      },
      {
        path: '/view',
        component: () => import( /* webpackChunkName: "table" */ '../components/longda/viewProj.vue'),
        meta: {
          title: '组织合同'
        },
        children: [

          {
            path: '/task',
            component: () => import( /* webpackChunkName: "table" */ '../components/longda/task.vue'),
            meta: {
              title: '工程任务'
            }
          },
          {
            path: '/Logo',
            component: () => import( /* webpackChunkName: "table" */ '../components/longda/Logo.vue'),
            meta: {
              title: '工程日志'
            }
          },
          {
            path: '/ProjectManage',
            component: () => import( /* webpackChunkName: "table" */ '../components/longda/ProjectManage.vue'),
            meta: {
              title: '工程管理'
            }
          },
          {
            path: '/ckxm',
            component: () => import( /* webpackChunkName: "table" */ '../components/longda/ckxm.vue'),
            meta: {
              title: '查看项目'
            }
          },
          {
            path: '/gante',
            component: () => import( /* webpackChunkName: "table" */ '../components/longda/gante.vue'),
            meta: {
              title: '查看项目'
            }
          },
        ]
      },
      {
        path: '/staff',
        component: () => import( /* webpackChunkName: "table" */ '../components/longda/StaffManage.vue'),
        meta: {
          title: '农民工管理'
        },
      },
      {
        path: '/StaffInfo',
        component: () => import( /* webpackChunkName: "table" */ '../components/longda/StaffInfo.vue'),
        meta: {
          title: '工程任务'
        }
      },
      {
        path: '/Salary',
        component: () => import( /* webpackChunkName: "table" */ '../components/longda/Salary.vue'),
        meta: {
          title: '工程日志'
        }
      },
      {
        path: '/material',
        component: () => import( /* webpackChunkName: "table" */ '../components/longda/material.vue'),
        meta: {
          title: '物资管理'
        },
      },
      {
        path: '/zuzhi',
        component: () => import( /* webpackChunkName: "table" */ '../components/zujian/zuzhi.vue'),
        meta: {
          title: '组织合同'
        }
      },
      {
        path: '/AddTask',
        component: () => import( /* webpackChunkName: "table" */ '../components/longda/AddTask.vue'),
        meta: {
          title: '工程任务'
        }
      },
      {
        path: '/zhuye',
        component: () => import( /* webpackChunkName: "table" */ '../components/longda/zhuye.vue'),
        meta: {
          title: '工程管理'
        }
      },

      {
        path: '/zuzhi',
        component: () => import( /* webpackChunkName: "table" */ '../components/zujian/zuzhi.vue'),
        meta: {
          title: '查看项目'
        }
      },
      {
        path: '/ygxx',
        component: () => import( /* webpackChunkName: "table" */ '../components/zujian/BaseTable.vue'),
        meta: {
          title: '员工信息'
        }
      },
      {
        path: '/hwgl',
        component: () => import( /* webpackChunkName: "tabs" */ '../components/zujian/hwgl.vue'),
        meta: {
          title: '货物信息'
        }
      },
      {
        path: '/newProject',
        component: () => import( /* webpackChunkName: "tabs" */ '../components/longda/newProject.vue'),
        meta: {
          title: '添加项目'
        }
      },
      // {
      //   path: '/jxgl',
      //   component: () => import( /* webpackChunkName: "tabs" */ '../components/zujian/jxgl.vue'),
      //   meta: {
      //     title: '绩效管理'
      //   }
      // },
      {
        path: '/spgl',
        component: () => import( /* webpackChunkName: "tabs" */ '../components/zujian/spgl.vue'),
        meta: {
          title: '消息提醒'
        }
      },
      {
        path: '/fbtz',
        component: () => import( /* webpackChunkName: "tabs" */ '../components/zujian/fbtz.vue'),
        meta: {
          title: '发布通知'
        }
      },
      {
        path: '/xgmm',
        component: () => import( /* webpackChunkName: "tabs" */ '../components/zujian/xgmm.vue'),
        meta: {
          title: '修改密码'
        }
      },
      {
        path: '/tabs',
        component: () => import( /* webpackChunkName: "tabs" */ '../components/zujian/Tabs.vue'),
        meta: {
          title: 'tab选项卡'
        }
      },

    ]
  },
  {
    path: '/home2',
    component: () => import( /* webpackChunkName: "home" */ '../components/common/Home2.vue'),
    children: [{
        path: '/jxck',
        component: () => import( /* webpackChunkName: "dashboard" */ '../components/yuangong/jxck.vue'),
        meta: {
          title: '绩效查看'
        }
      },
      {
        path: '/jdtj',
        component: () => import( /* webpackChunkName: "table" */ '../components/yuangong/jdtj.vue'),
        meta: {
          title: '进度提交'
        }
      },
      {
        path: '/jxck1',
        component: () => import( /* webpackChunkName: "dashboard" */ '../components/yuangong/jxck1.vue'),
        meta: {
          title: '绩效查看'
        }
      },
      {
        path: '/jdtj1',
        component: () => import( /* webpackChunkName: "table" */ '../components/yuangong/jdtj1.vue'),
        meta: {
          title: '进度提交'
        }
      },
      {
        path: '/swsq',
        component: () => import( /* webpackChunkName: "tabs" */ '../components/yuangong/swsq.vue'),
        meta: {
          title: '事务申请'
        }
      },
      {
        path: '/spgl2',
        component: () => import( /* webpackChunkName: "tabs" */ '../components/zujian/spgl2.vue'),
        meta: {
          title: '审批管理'
        }
      },
      {
        path: '/xgmm2',
        component: () => import( /* webpackChunkName: "tabs" */ '../components/yuangong/xgmm.vue'),
        meta: {
          title: '修改密码'
        }
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
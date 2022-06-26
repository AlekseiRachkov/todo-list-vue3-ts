import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import todo from '../views/todo/index.vue'
import todoPromise from '../views/todo/todoPromise.vue'
import todoCompleted from '../views/todo/todoCompleted.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'todo',
    component: todo,
    children: [
      {
        path: 'promise',
        name: 'todoPromise',
        component: todoPromise,
      },
      {
        path: 'completed',
        name: 'todoCompleted',
        component: todoCompleted,
      },
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

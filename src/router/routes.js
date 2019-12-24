import KbnBoardView from '@/components/templetes/KbnBoardView.vue'
import KbnLoginView from '@/components/templetes/KbnLoginView.vue'
import KbnTaskDetailModal from '@/components/templetes/KbnTaskDetailModal.vue'

export default [{
  path: '/',
  component: KbnBoardView,
  meta: { requiresAuth: true }
}, {
  path: '/login',
  component: KbnLoginView
}, {
  path: '/tasks/:id',
  component: KbnTaskDetailModal,
  meta: { requiresAuth: true }
}, {
  path: '*',
  redirect: '/'
}]

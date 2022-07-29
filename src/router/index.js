import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import YapilacakEkle from '../views/YapilacakEkle.vue'
import YapilacakGUncelle from '../views/YapilacakGuncelle.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/ekle',
    name:'yapilacakEkle',
    component: YapilacakEkle
  },
  {
    path:'/guncelle/:id',
    name:'yapilacakGuncelle',
    component: YapilacakGUncelle,
    props:true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

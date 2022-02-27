import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Contact = () => import(/* webpackChunkName: "contact" */ '@/components/Contact.vue')
const Home = () => import(/* webpackChunkName: "home" */ '@/components/Home.vue')
const Gallery = () => import(/* webpackChunkName: "gallery" */ '@/components/Gallery.vue')
const Gallerys = () => import(/* webpackChunkName: "gallery" */ '@/components/Gallerys.vue')
const GalleryItem = () => import(/* webpackChunkName: "gallery-item" */ '@/components/GalleryItem.vue')
const Reviews = () => import(/* webpackChunkName: "dates" */ '@/components/Reviews.vue')
const Map = () => import(/* webpackChunkName: "map" */ '@/components/Map.vue')
const Hunting = () => import(/* webpackChunkName: "hunting" */ '@/components/Hunting.vue')
const Taxidermy = () => import(/* webpackChunkName: "taxidermy" */ '@/components/Taxidermy.vue')
const Archery = () => import(/* webpackChunkName: "archery" */ '@/components/Archery.vue')


export default new Router({
  mode: 'history',
  
  routes:  [
   
   {
       path: '/Gallerys',
       name: 'Gallerys',
       component: Gallerys,
   },
   {
       path: '/Gallery/:ItemID',
       name: 'Gallery',
       component: Gallery,
       props: true

   },
   {
       path: '/DetailView/:ItemID',
       name: 'DetailView',
       component: GalleryItem,
       props: true

   },
   {
       path: '/Contact',
       name: 'Contact',
       component: Contact,
   },
   {
       path: '/Map',
       name: 'Map',
       component: Map,
   },
   {
       path: '/Reviews',
       name: 'Reviews',
       component: Reviews,
   },
   {
       path: '/',
       name: 'Home',
       component: Home,
   },

   {
       path: '/Home',
       name: 'Home',
       component: Home,
   },
   {
       path: '/DakotaTrophyAdventures',
       component: Home,
   },
   {
       path: '/Hunting',
       name: 'Hunting',
       component: Hunting,
   },
   {
       path: '/Archery',
       name: 'Archery',
       component:Archery,
   },
   {
       path: '/Taxidermy',
       name: 'Taxidermy',
       component: Taxidermy,
   },
]
})


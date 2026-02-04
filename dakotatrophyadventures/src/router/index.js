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
const Ranch = () => import(/* webpackChunkName: "ranch" */ '@/components/Ranch.vue')

const PheasantHunting = () => import('@/components/Hunting/PheasantHunting.vue')
const UplandGame = () => import('@/components/Hunting/UplandGame.vue')
const ChukarHunting = () => import('@/components/Hunting/ChukarHunting.vue')
const HungarianPartridgeHunting = () => import('@/components/Hunting/HungarianPartridgeHunting.vue')
const SharptailGrouseHunting = () => import('@/components/Hunting/SharptailGrouseHunting.vue')
const PredatorHunting = () => import('@/components/Hunting/PredatorHunting.vue')
const TurkeyHunting = () => import('@/components/Hunting/TurkeyHunting.vue')
const AntelopeHunting = () => import('@/components/Hunting/AntelopeHunting.vue')
const ArcheryDeer = () => import('@/components/Hunting/ArcheryDeerHunting.vue')
const RifleDeer = () => import('@/components/Hunting/RifleDeerHunting.vue')
const ShedHunting = () => import('@/components/Hunting/ShedHunting.vue')
const FossilHunting = () => import('@/components/Hunting/FossilHunting.vue')

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
    path: '/Hunting/Turkey',
    name: 'TurkeyHunting',
    component: TurkeyHunting,
},
{
    path: '/Hunting/Pheasant',
    name: 'PheasantHunting',
    component: PheasantHunting,
},
{
    path: '/Hunting/UplandGame',
    name: 'UplandGame',
    component: UplandGame,
},
{
    path: '/Hunting/Chukar',
    name: 'ChukarHunting',
    component: ChukarHunting,
},
{
    path: '/Hunting/HungarianPartridge',
    name: 'HungarianPartridgeHunting',
    component: HungarianPartridgeHunting,
},
{
    path: '/Hunting/SharptailGrouse',
    name: 'SharptailGrouseHunting',
    component: SharptailGrouseHunting,
},
{
    path: '/Hunting/ShedHunting',
    name: 'ShedHunting',
    component: ShedHunting,
},
{
    path: '/Hunting/FossilHunting',
    name: 'FossilHunting',
    component: FossilHunting,
},
{
    path: '/Hunting/Antelope',
    name: 'AntelopeHunting',
    component: AntelopeHunting,
},
{
    path: '/Hunting/Predator',
    name: 'PredatorHunting',
    component: PredatorHunting,
},
{
    path: '/Hunting/Turkey',
    name: 'TurkeyHunting',
    component: TurkeyHunting,
},
{
    path: '/Hunting/ArcheryDeer',
    name: 'ArcheryDeer',
    component: ArcheryDeer,
},
{
    path: '/Hunting/RifleDeer',
    name: 'RifleDeer',
    component: RifleDeer,
},

   {
       path: '/Taxidermy',
       name: 'Taxidermy',
       component: Taxidermy,
   },
   {
    path: '/Ranch',
    name: 'Ranch',
    component: Ranch,
},
]
})


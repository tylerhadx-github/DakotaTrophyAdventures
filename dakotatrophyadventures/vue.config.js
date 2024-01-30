const SitemapPlugin = require('sitemap-webpack-plugin').default
const paths = [
  {
    path: '/',
    lastmod: '2024-01-22',
    priority: 1.0,
    changefreq: 'yearly'
  },
  {
    path: '/Gallerys',
    lastmod: '2024-01-22',
    priority: 0.9,
    changefreq: 'yearly'
  },
  {
    path: '/Gallery/1',
    lastmod: '2024-01-22',
    priority: 0.9,
    changefreq: 'yearly'
  }
  ,
  {
    path: '/Gallery/2',
    lastmod: '2024-01-22',
    priority: 0.9,
    changefreq: 'yearly'
  },
  {
    path: '/Gallery/3',
    lastmod: '2024-01-22',
    priority: 0.9,
    changefreq: 'yearly'
  },
  {
    path: '/Gallery/4',
    lastmod: '2024-01-22',
    priority: 0.9,
    changefreq: 'yearly'
  },
  {
    path: '/Gallery/5',
    lastmod: '2024-01-22',
    priority: 0.9,
    changefreq: 'yearly'
  },
  {
    path: '/Gallery/6',
    lastmod: '2024-01-22',
    priority: 0.9,
    changefreq: 'yearly'
  },
  {
    path: '/Gallery/7',
    lastmod: '2024-01-22',
    priority: 0.9,
    changefreq: 'yearly'
  },
  {
    path: '/Gallery/8',
    lastmod: '2024-01-22',
    priority: 0.9,
    changefreq: 'yearly'
  },
  {
    path: '/Gallery/9',
    lastmod: '2024-01-22',
    priority: 0.9,
    changefreq: 'yearly'
  },
  {
    path: '/Gallery/10',
    lastmod: '2024-01-22',
    priority: 0.9,
    changefreq: 'yearly'
  },
  {
    path: '/Gallery/11',
    lastmod: '2024-01-22',
    priority: 0.9,
    changefreq: 'yearly'
  },
  {
    path: '/Hunting',
    lastmod: '2024-01-22',
    priority: 0.9,
    changefreq: 'yearly'
  }
  ,
  {
    path: '/Hunting/RifleDeer',
    lastmod: '2024-01-22',
    priority: 0.9,
    changefreq: 'yearly'
  },
  {
    path: '/Hunting/ArcheryDeer',
    lastmod: '2024-01-22',
    priority: 0.9,
    changefreq: 'yearly'
  },
  {
    path: '/Hunting/Antelope',
    lastmod: '2024-01-22',
    priority: 0.9,
    changefreq: 'yearly'
  },
  {
    path: '/Hunting/Turkey',
    lastmod: '2024-01-22',
    priority: 0.9,
    changefreq: 'yearly'
  },
  {
    path: '/Hunting/Predator',
    lastmod: '2024-01-22',
    priority: 0.9,
    changefreq: 'yearly'
  },
  {
    path: '/Hunting/FossilHunting',
    lastmod: '2024-01-22',
    priority: 0.9,
    changefreq: 'yearly'
  },
  {
    path: '/Hunting/ShedHunting',
    lastmod: '2024-01-22',
    priority: 0.9,
    changefreq: 'yearly'
  },
  {
    path: '/Ranch',
    lastmod: '2024-01-22',
    priority: 0.9,
    changefreq: 'yearly'
  },
  {
    path: '/Contact',
    lastmod: '2024-01-22',
    priority: 0.9,
    changefreq: 'yearly'
  },
  {
    path: '/Taxidermy',
    lastmod: '2024-01-22',
    priority: 0.9,
    changefreq: 'yearly'
  }
]

module.exports = {
  configureWebpack: {
    plugins: [
      new SitemapPlugin({ base: 'https://dakotatrophyadventures.com', paths })
    ]
  },
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: process.env.NODE_ENV === 'production'
    //  ? '/DakotaTrophyAdventures/'
    ? '/'
    : '/'
}
//test
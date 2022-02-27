<template>
  <v-app>
  <v-app-bar app
                       absolute
                       dark
                       shrink-on-scroll
                       prominent
                       src="/DakotaTrophyAdventures/huntingbackground.jpg"
                       scroll-target="#scrolling-techniques-3">
                <template v-slot:img="{ props }">
                    <v-img v-bind="props" style="height:450px"></v-img>

                </template>
                <v-app-bar-nav-icon class="hidden-md-and-up" @click="sidebar = !sidebar"></v-app-bar-nav-icon>
                <v-app-bar-title></v-app-bar-title>

                <v-spacer style="width:90%"></v-spacer>
                    <v-img contain height="100px"  src="/DakotaTrophyAdventures/img/logo.png" @click="goHome()"></v-img>

                <template v-slot:extension class="hidden-sm-and-down">
                    <v-tabs class="hidden-sm-and-down" align-with-title v-for="item in menuItems" :key="item.title">
                        <v-tab v-if="!item.icon" :to="{name: item.path}" text color="white">{{item.title}}</v-tab>
                    </v-tabs>
                </template>
            </v-app-bar>


            <v-navigation-drawer v-model="sidebar" app temporary>
                <v-list>
                    <v-list-item v-for="item in menuItems"
                                 :key="item.title"
                                 :to="{name: item.path}">
                        <v-list-item-content>
                            <v-btn @click.stop="toFB" icon v-if="item.title == 'Facebook'"><v-icon>mdi-facebook</v-icon></v-btn>

                            <span v-if="!item.icon">{{ item.title }}</span>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: function () {
  return {
    ApplicationName: 'Dakota Trophy Adventures',
            Menu: [],
            BasePath: location.protocol + '//' + location.host + '/',
            Environment: null,
            Dark: true,
            drawer: false,
            Loading: false,
            snackColor: 'success',
            snackVisible: false,
            snackText: null,
            sidebar: false,
            Motto: 'The best kept secret of hunting in the west',
            Terms: '',
            AboutUs: '',
            Links: '',
            Ranch: '',
            History: '',
            menuItems: [
                { title: 'Home'     , path: 'Home'      ,icon:false},
                { title: 'Gallery', path: 'Gallerys', icon: false },
                { title: 'Hunting', path: 'Hunting', icon: false },
                { title: 'Taxidermy', path: 'Taxidermy', icon: false },
                { title: 'Location', path: 'Map', icon: false },
                { title: 'Dates', path: 'Dates', icon: false },
                { title: 'About'    , path: 'About'     ,icon:false},
                { title: 'Contact', path: 'Contact', icon: false },
                { title: 'Facebook' ,         icon:true},

            ],
  }
  },
  methods: {
            goHome() {

                this.$router.push('Home');
            },
            toFB() {
                window.location.href = 'https://www.facebook.com/Dakota-Trophy-Adventures-Dakota-Trophy-Taxidermy-314633108549681';
            },
            toYT() {
               // window.location.href = 'https://www.youtube.com/channel/UC3FxCPot73PoJR85jPN2n3w';
            },
            toIG() {
               // window.location.href = 'https://www.instagram.com/safari_outfitters_russia/';
            },
            initialize() {
                //if (location.protocol !== 'https:') {
                //    location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
                //}

                
            },

            getDataFromApi() {
                this.Loading = true;
            },

            ShowMessage: function(message, color) {
                this.snackColor = color || 'info';
                this.snackText = message;
                this.snackVisible = true;
            },
    
        },
        mounted: function() {
            this.initialize();
        },
        watch: {


        },
        computed: {
            windowSize: function () {
                return { x: window.innerWidth, y: window.innerHeight};
            },
           
        },
};
</script>

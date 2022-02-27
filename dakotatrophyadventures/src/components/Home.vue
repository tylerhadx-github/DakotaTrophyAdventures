<template>
 <div>
    <v-row style="width:100%">
        <v-col>
            <h1 class="text-center">The Best Kept Secret Of Hunting In The West</h1>
            <p class="text-center">Dakota Trophy Hunt is a corporation of our ranch and about 15 others for the purpose of rifle Mule Deer and Whitetail hunting. The area encompasses nearly 140,000-150,000 acres of private land.</p>
        </v-col>
    </v-row>
    <v-row>
        <v-col v-for="i in Featured" :key="i.id" cols="12" sm="6" style="width:100%" pa-2>
            <v-img :src="i.image"></v-img>

        </v-col>
    </v-row>
</div>
</template>

<script>
  export default {
     name: 'Home',
        components: {

        },
        methods: {
            getdata() {
              
            },
            openContactForm() {
                this.$router.push({ name: 'Contact' });
            },
        },
        data: function() {
            return {
               
                Featured: [
                    {
                        image: "/DakotaTrophyAdventures/img/Deer/Mule%20Deer/Drefke%20MD%201.JPG",
                       
                    },
                    {
                        image: "/DakotaTrophyAdventures/img/Deer/Mule%20Deer/Newmans%20MD%20WT%202.JPG",
                        title: "History",
                        description: this.History,
                    },
                   
                 
                ],
            };
        },
        mounted: function() {
            this.getdata();
        },
        computed: {
            windowSize: function () {
                return { x: window.innerWidth, y: window.innerHeight };
            },
        
        }
  }
</script>

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
    <v-row>
        <v-col>
    <v-card>
        <v-card-title>
            <h3 class="headline mb-0">About Us</h3>
        </v-card-title>
        <v-card-text>
            <div v-html="AboutUs"></div>
        </v-card-text>
    </v-card>
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
                    AboutUs:"<div><p align=\"left\" style=\"color: rgb(0, 0, 0); font-family: Tahoma, Geneva, sans-serif; font-size: medium;\"><font face=\"Tahoma\">Tom Trask was born and raised on the Spanish Five Ranch where we currently live.&nbsp; His grandfather, Mack Trask, homesteaded at the forks of the Cheyenne&nbsp;and Belle Fourche Rivers north of our current location.&nbsp; Tom’s father, Mark Trask, spent his life ranching in the Wasta area and started into the outfitting business with a friend in 1965.&nbsp; As a young boy, Tom grew up with cattle and hunting -&nbsp;not just during deer season but every season possible.&nbsp; He spent winters as a young boy trapping with his father and summers hunting fossils with his mother, Winnie.&nbsp; Tom attended the local rural school in Meade County.</font></p><p align=\"left\" style=\"color: rgb(0, 0, 0); font-family: Tahoma, Geneva, sans-serif; font-size: medium;\"><font face=\"Tahoma\">A teacher once said he looked forward to the morning report from Tom on what all he had hunted since school was out one day to the start of school the next! Tom attended high school in Sturgis where he excelled in football and wrestling.&nbsp; Following graduation he tried college at SDSU for a semester but when he came home for Christmas his dad and the cattle needed his help for the tough winter they were in for.</font></p></div>",
                    Featured: [
                    {
                        image: "/img/Deer/Mule%20Deer/Drefke%20MD%201.JPG",
                       
                    },
                    {
                        image: "/img/Deer/Mule%20Deer/Newmans%20MD%20WT%202.JPG",
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

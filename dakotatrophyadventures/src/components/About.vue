<template>
  <div>
    <v-card>
        <v-card-title>
            <h3 class="headline mb-0">About Us</h3>
        </v-card-title>
        <v-card-text>
            <div v-html="AboutUs"></div>
        </v-card-text>
    </v-card>

    <v-card>
        <v-card-title>
            <h3 class="headline mb-0">Links</h3>
        </v-card-title>
        <v-card-text>
            <div v-html="Links"></div>
        </v-card-text>
    </v-card>
</div>
</template>

<script>
  export default {
    name: 'About',

    components: {

        },
        methods: {
            getdata() {

                
            }
        },
        data: function () {
            return {
                        AboutUs:"<div><p align=\"left\" style=\"color: rgb(0, 0, 0); font-family: Tahoma, Geneva, sans-serif; font-size: medium;\"><font face=\"Tahoma\">Tom Trask was born and raised on the Spanish Five Ranch where we currently live.&nbsp; His grandfather, Mack Trask, homesteaded at the forks of the Cheyenne&nbsp;and Belle Fourche Rivers north of our current location.&nbsp; Tom’s father, Mark Trask, spent his life ranching in the Wasta area and started into the outfitting business with a friend in 1965.&nbsp; As a young boy, Tom grew up with cattle and hunting -&nbsp;not just during deer season but every season possible.&nbsp; He spent winters as a young boy trapping with his father and summers hunting fossils with his mother, Winnie.&nbsp; Tom attended the local rural school in Meade County.</font></p><p align=\"left\" style=\"color: rgb(0, 0, 0); font-family: Tahoma, Geneva, sans-serif; font-size: medium;\"><font face=\"Tahoma\">A teacher once said he looked forward to the morning report from Tom on what all he had hunted since school was out one day to the start of school the next! Tom attended high school in Sturgis where he excelled in football and wrestling.&nbsp; Following graduation he tried college at SDSU for a semester but when he came home for Christmas his dad and the cattle needed his help for the tough winter they were in for.</font></p></div>",
                        Links:"<div>Pheasant Hunting</div><div><br></div><div>We do not offer pheasant hunting as we do not have enough pheasants to successfully hunt. However, if you are interested, we have a few contacts that you could check out! Give us a call!</div><div><br></div><div>Big Game Hunting</div><div><br></div><div>We have hunted with different outfitters in Canada and in Africa that we highly recommend if you are looking for that type of a hunt. Please call if you want to talk to one of us or look under our Gallery tab - Personal Hunts for pictures of trophies taken!</div><div><br></div><div>JP Big Game Safaris</div><div><br></div><div>This is an excellent place for an African safari - whether it is for first time African hunters, or seasoned hunters in Africa. You can hunt plains game or the dangerous 5! Juan Pace is the outfitter and is a very honest guy to work with, not to mention a great professional hunter! We have hunted with different outfitters in Africa and he was by far the best! Check out his website at www.jpsafaris.com.</div><div><br></div><div><div>Cache Lake Outfitters&nbsp;</div><div><br></div><div>\"Traditional Horseback Hunts in North Central British Columbia - Stone Sheep, Canadian Moose, Mountain Goat, Elk, Grizzly Bear\"</div><div><br></div><div>This is a very enjoyable horseback hunt. Luke Vince and his family have been in the outfitting business for generations and are skilled outfitters and guides. Check out his website at: www.cachelakeoutfitters.com</div></div><div><br></div><div><br></div><div><div>Kwadacha Outfitters</div><div><br></div><div>\"Backpack Hunts in North Central British Columbia - Stone Sheep, Mountain Caribou, Mountain Goat, Canadian Moose, Grizzly Bear\"</div><div><br></div><div>This is another area that Luke Vince manages. This hunt is tougher but there are great trophies! Check out his website at: www.kwadachaoutfitters.com</div></div><div><br></div><div><div>NorthCurl Outfitters</div><div><br></div><div>\"Horseback Hunts in Yukon Territory - Dall Sheep, Stone Sheep, Alaska/Yukon Moose, Grizzly Bear, Black Bear\"</div><div><br></div><div>This area is operated by Mac Watson. He is Luke's step-brother and also comes from a long line of guides and outfitters. Before having NorthCurl, Mac used to run Yukon Stone. Check out his website at: www.northcurl.com</div><div><br></div><div>Southern Mountain Adventures (New Zealand)</div><div><br></div><div>Croc Adams specializes in tahr, but also hunts chamois, and stag. Many of the top tahr in the record book came from Croc's hunting area. Check out his website at: www.southernmountainadventures.com.</div></div>",
            
            };
        },
        mounted: function () {
            this.getdata();
        },
        computed: {
          
            windowSize: function () {
                return { x: window.innerWidth, y: window.innerHeight };
            },
        }
  }
</script>

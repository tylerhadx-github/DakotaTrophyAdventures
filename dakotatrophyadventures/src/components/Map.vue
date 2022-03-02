<template>
<v-row>
<v-card>
            <v-card-title>
                <v-flex sm6 offset-sm3 xs12>
                    <h3 class="headline mb-0" style="text-align:center">Directions</h3>
                </v-flex>
            </v-card-title>
            <v-card-text sm10 offset-sm1 xs12>
                <v-container fluid
                
                             grid-list-md>
                    <v-layout row wrap style="color:black">
                        Driving  Instructions:
<ul>
                        <li>From the East on I-90: Take exit 98 at Wasta and go North on the Elm Springs Road 12.5 miles. Take a right on Whitetail Lane and it is 5 miles to the camp.</li>

                        <li>From the West on I-90: Take exit 90 at Wicksville and go North (left) on Wicksville Road. At the 4-way, take a right on Angell Road (the map below says Argyle). At the T, take a left on Elm Springs Road. In approximately 2 miles take a right on Whitetail Lane and it is 5 miles to camp.</li>

                        <li>This is a private drive and inclement weather may be a problem so please call ahead and we may have to give further instructions or meet you at the main road. Do NOT follow your GPS, it will lead you incorrectly. If you have questions on how to get here, please call us!</li>
</ul>
                    </v-layout>
                </v-container>
            </v-card-text>
        </v-card>
 <div :height="windowSize.y" style="padding-top:128px">
    <div v-html="iframeHolder"></div>
</div>
</v-row>
</template>

<script>
  export default {
    name: 'Map',
components: {

        },
        methods: {
            getdata() {

              
                              var iframe = document.createElement('iframe');
                iframe.src = 'https://www.google.com/maps/d/u/0/embed?mid=1OX3JifcNxTbSw9xHQQB8CSKdoTxoVgPW';
                this.iframeHolder = '<iframe width="' + this.windowSize.x +'" height="'+ (this.windowSize.y - 200) +'" src="' + iframe.src +'" frameborder="0"></iframe>';

            }
        },
        data: function() {
            return {
                Home: '',
                iframeHolder: null
              
            };
        },
        mounted: function() {
            this.getdata();
        },
        computed: {
            windowSize: function () {
                return { x: window.innerWidth, y: window.innerHeight };
            }
        }
    
  }
</script>

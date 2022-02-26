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

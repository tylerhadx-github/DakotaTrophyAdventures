<template>
  <div>
    <v-row>
      <v-col class="d-flex child-flex" cols="12" sm="12" md="6">
        <v-img :src="Image.url" aspect-ratio="1" class="grey lighten-2">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
      <v-col class="d-flex child-flex" cols="12" sm="12" md="6">
        <h1>
          {{ Image.Title }}
        </h1>
        <p>
          {{ Image.Description }}
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import AllImages from "../assets/AllImages";

  export default {
        name: 'DetailView',
        props: ['ItemID'],
        data: function() {
            return {
            }
        },
        mounted: function() {
        },
        computed: {
            Image:function(){
                return AllImages.filter(x=>x.imageId == this.ItemID)[0];
            },
            windowSize: function () {
                return { x: window.innerWidth, y: window.innerHeight };
            },
        },
  }
</script>

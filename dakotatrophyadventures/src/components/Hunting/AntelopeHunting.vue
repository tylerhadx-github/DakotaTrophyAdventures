<template>
  <div>
  <v-card flat class="pa-4 ma-4">
      <v-card-title>
        <v-flex sm6 offset-sm3 xs12> </v-flex>
      </v-card-title>
      <v-card-text
        sm10
        offset-sm1
        xs12
        style="
          color: black;
          font-family: Tahoma, Geneva, sans-serif;
          font-size: 16px;
        "
      >
        <v-row>
          <v-col md="8" cols="12">
            <h1 class="headline mb-0" style="text-align: center">
              Antelope Hunts
            </h1>
            <div style="color: black" v-html="Antelope"></div
          ></v-col>
          <v-col md="4" cols="12"
            ><v-img
              :src="'/img/Antelope/2018/Ron Pringle antelope 2.jpg'"
            ></v-img
          ></v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <hr/>
    <shared-footer></shared-footer>
  </div>
</template>

<script>
import SharedFooter from "./SharedFooter.vue";

export default {
  components: {
    SharedFooter,
  },
  data: function () {
    return {
      Antelope:
        "Our antelope hunts are very limited. We take only a couple of antelope hunters a year as the herds move frequently and herd size varies drastically. We hunt the same land as for deer, but antelope are generally found more on the flat ground than the river breaks. We do five day, fully-guided hunts. Season opens up the first weekend in October and we like to take our hunters right away in season.",
    }
  }
}
</script>

<style>

</style>
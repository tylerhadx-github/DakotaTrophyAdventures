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
          <v-col md="4" cols="12"
            ><v-img :src="'/img/Turkey/Solomons and Baumans 2013.jpg'"></v-img
          ></v-col>
          <v-col md="8" cols="12">
            <h1 class="headline mb-0" style="text-align: center">
              Merriam Turkey Hunts
            </h1>
            <div style="color: black" v-html="Turkeys"></div
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
      Turkeys:
        "The river breaks and creek bottoms of western SD are home to an unbelievable number of Merriam turkeys. We offer turkey hunts mainly on the home place and a few surrounding ranches. We can hunt over 60,000 acres of private land to make sure you have the best opportunity at a trophy Merriam. Our hunters enjoy unequalled success year in and year out. Many trophies are eligible for the record book. <br> We currently hold 2 of the top 5 spots for Merriam turkeys in the record book – and yes, there is a record book for turkeys! Turkey season opens in mid April and runs through the end of May. We prefer to take our hunters on the weekends. Our turkey hunts are 3 day semi-guided hunts. We do one bird hunts with the option to take a second bird on a trophy fee. We can offer full-guided hunts upon request for an extra fee. We provide you with a vehicle (usually an ATV) to hunt with.",
    }
  }
}
</script>

<style>

</style>
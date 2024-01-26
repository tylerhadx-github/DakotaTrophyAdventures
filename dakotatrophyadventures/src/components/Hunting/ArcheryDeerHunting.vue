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
          <v-col cols="12" md="8">
            <h1 class="headline mb-0" style="text-align: center">
              Archery Deer Hunts
            </h1>
            <div
              style="
                font-family: europa;
                font-weight: 300;
                font-style: normal;
                font-size: 16px;
              "
              v-html="ArcheryDeer"
            ></div
          ></v-col>
          <v-col cols="12" md="4"
            ><v-img :src="'/img/Deer/Mule Deer/2021/Kyle Bratton.jpg'"></v-img
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
      ArcheryDeer:
        "We decided to offer archery hunting as an answer to the many requests from hunters who are archers. We have only been offering archery hunting for a short time, compared to the rifle hunts. We take a very limited number of archery hunters, mainly because we are extremely busy with fall cattle work right during archery season. Archery deer season opens on September 1 of every year and runs through the end of the year. We will not take archery hunters during rifle season. Hunt dates are more flexible, just please contact us for availability. Archery hunts are run differently than the rifle hunts. We hunt the same deer and the same area, just at different times. We do five-day hunts with a base price for the hunt, and then a trophy fee for blood drawn. We feel this is the best way to make sure it is fair for everyone because the success rate with archery is much less than with a rifle. We also don’t want people to take marginal or “iffy” shots and then have a wounded animal. Archery mule deer are full guided, archery whitetail hunts are semi- guided with a heavy use of blinds. Most of the archery hunting is from ground blinds (natural blinds, bale blinds, or some fiberglass blinds). We do limited spot and stalk with archery. We do not have tree stands. Blinds are placed on travel corridors to and from alfalfa fields or other crops. Archery licenses are unlimited on private land – so drawing is not a problem. You do still have to put in through the lottery draw system."
    }
}

}
</script>

<style>

</style>
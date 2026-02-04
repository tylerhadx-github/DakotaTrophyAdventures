<template>
  <div>
    <v-card flat class="pa-4 ma-4">
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
          <v-col cols="12">
            <h1 class="headline mb-0" style="text-align: center">
              Sharptail Grouse & Prairie Chicken Hunting
            </h1>
            <v-img
              src="/img/UplandGame/sharptail-group.png"
              max-height="400"
              contain
              class="my-4"
            ></v-img>
            <div style="color: black" class="text-center">
              <p>
                Our ranch offers exceptional habitat for sharptail grouse and prairie chicken,
                including grain fields, hay fields, food plots, and long grass covered ridges
                overlooking the Cheyenne River, Elk Creek, and Alkali Creek. This habitat makes
                for lots of opportunity with often plentiful grouse.
              </p>
              <p>
                Both sharptail grouse and prairie chicken are iconic birds of the Great Plains,
                providing an exciting and unique hunting experience in South Dakota's native grasslands.
              </p>
              <p>
                Grouse are part of our four bird combo hunts, which include pheasants,
                sharptail grouse, chukar, and Hungarian partridge. We hunt in the cedar breaks
                and cottonwood bottoms of the Cheyenne River and Elk Creek.
              </p>
              <h3 class="mt-4 mb-2">Hunt Details</h3>
              <p>
                Our four bird combo hunts are 2 or 3 day, fully-guided hunts. During your hunt,
                a guide will accompany you and transportation from one hunting location to another
                will be taken care of by one of our qualified staff.
              </p>
              <p>
                You are welcome to bring your own bird dogs if you would like. We do have dogs
                to use in the field as well.
              </p>
              <h3 class="mt-4 mb-2">Season & Limits</h3>
              <p>
                <strong>Daily limit:</strong> 3 grouse per person (along with 3 pheasants and 5 chukar/Huns).
              </p>
              <h3 class="mt-4 mb-2">What's Included</h3>
              <ul style="list-style: none; padding: 0;">
                <li>Meals and lodging (bunkhouse style accommodations)</li>
                <li>Airport pickup/delivery to Rapid City, SD</li>
                <li>Fully guided hunts with transportation</li>
              </ul>
              <p class="mt-3">
                <em>Hunts do NOT include: Licenses, SD state sales tax, or taxidermy/meat processing.</em>
              </p>
              <p class="mt-3">
                We only book a limited number of hunters and we book early! A deposit is required to book.
                All hunts take place on private land.
              </p>
            </div>
          </v-col>
        </v-row>
        <v-row class="mt-4">
          <v-col cols="12" md="6">
            <v-img src="/img/UplandGame/hunters-with-dog.png" aspect-ratio="1.5" class="rounded"></v-img>
          </v-col>
          <v-col cols="12" md="6">
            <v-img src="/img/UplandGame/hunter-group-tractor.png" aspect-ratio="1.5" class="rounded"></v-img>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <hr />
    <shared-footer></shared-footer>
  </div>
</template>

<script>
import SharedFooter from "./SharedFooter.vue";

export default {
  components: {
    SharedFooter,
  },
};
</script>

<style></style>

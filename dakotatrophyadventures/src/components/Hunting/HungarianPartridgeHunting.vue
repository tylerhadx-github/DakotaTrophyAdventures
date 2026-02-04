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
              Hungarian Partridge Hunting
            </h1>
            <v-img
              src="/img/UplandGame/hunter-group-tractor.png"
              max-height="400"
              contain
              class="my-4"
            ></v-img>
            <div style="color: black" class="text-center">
              <p>
                Wild coveys of Hungarian partridges are found in food plots and hay field edges
                throughout our property. These birds add to the excitement of our hunts, being
                more challenging shooting with their explosive flushes and fast flight.
              </p>
              <p>
                Hungarian partridge (Huns) are part of our four bird combo hunts, which include
                pheasants, sharptail grouse, chukar, and Hungarian partridge. We hunt in the
                cedar breaks and cottonwood bottoms of the Cheyenne River and Elk Creek.
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
                <strong>Daily limit:</strong> 5 chukar/Huns per person (along with 3 pheasants and 3 grouse).
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
            <v-img src="/img/UplandGame/hunters-pheasants.png" aspect-ratio="1.5" class="rounded"></v-img>
          </v-col>
          <v-col cols="12" md="6">
            <v-img src="/img/UplandGame/sharptail-group.png" aspect-ratio="1.5" class="rounded"></v-img>
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

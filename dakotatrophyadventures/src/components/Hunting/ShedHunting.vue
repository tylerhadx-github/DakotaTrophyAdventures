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
          <v-col cols="12">
            <h1 class="headline mb-0" style="text-align: center">
              Fishing/Shed Hunting
            </h1>
            <div style="color: black" class="text-center">
              <p>
                We can offer day fishing excursions in private stock dams, the
                Cheyenne River, and Elk Creek. Species of fish include (at
                times, depending on weather, drought and quantity) catfish,
                northern pike, bass, walleye, perch, and blue gill. This is
                mainly offered as an add-on to another adventure!
                <br />
                <br />
                You can also come pick up naturally shed antlers off trophy mule
                deer and whitetail. Shed hunting is on farm fields and in the
                creek and river breaks. As with fishing, shed hunting is
                generally offered as an add on to another adventure or an
                activity to fill time during the day!
              </p>
            </div>
          </v-col>
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
}
</script>

<style>

</style>
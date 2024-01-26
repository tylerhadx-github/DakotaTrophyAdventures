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
              Pheasant Hunting
            </h1>
            <div style="color: black" class="text-center">
              <p>
                We are currently in the process of trying to start up a pheasant
                hunting operation. We have some birds established and are hoping
                to continue to work on this in the next couple of eyars!
                <br />
                If you are interested, please let us know and we can add you to
                our list to send information to once we have our pheasant
                hunting up and running!
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
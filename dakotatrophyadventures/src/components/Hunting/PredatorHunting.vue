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
              Predator Control Hunts
            </h1>
            <v-row>
                <v-col style="justify-content: center;display: flex;">

                <iframe width="560" height="315" src="https://www.youtube.com/embed/giybC6f_lTY?si=b4iN9zgSDKY4e4qv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </v-col>
              </v-row>
            <div style="color: black" class="text-center">
              <p>
                Enjoy the thrill of hunting coyotes and other small game animals
                with experienced predator hunters. We offer coyote calling in
                the daylight or at night using thermal equipment. All predator
                control hunts take place on private land and are generally run
                in late fall or winter. We can run calling/trapping hunts from
                early from Oct 20-31. After deer season, we will do
                calling/trapping or baited hunts from Dec 15-Mar 15. Most
                hunters will have the opportunity to harvest coyotes, racoons,
                porcupine, badger, and/or fox during their hunt. We prefer to
                take groups of up to 6 to make sure that we have enough thermal
                equipment for everyone to have ample opportunity to shoot. If
                you have proper equipment for thermal hunting, you are welcome
                to bring your own, otherwise we will provide rifles and thermal
                equipment for these hunts. You will be guided in groups of 2. We
                can take a single person if you are a lone hunter. Most thermal
                hunts will be 3 days/nights but can be customized for whatever
                suits your schedule and interest. We recommend a minimum of 3
                days/nights to help avoid undesirable weather, wind, or moon
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
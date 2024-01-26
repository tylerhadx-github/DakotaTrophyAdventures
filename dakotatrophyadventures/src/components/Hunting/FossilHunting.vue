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
              Fossil Hunts
            </h1>
            <div style="color: black" class="text-center">
              <p>
                Have you ever wondered what was on the Earth before we were? We
                offer custom family friendly adventures for the outdoor
                enthusiasts that also love rocks, fossils, minerals, and
                crystals. Come discover what was in the ocean about 73.5 million
                years ago. On Elk Creek in South Dakota, we find many colorful
                ammonite species including scaphites, baculites, Placenticeras,
                nautilus, and the giant clam. We also find large septarian
                concretions filled with minerals like calcite or golden barite,
                and often with a cephalopod preserved in the center. The species
                are often preserved with their very colorful and iridescent
                shell still unaltered and intact. The rainbow colors of their
                shell make them one of the most desirable fossils for
                collectors. These adventures can be customizable to suit each
                person or family. Generally, we run these from
                mid-July-September but can usually add on a little fossil
                hunting to another adventure.
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
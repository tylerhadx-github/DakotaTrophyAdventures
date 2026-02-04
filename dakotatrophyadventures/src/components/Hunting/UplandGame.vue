<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap xs10>
      <v-flex xs12>
        <h1 class="headline mb-4" style="text-align: center">
          Upland Game Bird Hunting
        </h1>
        <p class="text-center mb-4" style="color: black; font-family: Tahoma, Geneva, sans-serif; font-size: 16px;">
          We offer a variety of upland game bird hunting experiences. Select a species below to learn more!
        </p>
      </v-flex>

      <v-flex v-for="(item, i) in birds" :key="i" xs12 sm6 md4>
        <v-hover v-slot="{ hover }">
          <v-card @click="goToBird(item)" :class="{ 'hovered': hover }" class="bird-card">
            <v-img :src="item.img" cols="12" style="max-height: 200px; min-height: 200px;" class="pa-4">
              <template v-if="hover">
                <div class="hover-overlay"></div>
                <div class="hover-text">{{ item.Name }}</div>
              </template>
              <div class="mobile-label">{{ item.Name }}</div>
            </v-img>
          </v-card>
        </v-hover>
      </v-flex>
      <hr />
      <shared-footer></shared-footer>
    </v-layout>
  </v-container>
</template>

<script>
import SharedFooter from "./SharedFooter.vue";

export default {
  name: "UplandGame",
  components: {
    SharedFooter,
  },
  methods: {
    goToBird(item) {
      window.location = item.Route;
    },
  },
  data: function () {
    return {
      birds: [
        {
          Name: "Pheasant",
          Route: "/Hunting/Pheasant",
          img: "/img/UplandGame/pheasant-fence.png",
        },
        {
          Name: "Chukar",
          Route: "/Hunting/Chukar",
          img: "/img/UplandGame/hunters-with-dog.png",
        },
        {
          Name: "Hungarian Partridge",
          Route: "/Hunting/HungarianPartridge",
          img: "/img/UplandGame/hunter-group-tractor.png",
        },
        {
          Name: "Sharptail Grouse & Prairie Chicken",
          Route: "/Hunting/SharptailGrouse",
          img: "/img/UplandGame/sharptail-group.png",
        },
      ],
    };
  },
};
</script>

<style>
.hovered .hover-overlay {
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  filter: blur(8px);
}

.hover-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  font-size: 18px;
  z-index: 2;
}

.mobile-label {
  display: none;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
  padding: 8px;
  font-size: 16px;
  font-weight: 500;
}

@media (max-width: 600px) {
  .mobile-label {
    display: block;
  }
  .hover-text,
  .hover-overlay {
    display: none !important;
  }
}
</style>

<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap xs10>

      <v-flex v-for="(item, i) in hunts" :key="i" xs12 sm12 md6 lg3>
        <v-hover v-slot="{ hover }">
          <v-card @click="goToHunt(item)" :class="{ 'hovered': hover }">
            <v-img :src="item.img" cols="12" md="4" style="max-height: 250px; min-height: 250px;" class="pa-4">
              <template v-if="hover">
                <div class="hover-overlay"></div>
                <div class="hover-text">{{ item.Name }}</div>
              </template>
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
import SharedFooter from "./Hunting/SharedFooter.vue";
export default {
  name: "Hunting",
  components: {
    SharedFooter,
  },
  methods: {
    getdata() {},
    goToHunt(item) {
      window.location = item.Route;
    },
  },
  data: function () {
    return {
      Hunts:
        '<div><font color="#000000" face="Tahoma, Geneva, sans-serif" size="3">Our rifle deer hunts are done through the corporation Dakota Trophy Hunt. We have been hunting rifle deer since 1965. Tom is in charge of the booking for Dakota Trophy Hunt and has been since 1987. As of recently, he has been assisted by Tomilyn with the booking and paperwork.&nbsp; We do archery deer, turkey, and antelope separately.</font></div><div><font color="#000000" face="Tahoma, Geneva, sans-serif" size="3"><br></font></div><div><font color="#000000" face="Tahoma, Geneva, sans-serif" size="3">We do not do a lot of antelope hunting, but we do take antelope hunters occastionally. Please call or email for details!</font></div><div><font color="#000000" face="Tahoma, Geneva, sans-serif" size="3"><br></font></div><div><font color="#000000" face="Tahoma, Geneva, sans-serif" size="3">Call the references, book the hunt -you\'ll be glad you did!</font></div>',
      hunts: [
        {
          Name: "Rifle Deer",
          Route: "/Hunting/RifleDeer",
          img: "/img/Rifledeer.JPG",
        },
        {
          Name: "Archery Deer",
          Route: "/Hunting/ArcheryDeer",
          img: "/img/ArcheryDeer.jpg",
        },
        {
          Name: "Antelope",
          Route: "/Hunting/Antelope",
          img: "/img/Antelope/2018/Ron Pringle antelope 2.jpg",
        },
        {
          Name: "Turkey",
          Route: "/Hunting/Turkey",
          img: "/img/Turkey/Solomons and Baumans 2013.jpg",
        },
        { Name: "Pheasant", Route: "/Hunting/Pheasant", img: "https://images.pexels.com/photos/17980103/pexels-photo-17980103/free-photo-of-pheasant-on-a-hayfield.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { Name: "Predator", Route: "/Hunting/Predator", img: "https://images.pexels.com/photos/1603783/pexels-photo-1603783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { Name: "Fossil", Route: "/Hunting/FossilHunting", img: "img/Fossil.jpg" },
        { Name: "Fishing/Shed", Route: "/Hunting/ShedHunting", img: "/img/Justin Fishing.png" },
      ],
    };
  },
  mounted: function () {
    this.getdata();
  },
  computed: {
    windowSize: function () {
      return { x: window.innerWidth, y: window.innerHeight };
    },
  },
};
</script>
<style>
.hovered .hover-overlay {
  background: rgba(0, 0, 0, 0.5); /* Darker background color */
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  filter: blur(8px); /* Blur effect */
}

.hover-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white; /* Adjust the color according to your design */
  font-size: 18px; /* Adjust the font size as needed */
  z-index: 2;
}
</style>
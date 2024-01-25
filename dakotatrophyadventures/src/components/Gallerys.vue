<template>
    <v-card>
      <v-card-title>
        <h3 class="headline mb-0">Galleries</h3>
      </v-card-title>
      <v-card-text xs12>
        <v-progress-linear
          :active="loading"
          indeterminate="indeterminate"
        ></v-progress-linear>
        <v-container fluid grid-list-md>
          <v-layout row wrap xs10>
            <v-flex v-for="i in Galleries" xs12 sm12 md4 lg4 :key="i.galleryId">
              <v-card>
                <v-img
                  :src="i.url"
                  aspect-ratio="1"
                  @click="openItem(i.galleryId)"
                  class="grey lighten-2 white--text align-end"
                >
                  <v-card-title primary-title>
                    <h3
                      v-if="isMobile"
                      class="headline mb-0 mobile-text"
                      style="font-family: futura-pt; font-weight: 400; font-style: normal; font-size: 27px; letter-spacing: 4px; text-transform: uppercase; line-height: 1.3em;"
                    >
                      {{ i.name }}
                    </h3>
                    <h3
                      v-else
                      class="headline mb-0 hover-text"
                      style="font-family: futura-pt; font-weight: 400; font-style: normal; font-size: 27px; letter-spacing: 4px; text-transform: uppercase; line-height: 1.3em;"
                    >
                      {{ i.name }}
                    </h3>
                  </v-card-title>
                  <v-card-text> </v-card-text>
                </v-img>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>
  </template>

<script>
export default {
  name: "Gallerys",
  components: {},
  methods: {
    openItem(i) {
      this.$router.push({ name: "Gallery", params: { ItemID: i } });
    },
  },
  data: function () {
    return {
      isMobile: false, // Set the initial value based on your logic (e.g., window width)
      Galleries: [
        {
          galleryId: 1,
          name: "Mule Deer",
          url: "/img/Deer/Mule Deer/Doug Reigner MD.JPG",
        },
        {
          galleryId: 2,
          name: "White-tailed Deer",
          url: "/img/Deer/Whitetail/Jeremy Lewis WT.png",
        },
        { galleryId: 3, name: "Antelope", url: "/img/Antelope/p_0016.jpg" },
        { galleryId: 4, name: "Turkey", url: "/img/Turkey/turkeys.jpg" },
        {
          galleryId: 5,
          name: "Taxidermy",
          url: "/img/Taxidermy/Trophy Room _20_.JPG",
        },
        {
          galleryId: 6,
          name: "Landscape",
          url: "/img/Landscape/001.JPG\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  ",
        },
        {
          galleryId: 7,
          name: "Other Animals",
          url: "/img/Other Animals/2009 Yukon moose.jpg\t\t\t\t\t\t\t\t\t   ",
        },
        { galleryId: 8, name: "Misc", url: "/img/misc/Spring 09 051.JPG" },
        {
          galleryId: 9,
          name: "Trail Camera",
          url: "/img/Trail Camera/MFDC3328.JPG",
        },
        { galleryId: 10, name: "Horses", url: "/img/horses/Archery 358.JPG" },
      ],
      loading: false,
    };
  },
  mounted: function () {
    this.isMobile = window.innerWidth <= 768; // Adjust the threshold based on your design
  },
  computed: {
    windowSize: function () {
      return { x: window.innerWidth, y: window.innerHeight };
    },
  },
};
</script>

<style scoped>
 @media (max-width: 600px) {
    .hover-text {
      display: none;
    }
    .mobile-text {
      display: block;
    }
  }

  @media (min-width: 601px) {
    .hover-text {
      display: block;
    }
    .mobile-text {
      display: none;
    }
  }
.gallery-img {
  position: relative;
  overflow: hidden;
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: futura-pt;
  font-weight: 400;
  font-style: normal;
  font-size: 27px;
  letter-spacing: 4px;
  text-transform: uppercase;
  line-height: 1.3em;
  color: white;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay */
  opacity: 0; /* Initially hidden */
  transition: opacity 0.3s ease-in-out;
}

.gallery-img:hover .gallery-overlay {
  opacity: 1; /* Show on hover */
}
</style>
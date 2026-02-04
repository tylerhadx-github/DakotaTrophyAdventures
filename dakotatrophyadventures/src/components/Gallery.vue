<template>
  <div class="pa-4 ma-4">
    <br>
    <v-row>
      <v-btn href="/Gallerys">Back To Galleries</v-btn>
    </v-row>
    <v-row id="gallery">
      <v-col
        v-for="i in filteredImages"
        :key="i.imageid"
        cols="12"
        md="2"
        sm="6"
        xs="12"
      >
        <v-card class="pa-4" flat>
          <v-img
            :src="i.url"
            aspect-ratio="1"
            class="grey lighten-2"
            @click="goToImage(i.imageId)"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-card>
      </v-col>
    </v-row>

    <!-- Back to top button (mobile only) -->
    <v-btn
      v-show="showBackToTop"
      fab
      fixed
      bottom
      right
      outlined
      color="primary"
      class="hidden-md-and-up"
      @click="scrollToTop"
    >
      <v-icon>mdi-arrow-up</v-icon>
    </v-btn>
  </div>
</template>

<script>
import {AllImages} from "../assets/AllImages";

export default {
  name: "About",
  props: ["ItemID"],
  components: {},
  methods: {
    goToImage(i) {
      this.$router.push({ name: "DetailView", params: { ItemID: i } });
    },
    scrollToTop() {
      const scrollContainer = document.getElementById('scrolling-techniques-3');
      if (scrollContainer) {
        scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    handleScroll() {
      const scrollContainer = document.getElementById('scrolling-techniques-3');
      if (scrollContainer) {
        this.showBackToTop = scrollContainer.scrollTop > 300;
      }
    },
  },
  data: function () {
    return {
      loading: true,
      showBackToTop: false,
      scrollContainer: null,
    };
  },
  mounted: function () {
    this.scrollContainer = document.getElementById('scrolling-techniques-3');
    if (this.scrollContainer) {
      this.scrollContainer.addEventListener('scroll', this.handleScroll);
    }
  },
  beforeDestroy() {
    if (this.scrollContainer) {
      this.scrollContainer.removeEventListener('scroll', this.handleScroll);
    }
  },
  computed: {
    filteredImages: function () {
      var temp = AllImages.filter((x) => x.imageGalleryId == this.ItemID).sort((a, b) => b.imageId - a.imageId);
      return temp;
    },
    windowSize: function () {
      return { x: window.innerWidth, y: window.innerHeight };
    },
  },
  created() {},
};
</script>
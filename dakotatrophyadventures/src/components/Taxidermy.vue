<template>
  <div>
    <v-card>
      <v-card-title style="justify-content: center;">
        <h3 class="headline mb-0">Taxidermy</h3>
      </v-card-title>
      <v-card-text sm10 offset-sm1 xs12>
        <div v-html="Taxidermy"></div>
        <v-row>
            <v-col>
        <v-btn href="tel:+16057982002" color="primary" outlined>
          <v-icon left>mdi-phone</v-icon>
          (605) 798-2002 Shop
        </v-btn>
        </v-col>
        <v-col>
        <v-btn href="tel:+16054413937" color="primary" outlined>
          <v-icon left>mdi-phone</v-icon>
          (605) 441-3937 Mark
        </v-btn>
        </v-col>
        <v-col>
        <v-btn href="tel:+16054419997" color="primary" outlined>
          <v-icon left>mdi-phone</v-icon>
          (605) 441-9997 Mick
        </v-btn>
        </v-col>
</v-row>
      </v-card-text>
    </v-card>

    <v-row>
      <v-col
        v-for="i in filteredImages"
        :key="i.imageid"
        class="d-flex child-flex pa-4"
        cols="12"
        md="2"
        sm="12"
        xs="12"
      >
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
  name: "Taxidermy",
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
      showBackToTop: false,
      scrollContainer: null,
      Taxidermy:
        "<div style='color:black'><div>The taxidermy business has evolved from Tom learning to do a little of our own work.&nbsp; He apprenticed with a good friend, Marty Hanson of Hanson Taxidermy in Philip, SD -a true master of the profession.</div><div><br></div><div>Mark &amp; Mick have spent most of their lives (when not involved in school or sports) either hunting, fishing, guiding or working with animals in some way.</div><div><br></div><div>As a result of our family's involvement in hunting and wildlife, it was only natural for them to move towards preserving the beauty that nature has provided. Mark &amp; Mick have both taken up the profession and enjoy preserving wildlife and its surroundings.</div><div><br></div><div>They attended Northwest Iowa School of Taxidermy with Tom Matuska. They are very professional and deliver an excellent product.</div><div><br></div><div>The quality of work and pricing leaves you asking why you would go anywhere else.</div><div><br></div><div>Give them a call. If interested, they can send you a brochure with more pictures of their work and a price list.</div><div><br></div>",
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
      return AllImages.filter((x) => x.imageGalleryId == 5);
    },
    windowSize: function () {
      return { x: window.innerWidth, y: window.innerHeight };
    },
  },
};
</script>

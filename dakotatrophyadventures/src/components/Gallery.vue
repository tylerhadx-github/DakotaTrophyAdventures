<template>
  <div class="gallery-page">
    <!-- Page Header -->
    <section class="page-header">
      <v-container>
        <v-row align="center">
          <v-col cols="auto">
            <v-btn
              href="/Gallerys"
              outlined
              class="back-btn"
            >
              <v-icon left>mdi-arrow-left</v-icon>
              All Galleries
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Gallery Grid -->
    <section class="gallery-grid">
      <v-container>
        <v-row id="gallery">
          <v-col
            v-for="(image, index) in filteredImages"
            :key="image.imageId"
            cols="6"
            sm="4"
            md="3"
            lg="2"
          >
            <v-card
              class="gallery-card hover-lift"
              :class="{ 'fade-in-up': true, 'visible': imagesVisible[index] }"
              flat
              @click="goToImage(image.imageId)"
              role="button"
              :aria-label="'View full size image ' + (index + 1)"
            >
              <v-img
                :src="image.url"
                :alt="'Gallery photo ' + (index + 1) + ' from Dakota Trophy Adventures'"
                aspect-ratio="1"
                class="gallery-image"
              >
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular
                      indeterminate
                      color="primary"
                      size="32"
                    ></v-progress-circular>
                  </v-row>
                </template>

                <!-- Hover overlay -->
                <div class="image-overlay hidden-sm-and-down">
                  <v-icon color="white" large>mdi-magnify-plus</v-icon>
                </div>
              </v-img>
            </v-card>
          </v-col>
        </v-row>

        <!-- Empty state -->
        <div v-if="filteredImages.length === 0" class="empty-state text-center py-12">
          <v-icon size="64" color="grey lighten-1">mdi-image-off</v-icon>
          <p class="mt-4 text-grey">No photos found in this gallery.</p>
        </div>
      </v-container>
    </section>

    <!-- Back to top button -->
    <v-btn
      v-show="showBackToTop"
      fab
      fixed
      bottom
      right
      color="primary"
      class="back-to-top"
      @click="scrollToTop"
      aria-label="Scroll back to top"
    >
      <v-icon>mdi-arrow-up</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { AllImages } from "../assets/AllImages";

export default {
  name: "Gallery",
  props: ["ItemID"],

  data() {
    return {
      loading: true,
      showBackToTop: false,
      scrollContainer: null,
      imagesVisible: [],
    };
  },

  computed: {
    filteredImages() {
      return AllImages
        .filter((x) => x.imageGalleryId == this.ItemID)
        .sort((a, b) => b.imageId - a.imageId);
    },
  },

  mounted() {
    this.scrollContainer = document.getElementById("scrolling-techniques-3");
    if (this.scrollContainer) {
      this.scrollContainer.addEventListener("scroll", this.handleScroll);
    }

    // Stagger image animations
    this.filteredImages.forEach((_, index) => {
      setTimeout(() => {
        this.$set(this.imagesVisible, index, true);
      }, 50 + index * 30);
    });
  },

  beforeDestroy() {
    if (this.scrollContainer) {
      this.scrollContainer.removeEventListener("scroll", this.handleScroll);
    }
  },

  methods: {
    goToImage(imageId) {
      this.$router.push({ name: "DetailView", params: { ItemID: imageId } });
    },

    scrollToTop() {
      const scrollContainer = document.getElementById("scrolling-techniques-3");
      if (scrollContainer) {
        scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
      }
    },

    handleScroll() {
      const scrollContainer = document.getElementById("scrolling-techniques-3");
      if (scrollContainer) {
        this.showBackToTop = scrollContainer.scrollTop > 300;
      }
    },
  },
};
</script>

<style scoped>
.gallery-page {
  min-height: 100vh;
}

/* Page Header */
.page-header {
  padding: 24px 0;
}

.back-btn {
  font-family: var(--font-heading) !important;
  text-transform: uppercase !important;
  letter-spacing: 1px !important;
  color: var(--color-primary) !important;
  border-color: var(--color-primary) !important;
}

/* Gallery Grid */
.gallery-grid {
  padding: 0 0 60px;
}

.gallery-card {
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  background: white;
}

.gallery-image {
  transition: transform 0.4s ease;
}

.gallery-card:hover .gallery-image {
  transform: scale(1.08);
}

/* Image Overlay */
.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-card:hover .image-overlay {
  opacity: 1;
}

/* Empty State */
.empty-state {
  padding: 80px 20px;
}

/* Back to Top Button */
.back-to-top {
  margin-bottom: 16px;
  margin-right: 16px;
}

/* Mobile Styles */
@media (max-width: 600px) {
  .page-header {
    padding: 16px 0;
  }

  .gallery-grid {
    padding: 0 0 40px;
  }

  /* Disable hover effects on mobile */
  .gallery-card:hover .gallery-image {
    transform: none;
  }

  .image-overlay {
    display: none;
  }

  .back-to-top {
    margin-bottom: 24px;
    margin-right: 8px;
  }
}
</style>

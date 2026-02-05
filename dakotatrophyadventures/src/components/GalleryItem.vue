<template>
  <div class="detail-view-page">
    <!-- Page Header -->
    <section class="page-header">
      <v-container>
        <v-row align="center">
          <v-col cols="auto">
            <v-btn
              @click="back"
              outlined
              class="back-btn"
            >
              <v-icon left>mdi-arrow-left</v-icon>
              Back to Gallery
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Image Detail -->
    <section class="image-detail">
      <v-container>
        <v-row>
          <v-col cols="12" md="8" class="mx-auto">
            <v-card class="image-card" flat>
              <v-img
                :src="Image.url"
                :alt="Image.Title || 'Gallery image from Dakota Trophy Adventures'"
                contain
                max-height="70vh"
                class="detail-image"
              >
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular
                      indeterminate
                      color="primary"
                      size="48"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>

              <v-card-text v-if="Image.Title || Image.Description" class="image-info">
                <h2 v-if="Image.Title" class="image-title">{{ Image.Title }}</h2>
                <p v-if="Image.Description" class="image-description">{{ Image.Description }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
import { AllImages } from "../assets/AllImages";

export default {
  name: "DetailView",
  props: ["ItemID"],
  data: function () {
    return {};
  },
  computed: {
    Image: function () {
      return AllImages.filter((x) => x.imageId == this.ItemID)[0] || {};
    },
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.detail-view-page {
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

/* Image Detail */
.image-detail {
  padding: 0 0 60px;
}

.image-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
}

.detail-image {
  background: #f5f5f5;
}

.image-info {
  padding: 24px !important;
  text-align: center;
}

.image-title {
  font-family: var(--font-heading) !important;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 12px;
}

.image-description {
  font-size: 1rem;
  color: var(--color-text);
  opacity: 0.8;
  line-height: 1.6;
  margin: 0;
}

/* Mobile Styles */
@media (max-width: 600px) {
  .page-header {
    padding: 16px 0;
  }

  .image-detail {
    padding: 0 0 40px;
  }

  .image-info {
    padding: 16px !important;
  }

  .image-title {
    font-size: 1.25rem;
  }
}
</style>

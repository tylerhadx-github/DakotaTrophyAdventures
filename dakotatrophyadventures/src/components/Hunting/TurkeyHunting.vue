<template>
  <div class="hunting-page">
    <!-- Page Header -->
    <section class="page-header">
      <v-container>
        <h1 class="page-title text-center">Merriam Turkey Hunts</h1>
        <p class="page-subtitle text-center">
          Home to record-book Merriams in the river breaks of Western South Dakota
        </p>
      </v-container>
    </section>

    <!-- Main Content Section -->
    <section class="content-section">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="5" order="2" order-md="1">
            <div class="image-container hover-lift">
              <v-img
                src="/img/Turkey/Solomons and Baumans 2013.jpg"
                alt="Trophy Merriam turkey hunt at Dakota Trophy Adventures"
                class="rounded-image"
                aspect-ratio="1.2"
              >
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="primary"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </div>
          </v-col>
          <v-col cols="12" md="7" order="1" order-md="2">
            <div class="content-block">
              <h2 class="section-title">The Hunt</h2>
              <p class="section-text">
                The river breaks and creek bottoms of western South Dakota are home to an
                unbelievable number of Merriam turkeys. We offer turkey hunts mainly on the
                home place and surrounding ranches.
              </p>
              <p class="section-text">
                We can hunt over <strong>60,000 acres</strong> of private land to ensure you
                have the best opportunity at a trophy Merriam. Our hunters enjoy unequalled
                success year after year. Many trophies are eligible for the record book.
              </p>
              <p class="section-text highlight-text">
                <v-icon small color="primary" class="mr-2">mdi-trophy</v-icon>
                We currently hold <strong>2 of the top 5 spots</strong> for Merriam turkeys
                in the record book!
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Hunt Details Section -->
    <section class="details-section">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <div class="detail-card">
              <v-icon class="detail-icon" large>mdi-calendar</v-icon>
              <h3 class="detail-title">Season Dates</h3>
              <p class="detail-text">
                Turkey season opens mid-April and runs through the end of May.
                We prefer to take hunters on weekends.
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="detail-card">
              <v-icon class="detail-icon" large>mdi-compass</v-icon>
              <h3 class="detail-title">Hunt Style</h3>
              <p class="detail-text">
                Our turkey hunts are 3-day semi-guided hunts. Full-guided hunts
                available upon request for an additional fee.
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="detail-card">
              <v-icon class="detail-icon" large>mdi-tag</v-icon>
              <h3 class="detail-title">What's Included</h3>
              <p class="detail-text">
                One bird hunt with option to take a second bird on a trophy fee.
                We provide a vehicle (usually an ATV) for hunting.
              </p>
            </div>
          </v-col>
        </v-row>
        <div class="text-center mt-8">
          <v-btn
            to="/Contact"
            class="cta-button"
            large
            elevation="0"
          >
            Book Your Hunt
          </v-btn>
        </div>
      </v-container>
    </section>

    <shared-footer></shared-footer>
  </div>
</template>

<script>
import SharedFooter from "./SharedFooter.vue";

export default {
  name: "TurkeyHunting",
  components: {
    SharedFooter,
  },
};
</script>

<style scoped>
.hunting-page {
  min-height: 100vh;
}

/* Page Header */
.page-header {
  padding: 40px 0 48px;
  text-align: center;
}

.page-title {
  font-family: var(--font-heading) !important;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text);
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 16px;
}

.page-subtitle {
  font-size: 1.1rem;
  color: var(--color-text);
  opacity: 0.7;
  max-width: 600px;
  margin: 0 auto;
}

/* Content Section */
.content-section {
  padding: 60px 0;
  background: white;
}

.content-block {
  padding: 20px 0;
}

.section-title {
  font-family: var(--font-heading) !important;
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 24px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.section-text {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--color-text);
  margin-bottom: 16px;
}

.highlight-text {
  display: flex;
  align-items: center;
  background: rgba(74, 103, 65, 0.08);
  padding: 12px 16px;
  border-radius: 6px;
  border-left: 4px solid var(--color-primary);
}

/* Image Styling */
.image-container {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.rounded-image {
  border-radius: 8px;
}

/* Details Section */
.details-section {
  padding: 60px 0;
  background: var(--color-background);
}

.detail-card {
  background: white;
  padding: 32px;
  border-radius: 8px;
  height: 100%;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  text-align: center;
}

.detail-icon {
  color: var(--color-primary) !important;
  margin-bottom: 16px;
}

.detail-title {
  font-family: var(--font-heading) !important;
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.detail-text {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--color-text);
  opacity: 0.85;
}

/* Mobile adjustments */
@media (max-width: 960px) {
  .page-title {
    font-size: 2rem;
    letter-spacing: 2px;
  }

  .page-subtitle {
    font-size: 1rem;
    padding: 0 16px;
  }

  .content-section,
  .details-section {
    padding: 40px 0;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .detail-card {
    margin-bottom: 16px;
  }

  .highlight-text {
    flex-direction: column;
    text-align: center;
  }

  .highlight-text .v-icon {
    margin-bottom: 8px;
    margin-right: 0 !important;
  }
}
</style>

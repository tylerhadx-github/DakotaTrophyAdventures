<template>
  <div class="hunting-page">
    <!-- Page Header -->
    <section class="page-header">
      <v-container>
        <h1 class="page-title text-center">Archery Deer Hunts</h1>
        <p class="page-subtitle text-center">
          Limited guided hunts for mule deer and whitetail with bow
        </p>
      </v-container>
    </section>

    <!-- Main Content Section -->
    <section class="content-section">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="7">
            <div class="content-block">
              <h2 class="section-title">The Hunt</h2>
              <p class="section-text">
                We offer archery hunting as an answer to the many requests from hunters
                who are archers. We take a very limited number of archery hunters, mainly
                because we are extremely busy with fall cattle work during archery season.
              </p>
              <p class="section-text">
                Archery deer season opens September 1st and runs through the end of the year.
                We will not take archery hunters during rifle season. Hunt dates are flexible
                — please contact us for availability.
              </p>
              <p class="section-text">
                We run five-day hunts with a base price, plus a trophy fee for blood drawn.
                This ensures fairness since archery success rates are lower than rifle hunts.
                We also want to avoid marginal shots that could wound animals.
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="5">
            <div class="image-container hover-lift">
              <v-img
                src="/img/Deer/Mule Deer/2021/Kyle Bratton.jpg"
                alt="Archery deer hunt at Dakota Trophy Adventures"
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
        </v-row>
      </v-container>
    </section>

    <!-- Hunt Details Section -->
    <section class="details-section">
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <div class="detail-card">
              <v-icon class="detail-icon" large>mdi-bow-arrow</v-icon>
              <h3 class="detail-title">Hunt Style</h3>
              <p class="detail-text">
                Archery mule deer hunts are fully guided. Archery whitetail hunts are
                semi-guided with heavy use of blinds. Most hunting is from ground blinds
                (natural, bale, or fiberglass) placed on travel corridors to and from
                alfalfa fields. Limited spot and stalk available. No tree stands.
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="detail-card">
              <v-icon class="detail-icon" large>mdi-tag</v-icon>
              <h3 class="detail-title">Licensing</h3>
              <p class="detail-text">
                Archery licenses are unlimited on private land — drawing is not a problem.
                You still need to apply through the lottery draw system, but success is
                virtually guaranteed for private land archery tags.
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
  name: "ArcheryDeerHunting",
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
}
</style>

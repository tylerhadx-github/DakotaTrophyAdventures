<template>
  <div class="hunting-page">
    <!-- Page Header -->
    <section class="page-header">
      <v-container>
        <h1 class="page-title text-center">Antelope Hunts</h1>
        <p class="page-subtitle text-center">
          Limited guided hunts on 140,000 acres of private land
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
                Our antelope hunts are very limited. We take only a couple of antelope
                hunters a year as the herds move frequently and herd size varies drastically.
              </p>
              <p class="section-text">
                We hunt the same land as for deer, but antelope are generally found more
                on the flat ground than the river breaks. We offer five-day, fully-guided hunts.
              </p>
              <p class="section-text">
                Season opens up the first weekend in October and we like to take our
                hunters right away in season when the herds are most predictable.
              </p>
              <v-btn
                to="/Contact"
                class="cta-button mt-4"
                large
                elevation="0"
              >
                Book Your Hunt
              </v-btn>
            </div>
          </v-col>
          <v-col cols="12" md="5">
            <div class="image-container hover-lift">
              <v-img
                src="/img/Antelope/2018/Ron Pringle antelope 2.jpg"
                alt="Trophy antelope hunt at Dakota Trophy Adventures"
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

    <shared-footer></shared-footer>
  </div>
</template>

<script>
import SharedFooter from "./SharedFooter.vue";

export default {
  name: "AntelopeHunting",
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

  .content-section {
    padding: 40px 0;
  }

  .section-title {
    font-size: 1.5rem;
  }
}
</style>

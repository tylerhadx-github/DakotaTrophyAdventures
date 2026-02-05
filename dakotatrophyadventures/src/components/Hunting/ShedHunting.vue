<template>
  <div class="hunting-page">
    <!-- Page Header -->
    <section class="page-header">
      <v-container>
        <h1 class="page-title text-center">Fishing & Shed Hunting</h1>
        <p class="page-subtitle text-center">
          Add-on adventures for the outdoor enthusiast
        </p>
      </v-container>
    </section>

    <!-- Main Content Section -->
    <section class="content-section">
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <div class="activity-card">
              <div class="activity-icon-wrapper">
                <v-icon class="activity-icon" x-large>mdi-fish</v-icon>
              </div>
              <h2 class="activity-title">Fishing Excursions</h2>
              <p class="activity-text">
                We offer day fishing excursions in private stock dams, the Cheyenne River,
                and Elk Creek. Species include catfish, northern pike, bass, walleye,
                perch, and bluegill (availability depends on weather, drought, and quantity).
              </p>
              <p class="activity-note">
                <v-icon small color="primary" class="mr-1">mdi-information</v-icon>
                Mainly offered as an add-on to another adventure
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="activity-card">
              <div class="activity-icon-wrapper">
                <v-icon class="activity-icon" x-large>mdi-pine-tree</v-icon>
              </div>
              <h2 class="activity-title">Shed Hunting</h2>
              <p class="activity-text">
                Come pick up naturally shed antlers from trophy mule deer and whitetail.
                Shed hunting takes place on farm fields and in the creek and river breaks —
                excellent terrain for finding quality sheds.
              </p>
              <p class="activity-note">
                <v-icon small color="primary" class="mr-1">mdi-information</v-icon>
                Great activity to fill time during the day
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
            Plan Your Adventure
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
  name: "ShedHunting",
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

/* Activity Cards */
.activity-card {
  background: var(--color-background);
  padding: 40px 32px;
  border-radius: 8px;
  height: 100%;
  text-align: center;
}

.activity-icon-wrapper {
  width: 80px;
  height: 80px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.activity-icon {
  color: var(--color-primary) !important;
}

.activity-title {
  font-family: var(--font-heading) !important;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.activity-text {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--color-text);
  margin-bottom: 16px;
}

.activity-note {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  color: var(--color-text);
  opacity: 0.7;
  font-style: italic;
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

  .activity-card {
    margin-bottom: 24px;
  }
}
</style>

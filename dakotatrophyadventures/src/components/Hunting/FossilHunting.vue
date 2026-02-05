<template>
  <div class="hunting-page">
    <!-- Page Header -->
    <section class="page-header">
      <v-container>
        <h1 class="page-title text-center">Fossil Hunts</h1>
        <p class="page-subtitle text-center">
          Family-friendly adventures discovering 73.5 million year old treasures
        </p>
      </v-container>
    </section>

    <!-- Main Content Section -->
    <section class="content-section">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="7">
            <div class="content-block">
              <h2 class="section-title">Discover Ancient History</h2>
              <p class="section-text">
                Have you ever wondered what was on Earth before we were? We offer custom
                family-friendly adventures for outdoor enthusiasts who love rocks, fossils,
                minerals, and crystals.
              </p>
              <p class="section-text">
                Come discover what was in the ocean about <strong>73.5 million years ago</strong>.
                On Elk Creek in South Dakota, we find many colorful ammonite species including
                scaphites, baculites, Placenticeras, nautilus, and the giant clam.
              </p>
              <p class="section-text">
                We also find large septarian concretions filled with minerals like calcite or
                golden barite, often with a cephalopod preserved in the center.
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="5">
            <div class="highlight-card text-center">
              <v-icon class="highlight-icon" x-large>mdi-diamond-stone</v-icon>
              <h3 class="highlight-title">What You'll Find</h3>
              <ul class="fossil-list">
                <li>Ammonite species with iridescent shells</li>
                <li>Scaphites & Baculites</li>
                <li>Placenticeras & Nautilus</li>
                <li>Giant clam fossils</li>
                <li>Septarian concretions with calcite</li>
                <li>Golden barite crystals</li>
              </ul>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Details Section -->
    <section class="details-section">
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <div class="detail-card">
              <v-icon class="detail-icon" large>mdi-palette</v-icon>
              <h3 class="detail-title">Rainbow Colors</h3>
              <p class="detail-text">
                The species are often preserved with their colorful and iridescent shell
                still unaltered and intact. The rainbow colors make them one of the most
                desirable fossils for collectors.
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="detail-card">
              <v-icon class="detail-icon" large>mdi-calendar-range</v-icon>
              <h3 class="detail-title">Season & Availability</h3>
              <p class="detail-text">
                We generally run fossil hunts from mid-July through September.
                These adventures can be customized to suit each person or family,
                and we can often add fossil hunting to another adventure.
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
  name: "FossilHunting",
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

/* Highlight Card */
.highlight-card {
  background: var(--color-background);
  padding: 40px 32px;
  border-radius: 8px;
}

.highlight-icon {
  color: var(--color-primary) !important;
  margin-bottom: 16px;
}

.highlight-title {
  font-family: var(--font-heading) !important;
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.fossil-list {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
}

.fossil-list li {
  padding: 8px 0;
  padding-left: 24px;
  position: relative;
  font-size: 1rem;
  color: var(--color-text);
}

.fossil-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
  height: 8px;
  background: var(--color-primary);
  border-radius: 50%;
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

  .highlight-card {
    margin-top: 24px;
  }

  .detail-card {
    margin-bottom: 16px;
  }
}
</style>

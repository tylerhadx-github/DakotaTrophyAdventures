<template>
  <div class="hunting-page">
    <!-- Page Header -->
    <section class="page-header">
      <v-container>
        <h1 class="page-title text-center">Predator Control Hunts</h1>
        <p class="page-subtitle text-center">
          Thermal and calling hunts for coyote and small game
        </p>
      </v-container>
    </section>

    <!-- Video Section -->
    <section class="video-section">
      <v-container>
        <div class="video-container">
          <iframe
            src="https://www.youtube.com/embed/giybC6f_lTY?si=b4iN9zgSDKY4e4qv"
            title="Predator hunting at Dakota Trophy Adventures"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </v-container>
    </section>

    <!-- Main Content Section -->
    <section class="content-section">
      <v-container>
        <v-row>
          <v-col cols="12" md="8" offset-md="2">
            <div class="content-block">
              <h2 class="section-title text-center">The Hunt</h2>
              <p class="section-text">
                Enjoy the thrill of hunting coyotes and other small game animals with
                experienced predator hunters. We offer coyote calling in daylight or
                at night using thermal equipment. All predator control hunts take place
                on private land.
              </p>
              <p class="section-text">
                Most hunters will have the opportunity to harvest <strong>coyotes, raccoons,
                porcupine, badger, and/or fox</strong> during their hunt.
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
                <strong>Early Season:</strong> Oct 20-31 (calling/trapping)<br>
                <strong>Late Season:</strong> Dec 15 - Mar 15 (calling, trapping, or baited hunts)
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="detail-card">
              <v-icon class="detail-icon" large>mdi-account-group</v-icon>
              <h3 class="detail-title">Group Size</h3>
              <p class="detail-text">
                We prefer groups of up to 6 to ensure everyone has ample thermal equipment
                and shooting opportunities. Guided in pairs. Single hunters welcome.
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="detail-card">
              <v-icon class="detail-icon" large>mdi-binoculars</v-icon>
              <h3 class="detail-title">Equipment</h3>
              <p class="detail-text">
                Bring your own thermal hunting equipment, or we provide rifles and thermal
                gear for your hunt. Most hunts are 3 days/nights but can be customized.
              </p>
            </div>
          </v-col>
        </v-row>
        <div class="tip-box mt-8">
          <v-icon color="primary" class="mr-2">mdi-lightbulb</v-icon>
          <span>
            <strong>Pro Tip:</strong> We recommend a minimum of 3 days/nights to help avoid
            undesirable weather, wind, or moon conditions.
          </span>
        </div>
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
  name: "PredatorHunting",
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

/* Video Section */
.video-section {
  padding: 0 0 60px;
}

.video-container {
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
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

/* Tip Box */
.tip-box {
  display: flex;
  align-items: center;
  background: white;
  padding: 16px 24px;
  border-radius: 8px;
  border-left: 4px solid var(--color-primary);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
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

  .tip-box {
    flex-direction: column;
    text-align: center;
  }

  .tip-box .v-icon {
    margin-bottom: 8px;
    margin-right: 0 !important;
  }
}
</style>

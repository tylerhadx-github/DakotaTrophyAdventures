<template>
  <div class="hunting-page">
    <!-- Page Header -->
    <section class="page-header">
      <v-container>
        <h1 class="page-title text-center">Pheasant Hunting</h1>
        <p class="page-subtitle text-center">
          South Dakota's famous four bird combo hunts
        </p>
      </v-container>
    </section>

    <!-- Hero Image -->
    <section class="hero-image-section">
      <v-container>
        <div class="image-container">
          <v-img
            src="/img/UplandGame/pheasant-fence.png"
            alt="Pheasant hunting in South Dakota"
            class="rounded-image"
            aspect-ratio="2.5"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="primary"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
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
                South Dakota is famous for pheasant hunting, and Dakota Trophy Adventures
                offers exceptional <strong>four bird combo hunts</strong>. We hunt pheasants, sharptail
                grouse, chukar, and Hungarian partridge in the cedar breaks and cottonwood
                bottoms of the Cheyenne River and Elk Creek.
              </p>
              <p class="section-text">
                We have been developing pheasant habitat for close to 20 years and continue
                to focus on shelterbelts, food plots, water development, and predator control
                to help build a solid wild population.
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
              <v-icon class="detail-icon" large>mdi-compass</v-icon>
              <h3 class="detail-title">Hunt Details</h3>
              <p class="detail-text">
                Our four bird combo hunts are 2 or 3 day, fully-guided hunts. A guide
                will accompany you and transportation between hunting locations is included.
                Bring your own bird dogs or use ours.
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="detail-card">
              <v-icon class="detail-icon" large>mdi-calendar</v-icon>
              <h3 class="detail-title">Season & Limits</h3>
              <p class="detail-text">
                Pheasant season opens late October. We hunt the last weekends of October,
                then December and January.<br><br>
                <strong>Daily:</strong> 3 pheasants, 3 grouse, 5 chukar/Huns per person
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="detail-card">
              <v-icon class="detail-icon" large>mdi-home</v-icon>
              <h3 class="detail-title">What's Included</h3>
              <p class="detail-text">
                Meals and lodging (bunkhouse style), airport pickup/delivery to Rapid City,
                fully guided hunts with transportation. All hunts on private land.
              </p>
            </div>
          </v-col>
        </v-row>
        <div class="note-box mt-6">
          <v-icon color="primary" class="mr-2">mdi-information</v-icon>
          <span>
            Hunts do <strong>NOT</strong> include licenses, SD state sales tax, or taxidermy/meat processing.
            Limited spots available — deposit required to book.
          </span>
        </div>
      </v-container>
    </section>

    <!-- Photo Gallery -->
    <section class="gallery-section">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <div class="gallery-image hover-lift">
              <v-img src="/img/UplandGame/hunter-group-tractor.png" aspect-ratio="1.5" class="rounded-image"></v-img>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="gallery-image hover-lift">
              <v-img src="/img/UplandGame/hunters-pheasants.png" aspect-ratio="1.5" class="rounded-image"></v-img>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="gallery-image hover-lift">
              <v-img src="/img/UplandGame/sunset-hunt.png" aspect-ratio="1.5" class="rounded-image"></v-img>
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
  name: "PheasantHunting",
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
  padding: 40px 0 32px;
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

/* Hero Image */
.hero-image-section {
  padding: 0 0 40px;
}

.image-container {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.rounded-image {
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

/* Note Box */
.note-box {
  display: flex;
  align-items: center;
  background: white;
  padding: 16px 24px;
  border-radius: 8px;
  border-left: 4px solid var(--color-primary);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

/* Gallery Section */
.gallery-section {
  padding: 60px 0;
  background: white;
}

.gallery-image {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
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
  .details-section,
  .gallery-section {
    padding: 40px 0;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .detail-card {
    margin-bottom: 16px;
  }

  .note-box {
    flex-direction: column;
    text-align: center;
  }

  .note-box .v-icon {
    margin-bottom: 8px;
    margin-right: 0 !important;
  }

  .gallery-image {
    margin-bottom: 16px;
  }
}
</style>

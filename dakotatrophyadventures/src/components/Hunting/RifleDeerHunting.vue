<template>
  <div class="hunting-page">
    <!-- Page Header -->
    <section class="page-header">
      <v-container>
        <h1 class="page-title text-center">Rifle Deer Hunts</h1>
        <p class="page-subtitle text-center">
          Dakota Trophy Hunt — Trophy mule deer and whitetail since 1965
        </p>
      </v-container>
    </section>

    <!-- Main Content Section -->
    <section class="content-section">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="5">
            <div class="image-container hover-lift">
              <v-img
                src="/img/Deer/Mule Deer/Jefferies MD WT.JPG"
                alt="Trophy mule deer at Dakota Trophy Hunt"
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
          <v-col cols="12" md="7">
            <div class="content-block">
              <h2 class="section-title">The Hunt</h2>
              <p class="section-text">
                Our rifle deer hunts are done through the corporation Dakota Trophy Hunt.
                We have been hunting rifle deer since 1965. The rifle deer season is a
                16-day season in November. We run three hunts during the season.
              </p>
              <p class="section-text">
                All rifle deer hunts are <strong>four days in length and fully guided</strong>.
                As a guest of Dakota Trophy Hunt, more than <strong>140,000 acres</strong> of
                rugged country along the Belle Fourche and Cheyenne Rivers are reserved
                exclusively for you.
              </p>
              <p class="section-text">
                The hills and draws of these river breaks provide abundant habitat for deer.
                Large numbers of Mule Deer range in the breaks, while Whitetail range on the
                bottom land.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Philosophy Section -->
    <section class="philosophy-section">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="7" order="2" order-md="1">
            <div class="content-block">
              <h2 class="section-title">Our Philosophy</h2>
              <p class="section-text">
                During your hunt in this "deer country" you will not see any other hunters
                except those in your party. But you will see trophy deer every day and you
                will have opportunities to harvest on private property.
              </p>
              <p class="section-text">
                The philosophy of Dakota Trophy Hunt is <strong>conservation of game</strong>.
                We encourage you to shoot only a four point or better trophy buck (Western Count).
                We take only those bucks who have reached maturity with true trophy class racks,
                preserving a vigorous herd year after year.
              </p>
              <p class="section-text">
                Methods of hunting vary according to guide and terrain. We accommodate everyone
                from vigorous mountain hikers to physically handicapped sportsmen. Transportation
                is generally by pickup or suburban, with most hunts being spot and stalk.
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="5" order="1" order-md="2">
            <div class="feature-card text-center">
              <v-icon class="feature-icon" x-large>mdi-trophy-award</v-icon>
              <h3 class="feature-title">Since 1965</h3>
              <p class="feature-text">
                More Trophy Class Bucks per square mile than anywhere on the continent
              </p>
              <div class="feature-stats">
                <div class="stat">
                  <span class="stat-number">140,000</span>
                  <span class="stat-label">Acres</span>
                </div>
                <div class="stat">
                  <span class="stat-number">60+</span>
                  <span class="stat-label">Years</span>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Amenities Section -->
    <section class="amenities-section">
      <v-container>
        <h2 class="section-title text-center mb-8">What's Included</h2>
        <v-row>
          <v-col cols="12" md="4">
            <div class="amenity-card">
              <v-icon class="amenity-icon" large>mdi-silverware-fork-knife</v-icon>
              <h3 class="amenity-title">Meals</h3>
              <p class="amenity-text">
                Three delicious meals served each day. Hunters rave about the food —
                expect steak or prime rib dinners. Noon lunch packed for distant hunts.
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="amenity-card">
              <v-icon class="amenity-icon" large>mdi-compass</v-icon>
              <h3 class="amenity-title">Guided Hunts</h3>
              <p class="amenity-text">
                Fully guided by experienced ranchers who know every draw and ridge.
                Transportation provided to and from hunting areas.
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="amenity-card">
              <v-icon class="amenity-icon" large>mdi-airplane</v-icon>
              <h3 class="amenity-title">Transportation</h3>
              <p class="amenity-text">
                Drive your own vehicle or fly into Rapid City — we offer pickup and
                return service. Full processing and taxidermy available on site.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <v-container>
        <div class="cta-content text-center">
          <h2 class="cta-title">High Success Rates. Unprecedented Satisfaction.</h2>
          <p class="cta-text">
            We book early and fill up years in advance. Contact us today to secure your spot.
          </p>
          <v-btn
            to="/Contact"
            class="cta-button mt-4"
            x-large
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
  name: "RifleDeerHunting",
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

/* Philosophy Section */
.philosophy-section {
  padding: 60px 0;
  background: var(--color-background);
}

.feature-card {
  background: white;
  padding: 40px 32px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  color: var(--color-primary) !important;
  margin-bottom: 16px;
}

.feature-title {
  font-family: var(--font-heading) !important;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.feature-text {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-text);
  opacity: 0.8;
  margin-bottom: 24px;
}

.feature-stats {
  display: flex;
  justify-content: center;
  gap: 40px;
}

.stat {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-family: var(--font-heading) !important;
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-primary);
}

.stat-label {
  font-size: 0.9rem;
  color: var(--color-text);
  opacity: 0.7;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Amenities Section */
.amenities-section {
  padding: 60px 0;
  background: white;
}

.amenity-card {
  text-align: center;
  padding: 24px;
}

.amenity-icon {
  color: var(--color-primary) !important;
  margin-bottom: 16px;
}

.amenity-title {
  font-family: var(--font-heading) !important;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.amenity-text {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--color-text);
  opacity: 0.85;
}

/* CTA Section */
.cta-section {
  padding: 80px 0;
  background: var(--color-primary);
}

.cta-content {
  max-width: 600px;
  margin: 0 auto;
}

.cta-title {
  font-family: var(--font-heading) !important;
  font-size: 1.8rem;
  font-weight: 600;
  color: white;
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.cta-text {
  font-size: 1.1rem;
  color: white;
  opacity: 0.9;
}

.cta-section .cta-button {
  background-color: white !important;
  color: var(--color-primary) !important;
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
  .philosophy-section,
  .amenities-section {
    padding: 40px 0;
  }

  .cta-section {
    padding: 60px 0;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .feature-stats {
    gap: 24px;
  }

  .stat-number {
    font-size: 1.5rem;
  }
}
</style>

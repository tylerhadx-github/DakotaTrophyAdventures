<template>
  <div class="hunting-page">
    <!-- Page Header -->
    <section class="page-header">
      <v-container>
        <h1 class="page-title text-center">Upland Game Birds</h1>
        <p class="page-subtitle text-center">
          Four bird combo hunts in South Dakota's finest habitat
        </p>
      </v-container>
    </section>

    <!-- Species Grid -->
    <section class="species-section">
      <v-container>
        <v-row>
          <v-col v-for="(item, i) in birds" :key="i" cols="12" sm="6" md="3">
            <v-hover v-slot="{ hover }">
              <v-card
                @click="goToBird(item)"
                class="species-card"
                :class="{ 'species-card-hover': hover }"
                flat
              >
                <div class="image-wrapper">
                  <v-img
                    :src="item.img"
                    :alt="item.Name"
                    aspect-ratio="1"
                    class="species-image"
                  >
                    <div class="species-overlay" :class="{ 'overlay-visible': hover }">
                      <span class="view-text">View Details</span>
                    </div>
                  </v-img>
                </div>
                <div class="species-name">{{ item.Name }}</div>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Info Section -->
    <section class="info-section">
      <v-container>
        <v-row>
          <v-col cols="12" md="8" offset-md="2">
            <div class="info-block text-center">
              <h2 class="section-title">Four Bird Combo Hunts</h2>
              <p class="section-text">
                Our upland game hunts include pheasants, sharptail grouse, chukar, and
                Hungarian partridge. Hunt in the cedar breaks and cottonwood bottoms of
                the Cheyenne River and Elk Creek on private land.
              </p>
              <p class="section-text">
                We have been developing pheasant habitat for close to 20 years with
                shelterbelts, food plots, water development, and predator control
                to build a solid wild population.
              </p>
            </div>
          </v-col>
        </v-row>
        <v-row class="mt-6">
          <v-col cols="12" md="4">
            <div class="feature-item text-center">
              <v-icon class="feature-icon" large>mdi-calendar</v-icon>
              <h3 class="feature-title">2-3 Day Hunts</h3>
              <p class="feature-text">Fully guided with transportation</p>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="feature-item text-center">
              <v-icon class="feature-icon" large>mdi-home</v-icon>
              <h3 class="feature-title">Lodging Included</h3>
              <p class="feature-text">Bunkhouse style with meals</p>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="feature-item text-center">
              <v-icon class="feature-icon" large>mdi-dog</v-icon>
              <h3 class="feature-title">Bird Dogs</h3>
              <p class="feature-text">Use ours or bring your own</p>
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

    <!-- Photo Gallery -->
    <section class="gallery-section">
      <v-container>
        <!-- Gallery Title -->
        <v-row class="mb-8">
          <v-col cols="12" class="text-center">
            <h2 class="section-title">Hunt Moments</h2>
          </v-col>
        </v-row>

        <!-- First Row: 3 Images -->
        <v-row>
          <v-col cols="12" md="4">
            <div class="gallery-image hover-lift">
              <v-img
                src="/img/UplandGame/2025/pheasant-fence.png"
                aspect-ratio="1.5"
                class="rounded-image"
              ></v-img>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="gallery-image hover-lift">
              <v-img
                src="/img/UplandGame/2025/hunters-with-dog.png"
                aspect-ratio="1.5"
                class="rounded-image"
              ></v-img>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="gallery-image hover-lift">
              <v-img
                src="/img/UplandGame/2025/hunter-group-tractor.png"
                aspect-ratio="1.5"
                class="rounded-image"
              ></v-img>
            </div>
          </v-col>
        </v-row>

        <!-- Second Row: 3 Images -->
        <v-row class="mt-6">
          <v-col cols="12" md="4">
            <div class="gallery-image hover-lift">
              <v-img
                src="/img/UplandGame/2025/sharptail-group.png"
                aspect-ratio="1.5"
                class="rounded-image"
              ></v-img>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="gallery-image hover-lift">
              <v-img
                src="/img/UplandGame/2025/hunters-pheasants.png"
                aspect-ratio="1.5"
                class="rounded-image"
              ></v-img>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="gallery-image hover-lift">
              <v-img
                src="/img/UplandGame/2025/sunset-hunt.png"
                aspect-ratio="1.5"
                class="rounded-image"
              ></v-img>
            </div>
          </v-col>
        </v-row>

        <!-- Third Row: 1 Image (Centered) -->
        <v-row class="mt-6">
          <v-col cols="12" md="4" offset-md="4">
            <div class="gallery-image hover-lift">
              <v-img
                src="/img/UplandGame/2025/pheasants-display.png"
                aspect-ratio="1.5"
                class="rounded-image"
              ></v-img>
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
  name: "UplandGame",
  components: {
    SharedFooter,
  },
  methods: {
    goToBird(item) {
      this.$router.push(item.Route);
    },
  },
  data: function () {
    return {
      birds: [
        {
          Name: "Pheasant",
          Route: "/Hunting/Pheasant",
          img: "/img/UplandGame/pheasant-fence.png",
        },
        {
          Name: "Chukar",
          Route: "/Hunting/Chukar",
          img: "/img/UplandGame/hunters-with-dog.png",
        },
        {
          Name: "Hungarian Partridge",
          Route: "/Hunting/HungarianPartridge",
          img: "/img/UplandGame/hunter-group-tractor.png",
        },
        {
          Name: "Sharptail Grouse",
          Route: "/Hunting/SharptailGrouse",
          img: "/img/UplandGame/sharptail-group.png",
        },
      ],
    };
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

/* Species Section */
.species-section {
  padding: 0 0 60px;
}

.species-card {
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  background: white;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.species-card-hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.image-wrapper {
  position: relative;
  overflow: hidden;
}

.species-image {
  transition: transform 0.3s ease;
}

.species-card-hover .species-image {
  transform: scale(1.05);
}

.species-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(74, 103, 65, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.overlay-visible {
  opacity: 1;
}

.view-text {
  color: white;
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.species-name {
  font-family: var(--font-heading);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-text);
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 16px;
  text-align: center;
  background: white;
}

/* Info Section */
.info-section {
  padding: 60px 0;
  background: white;
}

.info-block {
  margin-bottom: 24px;
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

/* Feature Items */
.feature-item {
  padding: 24px;
}

.feature-icon {
  color: var(--color-primary) !important;
  margin-bottom: 12px;
}

.feature-title {
  font-family: var(--font-heading) !important;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 4px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.feature-text {
  font-size: 0.95rem;
  color: var(--color-text);
  opacity: 0.7;
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
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery-image:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
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

  .info-section {
    padding: 40px 0;
  }

  .gallery-section {
    padding: 40px 0;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .species-card {
    margin-bottom: 16px;
  }

  .gallery-image {
    margin-bottom: 16px;
  }

  /* Show overlay on mobile since hover doesn't work */
  .species-overlay {
    opacity: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%);
  }
}
</style>

<template>
  <div class="hunting-page">
    <!-- Page Header -->
    <section class="page-header">
      <v-container>
        <h1 class="page-title text-center">Our Hunts</h1>
        <p class="page-subtitle text-center">
          From trophy deer to upland game, we offer diverse hunting experiences across Western South Dakota
        </p>
      </v-container>
    </section>

    <!-- Hunt Cards Grid -->
    <section class="hunts-grid">
      <v-container>
        <v-row>
          <v-col
            v-for="(hunt, index) in hunts"
            :key="hunt.Name"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card
              @click="goToHunt(hunt)"
              class="hunt-card hover-lift"
              :class="{ 'fade-in-up': true, 'visible': cardsVisible[index] }"
              flat
              role="button"
              :aria-label="'Learn more about ' + hunt.Name + ' hunting'"
            >
              <div class="card-image-wrapper">
                <v-img
                  :src="hunt.img"
                  :alt="hunt.Name + ' hunting at Dakota Trophy Adventures'"
                  aspect-ratio="1.5"
                  class="hunt-image"
                >
                  <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                      <v-progress-circular indeterminate color="primary"></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
                <!-- Desktop hover overlay -->
                <div class="hover-overlay hidden-sm-and-down">
                  <span class="overlay-text">View Details</span>
                </div>
              </div>

              <v-card-text class="card-content">
                <h3 class="hunt-title">{{ hunt.Name }}</h3>
                <p class="hunt-description">{{ hunt.description }}</p>
                <div class="learn-more">
                  <span>Learn More</span>
                  <v-icon small color="primary">mdi-arrow-right</v-icon>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Shared Footer -->
    <shared-footer></shared-footer>
  </div>
</template>

<script>
import SharedFooter from "./Hunting/SharedFooter.vue";

export default {
  name: "Hunting",
  components: {
    SharedFooter,
  },

  data() {
    return {
      cardsVisible: [],
      hunts: [
        {
          Name: "Rifle Deer",
          Route: "/Hunting/RifleDeer",
          img: "/img/rifledeer.jpg",
          description: "Premier mule deer & whitetail hunts on 140,000 acres of private land.",
        },
        {
          Name: "Archery Deer",
          Route: "/Hunting/ArcheryDeer",
          img: "/img/ArcheryDeer.jpg",
          description: "Early season archery hunts for dedicated bowhunters.",
        },
        {
          Name: "Antelope",
          Route: "/Hunting/Antelope",
          img: "/img/Antelope/2023/IMG_6281.jpg",
          description: "Speed goat hunting on the open prairies of South Dakota.",
        },
        {
          Name: "Turkey",
          Route: "/Hunting/Turkey",
          img: "/img/Turkey/Solomons and Baumans 2013.jpg",
          description: "Spring Merriam turkey hunts in beautiful badlands terrain.",
        },
        {
          Name: "Upland Game",
          Route: "/Hunting/UplandGame",
          img: "/img/UplandGame/hunters-pheasants.png",
          description: "Pheasant, sharptail grouse, chukar, and Hungarian partridge.",
        },
        {
          Name: "Predator",
          Route: "/Hunting/Predator",
          img: "https://images.pexels.com/photos/1603783/pexels-photo-1603783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          description: "Thermal coyote hunts during winter months.",
        },
        {
          Name: "Fossil Hunting",
          Route: "/Hunting/FossilHunting",
          img: "/img/fossil.jpg",
          description: "Summer family trips to explore ancient fossil beds.",
        },
        {
          Name: "Fishing & Shed",
          Route: "/Hunting/ShedHunting",
          img: "/img/Justin fishing.png",
          description: "Fishing adventures and antler shed hunting trips.",
        },
      ],
    };
  },

  mounted() {
    // Stagger card animations
    this.hunts.forEach((_, index) => {
      setTimeout(() => {
        this.$set(this.cardsVisible, index, true);
      }, 100 + index * 100);
    });
  },

  methods: {
    goToHunt(hunt) {
      this.$router.push(hunt.Route);
    },
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

/* Hunts Grid */
.hunts-grid {
  padding: 0 0 60px;
}

/* Hunt Card */
.hunt-card {
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  background: white;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card-image-wrapper {
  position: relative;
  overflow: hidden;
}

.hunt-image {
  transition: transform 0.4s ease;
}

.hunt-card:hover .hunt-image {
  transform: scale(1.05);
}

/* Hover Overlay */
.hover-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(74, 103, 65, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.hunt-card:hover .hover-overlay {
  opacity: 1;
}

.overlay-text {
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 600;
  color: white;
  text-transform: uppercase;
  letter-spacing: 2px;
}

/* Card Content */
.card-content {
  padding: 20px !important;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.hunt-title {
  font-family: var(--font-heading) !important;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
}

.hunt-description {
  font-size: 0.95rem;
  color: var(--color-text);
  opacity: 0.7;
  line-height: 1.5;
  flex-grow: 1;
  margin-bottom: 16px;
}

.learn-more {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-heading);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.learn-more .v-icon {
  transition: transform 0.3s ease;
}

.hunt-card:hover .learn-more .v-icon {
  transform: translateX(4px);
}

/* Mobile Styles */
@media (max-width: 600px) {
  .page-title {
    font-size: 1.8rem;
    letter-spacing: 2px;
  }

  .page-subtitle {
    font-size: 1rem;
    padding: 0 16px;
  }

  .page-header {
    padding: 32px 0 40px;
  }

  .hunt-title {
    font-size: 1.1rem;
  }

  .hunt-description {
    font-size: 0.9rem;
  }

  .card-content {
    padding: 16px !important;
  }

  /* Disable hover effects on mobile */
  .hunt-card:hover .hunt-image {
    transform: none;
  }

  .hover-overlay {
    display: none;
  }
}

@media (max-width: 960px) {
  .hunts-grid {
    padding: 0 0 40px;
  }
}
</style>

<template>
  <div class="home-page">
    <!-- Hero Welcome Section -->
    <section class="hero-welcome fade-in-up" :class="{ visible: sectionsVisible.hero }">
      <v-container>
        <v-card flat class="welcome-card">
          <v-card-text class="text-center">
            <h1 class="hero-title">
              <span class="nowrap">Western South Dakota's</span>
              <span class="nowrap">Finest Hunting</span>
            </h1>
            <p class="hero-subtitle">
              Family-owned outfitter since 1965 - Trophy hunts across 140,000 acres
            </p>
            <v-btn
              to="/Contact"
              class="cta-button mt-6"
              x-large
              elevation="0"
            >
              Book Your Adventure
            </v-btn>
          </v-card-text>
        </v-card>
      </v-container>
    </section>

    <!-- Why Choose Us Section -->
    <section class="why-choose fade-in-up" :class="{ visible: sectionsVisible.whyChoose }">
      <v-container>
        <h2 class="section-title text-center">Why Choose Dakota Trophy</h2>
        <v-row class="features-row">
          <v-col cols="6" md="3" v-for="feature in features" :key="feature.title">
            <div class="feature-card text-center">
              <v-icon class="feature-icon" x-large>{{ feature.icon }}</v-icon>
              <h3 class="feature-title">{{ feature.title }}</h3>
              <p class="feature-desc">{{ feature.description }}</p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- About Section - Dakota Trophy Hunt -->
    <section class="about-section fade-in-up" :class="{ visible: sectionsVisible.about1 }">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="5">
            <div class="image-container hover-lift">
              <v-img
                src="/img/Deer/Mule%20Deer/Drefke%20MD%201.JPG"
                alt="Trophy mule deer hunt at Dakota Trophy Adventures"
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
              <h2 class="section-title">Dakota Trophy Hunt</h2>
              <p class="section-text">
                Dakota Trophy Hunt is a corporation comprising our ranch and
                about 12 others, specializing in rifle Mule Deer and Whitetail
                hunting. Originally established as Dakota Safari in 1965,
                Dakota Trophy underwent a transformation in the 1980s when the
                group of ranchers decided to split into two organizations.
              </p>
              <p class="section-text">
                We have been managing the booking for Dakota Trophy Hunt since 1987,
                and the base camp is located at our ranch headquarters. This highly
                successful group of ranchers has harvested many Trophy Mule Deer and
                Whitetail over the years, covering approximately
                <strong>140,000 acres</strong> of private land.
              </p>
              <v-btn
                to="/Hunting/RifleDeer"
                outlined
                class="learn-more-btn mt-4"
              >
                Learn More
                <v-icon right small>mdi-arrow-right</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- About Section - Dakota Trophy Adventures -->
    <section class="about-section alt-bg fade-in-up" :class="{ visible: sectionsVisible.about2 }">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="7" order="2" order-md="1">
            <div class="content-block">
              <h2 class="section-title">Dakota Trophy Adventures</h2>
              <p class="section-text">
                Dakota Trophy Adventures operates a guiding service for a
                variety of hunts including Merriam turkeys in the spring,
                antelope, archery deer, and upland game birds (pheasant,
                sharptail grouse, chukar, and Hungarian partridge).
              </p>
              <p class="section-text">
                While based out of the same camp, it is primarily a family business.
                We also offer fossil hunting trips for the whole family,
                fishing and shed hunting adventures, and thermal predator
                hunts for coyotes in the winter months.
              </p>
              <v-btn
                to="/Hunting"
                outlined
                class="learn-more-btn mt-4"
              >
                Explore All Hunts
                <v-icon right small>mdi-arrow-right</v-icon>
              </v-btn>
            </div>
          </v-col>
          <v-col cols="12" md="5" order="1" order-md="2">
            <div class="image-container hover-lift">
              <v-img
                src="/img/Deer/Mule%20Deer/Newmans%20MD%20WT%202.JPG"
                alt="Whitetail deer hunt at Dakota Trophy Adventures"
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

    <!-- Testimonial Section -->
    <section class="testimonial-section fade-in-up" :class="{ visible: sectionsVisible.testimonial }">
      <v-container>
        <div class="testimonial-card text-center">
          <v-icon class="quote-icon" x-large>mdi-format-quote-open</v-icon>
          <blockquote class="testimonial-text">
            "I saw at least 5 mature bucks on my first day of hunting. I harvested an old mature
            28-inch wide 170+ class mule deer buck. Dakota Trophy Adventures has carefully managed
            both the quantity and quality of bucks on their lands for over 50 years. I literally
            saw several hundred mule deer with more than 20 being 5+ year old bucks."
          </blockquote>
          <p class="testimonial-author">- Mitch Engle</p>
          <v-btn
            to="/Reviews"
            text
            class="mt-4"
            color="primary"
          >
            Read More Reviews
            <v-icon right small>mdi-arrow-right</v-icon>
          </v-btn>
        </div>
      </v-container>
    </section>

    <!-- Popular Hunts Section -->
    <section class="popular-hunts fade-in-up" :class="{ visible: sectionsVisible.hunts }">
      <v-container>
        <h2 class="section-title text-center">Popular Hunts</h2>
        <v-row>
          <v-col cols="6" md="3" v-for="hunt in popularHunts" :key="hunt.name">
            <v-card
              :to="hunt.route"
              class="hunt-preview-card hover-lift"
              flat
            >
              <v-img
                :src="hunt.image"
                :alt="hunt.name + ' hunting at Dakota Trophy'"
                aspect-ratio="1"
                class="hunt-image"
              >
                <div class="hunt-overlay">
                  <span class="hunt-name">{{ hunt.name }}</span>
                </div>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
        <div class="text-center mt-6">
          <v-btn
            to="/Hunting"
            class="cta-button"
            elevation="0"
          >
            View All Hunts
          </v-btn>
        </div>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",

  data() {
    return {
      sectionsVisible: {
        hero: false,
        whyChoose: false,
        about1: false,
        about2: false,
        testimonial: false,
        hunts: false,
      },
      features: [
        {
          icon: "mdi-calendar-clock",
          title: "60+ Years",
          description: "Guiding hunters since 1965",
        },
        {
          icon: "mdi-home-group",
          title: "Base Camp",
          description: "Comfortable ranch lodging",
        },
        {
          icon: "mdi-account-group",
          title: "Family Run",
          description: "Three generations of expertise",
        },
        {
          icon: "mdi-trophy",
          title: "Trophy Quality",
          description: "140,000 acres of prime land",
        },
      ],
      popularHunts: [
        {
          name: "Rifle Deer",
          route: "/Hunting/RifleDeer",
          image: "/img/rifledeer.jpg",
        },
        {
          name: "Turkey",
          route: "/Hunting/Turkey",
          image: "/img/Turkey/Solomons and Baumans 2013.jpg",
        },
        {
          name: "Antelope",
          route: "/Hunting/Antelope",
          image: "/img/Antelope/2023/IMG_6281.jpg",
        },
        {
          name: "Upland Game",
          route: "/Hunting/UplandGame",
          image: "/img/UplandGame/hunters-pheasants.png",
        },
      ],
    };
  },

  mounted() {
    // Trigger animations after mount
    setTimeout(() => {
      this.sectionsVisible.hero = true;
    }, 100);
    setTimeout(() => {
      this.sectionsVisible.whyChoose = true;
    }, 300);
    setTimeout(() => {
      this.sectionsVisible.about1 = true;
    }, 500);
    setTimeout(() => {
      this.sectionsVisible.about2 = true;
    }, 700);
    setTimeout(() => {
      this.sectionsVisible.testimonial = true;
    }, 900);
    setTimeout(() => {
      this.sectionsVisible.hunts = true;
    }, 1100);

    // Setup intersection observer for scroll animations
    this.setupScrollAnimations();
  },

  methods: {
    setupScrollAnimations() {
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('visible');
              }
            });
          },
          { threshold: 0.1 }
        );

        document.querySelectorAll('.fade-in-up').forEach((el) => {
          observer.observe(el);
        });
      }
    },
  },
};
</script>

<style scoped>
/* Hero Section */
.hero-welcome {
  padding: 40px 0 60px;
}

.welcome-card {
  background: transparent !important;
}

.hero-title {
  font-family: var(--font-heading) !important;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text);
  line-height: 1.2;
  margin-bottom: 16px;
}

.hero-subtitle {
  font-size: 1.1rem;
  color: var(--color-text);
  opacity: 0.8;
  max-width: 500px;
  margin: 0 auto;
}

.nowrap {
  display: block;
}

/* Why Choose Section */
.why-choose {
  padding: 60px 0;
  background: white;
}

.features-row {
  margin-top: 40px;
}

.feature-card {
  padding: 24px 16px;
}

.feature-icon {
  color: var(--color-primary) !important;
  margin-bottom: 16px;
}

.feature-title {
  font-family: var(--font-heading) !important;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 8px;
}

.feature-desc {
  font-size: 0.9rem;
  color: var(--color-text);
  opacity: 0.7;
}

/* Section Titles */
.section-title {
  font-family: var(--font-heading) !important;
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

/* About Sections */
.about-section {
  padding: 80px 0;
}

.about-section.alt-bg {
  background: white;
}

.image-container {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.rounded-image {
  border-radius: 8px;
}

.content-block {
  padding: 20px 0;
}

.section-text {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--color-text);
  margin-bottom: 16px;
}

.learn-more-btn {
  color: var(--color-primary) !important;
  border-color: var(--color-primary) !important;
  font-family: var(--font-heading) !important;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Testimonial Section */
.testimonial-section {
  padding: 80px 0;
  background: var(--color-primary);
}

.testimonial-card {
  max-width: 700px;
  margin: 0 auto;
  padding: 40px;
}

.quote-icon {
  color: white !important;
  opacity: 0.6;
}

.testimonial-text {
  font-size: 1.4rem;
  font-style: italic;
  color: white;
  line-height: 1.6;
  margin: 24px 0;
}

.testimonial-author {
  color: #F5D77A;  /* Bright gold/yellow for better contrast */
  font-family: var(--font-heading);
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 1px;
}

.testimonial-section .v-btn {
  color: white !important;
}

/* Popular Hunts Section */
.popular-hunts {
  padding: 80px 0;
  background: white;
}

.hunt-preview-card {
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
}

.hunt-image {
  position: relative;
}

.hunt-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: 40px 16px 16px;
}

.hunt-name {
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 600;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Mobile Styles */
@media (max-width: 600px) {
  .hero-title {
    font-size: 1.8rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .about-section {
    padding: 48px 0;
  }

  .content-block {
    padding: 24px 0 0;
  }

  .feature-card {
    padding: 16px 8px;
  }

  .feature-title {
    font-size: 0.95rem;
  }

  .feature-desc {
    font-size: 0.8rem;
  }

  .testimonial-text {
    font-size: 1.1rem;
  }

  .testimonial-card {
    padding: 24px 16px;
  }

  .hunt-name {
    font-size: 0.85rem;
  }
}

@media (max-width: 960px) {
  .content-block {
    text-align: center;
  }

  .learn-more-btn {
    margin: 16px auto 0;
  }
}
</style>

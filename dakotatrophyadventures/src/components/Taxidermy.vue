<template>
  <div class="taxidermy-page">
    <!-- Page Header -->
    <section class="page-header">
      <v-container>
        <h1 class="page-title text-center">Dakota Trophy Taxidermy</h1>
        <p class="page-subtitle text-center">
          Professional taxidermy services by Mark & Mick Trask
        </p>
      </v-container>
    </section>

    <!-- About Section -->
    <section class="about-section">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="6">
            <div class="about-content">
              <h2 class="section-title">Preserving Your Trophy</h2>
              <p class="about-text">
                The taxidermy business has evolved from Tom learning to do a little of our own work.
                He apprenticed with a good friend, Marty Hanson of Hanson Taxidermy in Philip, SD —
                a true master of the profession.
              </p>
              <p class="about-text">
                Mark & Mick have spent most of their lives (when not involved in school or sports)
                either hunting, fishing, guiding, or working with animals in some way. As a result
                of our family's involvement in hunting and wildlife, it was only natural for them
                to move towards preserving the beauty that nature has provided.
              </p>
              <p class="about-text">
                They attended <strong>Northwest Iowa School of Taxidermy</strong> with Tom Matuska.
                They are very professional and deliver an excellent product.
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="highlights-grid">
              <div class="highlight-card">
                <v-icon class="highlight-icon" x-large>mdi-school</v-icon>
                <h3 class="highlight-title">Professionally Trained</h3>
                <p class="highlight-text">Northwest Iowa School of Taxidermy graduates</p>
              </div>
              <div class="highlight-card">
                <v-icon class="highlight-icon" x-large>mdi-account-group</v-icon>
                <h3 class="highlight-title">Family Business</h3>
                <p class="highlight-text">Generations of hunting & wildlife experience</p>
              </div>
              <div class="highlight-card">
                <v-icon class="highlight-icon" x-large>mdi-star</v-icon>
                <h3 class="highlight-title">Quality Work</h3>
                <p class="highlight-text">Professional results at fair prices</p>
              </div>
              <div class="highlight-card">
                <v-icon class="highlight-icon" x-large>mdi-trophy</v-icon>
                <h3 class="highlight-title">All Species</h3>
                <p class="highlight-text">Big game, birds, fish, and more</p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Contact Section -->
    <section class="contact-section">
      <v-container>
        <div class="section-header text-center">
          <v-icon class="section-icon" x-large>mdi-phone</v-icon>
          <h2 class="section-title">Get In Touch</h2>
          <p class="section-description">
            Call for a brochure with pictures and pricing
          </p>
        </div>

        <v-row justify="center" class="contact-grid">
          <v-col cols="12" sm="4" v-for="contact in contacts" :key="contact.name">
            <v-card class="contact-card hover-lift" flat>
              <div class="contact-avatar" :style="{ background: contact.gradient }">
                <v-icon x-large>{{ contact.icon }}</v-icon>
              </div>
              <v-card-text class="contact-content text-center">
                <h3 class="contact-name">{{ contact.name }}</h3>
                <p class="contact-role">{{ contact.role }}</p>
                <v-btn
                  :href="'tel:' + contact.phone"
                  outlined
                  block
                  class="contact-btn"
                >
                  <v-icon left>mdi-phone</v-icon>
                  {{ contact.display }}
                </v-btn>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Gallery Section -->
    <section class="gallery-section" v-if="filteredImages.length > 0">
      <v-container>
        <div class="section-header text-center">
          <v-icon class="section-icon" x-large>mdi-image-multiple</v-icon>
          <h2 class="section-title">Our Work</h2>
          <p class="section-description">
            Browse examples of our taxidermy craftsmanship
          </p>
        </div>

        <v-row class="gallery-grid">
          <v-col
            v-for="(image, index) in filteredImages"
            :key="image.imageId"
            cols="6"
            sm="4"
            md="3"
            lg="2"
          >
            <v-card
              class="gallery-card hover-lift"
              flat
              @click="goToImage(image.imageId)"
              role="button"
              :aria-label="'View taxidermy image ' + (index + 1)"
            >
              <v-img
                :src="image.url"
                :alt="'Taxidermy work by Dakota Trophy ' + (index + 1)"
                aspect-ratio="1"
                class="gallery-image"
              >
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular
                      indeterminate
                      color="primary"
                      size="32"
                    ></v-progress-circular>
                  </v-row>
                </template>

                <!-- Hover overlay -->
                <div class="image-overlay hidden-sm-and-down">
                  <v-icon color="white" large>mdi-magnify-plus</v-icon>
                </div>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <v-container>
        <div class="cta-card text-center">
          <h2 class="cta-title">Ready to Preserve Your Trophy?</h2>
          <p class="cta-text">
            The quality of work and pricing leaves you asking why you would go anywhere else.
            Give us a call today!
          </p>
          <v-btn
            href="tel:+16057982002"
            class="cta-button"
            x-large
            elevation="0"
          >
            <v-icon left>mdi-phone</v-icon>
            Call the Shop
          </v-btn>
        </div>
      </v-container>
    </section>

    <!-- Back to top button -->
    <v-btn
      v-show="showBackToTop"
      fab
      fixed
      bottom
      right
      color="primary"
      class="back-to-top"
      @click="scrollToTop"
      aria-label="Scroll back to top"
    >
      <v-icon>mdi-arrow-up</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { AllImages } from "../assets/AllImages";

export default {
  name: "Taxidermy",

  data: function () {
    return {
      showBackToTop: false,
      scrollContainer: null,
      contacts: [
        {
          name: "Shop",
          role: "Main Line",
          phone: "+16057982002",
          display: "(605) 798-2002",
          icon: "mdi-store",
          gradient: "linear-gradient(135deg, #4A6741 0%, #3a5231 100%)"
        },
        {
          name: "Mark Trask",
          role: "Taxidermist",
          phone: "+16054413937",
          display: "(605) 441-3937",
          icon: "mdi-account",
          gradient: "linear-gradient(135deg, #8B6914 0%, #6d5310 100%)"
        },
        {
          name: "Mick Trask",
          role: "Taxidermist",
          phone: "+16054419997",
          display: "(605) 441-9997",
          icon: "mdi-account",
          gradient: "linear-gradient(135deg, #5D4E37 0%, #4a3e2c 100%)"
        }
      ]
    };
  },

  computed: {
    filteredImages: function () {
      return AllImages.filter((x) => x.imageGalleryId == 5);
    },
  },

  mounted: function () {
    this.scrollContainer = document.getElementById('scrolling-techniques-3');
    if (this.scrollContainer) {
      this.scrollContainer.addEventListener('scroll', this.handleScroll);
    }
  },

  beforeDestroy() {
    if (this.scrollContainer) {
      this.scrollContainer.removeEventListener('scroll', this.handleScroll);
    }
  },

  methods: {
    goToImage(i) {
      this.$router.push({ name: "DetailView", params: { ItemID: i } });
    },
    scrollToTop() {
      const scrollContainer = document.getElementById('scrolling-techniques-3');
      if (scrollContainer) {
        scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    handleScroll() {
      const scrollContainer = document.getElementById('scrolling-techniques-3');
      if (scrollContainer) {
        this.showBackToTop = scrollContainer.scrollTop > 300;
      }
    },
  },
};
</script>

<style scoped>
.taxidermy-page {
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

/* Section Styling */
.section-header {
  margin-bottom: 40px;
}

.section-icon {
  color: var(--color-primary) !important;
  margin-bottom: 16px;
}

.section-title {
  font-family: var(--font-heading) !important;
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-text);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 12px;
}

.section-description {
  font-size: 1.05rem;
  color: var(--color-text);
  opacity: 0.8;
  max-width: 600px;
  margin: 0 auto;
}

/* About Section */
.about-section {
  padding: 0 0 80px;
}

.about-content {
  padding-right: 40px;
}

.about-text {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--color-text);
  margin-bottom: 16px;
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.highlight-card {
  background: white;
  border-radius: 12px;
  padding: 24px 16px;
  text-align: center;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.highlight-icon {
  color: var(--color-primary) !important;
  margin-bottom: 12px;
}

.highlight-title {
  font-family: var(--font-heading) !important;
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 4px;
}

.highlight-text {
  font-size: 0.85rem;
  color: var(--color-text);
  opacity: 0.7;
  margin: 0;
}

/* Contact Section */
.contact-section {
  padding: 80px 0;
  background: white;
}

.contact-grid {
  max-width: 900px;
  margin: 0 auto;
}

.contact-card {
  border-radius: 12px;
  overflow: hidden;
  background: #f9f7f4;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contact-card.hover-lift:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
}

.contact-avatar {
  padding: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-avatar .v-icon {
  color: white !important;
}

.contact-content {
  padding: 24px !important;
}

.contact-name {
  font-family: var(--font-heading) !important;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 4px;
}

.contact-role {
  font-size: 0.9rem;
  color: var(--color-text);
  opacity: 0.7;
  margin-bottom: 16px;
}

.contact-btn {
  font-family: var(--font-heading) !important;
  text-transform: uppercase !important;
  letter-spacing: 0.5px !important;
  color: var(--color-primary) !important;
  border-color: var(--color-primary) !important;
}

/* Gallery Section */
.gallery-section {
  padding: 80px 0;
}

.gallery-grid {
  margin-top: 24px;
}

.gallery-card {
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery-card.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.gallery-image {
  transition: transform 0.4s ease;
}

.gallery-card:hover .gallery-image {
  transform: scale(1.08);
}

/* Image Overlay */
.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-card:hover .image-overlay {
  opacity: 1;
}

/* CTA Section */
.cta-section {
  padding: 80px 0;
  background: var(--color-primary);
}

.cta-card {
  max-width: 600px;
  margin: 0 auto;
}

.cta-title {
  font-family: var(--font-heading) !important;
  font-size: 2rem;
  font-weight: 600;
  color: white;
  margin-bottom: 16px;
}

.cta-text {
  font-size: 1.1rem;
  color: white;
  opacity: 0.9;
  margin-bottom: 24px;
  line-height: 1.7;
}

/* Back to Top Button */
.back-to-top {
  margin-bottom: 16px;
  margin-right: 16px;
}

/* Mobile Styles */
@media (max-width: 960px) {
  .about-content {
    padding-right: 0;
    margin-bottom: 32px;
  }
}

@media (max-width: 600px) {
  .page-title {
    font-size: 1.8rem;
    letter-spacing: 2px;
  }

  .page-subtitle {
    font-size: 1rem;
    padding: 0 16px;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .about-section {
    padding: 0 0 48px;
  }

  .highlights-grid {
    gap: 12px;
  }

  .highlight-card {
    padding: 16px 12px;
  }

  .highlight-title {
    font-size: 0.9rem;
  }

  .highlight-text {
    font-size: 0.8rem;
  }

  .contact-section,
  .gallery-section,
  .cta-section {
    padding: 48px 0;
  }

  .contact-card.hover-lift:hover,
  .gallery-card.hover-lift:hover {
    transform: none;
  }

  .contact-avatar {
    padding: 24px;
  }

  /* Disable hover effects on mobile */
  .gallery-card:hover .gallery-image {
    transform: none;
  }

  .image-overlay {
    display: none;
  }

  .cta-title {
    font-size: 1.5rem;
  }

  .cta-text {
    font-size: 1rem;
    padding: 0 16px;
  }

  .back-to-top {
    margin-bottom: 24px;
    margin-right: 8px;
  }
}
</style>

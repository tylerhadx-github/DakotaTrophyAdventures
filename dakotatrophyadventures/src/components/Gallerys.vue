<template>
  <div class="galleries-page">
    <!-- Page Header -->
    <section class="page-header">
      <v-container>
        <h1 class="page-title text-center">Photo Galleries</h1>
        <p class="page-subtitle text-center">
          Browse our collection of trophy photos, landscapes, and memories from Dakota Trophy Adventures
        </p>
      </v-container>
    </section>

    <!-- Gallery Cards Grid -->
    <section class="galleries-grid">
      <v-container>
        <v-row>
          <v-col
            v-for="(gallery, index) in Galleries"
            :key="gallery.galleryId"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card
              @click="openItem(gallery.galleryId)"
              class="gallery-card hover-lift"
              :class="{ 'fade-in-up': true, 'visible': cardsVisible[index] }"
              flat
              role="button"
              :aria-label="'View ' + gallery.name + ' gallery'"
            >
              <div class="card-image-wrapper">
                <v-img
                  :src="gallery.url"
                  :alt="gallery.name + ' photo gallery at Dakota Trophy Adventures'"
                  aspect-ratio="1.5"
                  class="gallery-image"
                >
                  <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                      <v-progress-circular indeterminate color="primary"></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
                <!-- Desktop hover overlay -->
                <div class="hover-overlay hidden-sm-and-down">
                  <span class="overlay-text">View Gallery</span>
                </div>
              </div>

              <v-card-text class="card-content">
                <h3 class="gallery-title">{{ gallery.name }}</h3>
                <p class="gallery-description">{{ gallery.description }}</p>
                <div class="view-gallery">
                  <span>View Photos</span>
                  <v-icon small color="primary">mdi-arrow-right</v-icon>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {
  name: "Gallerys",

  data() {
    return {
      cardsVisible: [],
      Galleries: [
        {
          galleryId: 1,
          name: "Mule Deer",
          url: "/img/ArcheryDeer.jpg",
          description: "Trophy mule deer from our hunts across the years.",
        },
        {
          galleryId: 2,
          name: "White-tailed Deer",
          url: "/img/Deer/Whitetail/2023/Bridger Isrealson.jpg",
          description: "Whitetail deer harvested on our South Dakota land.",
        },
        {
          galleryId: 3,
          name: "Antelope",
          url: "/img/Antelope/2023/IMG_6281.jpg",
          description: "Pronghorn antelope from our prairie hunts.",
        },
        {
          galleryId: 4,
          name: "Turkey",
          url: "/img/Turkey/turkeys.jpg",
          description: "Merriam turkey harvests from spring seasons.",
        },
        {
          galleryId: 5,
          name: "Taxidermy",
          url: "/img/Taxidermy/Trophy Room _20_.JPG",
          description: "Our taxidermy work and trophy room displays.",
        },
        {
          galleryId: 6,
          name: "Landscape",
          url: "/img/Landscape/Elk Creek 2.jpg",
          description: "Beautiful scenery from Western South Dakota.",
        },
        {
          galleryId: 7,
          name: "Personal Hunts",
          url: "/img/Other Animals/2009 Yukon moose.jpg",
          description: "Our family's hunting adventures around the world.",
        },
        {
          galleryId: 9,
          name: "Trail Camera",
          url: "/img/Trail Camera/MFDC3328.JPG",
          description: "Wildlife captured on our trail cameras.",
        },
        {
          galleryId: 10,
          name: "Ranch",
          url: "/img/horses/Archery 358.JPG",
          description: "Life on the Trask Ranch and our quarter horses.",
        },
        {
          galleryId: 11,
          name: "Predator",
          url: "/img/Predator/IMG_1259.jpg",
          description: "Coyote and predator hunting photos.",
        },
      ],
    };
  },

  mounted() {
    // Stagger card animations
    this.Galleries.forEach((_, index) => {
      setTimeout(() => {
        this.$set(this.cardsVisible, index, true);
      }, 100 + index * 80);
    });
  },

  methods: {
    openItem(galleryId) {
      this.$router.push({ name: "Gallery", params: { ItemID: galleryId } });
    },
  },
};
</script>

<style scoped>
.galleries-page {
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

/* Galleries Grid */
.galleries-grid {
  padding: 0 0 60px;
}

/* Gallery Card */
.gallery-card {
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

.gallery-image {
  transition: transform 0.4s ease;
}

.gallery-card:hover .gallery-image {
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

.gallery-card:hover .hover-overlay {
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

.gallery-title {
  font-family: var(--font-heading) !important;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
}

.gallery-description {
  font-size: 0.95rem;
  color: var(--color-text);
  opacity: 0.7;
  line-height: 1.5;
  flex-grow: 1;
  margin-bottom: 16px;
}

.view-gallery {
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

.view-gallery .v-icon {
  transition: transform 0.3s ease;
}

.gallery-card:hover .view-gallery .v-icon {
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

  .gallery-title {
    font-size: 1.1rem;
  }

  .gallery-description {
    font-size: 0.9rem;
  }

  .card-content {
    padding: 16px !important;
  }

  /* Disable hover effects on mobile */
  .gallery-card:hover .gallery-image {
    transform: none;
  }

  .hover-overlay {
    display: none;
  }
}

@media (max-width: 960px) {
  .galleries-grid {
    padding: 0 0 40px;
  }
}
</style>

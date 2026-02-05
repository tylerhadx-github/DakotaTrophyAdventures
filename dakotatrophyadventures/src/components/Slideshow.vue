<template>
  <div class="slideshow-page fullscreen-mode">
    <!-- Controls Header -->
    <div class="slideshow-controls" :class="{ hidden: controlsHidden && !isPaused }">
      <v-btn icon @click="goBack" class="back-btn">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <div class="controls-info">
        <span class="image-counter" v-if="mode === 'single'">{{ currentIndex + 1 }} / {{ images.length }}</span>
        <span class="image-counter" v-else>Page {{ currentPage }} / {{ totalPages }}</span>
        <span class="timer-indicator">
          <v-icon small>mdi-timer-outline</v-icon>
          {{ timer }}s
        </span>
      </div>
      <div class="controls-actions">
        <v-btn icon @click="togglePause">
          <v-icon>{{ isPaused ? 'mdi-play' : 'mdi-pause' }}</v-icon>
        </v-btn>
        <v-btn icon @click="toggleFullscreen">
          <v-icon>{{ isFullscreen ? 'mdi-fullscreen-exit' : 'mdi-fullscreen' }}</v-icon>
        </v-btn>
      </div>
    </div>

    <!-- Single Mode View -->
    <div v-if="mode === 'single'" class="single-view" @click="toggleControls">
      <transition name="fade" mode="out-in">
        <div :key="currentIndex" class="image-wrapper">
          <v-img
            :src="currentImage.url"
            :alt="'Hunting photo from ' + currentImage.year"
            contain
            class="slideshow-image"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="white" size="64"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          <div class="year-badge">{{ currentImage.year }}</div>
        </div>
      </transition>

      <!-- Navigation Arrows -->
      <v-btn
        icon
        x-large
        class="nav-arrow nav-prev"
        @click.stop="prevPage"
      >
        <v-icon x-large>mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn
        icon
        x-large
        class="nav-arrow nav-next"
        @click.stop="nextPage"
      >
        <v-icon x-large>mdi-chevron-right</v-icon>
      </v-btn>

      <!-- Progress Bar -->
      <div class="progress-bar" v-if="!isPaused">
        <div class="progress-fill" :style="{ width: progressPercent + '%' }"></div>
      </div>
    </div>

    <!-- Grid Mode View - dynamic grid size -->
    <div v-else class="grid-view" @click="toggleControls">
      <transition name="fade" mode="out-in">
        <div :key="currentPage" class="grid-container" :style="gridStyle">
          <div
            v-for="image in currentGridImages"
            :key="image.imageId"
            class="grid-item"
          >
            <v-img
              :src="image.url"
              :alt="'Hunting photo from ' + image.year"
              aspect-ratio="1"
              class="grid-image"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="white" size="32"></v-progress-circular>
                </v-row>
              </template>
              <div class="grid-year-badge">{{ image.year }}</div>
            </v-img>
          </div>
        </div>
      </transition>

      <!-- Navigation Arrows -->
      <v-btn
        icon
        x-large
        class="nav-arrow nav-prev"
        @click.stop="prevPage"
      >
        <v-icon x-large>mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn
        icon
        x-large
        class="nav-arrow nav-next"
        @click.stop="nextPage"
      >
        <v-icon x-large>mdi-chevron-right</v-icon>
      </v-btn>

      <!-- Progress Bar -->
      <div class="progress-bar" v-if="!isPaused">
        <div class="progress-fill" :style="{ width: progressPercent + '%' }"></div>
      </div>
    </div>

    <!-- No Images Message -->
    <div v-if="images.length === 0" class="no-images">
      <v-icon x-large color="grey">mdi-image-off</v-icon>
      <h2>No Images Found</h2>
      <p>No images match your selected criteria.</p>
      <v-btn outlined @click="goBack">
        <v-icon left>mdi-arrow-left</v-icon>
        Back to Builder
      </v-btn>
    </div>
  </div>
</template>

<script>
import { AllImages } from "@/assets/AllImages.js";

// Grid size to columns/rows mapping
const GRID_CONFIGS = {
  4: { cols: 2, rows: 2 },
  6: { cols: 3, rows: 2 },
  9: { cols: 3, rows: 3 },
  12: { cols: 4, rows: 3 },
  16: { cols: 4, rows: 4 },
};

export default {
  name: "Slideshow",

  data() {
    return {
      images: [],
      currentIndex: 0,
      timer: 10,
      mode: "single",
      gridSize: 9,
      isPaused: false,
      isFullscreen: false,
      controlsHidden: false,
      controlsTimeout: null,
      slideInterval: null,
      progressPercent: 0,
      progressInterval: null,
    };
  },

  computed: {
    currentImage() {
      if (this.images.length === 0) {
        return { url: "", year: "" };
      }
      return this.images[this.currentIndex];
    },

    gridConfig() {
      return GRID_CONFIGS[this.gridSize] || GRID_CONFIGS[9];
    },

    gridStyle() {
      return {
        gridTemplateColumns: `repeat(${this.gridConfig.cols}, 1fr)`,
        gridTemplateRows: `repeat(${this.gridConfig.rows}, 1fr)`,
      };
    },

    currentPage() {
      if (this.mode === "single") {
        return this.currentIndex + 1;
      }
      return Math.floor(this.currentIndex / this.gridSize) + 1;
    },

    totalPages() {
      if (this.mode === "single") {
        return this.images.length;
      }
      return Math.ceil(this.images.length / this.gridSize);
    },

    currentGridImages() {
      const startIndex = (this.currentPage - 1) * this.gridSize;
      return this.images.slice(startIndex, startIndex + this.gridSize);
    },
  },

  mounted() {
    this.parseQueryParams();
    this.filterImages();
    this.setupKeyboardListeners();

    if (this.images.length > 0) {
      this.startSlideshow();
      this.startHideControlsTimer();
    }
  },

  beforeDestroy() {
    this.stopSlideshow();
    this.removeKeyboardListeners();
    if (this.controlsTimeout) {
      clearTimeout(this.controlsTimeout);
    }
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  },

  methods: {
    parseQueryParams() {
      const params = new URLSearchParams(window.location.search);
      this.timer = parseInt(params.get("timer")) || 10;
      this.mode = params.get("mode") || "single";
      const gridSizeParam = parseInt(params.get("gridSize"));
      if (gridSizeParam && GRID_CONFIGS[gridSizeParam]) {
        this.gridSize = gridSizeParam;
      }
    },

    extractYear(url) {
      const match = url.match(/\/(\d{4})\//);
      return match ? match[1] : "Unknown";
    },

    filterImages() {
      const params = new URLSearchParams(window.location.search);
      const yearsParam = params.get("years") || "";
      const speciesParam = params.get("species") || "";

      const years = yearsParam.split(",").map((y) => parseInt(y)).filter((y) => !isNaN(y));
      const species = speciesParam.split(",").map((s) => parseInt(s)).filter((s) => !isNaN(s));

      this.images = AllImages.filter((img) => {
        const imgYear = parseInt(this.extractYear(img.url));
        const matchesYear = years.length === 0 || years.includes(imgYear);
        const matchesSpecies = species.length === 0 || species.includes(img.imageGalleryId);
        return matchesYear && matchesSpecies;
      }).map((img) => ({
        ...img,
        year: this.extractYear(img.url),
      }));

      // Shuffle images for variety
      this.shuffleImages();
    },

    shuffleImages() {
      for (let i = this.images.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.images[i], this.images[j]] = [this.images[j], this.images[i]];
      }
    },

    startSlideshow() {
      this.stopSlideshow();
      this.progressPercent = 0;

      // Progress bar update every 100ms
      const progressStep = 100 / (this.timer * 10);
      this.progressInterval = setInterval(() => {
        if (!this.isPaused) {
          this.progressPercent += progressStep;
          if (this.progressPercent >= 100) {
            this.progressPercent = 0;
            this.nextPage();
          }
        }
      }, 100);
    },

    stopSlideshow() {
      if (this.slideInterval) {
        clearInterval(this.slideInterval);
        this.slideInterval = null;
      }
      if (this.progressInterval) {
        clearInterval(this.progressInterval);
        this.progressInterval = null;
      }
    },

    nextPage() {
      if (this.mode === "single") {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      } else {
        // Grid mode: advance by gridSize
        const nextIndex = this.currentIndex + this.gridSize;
        if (nextIndex >= this.images.length) {
          this.currentIndex = 0; // Loop back to beginning
        } else {
          this.currentIndex = nextIndex;
        }
      }
      this.progressPercent = 0;
    },

    prevPage() {
      if (this.mode === "single") {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      } else {
        // Grid mode: go back by gridSize
        const prevIndex = this.currentIndex - this.gridSize;
        if (prevIndex < 0) {
          // Go to the last page
          const lastPageStart = (this.totalPages - 1) * this.gridSize;
          this.currentIndex = lastPageStart;
        } else {
          this.currentIndex = prevIndex;
        }
      }
      this.progressPercent = 0;
    },

    togglePause() {
      this.isPaused = !this.isPaused;
      this.showControls();
    },

    toggleFullscreen() {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        this.isFullscreen = true;
      } else {
        document.exitFullscreen();
        this.isFullscreen = false;
      }
      this.showControls();
    },

    toggleControls() {
      this.controlsHidden = !this.controlsHidden;
      if (!this.controlsHidden) {
        this.startHideControlsTimer();
      }
    },

    showControls() {
      this.controlsHidden = false;
      this.startHideControlsTimer();
    },

    startHideControlsTimer() {
      if (this.controlsTimeout) {
        clearTimeout(this.controlsTimeout);
      }
      this.controlsTimeout = setTimeout(() => {
        if (!this.isPaused) {
          this.controlsHidden = true;
        }
      }, 3000);
    },

    setupKeyboardListeners() {
      window.addEventListener("keydown", this.handleKeydown);
    },

    removeKeyboardListeners() {
      window.removeEventListener("keydown", this.handleKeydown);
    },

    handleKeydown(e) {
      switch (e.key) {
        case "ArrowRight":
        case " ":
          e.preventDefault();
          this.nextPage();
          this.showControls();
          break;
        case "ArrowLeft":
          e.preventDefault();
          this.prevPage();
          this.showControls();
          break;
        case "Escape":
          e.preventDefault();
          this.goBack();
          break;
        case "p":
        case "P":
          this.togglePause();
          break;
        case "f":
        case "F":
          this.toggleFullscreen();
          break;
      }
    },

    goBack() {
      this.$router.push("/SlideshowBuilder");
    },
  },
};
</script>

<style scoped>
.slideshow-page {
  min-height: 100vh;
  background: #1a1a1a;
}

.slideshow-page.fullscreen-mode {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

/* Controls Header */
.slideshow-controls {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), transparent);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.slideshow-controls.hidden {
  opacity: 0;
  transform: translateY(-100%);
}

.back-btn,
.controls-actions .v-btn {
  color: white !important;
}

.controls-info {
  display: flex;
  align-items: center;
  gap: 16px;
  color: white;
  font-family: var(--font-heading);
  font-size: 1rem;
}

.timer-indicator {
  display: flex;
  align-items: center;
  gap: 4px;
  opacity: 0.7;
}

.controls-actions {
  display: flex;
  gap: 8px;
}

/* Single View */
.single-view {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.image-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slideshow-image {
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100vh;
}

.slideshow-image >>> .v-image__image {
  background-position: center center !important;
}

.year-badge {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 8px 24px;
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 2px;
  border-radius: 4px;
}

/* Navigation Arrows */
.nav-arrow {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  color: white !important;
  background: rgba(0, 0, 0, 0.3) !important;
  transition: background 0.3s ease;
}

.nav-arrow:hover {
  background: rgba(0, 0, 0, 0.6) !important;
}

.nav-prev {
  left: 16px;
}

.nav-next {
  right: 16px;
}

/* Progress Bar */
.progress-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
}

.progress-fill {
  height: 100%;
  background: var(--color-primary);
  transition: width 0.1s linear;
}

/* Grid View */
.grid-view {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 80px 20px;
  cursor: pointer;
}

.grid-container {
  display: grid;
  /* grid-template-columns and grid-template-rows set via :style binding */
  gap: 12px;
  width: 100%;
  height: 100%;
  max-width: calc(100vw - 160px);
  max-height: calc(100vh - 80px);
}

.grid-item {
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}

.grid-image {
  width: 100%;
  height: 100%;
}

.grid-year-badge {
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 4px 8px;
  font-family: var(--font-heading);
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 1px;
  border-radius: 4px;
}

/* No Images */
.no-images {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: white;
  text-align: center;
  padding: 24px;
}

.no-images h2 {
  margin: 16px 0 8px;
  font-family: var(--font-heading);
}

.no-images p {
  opacity: 0.7;
  margin-bottom: 24px;
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* Mobile adjustments */
@media (max-width: 600px) {
  .slideshow-controls {
    padding: 12px 16px;
  }

  .controls-info {
    font-size: 0.9rem;
    gap: 8px;
  }

  .year-badge {
    bottom: 24px;
    padding: 6px 16px;
    font-size: 1.2rem;
  }

  .nav-arrow {
    display: none;
  }

  .grid-view {
    padding: 60px 12px 12px;
  }

  .grid-container {
    gap: 6px;
  }

  .grid-year-badge {
    font-size: 0.7rem;
    padding: 2px 6px;
  }
}
</style>

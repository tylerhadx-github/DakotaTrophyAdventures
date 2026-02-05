<template>
  <div class="slideshow-builder-page">
    <!-- Page Header -->
    <section class="page-header">
      <v-container>
        <h1 class="page-title text-center">Slideshow Builder</h1>
        <p class="page-subtitle text-center">
          Create a custom slideshow from our hunting gallery
        </p>
      </v-container>
    </section>

    <v-container>
      <v-card class="builder-card" flat>
        <v-card-text>
          <!-- Year Selection -->
          <div class="section-block">
            <h3 class="section-label">Select Years</h3>
            <div class="year-presets">
              <v-btn
                v-for="preset in yearPresets"
                :key="preset.label"
                :outlined="selectedPreset !== preset.value"
                :color="selectedPreset === preset.value ? 'primary' : ''"
                class="preset-btn"
                @click="selectYearPreset(preset.value)"
              >
                {{ preset.label }}
              </v-btn>
            </div>

            <!-- Custom Year Range -->
            <div v-if="selectedPreset === 'custom'" class="custom-years mt-4">
              <v-row>
                <v-col cols="6">
                  <v-select
                    v-model="customYearFrom"
                    :items="availableYears"
                    label="From Year"
                    outlined
                    dense
                  ></v-select>
                </v-col>
                <v-col cols="6">
                  <v-select
                    v-model="customYearTo"
                    :items="availableYears"
                    label="To Year"
                    outlined
                    dense
                  ></v-select>
                </v-col>
              </v-row>
            </div>

            <div class="selected-years mt-2" v-if="selectedYears.length">
              <span class="years-label">Selected: </span>
              <span class="years-value">{{ selectedYears.join(', ') }}</span>
            </div>
          </div>

          <!-- Species Selection -->
          <div class="section-block">
            <h3 class="section-label">Select Species</h3>
            <v-row>
              <v-col cols="6" sm="4" v-for="species in speciesOptions" :key="species.id">
                <v-checkbox
                  v-model="selectedSpecies"
                  :value="species.id"
                  :label="species.name"
                  hide-details
                  class="species-checkbox"
                ></v-checkbox>
              </v-col>
            </v-row>
            <div class="mt-2">
              <v-btn text small color="primary" @click="selectAllSpecies">Select All</v-btn>
              <v-btn text small @click="clearSpecies">Clear</v-btn>
            </div>
          </div>

          <!-- Timer Setting -->
          <div class="section-block">
            <h3 class="section-label">Timer (seconds per image)</h3>
            <v-btn-toggle v-model="timer" mandatory class="timer-toggle">
              <v-btn :value="5">5s</v-btn>
              <v-btn :value="10">10s</v-btn>
              <v-btn :value="30">30s</v-btn>
              <v-btn :value="60">60s</v-btn>
            </v-btn-toggle>
          </div>

          <!-- Display Mode -->
          <div class="section-block">
            <h3 class="section-label">Display Mode</h3>
            <v-btn-toggle v-model="displayMode" mandatory class="mode-toggle">
              <v-btn value="single">
                <v-icon left>mdi-image</v-icon>
                Single
              </v-btn>
              <v-btn value="grid">
                <v-icon left>mdi-view-grid</v-icon>
                Grid
              </v-btn>
            </v-btn-toggle>
          </div>

          <!-- Grid Size (only shown when grid mode selected) -->
          <div v-if="displayMode === 'grid'" class="section-block">
            <h3 class="section-label">Grid Layout</h3>
            <v-btn-toggle v-model="gridSize" mandatory class="grid-toggle">
              <v-btn
                v-for="option in gridOptions"
                :key="option.value"
                :value="option.value"
              >
                <v-icon left small>{{ option.icon }}</v-icon>
                {{ option.label }}
              </v-btn>
            </v-btn-toggle>
            <p class="grid-hint mt-2">{{ gridSizeHint }}</p>
          </div>

          <!-- Image Count Preview -->
          <div class="section-block preview-block">
            <div class="image-count">
              <v-icon color="primary" class="mr-2">mdi-image-multiple</v-icon>
              <span>{{ filteredImageCount }} images match your selection</span>
            </div>
          </div>

          <!-- Launch Button -->
          <div class="launch-section">
            <v-btn
              class="cta-button"
              x-large
              :disabled="!canLaunch"
              @click="launchSlideshow"
            >
              <v-icon left>mdi-play</v-icon>
              Launch Slideshow
            </v-btn>
            <p v-if="!canLaunch" class="warning-text mt-2">
              Please select at least one year and one species
            </p>
          </div>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { AllImages } from "@/assets/AllImages.js";

export default {
  name: "SlideshowBuilder",

  data() {
    return {
      selectedPreset: "last3",
      customYearFrom: 2023,
      customYearTo: 2025,
      selectedSpecies: [1, 2, 3, 4], // Default: all main hunting species
      timer: 10,
      displayMode: "single",
      gridSize: 9,
      yearPresets: [
        { label: "Last Year", value: "last1" },
        { label: "Last 3 Years", value: "last3" },
        { label: "Last 5 Years", value: "last5" },
        { label: "All Years", value: "all" },
        { label: "Custom", value: "custom" },
      ],
      speciesOptions: [
        { id: 1, name: "Mule Deer" },
        { id: 2, name: "Whitetail" },
        { id: 3, name: "Antelope" },
        { id: 4, name: "Turkey" },
        { id: 11, name: "Predator" },
      ],
      gridOptions: [
        { label: "2×2", value: 4, icon: "mdi-grid", cols: 2, rows: 2 },
        { label: "2×3", value: 6, icon: "mdi-grid", cols: 3, rows: 2 },
        { label: "3×3", value: 9, icon: "mdi-view-grid", cols: 3, rows: 3 },
        { label: "3×4", value: 12, icon: "mdi-view-grid", cols: 4, rows: 3 },
        { label: "4×4", value: 16, icon: "mdi-view-comfy", cols: 4, rows: 4 },
      ],
    };
  },

  computed: {
    availableYears() {
      // Extract unique years from all images
      const years = new Set();
      AllImages.forEach((img) => {
        const year = this.extractYear(img.url);
        if (year) years.add(parseInt(year));
      });
      return Array.from(years).sort((a, b) => b - a);
    },

    latestYear() {
      // Get the highest year available in the images
      return this.availableYears.length > 0 ? this.availableYears[0] : new Date().getFullYear();
    },

    selectedYears() {
      const latestYear = this.latestYear;
      switch (this.selectedPreset) {
        case "last1":
          return [latestYear];
        case "last3":
          return [latestYear, latestYear - 1, latestYear - 2].filter(
            (y) => this.availableYears.includes(y)
          );
        case "last5":
          return [
            latestYear,
            latestYear - 1,
            latestYear - 2,
            latestYear - 3,
            latestYear - 4,
          ].filter((y) => this.availableYears.includes(y));
        case "all":
          return this.availableYears;
        case "custom":
          return this.availableYears.filter(
            (y) => y >= this.customYearFrom && y <= this.customYearTo
          );
        default:
          return [];
      }
    },

    filteredImageCount() {
      return AllImages.filter((img) => {
        const year = parseInt(this.extractYear(img.url));
        const matchesYear = this.selectedYears.includes(year);
        const matchesSpecies = this.selectedSpecies.includes(img.imageGalleryId);
        return matchesYear && matchesSpecies;
      }).length;
    },

    canLaunch() {
      return this.selectedYears.length > 0 && this.selectedSpecies.length > 0 && this.filteredImageCount > 0;
    },

    gridSizeHint() {
      const option = this.gridOptions.find((o) => o.value === this.gridSize);
      if (!option) return "";
      const pagesNeeded = Math.ceil(this.filteredImageCount / this.gridSize);
      return `${option.cols} columns × ${option.rows} rows • ${pagesNeeded} pages of photos`;
    },
  },

  created() {
    // Initialize custom year range based on actual available years
    if (this.availableYears.length > 0) {
      this.customYearTo = this.latestYear;
      this.customYearFrom = this.latestYear - 2;
    }
  },

  methods: {
    extractYear(url) {
      const match = url.match(/\/(\d{4})\//);
      return match ? match[1] : null;
    },

    selectYearPreset(preset) {
      this.selectedPreset = preset;
    },

    selectAllSpecies() {
      this.selectedSpecies = this.speciesOptions.map((s) => s.id);
    },

    clearSpecies() {
      this.selectedSpecies = [];
    },

    launchSlideshow() {
      const params = new URLSearchParams();
      params.set("years", this.selectedYears.join(","));
      params.set("species", this.selectedSpecies.join(","));
      params.set("timer", this.timer);
      params.set("mode", this.displayMode);
      if (this.displayMode === "grid") {
        params.set("gridSize", this.gridSize);
      }

      this.$router.push(`/Slideshow?${params.toString()}`);
    },
  },
};
</script>

<style scoped>
.slideshow-builder-page {
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

/* Builder Card */
.builder-card {
  max-width: 800px;
  margin: 0 auto 60px;
  padding: 32px;
  background: white;
  border-radius: 12px;
}

/* Section blocks */
.section-block {
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.section-block:last-of-type {
  border-bottom: none;
}

.section-label {
  font-family: var(--font-heading) !important;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-text);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 16px;
}

/* Year presets */
.year-presets {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.preset-btn {
  font-family: var(--font-heading) !important;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.selected-years {
  font-size: 0.9rem;
  color: var(--color-text);
  opacity: 0.7;
}

.years-label {
  font-weight: 600;
}

/* Species checkboxes */
.species-checkbox {
  margin-top: 0;
  padding-top: 0;
}

/* Timer and mode toggles */
.timer-toggle,
.mode-toggle {
  flex-wrap: wrap;
}

.timer-toggle .v-btn,
.mode-toggle .v-btn,
.grid-toggle .v-btn {
  font-family: var(--font-heading) !important;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Grid toggle specific */
.grid-toggle {
  flex-wrap: wrap;
}

.grid-hint {
  font-size: 0.85rem;
  color: var(--color-text);
  opacity: 0.7;
}

/* Preview block */
.preview-block {
  background: rgba(74, 103, 65, 0.05);
  padding: 16px;
  border-radius: 8px;
  border: none;
}

.image-count {
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: var(--color-text);
}

/* Launch section */
.launch-section {
  text-align: center;
  padding-top: 16px;
}

.warning-text {
  font-size: 0.9rem;
  color: #b71c1c;
}

/* Mobile adjustments */
@media (max-width: 600px) {
  .page-title {
    font-size: 1.8rem;
    letter-spacing: 2px;
  }

  .page-subtitle {
    font-size: 1rem;
    padding: 0 16px;
  }

  .builder-card {
    padding: 24px 16px;
    margin: 0 16px 40px;
  }

  .year-presets {
    flex-direction: column;
  }

  .preset-btn {
    width: 100%;
  }

  .timer-toggle,
  .mode-toggle {
    width: 100%;
  }

  .timer-toggle .v-btn,
  .mode-toggle .v-btn {
    flex: 1;
  }
}
</style>

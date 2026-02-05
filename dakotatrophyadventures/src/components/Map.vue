<template>
  <div class="map-page">
    <!-- Page Header -->
    <section class="page-header">
      <v-container>
        <h1 class="page-title text-center">Location & Directions</h1>
        <p class="page-subtitle text-center">
          Find your way to Dakota Trophy Adventures in Western South Dakota
        </p>
      </v-container>
    </section>

    <!-- Directions Card -->
    <v-container>
      <v-card class="directions-card" flat>
        <v-card-title class="directions-title">
          <v-icon color="primary" class="mr-2">mdi-directions</v-icon>
          Driving Instructions
        </v-card-title>
        <v-card-text class="directions-content">
          <ul class="directions-list">
            <li>
              <strong>From the East on I-90:</strong> Take exit 98 at Wasta and go North on the Elm Springs Road 12.5 miles. Take a right on Whitetail Lane and it is 5 miles to the camp.
            </li>
            <li>
              <strong>From the West on I-90:</strong> Take exit 90 at Wicksville and go North (left) on Wicksville Road. At the 4-way, take a right on Angell Road (the map below says Argyle). At the T, take a left on Elm Springs Road. In approximately 2 miles take a right on Whitetail Lane and it is 5 miles to camp.
            </li>
            <li class="warning-note">
              <v-icon small color="warning" class="mr-1">mdi-alert</v-icon>
              <strong>Important:</strong> This is a private drive and inclement weather may be a problem so please call ahead and we may have to give further instructions or meet you at the main road. <strong>Do NOT follow your GPS</strong>, it will lead you incorrectly. If you have questions on how to get here, please call us!
            </li>
          </ul>
        </v-card-text>
      </v-card>

      <!-- Map Container -->
      <div class="map-container">
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1OX3JifcNxTbSw9xHQQB8CSKdoTxoVgPW"
          class="map-iframe"
          frameborder="0"
          allowfullscreen
          loading="lazy"
          title="Dakota Trophy Adventures Location Map"
        ></iframe>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Map",
};
</script>

<style scoped>
.map-page {
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

/* Directions Card */
.directions-card {
  max-width: 900px;
  margin: 0 auto 32px;
  padding: 24px;
  background: white;
  border-radius: 12px;
}

.directions-title {
  font-family: var(--font-heading) !important;
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--color-text);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.directions-content {
  padding-top: 0;
}

.directions-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.directions-list li {
  padding: 16px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  line-height: 1.7;
  color: var(--color-text);
}

.directions-list li:last-child {
  border-bottom: none;
}

.warning-note {
  background: rgba(255, 193, 7, 0.1);
  padding: 16px !important;
  border-radius: 8px;
  margin-top: 8px;
}

/* Map Container */
.map-container {
  max-width: 900px;
  margin: 0 auto 60px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.map-iframe {
  width: 100%;
  height: 500px;
  display: block;
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

  .directions-card {
    margin: 0 0 24px;
    padding: 16px;
  }

  .directions-title {
    font-size: 1.1rem;
  }

  .directions-list li {
    padding: 12px 0;
    font-size: 0.95rem;
  }

  .map-container {
    margin: 0 0 40px;
    border-radius: 8px;
  }

  .map-iframe {
    height: 350px;
  }
}
</style>

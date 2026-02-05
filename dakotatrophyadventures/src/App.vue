<template>
  <v-app :style="{ background: 'var(--color-background)' }">
    <!-- Navigation Bar -->
    <v-app-bar
      app
      :class="['app-nav', { 'nav-scrolled': isScrolled }]"
      :color="isScrolled ? 'white' : 'transparent'"
      :dark="!isScrolled"
      :elevation="isScrolled ? 2 : 0"
      prominent
      shrink-on-scroll
      src="/huntingbackground.jpg"
      scroll-target="#scrolling-techniques-3"
      :scroll-threshold="isMobile ? 100 : 200"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          :gradient="'to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.2)'"
        >
        </v-img>
      </template>

      <!-- Mobile hamburger menu -->
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="sidebar = !sidebar"
        aria-label="Open navigation menu"
      ></v-app-bar-nav-icon>

      <!-- Spacer: always on mobile/tablet, hidden on desktop -->
      <v-spacer class="hidden-md-and-up"></v-spacer>

      <!-- Spacer: only on desktop to center logo -->
      <v-spacer class="hidden-sm-and-down"></v-spacer>

      <!-- Logo (centered on desktop, right on mobile/tablet) -->
      <v-img
        contain
        height="80px"
        max-width="200px"
        src="/img/logo.png"
        @click="goHome()"
        class="logo-img"
        alt="Dakota Trophy Adventures - Home"
        role="button"
        aria-label="Go to homepage"
      ></v-img>

      <!-- Spacer: only on desktop to center logo -->
      <v-spacer class="hidden-sm-and-down"></v-spacer>

      <!-- Spacer: on mobile/tablet for right margin -->
      <div class="hidden-md-and-up mr-4"></div>

      <!-- Desktop Navigation -->
      <template v-slot:extension>
        <div class="nav-container hidden-sm-and-down">
          <v-btn
            v-for="item in navItems"
            :key="item.title"
            :to="{ name: item.path }"
            text
            class="nav-link nav-link-dark"
          >
            {{ item.title }}
          </v-btn>

          <!-- Book Now CTA -->
          <v-btn
            :to="{ name: 'Contact' }"
            class="cta-button ml-4"
            elevation="0"
          >
            Book Now
          </v-btn>
        </div>
      </template>
    </v-app-bar>

    <!-- Mobile Navigation Drawer -->
    <v-navigation-drawer
      v-model="sidebar"
      app
      temporary
      class="mobile-drawer"
    >
      <v-list nav class="py-4">
        <v-list-item class="mb-4">
          <v-img
            src="/img/logo.png"
            max-height="60"
            contain
            alt="Dakota Trophy Adventures"
          ></v-img>
        </v-list-item>

        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :to="{ name: item.path }"
          class="mobile-nav-item"
        >
          <v-list-item-content>
            <v-list-item-title class="mobile-nav-text">
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item class="mt-4 px-4">
          <v-btn
            :to="{ name: 'Contact' }"
            block
            class="cta-button"
            elevation="0"
          >
            Book Your Hunt
          </v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto main-content"
      :style="{ background: 'var(--color-background)' }"
    >
      <v-main>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </v-main>

      <!-- Site Footer -->
      <footer class="site-footer">
        <v-container>
          <v-row>
            <v-col cols="12" md="4" class="footer-section">
              <h4 class="footer-title">Contact Us</h4>
              <p>
                <v-icon small class="mr-2">mdi-phone</v-icon>
                <a href="tel:+16054411685" class="footer-contact-link">(605) 441-1685</a>
              </p>
              <p>
                <v-icon small class="mr-2">mdi-email</v-icon>
                <a href="mailto:huntdakotaTrophy@gmail.com" class="footer-contact-link">huntdakotaTrophy@gmail.com</a>
              </p>
              <p>
                <v-icon small class="mr-2">mdi-map-marker</v-icon>
                <a href="https://maps.google.com/?q=21858+Mule+Deer+Drive,+Wasta,+SD+57791" target="_blank" rel="noopener" class="footer-contact-link">21858 Mule Deer Drive, Wasta, SD</a>
              </p>
            </v-col>
            <v-col cols="12" md="4" class="footer-section">
              <h4 class="footer-title">Hunting</h4>
              <router-link to="/Hunting/RifleDeer" class="footer-link">Rifle Deer</router-link>
              <router-link to="/Hunting/Turkey" class="footer-link">Turkey</router-link>
              <router-link to="/Hunting/Antelope" class="footer-link">Antelope</router-link>
              <router-link to="/Hunting/UplandGame" class="footer-link">Upland Game</router-link>
            </v-col>
            <v-col cols="12" md="4" class="footer-section">
              <h4 class="footer-title">Connect</h4>
              <div class="social-links">
                <v-btn icon @click="toFB" aria-label="Facebook">
                  <v-icon>mdi-facebook</v-icon>
                </v-btn>
                <v-btn icon @click="toYT" aria-label="YouTube">
                  <v-icon>mdi-youtube</v-icon>
                </v-btn>
              </div>
            </v-col>
          </v-row>
          <v-divider class="my-4"></v-divider>
          <v-row>
            <v-col class="text-center footer-copyright">
              <p>&copy; {{ currentYear }} Dakota Trophy Adventures. All rights reserved.</p>
              <p class="tagline">Western South Dakota's Finest Hunting</p>
            </v-col>
          </v-row>
        </v-container>
      </footer>
    </v-sheet>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: function () {
    return {
      ApplicationName: "Dakota Trophy Adventures",
      isScrolled: false,
      sidebar: false,
      windowWidth: window.innerWidth,
      menuItems: [
        { title: "Home", path: "Home", icon: false },
        { title: "Gallery", path: "Gallerys", icon: false },
        { title: "Hunting", path: "Hunting", icon: false },
        { title: "Taxidermy", path: "Taxidermy", icon: false },
        { title: "Location", path: "Map", icon: false },
        { title: "Reviews", path: "Reviews", icon: false },
        { title: "Trask Ranch", path: "Ranch", icon: false },
        { title: "Contact", path: "Contact", icon: false },
      ],
    };
  },

  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
    navItems() {
      // Exclude Contact from nav items since we have Book Now CTA
      return this.menuItems.filter(item => item.path !== 'Contact');
    },
    isMobile() {
      return this.windowWidth < 960;
    },
  },

  methods: {
    goHome() {
      this.$router.push("Home");
    },
    toFB() {
      window.open(
        "https://www.facebook.com/Dakota-Trophy-Adventures-Dakota-Trophy-Taxidermy-314633108549681",
        "_blank"
      );
    },
    toYT() {
      window.open("https://www.youtube.com/channel/UCxpH3AAQUSIrdyisgcIXVlw", "_blank");
    },
    handleScroll() {
      const scrollContainer = document.getElementById('scrolling-techniques-3');
      if (scrollContainer) {
        this.isScrolled = scrollContainer.scrollTop > 100;
      }
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
  },

  mounted() {
    const scrollContainer = document.getElementById('scrolling-techniques-3');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', this.handleScroll);
    }
    window.addEventListener('resize', this.handleResize);
  },

  beforeDestroy() {
    const scrollContainer = document.getElementById('scrolling-techniques-3');
    if (scrollContainer) {
      scrollContainer.removeEventListener('scroll', this.handleScroll);
    }
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>

<style>
/* Navigation Styles */
.app-nav {
  transition: all 0.3s ease !important;
}

.nav-scrolled {
  background: white !important;
}

.nav-container {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  padding: 0 16px;
}

.nav-link {
  font-family: var(--font-heading) !important;
  font-size: 14px !important;
  font-weight: 500 !important;
  letter-spacing: 1px !important;
  text-transform: uppercase !important;
  margin: 0 4px !important;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 8px;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: var(--color-secondary);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover::after {
  width: 80%;
}

.nav-link-dark {
  color: white !important;
}

.nav-link-light {
  color: var(--color-text) !important;
}

/* Logo */
.logo-img {
  cursor: pointer;
  transition: transform 0.3s ease;
}

.logo-img:hover {
  transform: scale(1.05);
}

/* Mobile Drawer */
.mobile-drawer {
  background: var(--color-background) !important;
}

.mobile-nav-item {
  min-height: 56px !important;
}

.mobile-nav-text {
  font-family: var(--font-heading) !important;
  font-size: 18px !important;
  font-weight: 500 !important;
  letter-spacing: 1px !important;
  text-transform: uppercase !important;
  color: var(--color-text) !important;
}

/* Main Content */
.main-content {
  max-height: 100vh;
}

/* Page Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* Footer Styles */
.site-footer {
  background: var(--color-text);
  color: white;
  padding: 48px 0 24px;
  margin-top: 64px;
}

.footer-title {
  font-family: var(--font-heading) !important;
  font-size: 1.2rem !important;
  font-weight: 600 !important;
  text-transform: uppercase !important;
  letter-spacing: 2px !important;
  margin-bottom: 16px !important;
  color: var(--color-secondary) !important;
}

.footer-section p {
  margin-bottom: 8px;
  font-size: 14px;
  opacity: 0.9;
}

.footer-section p .v-icon {
  color: white !important;
}

.footer-link,
.footer-link:visited {
  display: block;
  color: white !important;
  text-decoration: none;
  margin-bottom: 8px;
  font-size: 14px;
  opacity: 0.9;
  transition: opacity 0.3s ease, color 0.3s ease;
}

.footer-link:hover {
  opacity: 1;
  color: var(--color-secondary) !important;
}

.footer-contact-link,
.footer-contact-link:visited {
  color: white !important;
  text-decoration: none;
  opacity: 0.9;
  transition: opacity 0.3s ease, color 0.3s ease;
}

.footer-contact-link:hover {
  opacity: 1;
  color: var(--color-secondary) !important;
}

.social-links .v-btn {
  color: white !important;
  margin-right: 8px;
}

.social-links .v-btn:hover {
  color: var(--color-secondary) !important;
}

.footer-copyright {
  font-size: 14px;
  opacity: 0.7;
}

.footer-copyright .tagline {
  font-family: var(--font-heading);
  font-style: italic;
  opacity: 0.5;
  margin-top: 4px;
}

/* Mobile Footer */
@media (max-width: 600px) {
  .footer-section {
    text-align: center;
    margin-bottom: 24px;
  }

  .social-links {
    justify-content: center;
    display: flex;
  }
}

/* Logo positioning */
.v-image__image--contain {
  background-position: center right !important;
}
</style>

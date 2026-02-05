<template>
  <div class="ranch-page">
    <!-- Page Header -->
    <section class="page-header">
      <v-container>
        <h1 class="page-title text-center">The Trask Ranch</h1>
        <p class="page-subtitle text-center">
          Three generations of ranching and hunting in Western South Dakota
        </p>
      </v-container>
    </section>

    <!-- Ranch Overview -->
    <section class="ranch-overview">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="6">
            <div class="overview-content">
              <h2 class="section-title">Spanish Five Ranch</h2>
              <p class="overview-text">
                The Spanish Five Ranch in Wasta, South Dakota, is owned and operated by
                Tom and Sheila Trask along with their children, Mark, Mick, and Tomilyn.
                Encompassing nearly <strong>20,000 acres</strong> along the Cheyenne and Elk Creek
                tributaries, the ranch serves as the foundation for Dakota Trophy Adventures.
              </p>
              <p class="overview-text">
                From trophy Mule Deer and Whitetail to Antelope and Merriam turkeys, as well as
                fossils, fishing, and predator control thermal hunts — Dakota Trophy Adventures
                offers diverse hunting experiences rooted in generations of land stewardship.
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="stats-grid">
              <div class="stat-card">
                <v-icon class="stat-icon" x-large>mdi-terrain</v-icon>
                <span class="stat-number">20,000</span>
                <span class="stat-label">Acres</span>
              </div>
              <div class="stat-card">
                <v-icon class="stat-icon" x-large>mdi-calendar-clock</v-icon>
                <span class="stat-number">1965</span>
                <span class="stat-label">Est.</span>
              </div>
              <div class="stat-card">
                <v-icon class="stat-icon" x-large>mdi-account-group</v-icon>
                <span class="stat-number">3</span>
                <span class="stat-label">Generations</span>
              </div>
              <div class="stat-card">
                <v-icon class="stat-icon" x-large>mdi-heart</v-icon>
                <span class="stat-number">Family</span>
                <span class="stat-label">Operated</span>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Our Story -->
    <section class="story-section">
      <v-container>
        <div class="section-header text-center">
          <v-icon class="section-icon" x-large>mdi-book-open-page-variant</v-icon>
          <h2 class="section-title">Our Story</h2>
        </div>

        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-marker">
              <v-icon>mdi-home-variant</v-icon>
            </div>
            <div class="timeline-content">
              <h3 class="timeline-title">The Beginning</h3>
              <p>
                The Trask Family's connection to this land runs deep. Tom's grandfather, Mack Trask,
                homesteaded at the forks of the Cheyenne and Belle Fourche rivers, just north of our
                current location. Tom's father, Mark Trask, played a pivotal role in establishing a
                commercial hunting operation in 1965, complementing their ranching activities.
              </p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker">
              <v-icon>mdi-school</v-icon>
            </div>
            <div class="timeline-content">
              <h3 class="timeline-title">Growing Up on the Ranch</h3>
              <p>
                Tom Trask was born and raised in the Elm Springs area. Growing up in a family deeply
                involved in ranching and hunting, Tom spent winters trapping with his father and summers
                hunting fossils with his mother. His passion for the ranching and hunting lifestyle
                became the foundation of everything we do today.
              </p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker">
              <v-icon>mdi-heart</v-icon>
            </div>
            <div class="timeline-content">
              <h3 class="timeline-title">A Partnership Forms</h3>
              <p>
                In 1986, Tom married Shelia McDaniel. Shelia's roots are in northeast Philip, SD,
                where she grew up on a cattle and sheep ranch. Together, they have continued to ranch
                and expand both the ranching and outfitting businesses. In 1987, Tom assumed the role
                of booking for Dakota Trophy and has since expanded services to include turkey hunts,
                antelope hunts, and archery hunting.
              </p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker">
              <v-icon>mdi-account-multiple</v-icon>
            </div>
            <div class="timeline-content">
              <h3 class="timeline-title">The Next Generation</h3>
              <p>
                Tom and Shelia are proud parents of three children: Mark (born 1989), Mick (1991),
                and Tomilyn (1993). All three attended the local rural school and graduated from
                Philip High School. Today, they're all back home — actively involved in ranching,
                hunting, guiding, cooking, and taxidermy. The family has also been blessed with two
                grandchildren, Levi and Annie.
              </p>
            </div>
          </div>
        </div>
      </v-container>
    </section>

    <!-- Meet the Family -->
    <section class="family-section">
      <v-container>
        <div class="section-header text-center">
          <v-icon class="section-icon" x-large>mdi-account-heart</v-icon>
          <h2 class="section-title">Meet the Family</h2>
          <p class="section-description">
            When you hunt with us, you become part of our family
          </p>
        </div>

        <v-row class="family-grid">
          <v-col cols="12" sm="6" md="4" lg="2" v-for="member in familyMembers" :key="member.name">
            <div class="family-card">
              <div class="family-avatar" :style="{ background: member.color }">
                <v-icon x-large>{{ member.icon }}</v-icon>
              </div>
              <h3 class="family-name">{{ member.name }}</h3>
              <p class="family-role">{{ member.role }}</p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- What We Do -->
    <section class="services-section">
      <v-container>
        <div class="section-header text-center">
          <v-icon class="section-icon" x-large>mdi-briefcase</v-icon>
          <h2 class="section-title">What We Do</h2>
        </div>

        <v-row>
          <v-col cols="12" md="4" v-for="service in services" :key="service.title">
            <v-card class="service-card hover-lift" flat>
              <div class="service-header" :style="{ background: service.gradient }">
                <v-icon class="service-icon" x-large>{{ service.icon }}</v-icon>
              </div>
              <v-card-text class="service-content">
                <h3 class="service-title">{{ service.title }}</h3>
                <p class="service-description">{{ service.description }}</p>
                <v-btn
                  v-if="service.link"
                  :to="service.link"
                  outlined
                  small
                  class="service-btn"
                >
                  Learn More
                  <v-icon right small>mdi-arrow-right</v-icon>
                </v-btn>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Worldwide Experience -->
    <section class="experience-section">
      <v-container>
        <v-card class="experience-card" flat>
          <v-row align="center">
            <v-col cols="12" md="7">
              <div class="experience-content">
                <h2 class="experience-title">Worldwide Hunting Experience</h2>
                <p>
                  We share a passion for hunting and make the most of every opportunity whenever
                  time and finances permit. Our hunting adventures have taken us to numerous provinces
                  in Canada, across Alaska, and through many states in the lower 48.
                </p>
                <p>
                  We've established valuable connections with outfitters in Africa, New Zealand, and
                  Australia. If you're considering a hunting expedition, we're here to help, advise,
                  or assist you in booking with a quality and reliable outfitter.
                </p>
                <p class="experience-note">
                  <v-icon color="warning" class="mr-2">mdi-star</v-icon>
                  <strong>We only recommend outfitters we have personally hunted with.</strong>
                </p>
                <v-btn
                  to="/Reviews"
                  outlined
                  class="experience-btn mt-4"
                >
                  See Our Recommendations
                  <v-icon right small>mdi-arrow-right</v-icon>
                </v-btn>
              </div>
            </v-col>
            <v-col cols="12" md="5">
              <div class="location-tags">
                <span class="location-tag" v-for="location in locations" :key="location">
                  <v-icon small class="mr-1">mdi-map-marker</v-icon>
                  {{ location }}
                </span>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <v-container>
        <div class="cta-card text-center">
          <h2 class="cta-title">Come Visit Our Ranch</h2>
          <p class="cta-text">
            For discussions about hunting, cattle, or horses, please feel free to contact us.
            We'd love to have a conversation with you!
          </p>
          <v-btn
            to="/Contact"
            class="cta-button"
            x-large
            elevation="0"
          >
            Get In Touch
          </v-btn>
        </div>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {
  name: "Ranch",
  data: function () {
    return {
      familyMembers: [
        { name: "Tom", role: "Founder & Guide", icon: "mdi-account-cowboy-hat", color: "linear-gradient(135deg, #4A6741 0%, #3a5231 100%)" },
        { name: "Shelia", role: "Operations", icon: "mdi-account", color: "linear-gradient(135deg, #8B6914 0%, #6d5310 100%)" },
        { name: "Mark", role: "Guide & Taxidermist", icon: "mdi-account", color: "linear-gradient(135deg, #5D4E37 0%, #4a3e2c 100%)" },
        { name: "Mick", role: "Guide & Taxidermist", icon: "mdi-account", color: "linear-gradient(135deg, #6B5B45 0%, #564a38 100%)" },
        { name: "Tomilyn", role: "Booking & Admin", icon: "mdi-account", color: "linear-gradient(135deg, #7D6E58 0%, #645847 100%)" },
        { name: "Levi & Annie", role: "Next Generation", icon: "mdi-account-multiple", color: "linear-gradient(135deg, #8B7355 0%, #705c44 100%)" },
      ],
      services: [
        {
          title: "Guided Hunting",
          icon: "mdi-crosshairs",
          gradient: "linear-gradient(135deg, #4A6741 0%, #3a5231 100%)",
          description: "Trophy Mule Deer, Whitetail, Antelope, Merriam Turkeys, and more across 140,000 acres of prime hunting land.",
          link: "/Hunting"
        },
        {
          title: "Taxidermy Services",
          icon: "mdi-trophy",
          gradient: "linear-gradient(135deg, #8B6914 0%, #6d5310 100%)",
          description: "Mark and Mick trained under Tom Matuska at the Northwest Iowa School of Taxidermy. Quality work during winter months.",
          link: "/Taxidermy"
        },
        {
          title: "Ranch Life",
          icon: "mdi-horse-variant",
          gradient: "linear-gradient(135deg, #5D4E37 0%, #4a3e2c 100%)",
          description: "Beyond hunting, we raise cattle and maintain a select group of registered quarter horses. Come experience authentic ranch life.",
          link: null
        }
      ],
      locations: [
        "Alaska", "British Columbia", "Yukon Territory", "Alberta",
        "Saskatchewan", "Montana", "Wyoming", "Colorado",
        "South Africa", "New Zealand", "Australia"
      ]
    };
  },
};
</script>

<style scoped>
.ranch-page {
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

/* Ranch Overview */
.ranch-overview {
  padding: 0 0 80px;
}

.overview-content {
  padding-right: 40px;
}

.overview-text {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--color-text);
  margin-bottom: 16px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.stat-card {
  background: white;
  border-radius: 12px;
  padding: 24px 16px;
  text-align: center;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.stat-icon {
  color: var(--color-primary) !important;
  margin-bottom: 8px;
}

.stat-number {
  display: block;
  font-family: var(--font-heading) !important;
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--color-text);
}

.stat-label {
  display: block;
  font-size: 0.85rem;
  color: var(--color-text);
  opacity: 0.7;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Story Section */
.story-section {
  padding: 80px 0;
  background: white;
}

.timeline {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 24px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--color-primary);
  opacity: 0.3;
}

.timeline-item {
  display: flex;
  gap: 24px;
  margin-bottom: 40px;
  position: relative;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-marker {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  background: var(--color-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.timeline-marker .v-icon {
  color: white !important;
  font-size: 24px !important;
}

.timeline-content {
  flex: 1;
  background: #f9f7f4;
  padding: 24px;
  border-radius: 12px;
}

.timeline-title {
  font-family: var(--font-heading) !important;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 12px;
}

.timeline-content p {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--color-text);
  margin: 0;
}

/* Family Section */
.family-section {
  padding: 80px 0;
}

.family-grid {
  margin-top: 24px;
}

.family-card {
  text-align: center;
  padding: 24px 16px;
}

.family-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
}

.family-avatar .v-icon {
  color: white !important;
}

.family-name {
  font-family: var(--font-heading) !important;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 4px;
}

.family-role {
  font-size: 0.85rem;
  color: var(--color-text);
  opacity: 0.7;
}

/* Services Section */
.services-section {
  padding: 80px 0;
  background: white;
}

.service-card {
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  background: #f9f7f4;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card.hover-lift:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
}

.service-header {
  padding: 32px 20px;
  text-align: center;
}

.service-icon {
  color: white !important;
  font-size: 48px !important;
}

.service-content {
  padding: 24px !important;
  text-align: center;
}

.service-title {
  font-family: var(--font-heading) !important;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 12px;
}

.service-description {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--color-text);
  opacity: 0.85;
  margin-bottom: 16px;
}

.service-btn {
  font-family: var(--font-heading) !important;
  text-transform: uppercase !important;
  letter-spacing: 0.5px !important;
  color: var(--color-primary) !important;
  border-color: var(--color-primary) !important;
}

/* Experience Section */
.experience-section {
  padding: 80px 0;
}

.experience-card {
  background: linear-gradient(135deg, var(--color-primary) 0%, #3a5231 100%);
  border-radius: 16px;
  padding: 48px;
}

.experience-content {
  color: white;
}

.experience-title {
  font-family: var(--font-heading) !important;
  font-size: 1.8rem;
  font-weight: 600;
  color: white;
  margin-bottom: 20px;
}

.experience-content p {
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 16px;
  opacity: 0.95;
}

.experience-note {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 12px 16px;
  border-radius: 8px;
  margin-top: 20px !important;
}

.experience-btn {
  color: white !important;
  border-color: white !important;
  font-family: var(--font-heading) !important;
  text-transform: uppercase !important;
  letter-spacing: 1px !important;
}

.location-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}

.location-tag {
  background: rgba(255, 255, 255, 0.15);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
}

/* CTA Section */
.cta-section {
  padding: 80px 0;
  background: white;
}

.cta-card {
  max-width: 600px;
  margin: 0 auto;
}

.cta-title {
  font-family: var(--font-heading) !important;
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 16px;
}

.cta-text {
  font-size: 1.1rem;
  color: var(--color-text);
  opacity: 0.8;
  margin-bottom: 24px;
  line-height: 1.7;
}

/* Mobile Styles */
@media (max-width: 960px) {
  .overview-content {
    padding-right: 0;
    margin-bottom: 32px;
  }

  .experience-card {
    padding: 32px 24px;
  }

  .location-tags {
    margin-top: 32px;
  }

  .timeline::before {
    left: 24px;
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

  .ranch-overview {
    padding: 0 0 48px;
  }

  .stats-grid {
    gap: 12px;
  }

  .stat-card {
    padding: 16px 12px;
  }

  .stat-number {
    font-size: 1.4rem;
  }

  .story-section,
  .family-section,
  .services-section,
  .experience-section,
  .cta-section {
    padding: 48px 0;
  }

  .timeline::before {
    display: none;
  }

  .timeline-item {
    flex-direction: column;
    gap: 16px;
  }

  .timeline-marker {
    width: 40px;
    height: 40px;
  }

  .timeline-marker .v-icon {
    font-size: 20px !important;
  }

  .timeline-content {
    padding: 20px;
  }

  .family-card {
    padding: 16px 8px;
  }

  .family-avatar {
    width: 60px;
    height: 60px;
  }

  .service-card.hover-lift:hover {
    transform: none;
  }

  .service-header {
    padding: 24px 16px;
  }

  .service-icon {
    font-size: 36px !important;
  }

  .experience-card {
    padding: 24px 20px;
  }

  .experience-title {
    font-size: 1.4rem;
  }

  .location-tag {
    padding: 6px 12px;
    font-size: 0.8rem;
  }

  .cta-title {
    font-size: 1.5rem;
  }

  .cta-text {
    font-size: 1rem;
    padding: 0 16px;
  }
}
</style>

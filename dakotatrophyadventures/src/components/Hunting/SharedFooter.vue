<template>
  <div class="shared-footer-wrapper">
    <!-- General Information Card -->
    <v-card class="info-card hover-lift" flat>
      <div class="card-header">
        <v-icon class="header-icon">mdi-information-outline</v-icon>
        <h3 class="card-title">General Information For All Hunts</h3>
      </div>
      <v-card-text class="card-content">
        <div class="info-grid">
          <div class="info-section">
            <h4 class="subsection-title">
              <v-icon small class="mr-2" color="success">mdi-check-circle</v-icon>
              Hunts Include
            </h4>
            <ul class="styled-list">
              <li><strong>Lodging</strong> – Bunkhouse-style accommodations at our base camp. Not a 5-star lodge, but comfortable for hunting camp!</li>
              <li><strong>Meals & Beverages</strong> – Three meals and basic beverages provided daily</li>
              <li><strong>Airport Transportation</strong> – Pickup/drop-off at Rapid City Regional Airport (contact us with flight times)</li>
              <li><strong>Guided Hunting</strong> – Full or semi-guided depending on hunt type. All rifle deer hunts are fully guided!</li>
              <li><strong>Alcoholic Beverages</strong> – Provided within reason. Bring your own for specific preferences</li>
            </ul>
          </div>
          <div class="info-section">
            <h4 class="subsection-title">
              <v-icon small class="mr-2" color="warning">mdi-alert-circle-outline</v-icon>
              Not Included
            </h4>
            <ul class="styled-list">
              <li><strong>Licenses</strong> – We assist with applications, but license cost is your responsibility</li>
              <li><strong>State Taxes</strong> – Current SD sales tax rate is 6%</li>
              <li><strong>Taxidermy</strong> – Available on-site or take your trophy to your own taxidermist</li>
              <li><strong>Meat Processing</strong> – Processing available, or DIY facilities provided</li>
              <li><strong>Shipping</strong> – Most hunters take trophies/meat home; we can help arrange shipping</li>
              <li><strong>Guide Gratuity</strong> – Tips for guides and staff appreciated</li>
              <li><strong>Firearms & Ammo</strong> – Available at reasonable cost with advance notice</li>
            </ul>
          </div>
        </div>
      </v-card-text>
    </v-card>

    <!-- Non Hunters Card -->
    <v-card class="info-card hover-lift" flat>
      <div class="card-header">
        <v-icon class="header-icon">mdi-account-group</v-icon>
        <h3 class="card-title">Non Hunters</h3>
      </div>
      <v-card-text class="card-content">
        <p class="highlight-text">
          <v-icon color="primary" class="mr-2">mdi-heart</v-icon>
          Non-hunters are welcome! Just let us know if you plan on bringing a non-hunting companion as availability may vary. Contact us for current non-hunter pricing.
        </p>
      </v-card-text>
    </v-card>

    <!-- Accommodations Card -->
    <v-card class="info-card hover-lift" flat>
      <div class="card-header">
        <v-icon class="header-icon">mdi-home-group</v-icon>
        <h3 class="card-title">Accommodations</h3>
      </div>
      <v-card-text class="card-content">
        <div class="accommodation-features">
          <div class="feature-item">
            <v-icon color="primary">mdi-bed</v-icon>
            <div>
              <strong>Bunkhouse Cabins</strong>
              <p>Small bunkhouse-style cabins with electric heat or wood stoves. Bedding provided – bring a sleeping bag for extra warmth.</p>
            </div>
          </div>
          <div class="feature-item">
            <v-icon color="primary">mdi-home</v-icon>
            <div>
              <strong>House Lodging</strong>
              <p>Upstairs of Tomilyn's house available. Couples can stay in a spare bedroom or camper for privacy.</p>
            </div>
          </div>
          <div class="feature-item">
            <v-icon color="primary">mdi-shower</v-icon>
            <div>
              <strong>Bathrooms</strong>
              <p>Detached shower house with two complete bathrooms. Towels provided.</p>
            </div>
          </div>
          <div class="feature-item">
            <v-icon color="primary">mdi-silverware-fork-knife</v-icon>
            <div>
              <strong>Dining & Recreation</strong>
              <p>Meals served in attached garage. Pool table available for socializing.</p>
            </div>
          </div>
        </div>
        <p class="note-text">
          <v-icon small class="mr-1">mdi-wrench</v-icon>
          We're updating our accommodations – please let us know of any special needs so we can prepare!
        </p>
      </v-card-text>
    </v-card>

    <!-- Licensing/Tags Card -->
    <v-card class="info-card hover-lift" flat>
      <div class="card-header">
        <v-icon class="header-icon">mdi-card-account-details</v-icon>
        <h3 class="card-title">Licensing & Tags</h3>
      </div>
      <v-card-text class="card-content">
        <p class="intro-text">
          South Dakota uses a lottery draw system with preference points. Points cost $5 (resident) or $10 (nonresident) per drawing. License costs vary by species.
        </p>

        <v-expansion-panels flat class="license-panels">
          <v-expansion-panel>
            <v-expansion-panel-header class="panel-header">
              <div class="panel-title">
                <v-icon color="primary" class="mr-2">mdi-crosshairs</v-icon>
                Rifle Deer
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="panel-content">
              <p>Two separate drawings available:</p>
              <ul class="styled-list compact">
                <li><strong>West River Special Buck</strong> – Private land only, good for any unit west of Missouri River (except Black Hills/reservations)</li>
                <li><strong>West River Deer</strong> – Private or public land, unit specific</li>
              </ul>
              <div class="timeline-info">
                <p><strong>Draw time:</strong> ~2-3 years for mule deer, ~1-2 years for whitetail</p>
                <p><strong>Applications due:</strong> West River Special – mid April | West River Deer – mid June</p>
                <p><strong>Preference points:</strong> Sept 15 – Dec 15</p>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header class="panel-header">
              <div class="panel-title">
                <v-icon color="primary" class="mr-2">mdi-bow-arrow</v-icon>
                Archery Deer
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="panel-content">
              <p>Archery deer tags are <strong>unlimited</strong> for hunters on private land. You still need to apply, but it's practically guaranteed!</p>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header class="panel-header">
              <div class="panel-title">
                <v-icon color="primary" class="mr-2">mdi-turkey</v-icon>
                Turkey
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="panel-content">
              <p>Hard to draw first round – most hunters draw in third round or leftovers.</p>
              <div class="timeline-info">
                <p><strong>Applications due:</strong> Mid February</p>
                <p><strong>Third round:</strong> Mid March</p>
                <p><strong>Preference points:</strong> Purchase by Dec 15 in prior years</p>
              </div>
              <p class="success-note">We've never had a turkey hunter fail to get a license!</p>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header class="panel-header">
              <div class="panel-title">
                <v-icon color="primary" class="mr-2">mdi-run-fast</v-icon>
                Antelope
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="panel-content">
              <p>Hard to draw. Special Antelope drawing available for private land only tags.</p>
              <div class="timeline-info">
                <p><strong>Draw time:</strong> Usually takes a point or two</p>
                <p><strong>Application timeline:</strong> Same as rifle deer</p>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>
    </v-card>

    <!-- FAQ Card -->
    <v-card class="info-card hover-lift" flat>
      <div class="card-header">
        <v-icon class="header-icon">mdi-frequently-asked-questions</v-icon>
        <h3 class="card-title">Frequently Asked Questions</h3>
      </div>
      <v-card-text class="card-content">
        <v-expansion-panels flat class="faq-panels">
          <v-expansion-panel>
            <v-expansion-panel-header class="panel-header">
              <div class="panel-title">How do I book a hunt?</div>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="panel-content">
              <p>A deposit is required upon booking – <strong>you are not booked until a deposit is on file!</strong></p>
              <ul class="styled-list compact">
                <li>Final payment due upon arrival or 30 days prior</li>
                <li>Deposits are nonrefundable</li>
                <li>If you don't draw your license (with proof of application and preference points), we'll refund or roll you forward to next year</li>
              </ul>
              <p class="cta-text">
                <v-icon color="primary" class="mr-1">mdi-phone</v-icon>
                Contact Tomilyn at <a href="tel:+16054411685" class="phone-link">(605) 441-1685</a> to book!
              </p>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header class="panel-header">
              <div class="panel-title">What kind of success can I expect?</div>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="panel-content">
              <p>Unless you're looking for a B&C trophy, you can expect several chances at nice trophy animals.</p>
              <div class="success-stats">
                <div class="stat-item">
                  <span class="stat-number">98-100%</span>
                  <span class="stat-label">Rifle Deer</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">~50%</span>
                  <span class="stat-label">Archery Deer</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">150-200%</span>
                  <span class="stat-label">Turkey</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">100%</span>
                  <span class="stat-label">Antelope</span>
                </div>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header class="panel-header">
              <div class="panel-title">What's the best firearm to bring?</div>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="panel-content">
              <p>Big deer and antelope can be tough – we recommend a <strong>.270 or larger rifle</strong>.</p>
              <p class="emphasis-text">More important than caliber is <strong>accuracy</strong>. Practice with your gun and know exactly where it's shooting. Practice, practice, practice!</p>
              <p>For turkey hunts, bring your favorite shotgun. For archery hunts, bring your bow!</p>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header class="panel-header">
              <div class="panel-title">How do I get a license?</div>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="panel-content">
              <p>We'll send information on how to apply and deadlines. You'll need preference points for multiple years before hunting.</p>
              <div class="warning-box">
                <v-icon color="warning" class="mr-2">mdi-alert</v-icon>
                <div>
                  <strong>Important:</strong> Pay attention to our instructions! Missing preference points can delay a hunt you've had booked for years. We don't have transferable landowner tags – if you don't draw through SDGF&P, you're out of luck.
                </div>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header class="panel-header">
              <div class="panel-title">What is your guarantee?</div>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="panel-content">
              <p class="guarantee-text">
                <v-icon color="primary" class="mr-2">mdi-shield-check</v-icon>
                We guarantee <strong>100% effort</strong> in assisting you to a trophy animal you'll be proud of.
              </p>
              <p>We can't control weather, marksmanship, or luck – but we'll do everything in our power to give you the best hunting experience possible.</p>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  mounted() {
    // Add FAQ structured data
    const scriptTag = document.createElement("script");
    scriptTag.type = "application/ld+json";
    scriptTag.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I book a hunt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To book a hunt, we require a deposit upon booking. You are not booked until a deposit is on file! Final payment is due upon arrival or 30 days prior. Contact Tomilyn at 605-441-1685!"
          }
        },
        {
          "@type": "Question",
          "name": "What kind of success can I expect?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We generally have a 98-100% success rate on rifle deer, around 50% success on archery deer, 150-200% success on turkeys, and have never had an antelope hunter go home without filling their tag."
          }
        },
        {
          "@type": "Question",
          "name": "What's the best firearm to bring?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We recommend a .270 or larger rifle for deer and antelope. More important is accuracy - practice with your gun and know exactly where it's shooting."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get a license?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We will send information on how to apply and deadlines. You will need to acquire preference points for multiple years before the year you plan to hunt. We help you through this process."
          }
        },
        {
          "@type": "Question",
          "name": "What is your guarantee?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We guarantee 100% effort in assisting you to a trophy animal you will be proud of. We can't control weather, marksmanship, or luck."
          }
        }
      ]
    });

    document.head.appendChild(scriptTag);
  },
}
</script>

<style scoped>
/* Prevent horizontal overflow */
.shared-footer-wrapper {
  max-width: 100%;
  overflow-x: hidden;
  padding: 20px 0;
}

/* Card Styling */
.info-card {
  max-width: 900px;
  margin: 0 auto 24px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
}

.info-card.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

/* Card Header */
.card-header {
  background: linear-gradient(135deg, var(--color-primary) 0%, #3a5231 100%);
  padding: 20px 24px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.header-icon {
  color: white !important;
  font-size: 28px !important;
}

.card-title {
  font-family: var(--font-heading) !important;
  font-size: 1.3rem;
  font-weight: 600;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0;
}

/* Card Content */
.card-content {
  padding: 24px !important;
  color: var(--color-text);
  font-size: 1rem;
  line-height: 1.7;
}

/* Info Grid for General Info */
.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
}

.info-section {
  padding: 16px;
  background: #f9f7f4;
  border-radius: 8px;
}

.subsection-title {
  font-family: var(--font-heading) !important;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 16px;
  display: flex;
  align-items: center;
}

/* Styled Lists */
.styled-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.styled-list li {
  position: relative;
  padding: 8px 0 8px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.styled-list li:last-child {
  border-bottom: none;
}

.styled-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 16px;
  width: 6px;
  height: 6px;
  background: var(--color-primary);
  border-radius: 50%;
}

.styled-list.compact li {
  padding: 6px 0 6px 20px;
}

/* Highlight Text */
.highlight-text {
  font-size: 1.1rem;
  padding: 20px;
  background: linear-gradient(135deg, #f9f7f4 0%, #f0ede6 100%);
  border-radius: 8px;
  border-left: 4px solid var(--color-primary);
  display: flex;
  align-items: flex-start;
  margin: 0;
}

/* Accommodation Features */
.accommodation-features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.feature-item {
  display: flex;
  gap: 12px;
  padding: 16px;
  background: #f9f7f4;
  border-radius: 8px;
}

.feature-item .v-icon {
  flex-shrink: 0;
  margin-top: 2px;
}

.feature-item strong {
  display: block;
  font-family: var(--font-heading) !important;
  font-size: 1rem;
  margin-bottom: 4px;
  color: var(--color-text);
}

.feature-item p {
  margin: 0;
  font-size: 0.95rem;
  opacity: 0.85;
}

/* Note Text */
.note-text {
  font-size: 0.95rem;
  color: var(--color-text);
  opacity: 0.8;
  font-style: italic;
  display: flex;
  align-items: center;
  margin: 0;
  padding-top: 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}

/* Intro Text */
.intro-text {
  font-size: 1.05rem;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

/* Expansion Panels */
.license-panels,
.faq-panels {
  border-radius: 8px !important;
  overflow: hidden;
}

.license-panels .v-expansion-panel,
.faq-panels .v-expansion-panel {
  background: #f9f7f4 !important;
  margin-bottom: 8px;
  border-radius: 8px !important;
}

.license-panels .v-expansion-panel::before,
.faq-panels .v-expansion-panel::before {
  box-shadow: none !important;
}

.panel-header {
  font-family: var(--font-heading) !important;
  font-weight: 600;
  padding: 16px 20px !important;
  min-height: 56px !important;
}

.panel-title {
  display: flex;
  align-items: center;
  font-size: 1.05rem;
  color: var(--color-text);
}

.panel-content {
  padding: 0 20px 20px !important;
  font-size: 0.95rem;
  line-height: 1.7;
}

.panel-content p {
  margin-bottom: 12px;
}

/* Timeline Info */
.timeline-info {
  background: white;
  padding: 12px 16px;
  border-radius: 6px;
  margin-top: 12px;
}

.timeline-info p {
  margin: 4px 0;
  font-size: 0.9rem;
}

/* Success Note */
.success-note {
  color: var(--color-primary);
  font-weight: 600;
  margin-top: 12px !important;
  margin-bottom: 0 !important;
}

/* Success Stats */
.success-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin: 16px 0;
}

.stat-item {
  text-align: center;
  padding: 16px 8px;
  background: white;
  border-radius: 8px;
}

.stat-number {
  display: block;
  font-family: var(--font-heading) !important;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
}

.stat-label {
  display: block;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  opacity: 0.7;
  margin-top: 4px;
}

/* CTA Text */
.cta-text {
  font-size: 1.05rem;
  font-weight: 500;
  margin-top: 16px !important;
  margin-bottom: 0 !important;
}

.phone-link {
  color: var(--color-primary) !important;
  font-weight: 600;
  text-decoration: none;
}

.phone-link:hover {
  text-decoration: underline;
}

/* Emphasis Text */
.emphasis-text {
  background: #fff3cd;
  padding: 12px 16px;
  border-radius: 6px;
  margin: 12px 0;
}

/* Warning Box */
.warning-box {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  background: #fff3cd;
  padding: 16px;
  border-radius: 8px;
  margin-top: 12px;
}

.warning-box .v-icon {
  flex-shrink: 0;
  margin-top: 2px;
}

/* Guarantee Text */
.guarantee-text {
  font-size: 1.1rem;
  display: flex;
  align-items: center;
}

/* Mobile Styles */
@media (max-width: 960px) {
  .info-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .accommodation-features {
    grid-template-columns: 1fr;
  }

  .success-stats {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .shared-footer-wrapper {
    padding: 12px;
  }

  .info-card {
    margin: 0 0 16px;
    border-radius: 8px;
  }

  .info-card.hover-lift:hover {
    transform: none;
  }

  .card-header {
    padding: 16px;
  }

  .header-icon {
    font-size: 24px !important;
  }

  .card-title {
    font-size: 1.1rem;
  }

  .card-content {
    padding: 16px !important;
  }

  .info-section {
    padding: 12px;
  }

  .subsection-title {
    font-size: 1rem;
  }

  .highlight-text {
    padding: 16px;
    font-size: 1rem;
    flex-direction: column;
    gap: 8px;
  }

  .feature-item {
    padding: 12px;
  }

  .panel-header {
    padding: 12px 16px !important;
  }

  .panel-title {
    font-size: 0.95rem;
  }

  .panel-content {
    padding: 0 16px 16px !important;
  }

  .success-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }

  .stat-item {
    padding: 12px 4px;
  }

  .stat-number {
    font-size: 1.2rem;
  }

  .stat-label {
    font-size: 0.7rem;
  }
}
</style>

<template>
  <div class="reviews-page">
    <!-- Page Header -->
    <section class="page-header">
      <v-container>
        <h1 class="page-title text-center">Reviews & Recommendations</h1>
        <p class="page-subtitle text-center">
          Hear from our hunters and discover outfitters we personally recommend
        </p>
      </v-container>
    </section>

    <!-- Big Game Outfitter Recommendations -->
    <section class="recommendations-section">
      <v-container>
        <div class="section-header text-center">
          <v-icon class="section-icon" x-large>mdi-earth</v-icon>
          <h2 class="section-title">Big Game Hunting Recommendations</h2>
          <p class="section-description">
            We've hunted with outfitters in Canada, Africa, New Zealand, and Australia that we highly recommend.
            <br>Call us to learn more or check out our <router-link to="/Gallerys" class="inline-link">Personal Hunts gallery</router-link> for photos!
          </p>
        </div>

        <v-row class="outfitter-grid">
          <v-col
            v-for="(outfitter, index) in outfitters"
            :key="index"
            cols="12"
            sm="6"
            lg="3"
          >
            <v-card class="outfitter-card hover-lift" flat>
              <div class="outfitter-header" :style="{ background: outfitter.gradient }">
                <v-icon class="outfitter-icon" x-large>{{ outfitter.icon }}</v-icon>
              </div>
              <v-card-text class="outfitter-content">
                <h3 class="outfitter-name">{{ outfitter.name }}</h3>
                <p class="outfitter-owner">{{ outfitter.owner }}</p>
                <div class="outfitter-location">
                  <v-icon small class="mr-1">mdi-map-marker</v-icon>
                  {{ outfitter.location }}
                </div>
                <ul class="outfitter-species">
                  <li v-for="(species, i) in outfitter.species" :key="i">{{ species }}</li>
                </ul>
                <p class="outfitter-description">{{ outfitter.description }}</p>
                <v-btn
                  :href="outfitter.website"
                  target="_blank"
                  rel="noopener"
                  outlined
                  block
                  class="website-btn"
                >
                  <v-icon left small>mdi-open-in-new</v-icon>
                  Visit Website
                </v-btn>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials-section">
      <v-container>
        <div class="section-header text-center">
          <v-icon class="section-icon" x-large>mdi-comment-quote</v-icon>
          <h2 class="section-title">Hunter Testimonials</h2>
          <p class="section-description">
            Don't just take our word for it - hear what our hunters have to say
          </p>
        </div>

        <!-- Featured Testimonial -->
        <div class="featured-testimonial" v-if="testimonials.length > 0">
          <v-card class="featured-card" flat>
            <v-row align="center">
              <v-col cols="12" md="5" v-if="testimonials[0].images && testimonials[0].images.length > 0">
                <v-carousel
                  height="400"
                  hide-delimiters
                  show-arrows-on-hover
                  class="featured-carousel"
                >
                  <v-carousel-item v-for="(img, i) in testimonials[0].images" :key="i">
                    <v-img :src="getImage(img)" height="400" cover class="featured-image"></v-img>
                  </v-carousel-item>
                </v-carousel>
              </v-col>
              <v-col cols="12" :md="testimonials[0].images && testimonials[0].images.length > 0 ? 7 : 12">
                <div class="featured-content">
                  <v-icon class="quote-icon" x-large>mdi-format-quote-open</v-icon>
                  <p class="featured-text">{{ testimonials[0].content }}</p>
                  <p class="featured-author">— {{ testimonials[0].author }}</p>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </div>

        <!-- Testimonial Grid -->
        <v-row class="testimonial-grid">
          <v-col
            v-for="(review, index) in testimonials.slice(1)"
            :key="index"
            cols="12"
            md="6"
          >
            <v-card class="testimonial-card hover-lift" flat>
              <v-carousel
                v-if="review.images && review.images.length > 0"
                height="280"
                hide-delimiters
                show-arrows-on-hover
                class="testimonial-carousel"
              >
                <v-carousel-item v-for="(img, i) in review.images" :key="i">
                  <v-img :src="getImage(img)" height="280" cover></v-img>
                </v-carousel-item>
              </v-carousel>
              <v-card-text class="testimonial-content">
                <v-icon class="quote-icon-small" color="primary">mdi-format-quote-open</v-icon>
                <p class="testimonial-text">{{ review.content }}</p>
                <div class="testimonial-footer">
                  <div class="testimonial-author">
                    <v-icon small class="mr-1">mdi-account</v-icon>
                    {{ review.author }}
                  </div>
                  <div class="testimonial-rating">
                    <v-icon v-for="n in 5" :key="n" small color="warning">mdi-star</v-icon>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <v-container>
        <div class="cta-card text-center">
          <h2 class="cta-title">Ready to Create Your Own Story?</h2>
          <p class="cta-text">Join our family of satisfied hunters and experience Western South Dakota's finest hunting.</p>
          <v-btn
            to="/Contact"
            class="cta-button"
            x-large
            elevation="0"
          >
            Book Your Hunt Today
          </v-btn>
        </div>
      </v-container>
    </section>
  </div>
</template>

<script>
import { AllImages } from "../assets/AllImages";

export default {
  name: "Reviews",
  data: function () {
    return {
      outfitters: [
        {
          name: "Full Curl Stone Outfitters",
          owner: "Luke Vince",
          location: "North Central British Columbia",
          icon: "mdi-image-filter-hdr",
          gradient: "linear-gradient(135deg, #2d5016 0%, #4a7c23 100%)",
          species: ["Stone Sheep", "Canadian Moose", "Mountain Goat", "Elk"],
          description: "Traditional horseback hunts. Luke and his family have been in the outfitting business for generations.",
          website: "https://fullcurlstoneoutfitters.com"
        },
        {
          name: "North Curl Outfitters",
          owner: "Mac Watson",
          location: "Yukon Territory",
          icon: "mdi-pine-tree",
          gradient: "linear-gradient(135deg, #1a3a5c 0%, #2d5a8a 100%)",
          species: ["Dall Sheep", "Stone Sheep", "Alaska/Yukon Moose", "Grizzly Bear", "Black Bear"],
          description: "Horseback hunts in the Yukon. Mac comes from a long line of guides and outfitters.",
          website: "https://northcurl.com"
        },
        {
          name: "JP Big Game Safaris",
          owner: "Juan Pace",
          location: "South Africa",
          icon: "mdi-elephant",
          gradient: "linear-gradient(135deg, #8B4513 0%, #CD853F 100%)",
          species: ["Plains Game", "Dangerous 5"],
          description: "Excellent for first-time or seasoned African hunters. Juan is honest and a great professional hunter!",
          website: "https://www.jpsafaris.com"
        },
        {
          name: "Southern Mountain Adventures",
          owner: "Croc Adams",
          location: "New Zealand",
          icon: "mdi-terrain",
          gradient: "linear-gradient(135deg, #355E3B 0%, #4F7942 100%)",
          species: ["Tahr", "Chamois", "Stag"],
          description: "Specializes in tahr hunting. Many top tahr in the record book came from Croc's area.",
          website: "https://www.southernmountainadventures.com"
        }
      ],
      testimonials: [
        {
          images: [549],
          content:
            "Last year I hunted mule deer with Dakota Trophy Adventures. The previous year I had gone on a guided mule deer hunt in another state and didn't see a single mature buck during 5 days of hunting. I was nervous that the same thing might happen again. To my surprise, I saw at least 5 mature \"shooter-type\" bucks on my first day of hunting. I would have been delighted to take any of these bucks, but my guide Mark Trask kept saying he thought we could find something better. Eventually, we found a buck we both agreed was phenomenal. I harvested an old mature 28\" wide 170+ buck and I could not be more delighted. Dakota Trophy Adventures is not your average outfitter. It is clear that during their 50+ years of outfitting that they have carefully managed both the quantity and quality of bucks on their lands. I literally saw several hundred mule deer while there with more than 20 being 5+ year old bucks. In addition to their outstanding management, the outfitter, guides, and staff are hardworking, professional, and gracious. The accommodations were great and the food was excellent. I am already looking forward to my next hunt with them!",
          author: "Mitch Engle",
        },
        {
          images: [898],
          content:
            "I've hunted with Dakota Trophy five times over the past eight years. I've always had a great time with the Trasks. I have always hunted white-tail deer with great success. My trophies have scored from 138-162. The first year or so my problem was not passing the 140 deer. Since then, the last three bucks have been over 150. Any hunter who can shoot (and pass 140 bucks) has a real chance at a monster. I have hunted a lot of places throughout the west and have never been to a place with so much game and so many trophy bucks. The food is first class and the folks at Dakota Trophy have become great friends.",
          author: "P. Rutt — Wyoming",
        },
        {
          images: [1401],
          content: "I've been out to the Trask Family ranch twice to hunt Merriam turkeys. I can attest to why they call it a \"family\" ranch. Once you meet Tom, Sheila and the kids, you become family. They always make the trip worthwhile and never fail to put you on birds to hunt. If you're looking to go to a place where you can't see a neighbor's lights at night or hear the hum of traffic on the nearby road, this is your place. The night skies are lit up by the stars and you may wake up to snow in April. You'll get to hunt your bird all alone or with help if needed. You'll see plenty of other game like mule deer and whitetail. You'll likely find some sheds or maybe even a fossil.",
          author: "Chad Lott"
        },
        {
          images: [118],
          content:
            "I've hunted turkeys with these fine folks several times and what an awesome experience I had each time. Great people, great experience, and great hunting.",
          author: "Aaron Horton",
        },
        {
          images: [593],
          content:
            "I own a ranch in the area but still do the Dakota Trophy Hunt every year. I keep coming back for the deer camp environment and to hunt with my Elm Springs friends. Limited hunting pressure in the area produces mature bucks.",
          author: "Jim MacDougall",
        },
        {
          images: [24, 1135],
          content:
            "Over the years I have been fortunate enough to hunt in several Western states. Dakota Trophy is as good as any and better than most.",
          author: "Arlen Vacura",
        },
        {
          images: [1327, 86],
          content:
            "I have hunted with Dakota Trophy Hunt about ten years. I have taken many trophy bucks, both mule deer and whitetail. Hunters can expect to see many deer during their stay and will have numerous opportunities to harvest a trophy. I have taken mule deer bucks in the 180-185 B.&C. range, the widest being 29 1/2 inches. I have also taken a mule deer buck with 29 inch main beams. So far as whitetail goes I have taken many trophy bucks. 10 pointers are usually the norm. My bucks have been in the 150 B.&C. range. There are many taken each year larger.",
          author: "Bob D.",
        },
        {
          images: [511],
          content:
            "Having hunted several different areas across the west it seems that most of the prime trophy areas produce a few huge bucks but overall quality isn't that good and a lot of times not seeing any deer at all if the migration didn't happen due to weather. I have only hunted with Tom for two years but in those two years he has run 100 percent on mule deer and there weren't any dinks. Each year I seen mature bucks taken over that 30 inch mark, getting one myself that went 29 — all mature heavy horned bucks usually with some trash and always one or two 180 plus.",
          author: "Jeff T.",
        },
        {
          content:
            "Dakota Trophy Hunt has a smooth running camp. I have hunted different states for mule deer and white tail as well — Dakota Trophy is the Best. My experience there rates extremely high. First off the guides will do their utmost to satisfy you. The accommodations, sleeping quarters & eating are good and comfortable. The game has been on the upswing since my first hunt in 1997. I have hunted there for 10 years. Last but not least the food is rated up with the best of hunting camps. I highly recommend Dakota Trophy for their accomplishments.",
          author: "Clarence M. — Petaluma, CA",
        },
        {
          content:
            "About Dakota Trophy Hunting: I can sum up my opinion with one word. IMPRESSIVE! I have reflected a lot on my trip to your outfit and cannot find anything negative to say. The Mule Deer were plentiful and had well endowed racks. The Whitetail I saw were very good as well. The amount and quality of game you see is incredible. The meals were out of this world. Steaks (twice), prime rib, turkey, ribs, pork loin, and taco salads in the evening along with appetizers and an open bar! Anyone looking for a quality hunting experience need look no further.",
          author: "Mark S. DVM — Junction City, KS",
        },
        {
          content:
            "The hunt for me in South Dakota was awesome. I was able to experience this with my seven year old son and best friend, the accommodations were great, wonderful food and hospitality. We seen turkeys every day and we killed 4 birds. They have a wonderful ranch and treated us like family. The guides were great and knew where the turkeys were. I highly recommend the turkey hunting at the Trask ranch.",
          author: "Dave R.",
        },
        {
          content:
            "I had a great time out there. Never saw so many turkeys and the accommodations were great. Felt like part of the family. I keep meaning to try to get back with my wife as turkeys are the only thing she hunts.",
          author: "John K.",
        },
        {
          images: [34],
          content:
            "I have been hunting with Dakota Trophy hunts for the past 7 years with family and friends and have done several Outdoor TV shows here. We have had 100% success with taken Mule Deer up to 193 & Whitetails in the 160's. The quantity and quality of deer here is unbelievable due to a high management program. They distribute the hunters over several thousand acres and allocate only a few hunters to each ranch making for a quality hunt. The accommodations have improved and the meals are incredible, all the Guides are fun and friendly — it's a family atmosphere. I would highly recommend this hunt for any age.",
          author: "Kevin Gross — Ex-MLB Player, Host of Hunting with the Pros",
        },
        {
          content:
            "My experience with Dakota Trophy Adventures was fabulous!! The amount and quality of game you see is incredible. The deer are managed very well, which increases the opportunity to harvest a quality animal. Tom and Sheila thank you for your hospitality and a hunt of a lifetime! I will be back!!",
          author: "Steve E.",
        },
        {
          images: [1121],
          content:
            "Excellent hunting experience! The most deer I have ever seen with top quality racks. Friendly, knowledgeable guides who know the land and animals well. Dakota Trophy Hunts is a deer hunters paradise. Definitely will be a place I will revisit.",
          author: "Andy Jeffries",
        },
        {
          content:
            "We really enjoyed hunting with you. Very friendly people. Great hospitality. Plan on coming out again sometime.",
          author: "Greg Creque",
        },
        {
          content:
            "The knowledge and personal attention of our host guide was truly outstanding... there was never any pressure to shoot an inadequate trophy animal. The vast ranch land was a pleasure to see and experience.",
          author: "Gary Verhaeghe",
        },
        {
          content:
            "My first time hunting with Dakota Trophy Hunts was a great experience. Very good quality deer with many different sightings. My guide was knowledgeable and easy to get along with. The meals were great and the comradeship with fellow hunters, guides, and neighbors was outstanding. I hope I can do it again.",
          author: "Tony Mueller",
        },
      ],
    };
  },
  methods: {
    getImage(img) {
      const found = AllImages.filter((x) => x.imageId == img).sort(
        (a, b) => b.imageId - a.imageId
      )[0];
      return found ? found.url : '';
    },
    addJsonLdScript() {
      this.testimonials.forEach((review) => {
        const scriptTag = document.createElement("script");
        scriptTag.type = "application/ld+json";
        scriptTag.textContent = JSON.stringify({
          "@context": "http://schema.org",
          "@type": "Review",
          "itemReviewed": {
            "@type": "Organization",
            "name": "Dakota Trophy Adventures"
          },
          "author": {
            "@type": "Person",
            "name": review.author
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": 5,
            "bestRating": 5,
            "worstRating": 1
          },
          "reviewBody": review.content,
          "datePublished": "2024-01-30T18:13:53.017Z"
        });
        document.head.appendChild(scriptTag);
      });
    },
  },
  mounted() {
    this.addJsonLdScript();
  },
};
</script>

<style scoped>
.reviews-page {
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
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.7;
}

.inline-link {
  color: var(--color-primary) !important;
  font-weight: 600;
  text-decoration: none;
}

.inline-link:hover {
  text-decoration: underline;
}

/* Recommendations Section */
.recommendations-section {
  padding: 0 0 80px;
}

.outfitter-grid {
  margin-top: 24px;
}

.outfitter-card {
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  background: white;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.outfitter-card.hover-lift:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
}

.outfitter-header {
  padding: 32px 20px;
  text-align: center;
}

.outfitter-icon {
  color: white !important;
  font-size: 48px !important;
}

.outfitter-content {
  padding: 20px !important;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.outfitter-name {
  font-family: var(--font-heading) !important;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 4px;
}

.outfitter-owner {
  font-size: 0.95rem;
  color: var(--color-primary);
  font-weight: 500;
  margin-bottom: 8px;
}

.outfitter-location {
  font-size: 0.85rem;
  color: var(--color-text);
  opacity: 0.7;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
}

.outfitter-species {
  list-style: none;
  padding: 0;
  margin: 0 0 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.outfitter-species li {
  background: #f5f1e8;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.75rem;
  color: var(--color-text);
  font-weight: 500;
}

.outfitter-description {
  font-size: 0.9rem;
  color: var(--color-text);
  opacity: 0.85;
  line-height: 1.6;
  margin-bottom: 16px;
  flex: 1;
}

.website-btn {
  font-family: var(--font-heading) !important;
  text-transform: uppercase !important;
  letter-spacing: 0.5px !important;
  font-size: 0.8rem !important;
  color: var(--color-primary) !important;
  border-color: var(--color-primary) !important;
  min-height: 40px !important;
  margin-top: auto;
}

/* Testimonials Section */
.testimonials-section {
  padding: 80px 0;
  background: white;
}

/* Featured Testimonial */
.featured-testimonial {
  margin-bottom: 48px;
}

.featured-card {
  background: linear-gradient(135deg, var(--color-primary) 0%, #3a5231 100%);
  border-radius: 16px;
  overflow: hidden;
  padding: 0;
}

.featured-carousel {
  border-radius: 0;
}

.featured-image {
  border-radius: 0;
}

.featured-content {
  padding: 40px;
  color: white;
}

.quote-icon {
  color: white !important;
  opacity: 0.5;
  margin-bottom: 16px;
}

.featured-text {
  font-size: 1.2rem;
  font-style: italic;
  line-height: 1.8;
  margin-bottom: 24px;
  color: white;
}

.featured-author {
  font-family: var(--font-heading) !important;
  font-size: 1.1rem;
  font-weight: 600;
  color: #F5D77A;
  letter-spacing: 1px;
}

/* Testimonial Grid */
.testimonial-grid {
  margin-top: 24px;
}

.testimonial-card {
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  background: #f9f7f4;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.testimonial-card.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.testimonial-carousel {
  border-radius: 0;
}

.testimonial-content {
  padding: 24px !important;
}

.quote-icon-small {
  opacity: 0.4;
  margin-bottom: 8px;
}

.testimonial-text {
  font-size: 0.95rem;
  color: var(--color-text);
  line-height: 1.7;
  margin-bottom: 16px;
  /* Limit text to reasonable length */
  display: -webkit-box;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.testimonial-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}

.testimonial-author {
  font-family: var(--font-heading) !important;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-text);
  display: flex;
  align-items: center;
}

.testimonial-rating {
  display: flex;
  gap: 2px;
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
}

/* Mobile Styles */
@media (max-width: 960px) {
  .featured-content {
    padding: 32px 24px;
  }

  .featured-text {
    font-size: 1.1rem;
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

  .recommendations-section {
    padding: 0 0 48px;
  }

  .outfitter-card.hover-lift:hover {
    transform: none;
  }

  .outfitter-header {
    padding: 24px 16px;
  }

  .outfitter-icon {
    font-size: 36px !important;
  }

  .testimonials-section {
    padding: 48px 0;
  }

  .featured-content {
    padding: 24px 20px;
  }

  .featured-text {
    font-size: 1rem;
  }

  .testimonial-card.hover-lift:hover {
    transform: none;
  }

  .cta-section {
    padding: 48px 0;
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

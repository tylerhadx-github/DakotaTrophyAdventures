<template>
  <div>
    <v-card>
      <v-card-title style="justify-content: center">
        <h3 class="headline mb-0">Testimonials</h3>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col
            v-for="(review, index) in testimonials"
            :key="index"
            md="6"
            cols="12"
            class="offset-md-3"
          >
            <v-card flat>
              <v-carousel v-if="review.images && review.images.length > 0">
                <v-carousel-item v-for="(img, i) in review.images" :key="i">
                  <v-img :src="getImage(img)" height="600"></v-img>
                </v-carousel-item>
              </v-carousel>
              <v-card-text>
                <div style="color: black" v-html="review.content"></div>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <p>
                  <strong>{{ review.author }}</strong>
                </p>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <v-row>
      <v-col>
        <v-card>
          <v-card-title style="justify-content: center">
            <h3 class="headline mb-0">Big Game Hunting</h3>
          </v-card-title>
          <v-card-text>
            <div style="color: black; align-content: center; text-align: left">
              <p>
                We have hunted with outfitters in Canada, Africa, New Zealand,
                and Australia that we highly recommend if you are looking for
                that type of a hunt. Please call if you want to talk to one of
                us or look under our Gallery tab - Personal Hunts for pictures
                of trophies taken!
              </p>

              <p>Full Curl Stone – Luke Vince</p>
              <ul>
                <li>
                  Traditional Horseback Hunts in North Central British Columbia
                  - Stone Sheep, Canadian Moose, Mountain Goat, Elk
                </li>
                <li>
                  Luke Vince and his family have been in the outfitting business
                  for generations and are skilled outfitters and guides.
                </li>
                <li>Luke's website is: <a hred="https://fullcurlstoneoutfitters.com">https://fullcurlstoneoutfitters.com</a></li>
              </ul>
              <br>
              <p>North Curl Outfitters– Mac Watson</p>
              <ul>
                <li>
                  Horseback Hunts in Yukon Territory - Dall Sheep, Stone Sheep,
                  Alaska/Yukon Moose, Grizzly Bear, Black Bear
                </li>
                <li>
                  Mac Watson and Luke Vince are brothers and Mac also comes from
                  a long line of guides and outfitters. Before having North
                  Curl, Mac used to run Yukon Stone.
                </li>
                <li>
                  <a href="htps://northcurl.com">https://northcurl.com</a>
                </li>
              </ul>
              <br>
              <p>JP Big Game Safaris – Juan Pace</p>
              <ul>
                <li>
                  This is an excellent place for an African safari - whether it
                  is for first time African hunters, or seasoned hunters in
                  Africa. You can hunt plains game or the dangerous 5! Juan is a
                  very honest guy to work with, not to mention a great
                  professional hunter! We have hunted with different outfitters
                  in Africa and he was by far the best! Check out his website
                </li>
                <li><a href="https://www.jpsafaris.com">www.jpsafaris.com</a></li>
              </ul>
<br>
              <p>Southern Mountain Adventures – Croc Adams</p>
              <ul>
                <li>This hunt is in New Zealand and specializes in tahr, but also
                has chamois, and stag. Many of
                the top tahr in the record book came from Croc&#39;s hunting
                area. Check out his website</li>
                <li>
                  <a href="https://www.southernmountainadventures.com">www.southernmountainadventures.com</a></li>
              </ul>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { AllImages } from "../assets/AllImages";

export default {
  name: "Reviews",
  data: function () {
    return {
      testimonials: [
        {
          images: [549],
          content:
            "Last year I hunted mule deer with Dakota Trophy Adventures. The previous year I had gone on a guided mule deer hunt in another state and didn’t see a single mature buck during 5 days of hunting. I was nervous that the same thing might happen again. To my surprise, I saw at least 5 mature “shooter-type” bucks on my first day of hunting. I would have been delighted to take any of these bucks, but my guide Mark Trask kept saying he thought we could find something better. Eventually, we found a buck we both agreed was phenomenal. I harvested an old mature 28” wide 170+ buck and I could not be more delighted. Dakota Trophy Adventures is not your average outfitter. It is clear that during their 50+ years of outfitting that they have carefully managed both the quantity and quality of bucks on their lands. I literally saw several hundred mule deer while there with more than 20 being 5+ year old bucks. In addition to their outstanding management, the outfitter, guides, and staff are hardworking, professional, and gracious. The accommodations were great and the food was excellent. I am already looking forward to my next hunt with them!",
          author: "Mitch Engle",
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
          images: [24],
          content:
            "Over the years I have been fortunate enough to hunt in several Western states. Dakota Trophy is as good as any and better than most.",
          author: "Arlen Vacura",
        },
        {
          content:
            "I have hunted with Dakota Trophy Hunt about ten years. I have taken many trophy bucks, both mule deer and whitetail. Hunters can expect to see many deer during their stay and will have numerous opportunities to harvest a trophy. I have taken mule deer bucks in the 180-185 B.&C. range, the widest being 29 1/2 inches. I have also taken a mule deer buck with 29 inch main beams. So far as whitetail goes I have taken many trophy bucks. 10 pointers are usually the norm. My bucks have been in the 150 B.&C. range. There are many taken each year larger. In fact I have seen 16 pointers come into camp, as well as 7x7 typical bucks. This area of drainages is one of the best areas on the continent to hunt. I have hunted in Alberta, Sask., Wyoming, Montana, Maine, New York, and South Carolina. South Dakota is my favorite by far. Dakota Trophy has built new camps last year and are very comfortable. The food is always great. Airport pick-up is included in the price. The ranchers in this coalition have a common goal, to produce trophy animals and put their hunters in position for a shot. The walls of my trophy rooms are a testament to this commitment. Overall on a scale of 1 to 10, Dakota Trophy Hunt gets a ten every time.",
          author: "Bob D.",
        },
        {
          images: [511],
          content:
            "Having hunted several different areas across the west  it seems that most of the prime trophy areas produce a few huge bucks but overall quality isn't that good and a lot of times not seeing any deer at all if the migration didn’t happen due to weather. I have only hunted with Tom for two years but in those two years he has ran 100 percent on mule deer and their wasn’t any dinks each year I seen mature bucks taken over that  30 inch mark getting one myself that went 29 all mature heavy horned bucks usually with some trash and always one or two 180 plus. Hunting with the Dakota Trophy Hunts is like hunting with family they take pride in their reputation and it shows always having  clients in camp in their 80s who have been going with them since the start.",
          author: "Jeff T.",
        },
        {
          content:
            "Dakota Trophy Hunt has a smooth running camp.  I have hunted different states for mule deer and white tail as well -Dakota Trophy is the Best.  My experience there rates extremely high.  First off the guides will do their utmost to satisfy you, sometimes the weather might be a problem as anywhere you hunt can be.  The accommodations, sleeping quarters & bating are good and comfortable.  The game has been on the upswing since my first hunt in 1997.  I have hunted there for 10 years - 2010 will be my 11th year.  Last but not least the food is rated up with the best of hunting camps.  I highly recommend Dakota Trophy for their accomplishments.",
          author: "Clarence M. Petaluma CA",
        },
        {
          content:
            "About Dakota Trophy Hunting: I can sum up my opinion with one word. IMPRESSIVE!  I have reflected a lot on my trip to your outfit and cannot find anything negative to say. The Mule Deer were plentiful and had well endowed racks. The Whitetail I saw were very good as well, and I was there before the rut brings out the biggest and baddest. The Linn brothers, Andy and Mo, were friendly and accommodating. Their ranch is expansive and holds unfathomable quantities of game. I not only saw hundreds of deer, but coyotes, prairie dogs, sharp-tail grouse, and other species as well. The ranch house we were housed in was warm, dry, and well suited to a hunting camp. It sure beats tent living or the vermin infested places I have stayed with other outfitters.  The meals were out of this world. Steaks (twice), prime rib, turkey, ribs, pork loin, and taco salads in the evening along with appetizers and an open bar! Lunches and breakfasts were hot and delicious. Anyone looking for a quality hunting experience need look no further. I have already made plans to return in 2 years (next year was already booked). I have recommended your outfit to my brother, cousin, several friends, and acquaintances.",
          author: "Mark S. DVM, Junction City KS",
        },
        {
          content:
            "The hunt for me in South Dakota was awesome I was able to experience this with my seven year old son and best friend, the accomidations were great, wonderful food and hospitality. We seen turkeys every day and we killed 4 birds, they have have a wonderful ranch and treated us like family. The guides were great they knew were the turkeys were. I highly recommend the turkey hunting at the trask ranch. We hunted once with them but intend to return. This was my first hunt out west and I will return.",
          author: "Dave R.",
        },
        {
          content:
            "I had a great time out there. Never saw so many turkeys and the accommodations were great. Felt like part of the family. I keep meaning to try to get back with my wife as turkeys are the only thing she hunts. We will see. One of these days.  Feel free to have anyone contact me and I will be happy to give them the scoop. As you recall I shot a turkey with five beards and went for a little swim in the brook.",
          author: "John 'K'",
        },
        {
          content:
            "Kevin Gross  Ex- Major League Baseball of 17 year and Host of the Outdoor show Hunting with the Pros on The Sportsman Channel. I have been hunting with Dakota Trophy hunts for the past 7 years with family and friends and have done several  Outdoor TV shows here. We have had 100% success with taken Mule Deer up to 193  & Whitetails in the 160's. The quantity and quality of deer here is unbelievable do to a high management program. They distribute the hunters over several thousand acres and allocate only a few hunters to each ranch making for a quality hunt. The accommodations have improved and the meals are incredible, all the Guides are fun and friendly it's a family atmosphere, this is a hunt we look forward to every year.  The price of this hunt is very respectable for the quality of animals. I would highly recommend this hunt for any age to give them a try.  See ya all there",
          author: "Kevin Gross",
        },
        {
          content:
            "My experience with Dakota Trophy Adventures was fabulous!!  The amount and quality of game you see is incredible.  The deer are managed very well, which increases the opportunity to harvest a quality animal. Tom and Shelia thank you for your hospitality and a hunt of a lifetime!  I will be back!!",
          author: "Steve E.",
        },
        {
          images: [898],
          content:
            "I've hunted with Dakota Trophy five times over the past eight years.  I've always had a great time with the Trasks.  I have always hunted white-tail deer with great success.  My trophies have scored from 138- 162. The first year or so my problem was not passing the 140 deer.  Since then, the last three bucks have been over 150.  Any hunter who can shoot( and pass 140 bucks) has a real chance at a monster. I have hunted alot of places throughout the west and have never been to a place with so much game and so many trophy bucks. The food is first class and the folks at Dakota Trophy have become great friends.",
          author: "P. Rutt-- Wyoming (originally from Pennsylvania)",
        },
        {
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
            "The knowledge and personal attention of our host guide was truly oustanding . . . there was never any pressure to shoot an inadequate trophy animal. The vast ranch land was a pleasure to see and experience.",
          author: "Gary Verhaeghe",
        },
        {
          content:
            "My first time hunting with Dakota Trophy Hunts was a great experience. Very good quality deer with many different sightings. My guide was knowledgeable and easy to get along with. The meals were great and the comradeship with fellow hunters, guides, and neighbors was outstanding. I hope I can do it again.",
          author: "Tony Mueller",
        },
      ],
      //BigGame: "<p>We have hunted with outfitters in Canada, Africa, New Zealand, and Australia that we highly</p> <p>recommend if you are looking for that type of a hunt. Please call if you want to talk to one of us or</p> <p>look under our Gallery tab - Personal Hunts for pictures of trophies taken!</p> <p>Full Curl Stone – Luke Vince</p> <p>Traditional Horseback Hunts in North Central British Columbia - Stone Sheep, Canadian</p> <p>Moose, Mountain Goat, Elk</p> <p>Luke Vince and his family have been in the outfitting business for generations and are skilled</p> <p>outfitters and guides.</p> <p>North Curl Outfitters– Mac Watson</p> <p>Horseback Hunts in Yukon Territory - Dall Sheep, Stone Sheep, Alaska/Yukon Moose, Grizzly</p> <p>Bear, Black Bear</p> <p>Mac Watson and Luke Vince are brothers and Mac also comes from a long line of guides and</p> <p>outfitters. Before having North Curl, Mac used to run Yukon Stone.</p> <p>JP Big Game Safaris – Juan Pace</p> <p>This is an excellent place for an African safari - whether it is for first time African hunters, or</p> <p>seasoned hunters in Africa. You can hunt plains game or the dangerous 5! Juan is a very</p> <p><br></p> <p>honest guy to work with, not to mention a great professional hunter! We have hunted with</p> <p>different outfitters in Africa and he was by far the best! Check out his website at</p> <p>www.jpsafaris.com</p> <p>Southern Mountain Adventures – Croc Adams</p> <p>This hunt is in New Zealand and specializes in tahr, but also has chamois, and stag. Many of</p> <p>the top tahr in the record book came from Croc&#39;s hunting area. Check out his website at:</p> <p>www.southernmountainadventures.com</p>",
    };
  },
  methods: {
    getImage(img) {
      return AllImages.filter((x) => x.imageId == img).sort(
        (a, b) => b.imageId - a.imageId
      )[0].url;
    },
  },
};
</script>
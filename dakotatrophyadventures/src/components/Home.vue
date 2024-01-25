<template>
  <div>
    <v-row>
      <v-col>
        <v-card flat>
          <v-card-title style="justify-content: center">
            <h1 class="text-center" style="overflow-wrap: break-word;">
              Western South Dakota's Finest Hunting 
            </h1>
          </v-card-title>
          <v-card-text>
            <!-- <h2 class="text-center">Welcome to Dakota Trophy</h2>
            <br> -->
            <div style="align-items: center;justify-content: center;" class="text-center">
              <v-btn to="/Contact" outlined>Contact Us</v-btn>
            </div>
            <br>
            <p>
              Explore the diverse hunting experiences offered at our ranch,
              where tradition meets excitement. Whether you're a seasoned hunter
              or a nature enthusiast, we have something for everyone.
            </p>

            <h3>Hunting Adventures</h3>
            <p>
              Embark on unforgettable rifle mule deer and whitetail hunts,
              challenging archery deer adventures, thrilling Merriam turkey
              hunts, and limited antelope expeditions. Our expansive private
              land provides the perfect backdrop for your hunting aspirations.
            </p>

            <h3>Lodging</h3>
            <p>
              Stay in our comfortable bunkhouse-style accommodations at our base
              camp. It's the perfect retreat for
              a hunting camp. Enjoy hearty meals and basic beverages provided
              during your stay.
            </p>

            <h3>The Atmosphere</h3>
            <p>
              Immerse yourself in the rich scenery of Big Bend Ranch. Sprawling
              along the mighty Missouri River, our 5,600 acres of farm and ranch
              land create an idyllic setting for fantastic hunting. Experience
              the beauty of rolling hills, river breaks, and abundant wildlife.
            </p>

            <p>
              Book your adventure today and become part of the legacy of hunter
              satisfaction that we've built since 1965.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="i in Featured"
        :key="i.id"
        cols="12"
        sm="6"
        style="width: 100%"
       class="pa-4"
      >
        <v-img :src="i.image"></v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  methods: {
    getdata() {},
    openContactForm() {
      this.$router.push({ name: "Contact" });
    },
  },
  data: function () {
    return {
      Home: '<p align="left" style="color: rgb(0, 0, 0); font-family: Tahoma, Geneva, sans-serif; font-size: medium;"><font face="Tahoma">Welcome to Dakota Trophy! Dakota Trophy is a multi-entity operation primarily focused on mule deer,whitetail, antelope, and turkey hunting in Western South Dakota. For specific information on the hunts we offer, please look at the Hunting tab. For information on the origins of Dakota Trophy and our family– the ones who do the booking and run the camp, please continue to read below! The Spanish Five Ranch of Wasta, South Dakota is owned and operated by Tom and Shelia Trask andtheir children, Mark, Mick, and Tomilyn. The ranch covers nearly 20,000 acres along the Cheyenne andElk Creek tributaries. Dakota Trophy Adventures is a diverse business involving everything to do withhunting and outdoor recreation from trophy Mule Deer and Whitetail to Antelope and Merriam turkeys.The ranch includes cattle, registered quarter horses, and personal hunting trips from Alaska to Africa,many provinces in Canada, numerous western United States and as far south as New Zealand andAustralia. Dakota Trophy Adventures is in the business of helping and assisting clients locate greathunting areas and enjoy hunting and the great outdoors! We love to give great recommendations foroutfitters that we have hunted with all over the world. Dakota Trophy Hunt is a corporation of our ranch and about 12 others for the purpose of rifle Mule Deerand Whitetail hunting. Dakota Trophy was originally started as Dakota Safari in 1965. In the 1980s, thegroup of ranchers decided to split up into two organizations. We kept the camp and changed our nameto Dakota Trophy, the other organization kept the name and is based across the Cheyenne river from us.We have done the booking for Dakota Trophy Hunt since 1987 and the base camp is at our ranchheadquarters. This very successful group of ranchers have taken many Trophy Mule Deer and Whitetailover the years. The area encompasses around 140,000 acres of private land.Dakota Trophy Adventures runs a guiding service for Merriam turkeys in the spring, as well as antelopehunts and any archery deer hunts. It is based out of the same camp, but is primarily more of a familybusiness. Trask FamilyThe ranch we live on is on the prairie of South Dakota and an old family ranch of Tom’s parents, Markand Winnie Trask. Tom Trask was born and raised in the Elm Springs area. His father was instrumental instarting a commercial hunting operation in 1965 in addition to ranching in the Elm Springs area. Hisgrandfather, Mack Trask, homestead at the forks of the Cheyenne and Belle Fourche rivers north of ourcurrent location. Thus, Tom grew up in the business of ranching and hunting. He spent winters as ayoung boy trapping with his father and summers hunting fossils with his mother. Tom attended the localcountry school in Meade County. A teacher once said he looked forward to the morning report fromTom on what all he had hunted since school was out one day to the start of the next! Tom attended highschool in Sturgis. Following graduation he tried college at SDSU for a semester but when he came homefor Christmas his dad and the cattle needed his help for the tough winter they were in for. He was in partnership with his brother for a few years and in 1985 they separated the operation. Tommarried Shelia McDaniel in 1986 and they still continue to ranch and expand both the ranching andoutfitting businesses.Shelia grew up northeast of Philip, SD on a cattle and sheep ranch and also attended a rural school thenwent on to high school in Philip. At one point in her country school days, the boy to girl ratio was 13-1,thus she did as the boys did – riding horseback to school and hunting rabbits on the way. Aftergraduation, Shelia attended SDSU and then graduated from BHSU with a degree in business andeducation.Tom took the job of booking for Dakota Trophy in 1987 and has expanded it into other areas: turkey,antelope and archery hunting. In addition to hunting, at home and around the world, we put up hay,raise cattle, and still raise a few quarter horses. It’s not uncommon to see a hay field with all of thefamily running machinery or a pasture or corral with everyone working cattle.Tom and Shelia have 3 children. After serving hunters dinner (in 1989) Tom took Shelia to the hospitalwhere was Mark was born premature – although you wouldn’t know it today. Mick was born in 1991and Tomilyn in 1993. They all attended the local rural school until Mark went to high school where itwas decided to send them all to school in Philip. All three graduated high school from Philip. The boyswent on to brief college careers and taxidermy school. They are both currently home ranching, hunting,and doing taxidermy. Tomilyn went to college and graduated with a degree in Mathematics Education.She currently lives at home and in involved in the ranch as well as doing the booking and paperwork forDakota Trophy! You will find all three of them guiding, cooking, skipping/caping and meat processingduring your time at Dakota Trophy. We have also been blessed with 2 grandchildren – Levi and Annie.They attend the same rural school that Tom, Mark, Mick, and Tomilyn did, making them the firstchildren to be third generation students at Elm Springs School! Levi was born in 2010 and Annie in 2014– they both live on the ranch and are involved in helping as much as they can while not at school orother activities. We enjoy hunting ourselves and do so whenever time and finances allow! We have hunted numerousprovinces in Canada, as well as Alaska and many states in the lower 48. We also have outfitterconnections in Africa, New Zealand and Australia. We love to talk hunting and we know some greatpeople in the world of hunting! Possibly we can help, advise, or assist you in booking a hunt with aquality, reliable outfitter! We don’t recommend anyone that we have not personally hunted with. Pleasecheck under the Reviews tab for links to outfitters we recommend! Along with hunting comes with the preservation of trophies. Tom has done some taxidermy for ourpurposes. Currently, Mark and Mick have taken up the business of taxidermy having studied under TomMatuska of Northwest Iowa School of Taxidermy. They work on taxidermy mostly during the wintermonths or whenever they get time in between ranching obligations. Please look at the Taxidermy tab formore information on Dakota Trophy Taxidermy!To talk hunting, cattle, or horses – please contact us as we’d love to visit with you!',
      Featured: [
        {
          image: "/img/Deer/Mule%20Deer/Drefke%20MD%201.JPG",
        },
        {
          image: "/img/Deer/Mule%20Deer/Newmans%20MD%20WT%202.JPG",
          title: "History",
          description: this.History,
        },
      ],
    };
  },
  mounted: function () {
    this.getdata();
  },
  computed: {
    windowSize: function () {
      return { x: window.innerWidth, y: window.innerHeight };
    },
  },
};
</script>
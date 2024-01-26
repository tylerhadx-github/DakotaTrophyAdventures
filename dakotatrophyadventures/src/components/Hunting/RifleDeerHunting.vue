<template>
  <div>
  <v-card flat class="pa-4 ma-4">
    <v-card-title>
      <v-flex sm6 offset-sm3 xs12> </v-flex>
    </v-card-title>
    <v-card-text
      sm10
      offset-sm1
      xs12
      style="
        color: black;
        font-family: Tahoma, Geneva, sans-serif;
        font-size: 16px;
      "
    >
    <v-row>
        <v-col>             
          <h1 class="headline mb-0" style="text-align: center">

            Rifle Mule Deer and Whitetail Hunts - Dakota Trophy Hunt
          </h1>
        </v-col>
    </v-row>
      <v-row>
        <v-col md="4" cols="12"
          ><v-img :src="'/img/Deer/Mule Deer/Jefferies MD WT.JPG'"></v-img
        ></v-col>
        <v-col md="8" cols="12">
        
          <p
            class="pt-2"
            style="
              font-family: europa;
              font-weight: 300;
              font-style: normal;
              font-size: 16px;
            "
          >
            Our rifle deer hunts are done through the corporation Dakota Trophy
            Hunt. We have been hunting rifle deer since 1965. The rifle deer
            season is a 16-day season in November. We run three hunts during the
            season. All rifle deer hunts are four days in length and fully
            guided. As a guest of Dakota Trophy Hunt, more than 140,000 acres of
            rugged country along the Belle Fourche and Cheyenne Rivers are
            reserved exclusively for you. The hills and draws of these river
            breaks provide abundant habitat for deer. Large numbers of Mule Deer
            range in the breaks, while Whitetail range on the bottom land.
            During your hunt in this &quot;deer country&quot; you will not see
            any other hunters except those in your party. But you will see
            trophy deer every day and you will have opportunities to harvest.
            Your hunt will take place on private property. The philosophy of
            Dakota Trophy Hunt is conservation of game. Therefore, we encourage
            you to shoot only a four point or better trophy buck (Western
            Count). We want to take only those bucks who have reached maturity
            and sport a true trophy class rack and thereby preserve a vigorous
            herd of deer so that year after year we can offer a trophy buck.
            Methods of hunting will vary according to which rancher/guide you
            hunt with and terrain. We can accommodate anyone from the most
            vigorous mountain hiker to the physically handicapped sportsman.
            Transportation to and from camp and one hunting area to another will
            generally be by a pickup or suburban. From there most hunts are spot
            and stalk. Dakota Trophy Hunt will take care of all your needs
            during your hunt. Three delicious meals will be served each day and
            hunters always rave about the food. If you are hunting some distance
            from the kitchen, you will take noon lunch with you. Your
            rancher/guide will have you back in camp in time for a steak or
            prime rib type of dinner at night. While hunting you will see
            numerous bucks and will have no problem scoring, if your rifle is
            zeroed in and you have practiced with it. Sight your rifle in for
            100-yard or 200-yard shots, depending on what you are accustomed to.
            <br />
            Some hunters take their meat and heads home with them, however we
            have families in need close by if you choose to donate meat. We also
            have an outstanding taxidermist available with reasonable rates.
            Many of our hunters use this option when they have availability.
            Some hunters choose to drive their own automobile to our camp while
            others fly into Rapid City to be picked up and taken back by Dakota
            Trophy. Since our hunting facilities are limited, we book only the
            number of hunters that each rancher can fill with trophy bucks. We
            book early and are years out! <br />
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <p style="font-weight: bold" class="text-center">
            More Trophy Class Bucks per square mile than anywhere on the
            continent
            <br />

            High success rates <br />
            Unprecedented hunter satisfaction since 1965
          </p>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
  <hr/>
    <shared-footer></shared-footer>
  </div>
</template>

<script>
import SharedFooter from "./SharedFooter.vue";

export default {

  components: {
    SharedFooter,
  },
};
</script>

<style>
</style>
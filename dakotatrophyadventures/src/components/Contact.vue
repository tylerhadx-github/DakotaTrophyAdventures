<template>
  <div>
    <v-card :height="windowSize.y" v-if="!sentMessage">
      <v-card-title style="justify-content: center">
        <h3 class="headline mb-0">Contact Us</h3>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col
            style="
              color: black;
              font-family: Tahoma, Geneva, sans-serif;
              font-size: 16px;
            "
          >
            <v-btn
              href="tel:+16054411685"
              color="primary"
              class="white--text"
              dark
            >
              <v-icon left>mdi-phone</v-icon>
              (605) 441-1685
            </v-btn>
            Tomilyn's Cell Best Method of Contact - you can call or text
          </v-col>
        </v-row>
        <v-row>
          <v-col
            style="
              color: black;
              font-family: Tahoma, Geneva, sans-serif;
              font-size: 16px;
            "
          >
            <v-btn
              href="tel:+16057982116"
              color="primary"
              class="white--text"
              dark
            >
              <v-icon left>mdi-phone</v-icon>
              605-798-2116
            </v-btn>
            House
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn
              href="mailto:huntdakotaTrophy@gmail.com"
              color="primary"
              class="white--text"
              dark
            >
              <v-icon left>mdi-email</v-icon>
              huntdakotaTrophy@gmail.com Email Us
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            style="
              color: black;
              font-family: Tahoma, Geneva, sans-serif;
              font-size: 16px;
            "
          >
            <p>21858 Mule Deer Drive.</p>
            <p>Wasta, SD 57791</p>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <form
              id="fs-frm"
              name="simple-contact-form"
              accept-charset="utf-8"
              action="https://formspree.io/f/meqnkogd"
              method="post"
            >
              <fieldset id="fs-frm-inputs">
                <label for="full-name">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="full-name"
                  placeholder="First and Last"
                  required=""
                />
                <label for="email-address">Email Address</label>
                <input
                  type="email"
                  name="_replyto"
                  id="email-address"
                  placeholder="email@domain.tld"
                  required=""
                />
                <label for="message">Message</label>
                <textarea
                  rows="5"
                  name="message"
                  id="message"
                  placeholder="Message"
                  required=""
                ></textarea>
                <input
                  type="hidden"
                  name="_subject"
                  id="email-subject"
                  value="Contact Form Submission"
                />
              </fieldset>
              <input type="submit" value="Submit" /></form></v-col
        ></v-row>
      </v-card-text>
    </v-card>
    <v-row>
      <v-col>
        If you're interested in learning about the origins of Dakota Trophy and
        our family, the ones responsible for booking and running the camp,
        please continue reading below. The Spanish Five Ranch, located in Wasta,
        South Dakota, is owned and operated by Tom and Shelia Trask along with
        their children, Mark, Mick, and Tomilyn. Covering nearly 20,000 acres
        along the Cheyenne and Elk Creek tributaries, the ranch is a diverse
        business involved in everything related to hunting and outdoor
        recreation. This includes trophy Mule Deer and Whitetail to Antelope and
        Merriam turkeys. The ranch comprises cattle, registered quarter horses,
        and personal hunting trips spanning from Alaska to Africa, many
        provinces in Canada, numerous western United States, and as far south as
        New Zealand and Australia. Dakota Trophy Adventures is dedicated to
        helping clients locate great hunting areas and enjoy the great outdoors.
        We take pride in providing recommendations for outfitters we've hunted
        with worldwide. Dakota Trophy Hunt, a corporation of our ranch and about
        12 others, focuses on rifle Mule Deer and Whitetail hunting. Originally
        started as Dakota Safari in 1965, the group of ranchers split into two
        organizations in the 1980s. We retained the camp and changed our name to
        Dakota Trophy, while the other organization kept the name and is based
        across the Cheyenne River from us. Handling the booking for Dakota
        Trophy Hunt since 1987, our base camp is at our ranch headquarters. Over
        the years, this successful group of ranchers has taken many Trophy Mule
        Deer and Whitetail, covering around 140,000 acres of private land.
        Dakota Trophy Adventures also runs a guiding service for Merriam turkeys
        in the spring, as well as antelope hunts and any archery deer hunts.
        While it is based out of the same camp, it is primarily a family
        business. The ranch we live on, situated on the prairie of South Dakota,
        is an old family ranch of Tom's parents, Mark, and Winnie Trask. Tom
        Trask, born and raised in the Elm Springs area, grew up in the business
        of ranching and hunting. After serving hunters dinner in 1989, Tom took
        Shelia to the hospital where Mark was born premature. Mick was born in
        1991, and Tomilyn in 1993. All three attended the local rural school
        until Mark went to high school in Philip. The boys went on to brief
        college careers and taxidermy school. They are currently home ranching,
        hunting, and doing taxidermy. Shelia, who grew up northeast of Philip,
        SD on a cattle and sheep ranch, attended a rural school and then went on
        to high school in Philip. After graduation, she attended SDSU and then
        graduated from BHSU with a degree in business and education. Tomilyn,
        who went to college and graduated with a degree in Mathematics
        Education, currently lives at home and is involved in the ranch as well
        as doing the booking and paperwork for Dakota Trophy. Levi (born in
        2010) and Annie (born in 2014), their grandchildren, also live on the
        ranch and are involved in helping. We enjoy hunting ourselves and do so
        whenever time and finances allow. Having hunted numerous provinces in
        Canada, as well as Alaska and many states in the lower 48, we also have
        outfitter connections in Africa, New Zealand, and Australia. We love to
        talk hunting and are familiar with some great people in the world of
        hunting. If you need assistance in booking a hunt with a quality,
        reliable outfitter, we are here to help. We don't recommend anyone that
        we have not personally hunted with. Please check under the Reviews tab
        for links to outfitters we recommend. Along with hunting comes the
        preservation of trophies. Tom has done some taxidermy for our purposes.
        Currently, Mark and Mick have taken up the business of taxidermy, having
        studied under Tom Matuska of Northwest Iowa School of Taxidermy. They
        work on taxidermy mostly during the winter months or whenever they get
        time in between ranching obligations. Please look at the Taxidermy tab
        for more information on Dakota Trophy Taxidermy! To talk hunting,
        cattle, or horses, please contact us as we'd love to visit with you!
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Contact",

  components: {},
  methods: {
    getdata() {},
    validate() {},
  },
  data: function () {
    return {
      sentMessage: false,
      valid: true,
      name: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) =>
          (v && v.length <= 100) || "Name must be less than 100 characters",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      description: null,
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

<style>
#fs-frm input,
#fs-frm select,
#fs-frm textarea,
#fs-frm fieldset,
#fs-frm optgroup,
#fs-frm label,
#fs-frm #card-element:disabled {
  font-family: inherit;
  font-size: 100%;
  color: inherit;
  border: none;
  border-radius: 0;
  display: block;
  width: 100%;
  padding: 0;
  margin: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
}
#fs-frm label,
#fs-frm legend,
#fs-frm ::placeholder {
  font-size: 0.825rem;
  margin-bottom: 0.5rem;
  padding-top: 0.2rem;
  display: flex;
  align-items: baseline;
}

/* border, padding, margin, width */
#fs-frm input,
#fs-frm select,
#fs-frm textarea,
#fs-frm #card-element {
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 0.9);
  padding: 0.75em 1rem;
  margin-bottom: 1.5rem;
}
#fs-frm input:focus,
#fs-frm select:focus,
#fs-frm textarea:focus {
  background-color: white;
  outline-style: solid;
  outline-width: thin;
  outline-color: gray;
  outline-offset: -1px;
}
#fs-frm [type="text"],
#fs-frm [type="email"] {
  width: 100%;
}
#fs-frm [type="button"],
#fs-frm [type="submit"],
#fs-frm [type="reset"] {
  width: auto;
  cursor: pointer;
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
}
#fs-frm [type="button"]:focus,
#fs-frm [type="submit"]:focus,
#fs-frm [type="reset"]:focus {
  outline: none;
}
#fs-frm [type="submit"],
#fs-frm [type="reset"] {
  margin-bottom: 0;
}
#fs-frm select {
  text-transform: none;
}

#fs-frm [type="checkbox"] {
  -webkit-appearance: checkbox;
  -moz-appearance: checkbox;
  appearance: checkbox;
  display: inline-block;
  width: auto;
  margin: 0 0.5em 0 0 !important;
}

#fs-frm [type="radio"] {
  -webkit-appearance: radio;
  -moz-appearance: radio;
  appearance: radio;
}

/* address, locale */
#fs-frm fieldset.locale input[name="city"],
#fs-frm fieldset.locale select[name="state"],
#fs-frm fieldset.locale input[name="postal-code"] {
  display: inline;
}
#fs-frm fieldset.locale input[name="city"] {
  width: 52%;
}
#fs-frm fieldset.locale select[name="state"],
#fs-frm fieldset.locale input[name="postal-code"] {
  width: 20%;
}
#fs-frm fieldset.locale input[name="city"],
#fs-frm fieldset.locale select[name="state"] {
  margin-right: 3%;
}
</style>

<template>
  <div class="contact-page">
    <!-- Page Header -->
    <section class="page-header">
      <v-container>
        <h1 class="page-title text-center">Contact Us</h1>
        <p class="page-subtitle text-center">
          Ready to book your hunt? Get in touch with us today.
        </p>
      </v-container>
    </section>

    <v-container>
      <v-card class="contact-card" v-if="!sentMessage" flat>
        <v-card-text class="contact-content">
        <v-row class="mb-2">
          <v-col cols="12" class="contact-item">
            <v-btn
              href="tel:+16054411685"
              color="primary"
              outlined
              class="mb-2"
            >
              <v-icon left>mdi-phone</v-icon>
              (605) 441-1685
            </v-btn>
            <div class="contact-label">Tomilyn's Cell - Best Method of Contact (call or text)</div>
          </v-col>
        </v-row>
        <v-row class="mb-2">
          <v-col cols="12" class="contact-item">
            <v-btn
              href="tel:+16057982116"
              color="primary"
              outlined
              class="mb-2"
            >
              <v-icon left>mdi-phone</v-icon>
              (605) 798-2116
            </v-btn>
            <div class="contact-label">House</div>
          </v-col>
        </v-row>
        <v-row class="mb-2">
          <v-col cols="12" class="contact-item">
            <v-btn
              href="mailto:huntdakotaTrophy@gmail.com"
              color="primary"
              outlined
              class="mb-2"
            >
              <v-icon left>mdi-email</v-icon>
              Email Us
            </v-btn>
            <div class="contact-label">huntdakotaTrophy@gmail.com</div>
          </v-col>
        </v-row>
        <v-row class="mb-4">
          <v-col cols="12" class="contact-item">
            <v-icon color="primary" class="mr-2">mdi-map-marker</v-icon>
            <div class="contact-label">
              21858 Mule Deer Drive<br>
              Wasta, SD 57791
            </div>
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
              <input type="submit" value="Submit" class="cta-button" /></form></v-col
        ></v-row>
      </v-card-text>
    </v-card>
    </v-container>
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
  computed: {},
};
</script>

<style scoped>
.contact-page {
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

/* Contact Card */
.contact-card {
  max-width: 700px;
  margin: 0 auto 60px;
  padding: 32px;
  background: white;
  border-radius: 12px;
}

/* Contact info styling */
.contact-content {
  max-width: 600px;
  margin: 0 auto;
}

.contact-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: var(--color-text);
  font-family: var(--font-body);
  font-size: 16px;
}

.contact-label {
  margin-top: 4px;
  color: var(--color-text);
  opacity: 0.8;
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

  .contact-card {
    padding: 24px 16px;
    margin: 0 16px 40px;
  }

  .contact-item .v-btn {
    width: 100%;
    justify-content: center;
  }

  .contact-label {
    text-align: center;
    width: 100%;
  }

  .contact-item {
    align-items: center;
    text-align: center;
  }
}

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

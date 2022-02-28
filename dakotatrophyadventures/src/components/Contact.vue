<template>
 <div style="padding-top:128px">
     <v-row><v-col>
    <v-card :height="windowSize.y" v-if="!sentMessage">
        <v-card-title>
            <h3 class="headline mb-0">Contact Us</h3>
        </v-card-title>
        <v-card-text>

                <v-form ref="form"
                        v-model="valid"
                        lazy-validation
                        sx6>
                    <v-text-field v-model="name"
                                  :counter="100"
                                  :rules="nameRules"
                                  label="Name"
                                  required></v-text-field>

                    <v-text-field v-model="email"
                                  :rules="emailRules"
                                  label="E-mail"
                                  required></v-text-field>

                    <v-textarea v-model="description"
                              :items="items"
                              label="Item"
                              required></v-textarea>

                  

                    <v-btn :disabled="!valid"
                           color="success"
                           @click="validate">
                        Send
                    </v-btn>

                </v-form>
        </v-card-text>
    </v-card>
    </v-col></v-row>
     <v-row><v-col>
    <v-card :height="windowSize.y" v-if="sentMessage">
        <v-card-title>
            <h3 class="headline mb-0">Message Sent</h3>
        </v-card-title>
        <v-card-text>
            <v-layout align-center justify-center>
                <v-btn color="success"
                       @click="sentMessage = false">
                    Back
                </v-btn>
            </v-layout>
        </v-card-text>
    </v-card>
    </v-col></v-row>
</div>
</template>

<script>
  export default {
    name: 'Contact',
        
        components: {

        },
        methods: {
            getdata() {
            },
            validate() {
                if (this.$refs.form.validate()) {
                    this.sentMessage = false;
                 var model = {
                        To: "tyler.hadx@gmail.com",
            ContactEmail: this.email,
            Message: this.description,
            App: "Dakota Trophy Adventures",
            From: "Contact@DakotaTrophyAdventures.com",
            Subject: "Dakota Trophy Adventures Contact form.",
            Name: this.name,
                 };


                 fetch("https://fireemail.gear.host/api/Email",{
                    method: "POST",
                    body: JSON.stringify(model),
                    headers: {
                        "Content-Type": "application/json"
                    }   
                    }).then(function(response) {
                        return response.json();
                    }).then(function(data) {
                      this.sentMessage = true;
                      console.log(data);
                    }).catch(function(error) {
                        console.log(error);
                    });
                }
            },
            
        },
        data: function() {
            return {
                sentMessage: false,
                valid: true,
                name: '',
                nameRules: [
                    v => !!v || 'Name is required',
                    v => (v && v.length <= 100) || 'Name must be less than 100 characters'
                ],
                email: '',
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid'
                ],
                description: null,
                
            };
        },
        mounted: function() {
            this.getdata();
        },
        computed: {
            windowSize: function () {
                return { x: window.innerWidth, y: window.innerHeight };
            }
        }
  }
</script>

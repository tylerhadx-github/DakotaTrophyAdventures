<template>
 <div style="padding-top:128px">
    <v-card :height="windowSize.y">
        <v-card-title>
            <h3 class="headline mb-0">Contact Us</h3>
        </v-card-title>
        <v-card-text>
            <v-layout align-center justify-center>

                <v-form ref="form"
                        v-model="valid"
                        lazy-validation
                        sx6>
                    <v-text-field v-model="name"
                                  :counter="10"
                                  :rules="nameRules"
                                  label="Name"
                                  required></v-text-field>

                    <v-text-field v-model="email"
                                  :rules="emailRules"
                                  label="E-mail"
                                  required></v-text-field>

                    <v-select v-model="select"
                              :items="items"
                              :rules="[v => !!v || 'Item is required']"
                              label="Item"
                              required></v-select>

                    <v-checkbox v-model="checkbox"
                                :rules="[v => !!v || 'You must agree to continue!']"
                                label="Do you agree?"
                                required></v-checkbox>

                    <v-btn :disabled="!valid"
                           color="success"
                           @click="validate">
                        Validate
                    </v-btn>

                    <v-btn color="error"
                           @click="reset">
                        Reset Form
                    </v-btn>

                    <v-btn color="warning"
                           @click="resetValidation">
                        Reset Validation
                    </v-btn>
                </v-form>
            </v-layout>
        </v-card-text>
    </v-card>
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
                    this.snackbar = true;
                }
            },
            reset() {
                this.$refs.form.reset();
            },
            resetValidation() {
                this.$refs.form.resetValidation();
            }
        },
        data: function() {
            return {

                valid: true,
                name: '',
                nameRules: [
                    v => !!v || 'Name is required',
                    v => (v && v.length <= 10) || 'Name must be less than 10 characters'
                ],
                email: '',
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid'
                ],
                select: null,
                items: [
                    'Item 1',
                    'Item 2',
                    'Item 3',
                    'Item 4'
                ],
                checkbox: false
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

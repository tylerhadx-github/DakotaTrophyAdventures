<template>
    <v-card>
        <v-card-title>
            <h3 class="headline mb-0">Gallery</h3>
        </v-card-title>
        <v-card-text xs12>
            <v-progress-linear :active="loading" indeterminate="indeterminate"></v-progress-linear>
            <v-container fluid
                         grid-list-md>
                <v-layout row wrap xs10>
                    <v-flex v-for="i in Galleries" xs12 sm12 md4 lg4 :key="i.galleryId">

                        <v-card>
                            <v-layout row wrap>
                                <v-flex xs12>
                                    <v-card-title primary-title>
                                        <div>
                                            <div>{{ i.name }} </div>
                                        </div>
                                    </v-card-title>
                                    <v-card-text>
                                        <v-img :src="i.url"
                                               aspect-ratio="1"
                                               @click="openItem(i.galleryId)"
                                               class="grey lighten-2">
                                            </v-img>
                                    </v-card-text>
                                </v-flex>
                            </v-layout>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn @click="openItem(i.galleryId)">View More</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>

            </v-container>
        </v-card-text>
    </v-card>
</template>

<script>
  export default {
    name: 'Gallerys',
        components: {

        },
        methods: {
          
            openItem(i) {
                this.$router.push({ name: 'Gallery', params: { ItemID: i } })
            }
        },
        data: function() {
            return {
                Galleries: [{"galleryId":1,"name":"Mule Deer","url":"/img/Deer/Mule Deer/Doug Reigner MD.JPG"},{"galleryId":2,"name":"White-tailed Deer","url":"/img/Deer/Whitetail/Jeremy Lewis WT.png"},{"galleryId":3,"name":"Antelope","url":"/img/Antelope/p_0016.jpg"},{"galleryId":4,"name":"Turkey","url":"/img/Turkey/turkeys.jpg"},{"galleryId":5,"name":"Taxidermy","url":"/img/Taxidermy/Trophy Room _20_.JPG"},{"galleryId":6,"name":"Landscape","url":"/img/Landscape/001.JPG\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  "},{"galleryId":7,"name":"Other Animals","url":"/img/Other Animals/2009 Yukon moose.jpg\t\t\t\t\t\t\t\t\t   "},{"galleryId":8,"name":"Misc","url":"/img/misc/Spring 09 051.JPG"},{"galleryId":9,"name":"Trail Camera","url":"/img/Trail Camera/MFDC3328.JPG"},{"galleryId":10,"name":"Horses","url":"/img/horses/Archery 358.JPG"}],
                loading:false,
            };
        },
        mounted: function() {
        },
        computed: {
            windowSize: function () {
                return { x: window.innerWidth, y: window.innerHeight };
            },
        }
  }
</script>

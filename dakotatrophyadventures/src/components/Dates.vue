<template>
<div>
      <v-card>
        <v-card-title>
            <h3 class="headline mb-0">Dates</h3>
        </v-card-title>
        <v-card-text>
            <div v-html="Dates"></div>
        </v-card-text>
    </v-card>

    <v-card>
        <v-card-title>
            <h3 class="headline mb-0">Application</h3>
        </v-card-title>
        <v-card-text>
            <div v-html="Application"></div>
        </v-card-text>
    </v-card>
    </div>
</template>

<script>
  export default {
    name: 'Dates',

    components: {

        },
        methods: {
            getdata() {

              
            }
        },
        data: function() {
            return {
                Dates: "<h3 style=\"color: rgb(0, 0, 0);\">Season Start Dates</h3><p style=\"color: rgb(255, 255, 255);\">2018</p><p style=\"color: rgb(255, 255, 255);\">(Tentative Dates only)</p><div align=\"left\" style=\"color: rgb(0, 0, 0);\"><strong>Rifle Deer Hunt:</strong></div><div align=\"left\" style=\"color: rgb(0, 0, 0);\"><strong>(West River Deer)</strong></div>Nov 10<div align=\"left\" style=\"color: rgb(0, 0, 0);\"><strong>Archery Deer Hunt:</strong></div><font color=\"#000000\">Sept 22</font><div align=\"left\" style=\"color: rgb(0, 0, 0);\"><strong>Rifle Antelope:</strong></div><font color=\"#000000\">Sept 29</font><div align=\"left\" style=\"color: rgb(0, 0, 0);\"><strong>Archery Antelope:</strong></div><font color=\"#000000\">Aug 18</font><div align=\"left\" style=\"color: rgb(0, 0, 0);\"><strong>Coyote:</strong></div>year round<div align=\"left\" style=\"color: rgb(0, 0, 0);\"><strong><br></strong></div><div align=\"left\" style=\"color: rgb(0, 0, 0);\"><strong>Archery Turkey:&nbsp;</strong><span style=\"font-family: inherit; font-size: 1rem;\">Apr 7</span></div><div><strong><br></strong></div><div><strong>Turkey:&nbsp;</strong><span style=\"color: rgb(0, 0, 0); font-family: inherit; font-size: 1rem;\">Apr 14</span><strong><br></strong><b><font color=\"#000000\"><br></font></b></div><div><b><font color=\"#000000\">Pheasant:</font></b><font color=\"#000000\">Oct 20</font>Link to GFP website for dates:<a href=\"http://gfp.sd.gov/hunting/future-dates.aspx\" style=\"color: rgb(242, 114, 41);\">http://gfp.sd.gov/hunting/future-dates.aspx</a><br></div>",
                Application: "<div>South Dakota Game, Fish &amp; Parks</div><div><br></div><div>South Dakota does have a lottery draw. We do not have landowner tags that can be sold to clients. You have to put in for a license. We will assist you through the application process.</div><div><br></div><div>For rifle deer: There are two separate drawings. The West River Special Buck drawing is usually due mid-April. This drawing is a private-land only tag and good for either species. You will be contacted with instructions to apply ahead of time. The Regular Season draw is usually due around mid-July. This drawing is unit specific and species specific. You will be contacted with instructions to apply ahead of time if you were unsuccessful in the Special Buck drawing.</div><div><br></div><div>If you are wanting to hunt mule deer and then whitetail on a trophy fee basis, you must first draw a mule deer tag in either drawing. We then have to wait until the third round of the Regular Season draw to put in for a whitetail tag. Some years there are leftover whitetail tags in certain units.</div><div><br></div><div>For archery deer: Licenses are unlimited, but you still have to apply. Again, we will send instructions.</div><div><br></div><div>For turkeys: The drawing is usually due mid-February. More than likely you will not draw a license on the first round. You will then put in during the third drawing, or obtain a leftover license. Many times there are still leftover licenses during season. We will send instructions on how and when to apply.</div><div><br></div><div>If you have questions, please don't hesitate to let us know!&nbsp;</div><div><br></div>",
            }
        },
        mounted: function() {
            this.getdata();
        },
        computed: {

        }
  }
</script>

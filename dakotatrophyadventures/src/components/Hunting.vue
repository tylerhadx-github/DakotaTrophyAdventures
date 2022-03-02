<template>
<div>

 
    <v-card>
        <v-card-title>
            <v-flex sm6 offset-sm3 xs12>
                <!--<h3 class="headline mb-0" style="text-align:center">Featured Services</h3>-->
            </v-flex>
        </v-card-title>
        <v-card-text sm10 offset-sm1 xs12 style="color:black">

        <p>Hunts include:</p>
        <ul>
            <li>All lodging while hunting (we have a base camp)</li>
            <li>All meals and beverages while hunting</li>
            <li>Transportation to and from Rapid City Regional Airport</li>
            <li>Full or Semi guided hunting -depending on hunt booked</li>
            <li>Alcoholic beverages within reason</li>
            </ul>
       <p>Items NOT included:</p>
    <ul>
            <li>Licenses</li>
            <li>Taxidermy services</li>
            <li>Shipping of trophies or meat</li>
            <li>Meat processing</li>
            <li>Alcohol other than what is furnished</li>
            <li>Gratuity for Guide & Staff</li>
            <li>Taxes required by the state of South Dakota</li>
            <li>Firearms and ammunition available at reasonable cost with advance notice.</li>
</ul>
            Non-hunters are welcome, just please let us know if you plan on bringing a non-hunting companion!
        </v-card-text>
    </v-card>
    <v-card>
        <v-card-title>
            <v-flex sm6 offset-sm3 xs12>
                <h3 class="headline mb-0" style="text-align:center">Hunts</h3>
            </v-flex>
        </v-card-title>
        <v-card-text sm10 offset-sm1 xs12>
            <div v-html="Hunts"></div>
        </v-card-text>
    </v-card>
    <v-card>
        <v-card-title>
            <v-flex sm6 offset-sm3 xs12>
                <h3 class="headline mb-0" style="text-align:center">Accommodations</h3>
            </v-flex>
        </v-card-title>
        <v-card-text sm10 offset-sm1 xs12>
            <div v-html="Accommodations"></div>
        </v-card-text>
    </v-card>
    <v-card>
        <v-card-title>
            <v-flex sm6 offset-sm3 xs12>
                <h3 class="headline mb-0" style="text-align:center">Deer</h3>
            </v-flex>
        </v-card-title>
        <v-card-text sm10 offset-sm1 xs12>
            <div style="color:black" v-html="Deer"></div>
        </v-card-text>
    </v-card>
    <v-card>
        <v-card-title>
            <v-flex sm6 offset-sm3 xs12>
                <h3 class="headline mb-0" style="text-align:center">Turkeys</h3>
            </v-flex>
        </v-card-title>
        <v-card-text sm10 offset-sm1 xs12>
            <div style="color:black" v-html="Turkeys"></div>
        </v-card-text>
    </v-card>
    <v-card>
        <v-card-title>
            <v-flex sm6 offset-sm3 xs12>
                <h3 class="headline mb-0" style="text-align:center">Antelope</h3>
            </v-flex>
        </v-card-title>
        <v-card-text sm10 offset-sm1 xs12>
            <div style="color:black" v-html="Antelope"></div>
        </v-card-text>
    </v-card>
    <v-card>
        <v-card-title>
            <v-flex sm6 offset-sm3 xs12>
                <h3 class="headline mb-0" style="text-align:center">ArcheryDeer</h3>
            </v-flex>
        </v-card-title>
        <v-card-text sm10 offset-sm1 xs12>
            <div style="color:black" v-html="ArcheryDeer"></div>
        </v-card-text>
    </v-card>
</div>
</template>

<script>
  export default {
    name: 'Hunting',
        components: {

        },
        methods: {
            getdata() {
              
            }
        },
        data: function() {
            return {
                ArcheryDeer: "",
                Antelope: "",
                Turkey:"",
                Accommodations: "<font color=\"#000000\" face=\"Tahoma, Geneva, sans-serif\" size=\"3\">Our accommodations are not what you would see in a 5-star resort, but it is also not a tent camp in the wilderness. We have small bunkhouse style cabins (some with electric heat, some with a wood stove). The beds do have bedding, but we recommend that you bring a sleeping bag for extra warmth. There is also a detached shower house with two complete bathrooms - there are towels provided. For husband/wife couples, we usually have them stay in a spare bedroom in our house or in a camper for privacy. We serve meals in a garage attached to our house that is just a short distance from where you will be staying. We also have a pool table that you are more than welcome to use while socializing. We do our best to meet everyone's needs for accommodations, but if you have a special need, please let us know early so we can prepare!</font><br>",
                Hunts: "<div><font color=\"#000000\" face=\"Tahoma, Geneva, sans-serif\" size=\"3\">Our rifle deer hunts are done through the corporation Dakota Trophy Hunt. We have been hunting rifle deer since 1965. Tom is in charge of the booking for Dakota Trophy Hunt and has been since 1987. As of recently, he has been assisted by Tomilyn with the booking and paperwork.&nbsp; We do archery deer, turkey, and antelope separately.</font></div><div><font color=\"#000000\" face=\"Tahoma, Geneva, sans-serif\" size=\"3\"><br></font></div><div><font color=\"#000000\" face=\"Tahoma, Geneva, sans-serif\" size=\"3\">For more details on rifle deer hunts, check the Dakota Trophy Hunt tab above.</font></div><div><font color=\"#000000\" face=\"Tahoma, Geneva, sans-serif\" size=\"3\"><br></font></div><div><font color=\"#000000\" face=\"Tahoma, Geneva, sans-serif\" size=\"3\">For more details on turkey hunts, check the Dakota Trophy Turkeys tab above.</font></div><div><font color=\"#000000\" face=\"Tahoma, Geneva, sans-serif\" size=\"3\"><br></font></div><div><font color=\"#000000\" face=\"Tahoma, Geneva, sans-serif\" size=\"3\">For more details about hunting archery, check the Archery tab above.</font></div><div><font color=\"#000000\" face=\"Tahoma, Geneva, sans-serif\" size=\"3\"><br></font></div><div><font color=\"#000000\" face=\"Tahoma, Geneva, sans-serif\" size=\"3\">We do not do a lot of antelope hunting, but we do take antelope hunters occastionally. Please call or email for details!</font></div><div><font color=\"#000000\" face=\"Tahoma, Geneva, sans-serif\" size=\"3\"><br></font></div><div><font color=\"#000000\" face=\"Tahoma, Geneva, sans-serif\" size=\"3\">Call the references, book the hunt -you'll be glad you did!</font></div>",
                Deer: "<div><div><span style=\"color: inherit; font-family: inherit; font-size: 1rem;\">South Dakota Trophy Deer Hunts</span><br></div><div>As a guest of Dakota Trophy Hunt, more than 140,000 acres of rugged country along the Belle Fourche and Cheyenne Rivers are reserved exclusively for you. The hills and draws of these river breaks provide abundant habitat for deer. Large numbers of Mule Deer range in the breaks, while Whitetail range on the bottom land.</div><div><br></div><div>During your hunt in this \"deer country\" you will not see any other hunters except those in your party. But you will see trophy deer every day and you will have opportunities to harvest.</div><div><br></div><div>The philosophy of Dakota Trophy Hunt is conservation of game. Therefore, we encourage you to shoot only a four point or better trophy buck (Western Count). We want to take only those bucks who have reached maturity and sport a true trophy class rack and thereby preserve a vigorous herd of deer so that year after year we can offer a trophy buck.</div><div><br></div><div>Methods of hunting will vary according to which rancher/guide you hunt with and terrain. We can accommodate anyone from the most vigorous mountain hiker to the physically handicapped sportsman.</div><div><br></div><div>Transportation to and from camp and one hunting area to another will be by four wheel drive pickup.</div></div><div><br></div><div>Dakota Trophy Hunt will take care of all your needs during your hunt. Three delicious meals will be served each day and hunters always rave about the food. If you are hunting some distance from the kitchen, you will take noon lunch with you. Your rancher/guide will have you back in camp in time for a steak or prime rib type of dinner at night.</div><div><br></div><div>At our hunting camp you will be housed in a heated ranch house with a shower and toilet. You will be provided with a cot where you can roll out your sleeping bag.</div><div><br></div><div>While hunting you will see numerous bucks and will have no problem scoring, if your rifle is zeroed in and you have practiced with it. Sight your rifle in for 100 or 200 yard shots, depending on what you are accustomed to.</div><div><br></div><div>Some hunters take their meat and heads home with them, however we will transport your deer to a local locker plant. We have an outstanding taxidermist available with reasonable rates. Many of our hunters use this option.</div><div><br></div><div>Some hunters choose to drive their own automobile to our camp while others fly into Rapid City to be picked up and taken back by Dakota Trophy Hunt.</div><div><br></div><div>Since our hunting facilities are limited, we book only the number of hunters that each rancher can fill with trophy bucks. We book early!</div><div><br></div><div>Mule Deer</div><div>We take about 80% Mule Deer hunters and 20% Whitetail hunters. You can expect to take a Mule Deer buck from 22\"-30\" in width at least 3.5 years old and usually older. The average width is 24\". Most of our Mule Deer hunters will take their buck inside of 250 yards so a flat shooting rifle with some power is great! Practice!</div><div><br></div><div>Whitetail Deer</div><div>We have a more limited number of whitetail openings available and they fill very fast. Our Whitetail run from 17 to 24 inches wide with heavy horns on mature bucks.</div><div><br></div><div>Mule Deer or Whitetail Hunt</div><div>We also offer a 2 deer hunt 6 days in length with appropriate licenses. This is ideal for the hunter wanting a great opportunity to collect 2 trophies on one trip.</div><div><br></div><div>Hunting Season &amp; License Info</div><div>In this part of South Dakota, the deer season usually opens the second Saturday of November. Hunts with Dakota Trophy Hunt are 4 or 6 days in length. Dakota Trophy Hunt will mail your applications and licensing information when they become available to us (usually in June). Deer licenses are issued by computer lottery by the South Dakota Department of Game, Fish and Parks.</div><div><br></div><div>Most asked questions on hunting with Dakota Trophy</div><div><br></div><div>How do I book a hunt?</div><div>To book a hunt we require a deposit upon booking and another deposit the 1st of May of the year to be hunted. Final payment is due upon arrival or 30 days prior to arrival. Deposits are nonrefundable after the second deposit, unless we can rebook your spot and secure the proper license and tag for your replacement. Any cancellations after September 1 the deposits are nonrefundable. Forwarding your booking to the following year will be considered on an individual basis. You will want to contact us early as we book up early most years and have some bookings as far as 2-3 years from now.</div><div><br></div><div>What kind of success can I expect?</div><div>Unless you are looking for a B&amp;C head you can be assured of several chances at nice trophy animals. The rest is up to you.</div><div><br></div><div>What's the best rifle to bring?</div><div>Big deer can be tough, we recommend a .270 or larger rifle, but more important is accuracy. Practice with your gun and know exactly where it is shooting. Practice, practice, practice.</div><div><br></div><div>How do I get a license?</div><div>We will mail applications to everyone booked with instructions on units and types to apply for. We actually have several different drawings to work at.</div><div><br></div><div>What is your guarantee?</div><div>We guarantee 100% effort in assisting you to a trophy animal you will be proud of. We can't control weather, marksmanship, or luck, but we do guarantee you an opportunity at a 4 point on one side or better buck, or we will refund a portion of your fee.</div><div><br></div><div>Trophy Mule Deer &amp; Whitetail</div><div>Hunt South Dakota to Discover....</div><div><br></div><div>More Trophy Class Bucks per square mile than anywhere on the continent</div><div>High success rates</div><div>Unprecedented hunter satisfaction since 1966</div><div>&nbsp;</div><div><br></div>",
                Featured: [
                    {
                        image: "http://www.dakotatrophyadventures.com/format/main_2.png",
                        title: "Ranch",
                        description: "The Spanish Five Ranch of Wasta, South Dakota is owned and operated by Tom and Shelia Trask and their children, Mark, Mick and Tomilyn.  The ranch covers nearly 18,000 acres along the Cheyenne River and Elk Creek tributaries.  Dakota Trophy Adventures is a diverse business involving everything to do with hunting and outdoor recreation from Trophy Mule Deer and Whitetail to Antelope and Merriam Turkeys.  It includes registered quarter horses and hunting trips from Alaska to Africa and places in between such as Yukon, Northwest Territories, British Columbia, Alberta Saskatchewan, and New Zealand/Australia as well as over much of the Western United States. Dakota Trophy Adventures is in the business of helping and assisting clients locate great hunting areas and enjoy hunting and the great outdoors! We can give great recommendations for outfitters that we have hunted with!",
                    },
                    {
                        image: "http://www.dakotatrophyadventures.com/format/main_1.png",
                        title: "History",
                        description: "The ranch we live on is on the prairie of South Dakota and an old family ranch of Tom’s parents, Mark and Winnie Trask.  His father, Mark Trask, was instrumental in starting a commercial hunting operation in 1965 in addition to raising cattle. Thus, Tom grew up in the business of ranching and hunting. In addition to hunting we put up hay, raise cattle and still raise a few quarter horses.It’s not uncommon to see a hay field with all of the family running machinery or a pasture or corral with everyone working cattle.We have been in the horse business in one form or another most of our lives.We currently maintain a small band of registered mares and have a few senior stallions.Of course when you raise horses you always have a young prospect coming up! We concentrate our efforts in the horse business on disposition, soundness and conformation specializing in buckskins and palominos.Our band of mares and stallions are contributing to the color.Our colts/ prospects are bred for pleasure, ranch and the rodeo arena. Dakota Trophy Hunt is a corporation of our ranch and about 15 others for the purpose of rifle Mule Deer and Whitetail hunting.We have done the booking for Dakota Trophy Hunt since 1987. This very successful group of ranchers have taken many Trophy Mule Deer and Whitetail.The area encompasses nearly 140, 000-150, 000 acres of private land. Dakota Trophy Adventures/ Dakota Trophy Turkeys runs a guiding service for Merriam Turkeys in the spring.We have numerous private ranches with an unbelievable number of turkeys.Our hunters enjoy unequalled success of 180-200 % year in and year out! Many trophies are eligible for the record book! We currently hold 2 of the top 5 spots for Merriam Turkeys in the book - and yes, there is a Record Book for turkeys! We at DTA enjoy hunting ourselves and do so whenever time and finances allow! We have hunted British Columbia, Northwest Territories, Alberta, Saskatchewan and the Yukon in Canada as well as Alaska and numerous states in the lower 48.  We’ve also made several trips to Africa and trips to New Zealand / Australia with great success.Please view our pictures of trips and trophies under the Gallery.Along with hunting comes the preservation of trophies.Tom has done some taxidermy for our purposes.Currently, Mark and Mick have taken up the business of taxidermy having studied under Tom Matuska of Northwest Iowa School of Taxidermy.They work on taxidermy mostly during the winter months and whenever they can get time. We love to talk hunting and we know some great people in the world of hunting! Possibly we can help, advise or assist you in booking a hunt with a quality, reliable outfitter! We don’t recommend any one that we haven’t personally hunted with.If you ask about someone who we don’t feel is up to snuff, we’ll tell you that you can do better and recommend someone we know and have had personal experience with.Check under the links tab for great outfitters! If you’re interested in hunting, horses, cattle and / or ranching—please contact us we’d love to visit!",
                    },
                    //{
                    //    image: "https://cdn.pixabay.com/photo/2017/01/05/19/41/download-1956182_960_720.png",
                    //    title: "Cloud",
                    //    description: "Needed something else to say",
                    //},
                 
                ],
            };
        },
        mounted: function() {
            this.getdata();
        },
        computed: {
            windowSize: function () {
                return { x: window.innerWidth, y: window.innerHeight };
            },
        }
  }
</script>

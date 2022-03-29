<template>
<div>
    <v-card flat>
        <v-card-title>
            <v-flex sm6 offset-sm3 xs12>
            </v-flex>
        </v-card-title>
        <v-card-text sm10 offset-sm1 xs12 style="color:black;font-family: Tahoma, Geneva, sans-serif;font-size:16px">
            <div v-html="Hunts"></div>
        </v-card-text>
    </v-card>
    <v-card>
        <v-card-title>
            <v-flex sm6 offset-sm3 xs12>
                <h3 class="headline mb-0" style="text-align:center">Rifle Mule Deer and Whitetail Hunts</h3>
            </v-flex>
        </v-card-title>
        <v-card-text sm10 offset-sm1 xs12 style="color:black;font-family: Tahoma, Geneva, sans-serif;font-size:16px">
            <div v-html="Deer"></div>
        </v-card-text>
    </v-card>
    <v-card>
        <v-card-title>
            <v-flex sm6 offset-sm3 xs12>
                <h3 class="headline mb-0" style="text-align:center">Archery Deer Hunts</h3>
            </v-flex>
        </v-card-title>
        <v-card-text sm10 offset-sm1 xs12 style="color:black;font-family: Tahoma, Geneva, sans-serif;font-size:16px">
            <div v-html="ArcheryDeer"></div>
        </v-card-text>
    </v-card>
   
    <v-card>
        <v-card-title>
            <v-flex sm6 offset-sm3 xs12>
                <h3 class="headline mb-0" style="text-align:center">Merriam Turkey Hunts</h3>
            </v-flex>
        </v-card-title>
        <v-card-text sm10 offset-sm1 xs12 style="color:black;font-family: Tahoma, Geneva, sans-serif;font-size:16px">
            <div style="color:black" v-html="Turkeys"></div>
        </v-card-text>
    </v-card>
    <v-card>
        <v-card-title>
            <v-flex sm6 offset-sm3 xs12 >
                <h3 class="headline mb-0" style="text-align:center">Antelope Hunts</h3>
            </v-flex>
        </v-card-title>
        <v-card-text sm10 offset-sm1 xs12 style="color:black;font-family: Tahoma, Geneva, sans-serif;font-size:16px">
            <div style="color:black" v-html="Antelope"></div>
        </v-card-text>
    </v-card>
     <v-card>
        <v-card-title>
            <v-flex sm6 offset-sm3 xs12 >
                <h3 class="headline mb-0" style="text-align:center;font-size:16px;font-family:Tahoma, Geneva, sans-serif">Some information is the same for all hunts:</h3>
            </v-flex>
        </v-card-title>
        <v-card-text sm10 offset-sm1 xs12 style="color:black;font-family: Tahoma, Geneva, sans-serif;font-size:16px">
            <div style="color:black" v-html="Misc"></div>
        </v-card-text>
    </v-card>
    <v-card>
        <v-card-title>
            <v-flex sm6 offset-sm3 xs12>
                <h3 class="headline mb-0" style="text-align:center">Non Hunters</h3>
            </v-flex>
        </v-card-title>
        <v-card-text sm10 offset-sm1 xs12 style="color:black;font-family: Tahoma, Geneva, sans-serif;font-size:16px">
            <div style="color:black" v-html="NonHunters"></div>
        </v-card-text>
    </v-card>
     <v-card>
        <v-card-title>
            <v-flex sm6 offset-sm3 xs12>
                <h3 class="headline mb-0" style="text-align:center">Licensing/Tags</h3>
            </v-flex>
        </v-card-title>
        <v-card-text sm10 offset-sm1 xs12 style="color:black;font-family: Tahoma, Geneva, sans-serif;font-size:16px">
            <div style="color:black" v-html="Licensing"></div>
        </v-card-text>
    </v-card>
     <v-card>
        <v-card-title>
            <v-flex sm6 offset-sm3 xs12>
                <h3 class="headline mb-0" style="text-align:center">Frequently asked questions on hunting with Dakota Trophy</h3>
            </v-flex>
        </v-card-title>
        <v-card-text sm10 offset-sm1 xs12 style="color:black;font-family: Tahoma, Geneva, sans-serif;font-size:16px">
            <div style="color:black" v-html="FAQ"></div>
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
                ArcheryDeer: "We decided to offer archery hunting as an answer to the many requests from hunters who are archers. We have only been offering archery hunting for a short time, compared to the rifle hunts. We take a very limited number of archery hunters, mainly because we are extremely busy with fall cattle work right during archery season. Archery deer season opens on September 1 of every year and runs through the end of the year. We will not take archery hunters during rifle season. Hunt dates are more flexible, just please contact us for availability. Archery hunts are run differently than the rifle hunts. We hunt the same deer and the same area, just at different times. We do five-day hunts with a base price for the hunt, and then a trophy fee for blood drawn. We feel this is the best way to make sure it is fair for everyone because the success rate with archery is much less than with a rifle. We also don’t want people to take marginal or “iffy” shots and then have a wounded animal. Archery mule deer are full guided, archery whitetail hunts are semi- guided with a heavy use of blinds. Most of the archery hunting is from ground blinds (natural blinds, bale blinds, or some fiberglass blinds). We do limited spot and stalk with archery. We do not have tree stands. Blinds are placed on travel corridors to and from alfalfa fields or other crops. Archery licenses are unlimited on private land – so drawing is not a problem. You do still have to put in through the lottery draw system.",
                Antelope: "Our antelope hunts are very limited. We take only a couple of antelope hunters a year as the herds move frequently and herd size varies drastically. We hunt the same land as for deer, but antelope are generally found more on the flat ground than the river breaks. We do five day, fully-guided hunts. Season opens up the first weekend in October and we like to take our hunters right away in season.",
                Turkeys:"The river breaks and creek bottoms of western SD are home to an unbelievable number of Merriam turkeys. We offer turkey hunts mainly on the home place and a few surrounding ranches. We can hunt over 60,000 acres of private land to make sure you have the best opportunity at a trophy Merriam. Our hunters enjoy unequalled success year in and year out. Many trophies are eligible for the record book. <br> We currently hold 2 of the top 5 spots for Merriam turkeys in the record book – and yes, there is a record book for turkeys! Turkey season opens in mid April and runs through the end of May. We prefer to take our hunters on the weekends. Our turkey hunts are 3 day semi-guided hunts. We do one bird hunts with the option to take a second bird on a trophy fee. We can offer full-guided hunts upon request for an extra fee. We provide you with a vehicle (usually an ATV) to hunt with.",
                Accommodations: "Our accommodations are not what you would see in a 5-star resort, but it is also not a tent camp in the wilderness. We have small bunkhouse style cabins (some with electric heat, some with a wood stove). The beds do have bedding, but we recommend that you bring a sleeping bag for extra warmth if you have room. Besides the bunkhouse style cabins, the upstairs of Tomilyn’s house is used for lodging. There is a detached shower house with two complete bathrooms - there are towels provided. For husband/wife couples, we usually have them stay in a spare bedroom in the main house or in a camper for privacy. We serve meals in a garage attached to our house that is just a short distance from where you will be staying. We also have a pool table that you are more than welcome to use while socializing. We do our best to meet everyone&#39;s needs for accommodations, but if you have a special need, please let us know early so we can prepare!",
                Hunts: "<div><font color=\"#000000\" face=\"Tahoma, Geneva, sans-serif\" size=\"3\">Our rifle deer hunts are done through the corporation Dakota Trophy Hunt. We have been hunting rifle deer since 1965. Tom is in charge of the booking for Dakota Trophy Hunt and has been since 1987. As of recently, he has been assisted by Tomilyn with the booking and paperwork.&nbsp; We do archery deer, turkey, and antelope separately.</font></div><div><font color=\"#000000\" face=\"Tahoma, Geneva, sans-serif\" size=\"3\"><br></font></div><div><font color=\"#000000\" face=\"Tahoma, Geneva, sans-serif\" size=\"3\">We do not do a lot of antelope hunting, but we do take antelope hunters occastionally. Please call or email for details!</font></div><div><font color=\"#000000\" face=\"Tahoma, Geneva, sans-serif\" size=\"3\"><br></font></div><div><font color=\"#000000\" face=\"Tahoma, Geneva, sans-serif\" size=\"3\">Call the references, book the hunt -you'll be glad you did!</font></div>",
                Deer: "Our rifle deer hunts are done through the corporation Dakota Trophy Hunt. We have been hunting rifle deer since 1965. The rifle deer season is a 16 day season in November. We run three hunts during season. All rifle deer hunts are four days in length and fully guided. As a guest of Dakota Trophy Hunt, more than 140,000 acres of rugged country along the Belle Fourche and Cheyenne Rivers are reserved exclusively for you. The hills and draws of these river breaks provide abundant habitat for deer. Large numbers of Mule Deer range in the breaks, while Whitetail range on the bottom land. During your hunt in this &quot;deer country&quot; you will not see any other hunters except those in your party. But you will see trophy deer every day and you will have opportunities to harvest. Your hunt will take place on private property. The philosophy of Dakota Trophy Hunt is conservation of game. Therefore, we encourage you to shoot only a four point or better trophy buck (Western Count). We want to take only those bucks who have reached maturity and sport a true trophy class rack and thereby preserve a vigorous herd of deer so that year after year we can offer a trophy buck. Methods of hunting will vary according to which rancher/guide you hunt with and terrain. We can accommodate anyone from the most vigorous mountain hiker to the physically handicapped sportsman. Transportation to and from camp and one hunting area to another will generally be by a pickup or suburban. From there most hunts are spot and stalk. Dakota Trophy Hunt will take care of all your needs during your hunt. Three delicious meals will be served each day and hunters always rave about the food. If you are hunting some distance from the kitchen, you will take noon lunch with you. Your rancher/guide will have you back in camp in time for a steak or prime rib type of dinner at night. While hunting you will see numerous bucks and will have no problem scoring, if your rifle is zeroed in and you have practiced with it. Sight your rifle in for 100 or 200 yard shots, depending on what you are accustomed to. <br> Some hunters take their meat and heads home with them, however we have families in need close by if you choose to donate meat. We also have an outstanding taxidermist available with reasonable rates. Many of our hunters use this option. Some hunters choose to drive their own automobile to our camp while others fly into Rapid City to be picked up and taken back by Dakota Trophy. Since our hunting facilities are limited, we book only the number of hunters that each rancher can fill with trophy bucks. We book early and are years out! <br> More Trophy Class Bucks per square mile than anywhere on the continent <br> High success rates <br> Unprecedented hunter satisfaction since 1965",
                FAQ:"How do I book a hunt? To book a hunt we require a deposit upon booking. You are not booked until a deposit is on file! Final payment is due upon arrival or 30 days prior to arrival. Deposits are nonrefundable. If you do not draw the license (and have proof of application and preference point purchases) we will refund your deposit or roll you forward to the next available year. <br> What kind of success can I expect? Unless you are looking for a B&amp;C trophy you can be assured of several chances at nice trophy animals. The rest is up to you. We generally have a 98-100% success rate on rifle deer, around 50% success on archery deer, 150-200% success on turkeys, and have never had an antelope hunter go home eating tag soup. What&#39;s the best firearm to bring? Big deer (and antelope) can be tough, we recommend a .270 or larger rifle, but more important is accuracy. Practice with your gun and know exactly where it is shooting. Practice, practice, practice. Obviously, on turkey hunts, most hunters already have a favorite shotgun, and on archery hunts, we hope you plan on bringing a bow. How do I get a license? We will send information on how to apply and deadlines. You will need to acquire preference points for multiple years before the year you plan to hunt. We help you through this process. Please pay attention to the information we send you as if you don’t get the proper points it can deter a hunt you’ve had booked for years. We do not have transferable landowner tags, so if you do not draw the proper tag through the SDGF&amp;P, you are out of luck. What is your guarantee? We guarantee 100% effort in assisting you to a trophy animal you will be proud of. We can&#39;t control weather, marksmanship, or luck.",
                Misc:"Hunts include:  Lodging – We have a base camp with bunkhouse style accommodations. It is not a fancy 5 star lodge, but suitable for a hunting camp! * See more below!  Meals and beverages – Three meals and basic beverages are provided.  Transportation to and from Rapid City Regional Airport – please just be in contact with us if you plan to fly so we can accommodate flight times.  Full or Semi guided hunting - depending on the hunt booked. All of our rifle deer hunts are fully guided – no exceptions!  Alcoholic beverages within reason - if you require or want something very specific, you may want to bring that yourself! Hunts do NOT include:  Licenses – We have a lottery draw system. We will assist you through the application process, but the cost of the license is up to you! *See more below!  Taxes required by the state of South Dakota – The current state sales tax rate is 6%.  Taxidermy services – We have a taxidermist available if needed, or you are welcome to take your trophy home to your own taxidermist.  Meat processing – We have the option of someone who can process meat, or facilities for you to do it yourself if wanted.  Shipping of trophies or meat – Most guys prefer to take home with them, if you want to ship, we will help if possible.  Gratuity for Guides &amp; Staff  Firearms and ammunition – These can be available at reasonable cost with advance notice.",
                Licensing: "SD does have a lottery draw system with preference points. Preference points are $5 for a resident and $10 for a nonresident per drawing. License costs vary depending on the application and the species. Rifle deer – We have two separate drawings: West River Special Buck and West River Deer. West River Special Buck is a private land only tag and good for any unit west of the Missouri River except the Black Hills and reservation units. The West River Deer drawing is for the same deer and same season, but it can be used on private or public land and is unit specific. It currently takes around two to three years to draw the mule deer tag and around one to two for a whitetail tag. West River Special applications are generally due mid April. West River Deer applications are due mid June. Preference points can be purchased from Sept 15 through Dec 15. Archery deer – Archery deer tags are unlimited for hunters on private land. You do still have to “apply” for the license, but it is practically a guarantee. Turkeys – Turkey licenses are hard to draw on the first round. Most of our hunters draw in the third round or pick up their tags in the leftovers. Applications are generally due mid February and the third round is mid March. It is not a guarantee, but we have never had a turkey hunter not get a license. Preference points can be purchased in years prior up to Dec 15. Antelope – Antelope licenses are hard to draw. Similar to the rifle deer, there is a Special Antelope drawing for private land only tags. It usually tags a point or two to draw antelope. Timelines are the same as deer for applications.",
                NonHunters: "Non-hunters are welcome, just please let us know if you plan on bringing a non-hunting companion as it may depend on our accommodation availability! Please ask for the current pricing for a non-hunting companion."

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
<style>
div{
    font-size:16px;
    font-family:Tahoma, Geneva, sans-serif;
}
</style>
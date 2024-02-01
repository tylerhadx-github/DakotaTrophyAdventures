(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cee7fff2"],{"0e8f":function(e,t,a){"use strict";a("20f6");var r=a("e8f2");t["a"]=Object(r["a"])("flex")},"37c6":function(e,t,a){"use strict";var r=a("8e36");t["a"]=r["a"]},"615b":function(e,t,a){},"6ece":function(e,t,a){},"8e36":function(e,t,a){"use strict";var r=a("5530"),s=a("ade3"),i=(a("a9e3"),a("c7cd"),a("6ece"),a("0789")),o=a("90a2"),n=a("a9ad"),l=a("fe6c"),c=a("a452"),u=a("7560"),d=a("80d2"),h=a("58df"),f=Object(h["a"])(n["a"],Object(l["b"])(["absolute","fixed","top","bottom"]),c["a"],u["a"]);t["a"]=f.extend({name:"v-progress-linear",directives:{intersect:o["a"]},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(d["g"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(d["g"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var e,t=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return e={opacity:t},Object(s["a"])(e,this.isReversed?"right":"left",Object(d["g"])(this.normalizedValue,"%")),Object(s["a"])(e,"width",Object(d["g"])(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")),e},classes:function(){return Object(r["a"])({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible},this.themeClasses)},computedTransition:function(){return this.indeterminate?i["b"]:i["c"]},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=Object(d["g"])(this.normalizedBuffer,"%")),e}},methods:{genContent:function(){var e=Object(d["m"])(this,"default",{value:this.internalLazyValue});return e?this.$createElement("div",{staticClass:"v-progress-linear__content"},e):null},genListeners:function(){var e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar:function(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(s["a"])({},e,!0)}))},onClick:function(e){if(this.reactive){var t=this.$el.getBoundingClientRect(),a=t.width;this.internalValue=e.offsetX/a*100}},onObserve:function(e,t,a){this.isVisible=a},normalize:function(e){return e<0?0:e>100?100:parseFloat(e)}},render:function(e){var t={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?Object(d["g"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return e("div",t,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}})},"99d9":function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return l}));var r=a("b0af"),s=a("80d2"),i=Object(s["h"])("v-card__actions"),o=Object(s["h"])("v-card__subtitle"),n=Object(s["h"])("v-card__text"),l=Object(s["h"])("v-card__title");r["a"]},b0af:function(e,t,a){"use strict";var r=a("5530"),s=(a("a9e3"),a("0481"),a("4069"),a("615b"),a("10d2")),i=a("2b0e"),o=a("37c6"),n=i["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(o["a"],{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),l=a("1c87"),c=a("58df");t["a"]=Object(c["a"])(n,l["a"],s["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(r["a"])(Object(r["a"])({"v-card":!0},l["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},s["a"].options.computed.classes.call(this))},styles:function(){var e=Object(r["a"])({},s["a"].options.computed.styles.call(this));return this.img&&(e.background='url("'.concat(this.img,'") center center / cover no-repeat')),e}},methods:{genProgress:function(){var e=n.options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render:function(e){var t=this.generateRouteLink(),a=t.tag,r=t.data;return r.style=this.styles,this.isClickable&&(r.attrs=r.attrs||{},r.attrs.tabindex=0),e(a,this.setBackgroundColor(this.color,r),[this.genProgress(),this.$slots.default])}})},da79:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-card",{staticClass:"pa-4 ma-4",attrs:{flat:""}},[a("v-card-title",[a("v-flex",{attrs:{sm6:"","offset-sm3":"",xs12:""}},[a("h3",{staticClass:"headline mb-0",staticStyle:{"text-align":"center","font-size":"16px","font-family":"Tahoma, Geneva, sans-serif","white-space":"nowrap"}},[e._v(" General Information For All Hunts ")])])],1),a("v-card-text",{staticStyle:{color:"black","font-family":"Tahoma, Geneva, sans-serif","font-size":"16px"},attrs:{sm10:"","offset-sm1":"",xs12:""}},[a("div",{staticStyle:{color:"black"}},[a("p",[a("strong",[e._v("Hunts include:")]),e._v(" Lodging – We have a base camp with bunkhouse-style accommodations. It is not a fancy 5-star lodge, but suitable for a hunting camp! *See more below! Meals and beverages – Three meals and basic beverages are provided. Transportation to and from Rapid City Regional Airport – please just be in contact with us if you plan to fly so we can accommodate flight times. Full or Semi-guided hunting - depending on the hunt booked. All of our rifle deer hunts are fully guided – no exceptions! Alcoholic beverages within reason - if you require or want something very specific, you may want to bring that yourself! ")]),a("p",[a("strong",[e._v("Hunts do NOT include:")]),e._v(" Licenses – We have a lottery draw system. We will assist you through the application process, but the cost of the license is up to you! *See more below! Taxes required by the state of South Dakota – The current state sales tax rate is 6%. Taxidermy services – We have a taxidermist available if needed, or you are welcome to take your trophy home to your own taxidermist. Meat processing – We have the option of someone who can process meat, or facilities for you to do it yourself if wanted. Shipping of trophies or meat – Most guys prefer to take home with them, if you want to ship, we will help if possible. Gratuity for Guides & Staff Firearms and ammunition – These can be available at reasonable cost with advance notice. ")])])])],1),a("v-card",{staticClass:"pa-4 ma-4",attrs:{flat:""}},[a("v-card-title",[a("v-flex",{attrs:{sm6:"","offset-sm3":"",xs12:""}},[a("h3",{staticClass:"headline mb-0",staticStyle:{"text-align":"center"}},[e._v("Non Hunters")])])],1),a("v-card-text",{staticStyle:{color:"black","font-family":"Tahoma, Geneva, sans-serif","font-size":"16px"},attrs:{sm10:"","offset-sm1":"",xs12:""}},[a("div",{staticStyle:{color:"black"}},[e._v(" Non-hunters are welcome, just please let us know if you plan on bringing a non-hunting companion as it may depend on our accommodation availability! Please ask for the current pricing for a non-hunting companion. ")])])],1),a("v-card",{staticClass:"pa-4 ma-4",attrs:{flat:""}},[a("v-card-title",[a("v-flex",{attrs:{sm6:"","offset-sm3":"",xs12:""}},[a("h3",{staticClass:"headline mb-0",staticStyle:{"text-align":"center"}},[e._v(" Accommodations ")])])],1),a("v-card-text",{staticStyle:{color:"black","font-family":"Tahoma, Geneva, sans-serif","font-size":"16px"},attrs:{sm10:"","offset-sm1":"",xs12:""}},[a("div",{staticStyle:{color:"black"}},[e._v(" Our accommodations are not what you would see in a 5-star resort, but it is also not a tent camp in the wilderness. We have small bunkhouse style cabins (some with electric heat, some with a wood stove). The beds do have bedding, but we recommend that you bring a sleeping bag for extra warmth if you have room. Besides the bunkhouse style cabins, the upstairs of Tomilyn’s house is used for lodging. There is a detached shower house with two complete bathrooms - there are towels provided. For husband/wife couples, we usually have them stay in a spare bedroom in the main house or in a camper for privacy. We serve meals in a garage attached to our house that is just a short distance from where you will be staying. We also have a pool table that you are more than welcome to use while socializing. We do our best to meet everyone's needs for accommodations, but if you have a special need, please let us know early so we can prepare! We are in the process of updating our accommodations, but life is busy, so it may be a few years until the work is complete! ")])])],1),a("v-card",{staticClass:"pa-4 ma-4",attrs:{flat:""}},[a("v-card-title",[a("v-flex",{attrs:{sm6:"","offset-sm3":"",xs12:""}},[a("h3",{staticClass:"headline mb-0",staticStyle:{"text-align":"center"}},[e._v(" Licensing/Tags ")])])],1),a("v-card-text",{staticStyle:{color:"black","font-family":"Tahoma, Geneva, sans-serif","font-size":"16px"},attrs:{sm10:"","offset-sm1":"",xs12:""}},[a("div",{staticStyle:{color:"black"}},[e._v(" SD does have a lottery draw system with preference points. Preference points are $5 for a resident and $10 for a nonresident per drawing. License costs vary depending on the application and the species. "),a("br"),a("ul",[a("li",[a("b",[e._v("Rifle deer")]),e._v(" – We have two separate drawings: West River Special Buck and West River Deer. West River Special Buck is a private land only tag and good for any unit west of the Missouri River except the Black Hills and reservation units. The West River Deer drawing is for the same deer and same season, but it can be used on private or public land and is unit specific. It currently takes around two to three years to draw the mule deer tag and around one to two for a whitetail tag. West River Special applications are generally due mid April. West River Deer applications are due mid June. Preference points can be purchased from Sept 15 through Dec 15. ")]),a("li",[a("b",[e._v("Archery deer")]),e._v(" – Archery deer tags are unlimited for hunters on private land. You do still have to “apply” for the license, but it is practically a guarantee. ")]),a("li",[a("b",[e._v("Turkeys")]),e._v(" – Turkey licenses are hard to draw on the first round. Most of our hunters draw in the third round or pick up their tags in the leftovers. Applications are generally due mid February and the third round is mid March. It is not a guarantee, but we have never had a turkey hunter not get a license. Preference points can be purchased in years prior up to Dec 15. ")]),a("li",[a("b",[e._v("Antelope")]),e._v(" – Antelope licenses are hard to draw. Similar to the rifle deer, there is a Special Antelope drawing for private land only tags. It usually tags a point or two to draw antelope. Timelines are the same as deer for applications. ")])])])])],1),a("v-card",{staticClass:"pa-4 ma-4",attrs:{flat:""}},[a("v-card-title",[a("v-flex",{attrs:{sm6:"","offset-sm3":"",xs12:""}},[a("h3",{staticClass:"headline mb-0",staticStyle:{"text-align":"center","white-space":"nowrap"}},[e._v(" FAQ ")])])],1),a("v-card-text",{staticStyle:{color:"black","font-family":"Tahoma, Geneva, sans-serif","font-size":"16px"},attrs:{sm10:"","offset-sm1":"",xs12:""}},[a("div",{staticStyle:{color:"black"}},[a("b",[e._v("How do I book a hunt?")]),a("br"),e._v(" To book a hunt we require a deposit upon booking. You are not booked until a deposit is on file! Final payment is due upon arrival or 30 days prior to arrival. Deposits are nonrefundable. If you do not draw the license (and have proof of application and preference point purchases) we will refund your deposit or roll you forward to the next available year. To book your hunt, contact Tomilyn at 605-441-1685! "),a("br"),a("br"),a("b",[e._v("What kind of success can I expect?")]),a("br"),e._v(" Unless you are looking for a B&C trophy you can be assured of several chances at nice trophy animals. The rest is up to you. We generally have a 98-100% success rate on rifle deer, around 50% success on archery deer, 150-200% success on turkeys, and have never had an antelope hunter go home eating tag soup. "),a("br"),a("br"),a("b",[e._v("What's the best firearm to bring?")]),a("br"),e._v(" Big deer (and antelope) can be tough, we recommend a .270 or larger rifle, but more important is accuracy. Practice with your gun and know exactly where it is shooting. Practice, practice, practice. Obviously, on turkey hunts, most hunters already have a favorite shotgun, and on archery hunts, we hope you plan on bringing a bow. "),a("br"),a("br"),a("b",[e._v("How do I get a license?")]),a("br"),e._v(" We will send information on how to apply and deadlines. You will need to acquire preference points for multiple years before the year you plan to hunt. We help you through this process. Please pay attention to the information we send you as if you don’t get the proper points it can deter a hunt you’ve had booked for years. We do not have transferable landowner tags, so if you do not draw the proper tag through the SDGF&P, you are out of luck. "),a("br"),a("br"),a("b",[e._v("What is your guarantee? ")]),a("br"),e._v(" We guarantee 100% effort in assisting you to a trophy animal you will be proud of. We can't control weather, marksmanship, or luck. ")])])],1)],1)},s=[],i=(a("e9c4"),{mounted:function(){var e=document.createElement("script");e.type="application/ld+json",e.textContent=JSON.stringify({"@context":"https://schema.org","@type":"FAQPage",mainEntity:[{"@type":"Question",name:"How do I book a hunt?",acceptedAnswer:{"@type":"Answer",text:"To book a hunt, we require a deposit upon booking..."}},{"@type":"Question",name:"What kind of success can I expect?",acceptedAnswer:{"@type":"Answer",text:"Unless you are looking for a B&amp;C trophy..."}}]}),document.head.appendChild(e)}}),o=i,n=a("2877"),l=a("6544"),c=a.n(l),u=a("b0af"),d=a("99d9"),h=a("0e8f"),f=Object(n["a"])(o,r,s,!1,null,null,null);t["a"]=f.exports;c()(f,{VCard:u["a"],VCardText:d["b"],VCardTitle:d["c"],VFlex:h["a"]})},e8f2:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));a("498a"),a("99af"),a("4de4"),a("d3b7"),a("b64b"),a("2ca0"),a("a15b");var r=a("2b0e");function s(e){return r["a"].extend({name:"v-".concat(e),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,a){var r=a.props,s=a.data,i=a.children;s.staticClass="".concat(e," ").concat(s.staticClass||"").trim();var o=s.attrs;if(o){s.attrs={};var n=Object.keys(o).filter((function(e){if("slot"===e)return!1;var t=o[e];return e.startsWith("data-")?(s.attrs[e]=t,!1):t||"string"===typeof t}));n.length&&(s.staticClass+=" ".concat(n.join(" ")))}return r.id&&(s.domProps=s.domProps||{},s.domProps.id=r.id),t(r.tag,s,i)}})}}}]);
//# sourceMappingURL=chunk-cee7fff2.a83d73c9.js.map
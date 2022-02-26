require([
    "esri/Map",
    "esri/views/SceneView",
    "esri/layers/GraphicsLayer",
    "esri/Graphic"
], function (Map, SceneView, GraphicsLayer, Graphic) {

    var map = new Map({
        basemap: "satellite",
        ground: "world-elevation"  // show elevation
    });

    var view = new SceneView({
        container: "viewDiv",
        map: map,
        camera: {
            position: {  // observation point
                x: 0,
                y: 0,
                z: 30000000 // altitude in meters
            },
            tilt:0   // perspective in degrees
        }
    });

    var clickedMap = false;
    var hunts = [];
    var huntSubRegions = [];
    function shiftCamera(deg) {
        var camera = view.camera.clone();
        camera.position.longitude += deg;
        return camera;
    }

   
    view.on("click", function () {
        clickedMap = true;
    });

    function spinGlobe() {
        if (!clickedMap) {
        view.goTo(
            shiftCamera(60), {
                duration: 10000,
                maxDuration: 10000,
                speedFactor: 0.1,
                easing: "linear"
                });
        }
    }
    spinGlobe();
    var start = Date.now();
    setInterval(function () {
        spinGlobe();
    }, 9000);

    //fetch("../api/HuntSubRegions", {
    //    method: "GET",
    //    headers: {
    //        "Content-Type": "application/json"
    //    }
    //}).then(res => {
    //    if (res.ok) {
    //        return res.json();
    //    }
    //}).then(response => {
    //    huntSubRegions = response;
    //    fetch("../api/Hunt", {
    //        method: "GET",
    //        headers: {
    //            "Content-Type": "application/json"
    //        }
    //    }).then(res => {
    //        if (res.ok) {
    //            return res.json();
    //        }
    //    }).then(response => {
    //        hunts = response;
    //        fetch("../api/SubRegions", {
    //            method: "GET",
    //            headers: {
    //                "Content-Type": "application/json"
    //            }
    //        }).then(res => {
    //            if (res.ok) {
    //                return res.json();
    //            }
    //        }).then(response => {
    //            var items = response;



    //            var layer = new GraphicsLayer();
    //            items.forEach(z => {
    //                var point = {
    //                    type: "point",
    //                    longitude: z.longitude,
    //                    latitude: z.latitude
    //                };
    //                var simpleMarkerSymbol = {
    //                    type: "simple-marker",
    //                    color: [226, 119, 40],  // orange
    //                    outline: {
    //                        color: [255, 255, 255], // white
    //                        width: 1
    //                    }
    //                };
    //                if (huntSubRegions.length > 0) {
    //                    var hsr = huntSubRegions.filter(x => x.subRegionId === z.subregionId)[0];
    //                    if (hsr !== undefined) {
    //                        var h = hunts.filter(x => x.huntId === hsr.huntId)[0];
    //                        var attributes = {
    //                            Name: z.name,
    //                            Details: h.description,
    //                            Button: h.huntId
    //                        };
    //                        var popupTemplate = {
    //                            title: "{Name}",
    //                            content: "{Details}<br><a target='_parent' href='https://DakotaTrophyAdventures.azurewebsites.net/#/HuntDescription/{Button}'>More Info</a>",

    //                        };

    //                        var pointGraphic = new Graphic({
    //                            geometry: point,
    //                            symbol: simpleMarkerSymbol,
    //                            attributes: attributes,
    //                            popupTemplate: popupTemplate

    //                        });
    //                        layer.add(pointGraphic);
    //                        map.add(layer);
    //                    }
                       
    //                }

    //            });
    //        });
    //    });
    //});
});
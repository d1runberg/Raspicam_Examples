var RaspiCam = require("raspicam");

var camera = new RaspiCam({
   mode: "photo",
   output: "./Effects_Example/photos",
   encoding: "jpg",
   quality: 100
   });

//to take a snapshot, start a timelapse or video recording

camera.set("ifx", "negative");
//camera.set("ifx", "solarise");
//camera.set("ifx", "sketch");
//camera.set("ifx", "emboss");
//camera.set("ifx", "oilpaint");
//camera.set("ifx", "hatch");
//camera.set("ifx", "watercolor");
//camera.set("ifx", "film");
//camera.set("ifx", "washout");
//camera.set("ifx", "cartoon");
camera.start();


camera.on("read", function(err, filename){
   console.log("Photo saved at" + filename);
   console.log("photo effect: " + camera.get("ifx"));
});

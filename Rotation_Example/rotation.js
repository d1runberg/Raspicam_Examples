var RaspiCam = require("raspicam");
var flip = true;

var camera = new RaspiCam({
   mode: "photo",
   output: "./Rotation_Example/photos",
   encoding: "jpg",
   quality: 100,
   vflip: flip
   });

//to take a snapshot, start a timelapse or video recording
camera.start();

setInterval(function(){
   camera.set("vflip",!flip);
   camera.start();
},2000);


camera.on("read", function(err, filename){
   console.log("Photo saved at" + filename);
});

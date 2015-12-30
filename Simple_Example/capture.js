var RaspiCam = require("raspicam");

var camera = new RaspiCam({
   mode: "photo",
   output: "./Simple_Example/photos",
   encoding: "jpg",
   quality: 100
   });

//to take a snapshot, start a timelapse or video recording
camera.start( );

camera.on("read", function(err, filename){
   console.log("Photo saved at" + filename);
});

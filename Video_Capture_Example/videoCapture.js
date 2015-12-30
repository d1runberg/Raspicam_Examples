var RaspiCam = require("raspicam");

var camera = new RaspiCam({
   mode: "video",
   output: "./Video_capture_Example/videos",
   encoding: "jpg",
   timeout: 10000,
   framerate: 30
   });

//to take a snapshot, start a timelapse or video recording
camera.start( );

camera.on("start", function(){
   console.log("Video Camera Recording!");
});

camera.on("exited",function(){
   console.log("Video Capture Complete!")
});

camera.on("read",function(err,filename){
   console.log("Video Saved at: "+ filename);
});

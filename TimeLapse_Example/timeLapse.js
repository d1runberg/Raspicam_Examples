var RaspiCam = require("raspicam");

var camera = new RaspiCam({
   mode: "timelapse",
   output: "./timeLapse_Example/photos",
   encoding: "jpg",
   quality: 100,
   timelapse: 10000
   });

var count = 1;
camera.start( );

camera.on("start", function(){
   console.log("Capture started!");
   camera.on("read", function(err,filename){
      console.log("photo " + count + " captured!");
      console.log("photo saved at: "+ filename);
      count++;
   });

   setTimeout(function(){
      camera.stop();
      console.log("Total number of photos taken: "+ count);
   },100000);
});

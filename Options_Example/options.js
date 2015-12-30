var RaspiCam = require("raspicam");
var qual = 100;


var camera = new RaspiCam({
   mode: "photo",
   output: "./Options_Example/photos",
   encoding: "jpg",
   quality: qual
   });

//to take a snapshot, start a timelapse or video recording


setInterval(function(){
   camera.start();
   qual = qual-10;
   camera.set("quality",qual);
},2000);


camera.on("read", function(err, filename){
   console.log("Photo saved at" + filename);
   console.log("photo Quality: " + camera.get("quality"));
});

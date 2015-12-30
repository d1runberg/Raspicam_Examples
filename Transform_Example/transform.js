var RaspiCam = require("raspicam");
var val = 0;


var camera = new RaspiCam({
   mode: "photo",
   output: "./Options_Example/photos",
   encoding: "jpg",
   quality: 100
   });

//to take a snapshot, start a timelapse or video recording


setInterval(function(){
   camera.start();
   camera.set("sharpness",val);  //change the sharpness of the image you take
   //camera.set("contrast",val);
   //camera.set("brightness",val);
   //camera.set("saturation",val);

   val = val+10;
},2000);


camera.on("read", function(err, filename){
   console.log("Photo saved at" + filename);
   console.log("photo Sharpness: " + camera.get("shapness"));
   console.log("Photo Contrast: ") + camera.get("contrast");
   console.log("Photo Brightness: "); + camera.get("brightness");
   console.log("Photo Saturation: "); + camera.get("saturation");
});

function preload {
    song = loadSound()
}
    
    function setup(){
        canvas = createCanvas(600, 500);
        canvas.center();
    
        video = createCapture(VIDEO);
        video.hide();
    
        poseNet = ml5.poseNet(video, modelLoaded);
        poseNet.on('pose',gotPoses);
    }
    
    function modelLoaded(){
        console.log('PoseNet is initialized');
    }
    
    
    function draw() {
        image(video, 0, 0, 600, 500);
    
        fill("#FF0000");
        stroke("#FF0000");
    
        if(scoreRightWrist > 0.2)
        { 
          
        }
    
        if(scoreLeftWrist > 0.2)
        {
            circle(leftWristX,leftWristY,20);
            InNumberleftWristY = Number(leftWristY);
            new_leftWristY = floor(InNumberleftWristY *2);
            leftWristY_divide_1000 = new_leftWristY/1000;
            document.getElementById("volume").innerHTML = "Volume = " + leftWristY_divide_1000;		
            song.setVolume(leftWristY_divide_1000);	
        }
    
    }

    function play()
{
	song.play();
	song.setVolume(1);
	song.rate(1);
}
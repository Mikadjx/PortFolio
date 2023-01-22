var myVideo = document.getElementById("video1");
var myvideo2 = document.getElementById("video2");

function stop() {
    if(myVideo.paused)
    myVideo.play();
    else myVideo.pause();
}
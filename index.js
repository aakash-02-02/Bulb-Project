// 1st part
function bulbOn() {
  document.querySelector(".bulboff").src = "bulbon.png";
}
function bulbOff() {
  document.querySelector(".bulboff").src = "offbulb.png";
}

// 2nd Part

var bulbStatus = true;

function bulb_On_Off() {

  if (bulbStatus) {
    document.getElementById('img').src = "bulbon.png";
    document.getElementById("button").innerHTML = "Turn OFF";
    bulbStatus = false;
  }
  else {
    document.getElementById("img").src = "offbulb.png";
    document.getElementById("button").innerHTML = "Turn ON";
    bulbStatus = true;
  }
}

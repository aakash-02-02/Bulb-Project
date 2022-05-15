function turnOn() {
    document.getElementById("bulb").src = "https://www.w3schools.com/js/pic_bulbon.gif";
}
function turnOff() {
    document.getElementById("bulb").src = "https://www.w3schools.com/js/pic_bulboff.gif";
}


function button() {
    // 1st method

    var count = 1;

    if (count % 2 != 0) {
        document.getElementById("bulb-1").src = "https://www.w3schools.com/js/pic_bulbon.gif";
        count++;
    }
    else {
        document.getElementById("bulb-1").src = "https://www.w3schools.com/js/pic_bulboff.gif";
        count++;
    }

    // 2nd method

    var bulbValue = false;

    if (bulbValue) {
        document.getElementById("bulb-1").src = "https://www.w3schools.com/js/pic_bulboff.gif";
        bulbValue = false;
    }
    else {
        document.getElementById("bulb-1").src = "https://www.w3schools.com/js/pic_bulbon.gif";
        bulbValue = true;
    }
}
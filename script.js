const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const blowBtn = document.getElementById("blowBtn");
const balloonBtn = document.getElementById("balloonBtn");
const photoBtn = document.getElementById("photoBtn");
const messageBtn = document.getElementById("messageBtn");
const giftBtn = document.getElementById("giftBtn");
const openGiftBtn = document.getElementById("openGiftBtn");

const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");
const screen4 = document.getElementById("screen4");
const screen5 = document.getElementById("screen5");
const screen6 = document.getElementById("screen6");
const screen7 = document.getElementById("screen7");
const screen8 = document.getElementById("screen8");
const screen9 = document.getElementById("screen9");

const flame = document.getElementById("flame");
const blowText = document.getElementById("blowText");

let candleOff = false;
let lastShakeTime = 0;


// SCREEN 1 → SCREEN 2

startBtn.addEventListener("click", function () {

    screen1.classList.remove("active");

    setTimeout(function () {
        screen2.classList.add("active");
    }, 300);

});


// SCREEN 2 → CAKE

nextBtn.addEventListener("click", function () {

    screen2.classList.remove("active");

    setTimeout(function () {
        screen3.classList.add("active");
    }, 300);

    candleOff = false;

    if (flame) {
        flame.classList.remove("off");
    }

    startShakeDetection();

});


// CANDLE OFF

function blowOutCandle() {

    if (candleOff) return;

    candleOff = true;

    if (flame) {
        flame.classList.add("off");
    }

    if (blowText) {
        blowText.innerHTML =
            "Wish complete! ✨<br>" +
            "এবার আসল Surprise... 💜";
    }

    if (blowBtn) {
        blowBtn.innerHTML =
            "✨ Surprise দেখো";
    }

    setTimeout(function () {

        screen3.classList.remove("active");

        setTimeout(function () {
            screen4.classList.add("active");
        }, 400);

    }, 1800);

}


// BLOW BUTTON

blowBtn.addEventListener("click", function () {

    blowOutCandle();

});


// PHONE SHAKE

function startShakeDetection() {

    if (!window.DeviceMotionEvent) {
        return;
    }

    window.addEventListener(
        "devicemotion",
        detectShake
    );

}


function detectShake(event) {

    if (candleOff) return;

    const acceleration =
        event.accelerationIncludingGravity;

    if (!acceleration) return;

    const x = acceleration.x || 0;
    const y = acceleration.y || 0;
    const z = acceleration.z || 0;

    const movement =
        Math.sqrt(
            x * x +
            y * y +
            z * z
        );

    const now = Date.now();

    if (
        movement > 17 &&
        now - lastShakeTime > 1000
    ) {

        lastShakeTime = now;

        blowOutCandle();

    }

}


// NAME → BALLOON

balloonBtn.addEventListener("click", function () {

    screen4.classList.remove("active");

    setTimeout(function () {

        screen5.classList.add("active");

    }, 500);

});


// BALLOON → PHOTO

photoBtn.addEventListener("click", function () {

    screen5.classList.remove("active");

    setTimeout(function () {

        screen6.classList.add("active");

    }, 500);

});


// PHOTO → MESSAGE

messageBtn.addEventListener("click", function () {

    screen6.classList.remove("active");

    setTimeout(function () {

        screen7.classList.add("active");

    }, 500);

});


// MESSAGE → GIFT

giftBtn.addEventListener("click", function () {

    screen7.classList.remove("active");

    setTimeout(function () {

        screen8.classList.add("active");

    }, 500);

});


// GIFT → FINAL

openGiftBtn.addEventListener("click", function () {

    screen8.classList.remove("active");

    setTimeout(function () {

        screen9.classList.add("active");

    }, 700);

});
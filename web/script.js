const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const teddy = document.getElementById("teddy");
const emotion = document.getElementById("emotion");

const response = document.getElementById("response");
const heartsContainer = document.getElementById("hearts");

let noClicks = 0;


/* =========================
   NO BUTTON
========================= */

noBtn.addEventListener("click", function () {

    noClicks++;

    /*
        Every time No is clicked,
        the button becomes bigger.
    */

    const newSize = 13 + (noClicks * 5);

    noBtn.style.fontSize = newSize + "px";

    noBtn.style.padding =
        (13 + noClicks * 3) + "px " +
        (25 + noClicks * 5) + "px";


    /*
        Change teddy emotions
    */

    if (noClicks === 1) {

        teddy.textContent = "🧸";
        emotion.textContent = "🥺";

        response.textContent =
            "Please don't say no... 🥺";
    }

    else if (noClicks === 2) {

        teddy.textContent = "🧸";
        emotion.textContent = "😟";

        response.textContent =
            "I'll do better, I promise... 😟";
    }

    else if (noClicks === 3) {

        teddy.textContent = "🧸";
        emotion.textContent = "😢";

        response.textContent =
            "You're making teddy sad... 😢";
    }

    else if (noClicks === 4) {

        teddy.textContent = "🧸";
        emotion.textContent = "😭";

        teddy.classList.add("sad");

        response.textContent =
            "Please forgive me... 😭";
    }

    else if (noClicks === 5) {

        teddy.textContent = "🧸";
        emotion.textContent = "😭💔";

        response.textContent =
            "Teddy is heartbroken... 💔😭";
    }

    else {

        teddy.textContent = "🧸";
        emotion.textContent = "😭😭";

        response.textContent =
            "Okay okay... I'll keep apologising! 😭💗";
    }


    /*
        Make the teddy shake
    */

    teddy.style.transform = "scale(1.08)";

    setTimeout(() => {
        teddy.style.transform = "";
    }, 300);

});


/* =========================
   YES BUTTON
========================= */

yesBtn.addEventListener("click", function () {

    /*
        Change teddy to happy
    */

    teddy.classList.remove("sad");

    teddy.classList.add("happy");

    teddy.textContent = "🧸";

    emotion.textContent = "🥰";


    /*
        Change message
    */

    response.innerHTML =
        "YAAAY! 🥰💗<br>" +
        "Thank you for forgiving me!";


    /*
        Hide the No button
    */

    noBtn.style.display = "none";

    yesBtn.textContent =
        "I Love You! 💕";


    /*
        Create lots of hearts
    */

    for (let i = 0; i < 40; i++) {

        setTimeout(() => {

            createHeart();

        }, i * 80);

    }

});


/* =========================
   FLOATING HEARTS
========================= */

function createHeart() {

    const heart =
        document.createElement("span");

    heart.classList.add("floating-heart");

    const hearts = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💘",
        "💝"
    ];

    heart.textContent =
        hearts[
            Math.floor(
                Math.random() * hearts.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        (15 + Math.random() * 25) + "px";


    heart.style.animationDuration =
        (4 + Math.random() * 4) + "s";


    heartsContainer.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 9000);

}


/*
    Normal background hearts
*/

setInterval(createHeart, 900);

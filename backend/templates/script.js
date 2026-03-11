// Typewriter effect

/*const msg = "Happy Birthday to you! May your day be filled with love, laughter and unforgettable moments.";

let i = 0;

function typeWriter(){
    const message = document.getElementById("message");

    if(message && i < msg.length){
        message.innerHTML += msg.charAt(i);
        i++;
        setTimeout(typeWriter,40);
    }
}

typeWriter();*/


// Create falling hearts

function createHeart(){

    const heart = document.createElement("div");
    heart.classList.add("heart");

    heart.style.left = Math.random() * 100 + "vw";

    const colors = ["#ff4d6d","#ff1493","#ff69b4","#ff6b6b"];
    heart.style.background = colors[Math.floor(Math.random()*colors.length)];

    heart.style.animationDuration = (Math.random()*3 + 3) + "s";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },6000);
}

// Infinite hearts

setInterval(createHeart,200);
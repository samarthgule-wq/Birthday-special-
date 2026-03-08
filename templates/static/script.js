const msg = "Happy Birthday to you! May your day be filled with love, laughter, and unforgettable moments. Wishing you all the best on your special day and throughout the year ahead. Enjoy every moment and make wonderful memories!";
let i=0;
function typeWriter() {
    if(i < msg.length){
        document.getElementById("message").innerHTML += msg.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

typeWriter();

for(let j=0; j<100; j++){
    const heart= document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 90 + "%";
    heart.style.animationDuration = Math.random() * 5 + 2 + "s";
    heart.style.background=['#ff69b4', '#ff1493', '#ff69fa' , '#ff6969'][Math.floor(Math.random() * 4)];
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 7000);
}

//floting sparkels

for(let k=0; k<50; k++){
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");
    sparkle.style.left = Math.random() * 100 + "%";
    sparkle.style.background=['#ffffff', 'rgb(255, 0, 119)', '#00ffff' , '#ffff00'][Math.floor(Math.random() * 4)];
    document.body.appendChild(sparkle);

}
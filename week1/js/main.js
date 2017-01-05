;(function(){
    var canvas = document.createElement("canvas");
    var c = canvas.getContext("2d");
    canvas.width = 800;
    canvas.height = 500;
    document.body.appendChild(canvas);

    var posX = 20,
        posY = canvas.height / 2;
    var vx = 10,
        vy = -10,
        gravity = 1;

    c.fillRect(0,0,canvas.width,canvas.height);
    
    function move() {
        c.fillStyle = "black";
        c.fillRect(0,0,canvas.width, canvas.height);
    
        posX += vx;
        posY += vy;

        if(posY > canvas.height * 0.75) {
            vy *= -0.6;
            vx *= 0.75;
            posY = canvas.height * 0.75;
        }

        vy += gravity;

        c.beginPath();
        c.fillStyle = "white";
        c.arc(posX, posY, 10, 0, Math.PI*2, true);
        c.closePath();
        c.fill();
        requestAnimationFrame(move);
    }
    move();
})();
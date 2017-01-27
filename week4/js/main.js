;(function(){
   var canvas = document.createElement("canvas");
   var ctx = canvas.getContext('2d');

   canvas.width = window.screen.width;
   canvas.height = window.screen.height;

   document.body.appendChild(canvas);
   
   function ranNum() {
    return Math.random() * (359 - 0); 
   }

    var gradient = ctx.createLinearGradient(0,0,2000,0);
    gradient.addColorStop(0, "hsl(136,69%,53%)");
    gradient.addColorStop(1, "hsl(265,69%,53%)");

    var num = ranNum();
    ctx.fillStyle = gradient;
    ctx.fillRect(0,0, canvas.width, canvas.height);

    //ctx.fillStyle = "hsl("+num+",69%,53%)";
    ctx.font = "200px 'Oxygen'";
    ctx.strokeText("Cuolours!", canvas.width/4, canvas.height/2);

    var i = 0,
        j = 359;

    function change() {

        var gradient = ctx.createLinearGradient(0,0,2000,0);
        gradient.addColorStop(0, "hsl("+i+",69%,53%)");
        gradient.addColorStop(1, "hsl("+j+",69%,53%)");

        ctx.fillStyle = gradient;
        ctx.fillRect(0,0, canvas.width, canvas.height);
        
        ctx.strokeStyle = "white";
        ctx.font = "200px 'Oxygen'";
        ctx.strokeText("Cuolours!", canvas.width/4, canvas.height/2);
        
        i += 1;
        j -= 1;
        
        requestAnimationFrame(change);
    }

    change();
   
})();



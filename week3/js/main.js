;(function(){
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");

    canvas.width = 500;
    canvas.height = 500;
    document.body.appendChild(canvas);

    var x = 250,
        y = 250;

    var vx = 0,
        vy = 0;

    var targX = 0,
        targY = 0;

    var angle = 3 * Math.PI / 180;
    var radius = 70;
    //var speed = 2;

    function move() {
        // context.fillStyle = "black";
        // context.fillRect(0,0,canvas.width, canvas.height);

        angle += 3 * Math.PI / 180;

        var newX = x + radius * Math.cos(angle);
        var newY = y + radius * Math.sin(angle);

        context.clearRect(0,0,500,500);
        context.beginPath();
        context.fillStyle = "#00ff00";
        context.arc(newX, newY, 10, 0, Math.PI*2);
        //context.closePath();
        context.fill();
        requestAnimationFrame(move);
        console.log('tick');
    }

    move();





















    ele = document.querySelector('#graph');
    ele.style.fontSize = "10em";
    //setInterval(function(){
        now = new Date();
        makeBeat = (now.getUTCSeconds() + (now.getUTCMinutes() * 60) + ((now.getUTCHours()+1) * 3600)) / 86.4;
        beat = Math.round(makeBeat);
        ele.textContent = '@'+beat;
        console.log('tick');
    //},120000);
})();

//ORIGINAL OLD IDEA
// Date.prototype.beats = function(){
//     //Makes New Date
//     current_time = new Date();
    
//     //Get Current Hour offset by 1hour to get BMT
//     hours = current_time.getUTCHours()+1;
    
//     //Get Current Minutes
//     minutes = current_time.getMinutes();
    
//     //Multiply Hour by one hour in seconds + Minutes mutiplied by one minute in seconds + get current seconds time 0-59
//     total = (hours*3600) + (minutes *60) + current_time.getSeconds();
    
//     //Divide by 1 beat in seconds 1minute 26.4seconds = 86.4 seconds and round the number
//     cal = Math.floor(total / 86.4);
//     return cal;
// }

// //EXAMPLE//
// //Creates a New Date with the Beats Method
// var Time = new Date();

// //Call Method
// var AwesomeTime = Time.beats();

// console.log (AwesomeTime);

// /**
// * Compact
// */
//  function toBeats(){

//             c_time = new Date();
//             hrs = (c_time.getUTCHours()+1)*3600;
//             min = (c_time.getUTCMinutes())*60;
//             sec = c_time.getUTCSeconds();
//             total = hrs + min + sec;
//             cal = Math.floor(total/86.4);
//             //return cal;
//             console.log(cal);

//         }

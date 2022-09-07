// let dt = new Date(new Date().setTime(0));
// let ctime = dt.getTime();
// let seconds = Math.floor((ctime % (1000 * 60))/ 1000);
// let minutes = Math.floor((ctime % (1000 * 60 * 60))/( 1000 * 60));
// console.log(seconds, minutes);
// let time = 0;
// let mytime = setInterval(function(){
//         time++;
        
//         if(seconds < 59) {
//             seconds++;
//         } else {
//             seconds = 0;
//             minutes++;
//         }
//         let formatted_sec = seconds < 10 ? `0${seconds}`: `${seconds}`;
//         let formatted_min = minutes < 10 ? `0${minutes}`: `${minutes}`
//         document.querySelector("span.time").innerHTML = `${formatted_min} : ${formatted_sec}`;
//     }, 1000);

const startingMinutes = 1;
let time = startingMinutes*60;

const countdownEl = document.getElementById("countdown");

let mytime = setInterval(updateCountdown, 1000);

function updateCountdown(){
    const minutes = Math.floor(time/60);
    let seconds = time%60;
    seconds = seconds < 10 ? '0' + seconds:seconds;
    // document.querySelector("span.time").innerHTML = `${formatted_min} : ${formatted_sec}`;
    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
    if (time == -1) {
        clearInterval(time);
        alert("Time out!! :(");
        document.getElementById('btn-next').style.display='none';
       
    }
    if (time==0) {
     countdownEl.style.display = 'none';
    }
} 

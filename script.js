const d = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[d.getDay()];

// document.getElementById("year").innerHTML = d.getFullYear();
// document.getElementById("month").innerHTML = d.getMonth() + 1;
// document.getElementById("date").innerHTML = d.getDate();
// document.getElementById("day").innerHTML = day;
// document.getElementById("hour").innerHTML = d.getHours();
// document.getElementById("minute").innerHTML = d.getMinutes();
// document.getElementById("second").innerHTML = d.getSeconds();





// function clock() { // We create a new Date object and assign it to a variable called "time".
//     var time = new Date(),

//         // Access the "getHours" method on the Date object with the dot accessor.
//         hours = time.getHours(),

//         // Access the "getMinutes" method with the dot accessor.
//         minutes = time.getMinutes(),


//         seconds = time.getSeconds();

//     document.querySelectorAll('.clock')[0].innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);

//     function harold(standIn) {
//         if (standIn < 10) {
//             standIn = '0' + standIn
//         }
//         return standIn;
//     }
// }
// setInterval(clock, 1000);



// function showTime() {
//     var date = new Date();
//     var h = date.getHours(); // 0 - 23
//     var m = date.getMinutes(); // 0 - 59
//     var s = date.getSeconds(); // 0 - 59
//     var session = "AM";

//     if (h == 0) {
//         h = 12;
//     }

//     if (h > 12) {
//         h = h - 12;
//         session = "PM";
//     }

//     h = (h < 10) ? "0" + h : h;
//     m = (m < 10) ? "0" + m : m;
//     s = (s < 10) ? "0" + s : s;

//     var time = h + m + s + " " + session;
//     document.getElementById("MyClockDisplay").innerText = time;
//     document.getElementById("MyClockDisplay").textContent = time;

//     setTimeout(showTime, 1000);

// }

// showTime();


let xs = []
for (var i = 0; i <= 1300; i++) {
    xs.push(i)
}


let t = 0

function animate() {

    let points = xs.map(x => {
        // return [x, x + Math.random() * 2]
        let y = 150 + 10 * Math.sin((x + t) / 20);

        return [x, y]
    })

    let path = "M" + points.map(p => {
        return p[0] + "," + p[1]
    }).join(" L")

    document.querySelector("path").setAttribute("d", path)

    t += 0.5

    requestAnimationFrame(animate)
}

animate()


function runClock() {
    var now = new Date();

    // var year = now.getFullYear();
    // var month = now.getMonth();
    // var date = now.getDate();
    // var day = now.getDay();

    var hour = now.getHours() % 12;
    var min = now.getMinutes();
    var sec = now.getSeconds();
    var ms = now.getMilliseconds();

    var clock = document.querySelector("div.clock");
    // var yearHand = clock.querySelector("div.year");
    // var monthHand = clock.querySelector("div.month");
    var hourHand = clock.querySelector("div.hour");
    var minHand = clock.querySelector("div.minute");
    var secHand = clock.querySelector("div.second");

    var hourRotation = 30 * hour + 0.5 * min;
    var minRotation = 6 * min + 0.1 * sec;
    var secRotation = 6 * sec + 0.006 * ms;

    hourHand.style.transform = "rotate(" + hourRotation + "deg)";
    minHand.style.transform = "rotate(" + minRotation + "deg)";
    secHand.style.transform = "rotate(" + secRotation + "deg)";

    requestAnimationFrame(runClock);
}

runClock();
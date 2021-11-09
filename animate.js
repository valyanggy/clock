// let xs = []
// for (var i = 0; i <= 500; i++) {
//     xs.push(i)
// }


// let t = 0

// function animate() {

//     let points = xs.map(x => {
//         // return [x, x + Math.random() * 2]

//         let y = 200 + 10 * Math.sin((x + t) / 100);

//         // let y = 200 + 20 * Math.sin((x + t) / 10)

//         return [x, y]
//     })

//     let path = "M" + points.map(p => {
//         return p[0] + "," + p[1]
//     }).join(" L")

//     document.querySelector("path").setAttribute("d", path)

//     t += 0.5

//     requestAnimationFrame(animate)
// }

// animate()

// function runClock() {
//     var now = new Date();

//     var hour = now.getHours() % 12;
//     var min = now.getMinutes();
//     var sec = now.getSeconds();
//     var ms = now.getMilliseconds();

//     var clock = document.querySelector("div.clock");
//     var hourHand = clock.querySelector("div.hour");
//     var minHand = clock.querySelector("div.minute");
//     var secHand = clock.querySelector("div.second");

//     var hourRotation = 30 * hour + 0.5 * min;
//     var minRotation = 6 * min + 0.1 * sec;
//     var secRotation = 6 * sec + 0.006 * ms;

//     hourHand.style.transform = "rotate(" + hourRotation + "deg)";
//     minHand.style.transform = "width(" + minRotation + "px)";
//     // console.log(minRotation);
//     secHand.style.transform = "rotate(" + secRotation + "deg)";

//     requestAnimationFrame(runClock);
// }

// runClock();
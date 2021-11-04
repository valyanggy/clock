// let x = 800;
// let y = 1000;
let stamp = new Date();
let begin = new Date(0);
let now = new Date(10 * 1000);

console.log(now);
// var myImage = new Image(x, y);
// myImage.src = 'Vector.svg';
// document.body.appendChild(myImage);

const time = new Date();

console.log(time.getMonth()); // (January gives 0)
// expected output: 6


console.log((time.getDate()) / 100); // (January gives 0)
const day = time.getDate();
const hour = time.getHours();
const minute = time.getMinutes();
const rotation = hour * 30
const top = minute * 20;
console.log(day / 10);
console.log(rotation);

// function dayFunction() {
//     document.getElementById("demo").style.opacity = "(time.getDate())/100";
// }
document.getElementById("myDIV").style.opacity = (day / 10);
document.querySelector("myDiv").style.transform = `rotate(${rotation}deg)`
    // document.getElementById("myDIV").style.transform = rotate(angledeg);
    // document.getElementById("myDiv").style.left = "1000px";

function myFunction() {
    document.getElementById("myDIV").style.left = "100px";
}

// function myFunction() {
//     document.getElementById("myDIV").style.opacity = (day / 10);
// }
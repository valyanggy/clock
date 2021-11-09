function runClock() {

    var now = new Date()

    var hour = now.getHours() % 12
    var min = now.getMinutes()
    var sec = now.getSeconds()
    var ms = now.getMilliseconds()

    var clock = document.querySelector("div.clock")
        // var hourHand = clock.querySelector("div.hour")
    var secHand = clock.querySelector("div.second")
    var minHand = clock.querySelector("div.minute")


    // var hourRotation = 30 * hour + (0.5 * min)
    var minRotation = 6 * min + (0.1 * sec)
    var secRotation = 6 * sec + 0.006 * ms

    // hourHand.style.transform = "rotate(" + hourRotation + "deg)"
    secHand.style.transform = "rotate(" + secRotation + "deg)"
    minHand.style.transform = "rotate(" + minRotation + "deg)"


    requestAnimationFrame(runClock)
}

runClock()




// The function to find the Zodiac Animal of the current year
function zodiacFunction() {
    const year = new Date();
    var birthYear = year.getFullYear();

    function findZodiac() {
        if (birthYear % 12 === 0) { return "🐒"; } else if (birthYear % 12 === 1) { return "🐓"; } else if (birthYear % 12 === 2) { return "🐕"; } else if (birthYear % 12 === 3) { return "🐖"; } else if (birthYear % 12 === 4) { return "🐀"; } else if (birthYear % 12 === 5) { return "🐂"; } else if (birthYear % 12 === 6) { return "🐅"; } else if (birthYear % 12 === 7) { return "🐇"; } else if (birthYear % 12 === 8) { return "🐉"; } else if (birthYear % 12 === 9) { return "🐍"; } else if (birthYear % 12 === 10) { return "🐎"; } else if (birthYear % 12 === 11) { return "🐑"; }

    }

    // If/else statements for inputs that are not poitive integer numerical values, and outputs onto the HTML
    if (isNaN(birthYear) === true || birthYear < 0 || Number.isInteger(birthYear) === false) { document.getElementById("year").innerHTML = findZodiac() } else {
        document.getElementById("year").innerHTML = '  ' + findZodiac()
    }
};

zodiacFunction();


// The function to find the Season of the current month is in
function seasonFunction() {
    const month = new Date();
    var birthMonth = month.getMonth();
    // console.log(birthMonth)

    function findSeason() {
        if (birthMonth <= 4 && birthMonth >= 2) { return "🐤"; } else if (birthMonth <= 7 && birthMonth >= 5) { return "🌴"; } else if (birthMonth <= 10 && birthMonth >= 8) { return "🍠"; } else if (birthMonth = 11 || birthMonth <= 1) { return "🀩"; }


    }

    if (isNaN(birthMonth) === true || birthMonth < 0 || Number.isInteger(birthMonth) === false) { document.getElementById("month").innerHTML = findSeason() } else {
        document.getElementById("month").innerHTML = '  ' + findSeason()
    }
};

seasonFunction();
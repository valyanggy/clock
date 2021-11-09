var ChineseZodiac = {

    animals: {
        0: ["Monkey", "https://image.flaticon.com/icons/svg/677/677909.svg", "#TODO"],
        1: ["Cock", "https://image.flaticon.com/icons/svg/677/677902.svg", "#TODO"],
        2: ["Dog", "https://image.flaticon.com/icons/svg/677/677912.svg", "#TODO"],
        3: ["Bear", "https://image.flaticon.com/icons/svg/677/677893.svg", "#TODO"],
        4: ["Rat", "https://image.flaticon.com/icons/svg/677/677918.svg", "#TODO"],
        5: ["&#128002;", "https://image.flaticon.com/icons/svg/677/677915.svg", "#TODO"],
        6: ["Tiger", "https://image.flaticon.com/icons/svg/677/677911.svg", "#TODO"],
        7: ["Rabbit", "https://image.flaticon.com/icons/svg/677/677913.svg", "#TODO"],
        8: ["Dragon", "https://image.flaticon.com/icons/svg/677/677900.svg", "#TODO"],
        9: ["Snake", "https://image.flaticon.com/icons/svg/677/677910.svg", "#TODO"],
        10: ["Horse", "https://image.flaticon.com/icons/svg/677/677916.svg", "#TODO"],
        11: ["Goat", "https://image.flaticon.com/icons/svg/677/677917.svg", "#TODO"]
    },

    getAnimal: function getAnimal(birthyear) {
        return this.animals[(birthyear % 12)];
    }

};

document.getElementById("input").addEventListener("input" /*"change"*/ , function(e) {
    var val = e.target.value;
    if (val == parseInt(val, 10) && val >= 0) {
        var res = ChineseZodiac.getAnimal(val);
        document.getElementById("text").innerHTML = res[0];
        //document.getElementById("image").src = res[1];
        // document.getElementById("image").setAttribute('style', "-webkit-mask: url('" + res[1] + "') no-repeat center; mask: url('" + res[1] + "') no-repeat center;");
        //document.getElementById("image").style.display = "block";
    } else {
        init();
    }
});

function init() {
    document.getElementById("text").innerHTML = "Type your year of birth to see your chinese zodiac animal";
    document.getElementById("image").style.display = "none";
}

init();
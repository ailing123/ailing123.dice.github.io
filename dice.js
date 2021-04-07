// generating a number between 0 and 1 and then times 6 and them rounding the number down to the nearest whole number and then plus one
// if doesn't know how your function runs just go to the console and check it Math.floor(Math.random() * 6)

let randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

let randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png-dice6.png

let randomImageSource = "image/" + randomDiceImage; //image/dice1.png-image/dice6.png

//get into the source src to change the image

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

// player 2 random number
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage2 = "dice" + randomNumber2 + ".png";
let randomImageSource2 = "image/" + randomDiceImage2;
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//if player 1 win
if (randomNumber1 > randomNumber2) {
    //use queryselector becasue there is only one h1
    document.querySelector("h1").innerHTML = "😁Player1 WINS";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "😁Player2 WINS";
}
else {
    document.querySelector("h1").innerHTML = "TIE";
}

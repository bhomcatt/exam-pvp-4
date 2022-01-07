score1 = 0;
score2 = 0;
var number
jugador1 = localStorage.getItem("jugador1", nombre1);
jugador2 = localStorage.getItem("jugador2", nombre2);
document.getElementById("score1").innerHTML = jugador1 + "puntuacion : ";
document.getElementById("score2").innerHTML = "puntuacion : ";

function question() {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    result = num1 * num2;
    console.log(result);
    document.getElementById("question").innerHTML = num1 + " x " + num2
    localStorage.setItem("num1", num1);
    localStorage.setItem("num2", num2);
}

function answer() {
    number = document.getElementById("answer").value;
    console.log(number);
    if (number == result) {
        score1 = score1 + 1;
        console.log(score1);
    }else if (number !== result) {
        score2 = score2 + 1;
        console.log(score2);
    }
}
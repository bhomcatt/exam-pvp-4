function start() {
    var nombre1 = document.getElementById("player1_name").value;
    console.log(nombre1);
    var nombre2 = document.getElementById("player2_name").value;
    console.log(nombre2);
    localStorage.setItem("jugador1",nombre1);
    localStorage.setItem("jugador2",nombre2);
    window.location.assign("game_page.html")
}

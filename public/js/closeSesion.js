const btnClosedSesion = document.getElementById("ButtoncloseSesion");
btnClosedSesion.onclick = closedSesion;

function closedSesion(){
	localStorage.removeItem("logeado");
	window.location="../../index.html";
}
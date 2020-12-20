function creaCard(dato,museo_extra,elemID){
	let element=document.getElementById(elemID);
	if(dato.name > 31){
	  	museo_extra._tituloAbreviado = museo_extra._tituloAbreviado + "... Ver Mas"
	}
	 //caracteristicaAbreviada = caracteristicaAbreviada
	 element.innerHTML =element.innerHTML+ `
											<div class="col-lg-4" id="carta">
                                                <div class="card1">
                                                    <div class="card-header">
                                                        <p>${museo_extra._estadoDelMuseo}</p>
                                                    </div>
                                                    <a href="museum.html?id=${dato.id}">
                                                    <img src="${dato.imagen}"
                                                        class="card-img-top" alt="mueso3">
                                                    </a>
                                                    <div class="card-body">
                                                        <h5 class="card-title">${dato.name}</h5>
                                                        <p class="card-text">${museo_extra._caracteristicaAbreviada} <a href="public/views/museum.html?id=${dato.id}">... Ver mas</a></p>
                                                    </div>
                                                </div>
                                            </div>`
                                                       
													
	 console.log(dato.name);
	 }
	
function estadoMuseoActual(data){
	const regex = /:/gi;
	let estadoDelMuseo="CERRADO";
	let d = new Date();
	let horaActual= d.getHours()+":"+d.getMinutes();
	horaActual = horaActual.replace(regex, '');
	//HORA DE CIERRE
	let horaCierre = data.horarioCierre;
	let resultadoHoraCierre = horaCierre.substr(0,5);
	resultadoHoraCierre =  resultadoHoraCierre.replace(regex, '');
	resultadoHoraCierre = parseInt(resultadoHoraCierre,10);
	//HORA DE APERTURA
	let horaApertura = data.horarioApertura;
	let resultadoHoraApertura = horaApertura.substr(0,5);
	resultadoHoraApertura =  resultadoHoraApertura.replace(regex, '');
	resultadoHoraApertura = parseInt(resultadoHoraApertura,10);

	if( horaActual > resultadoHoraApertura && horaActual < resultadoHoraCierre){
		estadoDelMuseo = "ABIERTO";

	}else{
		estadoDelMuseo = "CERRADO";
	}
	return estadoDelMuseo;
}

function limpiaCards(museumListRef){
	let element = document.getElementById('elem');
	museumListRef.on("value", function (snapshot) {
	  snapshot.forEach(function (childSnapshot) {
	  	element.innerHTML ="";
	  });
	})
}
//export {creaCard};
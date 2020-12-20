	  
	  var d = new Date();


	  //alert(d.getHours()+":"+d.getMinutes());
	  // Your web app's Firebase configuration
	  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
	  var firebaseConfig = {
	    apiKey: "AIzaSyD4If_C8_PNqPQqZhK03LELgLHTwz4V9lI",
	    authDomain: "frontendcafermuseum.firebaseapp.com",
	    databaseURL: "https://frontendcafermuseum.firebaseio.com",
	    projectId: "frontendcafermuseum",
	    storageBucket: "frontendcafermuseum.appspot.com",
	    messagingSenderId: "743873845303",
	    appId: "1:743873845303:web:c81963edce2b4a5747c7b2",
	    measurementId: "G-44EZY21CCN"
	  };
	  // Initialize Firebase
	  firebase.initializeApp(firebaseConfig);
	  var database = firebase.database();

	  museumListRef = database.ref("museum");

	  let element = document.getElementById('elem');
	  const regex = /:/gi;
	  museumListRef.on("value", function (snapshot) {
	  	snapshot.forEach(function (childSnapshot) {
	  		var data = childSnapshot.val();
	
	  		var caracteristicaAbreviada= data.descripcion.substr(0,65);
	  		var tituloAbreviado = data.name.substr(0,31);
	  		var estadoDelMuseo = "CERRADO";
	  		//HORA ACTUAL DEL USUARIO
	  		var horaActual= d.getHours()+":"+d.getMinutes();
	  		horaActual = horaActual.replace(regex, '');
	  		//HORA DE CIERRE
			var horaCierre = data.horarioCierre;
			var resultadoHoraCierre = horaCierre.substr(0,5);
			resultadoHoraCierre =  resultadoHoraCierre.replace(regex, '');
			resultadoHoraCierre = parseInt(resultadoHoraCierre,10);
			//HORA DE APERTURA
			var horaApertura = data.horarioApertura;
			var resultadoHoraApertura = horaApertura.substr(0,5);
			resultadoHoraApertura =  resultadoHoraApertura.replace(regex, '');
			resultadoHoraApertura = parseInt(resultadoHoraApertura,10);

	  		if( horaActual > resultadoHoraApertura && horaActual < resultadoHoraCierre){
	  			estadoDelMuseo = "ABIERTO";

	  		}else{
	  			estadoDelMuseo = "CERRADO";
	  		}
	  		

	  		
	  		if(data.name.length > 31){
	  			tituloAbreviado = tituloAbreviado + "... Ver Mas"
	  		}
	  		caracteristicaAbreviada = caracteristicaAbreviada
	  		element.innerHTML =element.innerHTML+ `
		  												<div class="col-lg-4" id="carta">
                                                            <div class="card1">
                                                                <div class="card-header">
                                                                    <p>${estadoDelMuseo}</p>
                                                                </div>
                                                                <a href="museum.html?id=${data.id}">
                                                                <img src="${data.imagen}"
                                                                    class="card-img-top" alt="imagen del museo">
                                                                </a>
                                                                <div class="card-body">
                                                                    <h5 class="card-title">${data.name}</h5>
                                                                    <p class="card-text">${caracteristicaAbreviada} <a href="public/views/museum.html?id=${data.id}">... Ver mas</a></p>
                                                                </div>
                                                            </div>
                                                        </div>`
                                                       
													

	  		console.log(data.name);
	  	 });
	  })
	  
	  firebase.analytics();

	  
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
	  let isChanged=false;
	  function changeCards(){
	  	isChanged=true;
	  	museumListRef.on("value", function (snapshot) {
	  		snapshot.forEach(function (childSnapshot) {
	  			element.innerHTML ="";
	  		});
	  	})
	  	museumListRef.on("value", function (snapshot) {
	  	snapshot.forEach(function (childSnapshot) {
	  		var data = childSnapshot.val();
	  		//element.innerHTML = element.innerHTML+`<div>${data.name}</div>`;
	  		var caracteristicaAbreviada= data.descripcion.substr(0,65);
	  		let tituloCompleto=data.name;
	  		var tituloAbreviado = data.name.substr(0,31);
	  		var estadoDelMuseo = "CERRADO";
	  		let datoSearcho= document.getElementById("buscador").value;
	  		
			let regexSearcho= RegExp(datoSearcho,"i");
			console.log(datoSearcho);
	  		console.log(regexSearcho.test(tituloCompleto));
			
	  		if(regexSearcho.test(tituloCompleto)){
	  		if(data.name.length > 31){
	  			tituloAbreviado = tituloAbreviado + "... Ver Mas"
	  		}
	  		caracteristicaAbreviada = caracteristicaAbreviada + "... Ver Mas"
	  		element.innerHTML =element.innerHTML+ `
		  												<div class="col-lg-4">
                                                            <div class="card1">
                                                                <div class="card-header">
                                                                    <p>${estadoDelMuseo}</p>
                                                                </div>

                                                                <img src="${data.imagen}"
                                                                    class="card-img-top" alt="mueso3">

                                                                <div class="card-body">
                                                                    <h5 class="card-title">${tituloAbreviado}</h5>
                                                                    <p class="card-text">${caracteristicaAbreviada}</p>
                                                                </div>
                                                            </div>
                                                        </div>`
                                                       
													

	  		console.log(data.name);
	  		}
	  	 });
	  })
	  	
	  }
	  
	  if(!isChanged){
	  museumListRef.on("value", function (snapshot) {
	  	snapshot.forEach(function (childSnapshot) {
	  		var data = childSnapshot.val();
	  		//element.innerHTML = element.innerHTML+`<div>${data.name}</div>`;
	  		var caracteristicaAbreviada= data.descripcion.substr(0,65);
	  		var tituloAbreviado = data.name.substr(0,31);
	  		var estadoDelMuseo = "CERRADO";
	  		/*var horaActual= d.getDate();
	  		alert(horaActual);
			const regex = /:/gi;
			var resultadoHoraActual = horaActual.replace(regex, '');

	  		var horaCierre = data.horarioApertura.replace(regex,'');
	  		var resultadoHoraCierre = horaCierre.substr(0,3);
	  		alert(resultadoHoraActual);
	  		alert(resultadoHoraCierre);

	  		if( horaActual> horaCierre){
	  			estadoDelMuseo = "ABIERTO";

	  		}else{

	  		}*/
	  		

	  		
	  		if(data.name.length > 31){
	  			tituloAbreviado = tituloAbreviado + "... Ver Mas"
	  		}
	  		caracteristicaAbreviada = caracteristicaAbreviada + "... Ver Mas"
	  		element.innerHTML =element.innerHTML+ `
		  												<div class="col-lg-4">
                                                            <div class="card1">
                                                                <div class="card-header">
                                                                    <p>${estadoDelMuseo}</p>
                                                                </div>

                                                                <img src="${data.imagen}"
                                                                    class="card-img-top" alt="mueso3">

                                                                <div class="card-body">
                                                                    <h5 class="card-title">${tituloAbreviado}</h5>
                                                                    <p class="card-text">${caracteristicaAbreviada}</p>
                                                                </div>
                                                            </div>
                                                        </div>`
                                                       
													

	  		console.log(data.name);
	  	 });
	  })
	  }
	  
	  firebase.analytics();
	  
	let serach = document.getElementById("buscador");//lo escribi mal a proposito

	// Execute a function when the user releases a key on the keyboard
	serach.addEventListener("keyup", function(event) {
  	// Number 13 is the "Enter" key on the keyboard
  	if (event.keyCode === 13) {
    	// Cancel the default action, if needed
    	//event.preventDefault();
    	// Trigger the button element with a click
    	document.getElementById("button-addon2").click();
 	}
	});

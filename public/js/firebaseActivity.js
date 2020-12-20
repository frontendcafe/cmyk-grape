	  
	  var d = new Date();

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

	  let element = document.getElementById('activityOfMuseum');

	  museumListRef.on("value", function (snapshot) {
	  	snapshot.forEach(function (childSnapshot) {
	  		var data = childSnapshot.val();
	  		//element.innerHTML = element.innerHTML+`<div>${data.name}</div>`;
	  		var caracteristicaAbreviada= data.descripcion.substr(0,65);
	  		var tituloAbreviado = data.name.substr(0,31);
	  		var estadoDelMuseo = "CERRADO";	  		
	  		if(data.name.length > 31){
	  			tituloAbreviado = tituloAbreviado + "... Ver Mas"
	  		}
	  		caracteristicaAbreviada = caracteristicaAbreviada + "... Ver Mas"
			  element.innerHTML =element.innerHTML+ `<div class="list-group container-list" id="activity">
			  
				  <div class="list-group-item list-group-item-action m-auto row d-lg-flex">
				  	<div class= "col-lg-5">
					  <img src="${data.imgExposicionTransitoria}" class="img-activity img-fluid " alt="muestra transitoria">
					</div>

				  	<div class="containerText col-lg-7 pt-lg-5">
				  		<p class="titleActivity">${data.exposicionTransitoria}</p>
				  		<p class="museumNameText">${data.name}</p>
				  		<img class="iconLocation" src="../assets/placeholder.svg">
						<p class="location">${data.direccion}</p>
						<button class="btn-accessMuseum text-uppercase">Ir al museo</button>
				  	</div>
				
				  	</div>  
				</div>`

	  		console.log(data.name);
	  	 });
	  })
	  
	  firebase.analytics();


        function getParameterByName(name) {
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
            return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }
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

	  let element = document.getElementById('contenedorGeneral');

	  museumListRef.on("value", function (snapshot) {
	  	snapshot.forEach(function (childSnapshot) {
	  		var data = childSnapshot.val();
	  		//element.innerHTML =element.innerHTML+`${data.id}`;
	  	if(getParameterByName("id") == data.id){	
	  		element.innerHTML =element.innerHTML+ `
		  				<div class="container p-3">
				            <section class="museum_description">
				                <!-- buscador, titulo, imagen, descripción -->

				                <h1 class="title-museum">${data.name}</h1>
				                <img class="img-museum img-fluid">
				                <p class="text-museum">${data.descripcion}</p>

				            </section>

				            <section class="activities">
				                <!-- titulo, subtitulo, imagen, imagen, linea -->
				                <h2 class="title-activities">Actividades</h2>

				                <h3 class="subtitle-activities">Exposición fija</h3>
				                <img class="img-color" src="${data.imgExposicionFijas}">

				                <p class="text-activities">${data.exposicionFijas}</p>

				                <h3 class="subtitle-activities">En el mes de Diciembre</h3>
				                <img class="img-color" src="${data.imgExposicionTransitoria}">
				                <p class="text-activities">${data.exposicionTransitoria}</p>

				            </section>


				            <section class="information">
				                <!-- informacion, como llegar -->
				                <h2 class="title-information">Información</h2>

				                <span><i class="far fa-clock"></i></span><p>${data.horarioApertura} - ${data.horarioCierre}</p>
				                <span><i class="fas fa-map-marker-alt"></i></span><p>${data.direccion}</p>
				                <span><i class="fas fa-phone"></i></span><p>${data.telefono}</p>
				                <span><i class="fas fa-envelope"></i></span><p>${data.email}</p>

				                <h2 class="title-arrive">Cómo llegar</h2>
				                <img class="img-map">
				                <div>${data.googleMaps}</div>

				            </section>
				        </div>`
                                                       
		}											

	  		console.log(data.name);
	  	 });
	  })
	  
	  firebase.analytics();


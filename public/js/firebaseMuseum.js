
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

			  <section class="container museum-description mt-5">
				<div class="row">
				  <div class="col-md-12 col=lg-12 mb-lg-5">
					<h1 class="title-museum text-uppercase text-center text-russian-violet mb-5">${data.name}</h1>
				  </div>
		  
				  <div class="col-md-12 col-lg-6">
					<img class="img-museum img-fluid mb-4" src="${data.imagen}">
				  </div>
		  
				  <div class="col-md-12 col-lg-6">
					<p class="text-museum text-russian-violet text-left px-2">${data.descripcion}</p>
				  </div>
				</div>
			  </section>
			
			  <!-- Activities -->  
			  <section class="container-fluid activities mt-5 pt-2 pb-5 p-lg-5">
				<div class="col-md-12 col-lg-12">
				  <h2 class="title-activities text-uppercase text-left text-russian-violet font-weight-bold pt-5">Actividades</h2>
				</div>
		  
				<div class="row d-lg-flex justify-content-lg-between">
				  <div class="col-md-12 col-lg-6 pb-lg-5 mt-4">
					<h3 class="subtitle-activities text-uppercase text-russian-violet font-weight-bold mt-5 mb-4">Exposición fija</h3>
					<p class="text-activities text-russian-violet mb-4">${data.exposicionFijas}</p>
					<img class="img-fluid img-expo mb-3" src="${data.imgExposicionFijas}">
				  </div>
		  
				  <div class="col-md-12 col-lg-6 pb-lg-5 mt-4">
					<h3 class="subtitle-activities text-uppercase text-russian-violet font-weight-bold mt-5 mb-4">En el mes de Diciembre</h3>
					<p class="text-activities text-russian-violet mb-4">${data.exposicionTransitoria}</p>
					<img class="img-fluid img-expo mb-3" src="${data.imgExposicionTransitoria}">
				  </div>
				</div>
			  
			  </section>
		  
			  <!-- Information -->
			  <section class="container information mt-4 pb-5 d-lg-flex justify-content-lg-evenly">
				<div class="col-lg-12">
				<div class="row">
				  <div class="col-md-12 col-lg-6">
					<h2 class="title-information text-uppercase text-russian-violet font-weight-bold pt-5 mb-5">Información</h2>
					<div class="d-flex">
					  <i class="far fa-clock fa-lg text-right text-russian-violet"></i>
					  <p class="information-item ml-3">${data.horarioApertura} - ${data.horarioCierre}</p>
					</div>
		  
					<div class="d-flex">
					  <i class="fas fa-map-marker-alt fa-lg text-right text-russian-violet"></i>
					  <p class="information-item ml-3">${data.direccion}</p>
					</div>
		  
					<div class="d-flex">
					  <i class="fas fa-phone fa-lg text-right text-russian-violet"></i>
					  <p class="information-item ml-2">${data.telefono}</p>
					</div>  
		  
					<div class="d-flex">
					  <i class="fas fa-envelope fa-lg text-right text-russian-violet"></i>
					  <p class="information-item ml-2">${data.email}</p>
					</div>
				  </div>
		  
				  <div class="col-md-12 col-lg-6" class="contenedor-map justify-content-center">

					<div id="showMap" class="map">
					</div>

				  </div>

				</div>
				</div>
			  </section>
				        </div>`
            showGoogleMaps(data.latitud,data.longitud,data.name);                                             
		}											
			
	  		
	  	 });
	  })
	  
	  firebase.analytics();


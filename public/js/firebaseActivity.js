	  
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
	  		element.innerHTML =element.innerHTML+ `<div class="list-group" id="activity">
				  <div class="list-group-item list-group-item-action">
				  	<img src="${data.imgExposicionTransitoria}" class="logoActivity" alt="mueso3">
				  	<div class="containerTitle">
				  		<p class="titleActivity">${data.exposicionTransitoria}</p>
				  		<div class="museumName">
				  			<p class="museumNameText">${data.name}</p>
				  		</div>
				  		<div class="location">
				  			<img class="imgLocation" src="assets/placeholder.svg">
				  			<p class="location">${data.direccion}</p>
				  		</div>
				  		
				  	</div>
				  	<div>
				  		<button class="accessMuseum">IR AL MUSEO</button>
				  	</div>
				  </div>
				</div>`
                                                       
													

	  		console.log(data.name);
	  	 });
	  })
	  
	  firebase.analytics();

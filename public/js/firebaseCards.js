//BUSQUEDA DESDE EL INDEX CUANDO ES REDIRECCIONADO
function changeCards(stringMuseo){
	 isChanged=true;
	 limpiaCards(museumListRef);
	 
	 museumListRef.on("value", function (snapshot) {
	 snapshot.forEach(function (childSnapshot) {
		 var data = childSnapshot.val();
		 

		 var caracteristicaAbreviada= data.descripcion.substr(0,65);
		 var tituloAbreviado = data.name.substr(0,31);
		 var estadoDelMuseo = estadoMuseoActual(data);
		 
		 
		 
		 let datoSearcho= stringMuseo;
		 
	   let regexSearcho= RegExp(datoSearcho,"i");
	   console.log(datoSearcho);
		 console.log(regexSearcho.test(data.name));
	   
		 if(regexSearcho.test(data.name)){
			 let museoExtras={
				 _tituloAbreviado: tituloAbreviado,
				 _caracteristicaAbreviada: caracteristicaAbreviada,
				 _estadoDelMuseo: estadoDelMuseo,
			 }
		   creaCard(data,museoExtras,'elem');
		 }
	  });
 })
	 
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
	  var database = firebase.database();
	  var initial;
	  getInitial = getParameterByName("searchInitial");
	  if(getInitial==""){
	  	initial = 1;
	  }else{
	  	initial = parseInt(getInitial,10);
	  }
	  var finish = initial+2;
	  var getMethodValue = getParameterByName("search");
	  if(getMethodValue!=""){
	  	museumListRef = database.ref("museum").orderByChild('id');
	  }else{museumListRef = database.ref("museum").orderByChild('id').startAt(initial).endAt(finish)}
	  let element = document.getElementById('elem');
	  let isChanged=false;
	  
	  if(getParameterByName("search")==""){ 	  
	  if(!isChanged){
	  museumListRef.on("value", function (snapshot) {
	  	snapshot.forEach(function (childSnapshot) {
	  		var data = childSnapshot.val();
	  		//element.innerHTML = element.innerHTML+`<div>${data.name}</div>`;
	  		var caracteristicaAbreviada= data.descripcion.substr(0,65);
	  		var tituloAbreviado = data.name.substr(0,31);
	  		var estadoDelMuseo = estadoMuseoActual(data);
	  		
	  		
	  		let museoExtras={
	  			_tituloAbreviado: tituloAbreviado,
	  			_caracteristicaAbreviada: caracteristicaAbreviada,
	  			_estadoDelMuseo: estadoDelMuseo,
	  		}

			creaCard(data,museoExtras,'elem');

	  	 });
	  })
	  }
	}else{
		
		changeCards(getParameterByName("search"));
	} 	  
	  firebase.analytics();
	  

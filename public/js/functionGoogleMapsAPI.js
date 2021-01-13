function showGoogleMaps(latitud,longitud,titulo)
		{
		    //Creamos el punto a partir de la latitud y longitud de una dirección:
		    var point = new google.maps.LatLng(latitud, longitud);
		 
		    //Configuramos las opciones indicando zoom, punto y tipo de mapa
		    var myOptions = {
		        zoom: 15, 
		        center: point, 
		        mapTypeId: 'roadmap'
		    };
		 
		    //Creamos el mapa y lo asociamos a nuestro contenedor
		    var map = new google.maps.Map(document.getElementById("showMap"),  myOptions);
		 
		    //Mostramos el marcador en el punto que hemos creado
		    var marker = new google.maps.Marker({
		        position:point,
		        map: map,
		        title: titulo
		    });
		}
		showGoogleMaps();
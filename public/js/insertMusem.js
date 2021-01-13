 	function writeUserData() {
  		var databaseMuseum = firebase.database().ref('museum');
  		var createnewmuseum = databaseMuseum.push();
  		createnewmuseum.set({
	    descripcion: document.getElementById('descripcion').value,
        direccion: document.getElementById('direccion').value,
        email: document.getElementById('email').value,
        exposicionFijas: document.getElementById('exposicion_fija').value,
        exposicionTransitoria: document.getElementById('exposicion_transitoria').value,
        horarioApertura: document.getElementById('horario_apertura').value,
        horarioCierre: document.getElementById('horario_cierre').value,
        id: 4,
        imagen: document.getElementById('imagen').value,
        imgExposicionFijas: document.getElementById('img_exposicion_fija').value,
        imgExposicionTransitoria: document.getElementById('img_exposicion_transitoria').value,
        latitud: document.getElementById('latitud').value,
        longitud: document.getElementById('longitud').value,
        muestras: document.getElementById('muestras').value,
        name: document.getElementById('name').value,
        provincia: document.getElementById('provincia').value,
        telefono: document.getElementById('telefono').value
	  })
	}
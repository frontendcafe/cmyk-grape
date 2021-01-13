function changeStateTrue(idChange,status){
	 usersListRef = database.ref("museum");
	usersListRef.on("value", function (snapshot) {
		snapshot.forEach(function (childSnapshot) {
		  	var data = childSnapshot.val();
		  	if(data.id==idChange){
		  		var indice = data.id - 1;
		  		
		  		usersListRef.child(Object.keys(snapshot.val())[indice]).update({'status': status})
		  		window.location="activatedatos.html"
		  	}
		});
	})
}

function loadTable(){
	const tableBody = document.getElementById("body");
	usersListRef = database.ref("museum");
	usersListRef.on("value", function (snapshot) {
		snapshot.forEach(function (childSnapshot) {
		  	var data = childSnapshot.val();
		  	if(data.status==false){
				tableBody.innerHTML=tableBody.innerHTML+`<div class="row text-align-center">
						<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 celdaInfoColorTwo">
							${data.name}
						</div>
						<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 celdaInfoColorTwo">
							${data.telefono}
						</div>
						<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 celdaInfoColorTwo">
							<button id="changeState" onclick="changeStateTrue(${data.id},true);">ACTIVAR</button>
						</div>
					</div>`
			}
		  	
		});
	})
}

loadTable();
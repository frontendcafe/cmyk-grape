const submit = document.getElementById("submit");
submit.onclick=submitLogin;

function submitLogin(){
	user = document.getElementById("user").value;
	password = document.getElementById("password").value;
	var inputEmpty = false;
	if(user=="" || password==""){
		alert("Alguno de los campos esta vacio!");
		inputEmpty = true;
	}
	usersListRef = database.ref("admins");
	usersListRef.on("value", function (snapshot) {
		snapshot.forEach(function (childSnapshot) {
		  	var data = childSnapshot.val();
		  	if(user==data.user && password==data.password){
		  		localStorage.setItem("logeado", true);
		  		window.location="updatos.html";
		  	}else if(inputEmpty==false){
		  		alert("login incorrecto");
		  	}
		});
	})
}

	
	
	  
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
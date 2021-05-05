 import firebase from "firebase"

  
  var firebaseConfig = {
  
    apiKey: "AIzaSyB2usSGVV-bU26ZPWWQSqBdZGvpi7WKVEc",
    authDomain: "class-attendance-app-df141.firebaseapp.com",
    databaseURL: "https://class-attendance-app-df141-default-rtdb.firebaseio.com",
    projectId: "class-attendance-app-df141",
    storageBucket: "class-attendance-app-df141.appspot.com",
    messagingSenderId: "879592956160",
    appId: "1:879592956160:web:e7e40ba472ad24b1b593e5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();
 
 

  
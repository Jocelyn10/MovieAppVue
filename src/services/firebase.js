import firebase from "firebase"

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBj0CQDwb1Q4-WKGo5v3CpSMs94pWvC7cw",
    authDomain: "movie-app-5a847.firebaseapp.com",
    projectId: "movie-app-5a847",
    storageBucket: "movie-app-5a847.appspot.com",
    messagingSenderId: "396281644244",
    appId: "1:396281644244:web:0e2b904b59cb21bc182741"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase
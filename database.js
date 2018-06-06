(function() {

  // Initialize firebase

  var config = {
    apiKey: "AIzaSyBEvkNVTDmj1gKc_TW0LrY23ndlXv0q434",
    authDomain: "quark-editor.firebaseapp.com",
    databaseURL: "https://quark-editor.firebaseio.com/",
    storageBucket: "quark-editor.appspot.com"
  };
  firebase.initializeApp(config);

  const dbRefObject = firebase.database().ref().child('object');

  if (window.location.pathname.substring(1).includes("/")) {
    window.location.href = "https://quarkedit.ga";
  }



}());

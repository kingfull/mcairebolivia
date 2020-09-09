(function ($) {
  $(function () {
    $(".sidenav").sidenav();
    $(".parallax").parallax();
  }); // end of document ready
})(jQuery); // end of jQuery name space

var firebaseConfig = {
  apiKey: "AIzaSyDLhyPShAonjPmn7jVYzkwBGckI-YqDjCQ",
  authDomain: "rtdbupdate.firebaseapp.com",
  databaseURL: "https://rtdbupdate.firebaseio.com",
  projectId: "rtdbupdate",
  storageBucket: "rtdbupdate.appspot.com",
  messagingSenderId: "740698735622",
  appId: "1:740698735622:web:3901bb73616da549f6ef87",
};
firebase.initializeApp(firebaseConfig);
var provider = new firebase.auth.GoogleAuthProvider(); //referencia a la autenticacion de google

$(document).ready(function () {
  //login with google
  $("#login").click(function () {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        this.location.href = "inicio.html";
      });
  });
});

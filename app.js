// Firebase Config
 const firebaseConfig = {
  apiKey: "AIzaSyCeSuPBOcUqPu4l1_KyfLk-EhO6xM3tuvg",
  authDomain: "fir-40756.firebaseapp.com",
  databaseURL: "https://fir-40756-default-rtdb.firebaseio.com",
  projectId: "fir-40756",
  storageBucket: "fir-40756.appspot.com",
  messagingSenderId: "23032256354",
  appId: "1:23032256354:web:c078af199fd4260ec17e3b",
  measurementId: "G-KNJ0F38RZJ"
  };

firebase.initializeApp(firebaseConfig);

function signUp(){

  var name= document.getElementById("name");
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  console.log(name.value);
  firebase
.auth()
.createUserWithEmailAndPassword(email.value, password.value)
.then((res) => {
  const user = firebase.auth().currentUser;

  
  if (user != null) {
      user.updateProfile({
          displayName: name.value
      }).then(() => {
        
          window.location = 'blogpage.html';
      }).catch((error) => {
        console.log(error);
      });
  } else {
    alert("Some error has been occured");
  }

}
).catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
  alert(errorMessage);
  // ...
});
  
}

function signIn(){

var email = document.getElementById("email");
var password = document.getElementById("password");

firebase
.auth()
.signInWithEmailAndPassword(email.value, password.value)
.then((res) => {
 
  window.location = 'blogpage.html';
 
}
).catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
  alert(errorMessage);
  
});
}

function googleSignIn(){
  
base_provider = new firebase.auth.GoogleAuthProvider();
console.log(base_provider)
firebase.auth().signInWithPopup(base_provider).then(function(result){
console.log(result);
alert("Success..you are Signed in with google");
window.location = 'blogpage.html';
}).catch(function(err){
console.log(err);
alert("Sorry you are  unable to login with google");

});
}
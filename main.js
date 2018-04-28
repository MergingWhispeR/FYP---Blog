// Initialize Firebase
var config = {
  apiKey: "AIzaSyDSBy30StN-Wuw6sk2nKpPaGF4KADyzQK4",
  authDomain: "final-year-blog-project.firebaseapp.com",
  databaseURL: "https://final-year-blog-project.firebaseio.com",
  projectId: "final-year-blog-project",
  storageBucket: "final-year-blog-project.appspot.com",
  messagingSenderId: "293490381660"
};
firebase.initializeApp(config);

var messagesRef = firebase.database().ref('messages');

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
  e.preventDefault();

  var name = getInputVal('name');
  var username = getInputVal('username');
  var email = getInputVal('email');
  var message = getInputVal('message');

  saveMessage(name, username, email, message);

  document.querySelector('.alert').style.display = 'block';

  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);


document.getElementById('contactForm').reset();
}
function getInputVal(id){
  return document.getElementById(id).value;
}

function saveMessage(name, username, email, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    username: username,
    email : email,
    message : message
  });
}

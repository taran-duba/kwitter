 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyBQ5wSrh93_FQHSe8QI95CPsMD41a8yzVg",
  authDomain: "classtesterman.firebaseapp.com",
  databaseURL: "https://classtesterman-default-rtdb.firebaseio.com",
  projectId: "classtesterman",
  storageBucket: "classtesterman.appspot.com",
  messagingSenderId: "628392956178",
  appId: "1:628392956178:web:be0735fd0e1f53827e63cb"
};
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var user_name = localStorage.getItem("username");
    document.getElementById("user_name").innerHTML = "Welcome, " + user_name + "!";
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      var row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div>";
      document.getElementById("output").innerHTML = row;
      //End code
      });});}
getData();
function addRoom() {
  var room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location.pathname = "kwitter_page.html";
  function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location.pathname = "kwitter_page.html";
  }
}
function logout() {
  localStorage.removeItem("username");
  localStorage.removeItem("room_name");
  window.location.pathname = "index.html";
}
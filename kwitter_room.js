var firebaseConfig = {
  apiKey: "AIzaSyAnYl-i8zYYrmVX6d-TthfX-MvgAGE_kq4",
  authDomain: "hw-kwitter-8874b.firebaseapp.com",
  databaseURL: "https://hw-kwitter-8874b-default-rtdb.firebaseio.com",
  projectId: "hw-kwitter-8874b",
  storageBucket: "hw-kwitter-8874b.appspot.com",
  messagingSenderId: "38958428942",
  appId: "1:38958428942:web:921612457a66947d839d5f"
};
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name;

function addRoom() {
  room_name = document.getElementById("room_name").value;
  localStorage.setItem("room_name", room_name);
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });
  window.location="kwitter_page.html"
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_name = childKey;
      row="<div class='room_name' id="+Room_name+" onclick='redirectToRoomName(this.id)'>#"+Room_name+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
    });
  });
}
getData();
function redirectToRoomName(name){
   localStorage.setItem("room_name",name);
   window.location="kwitter_page.html";
}
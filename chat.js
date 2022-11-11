// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyDNac_5oM4YOaCDa6RApkEmrWCiX0OjECs",
    authDomain: "let-s-chat-web-app-79a7b.firebaseapp.com",
    projectId: "let-s-chat-web-app-79a7b",
    storageBucket: "let-s-chat-web-app-79a7b.appspot.com",
    messagingSenderId: "711658472064",
    appId: "1:711658472064:web:a849b5ad4c336d65d49c65",
    measurementId: "G-7QFXGVRZ4Q"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser() 
{
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);

    window.location = "chat_room.html";
}

firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
    });

    
//Start code
function getData() { firebase.database().ref("/"+room_name).on('value'),
function(snapshot) { document.getElementById("output").innerHTML = ''; 
snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childSnapshot.val(); if(childKey != "purpose") {
firebase_message_id = childKey; message_data = childData;
} }); }; };


console.log(message_data);
name = massage_data['name'];
message=message_data['message'];
like_message =data['like'];
name_with_tag="<h4>"+name+"cing class='user_tick snow tick.png">
message_with_tag="ch4 class='message_h4'>;"+ massage +"</h4>";
 like_button = "<button class="'btn btn-warning'id-""firebase_message_id+" value="like" onclick='updateLike(this.id)'>"; span_with_tag="<span class="glyphicon glyphicon-thumbs-up">Like: "+like+"</span></button><hr>"; row name_with_tag+ message with tag +like button + span_with_tag;



















 Mam It is not working I dont know what are these errors!


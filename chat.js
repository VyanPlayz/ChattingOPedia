// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyBEpaol-TylW3eio0tKgX1t3IGKrrzzjkY",
    authDomain: "letschat-web-app-ae6ee.firebaseapp.com",
    projectId: "letschat-web-app-ae6ee",
    storageBucket: "letschat-web-app-ae6ee.appspot.com",
    messagingSenderId: "697370552038",
    appId: "1:697370552038:web:1e4cc064e577970c517d27"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */

    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";
}




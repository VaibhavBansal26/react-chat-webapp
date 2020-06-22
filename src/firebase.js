import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";


  
  var config = {
    apiKey: "AIzaSyBiID0EgswK8VnZc2P1mq2qolOATNPj0b0",
    authDomain: "react-chat-24cb1.firebaseapp.com",
    databaseURL: "https://react-chat-24cb1.firebaseio.com",
    projectId: "react-chat-24cb1",
    storageBucket: "react-chat-24cb1.appspot.com",
    messagingSenderId: "375763003197",
    appId: "1:375763003197:web:742832c430a803dddb0754",
    measurementId: "G-EY33W1KF4Z"
  };
  
  firebase.initializeApp(config);
  //firebase.analytics();

  export default firebase;

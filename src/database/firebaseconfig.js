import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyDNTzUT7-T7-j8fHlz67Yzn7tyQloU2iNQ",
    authDomain: "updown-4d843.firebaseapp.com",
    databaseURL: "https://updown-4d843.firebaseio.com",
    projectId: "updown-4d843",
    storageBucket: "updown-4d843.appspot.com",
    messagingSenderId: "168066292746",
    appId: "1:168066292746:web:201f044c28b8872c60d3f3"
  };

 if(!firebase.apps.length){
     firebase.initializeApp(firebaseConfig);
 }

 export default firebase;
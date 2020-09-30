import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCkPa2UYUqZd0wFMFolwhvgsAmnRUaZ4CY",
  authDomain: "updown-fc331.firebaseapp.com",
  databaseURL: "https://updown-fc331.firebaseio.com",
  projectId: "updown-fc331",
  storageBucket: "updown-fc331.appspot.com",
  messagingSenderId: "381295282171",
  appId: "1:381295282171:web:68a214f3680c6f6d7bad5e",
  measurementId: "G-9CPQC9747H"
};
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}


export default firebase;
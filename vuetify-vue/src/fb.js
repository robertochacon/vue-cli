import firebase from 'firebase/app'
import 'firebase/firestore'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA7KUL4P9a95ypttUJWxKOe9eOJxZp9kDg",
    authDomain: "vuetify-a093c.firebaseapp.com",
    databaseURL: "https://vuetify-a093c.firebaseio.com",
    projectId: "vuetify-a093c",
    storageBucket: "vuetify-a093c.appspot.com",
    messagingSenderId: "687697759821"
  };
  firebase.initializeApp(config);
const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });

export default db;
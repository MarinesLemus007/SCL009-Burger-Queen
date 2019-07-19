import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({


   apiKey: "AIzaSyDOsSe7UNvbqq1mGwyFunJOdsDAvsd2VWA",
   authDomain: "burguer-queen-3ab43.firebaseapp.com",
   databaseURL: "https://burguer-queen-3ab43.firebaseio.com",
   projectId: "burguer-queen-3ab43",
   storageBucket: "burguer-queen-3ab43.appspot.com",
   messagingSenderId: "558478523220",
   appId: "1:558478523220:web:51bb850d785055e4"
 });


 const db = firebaseApp.firestore();

 export { db };
import firebase from 'firebase';

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyBa2YkKkBChN32xDL7FIieGMYU-rSxY068",
    authDomain: "instagram-clone-react-b4736.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-b4736.firebaseio.com",
    projectId: "instagram-clone-react-b4736",
    storageBucket: "instagram-clone-react-b4736.appspot.com",
    messagingSenderId: "150499183013",
    appId: "1:150499183013:web:0744d9aedf801cb722c04c"
});

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
 

export { db, auth, storage };
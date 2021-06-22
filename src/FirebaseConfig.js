import firebase from 'firebase';
import  'firebase/auth'
import 'firebase/firebase'


const firebaseConfig = {
    apiKey: "AIzaSyChoLZ5IVC5Rw4a9MZda8c26zSUFOJmfPk",
    authDomain: "netflix-clone-b4052.firebaseapp.com",
    projectId: "netflix-clone-b4052",
    storageBucket: "netflix-clone-b4052.appspot.com",
    messagingSenderId: "49462352960",
    appId: "1:49462352960:web:511747c26e7294cc9693a5"
  };

export default  firebase.initializeApp(firebaseConfig);
// const firebase =Firebase.initializeApp(firebaseConfig);
// export {firebase}

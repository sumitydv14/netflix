
import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyC6-wx-KJ7SjlGQpBdIFZz53Kc29GF_HGo",
    authDomain: "reactnetflix-6d213.firebaseapp.com",
    projectId: "reactnetflix-6d213",
    storageBucket: "reactnetflix-6d213.appspot.com",
    messagingSenderId: "535666695740",
    appId: "1:535666695740:web:2275d3d06163fd48f2ad39"
  };

const firebaseApp = firebase.initialzeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth}
export default db;
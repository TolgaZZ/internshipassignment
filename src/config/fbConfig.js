import * as firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDDiE4Q7k026uYQr_rS98IGRy76Nx6fsLE",
    authDomain: "internshipassignment-1e2f7.firebaseapp.com",
    databaseURL: "https://internshipassignment-1e2f7.firebaseio.com",
    projectId: "internshipassignment-1e2f7",
    storageBucket: "internshipassignment-1e2f7.appspot.com",
    messagingSenderId: "839157601814",
    appId: "1:839157601814:web:231b8d534ebf5cfe5a4737",
    measurementId: "G-R7BX61DG3L"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

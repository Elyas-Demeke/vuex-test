import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDcjxXdDLd5p-r-0gD9X36Yvs1aF-8E_7E",
    authDomain: "todo-ef708.firebaseapp.com",
    projectId: "todo-ef708",
    storageBucket: "todo-ef708.appspot.com",
    messagingSenderId: "994038579213",
    appId: "1:994038579213:web:f8bd51171e010bfae2d544",
    measurementId: "G-KR0RVD29YN"
  };

  let firebaseApp;
  if(!firebase.apps.length){
    firebaseApp = firebase.initializeApp(firebaseConfig);
  }else{
    firebaseApp = firebase.app();
  }
  export default firebaseApp.firestore()
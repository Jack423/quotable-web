import firebase from 'firebase'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

// var firebaseConfig = {
//     apiKey: "AIzaSyA4F1VxDzZYNzlW_W2IbPPfp7gbxxtcc8w",
//     authDomain: "socialmediatest-56820.firebaseapp.com",
//     databaseURL: "https://socialmediatest-56820.firebaseio.com",
//     projectId: "socialmediatest-56820",
//     storageBucket: "socialmediatest-56820.appspot.com",
//     messagingSenderId: "535776666218",
//     appId: "1:535776666218:web:dd6c4480bf1c2928"
// };

var firebaseConfig2 = {
    apiKey: "AIzaSyB5UzQQwM1GC1ClDO2dE8zaspRephSxDt8",
    authDomain: "quotable-c70b9.firebaseapp.com",
    databaseURL: "https://quotable-c70b9.firebaseio.com",
    projectId: "quotable-c70b9",
    storageBucket: "quotable-c70b9.appspot.com",
    messagingSenderId: "521714104273",
    appId: "1:521714104273:web:53df885502266cc5"
  };

const app = firebase.initializeApp(firebaseConfig2);
//firebase.firestore().settings({timestampsInSnapshots: true})

export {app}
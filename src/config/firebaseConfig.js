import firebase from 'firebase'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

const app = firebase.initializeApp(firebaseConfig2);
//firebase.firestore().settings({timestampsInSnapshots: true})

export {app}

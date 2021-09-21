import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCY0yKrQsDpmiRcUjF2YmBagYfo12hTQu4",
    authDomain: "proffus-3c86a.firebaseapp.com",
    projectId: "proffus-3c86a",
    storageBucket: "proffus-3c86a.appspot.com",
    messagingSenderId: "552712226222",
    appId: "1:552712226222:web:d0c1de02c8ba20d774343f"
  };

firebase.initializeApp(firebaseConfig)

export const auth=firebase.auth()
export const db=firebase.firestore()

export default firebase
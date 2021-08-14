import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { useFirebaseConnect } from 'react-redux-firebase'


var config = {
  apiKey: 'AIzaSyDZIxNmCWSx2BIaids0onjSg5FaZQaoyzo',
  authDomain: 'react-firebase-project-planner.firebaseapp.com',
  projectId: 'react-firebase-project-planner',
  storageBucket: 'react-firebase-project-planner.appspot.com',
  messagingSenderId: '286113518363',
  appId: '1:286113518363:web:d95b51bb72fceee24f39be',
  measurementId: 'G-MKMLZNZHJP'
}

firebase.initializeApp(config)
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase


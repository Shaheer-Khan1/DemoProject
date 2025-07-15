import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// TODO: Replace with your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCbNG8rdWgOrtProQlzx7zpfyiND8shCqs",
  authDomain: "demoproject-5774f.firebaseapp.com",
  projectId: "demoproject-5774f",
  storageBucket: "demoproject-5774f.firebasestorage.app",
  messagingSenderId: "665953668898",
  appId: "1:665953668898:web:921afa41c7673d25e39f7b"
}

/*const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};*/

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore(app)

export { auth, provider, db } 
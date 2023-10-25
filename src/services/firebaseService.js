import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: 'AIzaSyAIZ6qK3ExYXmK1UKofskzvj0hS9DJDJTM',
    authDomain: 'text-paste.firebaseapp.com',
    projectId: 'text-paste',
    storageBucket: 'text-paste.appspot.com',
    messagingSenderId: '710349981931',
    appId: '1:710349981931:web:280476f0bc277fbaaf16ae'
  }
  
const app = initializeApp(firebaseConfig)

export default app

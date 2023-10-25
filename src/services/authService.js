import app from './firebaseService'
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth'

const auth = getAuth(app)

const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}

const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}

const logOut = () => signOut(auth)

const getCurrentUser = () => {
    const uid = auth.currentUser.uid
    console.log('user id', uid)
    return uid
}

export { auth, loginUser, logOut, getCurrentUser, registerUser }

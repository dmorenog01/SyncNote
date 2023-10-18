import { getFirestore, collection, addDoc, deleteDoc, doc } from 'firebase/firestore'
import app from "./firebaseService"
import { getCurrentUser } from '../services/loginService'

const firestore = getFirestore(app)

const saveNote = async (note) => {
    const userId = getCurrentUser()
    if (!userId) {
        console.error('No user logged in. Unable to save note');
        return null
    }
    const collectionRef = collection(firestore, `/users/${userId}/notes`)
    const toSave = {
        content: note,
        date: new Date()
    }
    try {
        const document = await addDoc(collectionRef, toSave)
        console.log('saved document with id', document.id);
    } catch (error) {
        console.error("Error adding document", error);
    }
    // we want to save a new note under users/uid/notes/
    return toSave
}

const deleteNote = async (docId) => {
    console.log('deleting note with id', docId)
    const userId = getCurrentUser()
    const path = `/users/${userId}/notes/${docId}`
    await deleteDoc(doc(firestore, path))
}

export { firestore, saveNote, deleteNote }
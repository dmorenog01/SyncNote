import { getFirestore, collection, addDoc, deleteDoc, doc } from 'firebase/firestore'
import app from './firebaseService'
import { getCurrentUser } from './authService'
import { LogCustomEvent } from './analyticsService'

const firestore = getFirestore(app)

const saveNote = async (note) => {
    const userId = getCurrentUser()
    if (!userId) {
        console.error('No user logged in. Unable to save note')
        return null
    }
    const collectionRef = collection(firestore, `/users/${userId}/notes`)
    const toSave = {
        content: note,
        date: new Date()
    }
    try {
        await addDoc(collectionRef, toSave)
        LogCustomEvent('document_saved')
        console.log('saved document')
    } catch (error) {
        console.error('Error adding document', error)
    }
    return toSave
}

const deleteNote = async (docId) => {
    console.log('deleting note with id', docId)
    const userId = getCurrentUser()
    const path = `/users/${userId}/notes/${docId}`
    await deleteDoc(doc(firestore, path))
    LogCustomEvent('document_deleted')
}

export { firestore, saveNote, deleteNote }
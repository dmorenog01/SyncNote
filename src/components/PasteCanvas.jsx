import { useState, useEffect, useRef } from "react"
import { collection, query, onSnapshot, orderBy } from "firebase/firestore"
import { saveNote, firestore } from "../services/firestoreService"
import { getCurrentUser } from "../services/loginService"
import { Notify } from "notiflix"
import Note from "./Note"
import FloatingAction from "./FloatingAction"
import NoNotes from "./NoNotes"

const PasteCanvas = () => {
    const canvasRef = useRef(null)
    const [ notes, setNotes ] = useState([])
    
    useEffect(() => {
        let prevPaste = ''

        const pasteHandler = (event) => {
            event.preventDefault()
            let paste = (event.clipboardData || window.clipboardData).getData("text")
            if (paste == false || paste === prevPaste) {
                Notify.failure("Can't create the same note twice!")
                return
            }
            saveNote(paste)
            Notify.success('Note has been saved!')
            prevPaste = paste
        }
        // paste handler
        const element = canvasRef.current
        element.addEventListener("paste", pasteHandler)

        return () => {
            element.removeEventListener("paste", pasteHandler);
        }
    }, [])

    useEffect(()=> {
        // query listener
        const uid = getCurrentUser()
        const path = `users/${uid}/notes`
        console.log('listening to notes on', path);
        const q = query(collection(firestore, path), orderBy('date', 'desc'))
        const unsub = onSnapshot(q, (querySnapshot) => {
            const snapshotNotes = []
            querySnapshot.forEach(doc => snapshotNotes.push({ ...doc.data(), id: doc.id }))
            setNotes(snapshotNotes)
        })
        return () => {
            // cleanup
            unsub()
        }
    }, [])
    
    return (
        <>
            <div ref={canvasRef} className='grid grid-cols-1 auto-rows-[192px] gap-3 md:grid-cols-4 xl:grid-cols-5'>
                {notes && notes.map((note) => <Note key={note.id} note={note}/>)}
                {notes.length == 0 && <NoNotes/>}
            </div>
            <FloatingAction/>
        </>
    )
}

export default PasteCanvas
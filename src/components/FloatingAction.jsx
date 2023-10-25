import { saveNote } from '../services/firestoreService'
import { Notify } from 'notiflix'
import { BiPlus } from 'react-icons/bi'

const FloatingAction = () => {

    const clickHandler = async () => {
        let paste = await navigator.clipboard.readText()
        if (paste == false) {
            Notify.failure('Can\'t create an empty note!')
            return
        }
        saveNote(paste)
        Notify.success('Note has been saved!')
    }

    return (
        <div className="fixed bottom-3 right-3 sm:hidden h-min w-min m-3">
            <button className="flex items-center justify-center p-3 bg-slate-800 hover:bg-slate-600 text-sky-400 hover:text-sky-300 text-2xl font-bold rounded-lg h-12 w-12" onClick={clickHandler}>
                <BiPlus/>
            </button>
        </div>
    )
}

export default FloatingAction
import { deleteNote } from "../services/firestoreService"
import { Notify } from "notiflix"
import CustomSvgButton from "./CustomSVGButton"
import CopySVG from '../assets/CopySVG'
import TrashSVG from '../assets/TrashSVG'
import CustomLink from './CustomLink'

const Note = ({ note }) => {
    const { content, id } = note
    const re = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g
    const emailRe = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/

    const copyHandler = () => {
        navigator.clipboard.writeText(content)
        Notify.success("Note Copied!")
    }
    const deleteHandler = () => {
        deleteNote(id)
        Notify.warning("The note has been deleted.")
    }

    return (
    <div className="flex flex-col box-border p-3 bg-slate-900 text-slate-300 rounded-md drop-shadow-md">
        <div className="grow break-words">
            {content.split(" ").map(f => { return re.test(f) && !emailRe.test(f) ? <CustomLink link={f}/> : f + " "})}
        </div>
        <div className="flex justify-end">
            <CustomSvgButton onClick={copyHandler} buttonText='copy'><CopySVG/></CustomSvgButton>
            <CustomSvgButton onClick={deleteHandler} buttonText='delete'><TrashSVG/></CustomSvgButton>
        </div>
    </div>
    )
}

export default Note
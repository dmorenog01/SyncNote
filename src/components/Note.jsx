import { deleteNote } from "../services/firestoreService"
import { Notify } from "notiflix"

import CustomSvgButton from "./CustomSVGButton"

import CopySVG from '../assets/CopySVG'
import TrashSVG from '../assets/TrashSVG'

const Note = ({ note }) => {
    const { content, id } = note
    const copyHandler = () => {
        navigator.clipboard.writeText(content)
        Notify.success("Note Copied!")
    }
    const deleteHandler = () => {
        deleteNote(id)
        Notify.warning("The note has been deleted.")
    }

    return (
    <div className="flex flex-col w-64 p-3 bg-slate-900 text-slate-300 rounded-md drop-shadow-md">
        <div className="flex-grow mb-2">
            {content}
        </div>
        <div className="flex justify-end">
            <CustomSvgButton onClick={copyHandler} buttonText='copy'><CopySVG/></CustomSvgButton>
            <CustomSvgButton onClick={deleteHandler} buttonText='delete'><TrashSVG/></CustomSvgButton>
        </div>
    </div>
    )
}

export default Note
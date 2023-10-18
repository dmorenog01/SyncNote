const CustomButton = ({ buttonText, onClick }) => {
    return (
        <button onClick={onClick} className="bg-slate-700 hover:bg-slate-500 py-1 px-2 mr-1 rounded-md">{buttonText}</button>
    )
}

export default CustomButton
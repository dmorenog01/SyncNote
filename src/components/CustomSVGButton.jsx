const CustomSvgButton = (props) => {
    return (
        <button onClick={props.onClick} className="hover:bg-slate-500 py-1 px-2 mr-1 rounded-md">{props.children}</button>
    )
}

export default CustomSvgButton
import './buttonHeader.css'

export default function ButtonHeader ({text, children, onClick, isActive, disabled, onChange, style, type, href}){
    return(
        <button
        onClick={onClick}
        onChange={onChange}
        style={style}
        type={type}
        className={"btnHeader"}
        >
        {text}{children}
        </button>
    )
}
import './buttonFooter.css'

export default function ButtonFooter({text, children, onClick, isActive, disabled, onChange, style, type, href}){
    return(
        <button
        onClick={onClick}
        onChange={onChange}
        style={style}
        type={type}
        className={"btnFooter"}
        >
        {text}{children}
        </button>
    )
}
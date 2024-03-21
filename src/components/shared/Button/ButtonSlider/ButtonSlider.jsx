import './buttonSlider.css'

export default function ButtonSlider ({text, children, onClick, isActive, disabled, onChange, style, type, href}){
    return(
        <button
        onClick={onClick}
        onChange={onChange}
        style={style}
        type={type}
        className={"btnSlider active"}
        >
        {text}{children}
        </button>
    )
}
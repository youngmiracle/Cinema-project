import './buttonSlider.css'

export default function ButtonSlider ({text, children, onClick, isActive, disabled, onChange, style, type, className}){
    return(
        <button
        onClick={onClick}
        onChange={onChange}
        style={style}
        type={type}
        className={className}
        >
        {text}{children}
        </button>
    )
}
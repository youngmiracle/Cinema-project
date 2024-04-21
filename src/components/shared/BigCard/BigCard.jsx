import './bigCard.css';
import {NavLink} from "react-router-dom";



export function BigCard ({src, onClick, name, rental, style, example}){
    return(
        <section className="bigCard__section" style={style}>
            <img src={src} alt="картинка" className="bigCard__img"/>
            <aside className='bigCard__text'>
                <p className="bigCard__name" children={name}></p>
                <p className="bigCard__rental" children={rental}></p>
            </aside>
            <NavLink to={example} href="#" className='bigCard__btn' onClick={onClick}></NavLink>
            <div className="bigCard__container"></div>
        </section>
    )
}
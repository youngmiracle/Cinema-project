import './middleCard.css';
import sa from './sa.jpg'
import {NavLink} from "react-router-dom";

export function MiddleCard ({src, name, rental, onClick, example}){
    return(
        <section className="middleCard__section">
            <img src={src} alt="картинка" className="middleCard__img"/>
            <aside className='middleCard__text'>
                <p className="middleCard__name" children={name}></p>
                <p className="middleCard__rental" children={rental}></p>
            </aside>
            <div className="middleCard__container"></div>
            <NavLink to={example} href="#" className='middleCard__btn' onClick={onClick}></NavLink>
        </section>
    )
}
import './middleCard.css';
import sa from './sa.jpg'

export function MiddleCard ({src, name, rental}){
    return(
        <section className="middleCard__section">
            <img src={src} alt="картинка" className="middleCard__img"/>
            <aside className='middleCard__text'>
                <p className="middleCard__name" children={name}></p>
                <p className="middleCard__rental" children={rental}></p>
            </aside>
            <div className="middleCard__container"></div>
            <button className='middleCard__btn'></button>
        </section>
    )
}
import './bigCard.css';

export function BigCard ({src, onClick, name, rental}){
    return(
        <section className="bigCard__section">
            <img src={src} alt="картинка" className="bigCard__img"/>
            <aside className='bigCard__text'>
                <p className="bigCard__name" children={name}></p>
                <p className="bigCard__rental" children={rental}></p>
            </aside>
            <button onClick={onClick} className='bigCard__btn'></button>
            <div className="bigCard__container"></div>
        </section>
    )
}
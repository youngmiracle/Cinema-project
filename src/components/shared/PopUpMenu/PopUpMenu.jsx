import './popUpMenu.css'

export default function PopUpMenu({name, timeSessions, id, onClick}){

    return(
        <form className="popUpMenu" id={id}>
            <h2 className="popUpMenu__title">Покупка билета</h2>
            <p className="popUpMenu__text">Название фильма: &nbsp;<strong className="popUpMenu__strong">{name}</strong></p>
            <p className="popUpMenu__text">Цена: &nbsp;<strong className="popUpMenu__strong">400&#8381;</strong></p>
            <p className="popUpMenu__text">Время сеанса: &nbsp;<strong className="popUpMenu__strong">{timeSessions}</strong></p>
            <input type="text" placeholder="Введите номер телефона" className="popUpMenu__input"/>
            <p className="popUpMenu__text popUpMenu__description">Дополнительная информация и бронирование билетов по телефону +7 800 535-35-35</p>
            <div className="popUpMenu__nav">
                <button type="button"  className="popUpMenu__btn" onClick={onClick}>Закрыть</button>
                <button className="popUpMenu__btn">Купить</button>
            </div>
        </form>
    )
}
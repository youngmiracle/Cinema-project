import('./sessionExample.css')

export default function SessionExample({dateIncrement, time, onClick, id}){

    const date = new Date();
    const dateDay = date.getDate();
    const dateMonthValue = date.toLocaleString('default', {month: 'long'});
    const dateMonth = dateMonthValue.charAt(0).toUpperCase() + dateMonthValue.substring(1);
    const dateMonthResult = dateMonth.slice(0, -1);
    return (
        <section className="sessionExample">
            <p className="sessionExample__date">{dateIncrement} {dateMonthResult}я</p>
            <p className="sessionExample__typeHall">зал с креслами</p>
            <button className="sessionExample__timeBtn" id={id} onClick={onClick}>{time}</button>
            <div className="wandSessionExample"></div>
        </section>
    )
}
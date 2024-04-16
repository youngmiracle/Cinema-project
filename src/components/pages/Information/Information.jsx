import './information.css';


export function InformationPage (){
  
const description = [
    {
        key: 1,
        title: 'Удобное расположение',
        text: 'кинотеатр расположен в самом центре города'
    },
    {
        key: 2,
        title: '4 Зала',
        text: 'каждый из которых оснащен современным оборудованием'
    },
    {
        key: 3,
        title: 'Более 20 лет радуем зрителей',
        text: 'кинотеатр был открыт в 2000 году, и является одним из старейших в городе'
    }
]                                                  

    return(
        <main className="infSection">
            <article className='infSection__definition'>
                <p className='definition__title'>
                    <strong className='definition__name'>CINIMA CHITA</strong> - здесь начинается ваше путешествие в мир кино!
                </p>
                <div className="rectangle"></div>
                <div className="shadowPhon"></div>
            </article>
            <article className='infSection__addition'>
            {description.map((descr) =>{
                return(
                    <section className='addition__comment' key={descr.key}>
                            <div className="wand"></div>
                            <aside className='comment__description'>
                                <p className='description__title'>{descr.title}</p>
                                <p className='description__text'>{descr.text}</p>
                            </aside>
                    </section>
                )
            })}
            </article>
            <article className='infSection__bar'>
                <p className='definition__title'>
                    <strong className='definition__name'>РЕСТОРАН + БАР </strong>- мы предлагаем блюда европейской кухни, авторские коктейли и специальные сеты для зрителей
                </p>
                <div className="rectangle rectangleSecond"></div>
                <div className="shadowPhonSecond"></div>
            </article>
            <article className='infSection__barFact'>
                <div className="wand"></div>
                <p className='description__text'><strong className='description__textStrong'>Ресторан и бар в кинотеатре “Cinima Chita”</strong> - идеальное место для отдыха после насыщенного дня. Вас ждет уютная атмосфера, приветливый персонал и разнообразное меню. В нашем ресторане вы сможете насладиться блюдами европейской кухни, а также попробовать авторские коктейли от нашего талантливого бармена. Для любителей кино мы предлагаем специальные сеты, которые идеально дополнят просмотр фильма. Ждем вас в гости!</p>
            </article>
            <article className='infSection__offer'>
                <p className='definition__title'>
                    <strong className='definition__name'>Для любителей кино</strong> - предлагаем карту постоянного клиента со скидками на билеты и доступом к закрытым мероприятиям.
                </p>
                <div className="rectangle rectangleThird"></div>
                <div className="shadowPhon"></div>
            </article>
            <article className='infSection__barFact'>
                <div className="wand"></div>
                <p className='description__text'><strong className='description__textStrong'> CINIMA CHITA</strong>, будучи кинотеатром высокого уровня, ценит всех своих посетителей и предлагает им программу лояльности, благодаря которой они могут получать различные преимущества. Если вы станете обладателем карты постоянного посетителя, то сможете пользоваться скидками на билеты, а также участвовать в различных закрытых акциях, показах, мероприятиях, которые кинотеатр проводит время от времени. Чем чаще вы будете посещать кинотеатр, тем больше возможностей для получения скидок и участия в мероприятиях будет открываться перед вами. Таким образом, “Cinima chita” заботится о том, чтобы каждый посетитель чувствовал себя особенным и желанным гостем кинотеатра.</p>
            </article>
        </main>
    )
}
import './contacts.css'


const asideInformation = [
    {
        title: "КИНОТЕАТР",
        number: '+7 914 666-66-66',
        hrefMail: "mailto:kinoteatr@cinema.chita",
        mail: 'kinoteatr@cinema.chita',
        key: 1
    },
    {
        title: "БАР",
        number: '+7 914 555-55-55',
        hrefMail: "mailto:bar@cinema.chita",
        mail: 'bar@cinema.chita',
        key: 2
    },
    {
        title: "РЕКЛАМА В",
        hrefMail: "mailto:marketing@cinema.chita",
        mail: 'marketing@cinema.chita',
        key: 3
    },
    {
        title: "Вопросы трудоустройства",
        number: '+7 914 666-66-66',
        hrefMail: "mailto:kinoteatr@cinema.chita",
        key: 4
    }
]

export function ContactsPage (){
    return(
        <main className="contactsSection">
            <div className="container">
                <h2 className='contactsSection__title'>Сотрудники киноклуба «Москва» будут рады ответить на все интересующие вопросы, связанные с работой кинотеатра и ресторанов</h2>
                <section className='sectionAside'>
                {
                    asideInformation.map((asideInf) => {
                    return(
                            <article className="contacts__article" key={asideInf.key}>
                            <aside className="contacts__aside">
                                <p className="contacts__title">{asideInf.title} &laquo;Cinema Chita&raquo;</p>
                                <p className="contacts__number">{asideInf.number}</p>
                                <a className="contacts__mail" href={asideInf.hrefMail}>{asideInf.mail}</a>
                            </aside>
                        </article>
                    )}
                    )
                }
                </section>
            </div>
        </main>
    )
}
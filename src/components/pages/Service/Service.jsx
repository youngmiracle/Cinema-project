import './service.css'
import firstLogo from '../image/logo/first.png'
import secondLogo from '../image/logo/two.png'
import thridLogo from '../image/logo/three.png'
import fourthLogo from '../image/logo/four.png'
import fivethLogo from '../image/logo/five.png'
import sixthLogo from '../image/logo/six.png'



export function ServicePage (){
    
const serviceTypes = [
    {
        logo: firstLogo,
        alt: 'Первый логотип',
        description: 'Демонстрация фильмов различных жанров на различных форматах экранов. У нас вы найдете как последние новинки, так и классику кинематографа',
        key: 1
    },
    {
        logo: secondLogo,
        alt: 'Второй логотип',
        description: 'Возможность приобрести билеты на киносеансы, в том числе онлайн и через мобильное приложение',
        key: 2
    },
    {
        logo: thridLogo,
        alt: 'Третий логотип',
        description: 'Проведение кинопоказов, фестивалей, премьер и образовательных программ. Также мы организуем различные мероприятия',
        key: 3
    },
    {
        logo: fourthLogo,
        alt: 'Четвёртый логотип',
        description: 'Аренда наших кинозалов для корпоративных мероприятий, презентаций и семинаров',
        key: 4
    },
    {
        logo: fivethLogo,
        alt: 'Пятый логотип',
        description: 'Продажа сопутствующих товаров и атрибутики, таких как попкорн, напитки и игрушки',
        key: 5
    },
    {
        logo: sixthLogo,
        alt: 'Шестой логотип',
        description: 'Создание комфортных условий для людей с ограниченными возможностями - предоставление пандусов, специальных мест для колясок, помощь в сопровождении',
        key: 6
    }
]
       

    return(
        <main className="serviceSection">
            <article className='mainBlock'>
                {
                    serviceTypes.map((srvPage) => {
                        return(
                            <section className='mainBlock__example' key={srvPage.key}>
                                <img src={srvPage.logo} alt={srvPage.alt} className='logo'/>
                                <p className='description'>{srvPage.description}</p>
                            </section>
                        )
                    })
                }
            </article>
        </main>
    )
}
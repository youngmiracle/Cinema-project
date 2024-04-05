import ButtonFooter from "../../shared/Button/ButtonFooter/ButtonFooter";
import { NavLink } from "react-router-dom";
import './footer.css'

export function Footer(){
    return(
        <footer className="footerr">
            <nav className="navPage">
                <NavLink to={'about'} href="#" className='navLink'><ButtonFooter>о кинотеатре</ButtonFooter></NavLink>
                <NavLink to={'service'} href="#" className='navLink'><ButtonFooter >Услуги</ButtonFooter></NavLink>
                <NavLink to={'contacts'} href="#" className='navLink'><ButtonFooter >контакты</ButtonFooter></NavLink>
                <NavLink to={'review'} href="#" className='navLink'><ButtonFooter>оставить отзыв</ButtonFooter></NavLink>
            </nav>
            <nav className="navSoc">
                <a href="https://vk.com/feed" className="navSoc__vk"></a>
                <a href="https://www.tiktok.com/explore" className="navSoc__tt"></a>
                <a href="https://web.telegram.org" className="navSoc__tg"></a>
                <a href="https://ok.ru/" className="navSoc__ok"></a>
            </nav>
            <section className="asideFooter">
                <aside className="numberTimeFooter">
                    <p className="numberFooter">+7 996 312-46-19</p>
                    <p className="timeFooter">Часы работы: с 10:00 до 01:00; в выходныес 10:00 до 03:00</p>
                </aside>
                <aside className="contactInfoFooter">
                    <a href="mailto:Chitago@cinema.ru" className="contactInfoFooter__mail">Chitago@cinema.ru</a>
                    <p className="contactInfoFooter__address">Чита, ​Ленина, 79, 1 этаж.</p>
                </aside>
                <p className="copyright">&copy; 2024 Кинотеатр “Chitago Cinema”</p> 
            </section>
        </footer>
    )
}
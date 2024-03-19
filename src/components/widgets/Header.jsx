import './Header.css'
import ButtonHeader from '../shared/Button/ButtonHeader/ButtonHeader'
import { NavLink } from 'react-router-dom'

export function Header({active, onChange}){
    return(
        <section className="header">
            <NavLink to={'/'}><button style={{
                width:"200px",
                height:"100px"
            }} className='logoCinema' isActive={active === 'main'}  onClick={() => onChange('main')}></button></NavLink>
            <nav className='navBtn'>
                <ButtonHeader isActive={active === 'info'}  onClick={() => onChange('info')}><NavLink to={'/about'}>о кинотеатре</NavLink></ButtonHeader>
                <ButtonHeader isActive={active === 'prices'}  onClick={() => onChange('prices')}><NavLink to={'/price'}>цены</NavLink></ButtonHeader>
                <ButtonHeader isActive={active === 'contacts'}  onClick={() => onChange('contacts')}><NavLink to={'/contacts'}>контакты</NavLink></ButtonHeader>
                <ButtonHeader style={{
                    position: 'absolute',
                    right: '5%'
                }}><NavLink to={'/review'}>оставить отзыв</NavLink></ButtonHeader>
            </nav>
            <p className='number'>+8 800 535 35 35</p>
        </section>
    )
}
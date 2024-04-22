import  './Header.css'
import ButtonHeader from '../../shared/Button/ButtonHeader/ButtonHeader'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export function Header({active, onChange}){
const [contactHeader, setcontactHeader] = useState('header')

function changeContact (){
    onChange('contacts');
    setcontactHeader('header headerContact')
}

function changeInfo (){
    onChange('about');
    setcontactHeader('header headerInformation')
}

const infoChange = () => {onChange('info'); setcontactHeader('header')}
const mainChange = () => {onChange('main'); setcontactHeader('header')}
const serviceChange = () => {onChange('prices'); setcontactHeader('header')}

    return(
        <header className={contactHeader}>
            <NavLink to={'/'} href="#" style={{
                width: '4%',
                height: "100%",
            }} className='navLink'><button className='logoCinema' isActive={active === 'main'}  onClick={mainChange}></button></NavLink>
            <nav className='navBtn'>
                <NavLink to={'about'} href="#" className='navLink'><ButtonHeader isActive={active === 'info'}  onClick={changeInfo}>о кинотеатре</ButtonHeader></NavLink>
                <NavLink to={'service'} href="#" className='navLink'><ButtonHeader isActive={active === 'service'}  onClick={serviceChange}>Услуги</ButtonHeader></NavLink>
                <NavLink to={'contacts'} href="#" className='navLink'><ButtonHeader isActive={active === 'contacts'}  onClick={changeContact}>контакты</ButtonHeader></NavLink>
                <NavLink to={'review'} href="#" className='navLink'><ButtonHeader style={{
                    position: 'absolute',
                    right: '6%',
                    width: '15%'
                }}>оставить отзыв</ButtonHeader></NavLink>
            </nav>
            <p className='number'>+8 800 535 35 35</p>
        </header>
    )
}
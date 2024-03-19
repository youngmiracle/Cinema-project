import  './Header.css'
import ButtonHeader from '../shared/Button/ButtonHeader/ButtonHeader'
import { useState } from 'react'

export function Header({active, onChange}){
const [contactHeader, setcontactHeader] = useState('header')

function changeContact (){
    onChange('contacts');
    setcontactHeader('header headerContact')
}

const infoChange = () => {onChange('info'); setcontactHeader('header')}
const mainChange = () => {onChange('main'); setcontactHeader('header')}
const pricesChange = () => {onChange('prices'); setcontactHeader('header')}

    return(
        <section className={contactHeader}>
            <a href="#" style={{
                width: '4%',
                height: "100%",
            }} className='navLink'><button className='logoCinema' isActive={active === 'main'}  onClick={mainChange}></button></a>
            <nav className='navBtn'>
                <a href="#" className='navLink'><ButtonHeader isActive={active === 'info'}  onClick={infoChange}>о кинотеатре</ButtonHeader></a>
                <a href="#" className='navLink'><ButtonHeader isActive={active === 'prices'}  onClick={pricesChange}>цены</ButtonHeader></a>
                <a href="#" className='navLink'><ButtonHeader isActive={active === 'contacts'}  onClick={changeContact}>контакты</ButtonHeader></a>
                <a href="#" className='navLink'><ButtonHeader style={{
                    position: 'absolute',
                    right: '6%',
                    width: '15%'
                }}>оставить отзыв</ButtonHeader></a>
            </nav>
            <p className='number'>+8 800 535 35 35</p>
        </section>
    )
}
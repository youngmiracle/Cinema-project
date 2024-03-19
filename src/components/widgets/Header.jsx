import  './Header.css'
import ButtonHeader from '../shared/Button/ButtonHeader/ButtonHeader'

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
        <section className="header">
            <button className='logoCinema' isActive={active === 'main'}  onClick={() => onChange('main')}></button>
            <nav className='navBtn'>
                <ButtonHeader isActive={active === 'info'}  onClick={() => onChange('info')}>о кинотеатре</ButtonHeader>
                <ButtonHeader isActive={active === 'prices'}  onClick={() => onChange('prices')}>цены</ButtonHeader>
                <ButtonHeader isActive={active === 'contacts'}  onClick={() => onChange('contacts')}>контакты</ButtonHeader>
                <ButtonHeader style={{
                    position: 'absolute',
                    right: '5%'
                }}>оставить отзыв</ButtonHeader>
            </nav>
            <p className='number'>+8 800 535 35 35</p>
        </section>
    )
}
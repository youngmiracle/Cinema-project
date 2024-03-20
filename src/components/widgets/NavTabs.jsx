import { useHref } from 'react-router-dom'
import ButtonHeader from '../shared/Button/ButtonHeader/ButtonHeader'
import './navTabs.css'

export function NavTabs ({active, onChange}){ 
    return(
        <nav>
            <ButtonHeader isActive={active === 'main'}  onClick={() => onChange('main') }>Видео-лист</ButtonHeader>
            <ButtonHeader isActive={active === 'profile'}  onClick={() => onChange('profile')} >Профиль</ButtonHeader>
            <ButtonHeader isActive={active === 'feedback'}  onClick={() => onChange('feedback')}>Обратная связь</ButtonHeader>
            <ButtonHeader isActive={active === 'effect'}  onClick={() => onChange('effect')}>Effect</ButtonHeader>
            <ButtonHeader isActive={active === 'userList'}  onClick={() => onChange('userList')}>User list</ButtonHeader>
        </nav>
    )
}
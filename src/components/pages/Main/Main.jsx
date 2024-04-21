import './main.css'
import {Slider} from '../../shared/Slider/Slider'
import SectionCard from '../../shared/SectionCard/SectionCard'
import BigSectionCard from '../../shared/BigSectionCard/BigSectionCard'
export function MainPage(){

    return(
        <main className='mainPage'>
            <Slider/>
            <SectionCard classNameArticle={'contentFilm'} className={'contentFilm__MiddleCard'}/>
            <BigSectionCard/>
        </main>
    )
}
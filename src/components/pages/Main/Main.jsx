import './main.css'
import {Slider} from '../../shared/Slider/Slider'
import SectionCard from '../../shared/SectionCard/SectionCard'
export function MainPage(){

    return(
        <main className='mainPage'>
            <Slider/>
            <SectionCard classNameArticle={'contentFilm'} className={'contentFilm__MiddleCard'}/>
            <SectionCard classNameArticle={'contentFilm contentFilmFirst'} className={'contentFilm__MiddleCard contentFilm__MiddleCardFirst'}/>
        </main>
    )
}
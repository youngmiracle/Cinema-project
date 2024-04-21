import './bigSectionCard.css'
import {BigCard} from '../BigCard/BigCard'
import films from "../../entities/films.json";


export default function BigSectionCard({}) {

    return (
        <section className='contentFilm__bigSectionCard'>
            {films.map((film) => {
                return (
                    <BigCard src={film.imageVertical} key={film.key} name={film.name} rental={film.rental} onClick={() => localStorage.setItem('key', film.key)} example={film.example} style={{width: '32%'}}/>
                )
            })}
        </section>
    )
}
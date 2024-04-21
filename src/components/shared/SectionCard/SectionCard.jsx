import { BigCard } from "../BigCard/BigCard"
import { MiddleCard } from "../MiddleCard/MiddleCard"
import './sectionCard.css'
import films from '../../entities/filmsSecond.json'

export default function SectionCard ({className, classNameArticle, bigCardImg, middleCardImg, middleCardName, bigCardName, bigCardRental, middleCardRental}){

    return(
        <article className={classNameArticle}>
            <section className='contentFilm__bigCard'>
                <BigCard src={films[4].imageVertical} onClick={() => localStorage.setItem('key', films.key)} example={films.example} name={films[4].name} rental={films[4].rental}/>
            </section>
            <section className={className}>
                {films.map((film) => {
                    return(
                        <MiddleCard key={film.key} onClick={() => localStorage.setItem('key', film.key)} example={film.example} src={film.imageHorizontal} name={film.name} rental={film.rental}/>
                    )
                })}
            </section>
        </article> 
    )
}
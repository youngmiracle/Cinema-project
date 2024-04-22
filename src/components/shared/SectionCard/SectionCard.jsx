import { BigCard } from "../BigCard/BigCard"
import { MiddleCard } from "../MiddleCard/MiddleCard"
import './sectionCard.css'
import films from '../../entities/films.json'

export default function SectionCard ({className, classNameArticle,props, bigCardImg, middleCardImg, middleCardName, bigCardName, bigCardRental, middleCardRental}){

    return(
        <article className={classNameArticle}>
            <section className='contentFilm__bigCard'>
                <BigCard src={films[7].imageVertical} onClick={() => localStorage.setItem('key', films[7].key)} example={films[7].example} name={films[7].name} rental={films[7].rental}/>
            </section>
            <section className={className}>
                {films.filter((film) => film.key > 3).map((film) => {
                    return(
                        <MiddleCard key={film.key} onClick={() => localStorage.setItem('key', film.key)} example={film.example} src={film.imageHorizontal} name={film.name} rental={film.rental}/>
                    )
                })}
            </section>
        </article> 
    )
}
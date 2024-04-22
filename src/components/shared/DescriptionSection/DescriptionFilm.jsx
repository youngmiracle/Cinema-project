import './descriptionFilm.css'
import films from '../../entities/films.json'

export default function DescriptionFilm(){
    let valueKeyLocalStorage = localStorage.getItem('key');
    const exampleKeyFilms  =  --valueKeyLocalStorage;

    return(
        <aside className="descriptionFilm">
            <div className="descriptionFilm__time">
                <p>{films[exampleKeyFilms].genre}</p>
                <p>{films[exampleKeyFilms].hour} ч {films[exampleKeyFilms].minute} мин&nbsp;&nbsp;|&nbsp;&nbsp;{films[exampleKeyFilms].ageLimit}</p>
            </div>
            <div className="descriptionFilm__comment">
                <p className="descriptionFilm__title">Описание</p>
                <p>{films[exampleKeyFilms].description}</p>
            </div>
            <div className="descriptionFilm__producer">
                <p className="descriptionFilm__title">Режиссер</p>
                <p>{films[exampleKeyFilms].producer}</p>
            </div>
            <div className="descriptionFilm__rental">
                <p className="descriptionFilm__title">В прокате</p>
                <p>{films[exampleKeyFilms].rental}</p>
            </div>
        </aside>
    )
}
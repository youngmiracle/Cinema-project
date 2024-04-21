import './exampleFilm.css'
import {BigCard} from "../../shared/BigCard/BigCard";
import films from "../../entities/films.json";
import VideoFilm from "../../shared/VideoFilm/VideoFilm";


export default function ExampleFilm (){
    let valueKeyLocalStorage = localStorage.getItem('key');
    const exampleKeyFilms  =  --valueKeyLocalStorage;
    return(
        <main className="exampleFilm__main">
            <article className="exampleFilm__media">
                <VideoFilm src={films[exampleKeyFilms].video}/>
                <img src={films[exampleKeyFilms].imageVertical} className="exampleFilm__image"/>
            </article>
            <article className="exampleFilm__descriptionSection">
                <section className="descriptionSection__rental">

                </section>
                <section className="descriptionSection__informationFilm">

                </section>
            </article>
        </main>
    )
}
import './exampleFilm.css'
import {BigCard} from "../../shared/BigCard/BigCard";
import films from "../../entities/films.json";
import VideoFilm from "../../shared/VideoFilm/VideoFilm";
import SessionExample from "../../shared/SessionExampleSection/SessionExample";
import DescriptionFilm from "../../shared/DescriptionSection/DescriptionFilm";


export default function ExampleFilm (){
    let valueKeyLocalStorage = localStorage.getItem('key');
    const exampleKeyFilms  =  --valueKeyLocalStorage;

    const handlerClick = () =>{
        document.getElementById('videoFilm').style.zIndex = '4';
        document.getElementById('imgHorizontal').style.display = 'none';
        document.getElementById('shadowPhon').style.display = 'none';
    }
    const date = new Date();
    const dateDay = date.getDate();
    return(
        <main className="exampleFilm__main">
            <article className="exampleFilm__media">
                <VideoFilm src={films[exampleKeyFilms].video} id="videoFilm"/>
                <img src={films[exampleKeyFilms].imageHorizontal} id="imgHorizontal" className="exampleFilm__imageHorizontal"/>
                <button className="exampleFilm__buttonPlay" onClick={handlerClick}/>
                <div className="exampleFilm__shadowPhon" id="shadowPhon">
                    <p>{films[exampleKeyFilms].name}</p>
                    <p className="shadowPhonGenre">{films[exampleKeyFilms].genre}</p>
                </div>
                <img src={films[exampleKeyFilms].imageVertical} className="exampleFilm__imageVertical"/>
            </article>
            <article className="exampleFilm__descriptionSection">
                <section className="descriptionSection__rental">
                    <SessionExample dateIncrement={dateDay + 1} time={'10:30'}/>
                    <SessionExample dateIncrement={dateDay + 2} time={'15:30'}/>
                    <SessionExample dateIncrement={dateDay + 3} time={'17:10'}/>
                    <SessionExample dateIncrement={dateDay + 4} time={'20:20'}/>
                </section>
                <DescriptionFilm/>
            </article>
        </main>
    )
}
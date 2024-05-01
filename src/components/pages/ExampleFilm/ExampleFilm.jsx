import './exampleFilm.css';
import films from "../../entities/films.json";
import VideoFilm from "../../shared/VideoFilm/VideoFilm";
import SessionExample from "../../shared/SessionExampleSection/SessionExample";
import DescriptionFilm from "../../shared/DescriptionSection/DescriptionFilm";
import PopUpMenu from "../../shared/PopUpMenu/PopUpMenu";
import {useEffect, useState} from "react";


export default function ExampleFilm (){
    let valueKeyLocalStorage = localStorage.getItem('key');
    const exampleKeyFilms  =  --valueKeyLocalStorage;
    const timeSession = ['10:30', '15:30', '17:10', '20:20']

    const timeSessions = sessionStorage.getItem("time");

    const [time, setTime] = useState(timeSessions);

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
                    <SessionExample onClick={() => {setTime(timeSession[0]); document.getElementById('popUpMenu').style.display = 'flex';}} dateIncrement={dateDay + 1} time={timeSession[0]}/>
                    <SessionExample onClick={() => {setTime(timeSession[1]); document.getElementById('popUpMenu').style.display = 'flex'}} dateIncrement={dateDay + 2} time={timeSession[1]}/>
                    <SessionExample onClick={() => {setTime(timeSession[2]); document.getElementById('popUpMenu').style.display = 'flex'}} dateIncrement={dateDay + 3} time={timeSession[2]}/>
                    <SessionExample onClick={() => {setTime(timeSession[3]); document.getElementById('popUpMenu').style.display = 'flex'}} dateIncrement={dateDay + 4} time={timeSession[3]}/>
                </section>
                <DescriptionFilm/>
            </article>
            <PopUpMenu idBtnBack="BtnBackPop" onClick={() => {sessionStorage.removeItem("time"); document.getElementById('popUpMenu').style.display = 'none';}} timeSessions={time} name={films[exampleKeyFilms].name} id="popUpMenu"/>
        </main>
    )
}
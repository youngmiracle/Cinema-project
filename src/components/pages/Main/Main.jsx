import './main.css'
import React, { useEffect, useState } from 'react';
import {Slider} from '../../shared/Slider/Slider'
import { MiddleCard } from '../../shared/MiddleCard/MiddleCard'
import onegin from './Онегин.webp'
// import son from './Герой наших снов визитка.jpg'
import { BigCard } from '../../shared/BigCard/BigCard'

export function MainPage(){
    const [state, setState] = useState([0, 1, 2, 3, 4, 5, 6, 7]);


  const callBackendAPI = async () => {
    const response = await fetch('/main');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };
  
  // получение GET маршрута с сервера Express, который соответствует GET из server.js 
  useEffect(() => {
    callBackendAPI()
    .then(res => setState(res.express))
    .catch(err => console.log(err));
  }, [])
  console.log(state.length)
  //https://imgur.com/a/JUd29Re
    return(
        <main className='mainPage'>
            <Slider/>
            <article className='contentFilm'>
                <section className='contentFilm__bigCard'>
                  <BigCard  key={state[0].film_id} src={`${state[0].pictures}`} name={state[0].name} rental={state[0].in_theaters}/>
                  {/* <BigCard  key={state[1].film_id} src={`${state[1].pictures}`} name={state[1].name} rental={state[1].in_theaters}/> */}
                </section>
                <section className='contentFilm__MiddleCard'>
                    <MiddleCard  src={state[1].pictures} name={state[1].name} rental={state[1].in_theaters}/>
                    <MiddleCard  src={onegin} name={'Герой наших снов'} rental={"7 марта - 3 апреля"}/>
                </section>
            </article>
        </main>
    )
}


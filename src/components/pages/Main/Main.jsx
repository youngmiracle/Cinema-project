import './main.css'
import React, { useEffect, useState } from 'react';
import { useState } from 'react'
import {Slider} from '../../shared/Slider/Slider'
import { MiddleCard } from '../../shared/MiddleCard/MiddleCard'
import onegin from './Онегин.webp'
import son from './Герой наших снов визитка.jpg'
import { BigCard } from '../../shared/BigCard/BigCard'




export function MainPage(){

    return(
        <main className='mainPage'>
            <Slider/>
            <article className='contentFilm'>
                <section className='contentFilm__bigCard'>
                    <BigCard src={son} name={'Герой наших снов'} rental={"7 марта - 3 апреля"}/>
                </section>
                <section className='contentFilm__MiddleCard'>
                    <MiddleCard  src={onegin} name={'Онегин'} rental={"12 марта - 21 апреля"}/>
                    <MiddleCard  src={onegin} name={'Герой наших снов'} rental={"7 марта - 3 апреля"}/>
                </section>
            </article>
        </main>
    )
}


import { BigCard } from "../BigCard/BigCard"
import { MiddleCard } from "../MiddleCard/MiddleCard"
import './sectionCard.css'

import son from './Герой наших снов визитка.jpg'

export default function SectionCard ({className, classNameArticle, bigCardImg, middleCardImg, middleCardName, bigCardName, bigCardRental, middleCardRental}){
    return(
        <article className={classNameArticle}>
            <section className='contentFilm__bigCard'>
                <BigCard src={bigCardImg} name={bigCardName} rental={bigCardRental}/>
            </section>
            <section className={className}>
                <MiddleCard  src={middleCardImg} name={middleCardName} rental={middleCardRental}/>
                <MiddleCard  src={middleCardImg} name={middleCardName} rental={middleCardRental}/>
                <MiddleCard  src={middleCardImg} name={middleCardName} rental={middleCardRental}/>
                <MiddleCard  src={middleCardImg} name={middleCardName} rental={middleCardRental}/>
            </section>
        </article> 
    )
}



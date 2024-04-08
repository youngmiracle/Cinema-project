import sliderImageFirst from '../../pages/image/widgetImage/forsaj.jpg'
import sliderImageSecond from '../../pages/image/widgetImage/СезонОхоты.jpg'
import sliderImageThird from '../../pages/image/widgetImage/Онегин.webp'
import ButtonSlider from '../Button/ButtonSlider/ButtonSlider'
import { useState } from 'react'
import './slider.css'

export function Slider({style, onChange, active}){
    const [image, setImage] = useState(sliderImageFirst)
    const [sliderBackground, setSliderBackground] = useState('btnSlider')
    const [changeBtnSlider, setChangeBtnSlider] = useState('disabled')
    // async function  sliderTime (){
        
    //     for(let i = 1; i <= 20; i++){
    //         setTimeout(() => {
    //             setImage(sliderImageSecond)
    //             i++
    //         }, 2000);
    //         setTimeout(() => {
    //             setImage(sliderImageFirst)
    //             i++
    //         }, 4000);
    //         setTimeout(() => {
    //             setImage(sliderImageThird)
    //             i++
    //         }, 6000);style={
            //     {
            //         background: `url(${image}) 50% 0 no-repeat`,
            //         backgroundSize: 'contain',
            //     }
            // }
    //     }
    // }
    const sliderImageChange = () => {setImage(sliderImageFirst); let a = ('firstBtn')}
    return(
        <section className='slider'>
                <img src={image} alt=""  style={{
                    width: '100%'
                }}/>
                <aside className='sliderTextBlock'><p className='sliderText'>Бронирование по телефону:<br/><strong className='sliderNumber'>+8 800 535-35-35</strong></p></aside>
                <nav className='btnSliderNav'>
                    <ButtonSlider className={sliderBackground} onClick={sliderImageChange}></ButtonSlider>
                    <ButtonSlider className={sliderBackground} onClick={() => setImage(sliderImageSecond)}></ButtonSlider>
                    <ButtonSlider className={sliderBackground} onClick={() => setImage(sliderImageThird)}></ButtonSlider>
                </nav>
            <div className="shadowBackgroundSlider"></div>
        </section>
    )
}
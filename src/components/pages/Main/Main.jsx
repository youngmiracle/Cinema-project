import sliderImage from '../image/filmWidget/forsaj.jpg'
import ButtonSlider from '../../shared/Button/ButtonSlider/ButtonSlider'
import './main.css'

export function MainPage(){
    return(
        <main className='mainPage'>
            <section className='slider' style={
                {
                    background: `url(${sliderImage}) 50% 0 no-repeat`,
                    backgroundSize: 'contain'
                }
            }>
                
                <nav className='btnSliderNav'>
                    <ButtonSlider></ButtonSlider>
                    <ButtonSlider></ButtonSlider>
                    <ButtonSlider></ButtonSlider>
                </nav>
                <div className="shadowBackgroundSlider"></div>
            </section>
            <article className='contentFilm'>
                
            </article>
        </main>
    )
}
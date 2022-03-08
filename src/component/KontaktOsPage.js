
import image from './images_KontaktOs/KontaktOsImage.jpg';
import '../component/KontaktOsStyle.css';






const KontaktOsPage = ()=> {
    return(

        <div >
            <img
            src={image}
            alt="a image of a frugt"
            />

            <div class="grid-container">
            <button
            id="b1" 
            type="button" 
            class="grid-item"
            onClick={() => window.location = 'tel:+451234567'}
            >Kontakt os  +4512345678</button>

            <button
            id="b2" 
            type="button"
            class="grid-item"
            onClick={() => window.location = 'mailto:info@crepecafe'}
            >Skriv til os info@crepecafe.dk</button>

            <button 
            id="b3" 
            type="button"
            class="grid-item">
            Find os København</button>

            </div>
            

        </div>
    )
}
export default KontaktOsPage


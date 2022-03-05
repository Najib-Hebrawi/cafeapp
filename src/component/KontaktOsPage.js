import React,{Component} from "react";
import image from './images_KontaktOs/KontaktOsImage.jpg';
import '../component/KontaktOsStyle.css';






function KontaktOsPage () {
    
  


    return(

        <div >
            <img
             src={image}
              alt="a image of a frugt"
              />

            <button
             id="b1" 
             type="button" 
             class="btn btn-outline-primary"
             onClick={() => window.location = 'tel:+451234567'}
             >Kontakt os  +4512345678</button>

            <button
             id="b2" 
             type="button"
              class="btn btn-outline-primary"
              onClick={() => window.location = 'mailto:info@crepecafe'}
              >Skriv til os info@crepecafe.dk</button>

            <button 
            id="b3" 
            type="button"
             class="btn btn-outline-primary">Find os København</button>

        </div>
    )
}
export default KontaktOsPage


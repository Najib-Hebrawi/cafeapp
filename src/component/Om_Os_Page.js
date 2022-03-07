import React, {Component} from "react";
import '../component/Om_Os_Page_Style.css';
import image from './images_om_os/Om_Os_Picture.jpg'




function Om_Os_Page () {


    return(

        <div>

            <img
             src={image}
             alt="A image of a fruit"
             />

            <h1>
                DESSERTHUS I HJERTET AF BRØNSHØJ!
             </h1>
            <p>
            Crepe Café laver selv den luftige pandekagedej, der giver små, flotte 
            pandekager – næsten som æbleskiver – som der endnu ikke er andre 
            steder i byen. Hos mission hos Crepe Café er, at opgradere den klassiske
            pandekage og gøre lidt mere ud af det. Derfor laver vi dem også fra 
            bunden.  Vi har åbent alle ugens dage fra kl. 15, så rammer sukkertrangen 
            kort efter frokost eller skal du have lidt lækkert til eftermiddagskaffen kan
            du bestemt  få stillet dine cravings hos Crepe Café Desserthus. 
            </p>

            



        </div>

    )
}


export default Om_Os_Page;
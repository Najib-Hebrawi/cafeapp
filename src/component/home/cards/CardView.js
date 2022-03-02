import React from "react";
import CardItem from "./CardItem";
import './CardView.css'

function CardView(){
    return(
    <div className='cards'>
        <h1>Vi tilbyder</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                        <CardItem
                            src="images/card_item1.jpg"
                            text="Pandekager"
                            path='/menu'
                        />
                        <CardItem
                            src="images/card_item2.jpg"
                            text="Kaffe"
                            path='/menu'
                        />
                    <CardItem
                        src="images/card_item3.jpg"
                        text="Frugtsalat"
                        path='/menu'
                    />
                    <CardItem
                        src="images/card_item4.jpg"
                        text="Cocktail"
                        // label='adasdsa'
                        path='/menu'
                    />

                    </ul>
                </div>
            </div>
        </div>
    )


}

export default CardView;
import React from "react";
import './CardView.css'
import Item from "./Item";

function CardView(){
    return(
    <div className='cards_box'>
        <h1 className={'header'}>Vi tilbyder</h1>
        <div className='cards_container'>
            <div className='cards_wrapper'>
                <ul className='cards_items'>
                    <Item
                        src="images/card_item1.jpg"
                        text="Pandekager"
                        path='/menu'
                    />
                    <Item
                        src="images/card_item2.jpg"
                        text="Kaffe"
                        path='/menu'
                    />
                    <Item
                        src="images/card_item3.jpg"
                        text="Frugtsalat"
                        path='/menu'
                    />
                    <Item
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
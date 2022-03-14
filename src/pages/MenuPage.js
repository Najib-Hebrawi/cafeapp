import React from "react";

import './MenuPage.css';

function MenuPage(){
    const menuItems = [
            {
                key: 1,
                "name": "Crepe",
                "flavors": 'Nutella, banana and strawberry',
                "price": '69 kr',
            },

            {
                key: 2,
                "name": "Danske pandekager",
                "flavors": 'Nutella, banana and strawberry',
                "price": '69 kr',
            },

            {
                key: 3,
                "name": "Amerikanske pandekage",
                "flavors": 'Nutella, banana and strawberry',
                "price": '69 kr',
            },

            {
                key: 4,
                "name": "Bubbel vaffel",
                "flavors": 'Nutella, banana and strawberry',
                "price": '69 kr',
            },

            {
                key: 5,
                "name": "Belgisk vaffel",
                "flavors": 'Nutella, banana and strawberry',
                "price": '69 kr',
            },

            {
                key: 6,
                "name": "Super crepe",
                "flavors": 'Nutella, strawberry, blueberry, pineapple, banana and honeydew melon',
                "price": '79 kr',
            },

            {
                key: 7,
                "name": "Dansk rolls",
                "flavors": 'Nutella, strawberry, blueberry, pineapple, banana and honeydew melon',
                "price": '79 kr',
            },

            {
                key: 8,
                "name": "Super amerikanske",
                "flavors": 'Nutella, strawberry, blueberry, pineapple, banana and honeydew melon',
                "price": '79 kr',
            },

            {
                key: 9,
                "name": "Mini pandekage",
                "flavors": 'Nutella, strawberry, blueberry, pineapple, banana and honeydew melon',
                "price": '79 kr',
            },

            {
                key: 10,
                "name": "Super bubbel",
                "flavors": 'Nutella, strawberry, blueberry, pineapple, banana and honeydew melon',
                "price": '79 kr',
            },


            {
                key: 11,
                "name": "Super belgisk",
                "flavors": 'Nutella, strawberry, blueberry, pineapple, banana and honeydew melon',
                "price": '79 kr',
            },

            {
                key: 12,
                "name": "Crepe rolls" ,
                "flavors": 'Nutella, strawberry, blueberry, pineapple, banana, honeydew melon and brownie',
                "price": '79 kr',
            },
        ]
    ;

    return (
        <div>
            <p className = "title" id="main_menu_title">C R E P E</p>
            <table className="table" id="main_menu_table">

                <thead>
                <tr id = "tableHead">
                    <th scope="col"></th>
                    <th scope="col">Name</th>
                    <th scope="col">Flavors</th>
                    <th scope="col">Price</th>
                </tr>
                </thead>
                <tbody>
                {menuItems.map(menuItem => (
                    <tr key={menuItem.key}>
                        <th scope="row">{menuItem.key}</th>
                        <td>{menuItem.name}</td>
                        <td>{menuItem.flavors}</td>
                        <td>{menuItem.price}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}


export default MenuPage;


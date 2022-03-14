
import React, { Fragment } from 'react';
import './styles/index';

interface IMenuCompProps {

}


const MenuComp: React.SFC<IMenuCompProps> = (props) => {
    const menuItems = [
        {
          key: 0,
          "name": "Crepe",
          "flavors": 'Nutella, banana and strawberry',
          "price": '69 kr',
        },
    
        {
          key: 1,
          "name": "Danske pandekager",
          "flavors": 'Nutella, banana and strawberry',
          "price": '69 kr',
        },
    
         {
          key: 2,
          "name": "Amerikanske pandekage",
          "flavors": 'Nutella, banana and strawberry',
          "price": '69 kr',
        },

        {
          key: 3,
          "name": "Bubbel vaffel",
          "flavors": 'Nutella, banana and strawberry',
          "price": '69 kr',
        },
    
        {
          key: 4,
          "name": "Belgisk vaffel",
          "flavors": 'Nutella, banana and strawberry',
          "price": '69 kr',
        },
    
        {
          key: 5,
          "name": "Super crepe",
          "flavors": 'Nutella, strawberry, blueberry, pineapple, banana and honeydew melon',
          "price": '79 kr',
        },
    
        {
          key: 6,
          "name": "Dansk rolls",
          "flavors": 'Nutella, strawberry, blueberry, pineapple, banana and honeydew melon',
          "price": '79 kr',
        },
    
        {
          key: 7,
          "name": "Super amerikanske",
          "flavors": 'Nutella, strawberry, blueberry, pineapple, banana and honeydew melon',
          "price": '79 kr',
        },
    
        {
          key: 8,
          "name": "Mini pandekage",
          "flavors": 'Nutella, strawberry, blueberry, pineapple, banana and honeydew melon',
          "price": '79 kr',
        },
    
        {
          key: 9,
          "name": "Super bubbel",
          "flavors": 'Nutella, strawberry, blueberry, pineapple, banana and honeydew melon',
          "price": '79 kr',
        },
    
      
        {
          key: 10,
          "name": "Super belgisk",
          "flavors": 'Nutella, strawberry, blueberry, pineapple, banana and honeydew melon',
          "price": '79 kr',
        }, 
        
        {
          key: 11,
          "name": "Crepe rolls" ,
          "flavors": 'Nutella, strawberry, blueberry, pineapple, banana, honeydew melon and brownie',
          "price": '79 kr',
        },
    
    
        {
          key: 12,
          "name": "Crepe Cafe special",
          "flavors": 'Mini, american, danish, crepe pancake, nutella, white chocolate, melon, ananas, banana, strawberry, blueberry, M&M and oreo',
          "price": '89 kr',
        },
    
        {
          key: null,
          "name": "extra",
          "flavors": 'M&M, Baunty, Twix, Bueno kinder, white chocolate, Snikers, Oreo kiks, Nutella, lotus and pistachio',
          "price": '10 kr',
        },
      ]
      ;
    
        const fruitSaladItems = [
        {
          key: null,
          "name": "pumpkin soup & toasted garlic bread",
          "price": '$5.00',
        },
    
        {
          key: 1,
          "name": "Tomato soup & buttered bread",
          "price": '$2.00',
        }
      ]
      ;
    
    
        const cocktailItems = [
        {
        key: null,
        "name": "seafood bucket",
        "price": '$5.00',
        },
    
        {
        key: null,
        "name": "grilled seafood & veggies",
        "price": '$8.00',
        },
    
        {
        key: null,
        "name": "Assorted sushi platter",
        "price": '$10.00',
        },
    
        {
        key: null,
        "name": "US beef steak",
        "price": '$15.00',
        }
        ]
        ;
    
    
    const milkshakeItems = [
      {
        key: null,
        "name": "Peach tart",
        "price": '$3.00',
      },
    
      {
        key: null,
        "name": "Pecan pie",
        "price": '$2.00',
      },
    
      {
        key: null,
        "name": "Choco banana sundae",
        "price": '$5.00',
      }
    ]
    ;
    
    
    const mojitoItems = [
      {
        key: null,
        "name": "Draft beer",
        "price": '$4.00',
      },
      {
        key: null,
        "name": "Imported beers",
        "price": '$8.00',
      },
      {
        key: null,
        "name": "Fruit juices",
        "price": '$3.00',
      },
      {
        key: null,
        "name": "Signature float",
        "price": '$6.00',
      }
    ]
    ;
    
    
    const kaffeItems = [
      {
        key: null,
        "name": "Capuchino",
        "price": '$4.00',
      },
    
      {
        key: null,
        "name": "Espresso",
        "price": '$4.00',
      },
    ]
    ;

  return (
    <div>
           <table id="main_menu_table">

<thead>
<tr>
    <th scope="col">#</th>
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

<p id="frugtsalat title">FRUGTSALAT</p> 

<table id="frugtsalat_table">
<thead>
<tr>
<th scope="col">#</th>
<th scope="col">Name</th>
<th scope="col">Price</th>
</tr>
</thead>
<tbody>
{fruitSaladItems.map(fruitSaladItem => (
<tr key={fruitSaladItem.key}>
  <th scope="row">{fruitSaladItem.key}</th>
  <td>{fruitSaladItem.name}</td>
  <td>{fruitSaladItem.price}</td>
</tr>
))}
</tbody>
</table>


<p id="cocktail_title">COCKTAIL </p> 

<table  id="cocktail_table">
<thead>
<tr>
<th scope="col">#</th>
<th scope="col">Name</th>
<th scope="col">Price</th>
</tr>
</thead>
<tbody>
{cocktailItems.map(cocktailItem => (
<tr key={cocktailItem.key}>
  <th scope="row">{cocktailItem.key}</th>
  <td>{cocktailItem.name}</td>
  <td>{cocktailItem.price}</td>
</tr>
))}
</tbody>
</table>

<p id="milkshake_title">MILKSHAKE</p> 

<table id="milkshake_table" >
<thead>
<tr>
<th scope="col">#</th>
<th scope="col">Name</th>
<th scope="col">Price</th>
</tr>
</thead>
<tbody>
{milkshakeItems.map(milkshakeItem => (
<tr key={milkshakeItem.key}>
  <th scope="row">{milkshakeItem.key}</th>
  <td>{milkshakeItem.name}</td>
  <td>{milkshakeItem.price}</td>
</tr>
))}
</tbody>
</table>

<p id="mojito_title">MOJITO</p> 
<table id="mojito_table">
<thead>
<tr>
<th scope="col">#</th>
<th scope="col">Name</th>
<th scope="col">Price</th>
</tr>
</thead>
<tbody>
{mojitoItems.map(mojitoItem => (
<tr key={mojitoItem.key}>
  <th scope="row">{mojitoItem.key}</th>
  <td>{mojitoItem.name}</td>
  <td>{mojitoItem.price}</td>
</tr>
))}
</tbody>
</table>
<p id="kaffe_title">KAFFE</p>
<table id = "kaffe_table" >
<thead>
<tr>
<th scope="col">#</th>
<th scope="col">Name</th>
<th scope="col">Price</th>
</tr>
</thead>
<tbody>
{kaffeItems.map(kaffeItem => (
<tr key={kaffeItem.key}>
  <th scope="row">{kaffeItem.key}</th>
  <td>{kaffeItem.name}</td>
  <td>{kaffeItem.price}</td>
</tr>
))}
</tbody>
</table>
</div> 
  );
}

export default MenuComp;

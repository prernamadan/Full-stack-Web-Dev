import './App.css';
import FirstComponent from './componentss/FirstComponent';
import FoodItem from './componentss/FoodItem';

let foodItems = [
  {name: 'Veg Supreme Burger', price: 99, ratings: 4.4, img:'https://source.unsplash.com/1600x700/?burger',desc:"a sandwich consisting of one or more cooked beef patties, placed inside a sliced bread roll or bun roll"},
  {name: 'Veg Flat Pizza', price: 299, ratings: 4.3, img:'https://source.unsplash.com/1600x700/?pizza',desc:"flat base of leavened wheat-based dough topped with tomatoes"},
  {name: 'DimSum', price: 149, ratings: 4.6, img:'https://source.unsplash.com/1600x700/?dimsum',desc:" small plates of dumplings and other snack dishes and is usually accompanied by tea"},
  {name: 'Green Noddles', price: 149, ratings: 4.4, img:'https://source.unsplash.com/1600x700/?noddles',desc:" a combination of a rich flavoured broth, one of a variety of types of noodle and a selection of meats"},
  {name: 'French Fries', price: 99, ratings: 4.3, img:'https://source.unsplash.com/1600x700/?fries',desc:"batonnet or allumette-cut deep-fried potatoes of disputed origin from Belgium or France"},
  {name: 'Red Sauce Pasta', price: 199, ratings: 4.3, img:'https://source.unsplash.com/1600x700/?pasta',desc:"classic spaghetti Bolognese to lasagne and linguine"}
]

function App() {
  return (
    <div>
    <h1 className='t'>Food Ordering Website</h1>
    <div className="App">
      {/* <h1>This is My First React App</h1>
      <FirstComponent title="Css Masterclass"/>
      <FirstComponent title="Jss mastercalss"/> */}
    {  foodItems.map((item)=>{
        return(
        <FoodItem name={item.name}  price={item.price} ratings={item.ratings} desc={item.desc} img={item.img}/>
        )
      })
    }
    </div>
    </div>
  );
}

export default App;

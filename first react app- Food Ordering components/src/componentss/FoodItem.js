
function FoodItem(props)
{
    function FoodOrder(){
        console.log('You ordered', props.name);
        if(props.price >199)
        {
            console.log('You have to Pay Rs.', props.price);
        }
        else
        {
            console.log('You have to pay Rs.50 for delivery');
            console.log('You have to Pay Rs.',props.price + 50);
        }
    }
    return(
        <div className="container">
        <div className="card-body">
            <div classnaName="card-head">
                <img className="card-img"src={props.img} alt="img"/>
                <p className={props.ratings>4.3 ? "mustTry":"dNone"}>Must Try</p>
            </div>
                <h3>{props.name}</h3>
                <h4>Rs.{props.price}</h4>
                <p>{props.desc}</p>
                <button className="btn" onClick={FoodOrder}>Order Now</button>
        </div>
        </div>
        
    )
}
export default FoodItem;
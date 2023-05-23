import styles from 'components\BillSplit.module.css'
function BillSplit()
{
    return(
        <div className= {styles.container}>
            <h2>BMI CALCULATOR</h2>
            <input placeholder="Enter your weight"/>
            <input placeholder="Enter your hieght"/>
            <button className= {styles.btn} >Calculate Now</button>
        </div> 
    )
}
export default BillSplit;
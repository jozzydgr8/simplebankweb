import { useEffect, useState } from 'react'
import {spendingCategories, transactionsPerMonth} from '../global/data'
import { SalesState } from '../Types/Types'
import { PieChart } from './PieChart'
import { BarChart } from './BarChart'
import stockImage from '../assets/stocksimage.webp';

const style= {
    stock:{
        backgroundImage:`url(${stockImage})`,
        backgroundSize:'cover'
    }
}
export default function ChartsRender(){
const [spend, setSpend] = useState<SalesState>({
    labels: spendingCategories.map(data=>data.category),
    datasets: [
        {
            label:' spending categories',
            data:spendingCategories.map(data=>data.amount)
        }
    ]
});
const [transaction , setTransaction] = useState<SalesState>({
    labels: transactionsPerMonth.map(data=>data.month),
    datasets:[
        {
            label:'Transactions per month',
            data:transactionsPerMonth.map(data=>data.transactions)
        }
    ]
})
useEffect(()=>{
    setSpend({
        labels: spendingCategories.map(data=>data.category),
    datasets: [
        {
            label:' spending categories',
            data:spendingCategories.map(data=>data.amount),
            backgroundColor: ['red', '#50af95'],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
        }
    ]
    })
    setTransaction({
        labels: transactionsPerMonth.map(data=>data.month),
    datasets:[
        {
            label:'Transactions per month',
            data:transactionsPerMonth.map(data=>data.transactions),
            backgroundColor: ['red', '#50af95'],
            borderColor: 'red',
            tension: 0,  // Makes the line slightly curved
            pointBackgroundColor: 'blue',  // Changes point color on the line
            pointBorderColor: 'white',  // Border around points
            borderWidth: 2,  // Thickness of the line
            fill: false
        }
    ]
    })
},[])
    return(
        <div className="row">
            <div className="col-md-6">
                <h3>Invest in stocks</h3>
                <div className="chartDiv" style={style.stock}>

                {/*<PieChart chartData={spend}/>*/}
                </div>
            </div>

            <div className="col-md-6">
                <h3>Monthly Transactions </h3>
                <div className="chartDiv">
                <BarChart chartData={transaction}/>
                </div>
            </div>
        </div>
    )
}
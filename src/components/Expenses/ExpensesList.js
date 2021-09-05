
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

function ExpensesList({items}) {
    if(items.length === 0){
          return <h2 className="expenses-list__fallback">Found no Expenses</h2>
    }
    return <ul className="expenses-list">
        {items.map(({title,amount,date,id})=>(
        <ExpenseItem  key={id} title={title} amount={amount} date={date}/>
        ))}
    </ul>
    
}

export default ExpensesList

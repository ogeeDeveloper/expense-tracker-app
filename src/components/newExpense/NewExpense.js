import { ExpenseForm } from './ExpenseForm'
import './NewExpense.css'

export const NewExpense = (props) => {
    const saveDataExpenseHandler = enteredDataExpense=>{
        const expenseData ={
            ...enteredDataExpense,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenses={saveDataExpenseHandler}/>
        </div>
    )
}

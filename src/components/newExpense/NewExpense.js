import { useState } from 'react'
import { ExpenseForm } from './ExpenseForm'
import './NewExpense.css'

export const NewExpense = (props) => {
    const [toggleForm, setToggleForm] = useState(false)

    const saveDataExpenseHandler = enteredDataExpense=>{
        const expenseData ={
            ...enteredDataExpense,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setToggleForm(false)
    }

    const toggleFormHandler = () => (setToggleForm(true))
    const cancelHandler = ()=> (setToggleForm(false))
    
    return (
        <div className="new-expense">
            {!toggleForm && <button type="button" onClick={toggleFormHandler}>Add New Expense</button>}
            {toggleForm && <ExpenseForm onSaveExpenses={saveDataExpenseHandler} cancelToggleForm={cancelHandler}/>}
        </div>
    )
}

import { useState } from 'react'
import './ExpenseForm.css'

export const ExpenseForm = (props) => {
    const [expenseTitle, setTitle] = useState('')
    const [expenseAmount, setAmount] = useState('')
    const [expenseDate, setDate] = useState('')

    // const [userInput, setUserInput]=useState({
    //     enteredTitle:'',
    //     enteredAmount: '',
    //     enterdDate: ''
    // })

    const titleChangeHandler = (event)=>{
        setTitle(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })

        // setUserInput((prevState)=>{
        //     return {...prevState, enteredTitle: event.target.value}
        // })
    }

    const amountChangeHandler = (event)=>{
        setAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // })
    }

    const getDateHandler = (event)=>{
        setDate(event.target.value)

        // setUserInput({
        //     ...userInput,
        //     enterdDate: event.target.value,
        // })
    }
    const clearInput=()=>{
        setTitle('')
        setDate('')
        setAmount('')
    }
    const sumbitHandler = event=>{
        event.preventDefault()

        const expenseData={
            title: expenseTitle,
            amount: expenseAmount,
            date: new Date(expenseDate)//parse thhe date into a date object
        }

        props.onSaveExpenses(expenseData)
        clearInput()
        
    }
    return <form onSubmit={sumbitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={expenseTitle} onChange={titleChangeHandler}/>
            </div>

            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={expenseAmount} onChange={amountChangeHandler}/>
            </div>

            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2021-08-24" step="2022-12-31" value={expenseDate} onChange={getDateHandler}/>
            </div>
        </div>

        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
}

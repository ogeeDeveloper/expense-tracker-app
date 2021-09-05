import {useState} from 'react'
import ExpenseItem from './ExpenseItem';
import { ExpenseFilter } from './ExpenseFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = ({items}) => {
  const [filteredYear, setFiteredYear]= useState(new Date().getFullYear ())

  const filterYearHandler = getSelectedYear=>{
    // filteredYear.filter(year=> year.filteredYear.includes(filteredYear))
    setFiteredYear(getSelectedYear)
  }

  const filterExpenses = items.filter(expense=>{
    // Return true or files based on the condition
    return expense.date.getFullYear().toString() === filteredYear.toString()
  })

  let renderExpenses = <p>No expenses found.</p>
  if(filterExpenses.length > 0){
    renderExpenses = filterExpenses.map(({title,amount,date,id})=>
          <ExpenseItem key={id} title={title} amount={amount} date={date}/>
          )
  }

  return (
    <div>
      <Card className="expenses">
      <ExpenseFilter defaultYear={filteredYear} onFilteryear={filterYearHandler}/>
      {renderExpenses}
      </Card>
    </div>
  );
}

export default Expenses;

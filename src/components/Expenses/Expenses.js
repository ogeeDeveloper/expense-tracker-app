import {useState} from 'react'
import ExpenseItem from './ExpenseItem';
import { ExpenseFilter } from './ExpenseFilter';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesList from './ExpensesList';

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

  return (
    <div>
      <Card className="expenses">
      <ExpenseFilter defaultYear={filteredYear} onFilteryear={filterYearHandler}/>
      <ExpensesList items={filterExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;

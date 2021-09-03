import {useState} from 'react';

import ExpenseItem from './ExpenseItem';
import { ExpenseFilter } from './ExpenseFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = ({items}) => {
  const [filteredYear, setFiteredYear]= useState(new Date().getFullYear ())
  const filterYearHandler = getSelectedYear=>{
    setFiteredYear(getSelectedYear)
    console.log('From expenses ')
  }
  return (
    <div>
      <Card className="expenses">
      <ExpenseFilter defaultYear={filteredYear} onFilteryear={filterYearHandler}/>
        {items.map(({title,amount,date})=>
          <ExpenseItem title={title} amount={amount} date={date}/>
          )}
      </Card>
    </div>
  );
}

export default Expenses;

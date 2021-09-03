import React, { useState } from 'react';
import DummyExpense from './constants/expenses';
import Expenses from './components/Expenses/Expenses';
import { NewExpense } from './components/newExpense/NewExpense';

const App = () => {
  const [expenses, setExpenses] = useState(DummyExpense)
  
  //Function to add a expense
  const addExpenseHandler = expense=>{
    setExpenses(new_expense=>{
      return [expense, ...new_expense]
    })
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

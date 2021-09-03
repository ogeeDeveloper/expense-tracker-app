import React from 'react';
import expenses from './constants/expenses';
import Expenses from './components/Expenses/Expenses';
import { NewExpense } from './components/newExpense/NewExpense';

const App = () => {
  //Function to add a expense
  const addExpenseHandler =expense=>{
    console.log('Added from the AppJs')
    console.log(expense)
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

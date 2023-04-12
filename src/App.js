import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/expenses/Expenses';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toliet Paper',
      amount: 94.12,
      date: new Date(2023, 2, 28),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 789.99,
      date: new Date(2023, 1, 12),
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 296.65,
      date: new Date(2023, 9, 1),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 545.91,
      date: new Date(2022, 12, 30),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense);
  };

  return (
    <div className='App'>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

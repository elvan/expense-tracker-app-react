import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Housing and Rent',
      amount: 1065.25,
      date: new Date(2020, 7, 14)
    },
    {
      id: 'e2',
      title: 'Car Insurance',
      amount: 819.5,
      date: new Date(2021, 2, 12)
    },
    {
      id: 'e3',
      title: 'Travel',
      amount: 294.67,
      date: new Date(2021, 2, 28)
    },
    {
      id: 'e4',
      title: 'Food and Groceries',
      amount: 610.75,
      date: new Date(2021, 5, 12)
    }
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        key={expenses[0].id}
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        key={expenses[1].id}
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        key={expenses[2].id}
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        key={expenses[3].id}
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;

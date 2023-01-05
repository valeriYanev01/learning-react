import ExpenseItem from "./Components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 239,
      date: new Date(2023, 0, 5),
    },
    {
      id: "e2",
      title: "New Desk",
      amount: 300,
      date: new Date(2021, 3, 5),
    },
    {
      id: "e3",
      title: "New Bed",
      amount: 405,
      date: new Date(2022, 5, 21),
    },
    {
      id: "e4",
      title: "Smartphone",
      amount: 1010,
      date: new Date(2021, 0, 4),
    },
  ];
  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;

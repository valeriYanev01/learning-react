import { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
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

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;

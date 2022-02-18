import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSE = [
  {
    id: "1",
    name: "tv",
    title: "New TV",
    amount: 499,
    date: new Date(2022, 1, 22),
  },
  {
    id: "2",
    name: "hotel",
    title: "Vaction",
    amount: 1299,
    date: new Date(2022, 2, 13),
  },
  {
    id: "3",
    name: "Clock",
    title: "Apple Watch",
    amount: 999,
    date: new Date(2021, 11, 12),
  },
  {
    id: "4",
    name: "Air",
    title: "AirPods",
    amount: 429,
    date: new Date(2021, 5, 18),
  },
  {
    id: "5",
    name: "shoes",
    title: "Shoes",
    amount: 250,
    date: new Date(2021, 7, 25),
  },
  {
    id: "6",
    name: "book",
    title: "Book",
    amount: 85,
    date: new Date(2020, 3, 10),
  },
  {
    id: "7",
    name: "food",
    title: "Pizza",
    amount: 39,
    date: new Date(2020, 4, 17),
  },
  {
    id: "8",
    name: "Necklace",
    title: "Necklace For My Mom",
    amount: 349,
    date: new Date(2020, 11, 17),
  },
  {
    id: "9",
    name: "Course",
    title: "course In Udemy",
    amount: 99,
    date: new Date(2020, 0, 13),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
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

import React from "react";
import { View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    descriptions: "A pair of shoes",
    amount: 1200.0,
    date: new Date("2023-12-22"),
  },
  {
    id: "e2",
    descriptions: "A pair of trousers",
    amount: 799.0,
    date: new Date("2024-1-09"),
  },
  {
    id: "e3",
    descriptions: "2L of milk",
    amount: 120.0,
    date: new Date("2023-11-02"),
  },
  {
    id: "e4",
    descriptions: "A book",
    amount: 520.0,
    date: new Date("2024-01-12"),
  },
];

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList />
    </View>
  );
};

export default ExpensesOutput;

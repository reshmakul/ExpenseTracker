import Tracker from "./Tracker";
import AddTransaction from "./AddTransaction";
import TransactionsContainer from "./TransactionsContainer";
import { useState } from "react";
const OverviewComponent = ({ budget }) => {
  const [transactionValue, setTransactionValue] = useState([]);
  const [expenseValue, setExpenseValue] = useState("");
  const [inputState, setInputState] = useState({ x: "", y: "" });
  let totalExpenses = 500;
  let balance = budget - totalExpenses;
  return (
    <div className="bg-primary">
      {budget}
      <Tracker
        budget={budget}
        balance={balance}
        totalExpenses={totalExpenses}
      />
      <TransactionsContainer
        transactionValue={transactionValue}
        expenseValue={expenseValue}
        inputState={inputState}
        setInputState={setInputState}
      />
      <AddTransaction
        inputState={inputState}
        setInputState={setInputState}
        transactionValue={transactionValue}
        setTransactionValue={setTransactionValue}
        expenseValue={expenseValue}
        setExpenseValue={setExpenseValue}
      />
    </div>
  );
};

export default OverviewComponent;

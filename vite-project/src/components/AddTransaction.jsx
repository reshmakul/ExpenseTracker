
import { useState } from "react";

export default function AddTransaction({ AddTransaction }) {
  const [transactionValue, setTransactionValue] = useState("");
  const [expenseValue, setExpenseValue] = useState("");
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(1);
    // AddTransaction(transactionValue, expenseValue);
    // addTodo(value);
    setExpenseValue("");
    setTransactionValue("");
  };
  const handleTransactionChange = (e) => {
    setTransactionValue(e.target.value);
  };
  const handleExpenseChange = (e) => {
    setExpenseValue(e.target.value);
  };
  return (
    // <div>AddTransaction</div>
    <div className="bg-bg-800 h-12 flex flex-row justify-content: space-evenly align-items: center space-x-4 space-y-4">
      <form className="bg-bg-800 " onSubmit={handleSubmit}>
        <input
          type="text"
          value={transactionValue}
          className="p-2 m-2"
          placeholder="New Transaction "
          onChange={handleTransactionChange}
        />
        <input
          type="text"
          value={expenseValue}
          className="p-2"
          placeholder="Expense Amount "
          onChange={handleExpenseChange}
        />
        <button type="submit" className="bg-secondary p-2 m-2 w-30 rounded">
          Add
        </button>
      </form>
    </div>
  );
}


import { useState } from "react";

export default function AddTransaction({
  transactionValue,
  setTransactionValue,
  expenseValue,
  setExpenseValue,
  inputState,
  setInputState,
}) {
  // const [transactionValue, setTransactionValue] = useState("");
  // const [expenseValue, setExpenseValue] = useState("");
  //

  const handleReset = () => {
    setInputState({ x: "", y: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(1);
    // AddTransaction(transactionValue, expenseValue);
    // setTransactionValue((pre) => [...pre, inputState]);
    setTransactionValue((prev) => [...prev, inputState]);
    handleReset();
    // setExpenseValue("");
    // setTransactionValue("");
  };
  const handleTransactionChange = (e) => {
    setInputState((pre) => ({ ...pre, x: e.target.value }));
  };
  const handleExpenseChange = (e) => {
    setInputState((pre) => ({ ...pre, y: e.target.value }));
  };
  return (
    // <div>AddTransaction</div>
    <div className="bg-bg-800 h-12 flex flex-row justify-content: space-evenly align-items: center space-x-4 space-y-4">
      <form className="bg-bg-800 ">
        <input
          type="text"
          value={inputState.x}
          className="p-2 m-2"
          placeholder="New Transaction "
          onChange={handleTransactionChange}
        />
        <input
          type="text"
          value={inputState.y}
          className="p-2"
          placeholder="Expense Amount "
          onChange={handleExpenseChange}
        />
        <button
          onClick={handleSubmit}
          type="submit"
          className="bg-secondary p-2 m-2 w-30 rounded"
        >
          Add
        </button>
      </form>
    </div>
  );
}

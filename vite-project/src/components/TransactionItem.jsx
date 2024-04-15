import React from "react";

const TransactionItem = ({
  transactionValue,
  expenseValue,
  inputState,
  setInputState,
}) => {
  // const itemClassName = `flex justify-between items-center border-2 border-gray-900 bg-800 rounded-lg p-4 ${
  //   inputState.x === "expense" ? "border-red-500" : "border-green-500"
  // } mb-4 cursor-pointer`;

  const removeButtonClassName =
    "bg-800 text-white border-2 py-2 px-4 rounded-md cursor-pointer";

  return (
    // <div className={itemClassName}>
    <div>
      <span>{inputState.x}</span>
      <span className="border-none bg-secondary">{inputState.y} &</span>
      <button
        className={removeButtonClassName}
        onClick={() => removeTransaction(transaction.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default TransactionItem;

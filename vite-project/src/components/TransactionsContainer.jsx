import React, { useEffect, useState } from "react";
import TransactionItem from "./TransactionItem";

const TransactionsContainer = ({ transactions, removeTransaction }) => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredTransactions, setFilteredTransactions] =
    useState(transactions);

  useEffect(() => {
    filterTransactions(searchInput);
  }, [transactions, searchInput]);

  const filterTransactions = (input) => {
    if (!input || !input.trim().length) {
      setFilteredTransactions(transactions);
      return;
    }

    const filtered = transactions.filter((item) =>
      item.details.toLowerCase().includes(input.toLowerCase().trim())
    );
    setFilteredTransactions(filtered);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-white">
        Recent Transactions
      </h2>

      <input
        type="text"
        className="w-full px-4 py-2 rounded border border-gray-900 bg-800 mb-6"
        placeholder="Search here"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      <div>
        {filteredTransactions.length ? (
          filteredTransactions.map((transaction) => (
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
              removeTransaction={removeTransaction}
            />
          ))
        ) : (
          <p className="text-white">No Transactions</p>
        )}
      </div>
    </div>
  );
};

export default TransactionsContainer;

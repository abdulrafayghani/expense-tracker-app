import React, { useContext } from "react";
import "./TransactionsList.css";
import { TransContext } from "../../context/TransContext";

export const TransactionsList = () => {
  const { transactions, deleteTransaction } = useContext(TransContext);
  // let sign = ''
    // const sign = transactions.amount < 0 ? '+' : '-';

  return (
    <div>
      <h3>History</h3>
      <hr />

      <ul className="list">
        {transactions.map((transObj, ind) => (
          <li className={transObj.amount < 0 ? 'minus' : 'plus'} key={ind}>
            <span>{transObj.desc}</span>
            <span>${(transObj.amount)}</span>
            <button className="delete-btn" onClick={()=>deleteTransaction(transObj.id)
                }>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

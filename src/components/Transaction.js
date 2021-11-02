import React from 'react';
import styles from '../styles/TransactionList.module.css';

const Transaction = ({transaction, deleteTransaction}) => {
    let sign = transaction.amount >= 0 ? "+" : "-";
    return (
        <li className={transaction.amount >= 0 ? styles.credit : styles.debit}>
            {transaction.text}
            <span>
                <span>{transaction.date}</span>
                {sign}${Math.abs(transaction.amount)}
            </span>
            <button
                className="delete-btn"
                onClick={() => deleteTransaction(transaction.id)}
            >
                X
            </button>
        </li>
    )
}

export default Transaction;

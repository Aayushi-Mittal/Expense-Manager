import React from 'react';
import { useToasts } from 'react-toast-notifications'
import styles from '../styles/TransactionList.module.css';

const Transaction = ({transaction, deleteTransaction}) => {
    let sign = transaction.amount >= 0 ? "+" : "-";
    const { addToast } = useToasts()

    function handleDelete() {
        deleteTransaction(transaction.id);
        addToast("Transaction Deleted successfully!", {
            appearance: 'error',
            autoDismiss: true,
        });
    }
    return (
        <div className={transaction.amount >= 0 ? styles.credit : styles.debit}>
            <div className={styles.transaction}>
                <div>
                    <div className={styles.transactionTitle}>{transaction.text}</div>
                    <div className={styles.transactionDate}>{transaction.date}</div>
                </div>
                <div>
                    <span className={styles.transactionAmount}>  ₹{sign}{Math.abs(transaction.amount)}</span>
                    <button
                         className={styles.deleteBtn}
                        onClick={handleDelete}
                    >
                        X
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Transaction;

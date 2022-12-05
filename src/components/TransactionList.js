import React from 'react';
import Transaction from './Transaction';
import styles from '../styles/TransactionList.module.css';

const TransactionList = ({ transactions, deleteTransaction }) => {
    
    
//   const filteredList = transactions.filter((item) => item.text.includes(query));

    // transactions = transactions.sort((a, b) => {
    //   return new Date(b.date) - new Date(a.date)
    // })
    
    return (
        <div className={styles.listContainer}>
            <h3 class={styles.transactionListTitle}>Transactions</h3>
            <div>
                {(transactions.length>0) ? (
                    transactions.map((transaction) => {
                    return (
                        <Transaction
                            key={transaction.id}
                            transaction={transaction}
                            deleteTransaction={(id) => deleteTransaction(id)}
                        />
                    );})
                    ) : (
                        <div className={styles.noTransactions}>
                            <p>No Transactions are present at the moment.</p>
                            <img src="https://imgur.com/dYuJLtj.png" width="250px" alt="no transactions" />
                        </div>
                    )
                }
                {/* {filteredList.length ? (
                    filteredList.map((transaction) => {
                    return (
                        <Transaction
                            key={transaction.id}
                            transaction={transaction}
                            deleteTransaction={(id) => deleteTransaction(id)}
                        />
                    );})
                ) : (
                    <div className={styles.noTransactions}>
                        <p>No Transactions are found at the moment.</p>
                        <img src="https://imgur.com/dYuJLtj.png" width="250px" alt="no transactions" />
                    </div>
                )} */}
            </div>
        </div>
    )
}

export default TransactionList

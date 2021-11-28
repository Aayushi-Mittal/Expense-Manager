import React from 'react';
import Transaction from './Transaction';
import styles from '../styles/TransactionList.module.css';

const TransactionList = ({ transactions, deleteTransaction }) => {
    
    // transactions = transactions.sort((a, b) => {
    //   return new Date(b.date) - new Date(a.date)
    // })
    
    return (
        <div className={styles.listContainer}>
            <h3 class={styles.transactionListTitle}>Transactions</h3>
            <input type="search" className={styles.searchBar} placeholder="Search Transaction..."/>
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
                            <img src="https://imgur.com/dYuJLtj.png" width="250px" />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default TransactionList

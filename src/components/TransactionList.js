import React from 'react';
// import Transaction from './Transaction';
// import styles from '../styles/TransactionList.module.css';

const TransactionList = ({ transactions, deleteTransaction }) => {
    
    // transactions = transactions.sort((a, b) => {
    //   return new Date(b.date) - new Date(a.date)
    // })
    
    return (
        <div>
            <h3>Transactions</h3>
            <input type="search" />
            <ul>
                {/* {transactions.map((transaction) => {
                return (
                    <Transaction
                        key={transaction.id}
                        transaction={transaction}
                        deleteTransaction={(id) => deleteTransaction(id)}
                    />
                );
                })} */}
            </ul>
        </div>
    )
}

export default TransactionList

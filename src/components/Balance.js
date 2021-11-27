import React from 'react';
import styles from '../styles/Home.module.css';

const Balance = ({transactions}) => {
    const amount = transactions.map((transaction) => Number(transaction.amount));
    const income = amount
      .filter((item) => item > 0)
      .reduce((acc, item) => acc + item, 0);
    const expenses = amount
      .filter((item) => item < 0)
      .reduce((acc, item) => acc + item, 0);
    const expenseWidth = (40 + (expenses/(expenses+income))*100) + "%";
    const incomeWidth = (40 + (income/(expenses+income))*100) + "%";
    document.querySelector(':root').style.setProperty('--expenseWidth', expenseWidth);
    document.querySelector(':root').style.setProperty('--incomeWidth', incomeWidth);

    const total = amount.reduce((acc, item) => acc + item, 0);
    return (
        <div  className={styles.summary}>
            <div className={styles.creditDebitCard}>
                <div className={styles.creditContainer}>
                    <div>Income</div>
                    <div className={styles.credit}>₹+{income}</div>
                </div>
                <div className={styles.debitContainer}>
                    <div>Expense</div>
                    <div className={styles.debit}>₹{expenses}</div>
                </div>
            </div>
            <div className={styles.balanceContainer}>
                <div>Your Balance</div>
                <div className={styles.balance}>₹{total}</div>
            </div>
        </div>
    );
}

export default Balance;

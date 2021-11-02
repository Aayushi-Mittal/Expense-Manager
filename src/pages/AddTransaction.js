import React from 'react'
import {useState} from 'react';
import styles from '../styles/AddTransaction.module.css'

const AddTransaction = ({id, addTransaction}) => {
    
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0)
    const [date, setDate] = useState("")
    const [type, setType] = useState("")

    const onSubmit = (event) => {
        event.preventDefault();
        const newTransaction = {
            id: id,
            text: text,
            amount: amount,
            date: date,
            type : type
        }
        addTransaction(newTransaction)
        setText("");
        setAmount(0);
        setDate("");
        setType("");
    }

    return (
        <div className={styles.formContainer}>
            <form className={styles.addTransaction}>
                <div className={styles.field}>
                    <h2>Add a Transaction</h2>
                </div>
                <div className={styles.field}>
                    <label>Transaction Detail:</label>
                    <br/>
                    <input value={text} onChange={(event) => setText(event.target.value)} placeholder="Enter Transaction detail" type="text"/>
                </div>
                <div className={styles.field}>
                    <label>Amount:</label>
                    <br/>
                    <input value={amount} onChange={(event) => setAmount(event.target.value)} placeholder="Enter Amount" type="number"/>
                </div>
                <div className={styles.field}>
                    <label>Date:</label>
                    <br/>
                    <input value={date} onChange={(event) => setDate(event.target.value)} placeholder="Enter Date of Transaction" type="date"/>
                </div>
                <div className={styles.field}>
                    <label>Debit/Credit:</label>
                    <br/>
                    <input value="Debit" onChange={(event) => setType(event.target.value)} type="radio" id="Debit" name="transaction"/>
                    <label className={styles.red}>Debit</label>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input value="Credit" onChange={(event) => setType(event.target.value)} type="radio" id="Credit" name="transaction"/>
                    <label className={styles.green}>Credit</label>
                </div>
                <button onSubmit={onSubmit} type="submit" className={styles.submitBtn}>Add Transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction

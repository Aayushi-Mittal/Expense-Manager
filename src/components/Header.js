import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Home.module.css';

const Header = () => {
    return (
        <div>
            <div className={styles.header}>
                <Link className={styles.link} to="/"><b>Expense Manager</b></Link>
                <Link className={styles.link} to="/">Home</Link>
                <Link className={styles.link} to="/add-transaction">Add Transaction</Link>
            </div>
        </div>
    )
}

export default Header;

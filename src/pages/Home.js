import React, { Component }  from 'react';
import { connect } from "react-redux";
import { deleteTransaction } from "../actions";
import Balance from '../components/Balance';
import TransactionList from '../components/TransactionList';
import styles from '../styles/Home.module.css';

export class Home extends Component {    
    render()
    {
        const { transactions, deleteTransaction } = this.props;
        return (
            <div className={styles.homeContainer}>
                <Balance transactions={transactions}/>
                <TransactionList transactions={transactions} deleteTransaction={(id) => deleteTransaction(id)}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    transactions: state.transactions,
});
  
const mapDispatchToProps = (dispatch) => ({
    deleteTransaction: (id) => dispatch(deleteTransaction(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

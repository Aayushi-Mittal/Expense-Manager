import React, {Component} from 'react'
import { connect } from "react-redux";
import { addTransaction } from "../actions";
import AddTransaction from "../components/AddTransaction"

export class AddTransactions extends Component {    
    render() {
        const { transactions, addTransaction } = this.props;
        return (
            <AddTransaction
            addTransaction={(transaction) => addTransaction(transaction)}
            id={transactions[0] ? transactions[0].id + 1 : 1}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    transactions: state.transactions,
});
  
const mapDispatchToProps = (dispatch) => ({
    addTransaction: (transaction) => dispatch(addTransaction(transaction))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTransactions);
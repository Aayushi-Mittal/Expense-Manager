import React from 'react';
import Balance from '../components/Balance';
import TransactionList from '../components/TransactionList';

const Home = () => {
    return (
        <div>
            Home
            <Balance/>
            <TransactionList/>
        </div>
    )
}

export default Home;

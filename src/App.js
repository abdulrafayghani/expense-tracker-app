import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Balance } from './components/Balance/Balance';
import { IncomeExpenses } from './components/IncomeExpenses/IncomeExpenses';
import { TransactionsList } from './components/TransactionList/TransactionsList';
import { AddTransaction } from './components/AddTransaction/AddTransaction';
import {  TransProvider } from './context/TransContext';

function App() {
  return (
      <TransProvider >
        <Header />  
        <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionsList/>
        <AddTransaction/>
        </div> 
      </TransProvider >
      
 );
}

export default App;


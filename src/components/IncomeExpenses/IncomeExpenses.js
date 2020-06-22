import React, {useContext} from 'react'
import './IncomeExpenses.css'
import { TransContext } from '../../context/TransContext'

export const IncomeExpenses = () => {
    let { transactions } = useContext(TransContext) 
  
    const amount = transactions.map(trans => trans.amount)
    
    const income = amount
    .filter(item => item > 0)
    .reduce((acc, item) => (acc +=item), 0)
    .toFixed(2)

    const expense = (amount
    .filter(item => item < 0)
    .reduce((acc, item) => (acc +=item), 0) * -1)
    .toFixed(2)

    return (
        <div className='inc-exp-container'>
            <div>
                <h4> INCOME </h4>
    <p className='money plus'> {income}</p>
                </div>
                <div>
                <h4> EXPENSE </h4>
    <p className='money minus'> {expense}</p>
                </div>
        </div>
    )}

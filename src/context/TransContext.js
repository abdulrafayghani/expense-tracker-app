import React, {createContext, useReducer} from 'react'
import {TransReducer} from './TransReducer'

const initalTransaction  = {
    transactions:[ ]
};

export const TransContext = createContext(initalTransaction)

export const TransProvider = ({ children }) =>{
    const [ state, dispatch ] = useReducer(TransReducer, initalTransaction)

    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        }) 
    }

    function addTransaction(trans){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload:trans
         })
    }
     return(
         <TransContext.Provider value={{
             transactions: state.transactions,
             addTransaction,
             deleteTransaction
         }}>
             {children}
         </TransContext.Provider>
     )
}   
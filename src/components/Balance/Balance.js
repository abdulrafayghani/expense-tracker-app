import React, {useContext} from 'react'
import { TransContext } from '../../context/TransContext'

export const Balance = () => {
    const { transactions } = useContext(TransContext)
    const amount = transactions.map(trans => trans.amount)
    const balance = amount.reduce((blnc, item) => blnc += item, 0)
    return (
        <div>
            <h4>Your Balance <br/> {balance.toFixed(2)} </h4>
        </div>
    )
}

import React, {useState, useContext} from 'react'
import './AddTransaction.css'
import { TransContext } from '../../context/TransContext'

export const AddTransaction = () => {
    let { addTransaction } = useContext(TransContext)

    let [newDesc, setDesc] = useState(" ")
    let [newAmount, setAmount] = useState(0)

    const handleEdition = (event) =>{
        event.preventDefault()
        addTransaction({
            id: Math.floor(Math.random() * 100000000),
            amount: Number(newAmount),
            desc: newDesc
        })

    }

    return (
        <div>
            <h3> Add Transactions</h3>
            <hr/>

            <form className='transaction-form' onSubmit={handleEdition}>
                <label>
                    Enter Discription
                    <br/>
                    <input type='text'onChange={(ev)=>{setDesc(ev.target.value)}} placeholder='Enter Description' required/>
                </label>
                <br/>
                <label>
                    Enter Amount
                    <br/>
                    <input type='number' onChange={(ev)=>{setAmount(ev.target.value)}} placeholder='Enter Amount' required/>
                </label>
                <br/>
                <input  className="btn" type='submit' value='Add Transaction'/>
            </form>
        </div>
    )
}

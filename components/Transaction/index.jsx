import { useState, useContext } from 'react'
import {nanoid} from 'nanoid'
import { GlobalContext } from '../../context/GlobalState'
import styles from './Transaction.module.css'

const index = () => {
  const [text, setText]= useState('')
  const [amount, setAmount]= useState(0)
  const { addTransaction } = useContext(GlobalContext);


  function handleSubmit(e){
    e.preventDefault()
    const newTransaction = {
      id: nanoid(),
      text,
      amount: +amount
    }
    addTransaction(newTransaction);
  }


  return (
    <section>
      <h3 className={styles.title}>Add new transaction</h3>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <label htmlFor="text">Text</label>
        <input type="text" id='text' placeholder='Enter product...' value={text} onChange={(e)=>setText(e.target.value)}/>
        <label htmlFor="amount">Amount</label>
        <input type="number" id='amount' placeholder='Enter amount...' value={amount} onChange={(e)=>setAmount(e.target.value)} />
        <button>Add transaction</button>
      </form>
    </section>
  )
}

export default index
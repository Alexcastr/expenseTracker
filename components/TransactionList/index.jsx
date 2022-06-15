import  { useContext } from 'react';
import { TransactionCard } from '../TransactionCard';
import styles from './TransactionList.module.css'


import { GlobalContext } from '../../context/GlobalState';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3 className={styles.underline}>History</h3>
      <ul className={styles.listParent}>
        {transactions.map(transaction => (<TransactionCard key={transaction.id} transaction={transaction} />))}
      </ul>
    </>
  )
}

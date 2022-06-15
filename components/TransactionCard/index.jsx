import  {useContext} from 'react';
import { GlobalContext } from '../../context/GlobalState';
import styles from './TransactionCard.module.css'

//Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    '$ ' +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}

export const TransactionCard = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
   <li className={styles.listChild}>
    {transaction.text}
    <div>
     <span>
      {sign}
      {moneyFormatter(transaction.amount)}
     </span>
     <button
      onClick={() => deleteTransaction(transaction.id)}
      className={sign === '-'? styles.deleteBtnMinus:styles.deleteBtn}
     >
      
     </button>
    </div>
   </li>
  );
}

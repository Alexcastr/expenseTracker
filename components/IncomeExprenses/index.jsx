import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import styles from './Income.module.css'

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

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  );

  return (
   <section className={styles.incomeContainer}>
    <div className={styles.border}>
     <h4>Income</h4>
     <p className={styles.incomeMoney}>{moneyFormatter(income)}</p>
    </div>
    <div>
     <h4>Expense</h4>
     <p className={styles.expenseMoney}>{moneyFormatter(expense)}</p>
    </div>
   </section>
  );
}
import Transaction from "../components/Transaction/index"
import { IncomeExpenses } from "../components/IncomeExprenses";
import { TransactionList } from "../components/TransactionList";
import { Balance } from "../components/Balance";

export default function Home() {
 return (
  <section>
   <Balance />
   <IncomeExpenses />
   <TransactionList />
   <Transaction />
  </section>
 );
}

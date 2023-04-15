import TransactionLine from '../TransactionLine/TransactionLine'
import css from './TransactionHistory.module.css';
import transactions from '../../database/transactions.json';

function TransactionHistory() {
    return <table className={css["transaction-history"]}>
        <thead className={css.thead}>
             <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
         </thead>
        <tbody>
            {transactions.map(i => (
                 <tr className={css.transaction} key={i.id} >
                 <TransactionLine
          type={i.type }
          amount={i.amount }
          currency={i.currency }                 
                     />    
        </tr>
             ))}
        </tbody>    
    </table>
};
export default TransactionHistory;
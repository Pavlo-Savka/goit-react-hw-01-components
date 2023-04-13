import TransactionLine from '../TransactionLine/TransactionLine'
import transactions from '../../database/transactions.json';
import css from './TransactionHistory.module.css';

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
                 <TransactionLine
          key={i.id}
          type={i.type }
          amount={i.amount }
          currency={i.currency }                 
                     />    
             ))}
        </tbody>    
    </table>
};
export default TransactionHistory;
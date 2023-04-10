import TransactionLine from './TransactionLine'
import transactions from '../database/transactions.json';

function TransactionHistory() {
   return  <table className="transaction-history">
        <thead>
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
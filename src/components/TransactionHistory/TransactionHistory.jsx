import PropTypes from 'prop-types'; 
import TransactionLine from '../TransactionLine/TransactionLine'
import css from './TransactionHistory.module.css';

function TransactionHistory(props) {
    const { items } = props;
    return <table className={css["transaction-history"]}>
        <thead className={css.thead}>
             <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
         </thead>
        <tbody>
            {items.map(({id, type, amount, currency}) => (
                 <tr className={css.transaction} key={id} >
                 <TransactionLine
          type={type }
          amount={amount }
          currency={currency }                 
                     />    
        </tr>
             ))}
        </tbody>    
    </table>
};
export default TransactionHistory;

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    })),
};

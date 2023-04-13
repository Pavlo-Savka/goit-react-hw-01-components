import PropTypes from 'prop-types';
import css from './TransactionLine.module.css';

function TransactionLine(props) {
    const { id, type, amount, currency } = props;
    return <tr className={css.transaction} key={id} >
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
    </tr>
};
TransactionLine.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
};
export default TransactionLine;
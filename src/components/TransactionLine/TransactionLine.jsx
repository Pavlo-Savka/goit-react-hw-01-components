import PropTypes from 'prop-types';

function TransactionLine(props) {
    const { type, amount, currency } = props;
    return <>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
    </>
};
TransactionLine.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
};
export default TransactionLine;
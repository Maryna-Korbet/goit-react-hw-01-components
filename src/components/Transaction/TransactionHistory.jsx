import PropTypes from 'prop-types';
import css from 'components/Transaction/TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transactionHistory}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(({ id, type, amount, currency }) => (
                        <tr key={id}>
                            <td>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </tr>
                )   
                )}
            </tbody>
            </table>
    );
}

export default TransactionHistory;

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string,
            type:PropTypes.string,
            amount: PropTypes.string,
            currency: PropTypes.string,
        })     
            ).isRequired,
}




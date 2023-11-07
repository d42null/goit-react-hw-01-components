import PropTypes from 'prop-types';
import { Cell, Head, HeadCell, Row, Table } from './TransactionHistory.styled';
export const TransactionHistory = ({ items }) => (
  <Table>
    <Head>
      <tr>
        <HeadCell>Type</HeadCell>
        <HeadCell>Amount</HeadCell>
        <HeadCell>Currency</HeadCell>
      </tr>
    </Head>
    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <Row key={id}>
          <Cell>{type}</Cell>
          <Cell>{amount}</Cell>
          <Cell>{currency}</Cell>
        </Row>
      ))}
    </tbody>
  </Table>
);
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ),
};

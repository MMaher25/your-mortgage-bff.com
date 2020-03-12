import Util from './Util'

var React = require('react')

export default class PaymentSchedule extends React.Component {
  render() {
    const mortgage = this.props.mortgage
    const { paymentSchedule } = mortgage
    const showPennies = false
    const paymentRows = paymentSchedule.map(function(payment) {
      const isYearlyPayment = payment.count % 12 === 0
      return (
        <tr key={payment.count}>
          <td>
            {!isYearlyPayment ? payment.count : 'Year ' + payment.count / 12}
          </td>
          <td>{Util.moneyValue(payment.principalPayment, showPennies)}</td>
          <td>{Util.moneyValue(payment.interestPayment, showPennies)}</td>
          <td>{Util.moneyValue(payment.totalInterest, showPennies)}</td>
          <td>{Util.moneyValue(payment.balance, showPennies)}</td>
        </tr>
      )
    })
    return (
      <table id="payment-table">
        <tr>
          <td>#</td>
          <td>Principal</td>
          <td>Interest</td>
          <td>Total Interest</td>
          <td>Balance</td>
        </tr>
        <tbody>{paymentRows}</tbody>
      </table>
    )
  }
}

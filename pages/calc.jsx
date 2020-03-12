import React from 'react'
import Layout from '../components/Layout'
import MortgageCalculator from '../components/Calc/MortgageCalculator'

const calc = () => {
  return (
    <Layout>
      <div id="calc" className="container">
        {process.browser && (
          <MortgageCalculator
            mortgageInsuranceEnabled={true}
            showPaymentSchedule
          />
        )}
      </div>
    </Layout>
  )
}

export default calc

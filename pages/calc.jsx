import React from 'react'
import dynamic from 'next/dynamic'
import Layout from '../components/Layout'

const MortgageCalculator = dynamic(
  () => import('../components/Calc/MortgageCalculator'),
  { ssr: false }
)

const calc = () => {
  return (
    <Layout>
      <div id="calc" className="container">
        <MortgageCalculator
          mortgageInsuranceEnabled={true}
          showPaymentSchedule
        />
      </div>
    </Layout>
  )
}

export default calc

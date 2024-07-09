import React from 'react'
import { useUser } from '@clerk/clerk-react'
import FinanceList from './finance-record-list';
import FinanceForm from './finance-record-form';
import { useFinancialRecords } from '../../contexts/finance-record-context';
const Dashboard = () => {
  const {user} =useUser();
  const {records}=useFinancialRecords();
  let total_amt=0;
   records.forEach((rec)=>{
      total_amt+=rec.amount;
   })
  return (
    <div>
      <h1>WELCOME {user?.firstName}! Here Are your Finance</h1>
      <FinanceForm/>
      <div>Total-Amount :$ {total_amt}</div>
      <FinanceList/>
    </div>
  )
}

export default Dashboard

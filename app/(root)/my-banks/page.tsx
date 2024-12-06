import BankCard from '@/components/ui/BankCard';
import Header from '@/components/ui/Header'
import { getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const page = async () => {
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({ 
    userId: loggedIn.$id 
  })
  return (
    <section className='flex'>
      <div className='my-banks'>
        <Header
          title="My Bank Accounts"
          subtext = "Effortlessly mangae your banking acounts"
        />
      <div className='space-y-4'>
        <h2 className='header-2'>
            Your cards
        </h2>
        <div className='flex flex-wrap gap-6'>
          {accounts && accounts.data.map((a : Account)=>(
            <BankCard 
              key={a.id}
              account={a}
              userName={loggedIn?.firstName}
            />
          ))}
        </div>
      </div>
      </div>
    </section>
  )
}

export default page
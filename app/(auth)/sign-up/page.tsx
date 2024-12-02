import AuthForm from '@/components/ui/AuthForm'
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const SignUp = async () => {
  const user = await getLoggedInUser();
 
  
  return (
    <section className='size-full  max-sm:px-6 flex-center'>
        
        <AuthForm type='signUp' />
       
     </section>
  )
}

export default SignUp
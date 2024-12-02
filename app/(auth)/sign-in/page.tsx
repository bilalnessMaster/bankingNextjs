import AuthForm from '@/components/ui/AuthForm'
import React from 'react'

const SignIn= () => {
  return (
    <section className='size-full  max-sm:px-6 flex-center'>
        
        <AuthForm type='signIn' />
       
     </section>
  )
}

export default SignIn
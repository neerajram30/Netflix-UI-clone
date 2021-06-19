import React from 'react'
import FrontFormtext from '../../assets/FrontForm/FrontFormtext'
import FormWrapper from '../../assets/FrontForm/FormWrapper'
import FrontEmail from '../../assets/FrontForm/FrontEmail'
import FormButton from '../../assets/FrontForm/FormButton'
function FrontForm() {
    return (
        <>
        <FrontFormtext>
        Ready to watch? Enter your email to create or restart your membership.
        </FrontFormtext>
        <FormWrapper>
        <FrontEmail placeholder="Email Address"/>
            <FormButton>
                Get Started
            </FormButton>
        </FormWrapper>
        
          
       </>  )
}

export default FrontForm

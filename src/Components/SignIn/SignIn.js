import React from 'react'
import HeaderWrapper from '../../assets/FrontHeader/HeaderWrapper'
import Logo from '../../assets/FrontHeader/Logo'
import FrontNav from '../../assets/FrontHeader/FrontNav'
import FormWrapper from '../../assets/FrontForm/FormWrapper'
import FormBase from '../../assets/UserForm/FormBase'
import FormTitle from '../../assets/UserForm/FormTitle'
import FormError from '../../assets/UserForm/FormError'
import FormInput from '../../assets/UserForm/FormInput'
import FormButton from '../../assets/UserForm/FormButton'
import FormText from '../../assets/UserForm/FormText'
import FormLink from '../../assets/UserForm/FormLink'
import FormCaptcha from '../../assets/UserForm/FormCaptche'
import Footer from '../Footer/Footer'
function SignIn() {
    return (
        <>
        <HeaderWrapper className="header-wrapper-home">
            <FrontNav className="navbar-signin">
            <Logo/>
            </FrontNav>
        <FormWrapper className="sign-form-wrapper">
            <FormBase>
                <FormTitle>Sign In</FormTitle>
                {/* <FormError></FormError> */}
                <FormInput type="text"
                placeholder="Email"
                value="">
                </FormInput>
                <FormInput
                type="password"
                placeholder="password"
                value=""
                ></FormInput>
                <FormButton>Sign In</FormButton>
                <FormText>New to Netflix?
                <FormLink href="/signup">Sign Up Now</FormLink>
                </FormText>
                <FormCaptcha> This page is protected by Google reCAPTCHA to ensure you are not a
              bot.</FormCaptcha>
            </FormBase>
        </FormWrapper>    
        </HeaderWrapper>
        <Footer/>            
        </>
    )
}

export default SignIn

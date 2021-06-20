import React from 'react'
import HeaderWrapper from '../../assets/FrontHeader/HeaderWrapper'
import FrontNav from '../../assets/FrontHeader/FrontNav'
import Logo from '../../assets/FrontHeader/Logo'
import FormWrapper from '../../assets/FrontForm/FormWrapper'
import FormBase from '../../assets/UserForm/FormBase'
import FormTitle from '../../assets/UserForm/FormTitle'
import FormButton from '../../assets/UserForm/FormButton'
import FormText from '../../assets/UserForm/FormText'
import FormLink from '../../assets/UserForm/FormLink'
import FormCaptcha from '../../assets/UserForm/FormCaptche'
import FormInput from '../../assets/UserForm/FormInput'
import Footer from '../Footer/Footer'
function Signup() {
    return (
        <>
          <HeaderWrapper className="header-wrapper-home">
            <FrontNav className="navbar-signin">
            <Logo/>
            </FrontNav>
        <FormWrapper className="sign-form-wrapper">
            <FormBase>
                <FormTitle>Sign Up</FormTitle>
                {/* <FormError></FormError> */}
                <FormInput
                type="text"
                value=""
                placeholder="User name"
                ></FormInput>
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
                <FormText>Alredy a user?
                <FormLink href="/signin">Sign In Now</FormLink>
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

export default Signup

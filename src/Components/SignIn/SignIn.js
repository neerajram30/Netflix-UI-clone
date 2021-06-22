import React,{useState,useContext} from 'react'
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
import {FirebaseContext} from '../../Context/Context'
import {useHistory} from 'react-router-dom'
function SignIn() {
    const [email,setEmail] =useState('');
    const [password,setPassword] =useState('');
    const [error,setError] =useState('');
    const {firebase} =  useContext(FirebaseContext);
    const history =useHistory()
    const isInvalid =password === "" || email === ""

    const handleSubmit =(event)=>{
        event.preventDefault();
        firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
            history.push('/home')
        }).catch((error)=>{
            setError(error.message);

        })

    }

    return (
        <>
        <HeaderWrapper className="header-wrapper-home">
            <FrontNav className="navbar-signin">
            <Logo/>
            </FrontNav>
        <FormWrapper className="sign-form-wrapper">
            <FormBase onSubmit={handleSubmit}>
                <FormTitle>Sign In</FormTitle>
                {error?<FormError>{error}</FormError>:null }
                <FormInput type="text"
                placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                name="email"
                >
                </FormInput>
                <FormInput
                type="password"
                placeholder="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                name="password"
                ></FormInput>
                <FormButton  disabled={isInvalid}>Sign In</FormButton>
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

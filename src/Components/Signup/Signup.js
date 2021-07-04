import React,{useState,useContext} from 'react'
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
import FormError from '../../assets/UserForm/FormError'
import {FirebaseContext} from '../../Context/Context'
import {useHistory} from 'react-router-dom'


function Signup() {
    
    const [userName,setUserName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] =useState('')
    const history = useHistory()
    const isInvalid =password === "" || email === "" || userName ==="";
    const {firebase} = useContext(FirebaseContext);


    const  handleSubmit=(event)=>{
      event.preventDefault();
      firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
          result.user.updateProfile({displayName:userName}).then(()=>{
            history.push('/signin')
            firebase.firestore().collection('users').add({
              id:result.user.uid,
              userName:userName,
              email:email,
            }).then(()=>{
              history.push('/signin');
            })
          })
        }).catch((error)=>setError(error.message));  
      }
    
    return (
        <>
          <HeaderWrapper className="header-wrapper-home">
            <FrontNav className="navbar-signin">
            <Logo/>
            </FrontNav>
        <FormWrapper className="sign-form-wrapper">
            <FormBase  onSubmit={handleSubmit}>
                <FormTitle>Sign Up</FormTitle>
                {error ? <FormError>{error}</FormError>: null}
                <FormInput
                type="text"
                value={userName}
                placeholder="User name"
                onChange={(e)=>setUserName(e.target.value)}
                name="userName"
                ></FormInput>
                <FormInput type="text"
                placeholder="Email"
                value={email}
                name="email"
                onChange={(e)=>setEmail(e.target.value)}
                >
                  
                </FormInput>
                <FormInput
                type="password"
                placeholder="password"
                value={password}
                name="password"
                onChange={(e)=>setPassword(e.target.value)}
                ></FormInput>
                <FormButton disabled={isInvalid}> Sign Up</FormButton>
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
    );
    }

export default Signup

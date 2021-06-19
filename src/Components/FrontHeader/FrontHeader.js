import React from 'react'
import HeaderWrapper from '../../assets/FrontHeader/HeaderWrapper'
import NavBar from '../../assets/FrontHeader/FrontNav'
import Logo from '../../assets/FrontHeader/Logo'
import SigninButton from '../../assets/FrontHeader/BtnSignin'
import FeatureWrapper from '../../assets/FrontHeader/FeatureWrapper'
import FeatureTitle from '../../assets/FrontHeader/FeatureTitle'
import Warning from '../../assets/FrontHeader/Warning'
import FrontForm from '../FrontForm/FrontForm'
function FrontHeader({children}) {
    return (
        <HeaderWrapper className="header-wrapper-home">
        <NavBar className="navbar-home">
          <Logo />
          <SigninButton>Sign In</SigninButton>
        </NavBar>
        <FeatureWrapper className="feature-wrapper-home">
          <FeatureTitle className="feature-title-home">
            Unlimited movies, TV shows and more.
          </FeatureTitle>
          <Warning>
            This is NOT official Netflix
          </Warning>
          <FrontForm/>
        </FeatureWrapper>
        
        {children}
      </HeaderWrapper>
    )
}

export default FrontHeader

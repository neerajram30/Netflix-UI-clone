import React from 'react'
import FooterWrapper from '../../assets/Footer/FooterWrapper'
import FooterTitle from '../../assets/Footer/FooterTitle'
import FooterRow from '../../assets/Footer/FooterRaw'
import FooterColumn from '../../assets/Footer/FooterColumn'
import FooterLink from '../../assets/Footer/FooterLink'
function Footer() {
    return (
        <FooterWrapper>
            <FooterTitle>Questions? Contact us.</FooterTitle>
            <FooterRow>
                <FooterColumn>
                    <FooterLink>FAQ</FooterLink>
                    <FooterLink>Investor Relations</FooterLink>
                    <FooterLink>Privacy</FooterLink>
                    <FooterLink>Speed Test</FooterLink>
                </FooterColumn>
                <FooterColumn>
                    <FooterLink>Help Center</FooterLink>
                    <FooterLink>Jobs</FooterLink>
                    <FooterLink>Cookie Preferences</FooterLink>
                    <FooterLink>Legal Notices</FooterLink>
                </FooterColumn>
                <FooterColumn>
                    <FooterLink>Account</FooterLink>
                    <FooterLink>Ways to Watch</FooterLink>
                    <FooterLink>Corporate Information</FooterLink>
                    <FooterLink>Netflix Originals</FooterLink>
                </FooterColumn>
                <FooterColumn>
                    <FooterLink>Media Center</FooterLink>
                    <FooterLink>Terms of Use</FooterLink>
                    <FooterLink>Contact Us</FooterLink>
                </FooterColumn>
            </FooterRow>
        </FooterWrapper>
    );
}

export default Footer

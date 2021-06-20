import React from 'react'

import FrontHeader from '../Components/FrontHeader/FrontHeader';
import Seperator from '../Components/Seperator/Seperator';
import FrontForm from '../Components/FrontForm/FrontForm';

import FrontPageDetails from '../Components/FrontPage/FrontPageDetails';
import Faqs from '../Components/Faqs/Faqs';
import Footer from '../Components/Footer/Footer';
function Page() {
    return(
    <div>
        <FrontHeader/>
        <Seperator/>
        <FrontPageDetails/>
        <Faqs/>
        <FrontForm/>
        <Seperator/>
        <Footer/>

    </div>
    ) 

}
export default Page;
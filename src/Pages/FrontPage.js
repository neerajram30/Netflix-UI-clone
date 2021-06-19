import React from 'react'

import FrontHeader from '../Components/FrontHeader/FrontHeader';
import Seperator from '../Components/Seperator/Seperator';

import FrontPageDetails from '../Components/FrontPage/FrontPageDetails';
function Page() {
    return(
    <div>
        <FrontHeader/>
        <Seperator/>
        <FrontPageDetails/>
        <Seperator/>
        <FrontPageDetails/>


    
    </div>
    ) 

}
export default Page;
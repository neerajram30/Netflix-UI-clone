import React from 'react'
import FaqData from '../../Data/Faqs.json'
import FaqWrapper from '../../assets/Faqs/FaqWrapper'
import FaqTitle from '../../assets/Faqs/FaqTitle';
import FaqItem from '../../assets/Faqs/FaqItem';
import FaqHeader from '../../assets/Faqs/FaqHeader';
import FaqBody from '../../assets/Faqs/FaqBody';
function Faqs() {
    return (
        <FaqWrapper>
            <FaqTitle>Frequently Asked Questions</FaqTitle>
            {FaqData.map((item)=>(
                <FaqItem key={item.id}>
                    <FaqHeader>{item.header}</FaqHeader>
                    <FaqBody>{item.body}</FaqBody>
                </FaqItem>

            ))}
        </FaqWrapper>
        
    );
}

export default Faqs

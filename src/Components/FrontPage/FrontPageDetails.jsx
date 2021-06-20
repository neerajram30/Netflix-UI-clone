import React from 'react'

import Wrapper from '../../assets/FrontScreen/wrapper'
import Item from '../../assets/FrontScreen/items'
import TextWrapper from '../../assets/FrontScreen/textwrapper'
import Title from '../../assets/FrontScreen/title'
import SubTitle from '../../assets/FrontScreen/subtitle'
import ImageWrapper from '../../assets/FrontScreen/image-wrapper'

import FrontData from '../../Data/FrontData.json'
import Seperator from '../Seperator/Seperator'

function FrontPageDetails() {
    return(
        <Wrapper>
            {FrontData.map((item)=>(
            <>
        <Item key={item.id}>
            <TextWrapper>
                <Title>{item.title}</Title>
                <SubTitle>{item.subTitle}</SubTitle>
            </TextWrapper>
        <ImageWrapper>
            <img src={item.image} alt={item.alt} />
        </ImageWrapper>
        </Item>
        <Seperator/>
        </>
            ))}
        </Wrapper>
        )

}
export default FrontPageDetails;
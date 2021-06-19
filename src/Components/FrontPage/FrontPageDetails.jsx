import React from 'react'

import Wrapper from '../../assets/FrontScreen/wrapper'
import Item from '../../assets/FrontScreen/items'
import TextWrapper from '../../assets/FrontScreen/textwrapper'
import Title from '../../assets/FrontScreen/title'
import SubTitle from '../../assets/FrontScreen/subtitle'
import ImageWrapper from '../../assets/FrontScreen/image-wrapper'
import tvImg from '../../assets/images/home-tv.jpg'


function FrontPageDetails() {
    return(
        <Wrapper>
        <Item>
            <TextWrapper>
                <Title>Enjoy on your TV.</Title>
                <SubTitle>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</SubTitle>
            </TextWrapper>
        <ImageWrapper>
            <img src={tvImg} alt="tv" />
        </ImageWrapper>
        </Item>
        </Wrapper>
        )

}
export default FrontPageDetails;
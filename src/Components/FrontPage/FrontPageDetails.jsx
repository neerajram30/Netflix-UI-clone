import React from 'react'

import Wrapper from '../../assets/FrontScreen/wrapper'
import Item from '../../assets/FrontScreen/items'
import TextWrapper from '../../assets/FrontScreen/textwrapper'
import Title from '../../assets/FrontScreen/title'
import SubTitle from '../../assets/FrontScreen/subtitle'
import ImageWrapper from '../../assets/FrontScreen/image-wrapper'
import Image from '../../assets/FrontScreen/image'


import Seperator from '../Seperator/Seperator'
import tvimg from '../../Data/home-tv.jpg'
import mobimg from '../../Data/home-mobile.jpg' 
import imac from '../../Data/home-imac.jpg'

function FrontPageDetails() {
    return(
        <Wrapper>
            
        <Item >
            <TextWrapper>
                <Title>Enjoy on your TV.</Title>
                <SubTitle>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</SubTitle>
            </TextWrapper>
        <ImageWrapper>
            <Image src={tvimg} alt="Tiger King on Netflix"></Image>
        </ImageWrapper>
        </Item>
        <Seperator/>
        <Item >
            <TextWrapper>
                <Title>Download your programmes to watch on the go.</Title>
                <SubTitle>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, BluSave your data and watch all your favourites offline.-ray players and more.</SubTitle>
            </TextWrapper>
        <ImageWrapper>
            <Image src={mobimg} alt="Tiger King on Netflix" ></Image>
        </ImageWrapper>
        </Item>
        <Seperator/>
        <Item >
            <TextWrapper>
                <Title>Watch everywhere.</Title>
                <SubTitle>Stream unlimited films and TV programmes on your phone, tablet, laptop and TV without paying more.</SubTitle>
            </TextWrapper>
        <ImageWrapper>
            <Image src={imac} alt="Tiger King on Netflix" ></Image>
        </ImageWrapper>
        </Item>
        <Seperator/>
        
        </Wrapper>
        )

}
export default FrontPageDetails;
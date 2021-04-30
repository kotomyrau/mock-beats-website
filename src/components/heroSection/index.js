import React from 'react';
import { HeroContainer, HeroImgWrapper, HeroImg, HeroTextWrapper, HeroSubHeader, HeroHeader, ColorHeader, FindColor, ColorOptions, ColorOption1, ColorOption2, ColorOption3, HeroDetails, ProductPrice, ProductButton, HeroOffer} from './HeroSectionElements';
import "../../components/buttons/buttons.css"

const HeroSection = ({id, leftImg, img, alt, header, headerSup, subHeader, colorHeader, findColor, colorOptions, productPrice, productOffer}) => {
  return (
    <HeroContainer id={id} leftImg={leftImg}>
      <HeroImgWrapper leftImg={leftImg}>
        <HeroImg leftImg={leftImg} src={img} alt={alt}/>
      </HeroImgWrapper>
      <HeroTextWrapper leftImg={leftImg}>
        <HeroSubHeader>{subHeader}</HeroSubHeader>
        <HeroHeader leftImg={leftImg}>{header}<sup>{headerSup}</sup></HeroHeader>
          <ColorHeader>{colorHeader}</ColorHeader>
          <FindColor>{findColor}</FindColor>
          <ColorOptions colorOptions={colorOptions}>
            <ColorOption1/>
            <ColorOption2/>
            <ColorOption3/>
          </ColorOptions>
        <HeroDetails>
        <ProductPrice>${productPrice}</ProductPrice>
        <ProductButton>
          <button id={id} to='#'>buy now</button>
        </ProductButton>
        </HeroDetails>
      <HeroOffer leftImg={leftImg}> {productOffer}</HeroOffer>
    </HeroTextWrapper>
  </HeroContainer>
  ) 
}

export default HeroSection

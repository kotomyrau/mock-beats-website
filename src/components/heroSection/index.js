import React from 'react';
import { HeroContainer, HeroGrid, HeroImgWrapper, HeroImg, HeroTextWrapper, HeroSubHeader, HeroHeader, HeroColors, ColorHeader, FindColor, ColorOptions, ColorOption1, ColorOption2, ColorOption3, HeroDetails, ProductPrice, ProductButton, HeroOffer} from './HeroSectionElements';
import headphones from '../../images/studio3wireless.png';
import "../../components/buttons/buttons.css"
const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroGrid>
      {/* COLUMN 1 */}
      <HeroImgWrapper>
        <HeroImg src={headphones} alt="black beats headphones"/>
      </HeroImgWrapper>
      {/* COLUMN 2 */}
      <HeroTextWrapper>
        <HeroSubHeader>Beats Studio3 Wireless</HeroSubHeader>
        <HeroHeader>Experience your <br/>music like never before.</HeroHeader>
        <HeroColors> 
          <ColorHeader></ColorHeader>
          <FindColor></FindColor>
          <ColorOptions>
            <ColorOption1/>
            <ColorOption2/>
            <ColorOption3/>
          </ColorOptions>
        </HeroColors>
        <HeroDetails>
        <ProductPrice>$299.95</ProductPrice>
        <ProductButton className="buy-btn">buy now</ProductButton>
        </HeroDetails>
      <HeroOffer>$60 Apple Music gift card with purchase of select Beats products.*</HeroOffer>
      </HeroTextWrapper>
      </HeroGrid>
    </HeroContainer>
  )
}

export default HeroSection

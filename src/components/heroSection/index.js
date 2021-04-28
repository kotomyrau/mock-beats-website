import React from 'react';
import { HeroContainer, HeroGrid, HeroImgWrapper, HeroImg, HeroTextWrapper, HeroSubHeader, HeroHeader, HeroDetails, ProductPrice, ProductButton, HeroOffer} from './HeroSectionElements';
import headphones from '../../images/studio3wireless.png';

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

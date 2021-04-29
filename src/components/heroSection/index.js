import React from 'react';
import { HeroContainer, HeroGrid, HeroImgWrapper, HeroImg, HeroTextWrapper, HeroSubHeader, HeroHeader, HeroColors, ColorHeader, FindColor, ColorOptions, ColorOption1, ColorOption2, ColorOption3, HeroDetails, ProductPrice, ProductButton, HeroOffer} from './HeroSectionElements';
import headphones from '../../images/studio3wireless.png';
import "../../components/buttons/buttons.css"
const HeroSection = ({id, leftImg, darkBg, img, lightText, width, header, subHeader, colorHeader, findColor, colorOptions, productPrice, productOffer}) => {
//   return (
//     <HeroContainer id={id} darkBg={darkBg} lightText={lightText}>
//       <HeroGrid>
//       {/* COLUMN 1 */}
//       <HeroImgWrapper leftImg={leftImg}>
//         <HeroImg leftImg={leftImg} src={img} alt="black beats headphones" width={width} />
//       </HeroImgWrapper>
//       {/* COLUMN 2 */}
//       <HeroTextWrapper lightText={lightText} leftImg={leftImg}>
//         <HeroSubHeader>{subHeader}</HeroSubHeader>
//         <HeroHeader darkBg={darkBg}>{header}</HeroHeader>
//         <HeroColors> 
//           <ColorHeader>{colorHeader}</ColorHeader>
//           <FindColor>{findColor}</FindColor>
//           <ColorOptions colorOptions={colorOptions}>
//             <ColorOption1/>
//             <ColorOption2/>
//             <ColorOption3/>
//           </ColorOptions>
//         </HeroColors>
//         <HeroDetails>
//         <ProductPrice>${productPrice}</ProductPrice>
//         <ProductButton className="buy-btn">buy now</ProductButton>
//         </HeroDetails>
//       <HeroOffer darkBg={darkBg}> {productOffer}</HeroOffer>
//       </HeroTextWrapper>
//       </HeroGrid>
//     </HeroContainer>
//   )
// }

//////////////////////////////////////////
return (
  <HeroContainer id={id} darkBg={darkBg} lightText={lightText} leftImg={leftImg}>
    <HeroImgWrapper leftImg={leftImg}>
      <HeroImg leftImg={leftImg} src={img} alt="black beats headphones" width={width} />
    </HeroImgWrapper>

    <HeroTextWrapper lightText={lightText} leftImg={leftImg}>
      <HeroSubHeader>{subHeader}</HeroSubHeader>
      <HeroHeader darkBg={darkBg}>{header}</HeroHeader>
      <HeroColors> 
        <ColorHeader>{colorHeader}</ColorHeader>
        <FindColor>{findColor}</FindColor>
        <ColorOptions colorOptions={colorOptions}>
          <ColorOption1/>
          <ColorOption2/>
          <ColorOption3/>
        </ColorOptions>
      </HeroColors>
      <HeroDetails>
      <ProductPrice>${productPrice}</ProductPrice>
      <ProductButton className="buy-btn">buy now</ProductButton>
      </HeroDetails>
    <HeroOffer darkBg={darkBg}> {productOffer}</HeroOffer>
  </HeroTextWrapper>
  </HeroContainer>
)
}

export default HeroSection

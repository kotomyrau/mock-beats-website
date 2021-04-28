import React from 'react'
import { FooterContainer, FooterGrid, FooterLogo, FooterImg, SiteMapProducts, SiteMapSupport, SiteMapCompany, FooterSocials } from './FooterElements'
import logo from "../../images/logo.png";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterGrid>
        <FooterLogo>
          <FooterImg src={logo} alt="beats logo"/>        
        </FooterLogo>
        <SiteMapProducts>
          products
        </SiteMapProducts>
        <SiteMapSupport>
          support
        </SiteMapSupport>
        <SiteMapCompany>
          company
        </SiteMapCompany>
        <FooterSocials>
          links
        </FooterSocials>
      </FooterGrid>
    </FooterContainer>
  )
}

export default Footer

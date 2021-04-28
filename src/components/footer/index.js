import React from 'react'
import { FooterContainer, FooterGrid, FooterLogo, FooterImg, SiteMapProducts, SiteMapSupport, SiteMapCompany, FooterSocials, FooterHeader, FooterLink, SocialMediaLink} from './FooterElements'
import logo from "../../images/logo.png";
import { FaInstagram, FaFacebookF, FaTwitter, FaWhatsapp} from 'react-icons/fa';
const Footer = () => {
  return (
    <FooterContainer>
      <FooterGrid>
        <FooterLogo>
          <FooterImg src={logo} alt="beats logo"/>        
        </FooterLogo>
        <SiteMapProducts>
          <FooterHeader>Products</FooterHeader>
            <FooterLink  href="#">headphones</FooterLink>
            <FooterLink  href="#">earphones</FooterLink>
            <FooterLink  href="#">speakers</FooterLink>
            <FooterLink  href="#">accessories</FooterLink>
            <FooterLink  href="#">collaborations</FooterLink>
            <FooterLink  href="#">beatsaudio</FooterLink>
            <FooterLink  href="#">special offers</FooterLink>
        </SiteMapProducts>
        <SiteMapSupport>
        <FooterHeader>Support</FooterHeader>
        <FooterLink  href="#">headphones</FooterLink>
            <FooterLink  href="#">product help</FooterLink>
            <FooterLink  href="#">service & warranty</FooterLink>
            <FooterLink  href="#">register your beats</FooterLink>
            <FooterLink  href="#">update your beats</FooterLink>
            <FooterLink  href="#">authorized service providers</FooterLink>
            <FooterLink  href="#">contact support</FooterLink>
            <FooterLink  href="#">international numbers</FooterLink>

        </SiteMapSupport>
        <SiteMapCompany>
        <FooterHeader>Company</FooterHeader>
        <FooterLink  href="#">product help</FooterLink>
            <FooterLink  href="#">news and events</FooterLink>
            <FooterLink  href="#">promotion terms</FooterLink>
            <FooterLink  href="#">privacy policy</FooterLink>
            <FooterLink  href="#">trademark</FooterLink>
            <FooterLink  href="#">terms of use</FooterLink>
            <FooterLink  href="#">cookies</FooterLink>
        </SiteMapCompany>
        <FooterSocials>
        <FooterHeader>Follow Us</FooterHeader>
        <SocialMediaLink><a href="#" target='blank'/><FaInstagram /></SocialMediaLink>
        <SocialMediaLink>< a href="#" target='blank'/><FaFacebookF /></SocialMediaLink>
        <SocialMediaLink><a href="#" target='blank'/><FaTwitter /></SocialMediaLink>
        <SocialMediaLink ><a href="#" target='blank'/><FaWhatsapp /></SocialMediaLink>

        </FooterSocials>
      </FooterGrid>
    </FooterContainer>
  )
}

export default Footer

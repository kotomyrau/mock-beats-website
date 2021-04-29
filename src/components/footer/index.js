import React, {Component}  from 'react'
import { FooterContainer, FooterGrid, FooterLogo, FooterImg, SiteMapProducts, FooterTab, SiteMapSupport, SiteMapCompany, FooterSocials, FooterHeader, FooterLink, SocialMediaLink} from './FooterElements'
import logo from "../../images/logo.png";
import { FaInstagram, FaFacebookF, FaTwitter, FaWhatsapp} from 'react-icons/fa';

class Footer extends Component {
  // initial state
  state = {
    tab1on: true,
    tab2on: true,
    tab3on: true,
  }

  //  set opposite state of "on" to "on"

  // Products Tab
  toggle1 = () => {
    this.setState({
      tab1on: !this.state.tab1on
    })
  }
  // Support Tab
  toggle2 = () => {
    this.setState({
      tab2on: !this.state.tab2on
    })
  }
  // Company Tab
  toggle3= () => {
    this.setState({
      tab3on: !this.state.tab3on
    })
  }
  render() {
    return (
      <FooterContainer>
        <FooterGrid>
          <FooterLogo>
            <FooterImg src={logo} alt="beats logo"/>        
          </FooterLogo>
          <SiteMapProducts>
            <FooterTab onClick={this.toggle1}>
              <FooterHeader>Products</FooterHeader>
                {this.state.tab1on && (
                <FooterLink> 
                  <a href="#">headphones</a>
                  <a href="#">earphones</a>
                  <a href="#">speakers</a>
                  <a href="#">accessories</a>
                  <a href="#">collaborations</a>
                  <a href="#">beatsaudio</a>
                  <a href="#">special offers</a>
                </FooterLink>
              )}
            </FooterTab>
          </SiteMapProducts>
          <SiteMapSupport>
            <FooterTab onClick={this.toggle2}>
              <FooterHeader>Support</FooterHeader>
              {this.state.tab2on && (
                <FooterLink> 
                  <a href="#">product help</a>
                  <a href="#">service & warranty</a>
                  <a href="#">register your beats</a>
                  <a href="#">update your beats</a>
                  <a href="#">authorized service providers</a>
                  <a href="#">contact support</a>
                  <a href="#">international numbers</a>
                </FooterLink>
              )}
            </FooterTab>
          </SiteMapSupport>
          <SiteMapCompany>
            <FooterTab onClick={this.toggle3}>
              <FooterHeader>Company</FooterHeader>
              {this.state.tab3on && (
                <FooterLink> 
                  <a href="#">product help</a>
                  <a href="#">news and events</a>
                  <a href="#">promotion terms</a>
                  <a href="#">privacy policy</a>
                  <a href="#">trademark</a>
                  <a href="#">terms of use</a>
                  <a href="#">cookies</a>
                </FooterLink>
              )}
              </FooterTab>
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
}

export default Footer

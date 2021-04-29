import React, {useState} from 'react';
import Footer from '../components/footer'
import HeroSection from '../components/heroSection';
import { heroPage1, heroPage2 } from '../components/heroSection/Data';
import NavBar from '../components/navBar';
import Newsletter from '../components/newsletterSection';
import ProductPage from '../components/productPage/ProductPage';
import SideNavbar from '../components/SideNav';


const Home = () => {

  const[isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  };

    return (
        <>
            <NavBar toggle={toggle}/>
            <SideNavbar isOpen={isOpen} toggle={toggle}/>
            <HeroSection {...heroPage1}/>
            <HeroSection {...heroPage2}/>
            <ProductPage/>
            <Newsletter/>
            <Footer/>
        </>
    )
}

export default Home

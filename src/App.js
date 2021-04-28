import './App.css';
import HeroSection from './components/heroSection';
import { heroPage1, heroPage2 } from './components/heroSection/Data';
import NavBar from './components/navBar';
import Newsletter from './components/newsletterSection';
import ProductPage from './components/productPage/ProductPage';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HeroSection {...heroPage1}/>
      <HeroSection {...heroPage2}/>
      <ProductPage/>
      <Newsletter/>
    </div>
  );
}

export default App;

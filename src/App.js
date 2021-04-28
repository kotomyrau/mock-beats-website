import './App.css';
import HeroSection from './components/heroSection';
import NavBar from './components/navBar';
import ProductPage from './components/productPage/ProductPage';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HeroSection/>
      <ProductPage/>
    </div>
  );
}

export default App;

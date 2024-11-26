import logo from './logo.svg';
import './App.css';
import "./style.css";
import ProductCard from './components/product_card/product_card';
import ProductCardLine from './components/product_card/product_card_line/product_card_line';

function App() {
  const prods = [
    {
      imgSrc: logo,
      imgAlt: "alternate name",
      name: "antique",
      cost: Math.ceil(Math.random() * 99)
    },
    {
      imgSrc: logo,
      imgAlt: "alternate name",
      name: "antique",
      cost: Math.ceil(Math.random() * 99)
    },
    {
      imgSrc: logo,
      imgAlt: "alternate name",
      name: "antique",
      cost: Math.ceil(Math.random() * 99)
    },
    {
      imgSrc: logo,
      imgAlt: "alternate name",
      name: "antique",
      cost: Math.ceil(Math.random() * 99)
    },
    {
      imgSrc: logo,
      imgAlt: "alternate name",
      name: "antique",
      cost: Math.ceil(Math.random() * 99)
    },

  ]
  return (
    <div className="App">
      <h1>Hello, World!</h1>
      {/* <ProductCard imgSrc={logo} imgAlt={"Old Drawer"} name={"Antique Drawer"} cost={"$14.56"} /> */}
      <ProductCardLine products={prods} />
    </div>
  );
}

export default App;

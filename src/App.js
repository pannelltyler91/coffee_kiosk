import { Routes, Route } from "react-router-dom";
import './App.css';
import Menu from './components/Menu';
import Home from "./components/Home";
import SpanishHome from "./components/SpanishHome";
import KoreanHome from './components/Korean/KoreanHome'
import IcedCoffee from "./components/menu_components/IcedCoffee";
import HotCoffee from "./components/menu_components/HotCoffe";
import Pay from "./components/Pay";
import ThankYou from "./components/ThankYou";
import Rewards from './components/Rewards';
import Preview from "./components/Preview";


function App() {
  return (
    <div >
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/korean" element={<KoreanHome/>} />
        <Route path="/spanish" element={<SpanishHome/>} />
        <Route path="/icedcoffeeenglish" element={<IcedCoffee/>} />
        <Route path="/hotcoffeeenglish" element={<HotCoffee/>} />
        <Route path="/pay" element={<Pay/>} />
        <Route path="/thankyou" element={<ThankYou/>} />
        <Route path="/rewards" element={<Rewards/>} />
        <Route path="/preview" element={<Preview/>} />
      </Routes>
    </div>
  );
}

export default App;

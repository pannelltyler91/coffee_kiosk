import { Routes, Route } from "react-router-dom";
import './App.css';
import Menu from './components/Menu';
import Home from "./components/Home";
import KoreanHome from "./components/KoreanHome";
import SpanishHome from "./components/SpanishHome";
import IcedCoffee from "./components/menu_components/IcedCoffee";
import HotCoffee from "./components/menu_components/HotCoffe";


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
      </Routes>
    </div>
  );
}

export default App;

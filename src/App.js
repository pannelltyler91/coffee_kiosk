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
import KoreanCheckout from "./components/korean_menu_components/KoreanCheckout";
import KoreanHotCoffee from "./components/korean_menu_components/KoreanHotCoffe";
import KoreanHotOptions from "./components/korean_menu_components/KoreanHotOptionsOffCanvas";
import KoreanIcedCoffee from "./components/korean_menu_components/KoreanIcedCoffee";
import KoreanMenuNav from "./components/korean_menu_components/KoreanMenuNav";
import KoreanOptions from "./components/korean_menu_components/KoreanOptionsOffCanvas";
import SpanishCheckout from '../src/components/spanish_menu_components/korean_menu_components/SpanishCheckout'
import SpanishHotCoffee from '../src/components/spanish_menu_components/korean_menu_components/SpanishHotCoffe'
import SpanishIcedCoffee from '../src/components/spanish_menu_components/korean_menu_components/SpanishIcedCoffee'
import SpanishHotOptions from '../src/components/spanish_menu_components/korean_menu_components/SpanishHotOptionsOffCanvas'
import SpanishMenuNav from '../src/components/spanish_menu_components/korean_menu_components/SpanishMenuNav'
import SpanishOptions from '../src/components/spanish_menu_components/korean_menu_components/SpanishOptionsOffCanvas'


function App() {
  return (
    <div >
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/icedcoffeeenglish" element={<IcedCoffee/>} />
        <Route path="/hotcoffeeenglish" element={<HotCoffee/>} />
        <Route path="/pay" element={<Pay/>} />
        <Route path="/thankyou" element={<ThankYou/>} />
        <Route path="/rewards" element={<Rewards/>} />
        <Route path="/preview" element={<Preview/>} />
        <Route path="/korean" element={<KoreanHome/>} />
        <Route path="/kcheck" element={<KoreanCheckout/>} />
        <Route path="/khotcoffee" element={<KoreanHotCoffee/>} />
        <Route path="/khotoption" element={<KoreanHotOptions/>} />
        <Route path="/kicecoffee" element={<KoreanIcedCoffee/>} />
        <Route path="/kmenunav" element={<KoreanMenuNav/>} />
        <Route path="/kiceoptions" element={<KoreanOptions/>} />
        <Route path="/spanish" element={<SpanishHome/>} />
        <Route path="/scheck" element={<SpanishCheckout/>} />
        <Route path="/shotcoffee" element={<SpanishHotCoffee/>} />
        <Route path="/shotoption" element={<SpanishHotOptions/>} />
        <Route path="/sicecoffee" element={<SpanishIcedCoffee/>} />
        <Route path="/smenunav" element={<SpanishMenuNav/>} />
        <Route path="/siceoptions" element={<SpanishOptions/>} />
      
      </Routes>
    </div>
  );
}

export default App;

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
import KoreanPreview from "./components/Korean/KoreanPreview";
import KoreanPay from "./components/Korean/KoreanPay";
import KoreanThankYou from "./components//Korean/KoreanThankYou";
import KoreanMenu from "./components/korean_menu_components/KoreanMenu";
import KoreanOptions from "./components/korean_menu_components/KoreanOptionsOffCanvas";
import KoreanRewards from '../src/components/Korean/KoreanRewards'
import SpanishCheckout from '../src/components/spanish_menu_components/korean_menu_components/SpanishCheckout'
import SpanishHotCoffee from '../src/components/spanish_menu_components/korean_menu_components/SpanishHotCoffe'
import SpanishIcedCoffee from '../src/components/spanish_menu_components/korean_menu_components/SpanishIcedCoffee'
import SpanishHotOptions from '../src/components/spanish_menu_components/korean_menu_components/SpanishHotOptionsOffCanvas'
import SpanishMenuNav from '../src/components/spanish_menu_components/korean_menu_components/SpanishMenuNav'
import SpanishMenu from '../src/components/spanish_menu_components/korean_menu_components/SpanishMenu'
import SpanishOptions from '../src/components/spanish_menu_components/korean_menu_components/SpanishOptionsOffCanvas'
import SpanishPreview from '../src/components/spanish_menu_components/SpanishPreview'
import SpanishRewards from '../src/components/spanish_menu_components/SpanishRewards'
import SpanishPay from "./components/spanish_menu_components/SpanishPay";
import SpanishThankYou from "./components/spanish_menu_components/SpanishThankYou";



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
        <Route path="/kthanks" element={<KoreanThankYou/>} />
        <Route path="/kpay" element={<KoreanPay/>} />
        <Route path="/kpreview" element={<KoreanPreview/>} />
        <Route path="/kcheck" element={<KoreanCheckout/>} />
        <Route path="/khotcoffee" element={<KoreanHotCoffee/>} />
        <Route path="/khotoption" element={<KoreanHotOptions/>} />
        <Route path="/kicecoffee" element={<KoreanIcedCoffee/>} />
        <Route path="/kmenu" element={<KoreanMenu/>} />
        <Route path="/kmenunav" element={<KoreanMenuNav/>} />
        <Route path="/kiceoptions" element={<KoreanOptions/>} />
        <Route path="/krewards" element={<KoreanRewards/>} />
        <Route path="/spanish" element={<SpanishHome/>} />
        <Route path="/scheck" element={<SpanishCheckout/>} />
        <Route path="/shotcoffee" element={<SpanishHotCoffee/>} />
        <Route path="/shotoption" element={<SpanishHotOptions/>} />
        <Route path="/sicecoffee" element={<SpanishIcedCoffee/>} />
        <Route path="/smenunav" element={<SpanishMenuNav/>} />
        <Route path="/smenu" element={<SpanishMenu/>} />
        <Route path="/siceoptions" element={<SpanishOptions/>} />
        <Route path="/spreview" element={<SpanishPreview/>} />
        <Route path="/srewards" element={<SpanishRewards/>} />
        <Route path="/spay" element={<SpanishPay/>} />
        <Route path="/sthanks" element={<SpanishThankYou/>} />
      
      </Routes>
    </div>
  );
}

export default App;

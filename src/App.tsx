import {useEffect,useState} from 'react';
import {Routes,Route,useLocation} from 'react-router-dom';
import {Header,Footer,Modal,Summary,Button,Intro} from './components/Layout';
import Home from './pages/Home';
import {MenuPage,Checkout,Completion} from './pages/Order';
import {Events,EventWizard} from './pages/Events';
import Reservations from './pages/Reservations';
import {Story,Gallery,Visit} from './pages/Explore';
import {useCart} from './store/cart';
export default function App(){const [cartOpen,setCartOpen]=useState(false);const location=useLocation();const count=Object.keys(useCart(s=>s.cart)).length;useEffect(()=>{window.scrollTo({top:0,behavior:'instant'});setCartOpen(false);document.title=`${location.pathname==='/'?'A Keswick Tradition':location.pathname.split('/')[1].replace('-',' ')} — Riveredge Concept`},[location.pathname]);return <><a className="skip-link" href="#main">Skip to content</a><Header openCart={()=>setCartOpen(true)}/><div id="main"><Routes><Route path="/" element={<Home/>}/><Route path="/menu" element={<MenuPage/>}/><Route path="/order" element={<MenuPage/>}/><Route path="/order/checkout" element={<Checkout/>}/><Route path="/order/confirmation" element={<Completion/>}/><Route path="/events" element={<Events/>}/><Route path="/events/inquire" element={<EventWizard/>}/><Route path="/events/confirmation" element={<Completion event/>}/><Route path="/reservations" element={<Reservations/>}/><Route path="/our-story" element={<Story/>}/><Route path="/gallery" element={<Gallery/>}/><Route path="/visit" element={<Visit/>}/><Route path="*" element={<main className="section"><Intro eyebrow="LET’S FIND YOUR WAY" title="This page isn’t on the menu."/><Button to="/">Back home</Button></main>}/></Routes></div><Footer/>{cartOpen&&<Modal close={()=>setCartOpen(false)} label="Your demo pickup bag"><span className="eyebrow">PICKUP CONCEPT</span><h2>Your demo bag.</h2><Summary/>{count>0&&<Button to="/order/checkout">Review & continue</Button>}</Modal>}</>}

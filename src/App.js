import React, { Suspense, lazy } from 'react';
import './App.css';


const Navbar = lazy(() => import('./Pages/Navbar'));
const Banner = lazy(() => import('./Pages/Banner'));
const Toplist = lazy(() => import('./Pages/toplist'));
const Toppicks = lazy(() => import('./Pages/Toppicks'));
const Vipshow = lazy(() => import('./Pages/Vipshow'));
const Footer = lazy(() => import('./Pages/Footer'));

const App = () => {
  return (
    <>
     
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Banner />
        <Toppicks />
        <Toplist />
        <Vipshow />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;

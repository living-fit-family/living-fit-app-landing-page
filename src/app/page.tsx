'use client'

import React from 'react';
import Header from '../components/Header';
import MainHero from '../components/MainHero';
import Product from '../components/Product';
import Features from '../components/Features';
import Pricing from '../components/Pricing'
import WorkProcess from '../components/WorkProcess';
import Screens from '../components/Screens';
import CTA from '../components/CTA';

export default function App() {
  return (
    <div>
      <Header />
      <MainHero />
      <Features />
      <Product />
      <WorkProcess />
      <Pricing />
      {/* <Screens /> */}
      {/* <CTA /> */}
      <a
      href="javascript:void(0)"
      className="back-to-top fixed bottom-8 right-8 left-auto z-[999] hidden h-10 w-10 items-center justify-center rounded-md bg-primary text-white shadow-md duration-300 ease-in-out hover:bg-opacity-80"
    >
      <span
        className="mt-[6px] h-3 w-3 rotate-45 border-t border-l border-white"
      ></span>
    </a>
    </div>
  );
}

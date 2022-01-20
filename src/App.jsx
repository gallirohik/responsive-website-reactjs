import React from "react";
import {
  Footer,
  Blog,
  Possibility,
  Header,
  WhatGPT3,
  Features,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";
import "./app.css";
const App = () => {
  return (
    <div className="app">
      <div className="gradient__bg">
        <Navbar />
        {/* <Header />
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer /> */}
      </div>
    </div>
  );
};

export default App;

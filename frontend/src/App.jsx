import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation/Navigation";
import Navigation2 from "./components/navigation/Navigation2";
import Home from "./components/home/Home"
import ImageGenerator from "./components/ImageGenerator"
import History from "./components/History"
import { About } from "./components/deprecated/about";


import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import "./App.css";


const App = () => {

  return (
    <Router>
      <Navigation2 />
      <Routes>
        <Route exact path="/" element = {<Home/>}/>
        <Route exact path="/monet/history" element = {<History/>}/>
        <Route exact path="/monet/generator" element = {<ImageGenerator/>}/>
        {/* <Route exact path="/vanGogh/history" element = {<Home/>}/>
        <Route exact path="/vanGogh/generator" element = {<Home/>}/> */}
      </Routes>
    </Router>
  );
};

export default App;

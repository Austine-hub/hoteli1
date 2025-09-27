import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Coffee from "./pages/Coffee";
import Hero from "./components/Hero";
import Lunch from "./components/Lunch";
import Gallery from "./pages/Gallery";

const App: React.FC = () => {
  return (
<>
<Header/>
<Hero/>
<Gallery/>
<Coffee/>
<Lunch/>
<Footer/>
</>
  );
};

export default App;






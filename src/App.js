import { useState } from "react";
import "./App.css";
// import Dashboard from "./components/Dashboard";
import Dashboard from "./componenets/Dashboard";
import StockContext from "./context/StockContext";
import ThemeContext from "./context/ThemeContext";
import Footer from "./Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [stockSymbol, setStockSymbol] = useState("MSFT");

  return ( 
    <> 
      <header>
  <div className="logo">
    <img src="https://yt3.googleusercontent.com/ytc/AGIKgqOA8zGlDHILVMP87SUZbFaXkbbbBbtTW7nO63NffA=s900-c-k-c0x00ffffff-no-rj" alt="Logo"/>
  </div>
  <h1 className="name">MarketControl</h1>
</header>
   
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
        <Dashboard />
      </StockContext.Provider>
    </ThemeContext.Provider>

    <footer>
      <Footer/></footer>
    </>
  );
}

export default App;
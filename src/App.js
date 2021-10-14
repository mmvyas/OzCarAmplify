import React from "react";
import { Footer } from "./pages";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./routes/Routes";
import GlobalStyle from "./globalStyles";
import Header from "./layout/Header";

function App() {
  return (
    <Router basename="/">
      <GlobalStyle />
      <Header />
      <Routes />
      {/* <Footer /> */}
    </Router>
  );
}

export default App;

import React from "react";
import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import ContextProvider from "./context/ContextProvider";
import DetailView from "./components/ItemDetails/DetailView";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 54 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<DetailView />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;

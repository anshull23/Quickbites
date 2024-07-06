import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Order from "./pages/Order/Order";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import Verify from "./pages/Verify/Verify";
import MyOrders from "./pages/MyOrders/MyOrders";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar setShowLogin={setShowLogin} showMenu={true} /> <Home />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <Navbar setShowLogin={setShowLogin} showMenu={false} />
                <div className="app">
                  <Cart />
                </div>
              </>
            }
          />
          <Route
            path="/order"
            element={
              <>
                <Navbar setShowLogin={setShowLogin} showMenu={false} />
              <div className="app">
                
                <Order />
              </div>
              </>
            }
          />
          <Route
            path="/verify"
            element={
              <>
                <Navbar setShowLogin={setShowLogin} showMenu={false} />
              <div className="app">
                
                <Verify />
              </div>
              </>
            }
          />
          <Route
            path="/myorders"
            element={
              <>
                <Navbar setShowLogin={setShowLogin} showMenu={false} />
              <div className="app">
                
                <MyOrders />
              </div>
              </>
            }
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;

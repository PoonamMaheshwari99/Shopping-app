import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import Products from "./components/Products";
import Cart from "./components/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/Dashboard";
import NoMatch from "./components/NoMatch";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/product" element={<Products />}></Route>
        <Route path="/cart" element={<Cart />}></Route>

        <Route path="/dashboard" element={<Dashboard />}></Route>

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;

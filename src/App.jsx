import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/Header/MainLayout";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Products/index.jsx";
import ProductD from "./components/ProductD/index.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home></Home>
            </MainLayout>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <MainLayout>
              <About></About>
            </MainLayout>
          }
        ></Route>
        <Route
          path="/products"
          element={
            <MainLayout>
              <Product></Product>
            </MainLayout>
          }
        ></Route>
        <Route
          path="/products/:id"
          element={
            <MainLayout>
              <ProductD></ProductD>
            </MainLayout>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;

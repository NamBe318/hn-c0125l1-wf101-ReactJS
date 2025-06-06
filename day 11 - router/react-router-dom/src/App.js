import logo from "./logo.svg";
import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Product from "./component/Product";
import Contact from "./component/Contact";
import MainLayout from "./component/MainLayout";
import Exercise2 from "./component/bai2/Exercise2";

function App() {
  return (
    // <div>
    //   <h1>Điều hướng router trong React JS cơ bản</h1>

    //   <nav>
    //     <NavLink to="/home">Home</NavLink> |{" "}
    //     <NavLink to="/main">Main</NavLink>
    //   </nav>
    //   <Routes>
    //     {/* <Route index path="/" element={<Home />}></Route> */}
    //     <Route path="/main" element={<MainLayout />}>
    //       <Route path="/main/product" element={<Product />}></Route>
    //       <Route path="/main/contact" element={<Contact />}></Route>
    //     </Route>
    //     <Route path="/home" element={<Home />}></Route>
    //   </Routes>
    // </div>

    <div>
      <Exercise2/>
    </div>
  );
}

export default App;

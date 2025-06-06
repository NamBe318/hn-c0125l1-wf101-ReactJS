import { NavLink, Route, Routes } from "react-router-dom";
import NotFound404 from "./404NotFound";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";
import Ex2MainLayout from "./Ex2MainLayout";
import ContactList from "./ContactList";

function Exercise2() {
  const products = [
    { id: 101, name: "laptop" },
    { id: 102, name: "phone" },
    { id: 103, name: "tablet" },
  ];

  const contacts = [
    { id: "0388123456", name: "Contact 1" },
    { id: "0377123456", name: "Contact 2" },
    { id: "0366123456", name: "Contact 3" },
  ];

  return (
    <Routes>
      <Route path="/" element={<Ex2MainLayout />}>
        <Route
          path="/product"
          element={<ProductList products={products} />}
        ></Route>
        <Route
          path="/product/:id"
          element={<ProductDetail products={products} />}
        ></Route>
        <Route
          path="/contact"
          element={<ContactList contacts={contacts} />}
        ></Route>
      </Route>
      <Route path="*" element={<NotFound404 />}></Route>
    </Routes>
  );
}

export default Exercise2;

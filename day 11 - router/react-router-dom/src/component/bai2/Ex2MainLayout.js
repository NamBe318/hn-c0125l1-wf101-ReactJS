import { NavLink, Outlet } from "react-router-dom";

function Ex2MainLayout() {
  return (
    <div>
      <h1>Dynamic Route</h1>
      <nav>
        <NavLink to="/product">Product List</NavLink> |{" "}
        <NavLink to="/contact">Contact List</NavLink>
      </nav>
      <Outlet />
      <NavLink to="/404">404</NavLink>
    </div>
  );
}

export default Ex2MainLayout;

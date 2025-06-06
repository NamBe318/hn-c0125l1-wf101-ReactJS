import { NavLink } from "react-router-dom";

function NotFound404() {
  return (
    <div>
      <h1>404 - Không tìm thấy trang của bạn</h1>
      <p>đường link truy cập không tồn tại</p>
      <nav>
        <NavLink to="/product">Trở về trang chủ</NavLink>
      </nav>
    </div>
  );
}

export default NotFound404;

import React, { useState } from "react";
import SearchBar from "./../../../../exsercise_state/src/component/bai1/SearchBar";

const AppB1 = () => {
  const [SearchName, setSearchName] = useState("");
  const users = ["Nam", "Hoàng", "Việt", "Doanh", "Huyền Anh", "Được"];

  const filteredUsers = users.filter((user) => user.includes(SearchName));

  return (
    <>
      <h1>Tìm kiếm người dùng</h1>
      <SearchBar onSearch={(name) => setSearchName(name)} />
      <ul>
        {filteredUsers.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </>
  );
};

export default AppB1;

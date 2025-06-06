import { useState } from "react";
import InputBox from "./InputBox";
import SearchBar from "./SearchBar";

function User() {
  const users = [
    "Truong Hoang Nam",
    "Nguyen Phuoc Dinh Tien",
    "Tran Dinh Hai",
    "Bui Quang Huy",
    "Tran Duc Luong",
  ];

  const [keyword, setKeyword] = useState("");

  const handleSearch = (value) => {
    setKeyword(value);
  };

  const filterUserSearch = keyword
  ? users.filter(user => user.toLowerCase().includes(keyword.toLowerCase()))
  : users;
  return (
    <div>
      <SearchBar users={filterUserSearch}></SearchBar>
      <InputBox handleSearch={handleSearch}></InputBox>
    </div>
  );
}

export default User;

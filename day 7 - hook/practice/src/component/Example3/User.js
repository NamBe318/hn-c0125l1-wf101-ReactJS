import React, { useEffect, useState } from "react";

function User() {
  const users = [
    { id: 1, name: "Tuan Anh" },
    { id: 2, name: "Phuong Linh" },
    { id: 3, name: "Minh Anh" },
  ];

  const [selectedUser, setSelectedUser] = useState(null);

  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    const time = setTimeout(() => {
      setIsOnline(Math.random() > 0.5);
    }, 1000);
  });

  return (
    <div>
      <div className="list-user">
        <h1>Danh sach users</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id} onClick={() => setSelectedUser(user)}>
              {user.name}
            </li>
          ))}
        </ul>
      </div>
      {selectedUser && (
        <div>
          <h2>Trang thai cua {selectedUser.name}</h2>
          <p>{isOnline ? "Dang Online" : "Dang Offline"}</p>
        </div>
      )}
    </div>
  );
}

export default User;

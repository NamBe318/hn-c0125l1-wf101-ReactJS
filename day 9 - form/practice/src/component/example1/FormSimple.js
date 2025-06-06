import { useState } from "react";

function FormSimple() {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleOnChange = (e) => {
    const {name, value} = e.target;

    setFormData((prev) => ({
        ...prev, [name]: value
    }));
  };

  const handleOnSubmitForm = (e) => {
    e.preventDefault();
    console.log("Login information", formData)
  };

  return (
    <div>
      <h1>Form Simple</h1>

      <form onSubmit={handleOnSubmitForm}>
        <div>
          <label>Username: </label>
          <input 
           type="text" 
           name="username" 
           placeholder="Type username..."
           value={formData.username}
           onChange={(e) => handleOnChange(e)}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            placeholder="Type pasword..."
            value={formData.password}
            onChange={(e) => handleOnChange(e)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default FormSimple;

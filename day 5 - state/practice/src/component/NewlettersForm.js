import React, { useState } from "react";
import EmailInput from './EmailInput';

function NewlettersForm() {
  let [email, setEmail] = useState("");

  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
  };

  const handleSubmitForm = () => {
    alert(`Email đã đăng ký là: ${email}`);
  };

  return (
    <div>
      <h3>Đăng ký nhận tin</h3>
      <EmailInput onChangeEmail={handleEmailChange} email={email}/>
      <button onClick={handleSubmitForm}>Gửi</button>
    </div>
  );
}

export default NewlettersForm;

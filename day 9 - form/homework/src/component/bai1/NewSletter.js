import { useState } from "react";
function NewSletter() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    frequency: "",
    interest: [],
  });

  const interestList = ["Tin công nghệ", "Ưu đãi", "Tin tức"];
  const frequencyList = ["Hằng ngày", "Hằng tuần", "Hằng tháng"];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "interest") {
      const updated = checked
        ? [...formData.interest, value]
        : formData.interest.filter((item) => item !== value);

      setFormData((prev) => ({ ...prev, interest: updated }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Cảm ơn " +
        formData.name +
        " đã đăng ký nhận tin!\n" +
        "Tần suất: " +
        formData.frequency +
        "\n" +
        "Chủ đề quan tâm: " +
        formData.interest
    );
  };

  return (
    <div>
      <h1>Form đăng ký nhận tin</h1>
      <form onSubmit={handleSubmit}>
        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br></br>
        <label>Họ Tên: </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br></br>
        <label>Tần suất: </label>
        <select
          name="frequency"
          value={formData.frequency}
          onChange={handleChange}
        >
          {frequencyList.map((frequencies) => (
            <option key={frequencies} value={frequencies}>
              {frequencies}
            </option>
          ))}
        </select>
        <br></br>
        <label>Chủ đề quan tâm: </label>
        {interestList.map((item) => (
          <div>
            <label key={item}>
              <input
                type="checkbox"
                name="interest"
                value={item}
                checked={formData.interest.includes(item)}
                onChange={handleChange}
              />
              {item}
            </label>
          </div>
        ))}
        <br></br>
        <button type="submit">Đăng ký</button>
      </form>
    </div>
  );
}

export default NewSletter;

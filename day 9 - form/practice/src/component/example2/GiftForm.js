import { useState } from "react";
const GiftForm = () => {
  const [formData, setFormData] = useState({
    childName: "",
    age: "",
    parentName: "",
    address: "",
    giftType: "",
    gender: "",
    agree: false,
  });

  const handleOnChangeData = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const [errors, setErrors] = useState({});

  const submitForm = (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      alert("Đăng ký thành công! Phần quà sẽ được gửi đến em bé!");
      console.log(formData);
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.childName.trim())
      newErrors.childName = "Vui lòng nhập tên của em bé";
    if (!formData.age || isNaN(formData.age) || formData.age < 0)
      newErrors.age = "Tuổi không hợp lệ";
    if (!formData.parentName.trim())
      newErrors.parentName = "Vui lòng nhập tên của phụ huynh";
    if (!formData.address.trim()) newErrors.address = "Vui lòng nhập địa chỉ";
    if (!formData.giftType) newErrors.giftType = "Vui lòng chọn loại quà";
    if (!formData.agree) newErrors.agree = "Vui lòng đồng ý nhận quà";

    return newErrors;
  };

  return (
    <div>
      <h1>Đăng ký nhận quà</h1>
      <form onSubmit={submitForm}>
        <div>
          <label>Tên của con </label>
          <input
            name="childName"
            type="text"
            placeholder="Nhập tên của em bé"
            value={formData.childName}
            onChange={(e) => handleOnChangeData(e)}
          />
          {errors.childName && (
            <p style={{ color: "red" }}>{errors.childName}</p>
          )}
        </div>
        <br></br>
        <div>
          <label>
            <input
              name="gender"
              type="radio"
              value="Nam"
              checked={formData.gender === "Nam"}
              onChange={(e) => handleOnChangeData(e)}
            />
            Nam
          </label>
          <label>
            <input
              name="gender"
              type="radio"
              value="Nữ"
              checked={formData.gender === "Nữ"}
              onChange={(e) => handleOnChangeData(e)}
            />
            Nữ
          </label>
        </div>
        <br></br>
        <div>
          <label>Tuổi </label>
          <input
            name="age"
            type="number"
            placeholder="Nhập tuổi của em bé"
            value={formData.age}
            onChange={(e) => handleOnChangeData(e)}
          />
          {errors.age && <p style={{ color: "red" }}>{errors.age}</p>}
        </div>
        <br></br>
        <div>
          <label>Tên của phụ huynh </label>
          <input
            name="parentName"
            type="text"
            placeholder="Nhập tên của phụ huynh"
            value={formData.parentName}
            onChange={(e) => handleOnChangeData(e)}
          />
          {errors.parentName && (
            <p style={{ color: "red" }}>{errors.parentName}</p>
          )}
        </div>
        <br></br>
        <div>
          <label>Địa chỉ </label>
          <input
            name="address"
            type="text"
            placeholder="Nhập tên của em bé"
            value={formData.address}
            onChange={(e) => handleOnChangeData(e)}
          />
          {errors.address && <p style={{ color: "red" }}>{errors.address}</p>}
        </div>
        <br></br>
        <div>
          <label>Chọn loại quà </label>
          <select
            name="giftType"
            value={formData.giftType}
            onChange={(e) => handleOnChangeData(e)}
          >
            <option value="">---Chọn quà---</option>
            <option value="sách tô màu">Sách tô màu</option>
            <option value="gấu bông">Gấu bông</option>
            <option value="lego">Lego</option>
            <option value="oto đồ chơi">Oto đồ chơi</option>
          </select>
          {errors.giftType && <p style={{ color: "red" }}>{errors.giftType}</p>}
        </div>
        <br></br>
        <div>
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={(e) => handleOnChangeData(e)}
          />
          Tích vào để đồng ý nhận quà
          {errors.agree && (
            <p style={{ color: "red" }}>{errors.agree}</p>
          )}
        </div>
        <br></br>
        <button type="submit">Đăng ký nhận quà</button>
      </form>
    </div>
  );
};

export default GiftForm;

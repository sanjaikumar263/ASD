import React, { useState } from 'react';
import "./Form.css";
import axios from 'axios';

const Form2 = () => {
  const [formData, setFormData] = useState({
    categories: "Experteds Buil",
    name: '',
    email: '',
    age: '',
    whatsappNumber: '',
    location: '',
    occupation: '',
    purpose: '',
    investment: '',
    motherborder: 'X870E AORUS MASTER',
    processer: "intel i9"
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      axios.post("http://localhost:3000/experbuilt", formData)
        .then(res => console.log(res.data))
        .catch(err => console.error(err));

      setFormData({
        categories: "Experteds Buil",
        name: '',
        email: '',
        age: '',
        whatsappNumber: '',
        location: '',
        occupation: '',
        purpose: '',
        investment: '',
        motherborder: 'X870E AORUS MASTER',
        processer: "intel i9"
      });
    }
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) {
      formErrors.name = "Name is required";
    }
    if (!formData.email.includes("@")) {
      formErrors.email = "Enter a valid email address";
    }
    if (!formData.whatsappNumber || formData.whatsappNumber.length < 10) {
      formErrors.whatsappNumber = "Enter a valid WhatsApp number";
    }
    if (!formData.age || formData.age <= 0) {
      formErrors.age = "Enter a valid age";
    }
    if (!formData.location) {
      formErrors.location = "Enter a location";
    }
    if (!formData.purpose) {
      formErrors.purpose = "Enter the purpose";
    }
    if (!formData.investment) {
      formErrors.investment = "Select an investment option";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  return (
    <div>
      <form className='d-flex form2' onSubmit={handleSubmit}>
        <center>
          <input type="text" className="Categories" name='categories' readOnly value={formData.categories} />
        </center>
        <div className='input_values'>
          <label>Enter Your Name</label>
          <input type="text" className="input_box" name="name" onChange={handleChange} value={formData.name} />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className='input_values'>
          <label>Enter Your Email</label>
          <input type="text" className="input_box" name="email" onChange={handleChange} value={formData.email} />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className='input_values'>
          <label>What is Your Exact Age</label>
          <input type="text" className="input_box" name="age" onChange={handleChange} value={formData.age} />
          {errors.age && <span className="error">{errors.age}</span>}
        </div>
        <div className='input_values'>
          <label>WhatsApp Number</label>
          <input type="number" className="input_box" name="whatsappNumber" onChange={handleChange} value={formData.whatsappNumber} />
          {errors.whatsappNumber && <span className="error">{errors.whatsappNumber}</span>}
        </div>
        <div className='input_values'>
          <label>Where are you From</label>
          <input type="text" className="input_box" name="location" onChange={handleChange} value={formData.location} />
          {errors.location && <span className="error">{errors.location}</span>}
        </div>
        <div className='input_values'>
          <label>What do you do for a living</label>
          <input type="text" className="input_box" name="occupation" onChange={handleChange} value={formData.occupation} />
          {errors.occupation && <span className="error">{errors.occupation}</span>}
        </div>
        <div className='input_values'>
          <label>What is the Purpose of This PC</label>
          <input type="text" className="input_box" name="purpose" onChange={handleChange} value={formData.purpose} />
          {errors.purpose && <span className="error">{errors.purpose}</span>}
        </div>
        <div className='input_values'>
          <label>Investment</label>
          <input type="text" className="input_box" name="investment" onChange={handleChange} value={formData.investment} />
          {errors.investment && <span className="error">{errors.investment}</span>}
        </div>
        <div className='input_values'>
          <label>Motherboard</label>
          <select className="selected" name="motherborder" value={formData.motherborder} onChange={handleChange}>
            <option value="X870E AORUS MASTER">X870E AORUS MASTER</option>
            <option value="X870E AORUS PRO ICE">X870E AORUS PRO ICE</option>
            <option value="X870E AORUS PRO">X870E AORUS PRO</option>
            <option value="X870E AORUS ELITE WIFI7">X870E AORUS ELITE WIFI7</option>
            <option value="X870 GAMING X WIFI7">X870 GAMING X WIFI7</option>
          </select>
        </div>
        <div className='input_values'>
          <label>Processor</label>
          <select className='selected' name="processer" value={formData.processer} onChange={handleChange}>
            <option value="intel i9">Intel i9</option>
            <option value="intel i7">Intel i7</option>
            <option value="intel i5">Intel i5</option>
            <option value="intel i3">Intel i3</option>
            <option value="AMD R9">AMD R9</option>
            <option value="AMD R7">AMD R7</option>
            <option value="AMD R5">AMD R5</option>
            <option value="AMD R3">AMD R3</option>
          </select>
        </div>
        <button type='submit' className="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form2;

import React, { useRef, useState } from "react";
import pc1 from "../../assets/pc.png"
import "./Form.css"
import Form2 from "./Form2";
import axios from 'axios'

const Form = () => {
  const defaultValu = {
    categories:"Built with Factory",
    name: "",
    email: "",
    whatsappNumber: "",
    location: "",
    purpose: "",
    occupation: "",
    investment: "",
    age: "",
  };
  
  const [formData, setFormData] = useState(defaultValu);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [show,setShow] =useState(false)


  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) {
      formErrors.name = "Name is required";
    }
    if (!formData.email.includes("@")) {
      formErrors.email = "Enter a valid email address";
    }
    if (!formData.whatsappNumber || formData.whatsappNumber.length < 10) {
      formErrors.whatsappNumber = "Enter a valid Whatsapp number";
    }
    if (!formData.age || formData.age <= 0) {
      formErrors.age = "Enter a valid age";
    }
    if (!formData.location) {
      formErrors.location = "Enter a location language";
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
  
  const handleSubmit =(e) => {
    e.preventDefault();
     if (validateForm()) {
      console.log("Form submitted successfully", formData);
       setFormData(defaultValu);
      axios.post("http://localhost:3000/post",formData)
      .then(res=>(console.log(res.data)))
      setErrors({});
    } 
  };
  

  return (
    <div id="form">
      <div className="d-flex justify-content-around">
      <p onClick={()=>{setShow(false)}}>Form {show===false ? <hr style={{background:"orange",color:'orange', padding:"4px" }} className=" rounded-2"/>:""} </p>
      <p  onClick={()=>{setShow(true)}} >Expeerted Bulit{show===true ? <hr className="bg-warning text-warning p-1 rounded-2 " />:""}</p> 
      </div>
      {show===false ?  <div className="d-flex justify-content-around">
      {/* <div className="form_left w-25">
        <img src={pc1} alt="" style={{width:"400px"}} />
      </div> */}
      <div className="main_form  w-100 m-3 ">
        <form onSubmit={handleSubmit}  className="form d-flex  flex-column">
          <center>
          <input type="text" className="Categories"  name="categories"  value={"Built with Factory"} />
          </center>
          <div className="d-flex flex-column">
            <label>Enter Your Name</label>
            <input type="text" name="name" className="input_box" value={formData.name} onChange={handleChange} />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="d-flex flex-column">
            <label>Enter Your Email</label>
            <input type="email" name="email" className="input_box" value={formData.email} onChange={handleChange} />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="d-flex flex-column">
            <label>What is Your Exact Age</label>
            <input type="number" name="age" className="input_box" value={formData.age} onChange={handleChange} />
            {errors.age && <span className="error">{errors.age}</span>}
          </div>
          <div className="d-flex flex-column">
            <label>Whatsapp Number</label>
            <input type="text" name="whatsappNumber" className="input_box" value={formData.whatsappNumber} onChange={handleChange} />
            {errors.whatsappNumber && <span className="error">{errors.whatsappNumber}</span>}
          </div>
          <div className="d-flex flex-column">
            <label>Where are you from</label>
            <input type="text" name="location" className="input_box" value={formData.location} onChange={handleChange} />
            {errors.location && <span className="error">{errors.location}</span>}
          </div>
          <div className="d-flex flex-column">
            <label>What do you do for a living</label>
            <input type="text" name="occupation" className="input_box" value={formData.occupation} onChange={handleChange} />
            {errors.occupation && <span className="error">{errors.occupation}</span>}

          </div>
          <div className="d-flex flex-column">
            <label>What is the Purpose of this PC</label>
            <input type="text" name="purpose" className="input_box" value={formData.purpose} onChange={handleChange} />
            {errors.purpose && <span className="error">{errors.purpose}</span>}
          </div>
          <div className='input_values'>
          <label>Investment</label> 
          <input type="text" className="input_box" name="investment" onChange={handleChange} value={formData.investment} readOnly />
          {errors.investment && <span className="error">{errors.investment}</span>}
        </div>
          <div>
            <label>Investment for Your Dream PC</label>
            <div>
              <input
                type="radio"
                name="investment"
                value="30000-50000"
                checked={formData.investment === "30000-50000"}
                onChange={handleChange}
              />
              <label>Rs 30,000 - Rs 50,000</label>
            </div>
            <div>
              <input
                type="radio"
                name="investment"
                value="50000-75000"
                checked={formData.investment === "50000-75000"}
                onChange={handleChange}
              />
              <label>Rs 50,000 - Rs 75,000</label>
            </div>
            <div>
              <input
                type="radio"
                name="investment"
                value="75000-100000"
                checked={formData.investment === "75000-100000"}
                onChange={handleChange}
              />
              <label>Rs 75,000 - Rs 100,000</label>
            </div>
            <div>
              <input
                type="radio"
                name="investment"
                value="100000+"
                checked={formData.investment === "100000+"}
                onChange={handleChange}
              />
              <label>More than Rs 100,000</label>
            </div>
            {errors.investment && <span className="error">{errors.investment}</span>}
          </div>
          <button type="submit" className="submit">Submit</button>
        </form> 
      </div>
    </div> :
  <Form2/>}
   

    </div>

  );
};

export default Form;
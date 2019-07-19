import React, { useState, useContext, useEffect } from "react";
import DetailsContext from "../context/details/detailsContext";
import AlertContext from '../context/alert/alertContext';
const Form = () => {
  const detailsContext = useContext(DetailsContext);
  const alertContext = useContext(AlertContext);
  const { addDetail, current,updateDetail,loading,clearAll } = detailsContext;
  const {setAlert} = alertContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "phone"
      });
    }
  }, [current, detailsContext]);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "phone"
  });
  
  const { name, email, phone, type } = contact;
  const handleChange = e => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    if(name === '' || email === "" || phone === "" ){
      setAlert('Please fill in all fields','danger');
      return;
    }
    if(current === null){
      addDetail(contact);
    }else{
      updateDetail(contact);
    }
    clearAll();
  };

  

  const clear = () => {
    clearAll();
  }

  return (
    <div>
      <h1>{current === null ? 'ADD DETAILS' : 'EDIT DETAILS'  }</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            name="phone"
            className="form-control"
            placeholder="Phone"
            value={phone}
            onChange={handleChange}
          />
        </div>
        <h4>Contact Type</h4>
        <input
          type="radio"
          name="type"
          value="phone"
          checked={type === "phone"}
          onChange={handleChange}
        />{" "}
        <strong>Phone</strong> {"    "}
        <input
          type="radio"
          name="type"
          value="email"
          checked={type === "email"}
          onChange={handleChange}
        />{" "}
        <strong>Email</strong>{" "}
        <div>
          <input
            type="submit"
            value={current === null ? 'Add Detail' : 'Update Detail'}
            className="btn btn-primary btn-block"
          />
          {!loading && current !== null ? (<button className="btn btn-danger btn-block" onClick={clear} >Clear All</button>):''}
        </div>
      </form>
    </div>
  );
};

export default Form;

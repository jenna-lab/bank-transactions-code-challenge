import React, { useState } from "react";

//get user inputs
const Form = () => {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };
  //form data to use state
  const [formData, setFormData] = useState({});

  //submit execution
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        document.location.reload();
        alert("data posted");
      });

    // ... submit to API
  };
  return (
    <form className="row p-3" onSubmit={handleSubmit}>
      <div className="col-3">
        <input
          name="date"
          onChange={handleChange}
          className="form-control form-control-sm"
          type="date"
          placeholder="date"
          aria-label=".form-control-sm example"
        />
      </div>
      <div className="col-3">
        <input
          name="description"
          onChange={handleChange}
          className="form-control form-control-sm"
          type="text"
          placeholder="Description"
          aria-label=".form-control-sm example"
        />
      </div>
      <div className="col-3">
        <input
          name="category"
          onChange={handleChange}
          className="form-control form-control-sm"
          type="tect"
          placeholder="Category"
          aria-label=".form-control-sm example"
        />
      </div>
      <div className="col-3">
        <input
          name="amount"
          onChange={handleChange}
          className="form-control form-control-sm"
          type="number"
          placeholder="Amount"
          aria-label=".form-control-sm example"
        />
      </div>
      <div className="col-3 p-3 mx-auto ">
        <button type="submit" className="btn btn-dark">
          Add Transaction
        </button>
      </div>
    </form>
  );
};

export default Form;

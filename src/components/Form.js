import React, { useState } from "react";

const Form = () => {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };
  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
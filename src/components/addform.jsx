import React, { useState } from 'react';
import axios from 'axios';
import './addform.css';

function AddForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileno, setMobileno] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a payload object with the form data
    const data = {
      name: name,
      email: email,
      mobileno: mobileno,
    };
    console.log(name);
    console.log(email);
    
    console.log(mobileno);
    


    // Make a POST request to the server
    axios.post("http://localhost:9000/employees",data).then(res=>console.log(res.data)).catch(err=>console.log(err))
        setName('');
        setEmail('');
        setMobileno('');
      
    
  };
  return (
    <div className="add">
      <div className="container">
        <h1>Add Employee Details</h1>
        <form onSubmit={handleSubmit}>

          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="mobileno">Mobile No</label>
          <input
            type="text"
            id="mobileno"
            name="mobileno"
            placeholder="Mobile No"
            value={mobileno}
            onChange={(e) => setMobileno(e.target.value)}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default AddForm;


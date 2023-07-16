import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Update() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:9000/employees/${id}`)
      .then(res => setData(res.data[0]))
      .catch(err => console.log(err));
  }, [id]);

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .patch(`http://localhost:9000/employees/update/${id}`, data)
      .then(res => {
        alert('Data updated successfully');
        navigate('/');
      })
      .catch(err => console.log(err));
  }

  

  return (
    <div className="add">
      <div className="container">
        <h1>Update Employee Details</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="id">ID</label>
          <input
            type="text"
            id="id"
            disabled
            name="id"
            placeholder="ID"
            value={data.id}
            onChange={e=>setData({...data,name:e.target.value})}
          />

          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={data.name}
            onChange={e=>setData({...data,name:e.target.value})}
          />

          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            value={data.email}
            onChange={e=>setData({...data,name:e.target.value})}
          />

          <label htmlFor="mobileno">Mobile No</label>
          <input
            type="text"
            id="mobileno"
            name="mobileno"
            placeholder="Mobile No"
            value={data.mobileno}
            onChange={e=>setData({...data,name:e.target.value})}
          />

          <input type="submit" value="Update" />
        </form>
      </div>
    </div>
  );
}

export default Update;

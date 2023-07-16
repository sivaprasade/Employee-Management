import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './tableview.css';
import Navbar from'./navbar';
import axios from 'axios';


function TableView() {
  const[data,setData]=useState([])
  const navigate=useNavigate();
  useEffect(()=>{
    axios.get("http://localhost:9000/employees").then(res=>setData(res.data)).catch(err=>console.log(err))
    
  },[])
   
 
  return (
    
     <div>
     <Navbar/>
      <div className="add">
        <Link to="/addform" className="button">Add Employee</Link>
      </div>
      <div className='tableview'>
        <table>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Action</th>
          </tr>
          
          {data.map((item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.email}</td>
    <td>{item.mobileno}</td>
    <td>
      <div className="row">
        <div className="left">
        <Link to={`/update/${item.id}`} className="btn1">Update</Link>
        </div>
        <div className="right">
        <button onClick={e=>handleSubmit(item.id)} className="btn2">Delete</button>
        </div>
      </div>
    </td>
  </tr>
))}
          
        </table>
      </div>
    </div>
 
    
  );

  function handleSubmit(id){
    const conf= window.confirm("Do you want to delete");
    if(conf){
      axios.delete(`http://localhost:9000/employee/${id}`)
      .then(res=>{alert("record delete");
      navigate('/')
       })
    .catch(err=>console.log(err))
    }
  }
}

export default TableView;

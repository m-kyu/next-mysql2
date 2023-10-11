"use client";
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import $ from 'jquery';

function List() {
  
  

  const [data,setData] = useState([]);

  const getData = ()=>{
    axios.get('/api')
    .then(res=>{
      setData(res.data);
    })
  }

  const del = (num)=>{
    axios.delete(`/api/${num}`)
    .then(res=>{
      setData(res.data);
    })
  }

  const edit = (num)=>{
    $('#datePicker').datepicker()
    axios.put(`/api/${num}`,{name:'차민규'})
    .then(res=>{
      setData(res.data);
    })
  }

  useEffect(()=>{
    getData();
  },[])

  return (
    <>
    
    <input id="datePicker" type="text" value="2023-10-09"></input>
      <div>List</div>
      <ul>
      {
        data.map(obj => (
          <li key={obj.num}>
            아이디:{obj.id} /
            이름:{obj.name} /
            메일:{obj.email} 
            <button onClick={()=>{del(obj.num)}}>삭제</button>
            <button onClick={()=>{edit(obj.num)}}>수정</button>
          </li>
        ))
      }
      </ul>
    </>
  )
}

export default List
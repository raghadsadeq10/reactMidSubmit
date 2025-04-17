//npx create-react-app mid 
//npm install react-router-dom



import React, { useState } from "react";
import { Link } from "react-router-dom";


const product =[
    {
        fullName:"Alice Johnson",
        email: "Alice Johnson@examble.com",
        role: "Administrator",
        status: "active"
    },
    {
        fullName:"Bob Smith ",
        email: "bob.smith@examble.com",
        role: "Editor",
        status: " not active"
    },
    {
        fullName:"Charlie Davis ",
        email: "charlie davis@examble.com",
        role: "Viewer",
        status: " active"
    },
    
];

const Index =()=>{
    const [status,setstatus] = useState("");



    return(
        <div>
        <h1 className="list">دليل المستخدمين</h1>
        {product.map((product, index) => (
          <div key={index}>
            <h4>{product.fullName}</h4>
            <h4>{product.email}</h4>
            <h4>{product.role}</h4>
            <h4>{product.status}</h4>

          </div>
        ))}
      </div>
    )
       
      
    }


export default Index;
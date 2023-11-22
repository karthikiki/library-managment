import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Dashboard = () => {
  const navigate = useNavigate();
  const backgroundStyle={
    backgroundImage: 'url("https://images.freeimages.com/images/large-previews/007/books-1419617.jpg?fmt=webp&w=350")',
    height:"100vh", 
  }
  return (
    <div>
      <Navbar/>
    <div className='look1'>
      <h1>Welcome to the dashboard!📖</h1>
      <div >
        <Button  onClick={() => navigate("/books")}>Book's List</Button>
        <Button  onClick={() => navigate("/add")}>Add Book</Button>
      </div>
    </div>
    </div>  
  );
};

export default Dashboard;

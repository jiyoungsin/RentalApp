import React, {useState, useEffect}  from "react";
import Routes from './routes/Routes';
import dotenv from 'dotenv';

dotenv.config();

export default function App() {
  return (
    <div>
      <Routes/>
    </div>
  )
};
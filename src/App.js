import React from 'react';
import Navbar from './components/Navbar/Navbar';
import data from './data.json'
import Moviecard from './components/Navbar/Moviecard';

import { useState } from 'react';
import Footer from './components/Navbar/Footer';

function App() {
  const [searchvalue,setsearchvalue]=useState("");

  const inputhandler=(event)=>{
    setsearchvalue(()=>event.target.value);

  }

  const returncards=()=>{
    return data.filter(
      (card)=>card.title.toLowerCase().includes(searchvalue.toLowerCase()) || searchvalue===""
    );

  }

  return (
    <>
      <Navbar inputhandler={inputhandler}/>
      <Moviecard data={data} returncards={returncards}/>
      <Footer/>
    </>
  );
}

export default App;

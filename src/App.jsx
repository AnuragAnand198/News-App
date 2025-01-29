import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Newsboard from './components/Newsboard'
import NewsItem from './components/NewsItem'

function App() {
  const [category, setcategory] =useState("general");
 
  return (
   
    <div>
      <Navbar setcategory ={setcategory} />
      <Newsboard category={category}/>
     
    </div>
  )
}

export default App

import React , { useState, useEffect } from 'react';
import './App.css';
import Weeds from './components/Weeds.js';

export default function App (props) {
  const [weeds, setWeeds] = useState([])
  const [formInputs, updateFormInputs] = useState({
    author: '',
    content: '',
    title: ''
  })
  
const handleChange = (event) => {
  const updateInput = Object.assign({}, formInputs, { [event.target.id]: event.target.value })
  updateFormInputs(updateInput)
}

const handleSubmit  = (event) =>{
  event.preventDefault()
  console.log(formInputs)
}

const getWeeds = async () => {
  try {
    const response = await fetch('http://localhost:3000/weeds')
    const data = await response.json()
    console.log(data)
   } catch(error){
     console.error(error)
   }
 } 
useEffect(()=>{
 (async function (){
   await getWeeds()
     })()
   },[])

return (
  <div className="App">
  <div className="container">
    <nav>
      <h4>Post a Weed </h4>
    <form onSubmit={handleSubmit}>
      <label htmlFor="author">Strain</label>
      <input
        type="text"
        id="author" value={formInputs.author}
        onChange={handleChange}
      />
      <label htmlFor="title">Type</label>
      <input
        type="text"
        id="title" value={formInputs.title}
        onChange={handleChange}
      />
      <label htmlFor="content">Brand</label>
      <input
        type="text"
        id="content" value={formInputs.content}
        onChange={handleChange}
      />
      <input type="submit" className="submit" />
    </form>
    </nav>
    <main>
      <Weeds />
    </main>
    <aside></aside>
    </div>
    <footer />
  </div>
)
}
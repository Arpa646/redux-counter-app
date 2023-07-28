import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import store from './componant/store/Store'

function App() {
const conter=useSelector((store)=>store.name);
const dispatch=useDispatch()
console.log(conter)

  return (
   <>
 <h1>   counter:0</h1>
    <button onClick={}>increase</button>
   </>
  )
}

export default App

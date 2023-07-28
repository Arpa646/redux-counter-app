import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import store from './componant/store/Store'
import { decrement, increment, reset } from './componant/action/Action'

function App() {
  const conter = useSelector((store) => store.count);
  const dispatch = useDispatch()
  const increase = () => {
    console.log('hi')
    dispatch(increment())
  }
  const decrease = () => {
    console.log('hi')
    dispatch(decrement())
  }
  const restart = () => {
    console.log('hi')
    dispatch(reset())
  }


  return (
    //    <div className='card'>
    //  <h1>   counter:{conter}</h1>
    //     <button onClick={increase}>Increase</button>
    //     <button onClick={decrease}>Decrease</button>
    //     <button onClick={restart}>Reset</button>
    //    </div>




    <div class="container">
      <div class="wrapper">
        <div class="banner-image">
          <h2>   Counter :{conter}</h2>
        </div>

      </div>
      <div class="button-wrapper">

        <button class="btn outline" onClick={increase}>increase</button>
        <button class="btn fill" onClick={decrease}>decrease</button>
        <button class="btn fill" onClick={restart}>restart</button>
      </div>
    </div>

  )
}

export default App

import React, { useState } from 'react'
import { useCounter } from './useCounter'

export const CounterApp = () => {
   
  const { counter, increment, reset, decrement }  = useCounter(0)

  return (
    <div className="container">
      <h1>COUNTER APP</h1>
      <h1> { counter } </h1>

      <div>
        <button onClick={ increment }>+1</button>
        <button onClick={ decrement }>-1</button>
        <button onClick={ reset }>Reset</button>
      </div>
    </div>
  )
}

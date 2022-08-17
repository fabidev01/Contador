import { useState } from 'react'

export const useCounter = ( value ) => {
  const [counter, setCounter] = useState( value )

  const increment = ()=> {
    setCounter( counter => counter+1 )
  }
  const decrement = ()=> {
    setCounter( counter => counter-1 )
  }
  const reset = ()=> {
    setCounter( counter => counter = value )
  }
  return({
    increment,
    decrement,
    reset,
    counter
  })
}

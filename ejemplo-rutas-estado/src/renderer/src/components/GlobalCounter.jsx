import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../redux/counter-slice'

export function GlobalCounter() {
  const counter = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Counter: {counter}</h2>
      {/* Uso de funciones vacías para que los dispatch no se ejecuten automáticamente al renderizar los botones.
      Por tanto, solo funcionarán al hacer clic sobre ellos */}
      <button onClick={() => dispatch(increment())}>Increment counter</button>
      <button onClick={() => dispatch(decrement())}>Decrement counter</button>
    </div>
  )
}

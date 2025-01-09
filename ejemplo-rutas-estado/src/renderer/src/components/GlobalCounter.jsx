import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../redux/counter-slice'

export function GlobalCounter() {
  // Obtiene el valor actual del contador desde el estado global de Redux
  const counter = useSelector((state) => state.counter.value)

  // Obtiene la función dispatch para enviar acciones al store de Redux
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Counter: {counter}</h2>
      {/* Botón para incrementar el contador */}
      <button onClick={() => dispatch(increment())}>Increment</button>
      {/* Botón para decrementar el contador */}
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

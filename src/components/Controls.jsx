import { useDispatch } from "react-redux";

function Controls() {
  const dispatch = useDispatch();

  const handleIncreament = () => {
    dispatch({ type : 'INCREMENT' } )
  }

  const handleDecrement = () => {
    dispatch({ type : 'DECREMENT' })
  }

  return <>
  <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
    <button type="button" className="btn btn-primary btn-lg px-4 gap-3" onClick={handleIncreament}>Increase</button>
    <button type="button" className="btn btn-outline-secondary btn-lg px-4" onClick={handleDecrement}>Decrease</button>
  </div>
  </>;
}

export default Controls;
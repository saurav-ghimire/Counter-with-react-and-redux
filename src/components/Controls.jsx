import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counterSlice";
import { privacyActions } from "../store/privacySlicer";

function Controls() {

  const adding = useRef();
  const subtract = useRef();
  
  const dispatch = useDispatch();

  const handleIncreament = () => {
    dispatch(counterActions.increment());
  }

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  }

  const handleAdd = () => {

    dispatch(counterActions.add({
      addingValue : parseInt(adding.current.value)
    } ));

    
    adding.current.value = "";
  }

  const handlesubtract = () => {
    dispatch(counterActions.substract({
      subtractValue : parseInt(subtract.current.value)
    }));
    subtract.current.value = ""
  }

  const privacyHandle = () => {
    dispatch(privacyActions.toggle())
  }

  return <>
  <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
    <button type="button" className="btn btn-primary btn-lg px-4 gap-3" onClick={handleIncreament}>Increase</button>
    <button type="button" className="btn btn-outline-secondary btn-lg px-4" onClick={handleDecrement}>Decrease</button>
    <button type="button" className="btn btn-danger" onClick={privacyHandle}>Privacy</button>
  </div>
  <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-2">
    <input
    type="number"
    placeholder="Enter Numbers"
    className="px-2"
    ref={adding}
    />
    <button type="button" className="btn btn-outline-secondary px-4" onClick={handleAdd}>Add</button>
  </div>
  <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-2">
    <input
    type="number"
    placeholder="Enter Numbers"
    className="px-2"
    ref={subtract}
    />
    <button type="button" className="btn btn-outline-secondary px-4" onClick={handlesubtract}>Subtract</button>

    
  </div>
  </>;
}

export default Controls;
import { useDispatch, useSelector } from "react-redux";
import { changeCost, changeName,addCars } from "../store";

function CarForm() {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost,
    };
  });
  
  const handleChangeName = (event) => {
    dispatch(changeName(event.target.value));
  };

  const handleChangeCost = (event) => {
    const costCar = parseInt(event.target.value);
    dispatch(changeCost(costCar));
  };

  const handleSubmit = (event)=>{
    event.preventDefault()
    dispatch(addCars({name: name, cost: cost}))
    dispatch(changeName(''))
    dispatch(changeCost(''))
  }
  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">add car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label" htmlFor="">
              name
            </label>
            <input
              type="text"
              name=""
              id=""
              className="input is-expanded"
              value={name}
              onChange={handleChangeName}
            />
          </div>
        </div>
        <div className="field-group">
          <div className="field">
            <label className="label" htmlFor="">
              cost
            </label>
            <input
              type="number"
              name=""
              id=""
              className="input is-expanded"
              value={cost || ""}
              onChange={handleChangeCost}
            />
          </div>
        </div>
        <div className="field">
          <button className="button">submit</button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;

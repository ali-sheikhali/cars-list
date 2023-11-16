import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";
function CarList() {
  const dispatch = useDispatch();

  // const cars = useSelector((state) => {
  //   return state.cars.data;
  // });

  const {cars, name} = useSelector(({form ,cars: { data, searchTerms } }) => {
    const filtredCars = data.filter((car) =>
      car.name.toLowerCase().includes(searchTerms.toLowerCase())
    );
    return {
      cars: filtredCars,
      name: form.name
    }
  });


  const hanldeCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };
  const rednderCars = cars.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase())
    return (
      <div className={`panel ${bold && "bold"}`} key={car.id}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => hanldeCarDelete(car)}
        >
          delete
        </button>
      </div>
    );
  });
  return (
    <div className="car-list">
      {rednderCars}
      <hr />
    </div>
  );
}

export default CarList;

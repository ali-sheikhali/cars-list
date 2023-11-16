import { configureStore } from "@reduxjs/toolkit";
import {
  carsReducer,
  changeSearchTerms,
  addCars,
  removeCar,
} from "./slices/carsSlice";
import { formReducer, changeName, changeCost } from "./slices/formSlice";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});
export { store, addCars, removeCar, changeSearchTerms, changeCost, changeName };

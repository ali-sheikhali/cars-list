import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerms: "",
    data: [],
  },
  reducers: {
    changeSearchTerms(state, action) {
      state.searchTerms = action.payload;
    },
    addCars(state, action) {
      state.data.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCar(state, action) {
      const update = state.data.filter((car) => {
        return car.id !== action.payload;
      });
      state.data = update;
    },
  },
});
export const { changeSearchTerms, addCars, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;

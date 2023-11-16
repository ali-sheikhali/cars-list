import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerms } from "../store";
function CarSearch() {
  const searchTerm = useSelector((state) => {
    return state.cars.searchTerm;
  });

  const dispatch = useDispatch();

  const handleSearchTermChange = (event) => {
    dispatch(changeSearchTerms(event.target.value));
  };

  return (
    <div className="list-header">
      <h3 className="title is-3">my Cars</h3>
      <div>
        <label htmlFor="" className="label">
          search
        </label>
        <input
          type="text"
          className="input"
          onChange={handleSearchTermChange}
          value={searchTerm}
        />
      </div>
    </div>
  );
}

export default CarSearch;

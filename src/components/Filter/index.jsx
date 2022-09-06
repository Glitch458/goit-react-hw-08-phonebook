import { useSelector, useDispatch } from 'react-redux';
import { setFilterValue } from 'redux/filter/slice';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filterValue);

  return (
    <label className="form">
      Find contacts by name
      <input
        className="input"
        type="text"
        name="filter"
        value={filterValue}
        onChange={evt => dispatch(setFilterValue(evt.target.value.trim()))}
      />
    </label>
  );
};

export default Filter;

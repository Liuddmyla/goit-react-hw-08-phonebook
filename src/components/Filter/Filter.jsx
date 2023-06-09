import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filter/slice';
import css from './Filter.module.css';
import { selectFilter } from 'redux/filter/selectors';
import { TextField } from '@mui/material';


const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const changeFilter = e => {
    const value = e.target.value.toLowerCase();
    dispatch(setFilter(value));
  };

  return (
    <>
      <p className={css['text-filter']}>Find contacts by name</p>
      <TextField      
      type="text"
      name="filter"
      value={filter}
      onChange={changeFilter}
      className={css['input-filter']}
      variant="outlined" size='small'  color="primary"
      />
    </>    
  );
};

export default Filter;
import React from 'react';
import './Filter.scss';
import { changeFilter } from '../../redux/filterSlice';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <label className="Filter__label">
      Фильтр по имени
      <input
        className="Filter__input"
        type="text"
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </label>
  );
};



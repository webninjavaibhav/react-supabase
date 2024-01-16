import './populardishform.css';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { createDish, updateDish , fetchDishDetail } from './popularDishesService';

const PopularDishForm = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { isEditable } = props;
  const [dishDetail, setDishDetail] = useState({
    name: '',
    state: '',
    averagePrice: '',
  });

  const inputChangeHandler = (event) => {
    setDishDetail((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (isEditable) {
      await updateDish(dishDetail)
    } else {
      await createDish(dishDetail)
    }
    navigate('/dashboard');
  };

  useEffect(() => {
    if (isEditable) {
      fetchDishDetail(id).then((data) => setDishDetail(data));
    }
  }, [id]);

  return (
    <div className='dish-form-container '>
      <form onSubmit={submitHandler}>
        <div className='form-container'>
          <label>Name</label>
          <input
            type='text'
            name='name'
            value={dishDetail?.name}
            onChange={inputChangeHandler}
          />
          <label>State</label>
          <input
            type='text'
            name='state'
            value={dishDetail?.state}
            onChange={inputChangeHandler}
          />
          <label>Average Price</label>
          <input
            type='text'
            name='averagePrice'
            value={dishDetail?.averagePrice}
            onChange={inputChangeHandler}
          />
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default PopularDishForm;

import './card.css';
import { useNavigate } from 'react-router';
import { deleteDish } from './cardService';

const Card = (props) => {
  const navigate = useNavigate();
  const { id, name, state, averagePrice } = props?.dish;

  const editHandler = () => {
    navigate(`/dishes/${id}`);
  }

  const deleteHandler = async () => {
    await deleteDish(id)
    props.fetchishes();
  }

  return (
    <div className='card-container'>
      <div className='card-title'>
        <div className='name'>{name}</div>
        <div className='price'>₹ {averagePrice}</div>
      </div>
      <div className='state'>This dish is from {state}</div>
      <div className='edit-delete'>
        <button onClick={editHandler}>Edit</button>
        <button onClick={deleteHandler}>Delete</button>
      </div>
    </div>
  );
};

export default Card;

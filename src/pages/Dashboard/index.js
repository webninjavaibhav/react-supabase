import './dashboard.css';
import Card from '../../components/Card';
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import { fetchDishes } from './dashboardService';

const Dashboard = () => {
  const navigate = useNavigate();
  const [allDishes, setAllDishes] = useState([]);

  useEffect(() => {
    fetchDishes().then((data) => setAllDishes(data));
  }, []);

  return (
    <div className='dashboard-container'>
      <div className='dashboard-heading'>
        List of all famous dishes around India
      </div>
      <div className='all-dishes-container' style={{ display: 'grid' }}>
        {allDishes?.map((dish) => (
          <div key={dish?.id}>
            <Card dish={dish} fetchDishes={fetchDishes} />
          </div>
        ))}
      </div>
      <div className='add-dishes'>
        <button onClick={() => navigate('/popular-dish-form')}>
          Add Dishes
        </button>
      </div>
    </div>
  );
};

export default Dashboard;

import UserForm from './pages/UserForm';
import Dashboard from './pages/Dashboard';
import { Routes, Route } from 'react-router';
import { BrowserRouter, Navigate } from 'react-router-dom';
import PopularDishForm from './pages/PopularDishesForm';
import Layout from './components/Layout';
import Home from './pages/Home/home';

function App() {
  const authentication = localStorage.getItem(
    'sb-vgllznvnthexhnmexhcq-auth-token'
  );
  const user = authentication && JSON.parse(authentication)?.user;

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<UserForm type='login' />} />
          <Route path='/signup' element={<UserForm type='signup' />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route
            path='/dishes/:id'
            element={<PopularDishForm isEditable={true} />}
          />
          <Route path='/popular-dish-form' element={<PopularDishForm />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

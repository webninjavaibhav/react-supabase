import { supabase } from '../../config/SupabaseClient';
import './layout.css';
import { useLocation, useNavigate } from 'react-router';

const Layout = (props) => {
  const { children } = props;
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const authData = localStorage.getItem('sb-vgllznvnthexhnmexhcq-auth-token');
  const userName = authData && JSON.parse(authData)?.user?.user_metadata?.name;
  const isUserAuthenticated = authData && JSON.parse(authData)?.user?.aud;
  const logoutHandler = async () => {
    const { error } = await supabase.auth.signOut();
    navigate('/');
  };

  return (
    <div>
      <div className='layout'>
        <div className='title'>Famous Dishes</div>
        <div className='user-data'>
          {isUserAuthenticated === 'authenticated' && (
            <div className='user-name'>{`Hi, ${userName}`}</div>
          )}
          {isUserAuthenticated === 'authenticated' &&
            pathname === '/dashboard' && (
              <button className='button' onClick={logoutHandler}>
                Logout
              </button>
            )}
        </div>
      </div>
      {children}
    </div>
  );
};
export default Layout;

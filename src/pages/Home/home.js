import './home.css';

const Index = () => {
  const authentication = localStorage.getItem(
    'sb-vgllznvnthexhnmexhcq-auth-token'
  );
  const isUserAuthenticated =
    authentication && JSON.parse(authentication)?.user?.aud;
  return (
      <div className='home-container'>
        <div className='home-title'>Welcome to famous dish app</div>
        <div>
          Please{' '}
          <span>
            <a
              href={`${
                isUserAuthenticated === 'authenticated'
                  ? '/dashboard'
                  : '/signup'
              }`}
            >
              Signup
            </a>{' '}
            or{' '}
            <a
              href={`${
                isUserAuthenticated === 'authenticated'
                  ? '/dashboard'
                  : '/login'
              }`}
            >
              Login
            </a>
          </span>{' '}
          to enjoy all the famous dishes around you
        </div>
      </div>
  );
};
export default Index;

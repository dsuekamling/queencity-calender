import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const withAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
      axios.get('http://localhost:3001/login', { withCredentials: true })
        .then(res => {
          if (res.data.loggedIn) {
            setLoggedIn(true);
            setUser(res.data.user);
          } else {
            navigate('/login');
          }
        })
        .catch(err => {
          console.log(err);
        });
    }, [navigate]);

    if (loggedIn) {
      return <WrappedComponent user={user} />;
    } else {
      return null;
    }
  };

  return Wrapper;
};

export default withAuth;

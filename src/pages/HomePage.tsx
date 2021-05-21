import { useState, useEffect, useContext } from 'react';
//import { GlobalContext } from '../context/GlobalContext';
import '../App.css';

interface Registration {
    credentials: credentials;
}

const HomePage = () => {

    const [credentials, setCredentials] = useState({
        firstName: '',
        lastName: '', 
        email: '',
        password: '',
    })

  return (
    <div id='home'>
      <div className='row text-center'>
        <div className='col'>
          <h2>Registration page</h2>
        </div>
      </div>
      <form>
        <div className="form-row dflex justify-content-around">
        <div className="form-group col-md-6">
            <label htmlFor="inputFirstName">First Name </label>
            <input type="text" className="form-control" id="firstName" placeholder="First Name"  />
          </div>
          <div className="form-group">
            <label htmlFor="inputLastName">Last Name </label>
            <input type="text" className="form-control" id="lastName" placeholder="Last Name"  />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Email </label>
            <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Password </label>
            <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
          </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary" onSubmit={() => (null)}>Register</button>
        </div>
        </div>        
      </form>

    </div>
    
  );
};

export default HomePage;
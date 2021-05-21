  
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';

const AppRoutes = () => {
  return (
    <div>
      <div className='container-fluid'>
        <Switch>
          <Route path='/' exact component={HomePage} />
        </Switch>
      </div>
    </div>
  );
};

export default AppRoutes;
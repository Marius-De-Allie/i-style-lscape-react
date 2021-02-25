import React from 'react';
import { useHistory } from 'react-router-dom';

const HomePage = props => {
  const history = useHistory();

  const selectServiceHandler = () => {
    // redirect to services route.
    history.push('/services');
  };
  
  return (
    <div className="main-container">
      <div className="landing-text-con">
        <p className="landing-txt">Island Style Landscaping</p>
        <p className="sub-txt">Make your dreams a reality</p>
      </div>
      <div className="btn-container">
        <div className="btn">gallery</div>
        <div className="btn" onClick={selectServiceHandler}>
          services
        </div>
      </div>
    </div>
  );
};

export default HomePage;
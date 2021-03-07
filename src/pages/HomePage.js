import React from 'react';
import { useHistory } from 'react-router-dom';
import { GiSpade, GiHighGrass, GiBrickWall, GiMineTruck, GiRoad, GiBulldozer } from 'react-icons/gi';

const HomePage = ({ handleServiceClick }) => {
  const history = useHistory();

  const selectServiceHandler = () => {
    // redirect to services route.
    history.push('/services');
  };
  
  return (
    <div className="m-container">
      <div className="landing-container">
        <div className="landing-text-con">
          <p className="landing-txt">Island Style Landscaping</p>
          <p className="sub-txt">Make your dreams a reality</p>
        </div>
        <div className="btn-container">
          <div className="btn" onClick={selectServiceHandler}>
            contact us
          </div>
          <div className="btn">gallery</div>
        </div>
      </div>
      <div className="lower-container">
        <div className="inner-l-container">
          <p classname="sub-heading" id="services-txt">Services we offer</p>
          <div className="service-cards-container">
            <div 
              className="home-serv-card"
              onClick={() => {
                handleServiceClick('demolition');
                history.push('/services');
              }}
            >
              <div className="card-heading-container" style={{height: '45%'}}>
                <p className="card-heading">Demolition</p>
                <GiBulldozer color="limegreen" size={23} />
              </div>
              <p className="serv-details">Click for more details</p>
            </div>
            <div 
              className="home-serv-card"
              onClick={() => {
                handleServiceClick('excavation');
                history.push('/services');
              }}
            >
              <div className="card-heading-container" style={{height: '45%'}}>
                <p className="card-heading">Excavation</p>
                <GiMineTruck color="limegreen" size={23} />
              </div>
              <p className="serv-details">Click for more details</p>
            </div>
            <div 
              className="home-serv-card"
              onClick={() => {
                handleServiceClick('landscaping');
                history.push('/services');
              }}
            >
              <div className="card-heading-container" style={{height: '45%'}}>
                <p className="card-heading">Landscaping</p>
                <GiHighGrass color="limegreen" size={23} />
              </div>
              <p className="serv-details">Click for more details</p>
            </div>
            <div 
              className="home-serv-card"
              onClick={() => {
                handleServiceClick('driveways');
                history.push('/services');
              }}
            >
              <div className="card-heading-container" style={{height: '45%'}}>
                <p className="card-heading">Driveways</p>
                <GiRoad color="limegreen" size={23} />
              </div>
              <p className="serv-details">Click for more details</p>
            </div>
            <div 
              className="home-serv-card"
              onClick={() => {
                handleServiceClick('foundations');
                history.push('/services');
              }}
            >
              <div className="card-heading-container" style={{height: '45%'}}>
                <p className="card-heading">Foundations</p>
                <GiBrickWall color="limegreen" size={23} />
              </div>
              <p className="serv-details">Click for more details</p>
            </div>
            <div 
              className="home-serv-card"
              onClick={() => {
                handleServiceClick('backFilling');
                history.push('/services');
              }}
            >
              <div className="card-heading-container" style={{height: '45%'}}>
                <p className="card-heading">Back Filling</p>
                <GiSpade color="limegreen" size={23} />
              </div>
              <p className="serv-details">Click for more details</p>
            </div>
            <div 
              className="home-serv-card"
              onClick={() => {
                handleServiceClick('gradingAndLeveling');
                history.push('/services');
              }}
            >
              <div className="card-heading-container" style={{height: '45%'}}>
                <p className="card-heading">Grading & Leveling</p>
              </div>
              <p className="serv-details">Click for more details</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

// 'Demolition',
// 'Excavation',
// 'Landscaping',
// 'Driveways',
// 'Foundations',
// 'Back Filling',
// 'Grading & Leveling'
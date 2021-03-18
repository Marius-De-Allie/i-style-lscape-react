import React from 'react';
import { useHistory } from 'react-router-dom';
import { GiSpade, GiHighGrass, GiBrickWall, GiMineTruck, GiRoad, GiBulldozer } from 'react-icons/gi';

const HomePage = ({ selectService }) => {
  const history = useHistory();

   // Declare function to handle service click.
  //  const handleServiceClick = (serviceName) => {

  //   // set showDetails state to service clicked on.
  //   history.push('/services');
  // };

  // Declare function to handle button click.
  const handleBtnClick = (routeName) => {
    history.push(routeName);
  };
  
  return (
    <div className="m-container">
      <div className="landing-container">
        <div className="landing-text-con">
          <p className="landing-txt">tri-island Landscaping</p>
          <p className="sub-txt">Make your dreams a reality</p>
        </div>
        <div className="btn-container">
          <div 
            className="btn" 
            onClick={() => handleBtnClick('/contact')}
          >
            contact us
          </div>
          <div 
            className="btn"
            onClick={() => handleBtnClick('/gallery')}
          >
            gallery
          </div>
        </div>
      </div>
      <div className="lower-container">
        <div className="inner-l-container">
          <p classname="sub-heading" id="services-txt">Services we offer</p>
          <div className="service-cards-container">
            <div 
              className="home-serv-card"
              onClick={() => selectService('demolition')}
            >
              <div className="card-heading-container" style={{height: '45%'}}>
                <p className="card-heading">Demolition</p>
                <GiBulldozer color="limegreen" size={23} />
              </div>
              <p className="serv-details">Click for more details</p>
            </div>
            <div 
              className="home-serv-card"
              onClick={() => selectService('excavation')}
            >
              <div className="card-heading-container" style={{height: '45%'}}>
                <p className="card-heading">Excavation</p>
                <GiMineTruck color="limegreen" size={23} />
              </div>
              <p className="serv-details">Click for more details</p>
            </div>
            <div 
              className="home-serv-card"
              onClick={() => selectService('landscaping')}
            >
              <div className="card-heading-container" style={{height: '45%'}}>
                <p className="card-heading">Landscaping</p>
                <GiHighGrass color="limegreen" size={23} />
              </div>
              <p className="serv-details">Click for more details</p>
            </div>
            <div 
              className="home-serv-card"
              onClick={() => selectService('driveways')}
            >
              <div className="card-heading-container" style={{height: '45%'}}>
                <p className="card-heading">Driveways</p>
                <GiRoad color="limegreen" size={23} />
              </div>
              <p className="serv-details">Click for more details</p>
            </div>
            <div 
              className="home-serv-card"
              onClick={() => selectService('foundations')}
            >
              <div className="card-heading-container" style={{height: '45%'}}>
                <p className="card-heading">Foundations</p>
                <GiBrickWall color="limegreen" size={23} />
              </div>
              <p className="serv-details">Click for more details</p>
            </div>
            <div 
              className="home-serv-card"
              onClick={() => selectService('backfilling')}
            >
              <div className="card-heading-container" style={{height: '45%'}}>
                <p className="card-heading">Back Filling</p>
                <GiSpade color="limegreen" size={23} />
              </div>
              <p className="serv-details">Click for more details</p>
            </div>
            <div 
              className="home-serv-card"
              onClick={() => selectService('grading')}
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
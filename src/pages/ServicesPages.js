import React from 'react';
import { GiSpade, GiHighGrass, GiBrickWall, GiMineTruck, GiRoad, GiBulldozer } from 'react-icons/gi';
import { IoIosArrowDropdown } from 'react-icons/io';
import services from '../utils/data';

const ServicesPage = ({ showDetails }) => {

  return (
    <div className="main-serv-container">
      <p className="serv-header">Services</p>
      <div className="service-cards-container">
            <div className="service-card">
              <div className="card-heading-container">
                <p className="card-heading">Demolition</p>
                <GiBulldozer color="limegreen" size={23} />
              </div>
              <p className="card-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla diam mi, vel tempus ligula congue non. Morbi vitae tincidunt.</p>
            </div>
            <div className="service-card">
              <div className="card-heading-container">
                <p className="card-heading">Excavation</p>
                <GiMineTruck color="limegreen" size={23} />
              </div>
              {/*<div className="details-btn">
                <p className="det-btn-txt">more details</p>
                <IoIosArrowDropdown style={{cursor: "pointer"}} color="gray" size={23} />
              </div>
              */}
              <p className="card-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla diam mi, vel tempus ligula congue non. Morbi vitae tincidunt.</p>
            </div>
            <div className="service-card">
              <div className="card-heading-container">
                <p className="card-heading">Landscaping</p>
                <GiHighGrass color="limegreen" size={23} />
              </div>
              <p className="card-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla diam mi, vel tempus ligula congue non. Morbi vitae tincidunt.</p>
            </div>
            <div className="service-card">
              <div className="card-heading-container">
                <p className="card-heading">Driveways</p>
                <GiRoad color="limegreen" size={23} />
              </div>
              <p className="card-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla diam mi, vel tempus ligula congue non. Morbi vitae tincidunt.</p>
            </div>
            <div className="service-card">
              <div className="card-heading-container">
                <p className="card-heading">Foundations</p>
                <GiBrickWall color="limegreen" size={23} />
              </div>
              <p className="card-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla diam mi, vel tempus ligula congue non. Morbi vitae tincidunt.</p>}
            </div>
            <div className="service-card">
              <div className="card-heading-container">
                <p className="card-heading">Back Filling</p>
                <GiSpade color="limegreen" size={23} />
              </div>
              <p className="card-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla diam mi, vel tempus ligula congue non. Morbi vitae tincidunt.</p>
            </div>
            <div className="service-card">
              <div className="card-heading-container">
                <p className="card-heading">Grading & Leveling</p>
              </div>
              <p className="card-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla diam mi, vel tempus ligula congue non. Morbi vitae tincidunt.</p>
            </div>
          </div>
      
    </div>
  );
};

export default ServicesPage;
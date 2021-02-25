import React from 'react';
import { GiSpade, GiHighGrass, GiBrickWall } from 'react-icons/gi';
import { MdDriveEta } from 'react-icons/md';

const ServicesPage = props => {

  return (
    <div className="back-image">
      <div className="serv-container">
        <h3 className="serv-header">We specialize in</h3>
        <div className="servlist-container">
          <p>Demolition</p>
          <p>Excavation <GiSpade /></p>
          <p>Landscaping <GiHighGrass /></p>
          <p>Driveways <MdDriveEta /></p>
          <p>Foundations <GiBrickWall /></p>
          <p>Back Filling</p>
          <p>Grading & Leveling</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
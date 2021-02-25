import React from 'react';
import { GiSpade, GiHighGrass, GiBrickWall } from 'react-icons/gi';
import { MdDriveEta } from 'react-icons/md';
import services from '../utils/data';

const ServicesPage = props => {

  return (
    <div className="back-image">
      <div className="serv-container">
        <h3 className="serv-header">We specialize in</h3>
        <div className="servlist-container">
          {services.map(service => (
            <p key={service}>{service}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
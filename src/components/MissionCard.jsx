import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className="div-mission-card" data-testid="mission-card">
        <div className="mission-card-name">
          <p data-testid="mission-name">{name}</p>
        </div>
        <div className="mission-line" />
        <div className="mission-info">
          <div className="mission-year-country">
            <p className="mission-year" data-testid="mission-year">{year}</p>
            <p className="mission-country" data-testid="mission-country">{country}</p>
          </div>
          <p className="mission-destination" data-testid="mission-destination">
            {destination}
          </p>
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;

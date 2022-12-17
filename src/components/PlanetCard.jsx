import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    const altImg = `Planeta ${planetName}`;
    return (
      <div className="div-planet" data-testid="planet-card">
        <p className="planet-name" data-testid="planet-name">{planetName}</p>
        <img src={ planetImage } alt={ altImg } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;

import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div className="div-solar-system" data-testid="solar-system">
        <Title headline="Planetas" />
        <ul className="ul-solar-system">
          {planets.map((planet) => {
            const { name, image } = planet;
            return <PlanetCard key={ name } planetName={ name } planetImage={ image } />;
          })}
        </ul>
      </div>
    );
  }
}

export default SolarSystem;

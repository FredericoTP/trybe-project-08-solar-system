import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div className="div-missions" data-testid="missions">
        <Title headline="Missões" />
        <ul className="ul-missions">
          {missions.map((mission) => {
            const { name, year, country, destination } = mission;
            return (
              <MissionCard
                key={ name }
                name={ name }
                year={ year }
                country={ country }
                destination={ destination }
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Missions;

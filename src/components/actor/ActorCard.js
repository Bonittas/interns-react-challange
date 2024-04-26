import React from 'react';
import Card from '../common/Card';

function ActorCard({ actor, onDetailClick }) {
  return (
    <>

    <Card>
      <h2>{actor.name}</h2>
      <p>Height: {actor.height}</p>
      <p>Birth Year: {actor.birth_year}</p>
      <div onClick={() => onDetailClick(actor)} className='detail-button'>Detail</div>
    </Card>
    </>
  );
}

export default ActorCard;

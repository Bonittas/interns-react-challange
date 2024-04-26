// ActorDetail.js
import React from 'react';

function ActorDetail({ actor, onCloseDetail }) {
  return (
    <div className="actor-detail">
      <button className="close-button" onClick={onCloseDetail}>Close</button>
      <h6>{actor.name}</h6>
      <p>Height: {actor.height}</p>
      <p>Birth Year: {actor.birth_year}</p>
    </div>
  );
}

export default ActorDetail;

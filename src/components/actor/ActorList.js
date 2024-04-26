import React, { useState } from 'react';
import ActorCard from './ActorCard';
import ActorDetail from './ActorDetail';
import Pagination from '../common/Pagination';
import Search from '../common/Search';

function ActorList({ actors }) {
  const [selectedActor, setSelectedActor] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [actorsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');

  const indexOfLastActor = currentPage * actorsPerPage;
  const indexOfFirstActor = indexOfLastActor - actorsPerPage;
  const filteredActors = actors.filter(actor =>
    actor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const currentActors = filteredActors.slice(indexOfFirstActor, indexOfLastActor);
  const totalPages = Math.ceil(filteredActors.length / actorsPerPage);

  const handleDetailClick = (actor) => {
    setSelectedActor(actor);
  };

  const handleCloseDetail = () => {
    setSelectedActor(null);
  };

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const onSearchChange = (value) => {
    setSearchTerm(value);
    setCurrentPage(1); 
  };

  return (
    <div className="actor-list-container">
      <Search searchTerm={searchTerm} onSearchChange={onSearchChange} />
      <div className="actor-list">
        {currentActors.map((actor, index) => (
          <div key={actor.url} className="each-list">
            <ActorCard actor={actor} onDetailClick={handleDetailClick} />
            {selectedActor && selectedActor.url === actor.url && (
              <ActorDetail actor={selectedActor} onCloseDetail={handleCloseDetail} />
            )}
          </div>
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />

    </div>
  );
}

export default ActorList;

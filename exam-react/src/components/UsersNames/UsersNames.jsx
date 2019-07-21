import React from 'react';
import './usersNames.css';
import Loading from '../Loading/Loading';
import ErrorHandler from '../ErrorHandler/ErrorHandler';

const usersNames = ({ data, dataIsLoaded, getUserCard, loading, error }) =>
  loading ? (
    <Loading />
  ) : error ? (
    <ErrorHandler error={error} />
  ) : (
    dataIsLoaded && (
      <ul>
        {data.map((user, index) => (
          <li className="users-names" key={index} onClick={() => getUserCard(index)}>
            {user.name}
          </li>
        ))}
      </ul>
    )
  );

export default usersNames;

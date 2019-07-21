import React from 'react';
import './userCard.css';

const UserCard = ({ userCard, userCardIsLoaded }) =>
  userCardIsLoaded && (
    <div className="user-card">
      <img src={userCard.photo} alt="avatar" />
      <ul>
        <li>
          {userCard.name} {userCard.surname}
        </li>
        <li>Email : {userCard.email}</li>
        <li>Gender : {userCard.gender}</li>
        <li>Age: {userCard.age}</li>
        <li>Country og origin : {userCard.region}</li>
      </ul>
    </div>
  );

export default UserCard;

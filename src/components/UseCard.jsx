import React from 'react';

const UseCard = ({ user }) => {
  console.log(user);
  return (
    <article>
      <h2>{`${user.first_name} ${user.last_name}`}</h2>
      <ul>
        <li>
          <span>Email</span> {user.email}
        </li>
        <li>
          <span>Birthday</span> {user.birthday}
        </li>
      </ul>
      <i className="bx bx-trash"></i>
      <i className="bx bx-pencil"></i>
    </article>
  );
};

export default UseCard;

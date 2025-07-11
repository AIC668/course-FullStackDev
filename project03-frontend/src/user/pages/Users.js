import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Jimmy Z',
      image:
        'https://static.wikia.nocookie.net/thepokemonshow/images/8/80/20101007155439%21Ash_Pikachu.png/revision/latest?cb=20140425213328',
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;

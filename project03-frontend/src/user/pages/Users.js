import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Jimmy Z',
      image:
        'https://s.yimg.com/ny/api/res/1.2/iazCdz6X9kTDrN7FPwVOvQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTk2MDtjZj13ZWJw/https://media.zenfs.com/en/us.finance.gurufocus/528af7acf1b685a79f0a0ee8c34ab69c',
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;

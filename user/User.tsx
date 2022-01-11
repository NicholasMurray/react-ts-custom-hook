import React from 'react';

interface UserName {
  firstname: string;
  surname: string;
}

const User = ({ firstname, surname }: UserName) => {
  return (
    <div>
      {firstname} {surname}
    </div>
  );
};

export default User;

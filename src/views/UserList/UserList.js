import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

import { UsersToolbar, UsersTable } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const UserList = () => {
  const classes = useStyles();

  const [users] = useState(mockData);

  const [filteredUsers, setFilteredUsers] = useState(users);

  const [searchTerm, setSearchTerm] = useState('');

  const onSearchChange = e => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const UsersBySearch = users.filter(user => {
      return (
        user.name.toLowerCase().includes(searchTerm.toLowerCase().trim()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase().trim()) ||
        user.phone.includes(searchTerm.trim())
        // user.email.toLowerCase().includes(searchTerm.toLowerCase().trim())
      );
    });
    setFilteredUsers(UsersBySearch);
  }, [searchTerm]);

  // const filterBySearch = () => {

  // };

  console.log(filteredUsers);

  return (
    <div className={classes.root}>
      <UsersToolbar onSearchChange={onSearchChange} />
      <div className={classes.content}>
        <UsersTable
          searchTerm={searchTerm}
          users={filteredUsers}
        />
      </div>
    </div>
  );
};

export default UserList;

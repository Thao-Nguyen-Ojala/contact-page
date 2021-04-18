import { makeStyles, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import usersApi from '../api/userApi';
import ContactsHero from '../components/ContactsHero/ContactsHero';
import SkeletonContactsHero from '../components/SkeletonContactsHero/SkeletonContactsHero';
import { userDataType } from '../interfaces';

const useStyle = makeStyles(() => ({
  root: {
    margin: '1rem 0',
    padding: '1.5rem 0 2rem 0',
    borderRadius: '1rem',
  },
}));

export default function ContactListPage() {
  const classes = useStyle();
  const [userList, setUserList] = useState<userDataType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await usersApi.getAll();
        setUserList(data);
      } catch (error) {
        console.log('failed to fetch user data', error);
      }
      setLoading(false);
    })();
  }, []);

  return (
    <div>
      <Paper elevation={3} className={classes.root}>
        {loading ? <SkeletonContactsHero /> : <ContactsHero userList={userList} />}
      </Paper>
    </div>
  );
}

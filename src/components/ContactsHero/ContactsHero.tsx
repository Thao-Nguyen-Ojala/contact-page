import { Box, Grid } from '@material-ui/core';
import React from 'react';
import { userDataType } from '../../interfaces';
import ContactCard from '../ContactCard/ContactCard';

interface ContactHeroPropsType {
  userList: userDataType[];
}

export default function ContactsHero({ userList }: ContactHeroPropsType) {
  return (
    <Box>
      <Grid container>
        {userList.map((user) => (
          <Grid item key={user.id} xs={12} sm={6} md={4}>
            <ContactCard user={user} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

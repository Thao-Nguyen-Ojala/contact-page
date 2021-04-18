import { Box } from '@material-ui/core';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ContactDetailPage from './ContactDetailPage';
import ContactListPage from './ContactListPage';

export default function HomePage() {
  const match = useRouteMatch();
  return (
    <Box pt={4}>
      <Switch>
        <Route path={match.path} exact component={ContactListPage} />
        <Route path={`${match.path}/:userId`} component={ContactDetailPage} />
      </Switch>
    </Box>
  );
}

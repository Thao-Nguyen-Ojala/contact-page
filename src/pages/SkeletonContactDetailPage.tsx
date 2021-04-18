import { IconButton, Table, TableContainer, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { Skeleton } from '@material-ui/lab';
import React from 'react';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
  },

  avatar: {
    backgroundColor: '#248CFB',
    fontSize: '2rem',
    fontWeight: 'bold',
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: 'auto',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    transition: 'transform .5s',
    '&:hover': {
      transform: 'scale(1.05)',
      transition: 'transform .5s',
    },
  },

  userInfo: {
    boxShadow: '3px 3px 5px 2px rgba(170, 170, 170, .5)',
  },

  table: {
    minWidth: 350,
    backgroundColor: '#ffffff',
  },

  btn: {
    marginLeft: 0,
    textDecoration: 'none',
  },

  btnIcon: {
    marginRight: theme.spacing(0.5),
    fontSize: '1.5rem',
  },
}));

export default function SkeletonContactDetailPage() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Skeleton animation='wave' height={50} width='60%' style={{ marginBottom: 6 }} />

      <Skeleton animation='wave' variant='circle' className={classes.avatar} />

      <CardContent>
        <Paper elevation={3} className={classes.userInfo}>
          <TableContainer>
            <Table className={classes.table}>
              <Skeleton animation='wave' variant='rect' width={500} height={300} />
            </Table>
          </TableContainer>
        </Paper>
      </CardContent>
      <CardActions disableSpacing>
        <NavLink to='/users' className={classes.btn}>
          <IconButton aria-label='close page'>
            <HighlightOffIcon className={classes.btnIcon} /> <Typography>Close</Typography>
          </IconButton>
        </NavLink>
      </CardActions>
    </Card>
  );
}

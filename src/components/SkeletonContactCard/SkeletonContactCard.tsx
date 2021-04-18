import { Button, CardContent, Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Skeleton } from '@material-ui/lab';
import React from 'react';
import { useHistory } from 'react-router';
import { userDataType } from '../../interfaces';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: 345,
    marginBottom: '2rem',
    paddingTop: '1rem',
    paddingBottom: '2rem',
    color: '#70757A',

    border: 'solid 1.5px #e4e4e4',
    borderRadius: '0.5rem',

    '&:hover': {
      transform: 'scale(1.05)',
      transition: 'transform .5s',
    },
  },

  avatar: {
    backgroundColor: '#70757A',
    fontSize: '2rem',
    fontWeight: 'bold',
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: 'auto',
  },

  content: {},

  name: {
    fontWeight: 'bold',
    fontSize: '1.2rem',
  },
  username: {},
  website: {
    textDecoration: 'underline',
    color: '#248CFB',
  },

  button: {
    border: '1px solid #248CFB',
    borderRadius: '0.5rem',
    backgroundColor: '#248CFB',
    padding: '0.5rem 1.5rem',
    color: 'white',

    '&:hover': {
      border: '#70757A',
      cursor: 'pointer',
      backgroundColor: '#70757A',
    },
  },
}));

export default function ContactCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Skeleton animation='wave' variant='circle' className={classes.avatar} />
      <CardContent className={classes.content}>
        <Skeleton animation='wave' height={20} width='80%' style={{ marginBottom: 6 }} className={classes.name} />
        <Skeleton animation='wave' height={15} width='80%' style={{ marginBottom: 4 }} className={classes.username} />
        <Skeleton animation='wave' height={15} width='80%' style={{ marginBottom: 6 }} className={classes.website} />
      </CardContent>

      <Skeleton variant='rect' width={148} height={25} className={classes.button} />
    </Card>
  );
}

import { Button, CardContent, Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import { makeStyles, Theme } from '@material-ui/core/styles';
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

interface ContactCardPropsType {
  user: userDataType;
}

export default function ContactCard({ user }: ContactCardPropsType) {
  const classes = useStyles();
  const history = useHistory();

  const firstLetterOfUserName = (userName: string) => {
    return userName.charAt(0);
  };

  const handleButtonClick = () => {
    history.push(`/users/${user.id}`);
  };

  return (
    <Card className={classes.root}>
      <Avatar aria-label='recipe' className={classes.avatar}>
        {firstLetterOfUserName(user.name)}
      </Avatar>
      <CardContent className={classes.content}>
        <Typography className={classes.name}>{user.name}</Typography>
        <Typography className={classes.username} variant='body2'>{`@${user.username}`}</Typography>
        <Typography className={classes.website} variant='body2'>
          {user.website}
        </Typography>
      </CardContent>

      <Button className={classes.button} onClick={handleButtonClick}>
        More Detail
      </Button>
    </Card>
  );
}

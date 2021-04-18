import {
  Avatar,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import usersApi from '../api/userApi';
import { userDataType, userParamsType } from '../interfaces';
import SkeletonContactDetailPage from './SkeletonContactDetailPage';

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
  },

  row: {
    '&:hover': {
      transform: 'scale(1.05)',
      transition: 'transform .5s',
    },
  },

  addTable: {
    width: 250,
    padding: 0,
    marginRight: 0,
  },

  addCellTitle: {
    paddingLeft: 0,
  },

  addCellDetail: {
    paddingLeft: theme.spacing(6),
    paddingRight: 0,
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

export default function ContactDetailPage() {
  const classes = useStyles();
  const { userId } = useParams<userParamsType>();

  const [user, setUser] = useState<userDataType>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await usersApi.get(userId);
        setUser(data);
      } catch (error) {
        console.log('Failed to fetch user data', error);
      }
      setLoading(false);
    })();
  }, [userId]);

  if (!user) return <p> No selected user</p>;

  const firstLetterOfUserName = (userName: string) => {
    return userName.charAt(0);
  };

  return loading ? (
    <SkeletonContactDetailPage />
  ) : (
    <Card className={classes.root}>
      <Typography variant='h4'>{user.name}</Typography>

      <Avatar aria-label='contact' className={classes.avatar}>
        {user && firstLetterOfUserName(user.name)}
      </Avatar>

      <CardContent>
        <Paper elevation={3} className={classes.userInfo}>
          <TableContainer>
            <Table className={classes.table}>
              {user && (
                <TableBody>
                  <TableRow key={user.id} className={classes.row}>
                    <TableCell component='th' scope='row'>
                      <Typography>Username</Typography>
                    </TableCell>
                    <TableCell align='right'>
                      <Typography>{user.username}</Typography>
                    </TableCell>
                  </TableRow>

                  <TableRow className={classes.row}>
                    <TableCell component='th' scope='row'>
                      <Typography>Email</Typography>
                    </TableCell>
                    <TableCell align='right'>
                      <Typography>{user.email}</Typography>
                    </TableCell>
                  </TableRow>

                  <TableRow className={classes.row}>
                    <TableCell component='th' scope='row'>
                      <Typography>Phone</Typography>
                    </TableCell>
                    <TableCell align='right'>
                      <Typography>{user.phone}</Typography>
                    </TableCell>
                  </TableRow>

                  <TableRow className={classes.row}>
                    <TableCell component='th' scope='row'>
                      <Typography>Company</Typography>
                    </TableCell>
                    <TableCell align='right'>
                      <Typography>{user.company.name}</Typography>
                    </TableCell>
                  </TableRow>

                  <TableRow className={classes.row}>
                    <TableCell component='th' scope='row'>
                      <Typography>Website</Typography>
                    </TableCell>
                    <TableCell align='right'>
                      <Typography>{user.website}</Typography>
                    </TableCell>
                  </TableRow>

                  <TableRow className={classes.row}>
                    <TableCell component='th' scope='row'>
                      <Typography> Address</Typography>
                    </TableCell>
                    <Table className={classes.addTable}>
                      <TableBody>
                        <TableCell>
                          <TableRow>
                            <TableCell align='left' className={classes.addCellTitle}>
                              <Typography> Street </Typography>
                            </TableCell>
                            <TableCell align='right' className={classes.addCellDetail}>
                              <Typography> {user.address.street} </Typography>
                            </TableCell>
                          </TableRow>

                          <TableRow>
                            <TableCell align='left' className={classes.addCellTitle}>
                              <Typography> Suite </Typography>
                            </TableCell>
                            <TableCell align='right' className={classes.addCellDetail}>
                              <Typography> {user.address.suite} </Typography>
                            </TableCell>
                          </TableRow>

                          <TableRow>
                            <TableCell align='left' className={classes.addCellTitle}>
                              <Typography> City </Typography>
                            </TableCell>
                            <TableCell align='right' className={classes.addCellDetail}>
                              <Typography> {user.address.city} </Typography>
                            </TableCell>
                          </TableRow>

                          <TableRow>
                            <TableCell align='left' className={classes.addCellTitle}>
                              <Typography> Zipcode </Typography>
                            </TableCell>
                            <TableCell align='right' className={classes.addCellDetail}>
                              <Typography> {user.address.zipcode} </Typography>
                            </TableCell>
                          </TableRow>
                        </TableCell>
                      </TableBody>
                    </Table>
                  </TableRow>
                </TableBody>
              )}
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

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: 400,
    margin: '0 auto',
    marginTop: '5em'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing(1),
    marginTop: "3em"
  }
  
}));


const AddForm = ({onRouteChange}) => {
  const classes = useStyles();
  
  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="name"
        label="Name"
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="email"
        label="Email"
        className={classes.textField}
        margin="normal"
      />
        <Button variant="contained" color="secondary" 
        className={classes.button}
        onClick={()=> onRouteChange('home')}>
        Add contact
      </Button>
    </form>
  );
}

export default AddForm;
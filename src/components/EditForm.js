import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';


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
  div: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: "1em"
  },
  fab: {
    marginRight: '2em'
  }
}));


const EditForm = () => {
  const classes = useStyles();
  
  return (
    // const { name, email, phone } = this.state;
    <form className={classes.container} noValidate autoComplete="off" >

      <TextField
        id="name"
        label="Name"
        // value = {}
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="email"
        label="Email"
        // value = {}
        className={classes.textField}
        margin="normal"
      />
      <div className={classes.div}>
        <Fab color="secondary" aria-label="edit" className={classes.fab}>
          <EditIcon />
        </Fab>
      </div>
        
    </form>
  );
}

export default EditForm;
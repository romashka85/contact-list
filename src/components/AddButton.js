import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
    fab: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    }
    
  }));


const AddButton = ({onRouteChange}) => {
    const classes = useStyles();
    return (
        <div style={{display: 'inline-block', margin: "1em"}}>
        <h2 style={{display: 'inline-block', marginRight: '0.5em'}}>Please add your new contact</h2>
        <Fab color="primary" aria-label="add" className={classes.fab} onClick={()=> onRouteChange('addForm')}>
          <AddIcon />
        </Fab>
      </div>
    )
    
}

export default AddButton;
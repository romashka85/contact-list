import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./Contact.css";
import { contacts } from '../contacts.json';

const useStyles = makeStyles({
    card: {
      minWidth: 275,
      margin: "1em",
      padding: "4em",
      display: 'inline-block',
      backgroundColor: "#E9F1F8"

    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    mar: {
      margin: 50,
    }
  });

const Contact = ({onRouteChange}) => {
    const classes = useStyles();
    
    return (
     <div>
       {
         contacts.map(contact => {
           return (
              <Card className={classes.card} key={contact.id} id={contact.id}>
                <CardContent>
                  <Typography className={classes.pos} variant="h5" component="h2">
                    {contact.name}
                  </Typography>
                  <Typography  color="textSecondary" component="p">
                    {contact.email}
                  </Typography>
                  
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary"
                    onClick={()=>onRouteChange('editForm')}>
                    View Contact
                  </Button>
                  <Button size="small" color="secondary">Delete Contact</Button>
                </CardActions>
              </Card>
           )
         })
        
       }
        </div>
      );
}

export default Contact;
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './RegisterButton.css';

//STYLING
const styles = theme => ({

   signInButton: {
      margin: '0px',
      backgroundColor: 'teal',
      width: '117px',
      height: '40px',
      borderRadius: '35px',
      fontSize: '16px',
      letterSpacing: '1.5px'
   },
});

function RegisterButton(props) {
   const { classes } = props;
   return (
      <div>
         <Link to='/register' style={{textDecoration: 'none'}}>
            <Button
               variant="contained"
               color="secondary"
               className={classes.signInButton}>
               Sign Up
            </Button>
         </Link>
      </div>
   );
   }

   RegisterButton.propTypes = {
   classes: PropTypes.object.isRequired,
   };

export default withStyles(styles)(RegisterButton);


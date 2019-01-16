import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
   addButton: {
      margin: theme.spacing.unit,
      backgroundColor: 'teal'
   },
   extendedIcon: {
      marginRight: theme.spacing.unit,
   },
   });

   function AddButton(props) {
   const { classes } = props;
   return (
      <div className='add'>
         <Fab color="primary" aria-label="Add" className={classes.addButton}>
         <AddIcon />
         </Fab>
      </div>
   );
   }
   
   AddButton.propTypes = {
   classes: PropTypes.object.isRequired,
   };

export default withStyles(styles)(AddButton);
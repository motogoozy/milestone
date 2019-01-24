import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './DatePicker.scss';


const styles = theme => ({
   container: {
      display: 'flex',
      flexWrap: 'wrap',
   },
   textField: {

   },
   });


   function DatePicker(props) {
      const { classes } = props;

      return (
         <form className={classes.container} noValidate >
            <TextField
            id="date"
            label="Date"
            type="date"
            className='date-picker'
            onChange={(e)=> props.handleDateChange(e.target.value)}
            InputLabelProps={{
               shrink: true,
            }}
            />
         </form>
      );
   }

   DatePicker.propTypes = {
      classes: PropTypes.object.isRequired,
   };

export default withStyles(styles)(DatePicker);
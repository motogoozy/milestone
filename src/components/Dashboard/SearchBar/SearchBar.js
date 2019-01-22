import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
   container: {
      display: 'flex',
      flexWrap: 'wrap',
   },
   textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 250,
   },
   dense: {
      marginTop: 19,
   },
   menu: {
      width: 200,
   },
   });



   class TextFields extends Component {
      constructor(props) {
         super(props);
         this.state = {
         }
      }


   render() {
      const { classes } = this.props;

      return (
         <form className={classes.container} noValidate autoComplete="off">
            <TextField
               id="standard-with-placeholder"
               label="Search"
               placeholder="Name, description, location, etc."
               className={classes.textField}
               margin="normal"
               onChange={ (e) => this.props.handleSearch(e.target.value)}
            />
         </form>
      );
   }
   }

   TextFields.propTypes = {
   classes: PropTypes.object.isRequired,
   };

export default withStyles(styles)(TextFields);
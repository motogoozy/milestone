import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const styles = theme => ({
   colorSwitchBase: {
      color: 'teal',
      '&$colorChecked': {
         color: 'teal',
         '& + $colorBar': {
         backgroundColor: 'teal',
         },
      },
   },
   colorBar: {},
   colorChecked: {},
   });

   class SortToggle extends React.Component {
      constructor(props) {
         super(props);
         this.state = {
         };
      }


   render() {
      const { classes } = this.props;

      return (
         <FormGroup row>
         <FormControlLabel
            control={
               <Switch
               checked={this.props.sortAsc}
               onChange={this.props.handleSortToggle}
               value="checkedA"
               classes={{
                  switchBase: classes.colorSwitchBase,
                  checked: classes.colorChecked,
                  bar: classes.colorBar,
               }}
               />
            }
            label="Sort by Oldest Added"
         />
         </FormGroup>
      );
   }
   }

   SortToggle.propTypes = {
   classes: PropTypes.object.isRequired,
   };

export default withStyles(styles)(SortToggle);
import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from './Card';

describe('Card', () => {
   test('should set toggleEdit on state to true', () => {
      const component = shallow(<Card />);

      component.find('.lower-button').at(0).simulate('click');
      
      expect(component.state('toggleEdit')).toEqual(true)
   })
})
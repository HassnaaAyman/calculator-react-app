import React from 'react';
import { shallow } from 'enzyme';
import Calc from './calc';

describe('<Calc />', () => {
  test('renders', () => {
    const wrapper = shallow(<Calc />);
    expect(wrapper).toMatchSnapshot();
  });
});

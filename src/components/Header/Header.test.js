import React from 'react';
import renderer from 'react-test-renderer';

import Header from './Header';
import { withMemoryRouter } from 'utils';

describe('<Header />', () => {
  it('renders correctly', () => {
    const RoutedHeader = withMemoryRouter(Header);
    const component = renderer.create(<RoutedHeader />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
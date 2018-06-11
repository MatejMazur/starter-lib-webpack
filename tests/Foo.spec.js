import React from 'react';
import { render } from 'react-dom';

import Foo from '../src';

it('should render', () => {
  render(<Foo />, document.createElement('div'));
});

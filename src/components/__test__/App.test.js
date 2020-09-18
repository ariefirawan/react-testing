import React from 'react';
import ReactDom from 'react-dom';

import App from '../App';

it('show a comment box', () => {
  const div = document.createElement('div');

  ReactDom.render(<App />, div);

  expect(div.innerHTML).toContain('Comment Box');

  ReactDom.unmountComponentAtNode(div);
});

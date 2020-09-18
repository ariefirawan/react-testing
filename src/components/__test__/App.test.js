import React from 'react';
import ReactDom from 'react-dom';

import App from '../App';

it('show a comment box', () => {
  const div = document.create('div');

  ReactDom.render(<App />, div);
  ReactDom.unmountComponentAtNode(div);
});

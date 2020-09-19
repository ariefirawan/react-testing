import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

it('show a comment box', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.find(CommentBox).length).toEqual(1);
  // ReactDom.render(<App />, div);
  // expect(div.innerHTML).toContain('Comment Box');
  // ReactDom.unmountComponentAtNode(div);
});

it('shows a comment list', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.find(CommentList).length).toEqual(1);
});

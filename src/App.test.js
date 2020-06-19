import React from 'react';
import { render } from '@testing-library/react';
import BoxContainer from './components/BoxContainer';
import {
  getFileType
} from './utils/utils'

// check if BoxContainer render correctly
test('BoxContainer render correctly', () => {
  const { getByText } = render(<BoxContainer />);
  const linkElement = getByText(/Loading/i);
  expect(linkElement).toBeInTheDocument();
});

// test getFileType function 
test('getFileType function', () => {
  expect(getFileType('www.xxx.jpg')).toEqual('image');
  expect(getFileType('www.xxx.png')).toEqual('image');
  expect(getFileType('www.xxx.gif')).toEqual('image');
  expect(getFileType('www.xxx.mp4')).toEqual('video');
  expect(getFileType('www.xxx.mp3')).toEqual('invalid');
});


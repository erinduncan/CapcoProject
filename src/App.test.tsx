import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import AppComponent from './App';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

const FindByTestAttr = (wrapper:any, val:any) => {
  return wrapper.find(`[data-test="${val}"]`);
}

const mainSetup = (props = {}, state = null) => {
  const image = shallow(<App {...props}/>)
  return image;
}

test('', () => {
  const image = mainSetup();
  const appComponent = FindByTestAttr(image, 'main-content');
  expect(appComponent.length).toBe(1);
})


test('renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppComponent/>, div);
  ReactDOM.unmountComponentAtNode(div);
})

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

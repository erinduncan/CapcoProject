import Image from './Image';
import { shallow } from 'enzyme';
import React from 'react';

const setup = (props={}, state = 0) => {
    const image = shallow(<Image {...props}/>)
    if (state) image.setState(state);
    return image;
}

const FindByTestAttr = (wrapper:any, val:any) => {
    return wrapper.find(`[data-test="${val}"]`);
}

test('renders without error', () => {
    const image = setup();
    // Find element with data-test
    const appComponent = FindByTestAttr(image, 'main-content');
    expect(appComponent.length).toBe(1);
})
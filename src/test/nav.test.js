import React from 'react';
import Enzyme from 'enzyme';
import { Nav } from '../components/nav';
import { shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<Nav/>', ()=>{
  it('Has a length of one', ()=>{
     const wrapper = shallow(<Nav />);
     expect(wrapper).toHaveLength(1);
     expect(wrapper.find('.newsPaper')).toHaveLength(1);
  });
  
  it('should contain a font aweasome icon', ()=>{
    const wrapper = shallow(<Nav />);
    expect(wrapper).toHaveLength(1);
    expect(wrapper.exists('.newsPaper')).toBeTruthy();
 });
});
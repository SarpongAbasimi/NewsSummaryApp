import React from 'react';
import Enzyme from 'enzyme';
import { Body } from '../components/body';
import { shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { apiKey } from '../config';
Enzyme.configure({ adapter: new Adapter() });

describe('<Body/>', ()=>{

  it('when the component mounts it fetches data from the guardian', (done)=>{
    const mockedResponse = {"page": 1, "total_results": 19840},
    mockedPromise = Promise.resolve(mockedResponse),
    mockfetch = Promise.resolve({
      json: ()=> mockedPromise
    });
    jest.spyOn(global, 'fetch').mockImplementation(() =>  mockfetch )

    const wrapper = shallow(<Body/>);
    const uri = apiKey.guardian;
    expect(global.fetch).toHaveBeenCalledTimes(1)
    expect(global.fetch).toHaveBeenCalledWith(uri);
    
    process.nextTick(()=> {
    expect(wrapper.find('Na')).toBeTruthy();
    global.fetch.mockClear()
    done();
    });
    done()
  });

});
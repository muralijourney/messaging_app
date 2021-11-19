/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import Login from '../src/Login'
import { act, renderHook } from "@testing-library/react-hooks";
import renderer from 'react-test-renderer';
import Enzyme,{ shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import gesture from 'react-native-gesture-handler';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'


Enzyme.configure({adapter:new Adapter()})


beforeAll(() => { 
  jest.mock('react-native-gesture-handler');
});

it('renders correctly', async ()  =>  {
  const initialState = { output: 10 }
  const mockStore = configureStore()
  let store, wrapper
  store = mockStore(initialState)
  const { getByTestId ,getByText} = render(<Provider store={store}><App /></Provider>)
  const flatList = await getByTestId('userList');// this throws error since flat list is still not shown, and loading is showing instead

 
  console.log(".......................,..>>>>>......"+flatList.children);

 // const tree = renderer.create(<App />).toJSON();
  // const treeValue = getByTestId('userList').children;
  // console.log("ds>>>>>>>>>>>>>>"+treeValue)
  // for(var i=0;i<treeValue.length;i++){
  //   console.log("ds>>>>>>>>>>>>>>2"+treeValue[i])
  // }
  // fireEvent.press(getByText("Murali"))
  // expect(getByText("Murali")).toHaveBeenCalled();

  //expect(getByTestId('userList').children.length).toBe(1);;

  // const tree = renderer.create(<Login />).toJSON();
  // const {getByTestId,getByPlaceholderText} = render(<Login/>)
  // expect(getByTestId('userList')).toBeDefined();
  // expect(tree).toMatchSnapshot();
});



// describe('Login',()=>{
//    let wrapper;

//   //  beforeEach(()=>{
//   //    wrapper = shallow(<App />)
//   //  })

//   it('works', () => {
//     //  expect(2+2).toEqual(4);
//     const tree = renderer.create(<App />).toJSON();

//   });
// });

// import * as redux from "react-redux";
// describe('dispatch mock', function(){    
//     it('should mock dispatch', function(){
//       const spy = jest.spyOn(redux, 'useSelector')
//       spy.mockReturnValue({ username:'test' })
                
//     })
// });


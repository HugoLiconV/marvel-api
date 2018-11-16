import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import configureStore from 'redux-mock-store'; // Smart components
import thunk from "redux-thunk";

configure({adapter: new Adapter()});

const mockStore = configureStore([thunk])
export default mockStore;
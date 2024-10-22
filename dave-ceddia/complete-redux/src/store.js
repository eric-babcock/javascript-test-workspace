import { createStore } from 'redux';
import reducer from './components/counters/reducers/reducer'


const store = createStore(reducer);

export default store;
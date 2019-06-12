import { createStore } from 'Redux';
import Reducers from './reducers/Reducers';

const store = createStore(Reducers);

export default store;

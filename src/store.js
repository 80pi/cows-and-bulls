import { createStore } from "redux"
import reducer from './redux/reducers/rootReducer';

const store = createStore(reducer)
export default store
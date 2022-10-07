import { combineReducers, createStore, } from 'redux'
import reducer from './reducer'

//const store=createStore(reducer)
//export default store;


const combreducer = combineReducers({
 loggedin: reducer
});

const store = createStore(combreducer)

console.log(store)
export default store;
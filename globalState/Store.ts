import { createStore, applyMiddleware, compose, Store } from 'redux';
import {createWrapper, Context, HYDRATE} from 'next-redux-wrapper';
import reducer from './Reducer';
import { subTitle } from './Actions';


const makeStore = (context: Context) => createStore(reducer);

export const wrapper = createWrapper<Store<subTitle>>(makeStore, {debug: false});


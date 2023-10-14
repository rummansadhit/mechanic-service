// store.ts
import { createStore, compose, Store, AnyAction } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { createFirestoreInstance, firestoreReducer, getFirestore } from 'redux-firestore';

import 'firebase/auth';
import 'firebase/firestore';
import { firebaseConfig } from './firebaseConfig';
import { initializeApp } from "firebase/app";
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import 'firebase/compat/auth'
import firebase from 'firebase/compat/app';
import thunk, { ThunkDispatch, ThunkMiddleware } from 'redux-thunk';
import { getFirebase } from 'react-redux-firebase';


firebase.initializeApp(firebaseConfig);


const rootReducer = combineReducers( {
    firebase: firebaseReducer
  });
  
  export const store = configureStore({reducer: rootReducer});
  
  const initialState = {}


  

  export const rrfProps = {
    firebase,
    config: {},
    dispatch: store.dispatch
   
  };

//types

import {
  configureStore,
  createAction,
  createReducer,
  PayloadAction,
  combineReducers,
  Action
} from '@reduxjs/toolkit';
import { User } from '../models/User.model';
import { TrainingPlan } from '../models/TrainingPlan';
import { CustomisedExercise } from '../models/CustomisedExercise.model';
import { useDispatch } from 'react-redux';


export const SET_EMAIL = 'SET_EMAIL';
export const SET_PASSWORD = 'SET_PASSWORD';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const SET_USER = 'SET_USER';
export const LOGOUT= 'LOGOUT';

export const SET_TRAINING_PLAN = 'SET_TRAINING_PLAN';
export const SET_EXERCISE_COMPLETED = 'SET_EXERCISE_COMPLETED';
export const SET_EXERCISE_INCOMPLETE = 'SET_EXERCISE_INCOMPLETE';
export const SET_SELECTED_EXERCISE = 'SET_SELECTED_EXERCISE';

export const setEmail = createAction<string>(SET_EMAIL);
export const setPassword = createAction<string>(SET_PASSWORD);
export const loginSuccess = createAction(LOGIN_SUCCESS);
export const loginFail = createAction(LOGIN_FAIL);
export const setUser = createAction<User>(SET_USER);
export const logout = createAction(LOGOUT);

export const setTrainingPlan = createAction<TrainingPlan>(SET_TRAINING_PLAN);
export const setExerciseCompleted = createAction<CustomisedExercise>(SET_EXERCISE_COMPLETED);
export const setExerciseIncomplete = createAction<CustomisedExercise>(SET_EXERCISE_INCOMPLETE);
export const setSelectedExercise = createAction<CustomisedExercise>(SET_SELECTED_EXERCISE);

interface AuthState { email: string, password: string, loggedIn: boolean, showError: boolean, user?: User}

const authInitialState: AuthState = {email: '', password: '', loggedIn: false, showError: false, user: undefined};

const authReducer = createReducer(authInitialState, {
  SET_EMAIL(state: AuthState, action: PayloadAction<string>){ state.email = action.payload},
  SET_PASSWORD(state: AuthState, action: PayloadAction<string>){ state.password = action.payload},
  LOGIN_SUCCESS(state: AuthState, _:Action){ state.loggedIn = true; state.email = '', state.password = ''; state.showError = false; },
  LOGIN_FAIL(state: AuthState, _:Action){ state.showError = true},
  SET_USER(state: AuthState, action:PayloadAction<User>){ state.user = action.payload},
  LOGOUT(state: AuthState, _:Action){ state = authInitialState; }
})
interface WorkoutState {  trainingPlan?: TrainingPlan,  selectedExercise?: CustomisedExercise, }

const workoutInitialState: WorkoutState = {
  trainingPlan: {
    assignee: {
      birthdate: '1.2.3',
      firstname: 'Bas',
      id: '1234',
      images: ['https://via.placeholder.com/300', 'https://via.placeholder.com/300', 'https://via.placeholder.com/300'],
      lastname: 'Yuksel',
      startWeight: 100
    },
    assigner: {
      id: '5676',
      name: 'Jessica',
      image: 'https://via.placeholder.com/300',
    },
    workoutSessions: [{
      day: 0,
      exercises: [{
        reps: 20,
        completed: false,
        description: 'just do it',
        id: '123',
        images: ['https://via.placeholder.com/300', 'https://via.placeholder.com/300', 'https://via.placeholder.com/300'],
        name: 'Push Ups',
        videos: []
      },
      {
        reps: 100,
        completed: false,
        description: 'just do it',
        id: '3345',
        images: ['https://via.placeholder.com/300', 'https://via.placeholder.com/300', 'https://via.placeholder.com/300'],
        name: 'Sit Ups',
        videos: []
      },
      {
        duration: 45,
        completed: false,
        description: 'just do it',
        id: '33435',
        images: ['https://via.placeholder.com/300', 'https://via.placeholder.com/300', 'https://via.placeholder.com/300'],
        name: 'Planking',
        videos: []
      }]
    }]
  }
};

const workoutReducer = createReducer(workoutInitialState, {
  SET_TRAINING_PLAN(state: WorkoutState, action: PayloadAction<TrainingPlan>){ state.trainingPlan = action.payload},
  SET_EXERCISE_COMPLETED(state: WorkoutState, action: PayloadAction<CustomisedExercise>){
    state.trainingPlan?.workoutSessions[0].exercises.forEach((exercise:CustomisedExercise)=> {if(exercise.id === action.payload.id){ exercise.completed = true;}})
    console.log('payload', action.payload);
    if(state.selectedExercise )state.selectedExercise.completed = true;
    },
  SET_EXERCISE_INCOMPLETE(state: WorkoutState, action: PayloadAction<CustomisedExercise>){
     state.trainingPlan?.workoutSessions[0].exercises.forEach((exercise:CustomisedExercise)=> {if(exercise.id === action.payload.id){ exercise.completed = false;}})
     console.log('payload', action.payload);
     if(state.selectedExercise) state.selectedExercise.completed = false;

    },
  LOGOUT(state: WorkoutState, _: Action){ state = workoutInitialState },
  SET_SELECTED_EXERCISE(state: WorkoutState, action: PayloadAction<CustomisedExercise>){ state.selectedExercise = action.payload; console.log('used', action.payload, 'state became', state.selectedExercise);
  },
})

const rootReducer =  combineReducers({
  auth: authReducer,
  workout: workoutReducer,
})

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export type RootState = ReturnType<typeof rootReducer>;
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


export const SET_EMAIL = 'auth/SET_EMAIL';
export const SET_PASSWORD = 'auth/SET_PASSWORD';
export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
export const LOGIN_FAIL = 'auth/LOGIN_FAIL';
export const SET_USER = 'auth/SET_USER';
export const LOGOUT= 'auth/LOGOUT';

export const SET_TRAINING_PLAN = 'workout/SET_TRAINING_PLAN';
export const SET_EXERCISE_COMPLETED = 'workout/SET_EXERCISE_COMPLETED';
export const SET_EXERCISE_INCOMPLETE = 'workout/SET_EXERCISE_INCOMPLETE';

export const setEmail = createAction<string>(SET_EMAIL);
export const setPassword = createAction<string>(SET_PASSWORD);
export const loginSuccess = createAction(LOGIN_SUCCESS);
export const loginFail = createAction(LOGIN_FAIL);
export const setUser = createAction<User>(SET_USER);
export const logout = createAction(LOGOUT);

export const setTrainingPlan = createAction<TrainingPlan>(SET_TRAINING_PLAN);
export const setExerciseCompleted = createAction<CustomisedExercise>(SET_EXERCISE_COMPLETED);
export const setExerciseIncomplete = createAction<CustomisedExercise>(SET_EXERCISE_INCOMPLETE);

interface AuthState {
  email: string, password: string, loggedIn: boolean, showError: boolean, user?: User
}

const authInitialState: AuthState = {email: '', password: '', loggedIn: false, showError: false, user: undefined};

const authReducer = createReducer(authInitialState, {
  SET_EMAIL(state: AuthState, action: PayloadAction<string>){ state.email = action.payload},
  SET_PASSWORD(state: AuthState, action: PayloadAction<string>){ state.password = action.payload},
  LOGIN_SUCCESS(state: AuthState, _:Action){ state.loggedIn = true; state.email = '', state.password = ''; state.showError = false; },
  LOGIN_FAIL(state: AuthState, _:Action){ state.showError = true},
  SET_USER(state: AuthState, action:PayloadAction<User>){ state.user = action.payload},
  LOGOUT(state: AuthState, _:Action){ state = authInitialState; }
})
interface WorkoutState {
  trainingPlan?: TrainingPlan,
}

const workoutInitialState: WorkoutState = {};

const workoutReducer = createReducer(workoutInitialState, {
  SET_TRAINING_PLAN(state: WorkoutState, action: PayloadAction<TrainingPlan>){ state.trainingPlan = action.payload},
  SET_EXERCISE_COMPLETED(state: WorkoutState, action: PayloadAction<CustomisedExercise>){ /* find exercise for today's workout, and set it completed */},
  SET_EXERCISE_INCOMPLETE(state: WorkoutState, action: PayloadAction<CustomisedExercise>){ /* find exercise for today's workout, and set it completed */},
  LOGOUT(state: WorkoutState, _: Action){ state = workoutInitialState },
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
import { User } from "../models/User.model";
import { createReducer, PayloadAction, Action, combineReducers } from "@reduxjs/toolkit";
import { TrainingPlan } from "../models/TrainingPlan";
import { CustomisedExercise } from "../models/CustomisedExercise.model";
import mockTrainingPlan from '../../mocks/mockTrainingPlan.json';

interface AuthState { email: string, password: string, loggedIn: boolean, showError: boolean, user?: User }

const authInitialState: AuthState = { email: '', password: '', loggedIn: false, showError: false, user: undefined };

const authReducer = createReducer(authInitialState, {
  SET_EMAIL(state: AuthState, action: PayloadAction<string>) { state.email = action.payload },
  SET_PASSWORD(state: AuthState, action: PayloadAction<string>) { state.password = action.payload },
  LOGIN_SUCCESS(state: AuthState, _: Action) { state.loggedIn = true; state.email = '', state.password = ''; state.showError = false; },
  LOGIN_FAIL(state: AuthState, _: Action) { state.showError = true },
  SET_USER(state: AuthState, action: PayloadAction<User>) { state.user = action.payload },
  LOGOUT(state: AuthState, _: Action) { state = authInitialState; },
  LOGIN(state: AuthState, _: Action) {
    // Login mock, convert to thunk later, with setTimeout async promise
    if (Math.random() < 0.5) {
      state.showError = true;
      state.loggedIn = false;
    } else {
      state.showError = false;
      state.loggedIn = true
    }
  },
})

interface WorkoutState { trainingPlan?: TrainingPlan, selectedExercise?: CustomisedExercise, selectedDayIndex: number }

const workoutInitialState: WorkoutState = {
  trainingPlan: mockTrainingPlan,
  selectedDayIndex: new Date().getDay(), // today's day index
};

const workoutReducer = createReducer(workoutInitialState, {
  SET_TRAINING_PLAN(state: WorkoutState, action: PayloadAction<TrainingPlan>) { state.trainingPlan = action.payload },
  SET_EXERCISE_COMPLETED(state: WorkoutState, action: PayloadAction<CustomisedExercise>) {
    // would be easier with reference, just mutate the model
    state.trainingPlan?.workoutSessions[state.selectedDayIndex].exercises.forEach((exercise: CustomisedExercise) => { if (exercise.id === action.payload.id) { exercise.completed = true; } })
    if (state.selectedExercise) state.selectedExercise.completed = true;
  },
  SET_EXERCISE_INCOMPLETE(state: WorkoutState, action: PayloadAction<CustomisedExercise>) {
    // would be easier with reference, just mutate the model
    state.trainingPlan?.workoutSessions[state.selectedDayIndex].exercises.forEach((exercise: CustomisedExercise) => { if (exercise.id === action.payload.id) { exercise.completed = false; } })
    if (state.selectedExercise) state.selectedExercise.completed = false;
  },
  LOGOUT(state: WorkoutState, _: Action) { state = workoutInitialState },
  SET_SELECTED_EXERCISE(state: WorkoutState, action: PayloadAction<CustomisedExercise>) { state.selectedExercise = action.payload },
  SET_SELECTED_DAY_INDEX(state: WorkoutState, action: PayloadAction<number>) { state.selectedDayIndex = action.payload },
})

export const rootReducer = combineReducers({
  auth: authReducer,
  workout: workoutReducer,
})
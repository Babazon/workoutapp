import { User } from "../models/User.model";
import { createReducer, PayloadAction, Action, combineReducers } from "@reduxjs/toolkit";
import { TrainingPlan } from "../models/TrainingPlan";
import { CustomisedExercise } from "../models/CustomisedExercise.model";
import { getWeek } from "../../util/getWeekIndex";
import trainingPlan from "../../mocks/mockTrainingPlan";
import { findAndToggleExercise } from "../../util/findAndtoggleExercise";

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

export interface WorkoutState { trainingPlan?: TrainingPlan, selectedExercise?: CustomisedExercise, selectedDayIndex: number, selectedWeekIndex: number, selectedYear: number, sessionActive: boolean }

const workoutInitialState: WorkoutState = {
  trainingPlan: trainingPlan,
  selectedDayIndex: new Date().getDay() - 1, // today's day index, starting monday
  selectedWeekIndex: getWeek(new Date()), // current week index
  selectedYear: new Date().getFullYear(),
  sessionActive: false
};


const workoutReducer = createReducer(workoutInitialState, {
  SET_TRAINING_PLAN(state: WorkoutState, action: PayloadAction<TrainingPlan>) { state.trainingPlan = action.payload },
  SET_EXERCISE_COMPLETED(state: WorkoutState, action: PayloadAction<CustomisedExercise>) {
    // would be easier with reference, just mutate the model
    state = findAndToggleExercise(state, action.payload, true);
    if (state.selectedExercise) state.selectedExercise.completed = true;
  },
  SET_EXERCISE_INCOMPLETE(state: WorkoutState, action: PayloadAction<CustomisedExercise>) {
    state = findAndToggleExercise(state, action.payload, false);
    if (state.selectedExercise) state.selectedExercise.completed = false;
  },
  LOGOUT(state: WorkoutState, _: Action) { state = workoutInitialState },
  SET_SELECTED_EXERCISE(state: WorkoutState, action: PayloadAction<CustomisedExercise>) { state.selectedExercise = action.payload },
  SET_SELECTED_DAY_INDEX(state: WorkoutState, action: PayloadAction<number>) { state.selectedDayIndex = action.payload },
  SET_SELECTED_WEEK_INDEX(state: WorkoutState, action: PayloadAction<number>) {
    // incrementing week must also increment or decrement year
    if (action.payload > 52) {
      state.selectedWeekIndex = 1;
      state.selectedYear = state.selectedYear + 1;
    } else if (action.payload < 1) {
      state.selectedWeekIndex = 52
      state.selectedYear = state.selectedYear - 1;
    } else {
      state.selectedWeekIndex = action.payload
    }
  },
  SET_SELECTED_YEAR(state: WorkoutState, action: PayloadAction<number>) {
    state.selectedYear = action.payload
  },
  SET_SESSION_ACTIVE(state: WorkoutState, action: Action) {
    // start session sets day to today. you can't to tomorrow's session
    state.selectedDayIndex = new Date().getDay() - 1;
    state.selectedWeekIndex = getWeek(new Date());
    state.selectedYear = new Date().getFullYear();
    state.sessionActive = true;
  },
  SET_SESSION_INACTIVE(state: WorkoutState, action: Action) {
    state.sessionActive = false;
  }
})

export const rootReducer = combineReducers({
  auth: authReducer,
  workout: workoutReducer,
})
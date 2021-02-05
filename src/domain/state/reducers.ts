import { User } from "../models/User.model";
import { createReducer, PayloadAction, Action, combineReducers } from "@reduxjs/toolkit";
import { TrainingPlan } from "../models/TrainingPlan";
import { CustomisedExercise } from "../models/CustomisedExercise.model";
import { getWeek } from "../../util/getWeekIndex";
import { WorkoutSession } from "../models/WorkoutSession.model";
import trainingPlan from "../../mocks/mockTrainingPlan";

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

interface WorkoutState { trainingPlan?: TrainingPlan, selectedExercise?: CustomisedExercise, selectedDayIndex: number, selectedWeekIndex: number, selectedYear: number }

const workoutInitialState: WorkoutState = {
  trainingPlan: trainingPlan,
  selectedDayIndex: new Date().getDay() - 1, // today's day index, starting monday
  selectedWeekIndex: getWeek(new Date()), // current week index
  selectedYear: new Date().getFullYear()
};

console.log({
  trainingPlan,
  day: new Date().getDay() - 1,
  week: getWeek(new Date()),
  year: new Date().getFullYear
});



const workoutReducer = createReducer(workoutInitialState, {
  SET_TRAINING_PLAN(state: WorkoutState, action: PayloadAction<TrainingPlan>) { state.trainingPlan = action.payload },
  SET_EXERCISE_COMPLETED(state: WorkoutState, action: PayloadAction<CustomisedExercise>) {
    // would be easier with reference, just mutate the model
    const workoutSessionForSelectedYear = state.trainingPlan?.workoutSessionsByYear.find((workoutSession: { year: number }) => workoutSession.year === state.selectedYear);
    const workoutSessionForSelectedWeek = workoutSessionForSelectedYear?.workoutSessionsByWeek
      .find((workoutSession: { week: number, workoutSessions: WorkoutSession[] }) => workoutSession.week = state.selectedWeekIndex)
    if (workoutSessionForSelectedWeek) {
      const workoutSessionForSelectedDay = workoutSessionForSelectedWeek.workoutSessions.find((workoutSession: { day: number, exercises: CustomisedExercise[] }) => workoutSession.day === state.selectedDayIndex);
      if (workoutSessionForSelectedDay) {
        workoutSessionForSelectedDay.exercises.forEach((exercise: CustomisedExercise) => { if (exercise.id === action.payload.id) { exercise.completed = true; } })
      }
    }
    if (state.selectedExercise) state.selectedExercise.completed = true;
  },
  SET_EXERCISE_INCOMPLETE(state: WorkoutState, action: PayloadAction<CustomisedExercise>) {
    // would be easier with reference, just mutate the model
    const workoutSessionForSelectedYear = state.trainingPlan?.workoutSessionsByYear.find((workoutSession: { year: number }) => workoutSession.year === state.selectedYear);

    const workoutSessionForSelectedWeek = workoutSessionForSelectedYear?.workoutSessionsByWeek
      .find((workoutSession: { week: number, workoutSessions: WorkoutSession[] }) => workoutSession.week = state.selectedWeekIndex)
    if (workoutSessionForSelectedWeek) {
      const workoutSessionForSelectedDay = workoutSessionForSelectedWeek.workoutSessions.find((workoutSession: { day: number, exercises: CustomisedExercise[] }) => workoutSession.day === state.selectedDayIndex);
      if (workoutSessionForSelectedDay) {
        workoutSessionForSelectedDay.exercises.forEach((exercise: CustomisedExercise) => { if (exercise.id === action.payload.id) { exercise.completed = false; } })
      }
    }
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
    console.log('setting selected year. Was', state.selectedYear, 'becoming', action.payload);
    state.selectedYear = action.payload
  },
})

export const rootReducer = combineReducers({
  auth: authReducer,
  workout: workoutReducer,
})
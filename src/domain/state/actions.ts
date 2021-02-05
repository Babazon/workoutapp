import { createAction } from "@reduxjs/toolkit";
import { SET_EMAIL, SET_PASSWORD, LOGIN_SUCCESS, LOGIN_FAIL, SET_USER, LOGOUT, LOGIN, SET_TRAINING_PLAN, SET_EXERCISE_COMPLETED, SET_EXERCISE_INCOMPLETE, SET_SELECTED_EXERCISE, SET_SELECTED_DAY_INDEX, SET_SELECTED_WEEK_INDEX, SET_SELECTED_YEAR, SET_SESSION_ACTIVE, SET_SESSION_INACTIVE } from "./actionTypes";
import { User } from "../models/User.model";
import { TrainingPlan } from "../models/TrainingPlan";
import { CustomisedExercise } from "../models/CustomisedExercise.model";

export const setEmail = createAction<string>(SET_EMAIL);
export const setPassword = createAction<string>(SET_PASSWORD);
export const loginSuccess = createAction(LOGIN_SUCCESS);
export const loginFail = createAction(LOGIN_FAIL);
export const setUser = createAction<User>(SET_USER);
export const logout = createAction(LOGOUT);
export const login = createAction(LOGIN);

export const setTrainingPlan = createAction<TrainingPlan>(SET_TRAINING_PLAN);
export const setExerciseCompleted = createAction<CustomisedExercise>(SET_EXERCISE_COMPLETED);
export const setExerciseIncomplete = createAction<CustomisedExercise>(SET_EXERCISE_INCOMPLETE);
export const setSelectedExercise = createAction<CustomisedExercise>(SET_SELECTED_EXERCISE);
export const setSelectedDayIndex = createAction<number>(SET_SELECTED_DAY_INDEX);
export const setSelectedWeekIndex = createAction<number>(SET_SELECTED_WEEK_INDEX);
export const setSelectedYear = createAction<number>(SET_SELECTED_YEAR);
export const startWorkoutSession = createAction(SET_SESSION_ACTIVE);
export const stopWorkoutSession = createAction(SET_SESSION_INACTIVE);
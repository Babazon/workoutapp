import { RootState } from "./redux";
import { WorkoutSession } from "../models/WorkoutSession.model";

export const getEmail = (state: RootState) => state.auth.email;
export const getPassword = (state: RootState) => state.auth.password;
export const getLoggedIn = (state: RootState) => state.auth.loggedIn;
export const getShowError = (state: RootState) => state.auth.showError;

export const getExerciseTitle = (state: RootState) => state.workout.selectedExercise?.name
export const getTodayExercise = (state: RootState) => state.workout.trainingPlan?.workoutSessions.find((session: WorkoutSession) => session.day === new Date().getDay())
export const getExercisesForSelectedIndex = (state: RootState) => state.workout.trainingPlan?.workoutSessions.find((session: WorkoutSession) => session.day === state.workout.selectedDayIndex)?.exercises;
export const getSelectedDayIndex = (state: RootState) => state.workout.selectedDayIndex
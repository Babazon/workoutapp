import { RootState } from "./redux";
import { WorkoutSession } from "../models/WorkoutSession.model";
import { getWeek } from "../../util/getWeekIndex";

export const getEmail = (state: RootState) => state.auth.email;
export const getPassword = (state: RootState) => state.auth.password;
export const getLoggedIn = (state: RootState) => state.auth.loggedIn;
export const getShowError = (state: RootState) => state.auth.showError;

export const getExerciseTitle = (state: RootState) => state.workout.selectedExercise?.name
export const getTodayExercise = (state: RootState) => {
  const workoutForYear = state.workout.trainingPlan?.workoutSessionsByYear.find((session: { year: number }) => session.year === new Date().getFullYear());
  const workoutForWeek = workoutForYear?.workoutSessionsByWeek.find((session: { week: number, workoutSessions: WorkoutSession[] }) => session.week === getWeek(new Date()));
  return workoutForWeek?.workoutSessions.find((session: WorkoutSession) => session.day === new Date().getDay() - 1)?.exercises ?? []; // getDay() -1 because Date week starts on sunday
}
export const getExercisesForSelectedIndex = (state: RootState) => {
  const workoutForYear = state.workout.trainingPlan?.workoutSessionsByYear.find((session: { year: number }) => session.year === state.workout.selectedYear);
  const workoutForWeek = workoutForYear?.workoutSessionsByWeek.find((session: { week: number, workoutSessions: WorkoutSession[] }) => session.week === state.workout.selectedWeekIndex);
  return workoutForWeek?.workoutSessions.find((session: WorkoutSession) => session.day === state.workout.selectedDayIndex)?.exercises ?? [];
}
export const getSelectedDayIndex = (state: RootState) => state.workout.selectedDayIndex
export const getSelectedWeekIndex = (state: RootState) => state.workout.selectedWeekIndex
export const getSelectedYear = (state: RootState) => state.workout.selectedYear
import { RootState } from "./redux";
import { WorkoutSession } from "../models/WorkoutSession.model";
import { getWeek } from "../../util/getWeekIndex";
import { CustomisedExercise } from "../models/CustomisedExercise.model";

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
  const exercises = (workoutForWeek?.workoutSessions.find((session: WorkoutSession) => session.day === state.workout.selectedDayIndex)?.exercises ?? []);
  const sortedExercises = exercises.concat().sort((firstExercise: CustomisedExercise, secondExercise: CustomisedExercise) => {
    if (firstExercise.orderToBePerformed != null && secondExercise.orderToBePerformed != null) {
      if (firstExercise.orderToBePerformed < secondExercise.orderToBePerformed) return -1;
      if (firstExercise.orderToBePerformed > secondExercise.orderToBePerformed) return 1;
    }
    return 0;
  });
  return sortedExercises;
}
export const getSelectedDayIndex = (state: RootState) => state.workout.selectedDayIndex
export const getSelectedWeekIndex = (state: RootState) => state.workout.selectedWeekIndex
export const getSelectedYear = (state: RootState) => state.workout.selectedYear
export const workoutSessionActive = (state: RootState) => state.workout.sessionActive
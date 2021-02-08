import { CustomisedExercise } from "../domain/models/CustomisedExercise.model";
import { WorkoutSession } from "../domain/models/WorkoutSession.model";
import { WorkoutState } from "../domain/state/reducers";

export const findAndToggleExercise = (state: WorkoutState, payload: CustomisedExercise, toggleTo: boolean) => {
  const newState = { ...state };

  const workoutSessionForSelectedYear = newState.trainingPlan?.workoutSessionsByYear.find((workoutSession: { year: number }) => workoutSession.year === state.selectedYear);

  const workoutSessionForSelectedWeek = workoutSessionForSelectedYear?.workoutSessionsByWeek.find((workoutSession: { week: number, workoutSessions: WorkoutSession[] }) => workoutSession.week = state.selectedWeekIndex)

  if (workoutSessionForSelectedWeek) {
    const workoutSessionForSelectedDay = workoutSessionForSelectedWeek.workoutSessions.find((workoutSession: { day: number, exercises: CustomisedExercise[] }) => workoutSession.day === state.selectedDayIndex);
    if (workoutSessionForSelectedDay) {
      workoutSessionForSelectedDay.exercises.forEach((exercise: CustomisedExercise) => {
        if (exercise.id === payload.id) {
          exercise.completed = toggleTo;
        }
        // Business requirement to complete any exercise with lower ordertoBePerformed index if this property exists, and the call was made to "complete" as exercise
        if (exercise.orderToBePerformed != null && payload.orderToBePerformed != null && exercise.orderToBePerformed < payload.orderToBePerformed && toggleTo) {
          exercise.completed = true
        }
      })
    }
  }
  return newState;
}
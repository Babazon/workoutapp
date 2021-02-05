import { CustomisedExercise } from "../src/domain/models/CustomisedExercise.model";
import { WorkoutState } from "../src/domain/state/reducers";
import trainingPlan from "../src/mocks/mockTrainingPlan";
import { findAndToggleExercise } from "../src/util/findAndtoggleExercise";

describe('Toggle Exercise Completed', () => {


  let state: WorkoutState;

  beforeEach(() => {
    state = {
      trainingPlan: trainingPlan,
      selectedDayIndex: 0, // today's day index, starting monday
      selectedWeekIndex: 1, // current week index
      selectedYear: 2021,
      sessionActive: false,
      selectedExercise: undefined
    };
  })

  it('Finds exercise in state, toggles it true or false', () => {
    const exercise = state.trainingPlan?.workoutSessionsByYear[0].workoutSessionsByWeek[0].workoutSessions[0].exercises[0];
    if (exercise) {
      state.selectedExercise = exercise;
      state = findAndToggleExercise(state, exercise, true);
      expect(state.trainingPlan?.workoutSessionsByYear[0].workoutSessionsByWeek[0].workoutSessions[0].exercises[0].completed).toBeTruthy();
      expect(state.selectedExercise?.completed).toBeTruthy();
    }
  });

  it('Doesnt do anything if it cant find the exercise', () => {
    const exercise = new CustomisedExercise();
    exercise.id = '666';
    exercise.completed = false;
    if (exercise) {
      state.selectedExercise = exercise;
      state = findAndToggleExercise(state, exercise, true);
      expect(state.selectedExercise?.completed).toBeFalsy();
    }
  })
});
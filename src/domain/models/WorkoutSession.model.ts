import { CustomisedExercise } from './CustomisedExercise.model';

export class WorkoutSession {
  exercises: CustomisedExercise[];
  day: number; // weekdays indexed 0 to 6
}

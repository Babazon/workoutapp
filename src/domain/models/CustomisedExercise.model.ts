import { Exercise } from "./Exercise.model";

export class CustomisedExercise extends Exercise {
  duration?: number;
  reps?: number;
  completed: boolean
}

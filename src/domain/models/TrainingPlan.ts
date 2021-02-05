import { Trainer } from "./Trainer.model";
import { User } from "./User.model";
import { WorkoutSession } from './WorkoutSession.model';

export class TrainingPlan {
  workoutSessions: { week: number, workoutSessions: WorkoutSession[] }[];
  assignee: User;
  assigner: Trainer;
}

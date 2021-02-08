import * as uuid from 'uuid';
import { TrainingPlan } from '../domain/models/TrainingPlan';
import { ExerciseName } from '../domain/models/Exercise.model';

const trainingPlan: TrainingPlan = {
  assignee: {
    birthdate: "01.02.1981",
    firstname: "Bas",
    id: uuid.v4(),
    images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
    lastname: "Yuksel",
    startWeight: 100
  },
  assigner: {
    id: uuid.v4(),
    image: "https://via.placeholder.com/300",
    name: "Jessica"
  },
  workoutSessionsByYear: [{
    year: 2021,
    workoutSessionsByWeek: [
      {
        week: 1,
        workoutSessions: [{
          day: 0,
          exercises: [{
            orderToBePerformed: 0,
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.pushUp,
            reps: 20,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 1,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.sitUp,
            reps: 100,
            videos: []
          }, {
            orderToBePerformed: 2,
            completed: false,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.plank,
            videos: []
          }]
        }, {
          day: 1,
          exercises: [{
            completed: false,
            orderToBePerformed: 0,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.crunch,
            reps: 120,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 1,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.squat,
            reps: 100,
            videos: []
          }]
        }, {
          day: 2,
          exercises: [{
            completed: false,
            orderToBePerformed: 0,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.reverseCrunch,
            reps: 200,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 1,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.bicepCurl,
            reps: 500,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 2,
            description: "just do it",
            duration: 50,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.plank,
            videos: []
          }]
        }, {
          day: 3,
          exercises: [{
            completed: false,
            orderToBePerformed: 0,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.pullUp,
            reps: 10,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 1,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.legCurls,
            reps: 100,
            videos: []
          }]
        }, {
          day: 4,
          exercises: [{
            completed: false,
            orderToBePerformed: 0,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.pushUp,
            reps: 20,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 1,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.sitUp,
            reps: 100,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 2,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.plank,
            videos: []
          }]
        }, {
          day: 5,
          exercises: [{
            completed: false,
            orderToBePerformed: 0,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.sitUp,
            reps: 20,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 1,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.pullUp,
            reps: 10,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 2,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.plank,
            videos: []
          }]
        }, {
          day: 6,
          exercises: [{
            completed: false,
            orderToBePerformed: 0,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.sitUp,
            reps: 20,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 1,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.pullUp,
            reps: 10,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 2,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.plank,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 3,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.sitUp,
            reps: 100,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 4,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.plank,
            videos: []
          }]
        }]
      },
      {
        week: 2,
        workoutSessions: [{
          day: 0,
          exercises: [{
            orderToBePerformed: 0,
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.pushUp,
            reps: 20,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 1,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.sitUp,
            reps: 100,
            videos: []
          }, {
            orderToBePerformed: 2,
            completed: false,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.plank,
            videos: []
          }]
        }, {
          day: 1,
          exercises: [{
            completed: false,
            orderToBePerformed: 0,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.crunch,
            reps: 120,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 1,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.squat,
            reps: 100,
            videos: []
          }]
        }, {
          day: 2,
          exercises: [{
            completed: false,
            orderToBePerformed: 0,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.reverseCrunch,
            reps: 200,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 1,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.bicepCurl,
            reps: 500,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 2,
            description: "just do it",
            duration: 50,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.plank,
            videos: []
          }]
        }, {
          day: 3,
          exercises: [{
            completed: false,
            orderToBePerformed: 0,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.pullUp,
            reps: 10,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 1,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.legCurls,
            reps: 100,
            videos: []
          }]
        }, {
          day: 4,
          exercises: [{
            completed: false,
            orderToBePerformed: 0,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.pushUp,
            reps: 20,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 1,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.sitUp,
            reps: 100,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 2,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.plank,
            videos: []
          }]
        }, {
          day: 5,
          exercises: [{
            completed: false,
            orderToBePerformed: 0,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.sitUp,
            reps: 20,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 1,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.pullUp,
            reps: 10,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 2,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.plank,
            videos: []
          }]
        }, {
          day: 6,
          exercises: [{
            completed: false,
            orderToBePerformed: 0,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.sitUp,
            reps: 20,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 1,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.pullUp,
            reps: 10,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 2,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.plank,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 3,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.sitUp,
            reps: 100,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 4,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.plank,
            videos: []
          }]
        }]
      },
      {
        week: 3,
        workoutSessions: [{
          day: 0,
          exercises: [{
            orderToBePerformed: 0,
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.pushUp,
            reps: 20,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 1,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.sitUp,
            reps: 100,
            videos: []
          }, {
            orderToBePerformed: 2,
            completed: false,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.plank,
            videos: []
          }]
        }, {
          day: 1,
          exercises: [{
            completed: false,
            orderToBePerformed: 0,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.crunch,
            reps: 120,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 1,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.squat,
            reps: 100,
            videos: []
          }]
        }, {
          day: 2,
          exercises: [{
            completed: false,
            orderToBePerformed: 0,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.reverseCrunch,
            reps: 200,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 1,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.bicepCurl,
            reps: 500,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 2,
            description: "just do it",
            duration: 50,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.plank,
            videos: []
          }]
        }, {
          day: 3,
          exercises: [{
            completed: false,
            orderToBePerformed: 0,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.pullUp,
            reps: 10,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 1,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.legCurls,
            reps: 100,
            videos: []
          }]
        }, {
          day: 4,
          exercises: [{
            completed: false,
            orderToBePerformed: 0,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.pushUp,
            reps: 20,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 1,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.sitUp,
            reps: 100,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 2,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.plank,
            videos: []
          }]
        }, {
          day: 5,
          exercises: [{
            completed: false,
            orderToBePerformed: 0,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.sitUp,
            reps: 20,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 1,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.pullUp,
            reps: 10,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 2,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.plank,
            videos: []
          }]
        }, {
          day: 6,
          exercises: [{
            completed: false,
            orderToBePerformed: 0,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.sitUp,
            reps: 20,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 1,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.pullUp,
            reps: 10,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 2,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.plank,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 3,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.sitUp,
            reps: 100,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 4,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.plank,
            videos: []
          }]
        }]
      },
      {
        week: 4,
        workoutSessions: [{
          day: 0,
          exercises: [{
            orderToBePerformed: 0,
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.pushUp,
            reps: 20,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 1,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.sitUp,
            reps: 100,
            videos: []
          }, {
            orderToBePerformed: 2,
            completed: false,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.plank,
            videos: []
          }]
        }, {
          day: 1,
          exercises: [{
            completed: false,
            orderToBePerformed: 0,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.crunch,
            reps: 120,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 1,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.squat,
            reps: 100,
            videos: []
          }]
        }, {
          day: 2,
          exercises: [{
            completed: false,
            orderToBePerformed: 0,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.reverseCrunch,
            reps: 200,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 1,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.bicepCurl,
            reps: 500,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 2,
            description: "just do it",
            duration: 50,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.plank,
            videos: []
          }]
        }, {
          day: 3,
          exercises: [{
            completed: false,
            orderToBePerformed: 0,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.pullUp,
            reps: 10,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 1,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.legCurls,
            reps: 100,
            videos: []
          }]
        }, {
          day: 4,
          exercises: [{
            completed: false,
            orderToBePerformed: 0,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.pushUp,
            reps: 20,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 1,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.sitUp,
            reps: 100,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 2,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.plank,
            videos: []
          }]
        }, {
          day: 5,
          exercises: [{
            completed: false,
            orderToBePerformed: 0,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.sitUp,
            reps: 20,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 1,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.pullUp,
            reps: 10,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 2,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.plank,
            videos: []
          }]
        }, {
          day: 6,
          exercises: [{
            completed: false,
            orderToBePerformed: 0,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.sitUp,
            reps: 20,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 1,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.pullUp,
            reps: 10,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 2,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.plank,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 3,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.sitUp,
            reps: 100,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 4,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.plank,
            videos: []
          }]
        }]
      },
      {
        week: 5,
        workoutSessions: [{
          day: 0,
          exercises: [{
            orderToBePerformed: 0,
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.pushUp,
            reps: 20,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 1,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.sitUp,
            reps: 100,
            videos: []
          }, {
            orderToBePerformed: 2,
            completed: false,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.plank,
            videos: []
          }]
        }, {
          day: 1,
          exercises: [{
            completed: false,
            orderToBePerformed: 0,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.crunch,
            reps: 120,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 1,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.squat,
            reps: 100,
            videos: []
          }]
        }, {
          day: 2,
          exercises: [{
            completed: false,
            orderToBePerformed: 0,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.reverseCrunch,
            reps: 200,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 1,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.bicepCurl,
            reps: 500,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 2,
            description: "just do it",
            duration: 50,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.plank,
            videos: []
          }]
        }, {
          day: 3,
          exercises: [{
            completed: false,
            orderToBePerformed: 0,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.pullUp,
            reps: 10,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 1,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.legCurls,
            reps: 100,
            videos: []
          }]
        }, {
          day: 4,
          exercises: [{
            completed: false,
            orderToBePerformed: 0,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.pushUp,
            reps: 20,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 1,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.sitUp,
            reps: 100,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 2,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.plank,
            videos: []
          }]
        }, {
          day: 5,
          exercises: [{
            completed: false,
            orderToBePerformed: 0,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.sitUp,
            reps: 20,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 1,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.pullUp,
            reps: 10,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 2,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.plank,
            videos: []
          }]
        }, {
          day: 6,
          exercises: [{
            completed: false,
            orderToBePerformed: 0,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.sitUp,
            reps: 20,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 1,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.pullUp,
            reps: 10,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 2,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.plank,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 3,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.sitUp,
            reps: 100,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 4,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.plank,
            videos: []
          }]
        }]
      },
      {
        week: 6,
        workoutSessions: [{
          day: 0,
          exercises: [{
            orderToBePerformed: 0,
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.pushUp,
            reps: 20,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 1,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.sitUp,
            reps: 100,
            videos: []
          }, {
            orderToBePerformed: 2,
            completed: false,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.plank,
            videos: []
          }]
        }, {
          day: 1,
          exercises: [{
            completed: false,
            orderToBePerformed: 0,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.crunch,
            reps: 120,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 1,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.squat,
            reps: 100,
            videos: []
          }]
        }, {
          day: 2,
          exercises: [{
            completed: false,
            orderToBePerformed: 0,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.reverseCrunch,
            reps: 200,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 1,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.bicepCurl,
            reps: 500,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 2,
            description: "just do it",
            duration: 50,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.plank,
            videos: []
          }]
        }, {
          day: 3,
          exercises: [{
            completed: false,
            orderToBePerformed: 0,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.pullUp,
            reps: 10,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 1,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.legCurls,
            reps: 100,
            videos: []
          }]
        }, {
          day: 4,
          exercises: [{
            completed: false,
            orderToBePerformed: 0,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.pushUp,
            reps: 20,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 1,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.sitUp,
            reps: 100,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 2,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.plank,
            videos: []
          }]
        }, {
          day: 5,
          exercises: [{
            completed: false,
            orderToBePerformed: 0,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.sitUp,
            reps: 20,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 1,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.pullUp,
            reps: 10,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 2,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.plank,
            videos: []
          }]
        }, {
          day: 6,
          exercises: [{
            completed: false,
            orderToBePerformed: 0,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.sitUp,
            reps: 20,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 1,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.pullUp,
            reps: 10,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 2,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.plank,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 3,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.sitUp,
            reps: 100,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 4,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.plank,
            videos: []
          }]
        }]
      },
      {
        week: 7,
        workoutSessions: [{
          day: 0,
          exercises: [{
            orderToBePerformed: 0,
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.pushUp,
            reps: 20,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 1,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.sitUp,
            reps: 100,
            videos: []
          }, {
            orderToBePerformed: 2,
            completed: false,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.plank,
            videos: []
          }]
        }, {
          day: 1,
          exercises: [{
            completed: false,
            orderToBePerformed: 0,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.crunch,
            reps: 120,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 1,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.squat,
            reps: 100,
            videos: []
          }]
        }, {
          day: 2,
          exercises: [{
            completed: false,
            orderToBePerformed: 0,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.reverseCrunch,
            reps: 200,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 1,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.bicepCurl,
            reps: 500,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 2,
            description: "just do it",
            duration: 50,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.plank,
            videos: []
          }]
        }, {
          day: 3,
          exercises: [{
            completed: false,
            orderToBePerformed: 0,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.pullUp,
            reps: 10,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 1,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.legCurls,
            reps: 100,
            videos: []
          }]
        }, {
          day: 4,
          exercises: [{
            completed: false,
            orderToBePerformed: 0,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.pushUp,
            reps: 20,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 1,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.sitUp,
            reps: 100,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 2,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.plank,
            videos: []
          }]
        }, {
          day: 5,
          exercises: [{
            completed: false,
            orderToBePerformed: 0,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.sitUp,
            reps: 20,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 1,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.pullUp,
            reps: 10,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 2,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.plank,
            videos: []
          }]
        }, {
          day: 6,
          exercises: [{
            completed: false,
            orderToBePerformed: 0,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.sitUp,
            reps: 20,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 1,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.pullUp,
            reps: 10,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 2,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.plank,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 3,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.sitUp,
            reps: 100,
            videos: []
          }, {
            completed: false,
            orderToBePerformed: 4,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: ExerciseName.plank,
            videos: []
          }]
        }]
      },
    ]
  }
  ]
};

export default trainingPlan;